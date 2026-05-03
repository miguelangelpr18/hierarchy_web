import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  business?: string;
  email?: string;
  whatsapp?: string;
  plan?: string;
  currentUrl?: string;
  message?: string;
}

const TO = "miguelangelpenar18@gmail.com";

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["name", "business", "email", "whatsapp", "message"] as const;
  const missing = required.filter((k) => !body[k]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const planLabel = body.plan || "No especificado";
  const html = `
    <h2 style="font-family:sans-serif;color:#0F0F12;">Nuevo contacto — Hierarchy</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Nombre</td><td style="padding:8px 12px;">${body.name}</td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Negocio</td><td style="padding:8px 12px;">${body.business}</td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Email</td><td style="padding:8px 12px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">WhatsApp</td><td style="padding:8px 12px;">${body.whatsapp}</td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Plan</td><td style="padding:8px 12px;">${planLabel}</td></tr>
      ${body.currentUrl ? `<tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">URL actual</td><td style="padding:8px 12px;"><a href="${body.currentUrl}">${body.currentUrl}</a></td></tr>` : ""}
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;vertical-align:top;">Mensaje</td><td style="padding:8px 12px;white-space:pre-wrap;">${body.message}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#71717A;margin-top:24px;">Recibido: ${new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" })}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sin clave configurada: loguea el lead para que no se pierda y avisa al frontend
    console.error("[contact] RESEND_API_KEY no configurada. Lead recibido:", {
      receivedAt: new Date().toISOString(),
      ...body,
    });
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Hierarchy <onboarding@resend.dev>",
      to: TO,
      replyTo: body.email,
      subject: `Nuevo contacto: ${body.name} — ${body.business}`,
      html,
    });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
