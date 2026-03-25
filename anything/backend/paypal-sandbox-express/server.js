const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const fetch = (...args) => import("node-fetch").then(({ default: fetchFn }) => fetchFn(...args));

const app = express();
const PORT = Number(process.env.PORT || 5001);

const PAYPAL_BASE_URL = "https://api-m.sandbox.paypal.com";
const DEFAULT_ORDER_AMOUNT = process.env.PAYPAL_ORDER_AMOUNT || "49.00";
const DEFAULT_ORDER_CURRENCY = process.env.PAYPAL_ORDER_CURRENCY || "USD";
const MIN_AMOUNT = Number(process.env.PAYPAL_MIN_AMOUNT || 0.01);
const MAX_AMOUNT = Number(process.env.PAYPAL_MAX_AMOUNT || 10000);

app.use(cors());
app.use(express.json());

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function getPayPalAccessToken() {
  const clientId = getRequiredEnv("PAYPAL_CLIENT_ID");
  const secret = getRequiredEnv("PAYPAL_SECRET");
  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || "Failed to generate PayPal access token");
  }

  return data.access_token;
}

function normalizeCurrency(currency) {
  if (!currency) return DEFAULT_ORDER_CURRENCY;
  return String(currency).trim().toUpperCase();
}

function normalizeAmount(value) {
  if (value === undefined || value === null || value === "") return DEFAULT_ORDER_AMOUNT;
  const raw = typeof value === "number" ? String(value) : String(value).trim();
  if (!/^\d+(\.\d{1,2})?$/.test(raw)) {
    throw new Error("Invalid amount format. Use up to 2 decimal places.");
  }
  const numeric = Number(raw);
  if (!Number.isFinite(numeric)) {
    throw new Error("Invalid amount.");
  }
  if (numeric < MIN_AMOUNT) {
    throw new Error(`Amount must be at least ${MIN_AMOUNT}.`);
  }
  if (numeric > MAX_AMOUNT) {
    throw new Error(`Amount must be at most ${MAX_AMOUNT}.`);
  }
  return numeric.toFixed(2);
}

async function createPayPalOrder(accessToken, { amount, currency }) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
        },
      ],
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.id) {
    throw new Error(data.message || "Failed to create PayPal order");
  }

  return data;
}

async function capturePayPalOrder(accessToken, orderId) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to capture PayPal payment");
  }

  return data;
}

function createTransporter() {
  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const secure = process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function getCapturedAmount(capture) {
  const amount = capture?.purchase_units?.[0]?.payments?.captures?.[0]?.amount;
  if (!amount?.value || !amount?.currency_code) return null;
  return { value: amount.value, currency: amount.currency_code };
}

async function sendReceiptEmail({ toEmail, orderId, paymentStatus, amount }) {
  const transporter = createTransporter();
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const formattedAmount = amount?.value && amount?.currency ? `${amount.value} ${amount.currency}` : "N/A";

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: "Payment Successful",
    text: [
      "Your payment was successful.",
      `Amount: ${formattedAmount}`,
      `Order ID: ${orderId}`,
      `Payment status: ${paymentStatus}`,
    ].join("\n"),
  });
}

app.post("/api/create-order", async (req, res) => {
  try {
    const { amount, currency } = req.body || {};
    const normalizedAmount = normalizeAmount(amount);
    const normalizedCurrency = normalizeCurrency(currency);

    const accessToken = await getPayPalAccessToken();
    const order = await createPayPalOrder(accessToken, {
      amount: normalizedAmount,
      currency: normalizedCurrency,
    });

    res.status(200).json({
      orderID: order.id,
    });
  } catch (error) {
    res.status(500).json({
      error: "Unable to create PayPal order",
      details: error.message,
    });
  }
});

app.post("/api/capture-order", async (req, res) => {
  const { orderID, email } = req.body || {};

  if (!orderID || !email) {
    return res.status(400).json({
      error: "orderID and email are required",
    });
  }

  try {
    const accessToken = await getPayPalAccessToken();
    const capture = await capturePayPalOrder(accessToken, orderID);

    if (capture.status !== "COMPLETED") {
      return res.status(400).json({
        error: "Payment not completed",
        status: capture.status,
      });
    }

    const capturedAmount = getCapturedAmount(capture);

    await sendReceiptEmail({
      toEmail: email,
      orderId: orderID,
      paymentStatus: capture.status,
      amount: capturedAmount,
    });

    return res.status(200).json({
      success: true,
      orderID,
      status: capture.status,
      amount: capturedAmount?.value ? `$${capturedAmount.value}` : undefined,
      currency: capturedAmount?.currency || DEFAULT_ORDER_CURRENCY,
      message: "Payment captured and receipt email sent",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Unable to capture PayPal order",
      details: error.message,
    });
  }
});

app.use((err, _req, res, _next) => {
  res.status(500).json({
    error: "Server error",
    details: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`PayPal sandbox backend running on http://localhost:${PORT}`);
});
