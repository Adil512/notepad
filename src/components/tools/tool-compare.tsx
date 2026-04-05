"use client";

import { useMemo, useState } from "react";
import { diffLines } from "diff";
import { Upload } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

export function CompareDraftsTool() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const parts = useMemo(() => diffLines(a, b), [a, b]);

  const loadFile = (side: "a" | "b", file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const t = String(reader.result ?? "");
      if (side === "a") setA(t);
      else setB(t);
    };
    reader.readAsText(file);
  };

  return (
    <ToolChrome>
      <ToolCard
        title="Versions"
        description="Paste two drafts or load .txt files. Diff highlights additions and removals."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Version A
              </span>
              <label className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary hover:underline">
                <Upload className="h-3.5 w-3.5" />
                .txt
                <input
                  type="file"
                  accept=".txt,text/plain"
                  className="hidden"
                  onChange={(e) => loadFile("a", e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
            <textarea
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="min-h-[200px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Original…"
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Version B
              </span>
              <label className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary hover:underline">
                <Upload className="h-3.5 w-3.5" />
                .txt
                <input
                  type="file"
                  accept=".txt,text/plain"
                  className="hidden"
                  onChange={(e) => loadFile("b", e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
            <textarea
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="min-h-[200px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Revised…"
            />
          </div>
        </div>
      </ToolCard>

      <ToolCard title="Diff">
        <pre className="max-h-[50vh] overflow-auto whitespace-pre-wrap rounded-xl border border-border bg-muted/20 p-4 font-mono text-sm leading-relaxed">
          {parts.length === 0 ? (
            <span className="text-muted-foreground">Enter two versions…</span>
          ) : (
            parts.map((part, i) => (
              <span
                key={i}
                className={
                  part.added
                    ? "bg-emerald-500/25 text-emerald-900 dark:text-emerald-100"
                    : part.removed
                      ? "bg-red-500/25 text-red-900 dark:text-red-100"
                      : ""
                }
              >
                {part.value}
              </span>
            ))
          )}
        </pre>
        <p className="mt-2 text-xs text-muted-foreground">
          Green: added in B. Red: removed from A vs B.
        </p>
      </ToolCard>
    </ToolChrome>
  );
}
