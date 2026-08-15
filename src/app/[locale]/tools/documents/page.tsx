import Link from "next/link";
import type { Metadata } from "next";
import {
  DOCUMENT_CONVERTER_TOOL_IDS,
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
    metaTitle: "Document Converter Tools | Notepad.is",
    metaDesc: "Convert document formats online, including PDF, Word, TXT, Markdown, HTML, and PowerPoint, with free document converter tools.",
    pageTitle: "Document Converter Tools",
    intro: "Document converter tools allow seamless transformation between document formats such as PDF, Word, TXT, Markdown, HTML, and PowerPoint. They are widely used for document editing, publishing, and file compatibility.",
    ctaAllTools: "All tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Document conversion tools",
    toolLabels: {
      "pdf-to-word": { h1: "PDF to Word Converter", tagline: "Convert PDF files to editable Word documents" },
      "word-to-pdf": { h1: "Word to PDF Converter", tagline: "Convert Word documents to PDF files" },
      "text-to-pdf": { h1: "Text to PDF Converter", tagline: "Convert plain text files to PDF documents" },
      "pdf-to-text": { h1: "PDF to Text Converter", tagline: "Extract plain text from PDF files" },
      "word-to-txt": { h1: "Word to TXT Converter", tagline: "Extract plain text from Word documents" },
      "txt-to-word": { h1: "TXT to Word Converter", tagline: "Convert plain text files to Word documents" },
      "html-to-pdf": { h1: "HTML to PDF Converter", tagline: "Convert web pages or HTML code to PDF files" },
      "pdf-to-html": { h1: "PDF to HTML Converter", tagline: "Convert PDF files to web page format" },
      "markdown-to-pdf": { h1: "Markdown to PDF Converter", tagline: "Render Markdown documents as PDF files" },
      "pdf-to-markdown": { h1: "PDF to Markdown Converter", tagline: "Convert PDF documents to Markdown files" },
      "ppt-to-pdf": { h1: "PPT to PDF Converter", tagline: "Convert PowerPoint slides to PDF files" },
      "pdf-to-ppt": { h1: "PDF to PPT Converter", tagline: "Convert PDF files to PowerPoint slides" },
      "rtf-to-pdf": { h1: "RTF to PDF Converter", tagline: "Convert RTF files to PDF documents" },
      "pdf-to-rtf": { h1: "PDF to RTF Converter", tagline: "Convert PDF files to RTF documents" },
      "txt-to-markdown": { h1: "TXT to Markdown Converter", tagline: "Convert plain text files to Markdown format" },
      "markdown-to-txt": { h1: "Markdown to TXT Converter", tagline: "Extract plain text from Markdown documents" },
      "html-to-word": { h1: "HTML to Word Converter", tagline: "Convert HTML files to Word documents" },
      "word-to-html": { h1: "Word to HTML Converter", tagline: "Convert Word documents to HTML files" },
    },
  },
  ko: {
    metaTitle: "문서 변환 도구 | Notepad.is",
    metaDesc: "무료 문서 변환 도구로 PDF, Word, TXT, 마크다운, HTML, PowerPoint를 포함한 문서 형식을 온라인에서 편리하게 변환해 보세요.",
    pageTitle: "문서 변환 도구",
    intro: "문서 변환 도구는 PDF, Word, TXT, 마크다운, HTML, PowerPoint와 같은 문서 형식 간의 원활한 변환을 제공합니다. 문서 편집, 출판 및 파일 호환성에 널리 사용됩니다.",
    ctaAllTools: "모든 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "문서 변환 도구",
    toolLabels: {
      "pdf-to-word": { h1: "PDF를 Word로 변환", tagline: "PDF 파일을 편집 가능한 Word 문서로 변환" },
      "word-to-pdf": { h1: "Word를 PDF로 변환", tagline: "Word 문서를 PDF 파일로 변환" },
      "text-to-pdf": { h1: "텍스트를 PDF로 변환", tagline: "일반 텍스트 파일을 PDF 문서로 변환" },
      "pdf-to-text": { h1: "PDF를 텍스트로 변환", tagline: "PDF 파일에서 일반 텍스트 추출" },
      "word-to-txt": { h1: "Word를 TXT로 변환", tagline: "Word 문서에서 일반 텍스트 추출" },
      "txt-to-word": { h1: "TXT를 Word로 변환", tagline: "일반 텍스트 파일을 Word 문서로 변환" },
      "html-to-pdf": { h1: "HTML을 PDF로 변환", tagline: "웹페이지 또는 HTML 코드를 PDF 파일로 변환" },
      "pdf-to-html": { h1: "PDF를 HTML로 변환", tagline: "PDF 파일을 웹페이지 형식으로 변환" },
      "markdown-to-pdf": { h1: "마크다운을 PDF로 변환", tagline: "마크다운 문서를 PDF 파일로 렌더링" },
      "pdf-to-markdown": { h1: "PDF를 마크다운으로 변환", tagline: "PDF 문서를 마크다운 파일로 변환" },
      "ppt-to-pdf": { h1: "PPT를 PDF로 변환", tagline: "PowerPoint 프레젠테이션을 PDF로 변환" },
      "pdf-to-ppt": { h1: "PDF를 PPT로 변환", tagline: "PDF 파일을 PowerPoint 프레젠테이션으로 변환" },
      "rtf-to-pdf": { h1: "RTF를 PDF로 변환", tagline: "RTF 파일을 PDF 문서로 변환" },
      "pdf-to-rtf": { h1: "PDF를 RTF로 변환", tagline: "PDF 파일을 RTF 문서로 변환" },
      "txt-to-markdown": { h1: "TXT를 마크다운으로 변환", tagline: "일반 텍스트 파일을 마크다운 형식으로 변환" },
      "markdown-to-txt": { h1: "마크다운을 TXT로 변환", tagline: "마크다운 문서에서 일반 텍스트 추출" },
      "html-to-word": { h1: "HTML을 Word로 변환", tagline: "HTML 파일을 Word 문서로 변환" },
      "word-to-html": { h1: "Word를 HTML로 변환", tagline: "Word 문서를 HTML 파일로 변환" },
    },
  },
  zh: {
    metaTitle: "文档转换工具 | Notepad.is",
    metaDesc: "使用免费的在线文档转换工具转换文档格式，包括 PDF、Word、TXT、Markdown、HTML 和 PowerPoint。",
    pageTitle: "文档转换工具",
    intro: "文档转换工具允许在 PDF、Word、TXT、Markdown、HTML 和 PowerPoint 等文档格式之间进行无缝转换。它们广泛用于文档编辑、出版和文件兼容性。",
    ctaAllTools: "所有工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "文档转换工具",
    toolLabels: {
      "pdf-to-word": { h1: "PDF 转 Word", tagline: "将 PDF 文件转换为可编辑的 Word 文档" },
      "word-to-pdf": { h1: "Word 转 PDF", tagline: "将 Word 文档转换为 PDF 文件" },
      "text-to-pdf": { h1: "文本转 PDF", tagline: "将纯文本文件转换为 PDF 文档" },
      "pdf-to-text": { h1: "PDF 转 文本", tagline: "从 PDF 文件中提取纯文本" },
      "word-to-txt": { h1: "Word 转 TXT", tagline: "从 Word 文档中提取纯文本" },
      "txt-to-word": { h1: "TXT 转 Word", tagline: "将纯文本文件转换为 Word 文档" },
      "html-to-pdf": { h1: "HTML 转 PDF", tagline: "将网页或 HTML 代码转换为 PDF 文件" },
      "pdf-to-html": { h1: "PDF 转 HTML", tagline: "将 PDF 文件转换为网页格式" },
      "markdown-to-pdf": { h1: "Markdown 转 PDF", tagline: "将 Markdown 文档渲染为 PDF 文件" },
      "pdf-to-markdown": { h1: "PDF 转 Markdown", tagline: "将 PDF 文档转换为 Markdown 文件" },
      "ppt-to-pdf": { h1: "PPT 转 PDF", tagline: "将 PowerPoint 幻灯片转换为 PDF 文件" },
      "pdf-to-ppt": { h1: "PDF 转 PPT", tagline: "将 PDF 文件转换为 PowerPoint 幻灯片" },
      "rtf-to-pdf": { h1: "RTF 转 PDF", tagline: "将 RTF 文件转换为 PDF 文档" },
      "pdf-to-rtf": { h1: "PDF 转 RTF", tagline: "将 PDF 文件转换为 RTF 文档" },
      "txt-to-markdown": { h1: "TXT 转 Markdown", tagline: "将纯文本文件转换为 Markdown 格式" },
      "markdown-to-txt": { h1: "Markdown 转 TXT", tagline: "从 Markdown 文档中提取纯文本" },
      "html-to-word": { h1: "HTML 转 Word", tagline: "将 HTML 文件转换为 Word 文档" },
      "word-to-html": { h1: "Word 转 HTML", tagline: "将 Word 文档转换为 HTML 文件" },
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/documents");
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

export default async function DocumentToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = DOCUMENT_CONVERTER_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(6_182_212/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(34_211_238/0.16),transparent_68%)]" />
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

        <section
          className="mt-14"
          aria-labelledby="document-tools-grid-heading"
        >
          <h2
            id="document-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <DocumentToolCard
                key={id}
                id={id}
                href={
                  (locale === "zh" || locale === "ko")
                    ? `/tools/documents/${id}`
                    : L(`/tools/documents/${id}`)
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

function DocumentToolCard({
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
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-cyan-200/80 bg-cyan-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-cyan-50/90 hover:shadow-md dark:border-cyan-900/45 dark:bg-cyan-950/25 dark:hover:bg-cyan-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-sky-500/10 text-primary dark:from-cyan-400/15 dark:to-sky-400/10">
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
