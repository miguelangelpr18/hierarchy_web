import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlansSection } from "./PlansSection";
import { CTASection } from "@/components/CTASection";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { plans } from "@/lib/plans";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Planes y precios públicos",
  description:
    "Tres planes para negocios mexicanos: Enter ($3,900 + $550/mes), Pro ($7,500 + $650/mes) y Platinum ($16,900 + $850/mes). Precios públicos, sin letra chiquita.",
  path: "/planes",
});

const pricingFaq: FAQItem[] = [
  {
    q: "¿Qué pasa si pagas anual upfront en lugar de mensual?",
    a: "Te regalamos 2 meses. Pagas 10 meses por adelantado y recibes 12 meses de mantenimiento. Es la forma más barata de quedarte el primer año.",
  },
  {
    q: "¿Y si en seis meses quiero cancelar el mantenimiento?",
    a: "Sin problema y sin penalización. Te mandamos un ZIP con todo el código de tu sitio para que lo tengas en tu poder. Tu sitio sigue activo hasta el fin del mes en curso pagado, después se baja del nuestro. Si después quieres que te ayudemos a montarlo en otro lado, lo cotizamos como servicio aparte.",
  },
  {
    q: "¿Puedo cambiar de plan después de arrancar?",
    a: "Sí. Si subes de plan, cobramos solo la diferencia del inicial y ajustamos la mensualidad al mes siguiente. Si bajas de plan, lo aplicamos al siguiente ciclo de facturación.",
  },
  {
    q: "¿Aceptan tarjeta o solo transferencia?",
    a: "Aceptamos transferencia, tarjeta vía Stripe (con opción a meses sin intereses cuando aplica) y depósito en efectivo. Para el inicial pedimos 50% al firmar y 50% al entregar.",
  },
];

const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Planes Hierarchy Web Agency",
  itemListElement: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    description: p.tagline,
    priceCurrency: "MXN",
    price: p.initial,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: p.monthly,
      priceCurrency: "MXN",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    seller: { "@type": "Organization", name: site.name },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const competitorsCompare = [
  {
    h: "Hierarchy Pro",
    initial: "$7,500",
    monthly: "$650",
    speed: "Carga rápida en celular",
    seo: "Listo para Google desde día 1",
    code: "Tuyo en ZIP al entregar",
    delivery: "5-7 días",
    highlight: true,
  },
  {
    h: "Wix / Squarespace",
    initial: "Hazlo tú o paga $3,000-$8,000 a un freelancer",
    monthly: "$320-$700 USD/año",
    speed: "Carga lenta típica en móvil",
    seo: "Configuración limitada",
    code: "No exportable",
    delivery: "Tú lo armas",
  },
  {
    h: "WordPress (agencia local)",
    initial: "$8,000-$25,000",
    monthly: "$550-$1,550",
    speed: "Plugins ralentizan el sitio",
    seo: "Configurable con plugins",
    code: "Tuyo pero atado al hosting",
    delivery: "10-20 días",
  },
  {
    h: "Constructores AI (Lovable, etc)",
    initial: "$4,900-$19,900",
    monthly: "$650-$2,300",
    speed: "Sitios pesados que cargan lento",
    seo: "Limitado por la plataforma",
    code: "Atado al constructor",
    delivery: "2-14 días",
  },
];

const maintenanceCompare = [
  { name: "Hierarchy Enter", price: "$550/mes", note: "Hosting + 2 cambios/mes + soporte WhatsApp" },
  { name: "Hierarchy Pro", price: "$650/mes", note: "Reporte SEO + 4 cambios/mes" },
  { name: "Hierarchy Platinum", price: "$850/mes", note: "E-commerce, reporte semanal, 8 cambios/mes" },
  { name: "Constructores AI (rango público)", price: "$650-$2,300/mes", note: "Mensualidad obligatoria, código atado al constructor" },
  { name: "Agencia WordPress local", price: "$550-$1,550/mes", note: "Hosting compartido, soporte por ticket" },
  { name: "Wix / Squarespace anualizado", price: "$320-$700 MXN/mes", note: "Plataforma cerrada, no exportable" },
];

export default function PlanesPage() {
  return (
    <>
      <JsonLd data={[offerCatalog, faqSchema]} />
      <Breadcrumbs items={[{ label: "Planes", href: "/planes" }]} />
      <Hero
        eyebrow="Precios públicos"
        headline="Sin cotizaciones secretas. Lo que ves es lo que pagas."
        sub="Tres planes pensados para tres tamaños de negocio. Cada uno tiene precio inicial, mensualidad y total año 1 a la vista. Lo demás se cotiza si lo pides."
      />

      <PlansSection />

      {/* Comparativa contra alternativas */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Comparativa real</span>
          <h2 className="h-display mt-4 text-3xl md:text-4xl">
            Qué te entrega cada alternativa por lo que cobra.
          </h2>
          <p className="mt-4 text-base text-ink-400">
            Números públicos del mercado mexicano. Si encuentras algo mejor por
            menos, dínos.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-ink-800/10">
          <table className="w-full min-w-[920px] text-sm">
            <thead className="bg-bone-100 text-left">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Opción
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Inicial
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Mensualidad
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Velocidad
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  SEO
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Propiedad del código
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Entrega
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-800/10 bg-bone-50">
              {competitorsCompare.map((row) => (
                <tr
                  key={row.h}
                  className={row.highlight ? "bg-lime-500/10" : ""}
                >
                  <td className="px-5 py-4 font-medium text-ink-800">{row.h}</td>
                  <td className="px-5 py-4 text-ink-500">{row.initial}</td>
                  <td className="px-5 py-4 text-ink-500">{row.monthly}</td>
                  <td className="px-5 py-4 text-ink-500">{row.speed}</td>
                  <td className="px-5 py-4 text-ink-500">{row.seo}</td>
                  <td className="px-5 py-4 text-ink-500">{row.code}</td>
                  <td className="px-5 py-4 text-ink-500">{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Comparativa de mantenimiento mensual */}
      <section className="border-y border-ink-800/5 bg-bone-100">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Mantenimiento mensual</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Lo que cobra el mercado por mantener tu sitio vivo.
            </h2>
            <p className="mt-4 text-base text-ink-400">
              La mensualidad de Hierarchy es entre 40% y 60% más baja que la de
              constructores AI con servicio comparable.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink-800/10 bg-bone-50">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-bone-100 text-left">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Opción
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Mensualidad
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Lo que incluye
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-800/10">
                {maintenanceCompare.map((row) => {
                  const isHierarchy = row.name.startsWith("Hierarchy");
                  return (
                    <tr key={row.name} className={isHierarchy ? "bg-lime-500/10" : ""}>
                      <td className="px-5 py-4 font-medium text-ink-800">
                        {row.name}
                      </td>
                      <td className="px-5 py-4 text-ink-500">{row.price}</td>
                      <td className="px-5 py-4 text-ink-500">{row.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ pricing */}
      <section className="container-x py-16 md:py-24" id="faq-precios">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Sobre precios</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Las cinco preguntas que recibimos cada semana.
            </h2>
          </div>
          <div className="md:col-span-8">
            <FAQ items={pricingFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="¿No sabes cuál plan te conviene? Cuéntanos de tu negocio."
        sub="Te respondemos por WhatsApp con la opción que más te conviene. El mismo día hábil."
        ctaLabel="Quiero mi sitio esta semana"
      />
    </>
  );
}
