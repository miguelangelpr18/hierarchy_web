import Link from "next/link";
import { Check } from "lucide-react";
import type { Plan } from "@/lib/plans";
import { formatMxn } from "@/lib/plans";
import { whatsappLink, type WhatsAppContext } from "@/lib/whatsapp";

interface Props {
  plan: Plan;
  variant?: "summary" | "detail";
  pricingMode?: "monthly" | "annual";
}

export function PlanCard({ plan, variant = "summary", pricingMode = "monthly" }: Props) {
  const featured = plan.recommended;
  const isAnnual = pricingMode === "annual";
  const recurring = isAnnual ? plan.annualUpfront : plan.monthly;
  const recurringLabel = isAnnual ? "/año (incluye 2 meses gratis)" : "/mes";

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ${
        featured
          ? "border-ink-800 bg-ink-800 text-bone-50 md:scale-[1.02]"
          : "border-ink-800/10 bg-bone-50 text-ink-800 hover:border-ink-800/30"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-lime-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-800">
          Recomendado
        </span>
      )}

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tightest">{plan.name}</h3>
        <span
          className={`text-xs ${featured ? "text-bone-50/60" : "text-ink-300"}`}
        >
          {plan.delivery}
        </span>
      </div>

      <p
        className={`mt-2 text-sm leading-relaxed ${
          featured ? "text-bone-50/70" : "text-ink-400"
        }`}
      >
        {plan.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-mono text-4xl font-semibold tracking-tightest">
          ${plan.initial.toLocaleString("es-MX")}
        </span>
        <span className={`text-sm ${featured ? "text-bone-50/60" : "text-ink-300"}`}>
          MXN inicial
        </span>
      </div>
      <div
        className={`mt-1 text-sm ${
          featured ? "text-bone-50/70" : "text-ink-400"
        }`}
      >
        + ${recurring.toLocaleString("es-MX")}
        {recurringLabel}
      </div>

      <p
        className={`mt-3 text-xs ${
          featured ? "text-bone-50/50" : "text-ink-300"
        }`}
      >
        Total año 1:{" "}
        <span className="font-medium">
          {formatMxn(isAnnual ? plan.yearOneTotalAnnual : plan.yearOneTotalMonthly)}
        </span>
      </p>

      {variant === "detail" ? (
        <>
          <hr
            className={`my-6 ${
              featured ? "border-bone-50/15" : "border-ink-800/10"
            }`}
          />
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${
              featured ? "text-bone-50/60" : "text-ink-300"
            }`}
          >
            Para quién
          </p>
          <p
            className={`mt-2 text-sm ${
              featured ? "text-bone-50/80" : "text-ink-500"
            }`}
          >
            {plan.audience}
          </p>

          <p
            className={`mt-6 text-xs font-semibold uppercase tracking-wider ${
              featured ? "text-bone-50/60" : "text-ink-300"
            }`}
          >
            Incluye
          </p>
          <ul className="mt-3 space-y-2.5">
            {plan.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    featured ? "text-lime-500" : "text-lime-700"
                  }`}
                />
                <span className={featured ? "text-bone-50/85" : "text-ink-500"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            className={`mt-6 text-xs font-semibold uppercase tracking-wider ${
              featured ? "text-bone-50/60" : "text-ink-300"
            }`}
          >
            Mantenimiento mensual incluye
          </p>
          <ul className="mt-3 space-y-2.5">
            {plan.maintenanceIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    featured ? "text-lime-500" : "text-lime-700"
                  }`}
                />
                <span className={featured ? "text-bone-50/85" : "text-ink-500"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="mt-6 space-y-2.5">
          {plan.includes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <Check
                size={16}
                className={`mt-0.5 shrink-0 ${
                  featured ? "text-lime-500" : "text-lime-700"
                }`}
              />
              <span className={featured ? "text-bone-50/85" : "text-ink-500"}>
                {item}
              </span>
            </li>
          ))}
          {plan.includes.length > 4 && (
            <li
              className={`text-xs ${
                featured ? "text-bone-50/60" : "text-ink-300"
              }`}
            >
              + {plan.includes.length - 4} características más
            </li>
          )}
        </ul>
      )}

      <div className="mt-7 flex flex-col gap-2">
        <a
          href={whatsappLink(plan.slug as WhatsAppContext)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${
            featured ? "btn-accent" : "btn-primary"
          }`}
        >
          Quiero el {plan.name}
        </a>
        {variant === "summary" && (
          <Link
            href={`/planes#${plan.slug}`}
            className={`text-center text-sm ${
              featured
                ? "text-bone-50/70 hover:text-bone-50"
                : "text-ink-400 hover:text-ink-800"
            }`}
          >
            Ver detalles →
          </Link>
        )}
      </div>
    </div>
  );
}
