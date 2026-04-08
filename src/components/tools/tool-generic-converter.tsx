"use client";

import type { WritingToolId } from "@/lib/writing-tools-registry";
import { writingToolsMeta } from "@/lib/writing-tools-registry";

export function GenericConverterTool({ id }: { id: WritingToolId }) {
  const meta = writingToolsMeta[id];
  return (
    <section className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-foreground">
          {meta.h1}
        </h2>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Input</label>
          <textarea
            className="min-h-40 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Paste input content here..."
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Output</label>
          <textarea
            className="min-h-40 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none"
            placeholder="Converted output will appear here..."
            readOnly
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-60"
          disabled
        >
          Convert (Phase 2)
        </button>
        <p className="text-xs text-muted-foreground">
          UI is ready. Conversion logic will be added in Phase 2.
        </p>
      </div>
    </section>
  );
}
