import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const xmlFormatterSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "XML"),
      description: seo.description.replaceAll("JSON", "XML"),
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["xml-formatter"];

export function xmlFormatterHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getXmlFormatterSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = xmlFormatterSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getXmlFormatterHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getXmlFormatterSeo(locale);
  return {
    h1: xmlFormatterHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
