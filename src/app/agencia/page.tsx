import {
  Cpu,
  Globe,
  KeySquare,
  DoorOpen,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "La agencia · Filosofía y forma de trabajar",
  description:
    "Combinamos ingeniería moderna con automatización de IA para entregar sitios profesionales al precio justo. Construidos desde México, para negocios mexicanos.",
  path: "/agencia",
});

const principles = [
  {
    title: "El sitio es del cliente, no de la agencia.",
    text:
      "Al entregar tu sitio te mandamos un ZIP con todo el código. Si decides irte, ya tienes todo. Esto baja la fricción de cierre y nos obliga a mantener la calidad por mérito, no por candado.",
  },
  {
    title: "Precio público, alcance cerrado.",
    text:
      "Cobramos lo que decimos que cobramos. Si el alcance crece, te enseñamos el delta antes de tocar una línea. No hay sorpresa al cierre, no hay reclamo después.",
  },
  {
    title: "La velocidad no es opcional.",
    text:
      "Una página que tarda 4 segundos en cargar pierde clientes antes de existir. Por eso construimos cada sitio para que cargue rápido en celular, hasta con internet lento.",
  },
  {
    title: "AI para acelerar, humanos para decidir.",
    text:
      "Usamos modelos de AI para wireframes, copy base, optimización de imágenes y publicación. Pero diseño, estrategia y revisión final pasan por mano humana. La AI es un asistente, no el reemplazo.",
  },
];

const distinctions = [
  {
    icon: Cpu,
    h: "Construido a mano, no exportado de un constructor",
    t:
      "Escribimos cada sitio a la medida del negocio. Nada de plantillas recicladas ni exportar de un constructor visual y venderlo como propio.",
  },
  {
    icon: KeySquare,
    h: "Tu dominio, a tu nombre",
    t:
      "El dominio se registra a tu nombre desde el día uno. Las credenciales son tuyas. Nosotros operamos el sitio, tú eres el dueño.",
  },
  {
    icon: DoorOpen,
    h: "Cero contrato de permanencia",
    t:
      "El plan recurrente se cancela cuando tú quieras, sin penalización. Te mandamos un ZIP con tu sitio y la salida es parte del servicio, no un castigo.",
  },
  {
    icon: Globe,
    h: "Velocidad real, hecha en México",
    t:
      "El 80% de tus clientes navega desde un celular con internet móvil. Optimizamos para esa realidad: primero el celular, imágenes ligeras, sin saturar el sitio con scripts.",
  },
];

export default function AgenciaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Agencia", href: "/agencia" }]} />
      <Hero
        eyebrow="Sobre nosotros"
        headline="Construimos diferente porque pensamos diferente."
        sub="Una agencia mexicana enfocada en una sola cosa: entregarle a un negocio local el mismo sitio que tendría si pudiera contratar al equipo de un producto premium. Mismo stack, mismas garantías, precio que sí cuadra con la realidad."
      />

      {/* Filosofía */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Nuestra filosofía</span>
          <h2 className="h-display mt-4 text-3xl md:text-4xl">
            Cuatro principios que no negociamos, ni con el cliente ni con
            nosotros.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-ink-800/10 bg-bone-50 p-7"
            >
              <h3 className="text-lg font-semibold tracking-tightest text-ink-800">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Por qué somos diferentes */}
      <section className="border-y border-ink-800/5 bg-bone-100">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Diferencias contra una agencia tradicional</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Lo que hacemos distinto, en concreto.
            </h2>
            <p className="mt-4 text-base text-ink-400">
              No hablamos en abstracto. Aquí está el cómo.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {distinctions.map(({ icon: Icon, h, t }) => (
              <article
                key={h}
                className="flex gap-4 rounded-2xl border border-ink-800/10 bg-bone-50 p-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lime-500/15 text-lime-700">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-800">{h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{t}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quién está detrás */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Quién está detrás</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Un equipo pequeño, opinionado, que escribe el código que firma.
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-ink-800/10 bg-bone-50 p-7">
              <p className="text-base leading-relaxed text-ink-500">
                Somos un equipo que combina ingeniería de software moderna con
                automatización de IA para entregar sitios premium al precio
                justo. Construidos desde México, para negocios mexicanos.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Trabajamos con un principio simple: si no es código que estaríamos
                dispuestos a poner en nuestro propio producto, no lo
                entregamos en el de un cliente. Por eso el stack es el mismo
                que usan los productos premium del mundo, y por eso preferimos
                tener cinco clientes contentos al mes que cincuenta firmados a
                la fuerza.
              </p>
              <dl className="mt-6 grid gap-4 border-t border-ink-800/10 pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                    Base
                  </dt>
                  <dd className="mt-1 text-sm text-ink-500">México</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                    Idioma
                  </dt>
                  <dd className="mt-1 text-sm text-ink-500">Español mexicano</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                    Soporte
                  </dt>
                  <dd className="mt-1 text-sm text-ink-500">WhatsApp directo</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Encajamos con lo que estás buscando?"
        sub="Si te hace sentido cómo trabajamos, agenda una conversación de 30 minutos. Sin venta agresiva."
        context="agencia"
        ctaLabel="Hablemos"
      />
    </>
  );
}
