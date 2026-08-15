import Link from "next/link";
import type { Metadata } from "next";
import {
  DATA_CODE_CONVERTER_TOOL_IDS,
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
    metaTitle: "Data & Code Converter Tools | Notepad.is",
    metaDesc: "Transform structured data formats including JSON, CSV, XML, YAML, and SQL with free online data and code converter tools.",
    pageTitle: "Data & Code Converter Tools",
    introPrefix: "Our Free Online Data converter tools are designed to transform structured data formats such as ",
    introJson: "JSON",
    introCsv: "CSV",
    introXml: "XML",
    introAndSql: ", YAML, and ",
    introSql: "SQL",
    introSuffix: ". These tools are critical for developers, data engineers, and API integration workflows.",
    ctaAllTools: "All tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Data conversion tools",
    toolTitles: {
      "json-to-csv": "JSON to CSV",
      "csv-to-json": "CSV to JSON",
      "json-to-xml": "JSON to XML",
      "xml-to-json": "XML to JSON",
      "yaml-to-json": "YAML to JSON",
      "json-to-yaml": "JSON to YAML",
      "sql-to-csv": "SQL to CSV",
      "csv-to-sql": "CSV to SQL",
      "text-to-json": "Text to JSON",
      "json-to-text": "JSON to Text",
      "text-to-xml": "Text to XML",
      "xml-to-text": "XML to Text",
    },
  },
  ko: {
    metaTitle: "데이터 및 코드 변환 도구 | Notepad.is",
    metaDesc: "무료 온라인 데이터 및 코드 변환 도구로 JSON, CSV, XML, YAML, SQL을 포함한 구조화된 데이터 형식을 변환해 보세요.",
    pageTitle: "데이터 및 코드 변환 도구",
    introPrefix: "저희의 무료 온라인 데이터 변환 도구는 ",
    introJson: "JSON",
    introCsv: "CSV",
    introXml: "XML",
    introAndSql: ", YAML 및 ",
    introSql: "SQL",
    introSuffix: "과 같은 구조화된 데이터 형식을 변환하도록 설계되었습니다. 이러한 도구는 개발자, 데이터 엔지니어 및 API 통합 워크플로에 필수적입니다.",
    ctaAllTools: "모든 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "데이터 변환 도구",
    toolTitles: {
      "json-to-csv": "JSON을 CSV로 변환",
      "csv-to-json": "CSV를 JSON으로 변환",
      "json-to-xml": "JSON을 XML로 변환",
      "xml-to-json": "XML을 JSON으로 변환",
      "yaml-to-json": "YAML을 JSON으로 변환",
      "json-to-yaml": "JSON을 YAML로 변환",
      "sql-to-csv": "SQL을 CSV로 변환",
      "csv-to-sql": "CSV를 SQL로 변환",
      "text-to-json": "텍스트를 JSON으로 변환",
      "json-to-text": "JSON을 텍스트로 변환",
      "text-to-xml": "텍스트를 XML로 변환",
      "xml-to-text": "XML을 텍스트로 변환",
    },
  },
  zh: {
    metaTitle: "数据与代码转换工具 | Notepad.is",
    metaDesc: "使用免费的在线数据和代码转换工具转换结构化数据格式，包括 JSON、CSV、XML、YAML 和 SQL。",
    pageTitle: "数据与代码转换工具",
    introPrefix: "我们的免费在线数据转换工具旨在转换结构化数据格式，例如 ",
    introJson: "JSON",
    introCsv: "CSV",
    introXml: "XML",
    introAndSql: ", YAML 以及 ",
    introSql: "SQL",
    introSuffix: "。这些工具对于开发人员、数据工程师和 API 集成工作流至关重要。",
    ctaAllTools: "所有工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "数据转换工具",
    toolTitles: {
      "json-to-csv": "JSON 转 CSV",
      "csv-to-json": "CSV 转 JSON",
      "json-to-xml": "JSON 转 XML",
      "xml-to-json": "XML 转 JSON",
      "yaml-to-json": "YAML 转 JSON",
      "json-to-yaml": "JSON 转 YAML",
      "sql-to-csv": "SQL 转 CSV",
      "csv-to-sql": "CSV 转 SQL",
      "text-to-json": "文本转 JSON",
      "json-to-text": "JSON 转 文本",
      "text-to-xml": "文本转 XML",
      "xml-to-text": "XML 转 文本",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/data");
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

export default async function DataToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = DATA_CODE_CONVERTER_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(14_165_233/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(56_189_248/0.16),transparent_68%)]" />
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
                href={L("/tools/data/json-to-csv")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introJson}
              </Link>
              ,{" "}
              <Link
                href={L("/tools/data/csv-to-json")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introCsv}
              </Link>
              ,{" "}
              <Link
                href={L("/tools/data/xml-to-json")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introXml}
              </Link>
              {t.introAndSql}
              <Link
                href={L("/tools/data/sql-to-csv")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introSql}
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
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              {t.ctaNotepadEditor}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section className="mt-14" aria-label={t.sectionHeading}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <DataToolCard
                key={id}
                id={id}
                href={L(`/tools/data/${id}`)}
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

function DataToolCard({
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
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-sky-200/80 bg-sky-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-sky-50/90 hover:shadow-md dark:border-sky-900/45 dark:bg-sky-950/25 dark:hover:bg-sky-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-cyan-500/10 text-primary dark:from-sky-400/15 dark:to-cyan-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{title}</span>
        </span>
      </Link>
    </li>
  );
}
