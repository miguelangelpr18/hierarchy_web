import { site } from "./site";

export type WhatsAppContext =
  | "general"
  | "enter"
  | "pro"
  | "platinum"
  | "audit"
  | "proceso"
  | "agencia"
  | "contacto";

const messages: Record<WhatsAppContext, string> = {
  general:
    "Hola, vengo del sitio de Hierarchy. Quiero platicar sobre una página web para mi negocio.",
  enter:
    "Hola, vengo del sitio de Hierarchy. Me interesa el Enter Plan ($3,900 + $550/mes). ¿Podemos platicar?",
  pro:
    "Hola, vengo del sitio de Hierarchy. Me interesa el Pro Plan ($7,500 + $650/mes). ¿Podemos platicar?",
  platinum:
    "Hola, vengo del sitio de Hierarchy. Me interesa el Platinum Plan ($16,900 + $850/mes). ¿Podemos platicar?",
  audit:
    "Hola, vengo del sitio de Hierarchy. Quiero la auditoría gratis de mi sitio actual.",
  proceso:
    "Hola, vengo del sitio de Hierarchy. Tengo dudas sobre el proceso de entrega.",
  agencia:
    "Hola, vengo del sitio de Hierarchy. Quiero saber más sobre cómo trabajan.",
  contacto:
    "Hola, vengo del sitio de Hierarchy. Quiero arrancar un proyecto.",
};

export function whatsappLink(context: WhatsAppContext = "general"): string {
  const text = encodeURIComponent(messages[context]);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function whatsappLinkCustom(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
