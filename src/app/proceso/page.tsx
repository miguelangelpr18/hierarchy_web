import {
  CheckCircle2,
  ShieldCheck,
  GitBranch,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cómo trabajamos · Proceso de entrega",
  description:
    "El paso a paso para llevar tu sitio del brief al deploy: descubrimiento, brief, producción, revisión y go-live. Garantías técnicas y stack que usamos.",
  path: "/proceso",
});

const steps = [
  {
    n: "01",
    t: "Descubrimiento",
    when: "Día 0 — 30 minutos",
    text:
      "Una llamada por WhatsApp o videollamada. Te preguntamos qué hace tu negocio, qué problema resuelve la página, y qué métrica mediríamos para saber que funcionó. No es venta, es triaje.",
    out: "Diagnóstico inicial y plan recomendado.",
  },
  {
    n: "02",
    t: "Brief y propuesta",
    when: "Día 1 a 2",
    text:
      "Te mandamos una propuesta de una página con el alcance cerrado, la fecha de entrega y el precio fijo. Si firmas y va el 50% de anticipo, agendamos arranque inmediato.",
    out: "Documento de alcance + cronograma + invoice.",
  },
  {
    n: "03",
    t: "Producción",
    when: "Día 2 al 5 (Pro Plan)",
    text:
      "Diseño y código corren en paralelo. Generamos los wireframes con asistencia de AI para que tú revises rápido, y escribimos el código en TypeScript con Next.js. Recibes un primer borrador navegable en 48 horas.",
    out: "Borrador en URL privada de staging.",
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
    t: "Deploy",
    when: "Día 7",
    text:
      "Conectamos el dominio, corremos el check final de Lighthouse (no entregamos por debajo de 90 en mobile), te invitamos como owner del repositorio en GitHub, te damos 30 minutos de capacitación y arrancamos el mantenimiento.",
    out: "Sitio en producción + repo + capacitación.",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Lighthouse > 90 antes de entregar",
    text:
      "Si tu sitio no saca al menos 90 en Performance en mobile en el Lighthouse de Chrome, no lo deployamos. Es la línea que no cruzamos.",
  },
  {
    icon: GitBranch,
    title: "Tu código vive en tu GitHub",
    text:
      "Te invitamos como owner del repositorio el día del deploy. Si decides irte, ya tienes todo. Sin pedirlo, sin pagarlo extra, sin trámite.",
  },
  {
    icon: CheckCircle2,
    title: "Política de salida abierta",
    text:
      "Cancelas el mantenimiento cuando quieras. Te ayudamos a configurar tu propio Vercel y bajamos el sitio del nuestro siete días después. Una hora gratis de soporte para la migración.",
  },
  {
    icon: MessageCircle,
    title: "Soporte por WhatsApp directo",
    text:
      "No usamos sistema de tickets. Hablas con el mismo equipo que construyó tu sitio. Tiempo de respuesta promedio: menos de una hora hábil.",
  },
];

const stack = [
  {
    name: "Next.js 15",
    role: "Framework",
    why:
      "Server-side rendering por default. Tu página llega a Google y al usuario ya armada, no se construye en cada visita con megabytes de JavaScript.",
  },
  {
    name: "Vercel",
    role: "Hosting",
    why:
      "Edge network global con 99.99% uptime, CDN incluida, certificado SSL automático y deploys atómicos. Lo mismo que usan Notion y Airbnb.",
  },
  {
    name: "Tailwind CSS",
    role: "Estilos",
    why:
      "Estilos compilados al milímetro de lo que la página necesita. Resultado: bundles 5 a 10 veces más livianos que sitios con WordPress o Bootstrap.",
  },
  {
    name: "TypeScript",
    role: "Lenguaje",
    why:
      "Catch de errores en tiempo de compilación, antes de llegar a producción. Menos bugs en el sitio del cliente, menos visitas de soporte que pagar.",
  },
  {
    name: "shadcn/ui + Radix",
    role: "Componentes",
    why:
      "Componentes accesibles de origen (lectores de pantalla, navegación con teclado). El sitio funciona para todos, incluyendo usuarios con discapacidades.",
  },
  {
    name: "Plausible",
    role: "Analytics",
    why:
      "Sin cookies, sin banner de consentimiento. Cumple con LFPDPPP y GDPR sin trámite, y respeta a tus usuarios.",
  },
];

export default function ProcesoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Proceso", href: "/proceso" }]} />
      <Hero
        eyebrow="Metodología"
        headline="Del brief al sitio en producción, sin junta semanal eterna."
        sub="Trabajamos en cinco pasos rastreables. Cada paso tiene fecha, entregable y forma de medirse. Si nos atrasamos, te lo decimos antes de que tú nos preguntes."
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
              Lo que firmamos y lo que verificamos antes de entregar.
            </h2>
            <p className="mt-4 text-base text-ink-400">
              Cada garantía es falsificable: si no la cumplimos, lo demostramos
              y lo arreglamos sin costo extra.
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

      {/* Stack */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Stack que usamos</span>
          <h2 className="h-display mt-4 text-3xl md:text-4xl">
            Mismo stack de Notion y Airbnb. Aplicado a tu negocio local.
          </h2>
          <p className="mt-4 text-base text-ink-400">
            Cada herramienta cumple un rol específico y todas son industria
            estándar. Nada propietario, nada que te amarre.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <li
              key={s.name}
              className="rounded-2xl border border-ink-800/10 bg-bone-50 p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-ink-800">
                  {s.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-ink-300">
                  {s.role}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.why}</p>
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        title="¿Quieres que aplique este proceso a tu negocio?"
        sub="Cuéntanos qué haces y te decimos cuál de los planes encaja, cuánto tarda y cuándo arrancaríamos."
        context="proceso"
      />
    </>
  );
}
