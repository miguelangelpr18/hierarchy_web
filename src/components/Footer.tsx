import Link from "next/link";
import { Logo } from "./Logo";
import { site, navLinks } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

const stack = ["Next.js 15", "Vercel", "Tailwind CSS", "TypeScript"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800/5 bg-bone-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
            Construimos sitios premium con stack moderno, al precio que un negocio mexicano sí
            puede pagar. Hosting, código y dominio siempre a tu nombre.
          </p>
          <a
            href={whatsappLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-medium text-ink-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:decoration-ink-800"
          >
            Hablemos por WhatsApp →
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300">Sitio</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink-800">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300">
            Stack que entregamos
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink-800/10 bg-bone-50 px-3 py-1 text-xs font-medium text-ink-500"
              >
                {s}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink-300">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-500">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink-800">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-800"
              >
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800/5">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Hecho en México.</p>
          <p>
            Sin cookies de tracking. Analítica con{" "}
            <span className="text-ink-500">Plausible</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
