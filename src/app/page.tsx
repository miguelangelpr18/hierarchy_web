import Link from "next/link";
import {
  Gauge,
  Search,
  ScrollText,
  Timer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { AuditForm } from "@/components/AuditForm";
import { plans } from "@/lib/plans";
import { whatsappLink } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hierarchy Web Agency — Páginas web profesionales en una semana",
  description:
    "Construimos páginas web profesionales para negocios mexicanos. Entrega desde 48 horas, atención por WhatsApp, sin amarres. Hasta $11,600 MXN de ahorro el primer año vs agencias tradicionales.",
  path: "/",
});

const differentiators = [
  {
    icon: Gauge,
    title: "Velocidad real",
    text:
      "Tu sitio carga rápido en cualquier celular, hasta con internet lento. Construimos para la realidad mexicana, no para presumir en una conferencia.",
    metric: "Optimizado para 4G",
  },
  {
    icon: Search,
    title: "Pensado para Google",
    text:
      "Tu negocio aparece en búsquedas locales desde el primer día. Configuramos todo lo que Google necesita para encontrarte: dirección, horarios, servicios y reseñas.",
    metric: "Visible en mapas",
  },
  {
    icon: ScrollText,
    title: "Sin letra chiquita",
    text:
      "Precio cerrado antes de empezar. Sin contratos de permanencia. Si decides irte, te mandamos un ZIP con tu sitio para que sea 100% tuyo.",
    metric: "Cero amarres",
  },
  {
    icon: Timer,
    title: "Tiempos que sí cumplimos",
    text:
      "Una landing en 48 a 72 horas. Un sitio multi-página en 5 a 7 días. Las fechas que damos son las fechas que cumplimos, no aspiraciones.",
    metric: "Desde 48 horas",
  },
] as const;

const homeFaq = [
  {
    q: "¿Por qué cuesta menos que una agencia tradicional?",
    a: "Porque automatizamos lo repetitivo con herramientas modernas y trabajamos en equipo pequeño. Cobramos el trabajo humano que sí mueve la aguja: estrategia, diseño y atención cercana. Resultado: precio justo sin recortar calidad.",
  },
  {
    q: "¿Qué pasa con mi sitio si dejo de pagar el mantenimiento?",
    a: "Te mandamos un ZIP con todo el código de tu sitio para que lo tengas en tu poder. Tu sitio sigue activo hasta el fin del mes en curso pagado. Sin penalización, sin pelea.",
  },
  {
    q: "¿Y si necesito cambios después del lanzamiento?",
    a: "El mantenimiento mensual incluye 2 a 8 cambios pequeños al mes según el plan. Para rediseños grandes lo cotizamos aparte y siempre con precio cerrado antes de empezar.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Agencia web · MTY, México"
        headline={
          <>
            <span className="block">Tu negocio en Google.</span>
            <span className="block">
              Tu sitio listo en{" "}
              <span className="bg-lime-500 px-1 text-ink-800">una semana.</span>
            </span>
            <span className="block text-ink-300">Más clientes.</span>
          </>
        }
        sub="Páginas web profesionales. Diseño preciso completamente personalizado a la marca, velocidad en la página, y atención por WhatsApp con la persona que construyó tu sitio."
        actions={
          <>
            <a
              href={whatsappLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hablemos por WhatsApp
              <ArrowRight size={16} />
            </a>
            <Link href="#auditoria" className="btn btn-ghost">
              Auditar mi sitio actual gratis
            </Link>
          </>
        }
        metric={{
          value: "$11,600",
          label:
            "MXN de ahorro hasta el primer año contra agencias tradicionales mexicanas comparables.",
        }}
      />

      {/* Diferenciadores */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Por qué Hierarchy</span>
          <h2 className="h-display mt-4 text-3xl md:text-4xl">
            Mismo resultado de una agencia premium. Tiempos y precios de la
            realidad mexicana.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ icon: Icon, title, text, metric }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-ink-800/10 bg-bone-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink-800/30 hover:shadow-sm"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime-500/15 text-lime-700 transition-colors group-hover:bg-lime-500 group-hover:text-ink-800">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-800">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{text}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-500">
                {metric}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Proceso resumido */}
      <section className="border-y border-ink-800/5 bg-bone-100">
        <div className="container-x py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2 className="h-display mt-4 text-3xl md:text-4xl">
                Cuatro pasos. Sin juntas eternas.
              </h2>
            </div>
            <Link
              href="/proceso"
              className="text-sm font-medium text-ink-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:decoration-ink-800"
            >
              Ver proceso completo →
            </Link>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Platicamos",
                d: "Nos platicas de tu negocio, tus ideas, tus metas por WhatsApp.",
              },
              {
                n: "02",
                t: "Arrancamos",
                d: "Confirmas, pagas el anticipo y empezamos a producir el mismo día.",
              },
              {
                n: "03",
                t: "Te mostramos",
                d: "En 2 a 7 días te mandamos el sitio navegable. Pides los cambios que necesites.",
              },
              {
                n: "04",
                t: "Publicamos",
                d: "Tu sitio en línea con tu dominio.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-ink-800/10 bg-bone-50 p-6"
              >
                <span className="font-mono text-sm text-ink-300">{step.n}</span>
                <h3 className="mt-3 text-base font-semibold text-ink-800">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Planes */}
      <section className="container-x py-16 md:py-24" id="planes">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Tres planes, precio público</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Elige el tamaño. Te mostramos exactamente qué entra.
            </h2>
          </div>
          <Link
            href="/planes"
            className="text-sm font-medium text-ink-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:decoration-ink-800"
          >
            Ver detalles completos →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} />
          ))}
        </div>
      </section>

      {/* Auditoría / lead magnet */}
      <section
        id="auditoria"
        className="container-x scroll-mt-24 py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Auditoría gratuita</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Te decimos exactamente qué tan rápido carga tu sitio actual y qué
              le falta.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-500">
              {[
                "Qué tan rápido carga tu sitio en celular",
                "Qué está viendo Google de tu negocio (y qué no)",
                "3 mejoras de mayor impacto, priorizadas",
                "Te lo enviamos por WhatsApp en menos de 24 horas hábiles",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime-700" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <AuditForm />
          </div>
        </div>
      </section>

      {/* FAQ corto */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Dudas frecuentes</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Lo que más nos preguntan antes de firmar.
            </h2>
            <Link
              href="/contacto#faq"
              className="mt-6 inline-flex text-sm font-medium text-ink-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:decoration-ink-800"
            >
              Ver más preguntas →
            </Link>
          </div>
          <div className="md:col-span-8">
            <FAQ items={homeFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Tu próxima página web puede estar viva la semana que entra."
        sub="Una conversación de 30 minutos por WhatsApp basta para saber si encajamos. Sin compromisos."
        ctaLabel="Arrancar conversación"
      />
    </>
  );
}
