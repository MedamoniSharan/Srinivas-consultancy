# PayPal Sandbox Express API

Small **Express** service for:

- Creating PayPal **Sandbox** checkout orders
- Capturing payment after approval
- Sending a **Payment Successful** receipt email via **SMTP** (Nodemailer)

Base URL in code: `https://api-m.sandbox.paypal.com` (Sandbox only).

## Requirements

- Node.js **18+** (recommended: **20+** to match the monorepo web app)
- PayPal **Sandbox** app credentials from the [PayPal Developer Dashboard](https://developer.paypal.com/)
- SMTP credentials for outbound mail

## Install

```bash
cd anything/backend/paypal-sandbox-express
npm install
```

## Configure

```bash
cp .env.example .env
```

Edit `.env` and set at minimum:

| Variable | Description |
|----------|-------------|
| `PAYPAL_CLIENT_ID` | Sandbox client ID |
| `PAYPAL_SECRET` | Sandbox secret |
| `SMTP_HOST` | SMTP hostname |
| `SMTP_PORT` | e.g. `587` |
| `SMTP_USER` | SMTP login |
| `SMTP_PASS` | SMTP password |

Optional:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5001` | HTTP listen port |
| `PAYPAL_ORDER_AMOUNT` | `49.00` | Order total (string, two decimals typical) |
| `PAYPAL_ORDER_CURRENCY` | `USD` | ISO currency code |
| `SMTP_SECURE` | — | Set `true` if using TLS on port 465 |
| `SMTP_FROM` | `SMTP_USER` | From header for outgoing mail |

## Run locally

```bash
npm start
```

You should see: `PayPal sandbox backend running on http://localhost:<PORT>`.

## HTTP API

### `POST /api/create-order`

Creates a Sandbox order for `PAYPAL_ORDER_AMOUNT` + `PAYPAL_ORDER_CURRENCY`.

**Response (200):**

```json
{ "orderID": "..." }
```

### `POST /api/capture-order`

**Body (JSON):**

```json
{
  "orderID": "<paypal order id>",
  "email": "customer@example.com"
}
```

Captures the order. If status is `COMPLETED`, sends the receipt email.

**Response (200):** includes `success`, `orderID`, `status`, `amount`, `currency`, `message`.

## Deploy on Render

1. Create a **Web Service**, connect this repository.
2. **Root Directory:** `anything/backend/paypal-sandbox-express` (relative path; no leading `/`).
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. Add the same variables as in `.env` under **Environment** (use Render’s `PORT` or omit `PORT` and let Render inject it).

After deploy, point the frontend `VITE_PAYPAL_BACKEND_URL` (or equivalent) to your Render URL, e.g. `https://your-service.onrender.com` (no trailing slash).

## Notes

- This service uses **Sandbox** endpoints only. For production, switch base URL, credentials, and add server-side validation / webhooks as required by PayPal.
- `cors()` is open by default; tighten `origin` in production if needed.
