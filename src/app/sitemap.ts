import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ko: `${siteUrl}/`,
          en: `${siteUrl}/en/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ko: `${siteUrl}/`,
          en: `${siteUrl}/en/`,
        },
      },
    },
    {
      url: `${siteUrl}/privacy.html`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms.html`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/support.html`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
