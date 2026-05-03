import { ArrowRight } from "lucide-react";
import { whatsappLink, type WhatsAppContext } from "@/lib/whatsapp";

interface Props {
  title: string;
  sub?: string;
  context?: WhatsAppContext;
  ctaLabel?: string;
}

export function CTASection({
  title,
  sub,
  context = "general",
  ctaLabel = "Hablemos por WhatsApp",
}: Props) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-ink-800/10 bg-ink-800 p-8 text-bone-50 md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-500/20 blur-3xl"
        />
        <div className="relative grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-balance font-semibold tracking-tightest text-3xl md:text-4xl">
              {title}
            </h2>
            {sub && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-50/70">
                {sub}
              </p>
            )}
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={whatsappLink(context)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent w-full md:w-auto"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </a>
            <p className="mt-3 text-xs text-bone-50/50">
              Te respondemos en menos de 1 hora hábil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
