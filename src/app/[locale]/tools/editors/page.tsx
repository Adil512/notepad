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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/editors");
  return {
    title: "Editor tools | Notepad.is",
    description:
      "In-browser Markdown, JSON, HTML, and code editors—no install, work locally in your browser for drafts, structured data, and web content.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function EditorToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
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
            Editor tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Our editor tools provide advanced in-browser editing environments
              for structured and technical formats—
              <Link
                href={L("/tools/editors/markdown-notepad")}
                className="font-semibold text-primary hover:underline"
              >
                Markdown
              </Link>
              ,{" "}
              <Link
                href={L("/tools/editors/json-editor")}
                className="font-semibold text-primary hover:underline"
              >
                JSON
              </Link>
              ,{" "}
              <Link
                href={L("/tools/editors/html-editor")}
                className="font-semibold text-primary hover:underline"
              >
                HTML
              </Link>
              , and{" "}
              <Link
                href={L("/tools/editors/code-notepad")}
                className="font-semibold text-primary hover:underline"
              >
                code snippets
              </Link>
              . Developers can edit and update snippets without installing a
              heavy third-party IDE. Technical writers and SEO professionals who
              work with structured data and web content can use the same
              lightweight workspace in the tab they already have open.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              All tools
            </Link>
            <Link
              href={L("/tools/writing")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Writing tools
            </Link>
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              Notepad editor
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section className="mt-14" aria-labelledby="editor-tools-grid-heading">
          <h2
            id="editor-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Editors
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {visibleIds.map((id) => (
              <EditorToolCard key={id} id={id} href={L(`/tools/editors/${id}`)} />
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
}: {
  id: WritingToolId;
  href: string;
}) {
  const m = writingToolsMeta[id];
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
          <span className="block font-medium text-foreground">{m.h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {m.tagline}
          </span>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Open
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>
      </Link>
    </li>
  );
}
