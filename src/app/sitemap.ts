import type { MetadataRoute } from "next";
import { siteConfig, programs } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const programPages: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${siteConfig.url}/program/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...programPages,
  ];
}
