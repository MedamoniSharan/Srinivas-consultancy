import nodemailer from "nodemailer";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !port || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

export async function POST(request) {
  try {
    const config = getTransportConfig();
    if (!config) {
      return jsonResponse({ error: "SMTP server is not configured." }, 500);
    }

    const payload = await request.json();
    const { to, subject, text, html } = payload || {};

    if (!to || !subject || (!text && !html)) {
      return jsonResponse({ error: "Missing required email fields." }, 400);
    }

    const from = process.env.SMTP_FROM || config.auth.user;
    const transporter = nodemailer.createTransport(config);

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    return jsonResponse({
      success: true,
      messageId: info.messageId,
    });
  } catch (_error) {
    return jsonResponse({ error: "Failed to send receipt email." }, 500);
  }
}

export async function action({ request }) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }
  return POST(request);
}
