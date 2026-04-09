import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { localizedPath } from "@/lib/i18n";
import type { WritingToolId } from "@/lib/writing-tools-registry";
import {
  toolDetailPublicPath,
  writingToolsMeta,
} from "@/lib/writing-tools-registry";

export function RelatedToolsSection({
  locale,
  toolIds,
  categoryHub,
}: {
  locale: string;
  toolIds: WritingToolId[];
  categoryHub?: { href: string; label: string };
}) {
  if (toolIds.length === 0) return null;
  const L = (p: string) => localizedPath(locale, p);

  return (
    <section
      className="mt-10 border-t border-border/60 pt-10"
      aria-labelledby="related-tools-heading"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="related-tools-heading"
            className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          >
            Related tools
          </h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Similar converters and utilities you can use next—still free and
            processed in your browser where applicable.
          </p>
        </div>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {toolIds.map((tid) => {
          const m = writingToolsMeta[tid];
          return (
            <li key={tid}>
              <Link
                href={L(toolDetailPublicPath(tid))}
                className="group flex h-full min-h-[4.25rem] items-center gap-3 rounded-xl border border-border/70 bg-card/90 p-3.5 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-muted/25 hover:shadow-md dark:bg-card/60 dark:ring-white/[0.03] dark:hover:bg-muted/15"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-sky-500/10 text-primary dark:from-violet-400/15 dark:to-sky-400/10">
                  <ToolIcon id={tid} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium leading-snug text-foreground group-hover:text-primary">
                    {m.h1}
                  </span>
                  <span className="mt-0.5 flex items-center gap-0.5 text-xs font-medium text-muted-foreground group-hover:text-primary/80">
                    Open
                    <ArrowRight className="h-3 w-3 opacity-70 transition group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {categoryHub ? (
        <p className="mt-6 text-center text-sm text-muted-foreground sm:text-left">
          <Link
            href={categoryHub.href}
            className="font-semibold text-primary hover:underline"
          >
            {categoryHub.label}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
