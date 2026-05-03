import type { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  headline: ReactNode;
  sub?: ReactNode;
  actions?: ReactNode;
  variant?: "home" | "interior";
  metric?: { value: string; label: string };
}

export function Hero({
  eyebrow,
  headline,
  sub,
  actions,
  variant = "interior",
  metric,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative overflow-hidden ${
        isHome ? "pt-14 pb-20 md:pt-24 md:pb-28" : "pt-12 pb-12 md:pt-20 md:pb-16"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(196,245,66,0.18),transparent_70%)]"
      />
      <div className="container-x relative">
        {eyebrow && <span className="eyebrow animate-fade-in">{eyebrow}</span>}
        <h1
          className={`h-display animate-slide-up text-balance ${
            isHome
              ? "mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
              : "mt-5 text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
          }`}
          style={{ animationDelay: "60ms" }}
        >
          {headline}
        </h1>
        {sub && (
          <p
            className="mt-5 max-w-2xl animate-slide-up text-base leading-relaxed text-ink-400 md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            {sub}
          </p>
        )}
        {actions && (
          <div
            className="mt-8 flex animate-slide-up flex-wrap items-center gap-3"
            style={{ animationDelay: "220ms" }}
          >
            {actions}
          </div>
        )}
        {metric && (
          <div
            className="mt-12 inline-flex animate-slide-up items-baseline gap-3 rounded-2xl border border-ink-800/10 bg-bone-50 p-5"
            style={{ animationDelay: "300ms" }}
          >
            <span className="font-mono text-3xl font-semibold tracking-tightest text-ink-800 md:text-4xl">
              {metric.value}
            </span>
            <span className="text-sm text-ink-400">{metric.label}</span>
          </div>
        )}
      </div>
    </section>
  );
}
