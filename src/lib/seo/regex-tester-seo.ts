import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

export const regexTesterSeo = Object.fromEntries(
  Object.entries(jsonFormatterSeo).map(([locale, seo]) => [
    locale,
    {
      title: seo.title.replaceAll("JSON", "Regex"),
      description: seo.description.replaceAll("JSON", "Regex"),
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["regex-tester"];

export function regexTesterHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getRegexTesterSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = regexTesterSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getRegexTesterHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getRegexTesterSeo(locale);
  return {
    h1: regexTesterHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
