import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { jsonFormatterSeo } from "@/lib/seo/json-formatter-seo";

const locales = Object.keys(jsonFormatterSeo);

export const sentenceCounterSeo = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      title: "Sentence Counter Online – Free Text Sentence Count Tool",
      description:
        "Count sentences in your text instantly with this free online sentence counter. Fast, accurate, and useful for writers, students, and content creators.",
    },
  ])
) as Record<string, { title: string; description: string }>;

const baseMeta = writingToolsMeta["sentence-counter"];

export function sentenceCounterHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getSentenceCounterSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = sentenceCounterSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getSentenceCounterHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getSentenceCounterSeo(locale);
  return {
    h1: sentenceCounterHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
