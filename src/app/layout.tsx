import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Páginas web premium para negocios mexicanos`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Páginas web premium para negocios mexicanos`,
    description: site.description,
    images: [
      { url: "/og-default.svg", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-default.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF6",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/og-default.svg`,
  description: site.description,
  email: site.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "MX",
      availableLanguage: ["es", "en"],
      telephone: `+${site.whatsapp}`,
    },
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: site.locale,
  publisher: { "@type": "Organization", name: site.name },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Diseño y desarrollo de páginas web",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "México" },
  audience: { "@type": "BusinessAudience", audienceType: "PyMEs mexicanas" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes Hierarchy",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Enter Plan",
        priceCurrency: "MXN",
        price: 3900,
        description: "Landing page profesional entregada en 48-72 horas.",
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        priceCurrency: "MXN",
        price: 7500,
        description: "Sitio multi-página con SEO local avanzado, entregado en 5-7 días.",
      },
      {
        "@type": "Offer",
        name: "Platinum Plan",
        priceCurrency: "MXN",
        price: 16900,
        description: "E-commerce con pasarela de pago, entregado en 10-14 días.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <JsonLd data={[organizationSchema, websiteSchema, serviceSchema]} />
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            data-domain={site.plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen bg-bone-50 font-sans text-ink-800 antialiased">
        <noscript>
          <div className="container-x py-8">
            <h1 className="text-3xl font-semibold tracking-tightest">
              Hierarchy Web Agency
            </h1>
            <p className="mt-3 max-w-prose text-base text-ink-500">
              Construimos páginas web premium para negocios mexicanos con stack moderno
              (Next.js + Vercel) y precios accesibles. Entregamos en 48-72 horas el plan
              de entrada. Contáctanos por WhatsApp al{" "}
              <a className="underline" href={`https://wa.me/${site.whatsapp}`}>
                +{site.whatsapp}
              </a>{" "}
              o por email a{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-ink-500">
              <li>Enter Plan — $3,900 MXN inicial + $550 MXN/mes</li>
              <li>Pro Plan — $7,500 MXN inicial + $650 MXN/mes</li>
              <li>Platinum Plan — $16,900 MXN inicial + $850 MXN/mes</li>
            </ul>
          </div>
        </noscript>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
