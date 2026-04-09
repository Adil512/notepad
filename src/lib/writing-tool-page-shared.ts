import type { Metadata } from "next";
import {
  writingToolsMeta,
  type WritingToolId,
  isWritingToolId,
  isToolVisibleInLocale,
} from "@/lib/writing-tools-registry";
import { canonicalUrlForPage } from "@/lib/site";
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
import {
  getProductivityToolHero,
  getProductivityToolSeo,
} from "@/lib/seo/productivity-tools-seo";

export function getWritingToolHero(
  id: WritingToolId,
  locale: string
): { h1: string; description: string } {
  const m = writingToolsMeta[id];
  let hero = { h1: m.h1, description: m.heroDescription ?? m.description };
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
  } else {
    const productivityHero = getProductivityToolHero(id, locale);
    if (productivityHero) hero = productivityHero;
  }
  return hero;
}

export async function buildWritingToolPageMetadata({
  locale,
  tool,
  canonicalPath,
}: {
  locale: string;
  tool: string;
  canonicalPath: string;
}): Promise<Metadata> {
  if (!isWritingToolId(tool)) {
    return { title: "Tool" };
  }
  if (!isToolVisibleInLocale(tool, locale)) {
    return { title: "Tool" };
  }
  const m = writingToolsMeta[tool];
  const canonical = canonicalUrlForPage(locale, canonicalPath);
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
  }
  if (tool === "json-editor") {
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
  }
  if (tool === "html-editor") {
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
  }
  if (tool === "word-counter") {
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
  }
  if (tool === "character-counter") {
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
  }
  if (tool === "paragraph-counter") {
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
  }
  if (tool === "reading-time-calculator") {
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
  }
  if (tool === "case-converter") {
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
  }
  if (tool === "text-cleaner") {
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
  }
  if (tool === "duplicate-remover") {
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
  }
  if (tool === "text-sorter") {
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
  }
  if (tool === "text-compare-diff") {
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
  }
  if (tool === "json-formatter") {
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
  }
  if (tool === "sentence-counter") {
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
  }
  if (tool === "html-minifier") {
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
  }
  if (tool === "css-beautifier") {
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
  }
  if (tool === "base64-codec") {
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
  }
  if (tool === "url-codec") {
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
  }
  if (tool === "regex-tester") {
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
  }
  if (tool === "xml-formatter") {
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
  const productivitySeo = getProductivityToolSeo(tool, locale);
  if (productivitySeo) {
    return {
      title: productivitySeo.title,
      description: productivitySeo.description,
      alternates: { canonical },
      openGraph: {
        url: canonical,
        title: productivitySeo.title,
        description: productivitySeo.description,
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
