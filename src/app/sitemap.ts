import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date("2026-05-03"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/planes`,
      lastModified: new Date("2026-05-03"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/proceso`,
      lastModified: new Date("2026-05-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/contacto`,
      lastModified: new Date("2026-05-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/agencia`,
      lastModified: new Date("2026-05-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
