import { Mail, MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contacto · Hablemos",
  description:
    "Escríbenos por WhatsApp o email. Te respondemos el mismo día hábil.",
  path: "/contacto",
});

const contactFaq: FAQItem[] = [
  {
    q: "¿Cuánto tardan en responder?",
    a: "El mismo día hábil. En horario de 9 a 19 (hora CDMX) normalmente en menos de una hora.",
  },
  {
    q: "¿Trabajan con clientes fuera de México?",
    a: "Sí. Atendemos clientes en Estados Unidos, Centroamérica y España. Toda la comunicación es por WhatsApp y videollamada. Cobramos en MXN y emitimos factura mexicana.",
  },
  {
    q: "¿Necesito tener todo el contenido listo antes de contactarlos?",
    a: "No. Puedes llegar con cero. Si no tienes copy, te ayudamos a escribirlo. Si no tienes fotos, usamos placeholders profesionales mientras consigues las tuyas.",
  },
  {
    q: "¿Hacen contratos formales o trabajan con la palabra?",
    a: "Mandamos una propuesta de una página con alcance cerrado y precio fijo. Esa propuesta es el contrato. Si necesitas papel firmado por temas fiscales, lo emitimos sin problema.",
  },
  {
    q: "¿Pueden firmar un NDA antes de hablar?",
    a: "Sí, sin costo extra. Mándalo por email y lo firmamos antes de la primera llamada. Tenemos uno propio si prefieres ese.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "Contacto", href: "/contacto" }]} />
      <Hero
        eyebrow="El siguiente paso"
        headline="Escríbenos. Una conversación corta basta para arrancar."
        sub="Sin formularios, sin filas de soporte. Hablas directo con la persona que va a construir tu sitio."
      />

      <section className="container-x py-12 md:py-20">
        <div className="mx-auto max-w-lg">
          <div className="grid gap-4">
            <a
              href={whatsappLink("contacto")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-ink-800/10 bg-bone-50 p-6 transition-all hover:-translate-y-0.5 hover:border-ink-800/30 hover:shadow-sm"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-500/15 text-lime-700 transition-colors group-hover:bg-lime-500 group-hover:text-ink-800">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="font-semibold text-ink-800">WhatsApp directo</p>
                <p className="mt-0.5 text-sm text-ink-400">
                  +{site.whatsapp} · Respuesta el mismo día hábil
                </p>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-5 rounded-2xl border border-ink-800/10 bg-bone-50 p-6 transition-all hover:-translate-y-0.5 hover:border-ink-800/30 hover:shadow-sm"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-500/15 text-lime-700 transition-colors group-hover:bg-lime-500 group-hover:text-ink-800">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-semibold text-ink-800">Email</p>
                <p className="mt-0.5 text-sm text-ink-400">{site.email}</p>
              </div>
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-ink-300">
            Preferimos WhatsApp — es más rápido para los dos.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24" id="faq">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Lo que nos preguntan antes de escribir.
            </h2>
          </div>
          <div className="md:col-span-8">
            <FAQ items={contactFaq} />
          </div>
        </div>
      </section>
    </>
  );
}
