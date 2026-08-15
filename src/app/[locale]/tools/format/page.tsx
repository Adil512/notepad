import Link from "next/link";
import type { Metadata } from "next";
import {
  TEXT_FORMAT_CONVERTER_TOOL_IDS,
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
    metaTitle: "Text Utility Tools | Notepad.is",
    metaDesc: "Use text utility tools for fast cleaning, formatting, transforming, and comparing text, including case changes, line operations, and minification.",
    pageTitle: "Text Utility Tools",
    intro: "Text utility tools provide fast and lightweight operations for cleaning, formatting, transforming, and comparing text. This includes case conversion, duplicate removal, text sorting, line merging, diff checker, and text cleaning utilities.",
    ctaAllTools: "All tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Text utility tools",
    toolLabels: {
      "text-uppercase-lowercase": { h1: "Case Converter", tagline: "Upper, lower, title, sentence, capital case" },
      "text-to-camel-case": { h1: "Camel Case Converter", tagline: "Transform text to camelCase style" },
      "text-to-snake-case": { h1: "Snake Case Converter", tagline: "Transform text to snake_case style" },
      "text-to-kebab-case": { h1: "Kebab Case Converter", tagline: "Transform text to kebab-case style" },
      "split-text-to-columns": { h1: "Split Text to Columns", tagline: "Split lines into columns by delimiters" },
      "merge-text-lines": { h1: "Merge Text Lines", tagline: "Combine multiple lines into a single line" },
      "convert-line-endings": { h1: "Convert Line Endings", tagline: "Change line endings to Windows, Mac, Linux format" },
      "minify-json": { h1: "Minify JSON", tagline: "Compress JSON by removing whitespace and line breaks" },
      "minify-xml": { h1: "Minify XML", tagline: "Compress XML by removing whitespace and line breaks" },
      "paste-clean": { h1: "Paste & Clean Text", tagline: "Remove formatting, lines, and clean text" },
      "compare-drafts": { h1: "Compare Text (Diff)", tagline: "Compare two texts side-by-side to find differences" },
    },
  },
  ko: {
    metaTitle: "텍스트 유틸리티 도구 | Notepad.is",
    metaDesc: "대소문자 변경, 줄 작업 및 압축을 포함하여 텍스트를 빠르게 정리, 포맷, 변환 및 비교할 수 있는 텍스트 유틸리티 도구를 사용해 보세요.",
    pageTitle: "텍스트 유틸리티 도구",
    intro: "텍스트 유틸리티 도구는 텍스트를 정리, 포맷, 변환 및 비교하기 위한 빠르고 가벼운 작업을 제공합니다. 여기에는 대소문자 변환, 중복 라인 제거, 텍스트 정렬, 줄 합치기, 차이(diff) 검사기 및 텍스트 정리 유틸리티가 포함됩니다.",
    ctaAllTools: "모든 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "텍스트 유틸리티 도구",
    toolLabels: {
      "text-uppercase-lowercase": { h1: "대소문자 변환기", tagline: "대문자, 소문자, 제목 표시 등" },
      "text-to-camel-case": { h1: "카멜 케이스 변환기", tagline: "camelCase 형식으로 단어 변환" },
      "text-to-snake-case": { h1: "스네이크 케이스 변환기", tagline: "snake_case 형식으로 단어 변환" },
      "text-to-kebab-case": { h1: "케밥 케이스 변환기", tagline: "kebab-case 형식으로 단어 변환" },
      "split-text-to-columns": { h1: "텍스트 열 분할기", tagline: "구분 기호 기준으로 텍스트 열 나누기" },
      "merge-text-lines": { h1: "텍스트 줄 병합기", tagline: "여러 줄의 텍스트를 하나의 라인으로 합치기" },
      "convert-line-endings": { h1: "줄 바꿈 문자 변환기", tagline: "Windows, Mac, Linux 간 줄 바꿈 형식 변환" },
      "minify-json": { h1: "JSON 미니파이어", tagline: "공백과 줄 바꿈을 제거하여 JSON 압축" },
      "minify-xml": { h1: "XML 미니파이어", tagline: "공백과 줄 바꿈을 제거하여 XML 압축" },
      "paste-clean": { h1: "텍스트 정리기", tagline: "서식과 빈 줄을 제거하고 텍스트 정리" },
      "compare-drafts": { h1: "텍스트 비교기", tagline: "두 텍스트를 나란히 비교하여 차이점 확인" },
    },
  },
  zh: {
    metaTitle: "文本实用工具 | Notepad.is",
    metaDesc: "使用文本实用工具快速清洗、格式化、转换和对比文本，包括大小写转换、文本行操作和代码压缩。",
    pageTitle: "文本实用工具",
    intro: "文本实用工具为清洗、格式化、转换和对比文本提供了快速且轻量级的操作。这包括大小写转换、重复行删除、文本排序、文本行合并、差异对比（diff）和文本清洗等实用工具。",
    ctaAllTools: "所有工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "文本实用工具",
    toolLabels: {
      "text-uppercase-lowercase": { h1: "大小写转换器", tagline: "大写、小写、标题格式、首字母大写等" },
      "text-to-camel-case": { h1: "驼峰命名转换器", tagline: "将文本转换为 camelCase 格式" },
      "text-to-snake-case": { h1: "下划线命名转换器", tagline: "将文本转换为 snake_case 格式" },
      "text-to-kebab-case": { h1: "短横线命名转换器", tagline: "将文本转换为 kebab-case 格式" },
      "split-text-to-columns": { h1: "分列工具", tagline: "通过分隔符将单行文本拆分为多列" },
      "merge-text-lines": { h1: "文本行合并器", tagline: "将多行文本合并为单行" },
      "convert-line-endings": { h1: "换行符转换器", tagline: "在 Windows、Mac、Linux 格式之间转换换行符" },
      "minify-json": { h1: "JSON 压缩器", tagline: "通过删除空格和换行符来压缩 JSON" },
      "minify-xml": { h1: "XML 压缩器", tagline: "通过删除空格和换行符来压缩 XML" },
      "paste-clean": { h1: "纯文本清洗器", tagline: "删除格式和空白行，净化文本内容" },
      "compare-drafts": { h1: "文本对比器 (Diff)", tagline: "并排对比两个文本以查找差异" },
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/format");
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

export default async function FormatToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = TEXT_FORMAT_CONVERTER_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(20_184_166/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(45_212_191/0.16),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.pageTitle}
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{t.intro}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaAllTools}
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

        <section className="mt-14" aria-labelledby="format-tools-grid-heading">
          <h2
            id="format-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <FormatToolCard
                key={id}
                id={id}
                href={
                  locale === "zh"
                    ? `/tools/format/${id}`
                    : L(`/tools/format/${id}`)
                }
                labels={t.toolLabels[id as keyof typeof t.toolLabels]}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function FormatToolCard({
  id,
  href,
  labels,
}: {
  id: WritingToolId;
  href: string;
  labels?: { h1: string; tagline: string };
}) {
  const m = writingToolsMeta[id];
  const h1 = labels?.h1 ?? m.h1;
  const tagline = labels?.tagline ?? m.tagline;
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-teal-200/80 bg-teal-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-teal-50/90 hover:shadow-md dark:border-teal-900/45 dark:bg-teal-950/25 dark:hover:bg-teal-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/10 text-primary dark:from-teal-400/15 dark:to-emerald-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {tagline}
          </span>
        </span>
      </Link>
    </li>
  );
}
