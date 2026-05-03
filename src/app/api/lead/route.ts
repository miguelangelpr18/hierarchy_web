import { NextResponse } from "next/server";
import { Resend } from "resend";

interface LeadPayload {
  url?: string;
  businessType?: string;
  email?: string;
  whatsapp?: string;
  source?: string;
}

const TO = "miguelangelpenar18@gmail.com";

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.whatsapp || !body.businessType) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const html = `
    <h2 style="font-family:sans-serif;color:#0F0F12;">Nueva solicitud de auditoría — Hierarchy</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:480px;">
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Tipo de negocio</td><td style="padding:8px 12px;">${body.businessType}</td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Email</td><td style="padding:8px 12px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">WhatsApp</td><td style="padding:8px 12px;">${body.whatsapp}</td></tr>
      ${body.url ? `<tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Sitio actual</td><td style="padding:8px 12px;"><a href="${body.url}">${body.url}</a></td></tr>` : ""}
      <tr><td style="padding:8px 12px;background:#F6F4ED;font-weight:600;">Fuente</td><td style="padding:8px 12px;">${body.source ?? "audit-form"}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#71717A;margin-top:24px;">Recibido: ${new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" })}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY no configurada. Lead recibido:", {
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
      subject: `Auditoría: ${body.businessType} — ${body.email}`,
      html,
    });
  } catch (err) {
    console.error("[lead] Resend error:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
