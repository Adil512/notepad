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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/documents");
  return {
    title: "Document Converter Tools | Notepad.is",
    description:
      "Convert document formats online, including PDF, Word, TXT, Markdown, HTML, and PowerPoint, with free document converter tools.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function DocumentToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
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
            Document Converter Tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Document converter tools allow seamless transformation between
              document formats such as PDF, Word, TXT, Markdown, HTML, and
              PowerPoint. They are widely used for document editing, publishing,
              and file compatibility.
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
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              Notepad editor
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
            Document conversion tools
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <DocumentToolCard
                key={id}
                id={id}
                href={L(`/tools/documents/${id}`)}
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
}: {
  id: WritingToolId;
  href: string;
}) {
  const m = writingToolsMeta[id];
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
          <span className="block font-medium text-foreground">{m.h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {m.tagline}
          </span>
        </span>
      </Link>
    </li>
  );
}
