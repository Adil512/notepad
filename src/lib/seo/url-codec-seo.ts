import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

const locales = Object.keys(jsonFormatterSeo);

export const urlCodecSeo = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      title: "URL Encoder & Decoder – Encode or Decode URLs Online Free",
      description:
        "Encode or decode URLs instantly with this free online URL encoder/decoder. Convert special characters safely for web links, APIs, and query strings.",
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["url-codec"];

export function urlCodecHeadlineFromTitle(title: string, fallback: string): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getUrlCodecSeo(locale: string): { title: string; description: string } {
  const pack = urlCodecSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getUrlCodecHero(locale: string): { h1: string; description: string } {
  const { title, description } = getUrlCodecSeo(locale);
  return {
    h1: urlCodecHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
