import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const base64CodecSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "Base64"),
      description: seo.description.replaceAll("JSON", "Base64"),
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["base64-codec"];

export function base64CodecHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getBase64CodecSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = base64CodecSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getBase64CodecHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getBase64CodecSeo(locale);
  return {
    h1: base64CodecHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
