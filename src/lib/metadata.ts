import type { Metadata } from "next";
import { portfolioCopy } from "@/content/locales";
import type { Locale } from "@/content/types";

export const siteUrl = "https://acconecto.store";
const siteBase = new URL(siteUrl);
const ogImage = "/og.png";

const keywordsByLocale: Record<Locale, string[]> = {
  ko: [
    "프리랜서 개발자",
    "외주 개발",
    "풀스택 개발자",
    "웹 개발",
    "앱 개발",
    "백엔드 개발",
    "클라우드",
    "Next.js",
    "Flutter",
    "MVP 개발",
    "아코넥토",
    "Aconecto",
    "Jongchan Ko",
  ],
  en: [
    "freelance developer",
    "software outsourcing",
    "full-stack developer",
    "web development",
    "mobile app development",
    "backend development",
    "cloud deployment",
    "Next.js",
    "Flutter",
    "MVP development",
    "Korea software studio",
    "Aconecto",
    "Jongchan Ko",
  ],
};

export function pageMetadata(locale: Locale, pathname: "/" | "/ko/" | "/en/"): Metadata {
  const copy = portfolioCopy[locale];
  // The Korean root ("/") and "/ko/" render the same page — dedupe "/ko/" to root.
  const canonical = pathname === "/ko/" ? "/" : pathname;

  return {
    metadataBase: siteBase,
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: keywordsByLocale[locale],
    applicationName: "Aconecto",
    authors: [{ name: "Jongchan Ko", url: siteUrl }],
    creator: "Jongchan Ko",
    publisher: "Aconecto",
    alternates: {
      canonical,
      languages: {
        ko: "/",
        en: "/en/",
        "x-default": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: canonical,
      siteName: "Aconecto",
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Aconecto — Jongchan Ko, full-stack freelance developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
      images: [ogImage],
    },
  };
}
