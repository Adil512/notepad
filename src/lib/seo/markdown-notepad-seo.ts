import { writingToolsMeta } from "@/lib/writing-tools-registry";
import { markdownNotepadSeoPacksA } from "@/lib/seo/markdown-notepad-seo-packs-a";
import { markdownNotepadSeoPacksB } from "@/lib/seo/markdown-notepad-seo-packs-b";

const baseMeta = writingToolsMeta["markdown-notepad"];

const MARKDOWN_NOTEPAD_SEO: Record<
  string,
  { title: string; description: string }
> = {
  ...markdownNotepadSeoPacksA,
  ...markdownNotepadSeoPacksB,
};

/** Short H1 from localized title (segment before en/em dash) or fallback. */
export function markdownNotepadHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " — ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getMarkdownNotepadSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = MARKDOWN_NOTEPAD_SEO[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getMarkdownNotepadHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getMarkdownNotepadSeo(locale);
  return {
    h1: markdownNotepadHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
