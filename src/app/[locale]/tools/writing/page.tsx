import Link from "next/link";
import type { Metadata } from "next";
import {
  WRITING_PRODUCTIVITY_TOOL_IDS,
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
  const canonical = canonicalUrlForPage(locale, "/tools/writing");
  return {
    title: "Writing tools | Notepad.is",
    description:
      "Distraction-free workflows, quick notes, dictation, goals, templates, and export utilities—free in your browser.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default async function WritingToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const visibleIds = WRITING_PRODUCTIVITY_TOOL_IDS.filter((id) =>
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
            Writing tools
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Our writing tools help you create, organize, and manage digital
              notes, content, and drafts in the browser. Start from a{" "}
              <Link
                href={L("/distraction-free-writer")}
                className="font-semibold text-primary hover:underline"
              >
                distraction-free writing mode
              </Link>{" "}
              or capture thoughts with{" "}
              <Link
                href={L("/quick-notes")}
                className="font-semibold text-primary hover:underline"
              >
                quick notes
              </Link>
              , then layer on productivity helpers: a{" "}
              <Link
                href={L("/tools/writing/focus-timer")}
                className="font-semibold text-primary hover:underline"
              >
                focus timer
              </Link>
              ,{" "}
              <Link
                href={L("/tools/writing/speech-dictation")}
                className="font-semibold text-primary hover:underline"
              >
                speech-to-text dictation
              </Link>
              ,{" "}
              <Link
                href={L("/tools/writing/goal-tracker")}
                className="font-semibold text-primary hover:underline"
              >
                writing goals
              </Link>
              , and{" "}
              <Link
                href={L("/tools/writing/templates")}
                className="font-semibold text-primary hover:underline"
              >
                content templates
              </Link>
              . Whether you blog, draft for work, or study, these utilities
              improve focus and throughput without leaving Notepad.is.
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
          aria-labelledby="writing-landings-heading"
        >
          <h2
            id="writing-landings-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Writing experiences
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            <WritingLandingCard
              href={L("/distraction-free-writer")}
              title="Distraction-free writer"
              description="A calm full-screen canvas for deep work—no clutter, just your words."
            />
            <WritingLandingCard
              href={L("/quick-notes")}
              title="Quick notes"
              description="Lightweight capture for ideas and lists when you do not need the full editor."
            />
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="writing-utilities-heading">
          <h2
            id="writing-utilities-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Utilities
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <WritingToolCard key={id} id={id} href={L(`/tools/writing/${id}`)} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function WritingLandingCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full flex-col rounded-2xl border border-violet-200/80 bg-violet-50/65 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md dark:border-violet-900/45 dark:bg-violet-950/25 dark:hover:shadow-primary/10 sm:p-6"
      >
        <span className="font-display text-lg font-semibold text-foreground">
          {title}
        </span>
        <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </span>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Open
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </li>
  );
}

function WritingToolCard({
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
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-border/80 bg-card/90 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-muted/20 hover:shadow-md dark:bg-card/60 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-sky-500/10 text-primary dark:from-violet-400/15 dark:to-sky-400/10">
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
