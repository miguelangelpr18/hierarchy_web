"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "error";

const planOptions = [
  { value: "", label: "No estoy seguro todavía" },
  { value: "enter", label: "Enter Plan — $3,900 + $550/mes" },
  { value: "pro", label: "Pro Plan — $7,500 + $650/mes" },
  { value: "platinum", label: "Platinum Plan — $16,900 + $850/mes" },
  { value: "audit", label: "Solo quiero la auditoría gratis" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error en el servidor");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-lime-700/30 bg-lime-400/30 p-8">
        <p className="text-lg font-semibold text-ink-800">
          Mensaje recibido. Te respondemos en menos de 1 hora hábil.
        </p>
        <p className="mt-2 text-sm text-ink-500">
          Si lo prefieres rápido, escríbenos directo por WhatsApp y arrancamos hoy.
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
        <Field name="name" label="Nombre" placeholder="Tu nombre" autoComplete="name" required />
        <Field
          name="business"
          label="Nombre del negocio"
          placeholder="Tortería La Esquina, Dental Vega…"
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
          label="WhatsApp"
          placeholder="52 81 2717 9766"
          autoComplete="tel"
          required
        />
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-ink-400">Plan que te interesa</span>
        <select
          name="plan"
          defaultValue=""
          className="rounded-lg border border-ink-800/15 bg-bone-50 px-3.5 py-2.5 text-sm text-ink-800 focus:border-ink-800 focus:outline-none focus:ring-2 focus:ring-lime-500/40"
        >
          {planOptions.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <Field
        name="currentUrl"
        label="URL actual (opcional)"
        placeholder="ejemplo.com — si ya tienes algo"
        autoComplete="url"
      />

      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-ink-400">
          Cuéntanos del proyecto<span className="ml-0.5 text-ink-300">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Qué hace tu negocio, qué quieres lograr con la página, fecha aproximada…"
          className="rounded-lg border border-ink-800/15 bg-bone-50 px-3.5 py-2.5 text-sm text-ink-800 placeholder:text-ink-200 focus:border-ink-800 focus:outline-none focus:ring-2 focus:ring-lime-500/40"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
        <ArrowRight size={16} />
      </button>
      {error && (
        <p className="text-sm text-red-700">
          No pudimos enviar tu mensaje: {error}. Mejor escríbenos directo por WhatsApp.
        </p>
      )}
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
