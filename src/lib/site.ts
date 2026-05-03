export const site = {
  name: "Hierarchy Web Agency",
  shortName: "Hierarchy",
  domain: "hierarchywebagency.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hierarchywebagency.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@hierarchywebagency.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528127179766",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "hierarchywebagency.com",
  description:
    "Agencia mexicana de páginas web con stack premium (Next.js + Vercel) al precio de las locales. Entregamos en 48-72 horas.",
  tagline: "El stack que las agencias premium usan, al precio de las locales.",
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
