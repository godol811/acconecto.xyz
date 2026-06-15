import { portfolioCopy } from "@/content/locales";
import type { Locale } from "@/content/types";
import { siteUrl } from "./metadata";

/**
 * JSON-LD structured data for rich results and AI/LLM understanding.
 * Emitted as a schema.org @graph linking the person, the studio, and the site.
 */
export function structuredData(locale: Locale): string {
  const copy = portfolioCopy[locale];
  const localeCode = locale === "ko" ? "ko-KR" : "en-US";
  const pageUrl = locale === "ko" ? `${siteUrl}/` : `${siteUrl}/en/`;
  const appUrls = copy.apps.items.map((item) => item.url);

  const graph = [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jongchan Ko",
      url: siteUrl,
      jobTitle: locale === "ko" ? "풀스택 소프트웨어 엔지니어" : "Full-stack software engineer",
      knowsLanguage: ["ko", "en"],
      sameAs: ["https://github.com/godol811", ...appUrls],
      worksFor: { "@id": `${siteUrl}/#studio` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#studio`,
      name: "Aconecto",
      url: siteUrl,
      image: `${siteUrl}/og.png`,
      description: copy.meta.description,
      founder: { "@id": `${siteUrl}/#person` },
      foundingDate: "2025",
      areaServed: "Worldwide",
      availableLanguage: ["ko", "en"],
      serviceType: [
        "Web development",
        "Mobile app development",
        "Backend development",
        "Cloud deployment",
        "MVP development",
        "Technical rescue",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: pageUrl,
      name: copy.meta.title,
      description: copy.meta.description,
      inLanguage: localeCode,
      publisher: { "@id": `${siteUrl}/#studio` },
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
