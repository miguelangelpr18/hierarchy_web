import { Mail, MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { FAQ, type FAQItem } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contacto · Arrancar conversación",
  description:
    "Cuéntanos del proyecto y te respondemos en menos de una hora hábil. WhatsApp directo, email, formulario o videollamada.",
  path: "/contacto",
});

const contactFaq: FAQItem[] = [
  {
    q: "¿Cuánto tardan en responder un mensaje nuevo?",
    a: "Menos de una hora en horario hábil (9 a 19, lunes a viernes, hora CDMX). Fuera de horario, primera respuesta al día siguiente antes de las 11 de la mañana.",
  },
  {
    q: "¿Trabajan con clientes fuera de México?",
    a: "Sí. Atendemos clientes en Estados Unidos, Centroamérica y España. Toda la comunicación es por WhatsApp y videollamada. Cobramos en MXN y emitimos factura mexicana.",
  },
  {
    q: "¿Necesito tener todo el contenido listo antes de contactarlos?",
    a: "No. Puedes llegar con cero. Si no tienes copy, te ayudamos a escribirlo. Si no tienes fotos, usamos placeholders profesionales mientras consigues las tuyas. La idea es bajar tu fricción para arrancar.",
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
        headline="Cuéntanos del proyecto. Tomamos 30 minutos esta semana para entender."
        sub="No hay junta de descubrimiento de dos horas, ni cuestionario de 40 preguntas. Una conversación corta basta para saber si encajamos."
      />

      <section className="container-x py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-ink-800/10 bg-bone-50 p-6 md:p-7">
              <h2 className="text-lg font-semibold tracking-tightest text-ink-800">
                Métodos alternativos
              </h2>
              <p className="mt-2 text-sm text-ink-400">
                Lo que sea más cómodo para ti.
              </p>

              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={whatsappLink("contacto")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-lime-500/15 text-lime-700 group-hover:bg-lime-500 group-hover:text-ink-800">
                      <MessageCircle size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-800">
                        WhatsApp directo
                      </p>
                      <p className="mt-0.5 text-xs text-ink-400">
                        Respuesta en menos de 1 hora hábil. Tel +{site.whatsapp}.
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-start gap-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-lime-500/15 text-lime-700 group-hover:bg-lime-500 group-hover:text-ink-800">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-800">Email</p>
                      <p className="mt-0.5 text-xs text-ink-400">{site.email}</p>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x py-16 md:py-24" id="faq">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Antes de mandar el formulario</span>
            <h2 className="h-display mt-4 text-3xl md:text-4xl">
              Las preguntas que casi nadie hace pero todos quieren saber.
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
