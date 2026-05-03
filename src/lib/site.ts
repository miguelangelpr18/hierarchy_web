export const site = {
  name: "Hierarchy Web Agency",
  shortName: "Hierarchy",
  domain: "hierarchywebagency.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hierarchywebagency.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hierarchywebagency@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528127179766",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "hierarchywebagency.com",
  description:
    "Agencia mexicana de páginas web profesionales para negocios locales. Entregamos en 48 a 72 horas, atención por WhatsApp directo.",
  tagline: "Páginas web profesionales para negocios mexicanos.",
  locale: "es-MX",
  socials: {
    instagram: null,
    tiktok: null,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/planes", label: "Planes" },
  { href: "/proceso", label: "Proceso" },
  { href: "/agencia", label: "Agencia" },
  { href: "/contacto", label: "Contacto" },
] as const;
