import type { Metadata } from "next";
import { portfolioCopy } from "@/content/locales";
import type { Locale } from "@/content/types";

const siteBase = new URL("https://aconecto.dev");

export function pageMetadata(locale: Locale, pathname: "/" | "/ko/" | "/en/"): Metadata {
  const copy = portfolioCopy[locale];

  return {
    metadataBase: siteBase,
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: pathname,
      languages: {
        ko: "/ko/",
        en: "/en/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
  };
}
