"use client";

import { useEffect, useState } from "react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-reading";

export function ReadingModeTool() {
  const [text, setText] = useState("");
  const [fontPx, setFontPx] = useState(20);
  const [maxCh, setMaxCh] = useState(62);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setText(localStorage.getItem(STORAGE_KEY) ?? "");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, text);
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [text, mounted]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard title="Source" description="Paste or type what you want to read calmly.">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[160px] w-full rounded-xl border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Paste article, notes, or letter…"
        />
      </ToolCard>

      <ToolCard title="Reading surface">
        <div className="mb-4 flex flex-wrap gap-6">
          <label className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
            Font size ({fontPx}px)
            <input
              type="range"
              min={16}
              max={32}
              value={fontPx}
              onChange={(e) => setFontPx(Number(e.target.value))}
              className="w-40"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
            Line width ({maxCh}ch)
            <input
              type="range"
              min={40}
              max={90}
              value={maxCh}
              onChange={(e) => setMaxCh(Number(e.target.value))}
              className="w-40"
            />
          </label>
        </div>

        <article
          className="mx-auto rounded-2xl border border-border bg-muted/15 px-6 py-10 text-foreground shadow-inner"
          style={{
            fontSize: `${fontPx}px`,
            maxWidth: `${maxCh}ch`,
            lineHeight: 1.65,
          }}
        >
          {text.trim() ? (
            <p className="whitespace-pre-wrap font-serif">{text}</p>
          ) : (
            <p className="text-muted-foreground">Nothing to read yet.</p>
          )}
        </article>
      </ToolCard>
    </ToolChrome>
  );
}
