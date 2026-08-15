import Link from "next/link";
import type { Metadata } from "next";
import {
  TEXT_ANALYSIS_HUB_TOOL_IDS,
  isToolVisibleInLocale,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight } from "lucide-react";

const CONTENT = {
  en: {
    metaTitle: "Free Text Analysis Tools – Count Words, Characters & Compare Text Online",
    metaDesc: "Analyze and optimize text with free tools including Word Counter, Character Counter, Sentence Counter, Paragraph Counter, Reading Time Calculator, Case Converter, Text Cleaner, Duplicate Line Remover, Text Sorter, and Text Compare.",
    pageTitle: "Text analysis tools",
    introPrefix: "Our text analysis tools help you measure, evaluate, and optimize written content for readability and structure. Start with a ",
    introWordCounter: "word counter",
    introOr: " or ",
    introCharCounter: "character counter",
    introStart: ", then dig into ",
    introSentences: "sentences",
    introAnd: " and ",
    introParagraphs: "paragraphs",
    introDig: ", estimate ",
    introReadingTime: "reading time",
    introEstimate: ", adjust ",
    introCase: "case",
    introSuffix: ", clean or sort lines, and compare drafts—all without uploading your content to a server.",
    ctaAllTools: "All tools",
    ctaEditorTools: "Editor tools",
    ctaWritingTools: "Writing tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Tools",
    toolTitles: {
      "word-counter": "Word Counter",
      "character-counter": "Character Counter",
      "sentence-counter": "Sentence Counter",
      "paragraph-counter": "Paragraph Counter",
      "reading-time-calculator": "Reading Time Calculator",
      "case-converter": "Case Converter",
      "text-cleaner": "Text Cleaner",
      "duplicate-remover": "Duplicate Line Remover",
      "text-sorter": "Text Sorter",
      "text-compare-diff": "Text Compare",
    },
  },
  ko: {
    metaTitle: "무료 텍스트 분석 도구 – 온라인 단어, 글자 수 계산 및 텍스트 비교",
    metaDesc: "단어 계산기, 글자 수 계산기, 문장 계산기, 단락 계산기, 읽기 시간 계산기, 대소문자 변환기, 텍스트 정리기, 중복 라인 제거기, 텍스트 정렬기, 텍스트 비교기를 포함한 무료 도구로 텍스트를 분석하고 최적화해 보세요.",
    pageTitle: "텍스트 분석 도구",
    introPrefix: "저희 텍스트 분석 도구는 가독성과 구조를 위해 작성된 콘텐츠를 측정, 평가 및 최적화하도록 돕습니다. ",
    introWordCounter: "단어 계산기",
    introOr: " 또는 ",
    introCharCounter: "글자 수 계산기",
    introStart: "로 시작한 다음, ",
    introSentences: "문장",
    introAnd: " 및 ",
    introParagraphs: "단락",
    introDig: "을 세부적으로 분석하고, ",
    introReadingTime: "읽기 시간",
    introEstimate: "을 예측하고, ",
    introCase: "대소문자",
    introSuffix: "를 조절하거나 줄을 정리 또는 정렬하고, 초안을 비교해 보세요. 이 모든 작업은 콘텐츠를 서버에 업로드하지 않고 수행됩니다.",
    ctaAllTools: "모든 도구",
    ctaEditorTools: "에디터 도구",
    ctaWritingTools: "글쓰기 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "도구",
    toolTitles: {
      "word-counter": "단어 계산기",
      "character-counter": "글자 수 계산기",
      "sentence-counter": "문장 계산기",
      "paragraph-counter": "단락 계산기",
      "reading-time-calculator": "읽기 시간 계산기",
      "case-converter": "대소문자 변환기",
      "text-cleaner": "텍스트 정리기",
      "duplicate-remover": "중복 라인 제거기",
      "text-sorter": "텍스트 정렬기",
      "text-compare-diff": "텍스트 비교기",
    },
  },
  zh: {
    metaTitle: "免费在线文本分析工具 – 字数、字符数计算及文本对比",
    metaDesc: "使用免费工具分析和优化文本，包括字数统计器、字符数统计器、句子统计器、段落统计器、阅读时间估算器、大小写转换器、文本清洗器、重复行删除器、文本排序器和文本对比工具。",
    pageTitle: "文本分析工具",
    introPrefix: "我们的文本分析工具可以帮助您测量、评估和优化所编写内容的易读性与结构。您可以从 ",
    introWordCounter: "字数统计",
    introOr: " 或 ",
    introCharCounter: "字符数统计",
    introStart: " 开始，然后深入分析 ",
    introSentences: "句子",
    introAnd: " 与 ",
    introParagraphs: "段落",
    introDig: "，估算 ",
    introReadingTime: "阅读时间",
    introEstimate: "，调整 ",
    introCase: "大小写",
    introSuffix: "，清洗或排序文本行，以及对比草稿——所有操作均无需将您的内容上传到服务器。",
    ctaAllTools: "所有工具",
    ctaEditorTools: "编辑器工具",
    ctaWritingTools: "写作工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "工具",
    toolTitles: {
      "word-counter": "字数统计",
      "character-counter": "字符数统计",
      "sentence-counter": "句子统计",
      "paragraph-counter": "段落统计",
      "reading-time-calculator": "阅读时间计算器",
      "case-converter": "大小写转换器",
      "text-cleaner": "文本清洗器",
      "duplicate-remover": "重复行删除器",
      "text-sorter": "文本排序器",
      "text-compare-diff": "文本对比",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/text");
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: t.metaTitle,
      description: t.metaDesc,
    },
  };
}

export default async function TextAnalysisCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = TEXT_ANALYSIS_HUB_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(244_63_94/0.08),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(251_113_133/0.12),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.pageTitle}
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              {t.introPrefix}
              <Link
                href={L("/tools/text/word-counter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introWordCounter}
              </Link>
              {t.introOr}
              <Link
                href={L("/tools/text/character-counter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introCharCounter}
              </Link>
              {t.introStart}
              <Link
                href={L("/tools/text/sentence-counter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introSentences}
              </Link>
              {t.introAnd}
              <Link
                href={L("/tools/text/paragraph-counter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introParagraphs}
              </Link>
              {t.introDig}
              <Link
                href={L("/tools/text/reading-time-calculator")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introReadingTime}
              </Link>
              {t.introEstimate}
              <Link
                href={L("/tools/text/case-converter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introCase}
              </Link>
              {t.introSuffix}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaAllTools}
            </Link>
            <Link
              href={L("/tools/editors")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaEditorTools}
            </Link>
            <Link
              href={L("/tools/writing")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaWritingTools}
            </Link>
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              {t.ctaNotepadEditor}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section className="mt-14" aria-labelledby="text-tools-grid-heading">
          <h2
            id="text-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <TextAnalysisToolCard
                key={id}
                id={id}
                href={L(`/tools/text/${id}`)}
                title={
                  t.toolTitles[id as keyof typeof t.toolTitles] ??
                  writingToolsMeta[id].h1
                }
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function TextAnalysisToolCard({
  id,
  href,
  title,
}: {
  id: WritingToolId;
  href: string;
  title: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-rose-200/80 bg-orange-50/60 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-orange-50/90 hover:shadow-md dark:border-rose-900/40 dark:bg-rose-950/20 dark:hover:bg-rose-950/30 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/15 to-orange-500/10 text-primary dark:from-rose-400/15 dark:to-orange-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{title}</span>
        </span>
      </Link>
    </li>
  );
}
