"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/5 bg-bone-50/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-ink-800 font-medium" : "text-ink-400 hover:text-ink-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hablemos por WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-ink-800 hover:bg-ink-800/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-800/5 bg-bone-50 md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2.5 text-base ${
                    active ? "bg-ink-800/5 font-medium text-ink-800" : "text-ink-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={whatsappLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
