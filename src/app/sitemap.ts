import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/planes", priority: 0.9 },
    { url: "/proceso", priority: 0.8 },
    { url: "/agencia", priority: 0.7 },
    { url: "/contacto", priority: 0.8 },
  ];
  return routes.map(({ url, priority }) => ({
    url: `${site.url}${url}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
