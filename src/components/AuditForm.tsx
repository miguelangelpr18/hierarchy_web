"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "error";

export function AuditForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "audit-form" }),
      });
      if (!res.ok) throw new Error("Error en el servidor");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-lime-700/30 bg-lime-400/30 p-8 text-center">
        <p className="text-lg font-semibold text-ink-800">
          Recibido. Te mandamos la auditoría por WhatsApp en menos de 24 horas hábiles.
        </p>
        <p className="mt-2 text-sm text-ink-500">
          Si quieres que platiquemos antes, escríbenos directo por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-ink-800/10 bg-bone-50 p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          name="url"
          label="URL del sitio actual"
          placeholder="ejemplo.com (déjalo vacío si no tienes)"
          autoComplete="url"
        />
        <Field
          name="businessType"
          label="Tipo de negocio"
          placeholder="Restaurante, dentista, taller…"
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="hierarchywebagency@gmail.com"
          autoComplete="email"
          required
        />
        <Field
          name="whatsapp"
          type="tel"
          label="WhatsApp"
          placeholder="52 81 2717 9766"
          autoComplete="tel"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "loading" ? "Enviando…" : "Quiero mi auditoría gratis"}
        <ArrowRight size={16} />
      </button>
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          No pudimos enviar tu solicitud por aquí.{" "}
          <a
            href="https://wa.me/528127179766?text=Hola%2C%20quiero%20la%20auditor%C3%ADa%20gratis%20de%20mi%20sitio."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            Escríbenos por WhatsApp
          </a>{" "}
          y te la mandamos igual.
        </div>
      )}
      <p className="text-xs text-ink-300">
        Sin spam. Usamos tus datos solo para responderte.
      </p>
    </form>
  );
}

interface FieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

function Field({ name, label, type = "text", placeholder, autoComplete, required }: FieldProps) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-medium text-ink-400">
        {label}
        {required && <span className="ml-0.5 text-ink-300">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="rounded-lg border border-ink-800/15 bg-bone-50 px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-ink-200 focus:border-ink-800 focus:outline-none focus:ring-2 focus:ring-lime-500/40"
      />
    </label>
  );
}
