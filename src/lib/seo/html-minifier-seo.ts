import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const htmlMinifierSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "HTML"),
      description: seo.description.replaceAll("JSON", "HTML"),
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
