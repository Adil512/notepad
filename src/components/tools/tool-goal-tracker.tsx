"use client";

import { useEffect, useMemo, useState } from "react";
import { Target } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-goals";

type Kind = "words" | "chars";

export function GoalTrackerTool() {
  const [text, setText] = useState("");
  const [kind, setKind] = useState<Kind>("words");
  const [target, setTarget] = useState(500);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as {
          text?: string;
          kind?: Kind;
          target?: number;
        };
        if (typeof p.text === "string") setText(p.text);
        if (p.kind === "words" || p.kind === "chars") setKind(p.kind);
        if (typeof p.target === "number" && p.target > 0) setTarget(p.target);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ text, kind, target })
        );
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [text, kind, target, mounted]);

  const count = useMemo(() => {
    const t = text.trim();
    if (kind === "chars") return t.length;
    return t ? t.split(/\s+/).filter(Boolean).length : 0;
  }, [text, kind]);

  const pct = Math.min(100, target > 0 ? Math.round((count / target) * 100) : 0);

  const label = kind === "words" ? "words" : "characters";

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="Goal"
        description="Set a word or character target and watch the bar fill as you type."
      >
        <div className="flex flex-wrap items-end gap-4">
          <label className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
            Target ({label})
            <input
              type="number"
              min={1}
              value={target}
              onChange={(e) =>
                setTarget(Math.max(1, Number(e.target.value) || 1))
              }
              className="w-32 rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
          </label>
          <div className="flex rounded-lg border border-border p-1">
            <button
              type="button"
              onClick={() => setKind("words")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                kind === "words"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Words
            </button>
            <button
              type="button"
              onClick={() => setKind("chars")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                kind === "chars"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Characters
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-medium">
              <Target className="h-4 w-4 text-primary" />
              {count.toLocaleString()} / {target.toLocaleString()} {label}
            </span>
            <span className="tabular-nums text-muted-foreground">{pct}%</span>
          </div>
          <div
            className="mt-2 h-3 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progress toward goal"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-primary transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </ToolCard>

      <ToolCard title="Draft">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[50vh] w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Start typing toward your target…"
          spellCheck
        />
      </ToolCard>
    </ToolChrome>
  );
}
