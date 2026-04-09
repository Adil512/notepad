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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/text");
  return {
    title: "Text analysis tools | Notepad.is",
    description:
      "Word and character counters, sentence and paragraph tools, reading time, case conversion, cleaning, sorting, and diff—run locally in your browser.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function TextAnalysisCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
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
            Text analysis tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Our text analysis tools help you measure, evaluate, and optimize
              written content for readability and structure. Start with a{" "}
              <Link
                href={L("/tools/text/word-counter")}
                className="font-semibold text-primary hover:underline"
              >
                word counter
              </Link>{" "}
              or{" "}
              <Link
                href={L("/tools/text/character-counter")}
                className="font-semibold text-primary hover:underline"
              >
                character counter
              </Link>
              , then dig into{" "}
              <Link
                href={L("/tools/text/sentence-counter")}
                className="font-semibold text-primary hover:underline"
              >
                sentences
              </Link>{" "}
              and{" "}
              <Link
                href={L("/tools/text/paragraph-counter")}
                className="font-semibold text-primary hover:underline"
              >
                paragraphs
              </Link>
              , estimate{" "}
              <Link
                href={L("/tools/text/reading-time-calculator")}
                className="font-semibold text-primary hover:underline"
              >
                reading time
              </Link>
              , adjust{" "}
              <Link
                href={L("/tools/text/case-converter")}
                className="font-semibold text-primary hover:underline"
              >
                case
              </Link>
              , clean or sort lines, and compare drafts—all without uploading
              your content to a server.
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
              href={L("/tools/editors")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              Editor tools
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

        <section className="mt-14" aria-labelledby="text-tools-grid-heading">
          <h2
            id="text-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Tools
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <TextAnalysisToolCard
                key={id}
                id={id}
                href={L(`/tools/text/${id}`)}
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
}: {
  id: WritingToolId;
  href: string;
}) {
  const m = writingToolsMeta[id];
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
          <span className="block font-medium text-foreground">{m.h1}</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            {m.tagline}
          </span>
        </span>
      </Link>
    </li>
  );
}
