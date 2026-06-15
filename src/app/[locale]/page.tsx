import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { isLocale, locales } from "@/content/locales";
import type { Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { structuredData } from "@/lib/structuredData";

export const dynamicParams = false;

type LocalePageProps = {
  readonly params: Promise<{
    readonly locale: string;
  }>;
};

const localePath: Record<Locale, "/ko/" | "/en/"> = {
  ko: "/ko/",
  en: "/en/",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return pageMetadata("ko", "/ko/");
  }

  return pageMetadata(locale, localePath[locale]);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json">{structuredData(locale)}</script>
      <PortfolioPage locale={locale} />
    </>
  );
}
