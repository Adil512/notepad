import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const cssBeautifierSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "CSS"),
      description: seo.description.replaceAll("JSON", "CSS"),
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["css-beautifier"];

export function cssBeautifierHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getCssBeautifierSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = cssBeautifierSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getCssBeautifierHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getCssBeautifierSeo(locale);
  return {
    h1: cssBeautifierHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
