import Link from "next/link";
import type { Metadata } from "next";
import {
  EXCEL_SPREADSHEET_TOOL_IDS,
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
    metaTitle: "Free Excel Converter Tools – Convert Excel, CSV, JSON, XML, PDF & More",
    metaDesc: "Convert Excel files to and from CSV, JSON, XML, PDF, Google Sheets, ODS, Numbers, HTML, and Text formats. Fast, accurate, and free Excel converter tools for seamless data conversion and spreadsheet management.",
    pageTitle: "Excel Converter Tools",
    intro: "Our Free Online Excel Converter Tools help you to transform data between spreadsheets and multiple formats including CSV, JSON, XML, PDF, and Google Sheets.",
    ctaAllTools: "All tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Free Online Excel Converter Tools",
    toolTitles: {
      "text-to-excel": "Text to Excel Converter",
      "csv-to-excel": "CSV to Excel Converter",
      "json-to-excel": "JSON to Excel Converter",
      "xml-to-excel": "XML to Excel Converter",
      "html-to-excel": "HTML to Excel Converter",
      "pdf-to-excel": "PDF to Excel Converter",
      "excel-to-csv": "Excel to CSV Converter",
      "excel-to-json": "Excel to JSON Converter",
      "excel-to-xml": "Excel to XML Converter",
      "excel-to-pdf": "Excel to PDF Converter",
      "google-sheet-to-excel": "Google Sheet to Excel Converter",
      "numbers-to-excel": "Numbers to Excel Converter",
      "ods-to-excel": "ODS to Excel Converter",
      "excel-to-ods": "Excel to ODS Converter",
      "excel-to-google-sheet": "Excel to Google Sheet Converter",
    },
  },
  ko: {
    metaTitle: "무료 Excel 변환 도구 – Excel, CSV, JSON, XML, PDF 등 변환",
    metaDesc: "Excel 파일을 CSV, JSON, XML, PDF, Google Sheets, ODS, Numbers, HTML, 텍스트 형식으로 양방향 변환합니다. 원활한 데이터 변환 및 스프레드시트 관리를 위한 빠르고 정확한 무료 Excel 변환 도구를 사용해 보세요.",
    pageTitle: "Excel 변환 도구",
    intro: "저희의 무료 온라인 Excel 변환 도구는 스프레드시트와 CSV, JSON, XML, PDF, Google Sheets를 포함한 여러 형식 간에 데이터를 편리하게 변환할 수 있도록 도와줍니다.",
    ctaAllTools: "모든 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "무료 온라인 Excel 변환 도구",
    toolTitles: {
      "text-to-excel": "텍스트를 Excel로 변환",
      "csv-to-excel": "CSV를 Excel로 변환",
      "json-to-excel": "JSON을 Excel로 변환",
      "xml-to-excel": "XML을 Excel로 변환",
      "html-to-excel": "HTML을 Excel로 변환",
      "pdf-to-excel": "PDF를 Excel로 변환",
      "excel-to-csv": "Excel을 CSV로 변환",
      "excel-to-json": "Excel을 JSON으로 변환",
      "excel-to-xml": "Excel을 XML로 변환",
      "excel-to-pdf": "Excel을 PDF로 변환",
      "google-sheet-to-excel": "Google Sheets를 Excel로 변환",
      "numbers-to-excel": "Numbers를 Excel로 변환",
      "ods-to-excel": "ODS를 Excel로 변환",
      "excel-to-ods": "Excel을 ODS로 변환",
      "excel-to-google-sheet": "Excel을 Google Sheets로 변환",
    },
  },
  zh: {
    metaTitle: "免费 Excel 转换工具 – 转换 Excel, CSV, JSON, XML, PDF 等 | Notepad.is",
    metaDesc: "支持 Excel 文件与 CSV, JSON, XML, PDF, Google Sheets, ODS, Numbers, HTML 以及文本格式之间的双向转换。快速、准确且免费的 Excel 转换工具，助您轻松进行数据转换与表格管理。",
    pageTitle: "Excel 转换工具",
    intro: "我们的免费在线 Excel 转换工具可帮助您在电子表格与多种格式之间进行数据转换，包括 CSV, JSON, XML, PDF 和 Google Sheets。",
    ctaAllTools: "所有工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "免费在线 Excel 转换工具",
    toolTitles: {
      "text-to-excel": "文本转 Excel",
      "csv-to-excel": "CSV 转 Excel",
      "json-to-excel": "JSON 转 Excel",
      "xml-to-excel": "XML 转 Excel",
      "html-to-excel": "HTML 转 Excel",
      "pdf-to-excel": "PDF 转 Excel",
      "excel-to-csv": "Excel 转 CSV",
      "excel-to-json": "Excel 转 JSON",
      "excel-to-xml": "Excel 转 XML",
      "excel-to-pdf": "Excel 转 PDF",
      "google-sheet-to-excel": "Google Sheets 转 Excel",
      "numbers-to-excel": "Numbers 转 Excel",
      "ods-to-excel": "ODS 转 Excel",
      "excel-to-ods": "Excel 转 ODS",
      "excel-to-google-sheet": "Excel 转 Google Sheets",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/excel");
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

export default async function ExcelToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = EXCEL_SPREADSHEET_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(59_130_246/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(96_165_250/0.16),transparent_68%)]" />
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

        <section className="mt-14" aria-labelledby="excel-tools-grid-heading">
          <h2
            id="excel-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <ExcelToolCard
                key={id}
                id={id}
                href={
                  locale === "zh"
                    ? `/tools/excel/${id}`
                    : L(`/tools/excel/${id}`)
                }
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

function ExcelToolCard({
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
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-blue-200/80 bg-blue-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-blue-50/90 hover:shadow-md dark:border-blue-900/45 dark:bg-blue-950/25 dark:hover:bg-blue-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-primary dark:from-blue-400/15 dark:to-cyan-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">
            {title}
          </span>
        </span>
      </Link>
    </li>
  );
}
