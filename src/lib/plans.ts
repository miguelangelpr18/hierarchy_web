// Single source of truth for the three public plans (Plan Recurrente only — One-shot is private).
// Prices match docs/PRICING.md (source: Hierarchy v2 post-audit).

export type Plan = {
  slug: "enter" | "pro" | "platinum";
  name: string;
  tagline: string;
  audience: string;
  initial: number;
  monthly: number;
  annualUpfront: number; // anual con promo -2 meses (paga 10, recibe 12)
  monthlyEffectiveAnnual: number;
  yearOneTotalMonthly: number;
  yearOneTotalAnnual: number;
  delivery: string;
  recommended: boolean;
  includes: string[];
  maintenanceIncludes: string[];
};

export const plans: Plan[] = [
  {
    slug: "enter",
    name: "Enter Plan",
    tagline: "Tu primera presencia digital, lista en 48 a 72 horas.",
    audience: "Estéticas, talleres, salones, despachos y consultorios pequeños.",
    initial: 3900,
    monthly: 550,
    annualUpfront: 5500,
    monthlyEffectiveAnnual: 458,
    yearOneTotalMonthly: 10500,
    yearOneTotalAnnual: 9400,
    delivery: "48-72 horas",
    recommended: false,
    includes: [
      "Landing page de una sola página, hasta 5 secciones",
      "Diseño responsive (mobile-first)",
      "Botón flotante de WhatsApp",
      "Integración con Google Maps",
      "Formulario que envía a WhatsApp o email",
      "Listo para Google con SEO local de tu negocio",
      "Hosting profesional + dominio .com (1 año)",
      "Certificado SSL incluido",
    ],
    maintenanceIncludes: [
      "Hosting + dominio + SSL",
      "Soporte por WhatsApp en horario laboral",
      "2 cambios pequeños al mes (texto, fotos, horarios)",
      "Backups semanales automáticos",
      "Updates de seguridad",
    ],
  },
  {
    slug: "pro",
    name: "Pro Plan",
    tagline: "El sweet spot para negocios establecidos con varios servicios.",
    audience: "Restaurantes, clínicas, despachos, talleres con sucursales, escuelas.",
    initial: 7500,
    monthly: 650,
    annualUpfront: 6500,
    monthlyEffectiveAnnual: 542,
    yearOneTotalMonthly: 15300,
    yearOneTotalAnnual: 14000,
    delivery: "5-7 días",
    recommended: true,
    includes: [
      "Hasta 5 páginas (Inicio, Servicios, Sobre nosotros, Galería, Contacto)",
      "Blog opcional con CMS simple",
      "SEO local avanzado (schema completo, sitemap, robots, Open Graph)",
      "Integración con Google Business Profile",
      "Integración con calendario de citas (Calendly o similar)",
      "Hasta 3 formularios distintos",
      "Galería con lightbox",
      "Animaciones suaves (Framer Motion ligero)",
      "Analítica de visitantes sin cookies, sin banner",
      "Hasta 5 emails con dominio del cliente",
    ],
    maintenanceIncludes: [
      "Todo lo del Enter Plan",
      "Hasta 4 cambios pequeños al mes",
      "Reporte mensual de tráfico y posicionamiento",
      "1 publicación al mes en blog del cliente (si tiene)",
    ],
  },
  {
    slug: "platinum",
    name: "Platinum Plan",
    tagline: "Para vender online sin amarrarte a Shopify.",
    audience: "Tiendas físicas que quieren e-commerce, marcas DTC, infoproductos.",
    initial: 16900,
    monthly: 850,
    annualUpfront: 8500,
    monthlyEffectiveAnnual: 708,
    yearOneTotalMonthly: 27100,
    yearOneTotalAnnual: 25400,
    delivery: "10-14 días",
    recommended: false,
    includes: [
      "E-commerce básico hasta 30 productos",
      "Pasarela de pago (Stripe, Mercado Pago o Conekta)",
      "Panel de administración para editar contenido",
      "Sistema de pedidos por WhatsApp con catálogo",
      "Múltiples métodos de envío configurables",
      "Hasta 10 emails con dominio",
      "Píxel de Meta Ads + Google Tag Manager configurados",
      "Integración con CRM (HubSpot Free o Brevo)",
      "Página de testimonios con reviews integradas",
    ],
    maintenanceIncludes: [
      "Todo lo del Pro Plan",
      "Hasta 8 cambios pequeños al mes",
      "Soporte para alta de productos (hasta 5/mes)",
      "Monitoreo de transacciones y reporte semanal",
      "Optimización mensual de Core Web Vitals",
    ],
  },
];

export function planBySlug(slug: Plan["slug"]): Plan {
  const plan = plans.find((p) => p.slug === slug);
  if (!plan) throw new Error(`Plan not found: ${slug}`);
  return plan;
}

export function formatMxn(amount: number): string {
  return `$${amount.toLocaleString("es-MX")} MXN`;
}
