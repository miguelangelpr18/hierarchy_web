import {
  Zap,
  Package,
  DoorOpen,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cómo trabajamos · Proceso de entrega",
  description:
    "El paso a paso para llevar tu sitio del primer mensaje al lanzamiento: descubrimiento, propuesta, producción, revisión y publicación. Garantías claras, sin letra chiquita.",
  path: "/proceso",
});

const steps = [
  {
    n: "01",
    t: "Descubrimiento",
    when: "Día 0 — 30 minutos",
    text:
      "Una llamada por WhatsApp o videollamada. Te preguntamos qué hace tu negocio, qué problema resuelve la página y qué quieres lograr con ella. No es venta, es entender.",
    out: "Diagnóstico inicial y plan recomendado.",
  },
  {
    n: "02",
    t: "Propuesta",
    when: "Día 1 a 2",
    text:
      "Te mandamos una propuesta de una página con el alcance cerrado, la fecha de entrega y el precio fijo. Si firmas y va el 50% de anticipo, agendamos arranque inmediato.",
    out: "Documento de alcance, cronograma y factura.",
  },
  {
    n: "03",
    t: "Producción",
    when: "Día 2 al 5 (Pro Plan)",
    text:
      "Diseño y desarrollo corren en paralelo. Aceleramos lo repetitivo con asistencia de AI para que tú revises rápido. Recibes un primer borrador navegable en 48 horas.",
    out: "Borrador en URL privada para que lo veas en tu celular.",
  },
  {
    n: "04",
    t: "Revisión",
    when: "Día 5 al 6",
    text:
      "Revisas en tu celular y nos mandas notas por WhatsApp. Hacemos los ajustes en menos de 24 horas. El plan incluye las rondas necesarias hasta que apruebes el resultado dentro del alcance acordado.",
    out: "Versión final aprobada por ti.",
  },
  {
    n: "05",
    t: "Publicación",
    when: "Día 7",
    text:
      "Conectamos tu dominio, dejamos tu sitio en línea y te damos 30 minutos de capacitación para que sepas cómo funciona. A partir de aquí arranca tu plan de mantenimiento.",
    out: "Sitio publicado y capacitación entregada.",
  },
];

const guarantees = [
  {
    icon: Zap,
    title: "Construido con performance",
    text:
      "Tu sitio carga rápido en cualquier celular, hasta con internet lento.",
  },
  {
    icon: Package,
    title: "Tu código, en tu poder",
    text:
      "Al entregar tu sitio te mandamos un ZIP con todo el código. Para que sea 100% tuyo.",
  },
  {
    icon: DoorOpen,
    title: "Política de salida abierta",
    text:
      "Cancelas el mantenimiento cuando quieras. Tu sitio sigue activo hasta el fin del mes pagado.",
  },
  {
    icon: MessageCircle,
    title: "Soporte directo, sin tickets",
    text:
      "Hablas por WhatsApp con la misma persona que construyó tu sitio. Tiempo de respuesta promedio: el mismo día hábil.",
  },
];

export default function ProcesoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Proceso", href: "/proceso" }]} />
      <Hero
        eyebrow="Metodología"
        headline="Del primer mensaje a tu sitio publicado, sin juntas eternas."
        sub="Trabajamos en cinco pasos rastreables. Cada paso tiene fecha y entregable. Si nos atrasamos, te lo decimos antes de que tú nos preguntes."
      />

      {/* Timeline */}
      <section className="container-x py-12 md:py-20">
        <ol className="relative space-y-6 md:space-y-10">
          <div
            aria-hidden="true"
            className="absolute left-[20px] top-2 hidden h-[calc(100%-32px)] w-px bg-ink-800/10 md:block"
          />
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative md:pl-16"
            >
              <span className="hidden md:absolute md:left-0 md:top-1 md:grid md:h-10 md:w-10 md:place-items-center md:rounded-full md:border md:border-ink-800/10 md:bg-bone-50 md:font-mono md:text-xs md:font-semibold md:text-ink-800">
                {step.n}
              </span>
              <article className="grid gap-3 rounded-2xl border border-ink-800/10 bg-bone-50 p-6 md:grid-cols-12 md:gap-6 md:p-7">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-300 md:hidden">
                    {step.n}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tightest text-ink-800">
                    {step.t}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-lime-700">
                    {step.when}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm leading-relaxed text-ink-500">{step.text}</p>
                  <p className="mt-3 text-xs text-ink-400">
                    <span className="font-semibold text-ink-800">Entregable: </span>
                    {step.out}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* Garantías */}
      <section className="border-y border-ink-800/5 bg-bone-100">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Garantías</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Lo que firmamos contigo.
            </h2>
            <p className="mt-4 text-base text-ink-400">
              Compromisos claros, sin letra chiquita.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {guarantees.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-ink-800/10 bg-bone-50 p-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lime-500/15 text-lime-700">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres que apliquemos este proceso a tu negocio?"
        sub="Cuéntanos qué haces y te decimos cuál de los planes encaja, cuánto tarda y cuándo arrancaríamos."
        context="proceso"
      />
    </>
  );
}
