import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

const locales = Object.keys(jsonFormatterSeo);

export const htmlMinifierSeo = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      title: "HTML Minifier Online – Compress & Optimize HTML Code Free",
      description:
        "Minify and compress HTML code instantly with this free online HTML minifier. Reduce file size, speed up pages, and optimize website performance.",
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["html-minifier"];

export function htmlMinifierHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getHtmlMinifierSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = htmlMinifierSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getHtmlMinifierHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getHtmlMinifierSeo(locale);
  return {
    h1: htmlMinifierHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
