import nodemailer from "nodemailer";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getRequiredEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
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

export async function POST(request) {
  try {
    const form = await request.formData();
    const firstName = String(form.get("firstName") || "").trim();
    const lastName = String(form.get("lastName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const position = String(form.get("position") || "").trim();
    const resume = form.get("resume");

    if (!firstName || !lastName || !email || !phone || !position) {
      return json({ error: "Missing required fields." }, 400);
    }
    if (!resume || typeof resume === "string") {
      return json({ error: "Resume file is required." }, 400);
    }

    const arrayBuffer = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    const transporter = createTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to: email,
      subject: "Application Received",
      text: [
        `Hi ${firstName} ${lastName},`,
        "",
        "We received your application successfully.",
        "",
        `Position: ${position}`,
        `Phone: ${phone}`,
        "",
        "Our team will review your profile and get back to you soon.",
        "",
        "Thank you,",
        "TelivAI Solutions",
      ].join("\n"),
      attachments: [
        {
          filename: resume.name || "resume",
          content: resumeBuffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
    });

    return json({ success: true });
  } catch (error) {
    return json({ error: error.message || "Failed to submit application." }, 500);
  }
}

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }
  return POST(request);
}

