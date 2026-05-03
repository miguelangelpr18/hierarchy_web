import type { Metadata } from "next";
import { site } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function pageMetadata({ title, description, path, ogImage }: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  const image = ogImage ?? `${site.url}/og-default.svg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
