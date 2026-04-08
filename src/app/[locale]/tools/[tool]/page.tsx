import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import {
  WRITING_TOOL_IDS,
  writingToolsMeta,
  writingToolCategoryAccent,
  isWritingToolId,
  type WritingToolCategory,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { WritingToolView } from "@/components/tools/WritingToolView";
import { defaultLocale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import {
  getMarkdownNotepadHero,
  getMarkdownNotepadSeo,
} from "@/lib/seo/markdown-notepad-seo";
import {
  getJsonEditorHero,
  getJsonEditorSeo,
} from "@/lib/seo/json-editor-seo";
import {
  getHtmlEditorHero,
  getHtmlEditorSeo,
} from "@/lib/seo/html-editor-seo";
import {
  getWordCounterHero,
  getWordCounterSeo,
} from "@/lib/seo/word-counter-seo";
import {
  getCharacterCounterHero,
  getCharacterCounterSeo,
} from "@/lib/seo/character-counter-seo";
import {
  getParagraphCounterHero,
  getParagraphCounterSeo,
} from "@/lib/seo/paragraph-counter-seo";
import {
  getReadingTimeCalculatorHero,
  getReadingTimeCalculatorSeo,
} from "@/lib/seo/reading-time-calculator-seo";
import {
  getCaseConverterHero,
  getCaseConverterSeo,
} from "@/lib/seo/case-converter-seo";
import {
  getTextCleanerHero,
  getTextCleanerSeo,
} from "@/lib/seo/text-cleaner-seo";
import {
  getDuplicateRemoverHero,
  getDuplicateRemoverSeo,
} from "@/lib/seo/duplicate-remover-seo";
import {
  getTextSorterHero,
  getTextSorterSeo,
} from "@/lib/seo/text-sorter-seo";
import {
  getTextCompareDiffHero,
  getTextCompareDiffSeo,
} from "@/lib/seo/text-compare-diff-seo";
import {
  getJsonFormatterHero,
  getJsonFormatterSeo,
} from "@/lib/seo/json-formatter-seo";
import {
  getSentenceCounterHero,
  getSentenceCounterSeo,
} from "@/lib/seo/sentence-counter-seo";
import {
  getHtmlMinifierHero,
  getHtmlMinifierSeo,
} from "@/lib/seo/html-minifier-seo";
import {
  getCssBeautifierHero,
  getCssBeautifierSeo,
} from "@/lib/seo/css-beautifier-seo";
import {
  getBase64CodecHero,
  getBase64CodecSeo,
} from "@/lib/seo/base64-codec-seo";
import {
  getUrlCodecHero,
  getUrlCodecSeo,
} from "@/lib/seo/url-codec-seo";
import {
  getRegexTesterHero,
  getRegexTesterSeo,
} from "@/lib/seo/regex-tester-seo";
import {
  getXmlFormatterHero,
  getXmlFormatterSeo,
} from "@/lib/seo/xml-formatter-seo";
import { ToolPageEducation } from "@/components/tools/ToolPageEducation";
import {
  formatToolNameForHeading,
  getToolFaqSchema,
  getToolPageEducation,
} from "@/lib/tool-page-education-content";

export const dynamicParams = true;

export function generateStaticParams() {
  return WRITING_TOOL_IDS.map((tool) => ({
    locale: defaultLocale,
    tool,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isWritingToolId(tool)) {
    return { title: "Tool" };
  }
  const m = writingToolsMeta[tool];
  const canonical = canonicalUrlForPage(locale, `/tools/${tool}`);
  if (tool === "markdown-notepad") {
    const seo = getMarkdownNotepadSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "json-editor") {
    const seo = getJsonEditorSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "html-editor") {
    const seo = getHtmlEditorSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "word-counter") {
    const seo = getWordCounterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "character-counter") {
    const seo = getCharacterCounterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "paragraph-counter") {
    const seo = getParagraphCounterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "reading-time-calculator") {
    const seo = getReadingTimeCalculatorSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "case-converter") {
    const seo = getCaseConverterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "text-cleaner") {
    const seo = getTextCleanerSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "duplicate-remover") {
    const seo = getDuplicateRemoverSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "text-sorter") {
    const seo = getTextSorterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "text-compare-diff") {
    const seo = getTextCompareDiffSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "json-formatter") {
    const seo = getJsonFormatterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "sentence-counter") {
    const seo = getSentenceCounterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "html-minifier") {
    const seo = getHtmlMinifierSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "css-beautifier") {
    const seo = getCssBeautifierSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "base64-codec") {
    const seo = getBase64CodecSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "url-codec") {
    const seo = getUrlCodecSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "regex-tester") {
    const seo = getRegexTesterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  } else if (tool === "xml-formatter") {
    const seo = getXmlFormatterSeo(locale);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: seo.title,
        description: seo.description,
      },
    };
  }
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function WritingToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  if (!isWritingToolId(tool)) notFound();

  const id = tool as WritingToolId;
  const m = writingToolsMeta[id];
  const hub = localizedPath(locale, "/tools");
  const accent = writingToolCategoryAccent[m.category];
  let hero = { h1: m.h1, description: m.description };
  if (id === "markdown-notepad") {
    hero = getMarkdownNotepadHero(locale);
  } else if (id === "json-editor") {
    hero = getJsonEditorHero(locale);
  } else if (id === "html-editor") {
    hero = getHtmlEditorHero(locale);
  } else if (id === "word-counter") {
    hero = getWordCounterHero(locale);
  } else if (id === "character-counter") {
    hero = getCharacterCounterHero(locale);
  } else if (id === "paragraph-counter") {
    hero = getParagraphCounterHero(locale);
  } else if (id === "reading-time-calculator") {
    hero = getReadingTimeCalculatorHero(locale);
  } else if (id === "case-converter") {
    hero = getCaseConverterHero(locale);
  } else if (id === "text-cleaner") {
    hero = getTextCleanerHero(locale);
  } else if (id === "duplicate-remover") {
    hero = getDuplicateRemoverHero(locale);
  } else if (id === "text-sorter") {
    hero = getTextSorterHero(locale);
  } else if (id === "text-compare-diff") {
    hero = getTextCompareDiffHero(locale);
  } else if (id === "json-formatter") {
    hero = getJsonFormatterHero(locale);
  } else if (id === "sentence-counter") {
    hero = getSentenceCounterHero(locale);
  } else if (id === "html-minifier") {
    hero = getHtmlMinifierHero(locale);
  } else if (id === "css-beautifier") {
    hero = getCssBeautifierHero(locale);
  } else if (id === "base64-codec") {
    hero = getBase64CodecHero(locale);
  } else if (id === "url-codec") {
    hero = getUrlCodecHero(locale);
  } else if (id === "regex-tester") {
    hero = getRegexTesterHero(locale);
  } else if (id === "xml-formatter") {
    hero = getXmlFormatterHero(locale);
  }
  const education = getToolPageEducation(id);
  const faqSchema = getToolFaqSchema(id);
  const educationToolName = formatToolNameForHeading(hero.h1);
  const heroPanel = toolHeroPanelClass(m.category);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div
          className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${heroPanel}`}
        >
          <Link
            href={hub}
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm transition hover:border-primary/30 hover:text-primary dark:bg-background/70"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Toolkit
          </Link>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/10 dark:shadow-black/30 sm:h-20 sm:w-20`}
            >
              <ToolIcon id={id} className="h-9 w-9 sm:h-10 sm:w-10" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {hero.h1}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <WritingToolView id={id} />
      </div>

      {education ? (
        <ToolPageEducation
          toolName={educationToolName}
          content={education}
        />
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </div>
  );
}

function toolHeroPanelClass(cat: WritingToolCategory): string {
  switch (cat) {
    case "analysis":
      return "border-rose-200/80 bg-orange-50/60 dark:border-rose-900/40 dark:bg-rose-950/20";
    case "devtools":
      return "border-indigo-200/80 bg-indigo-50/65 dark:border-indigo-900/45 dark:bg-indigo-950/25";
    default:
      return "border-violet-200/80 bg-violet-50/65 dark:border-violet-900/45 dark:bg-violet-950/25";
  }
}
