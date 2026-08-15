import Link from "next/link";
import type { Metadata } from "next";
import {
  EDITOR_HUB_TOOL_IDS,
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
    metaTitle: "Online Editor Tools – Markdown, JSON, HTML Editor & Code Notepad",
    metaDesc: "Access powerful online editor tools for writing, coding, and data formatting. Use the Markdown Editor, Code Notepad, JSON Editor, and HTML Editor to create, edit, validate, and manage content efficiently in one place.",
    pageTitle: "Editor tools",
    introPrefix: "Our editor tools provide advanced in-browser editing environments for structured and technical formats—",
    introMarkdown: "Markdown",
    introJson: "JSON",
    introHtml: "HTML",
    introAnd: " and ",
    introCode: "code snippets",
    introSuffix: ". Developers can edit and update snippets without installing a heavy third-party IDE. Technical writers and SEO professionals who work with structured data and web content can use the same lightweight workspace in the tab they already have open.",
    ctaAllTools: "All tools",
    ctaWritingTools: "Writing tools",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Editors",
    cardOpen: "Open",
    toolTitles: {
      "markdown-notepad": "Markdown Editor",
      "code-notepad": "Code Notepad",
      "json-editor": "JSON Editor",
      "html-editor": "HTML Editor",
    },
  },
  ko: {
    metaTitle: "온라인 에디터 도구 – 마크다운, JSON, HTML 에디터 & 코드 메모장",
    metaDesc: "글쓰기, 코딩 및 데이터 서식 지정을 위한 강력한 온라인 에디터 도구를 사용해 보세요. 마크다운 에디터, 코드 메모장, JSON 에디터, HTML 에디터를 사용하여 콘텐츠를 한곳에서 효율적으로 작성, 편집, 검증 및 관리할 수 있습니다.",
    pageTitle: "에디터 도구",
    introPrefix: "저희 에디터 도구는 구조화되고 기술적인 형식을 위한 고급 브라우저 내 편집 환경을 제공합니다—",
    introMarkdown: "마크다운",
    introJson: "JSON",
    introHtml: "HTML",
    introAnd: " 및 ",
    introCode: "코드 스니펫",
    introSuffix: ". 개발자는 무거운 타사 IDE를 설치하지 않고도 스니펫을 편집하고 업데이트할 수 있습니다. 구조화된 데이터 및 웹 콘텐츠를 다루는 기술 작가와 SEO 전문가는 이미 열려 있는 탭에서 동일한 가벼운 작업 공간을 사용할 수 있습니다.",
    ctaAllTools: "모든 도구",
    ctaWritingTools: "글쓰기 도구",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "에디터",
    cardOpen: "열기",
    toolTitles: {
      "markdown-notepad": "마크다운 에디터",
      "code-notepad": "코드 메모장",
      "json-editor": "JSON 에디터",
      "html-editor": "HTML 에디터",
    },
  },
  zh: {
    metaTitle: "在线编辑器工具 – Markdown、JSON、HTML 编辑器和代码记事本",
    metaDesc: "访问功能强大的在线编辑器工具，进行写作、编码和数据格式化。在同一个地方高效地使用 Markdown 编辑器、代码记事本、JSON 编辑器和 HTML 编辑器来创建、编辑、验证和管理内容。",
    pageTitle: "编辑器工具",
    introPrefix: "我们的编辑器工具为结构化和技术格式提供了先进的浏览器内编辑环境——",
    introMarkdown: "Markdown",
    introJson: "JSON",
    introHtml: "HTML",
    introAnd: " 以及 ",
    introCode: "代码片段",
    introSuffix: "。开发人员无需安装笨重的第三方 IDE 即可编辑和更新代码片段。处理结构化数据和网页内容的技术作家和 SEO 专业人员，可以在已打开的标签页中使用同样轻量级的辅助工作区。",
    ctaAllTools: "所有工具",
    ctaWritingTools: "写作工具",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "编辑器",
    cardOpen: "打开",
    toolTitles: {
      "markdown-notepad": "Markdown 编辑器",
      "code-notepad": "代码记事本",
      "json-editor": "JSON 编辑器",
      "html-editor": "HTML 编辑器",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/editors");
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

export default async function EditorToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = EDITOR_HUB_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.12),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(139_92_246/0.18),transparent_68%)]" />
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
                href={(locale === "zh" || locale === "ko") ? "/tools/editors/markdown-notepad" : L("/tools/editors/markdown-notepad")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introMarkdown}
              </Link>
              ,{" "}
              <Link
                href={(locale === "zh" || locale === "ko") ? "/tools/editors/json-editor" : L("/tools/editors/json-editor")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introJson}
              </Link>
              ,{" "}
              <Link
                href={(locale === "zh" || locale === "ko") ? "/tools/editors/html-editor" : L("/tools/editors/html-editor")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introHtml}
              </Link>
              {t.introAnd}
              <Link
                href={(locale === "zh" || locale === "ko") ? "/tools/editors/code-notepad" : L("/tools/editors/code-notepad")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introCode}
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

        <section className="mt-14" aria-labelledby="editor-tools-grid-heading">
          <h2
            id="editor-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {visibleIds.map((id) => (
              <EditorToolCard
                key={id}
                id={id}
                href={
                  (locale === "zh" || locale === "ko")
                    ? `/tools/editors/${id}`
                    : L(`/tools/editors/${id}`)
                }
                title={
                  t.toolTitles[id as keyof typeof t.toolTitles] ??
                  writingToolsMeta[id].h1
                }
                openLabel={t.cardOpen}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function EditorToolCard({
  id,
  href,
  title,
  openLabel,
}: {
  id: WritingToolId;
  href: string;
  title: string;
  openLabel: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5.5rem] items-start gap-3 rounded-xl border border-violet-200/80 bg-violet-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-violet-50/90 hover:shadow-md dark:border-violet-900/45 dark:bg-violet-950/25 dark:hover:bg-violet-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-sky-500/10 text-primary dark:from-violet-400/15 dark:to-sky-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{title}</span>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            {openLabel}
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </Link>
    </li>
  );
}
