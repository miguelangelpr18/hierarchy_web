"use client";

import { useState } from "react";
import { plans } from "@/lib/plans";
import { PlanCard } from "@/components/PlanCard";

export function PlansSection() {
  const [mode, setMode] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="container-x">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-full border border-ink-800/10 bg-bone-100 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMode("monthly")}
            aria-pressed={mode === "monthly"}
            className={`rounded-full px-4 py-2 font-medium transition-all ${
              mode === "monthly"
                ? "bg-bone-50 text-ink-800 shadow-sm"
                : "text-ink-400 hover:text-ink-800"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setMode("annual")}
            aria-pressed={mode === "annual"}
            className={`rounded-full px-4 py-2 font-medium transition-all ${
              mode === "annual"
                ? "bg-bone-50 text-ink-800 shadow-sm"
                : "text-ink-400 hover:text-ink-800"
            }`}
          >
            Anual upfront
            <span className="ml-1.5 inline-flex items-center rounded-full bg-lime-500 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-800">
              -2 meses
            </span>
          </button>
        </div>
        <p className="text-xs text-ink-300">
          Los precios son en pesos mexicanos. IVA incluido cuando aplica factura.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.slug} id={plan.slug} className="scroll-mt-24">
            <PlanCard plan={plan} variant="detail" pricingMode={mode} />
          </div>
        ))}
      </div>
    </section>
  );
}
