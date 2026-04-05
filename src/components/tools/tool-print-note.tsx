"use client";

import { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-print";

export function PrintNoteTool() {
  const [title, setTitle] = useState("Note");
  const [body, setBody] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as { title?: string; body?: string };
        if (typeof p.title === "string") setTitle(p.title);
        if (typeof p.body === "string") setBody(p.body);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ title, body }));
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [title, body, mounted]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <div className="print:hidden">
        <ToolCard
          title="Compose"
          description="Print or Save as PDF from the browser. The layout below is optimized for paper."
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-lg font-semibold"
            placeholder="Title"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="min-h-[220px] w-full rounded-xl border border-input bg-background p-3 text-sm leading-relaxed"
            placeholder="Body text…"
          />
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Printer className="h-4 w-4" />
            Print / Save PDF
          </button>
        </ToolCard>
      </div>

      <div className="mx-auto hidden max-w-[48rem] bg-white p-[1.25in] text-black shadow-sm print:block dark:bg-white dark:text-black">
        <h1 className="mb-6 border-b border-black pb-2 font-serif text-2xl font-bold">
          {title || "Untitled"}
        </h1>
        <div className="whitespace-pre-wrap font-serif text-[11pt] leading-relaxed">
          {body || "\u00a0"}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-6 text-sm text-muted-foreground print:hidden">
        <p className="font-medium text-foreground">Tip</p>
        <p className="mt-1">
          On print preview, margins follow your printer settings. Use “Save as
          PDF” for a digital copy without paper.
        </p>
      </div>
    </ToolChrome>
  );
}
