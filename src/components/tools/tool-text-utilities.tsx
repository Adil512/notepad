"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { diffLines } from "diff";
import { Check, Copy, Upload } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const TEXTAREA_CLASS =
  "min-h-[220px] w-full rounded-xl border border-input bg-background p-3 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30";

function usePersistedText(storageKey: string) {
  const [text, setText] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v != null) setText(v);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, [storageKey]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, text);
    } catch {
      /* ignore */
    }
  }, [storageKey, text, ready]);

  return [text, setText] as const;
}

function countWords(s: string): number {
  const t = s.trim();
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

function countCharsNoSpaces(s: string): number {
  return s.replace(/\s/g, "").length;
}

function countLines(s: string): number {
  if (!s) return 0;
  return s.split(/\r\n|\r|\n/).length;
}

function countSentences(s: string): number {
  const t = s.trim();
  if (!t) return 0;
  const parts = t.split(/[.!?…]+/).filter((x) => x.trim().length > 0);
  return parts.length;
}

function countParagraphs(s: string): number {
  const t = s.trim();
  if (!t) return 0;
  const blocks = t.split(/\n\s*\n/).filter((p) => p.trim());
  return blocks.length || 1;
}

function readingMinutes(words: number, wpm: number): number {
  if (words <= 0) return 0;
  return Math.max(1, Math.ceil(words / wpm));
}

function copyToClipboard(value: string): Promise<void> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }
  return Promise.reject(new Error("clipboard"));
}

function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [ok, setOk] = useState(false);
  const onCopy = () => {
    void copyToClipboard(value).then(
      () => {
        setOk(true);
        setTimeout(() => setOk(false), 1600);
      },
      () => {}
    );
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      disabled={!value}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:bg-muted/50 disabled:opacity-40"
    >
      {ok ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
      {ok ? "Copied" : label}
    </button>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-border/80 bg-muted/20 px-4 py-3 dark:bg-muted/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-bold tabular-nums text-foreground">
        {value}
      </p>
    </div>
  );
}

function TextInputCard({
  title,
  description,
  text,
  setText,
  placeholder,
}: {
  title: string;
  description?: string;
  text: string;
  setText: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <ToolCard title={title} description={description}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={TEXTAREA_CLASS}
        placeholder={placeholder}
        spellCheck
        aria-label={title}
      />
      <p className="mt-2 text-xs text-muted-foreground">
        Autosaved in this browser only.
      </p>
    </ToolCard>
  );
}

export function WordCounterTool() {
  const [text, setText] = usePersistedText("notepad-tool:word-counter");
  const words = useMemo(() => countWords(text), [text]);
  const chars = text.length;
  const charsNs = useMemo(() => countCharsNoSpaces(text), [text]);
  const sentences = useMemo(() => countSentences(text), [text]);
  const paragraphs = useMemo(() => countParagraphs(text), [text]);

  return (
    <ToolChrome>
      <TextInputCard
        title="Your text"
        description="Paste or type below. Counts update live."
        text={text}
        setText={setText}
        placeholder="Start typing or paste content…"
      />
      <ToolCard title="Counts">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="Words" value={words} />
          <Stat label="Characters" value={chars} />
          <Stat label="Characters (no spaces)" value={charsNs} />
          <Stat label="Sentences" value={sentences} />
          <Stat label="Paragraphs" value={paragraphs} />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function CharacterCounterTool() {
  const [text, setText] = usePersistedText("notepad-tool:character-counter");
  const words = useMemo(() => countWords(text), [text]);
  const lines = useMemo(() => countLines(text), [text]);

  return (
    <ToolChrome>
      <TextInputCard
        title="Your text"
        description="Ideal for tweets, meta descriptions, and character limits."
        text={text}
        setText={setText}
        placeholder="Paste your text…"
      />
      <ToolCard title="Counts">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="Characters (all)" value={text.length} />
          <Stat label="Characters (no spaces)" value={countCharsNoSpaces(text)} />
          <Stat label="Words" value={words} />
          <Stat label="Lines" value={lines} />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function SentenceCounterTool() {
  const [text, setText] = usePersistedText("notepad-tool:sentence-counter");
  const n = useMemo(() => countSentences(text), [text]);

  return (
    <ToolChrome>
      <TextInputCard
        title="Your text"
        text={text}
        setText={setText}
        placeholder="Paste paragraphs to count sentences…"
      />
      <ToolCard title="Result">
        <Stat label="Sentences detected" value={text.trim() ? n : 0} />
        <p className="mt-3 text-xs text-muted-foreground">
          Sentences are estimated using periods, question marks, and exclamation
          points. Results are approximate for unusual punctuation.
        </p>
      </ToolCard>
    </ToolChrome>
  );
}

export function ParagraphCounterTool() {
  const [text, setText] = usePersistedText("notepad-tool:paragraph-counter");
  const n = useMemo(() => {
    const t = text.trim();
    if (!t) return 0;
    const blocks = t.split(/\n\s*\n/).filter((p) => p.trim());
    return blocks.length || 1;
  }, [text]);

  return (
    <ToolChrome>
      <TextInputCard
        title="Your text"
        description="Paragraphs are separated by one or more blank lines."
        text={text}
        setText={setText}
        placeholder="Paste your document…"
      />
      <ToolCard title="Result">
        <Stat label="Paragraphs" value={n} />
      </ToolCard>
    </ToolChrome>
  );
}

export function ReadingTimeCalculatorTool() {
  const [text, setText] = usePersistedText("notepad-tool:reading-time");
  const words = useMemo(() => countWords(text), [text]);
  const slow = 200;
  const fast = 250;

  return (
    <ToolChrome>
      <TextInputCard
        title="Your text"
        description="Typical blog reading speeds: about 200–250 words per minute."
        text={text}
        setText={setText}
        placeholder="Article or chapter draft…"
      />
      <ToolCard title="Estimated reading time">
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat
            label={`~${slow} words / min`}
            value={words ? `${readingMinutes(words, slow)} min` : "-"}
          />
          <Stat
            label={`~${fast} words / min`}
            value={words ? `${readingMinutes(words, fast)} min` : "-"}
          />
          <Stat label="Word count" value={words} />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

function toTitleCase(s: string): string {
  return s.replace(
    /\S+/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
}

function toSentenceCase(s: string): string {
  const lower = s.toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
}

export function CaseConverterTool() {
  const [text, setText] = usePersistedText("notepad-tool:case-converter");
  const [out, setOut] = useState("");

  const apply = useCallback(
    (mode: "upper" | "lower" | "title" | "sentence") => {
      if (mode === "upper") setOut(text.toUpperCase());
      else if (mode === "lower") setOut(text.toLowerCase());
      else if (mode === "title") setOut(toTitleCase(text));
      else setOut(toSentenceCase(text));
    },
    [text]
  );

  return (
    <ToolChrome>
      <TextInputCard
        title="Source text"
        text={text}
        setText={setText}
        placeholder="Type or paste to convert…"
      />
      <ToolCard
        title="Convert"
        description="Apply a case style, then copy the result."
      >
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            onClick={() => apply("upper")}
          >
            UPPER CASE
          </button>
          <button
            type="button"
            className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted/50"
            onClick={() => apply("lower")}
          >
            lower case
          </button>
          <button
            type="button"
            className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted/50"
            onClick={() => apply("title")}
          >
            Title Case
          </button>
          <button
            type="button"
            className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted/50"
            onClick={() => apply("sentence")}
          >
            Sentence case
          </button>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Output
            </span>
            <CopyButton value={out} />
          </div>
          <textarea
            readOnly
            value={out}
            className={`${TEXTAREA_CLASS} bg-muted/15`}
            placeholder="Converted text appears here…"
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function TextCleanerTool() {
  const [text, setText] = usePersistedText("notepad-tool:text-cleaner");
  const [out, setOut] = useState("");

  const collapseSpaces = () => {
    setOut(text.replace(/[ \t]+/g, " ").replace(/^\s+|\s+$/gm, "").trim());
  };
  const removeLineBreaks = () => {
    setOut(text.replace(/\r\n|\r|\n/g, " ").replace(/\s+/g, " ").trim());
  };
  const trimLines = () => {
    setOut(
      text
        .split(/\r\n|\r|\n/)
        .map((l) => l.trim())
        .join("\n")
    );
  };
  const removeEmptyLines = () => {
    setOut(
      text
        .split(/\r\n|\r|\n/)
        .filter((l) => l.trim().length > 0)
        .join("\n")
    );
  };
  const allInOne = () => {
    let s = text.replace(/\r\n|\r|\n/g, "\n");
    s = s
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0)
      .join("\n");
    s = s.replace(/[ \t]+/g, " ").trim();
    setOut(s);
  };

  return (
    <ToolChrome>
      <TextInputCard
        title="Messy text"
        text={text}
        setText={setText}
        placeholder="Paste text with extra spaces or breaks…"
      />
      <ToolCard title="Clean">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={collapseSpaces}
            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Collapse spaces
          </button>
          <button
            type="button"
            onClick={removeLineBreaks}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            One line (no breaks)
          </button>
          <button
            type="button"
            onClick={trimLines}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            Trim each line
          </button>
          <button
            type="button"
            onClick={removeEmptyLines}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            Remove empty lines
          </button>
          <button
            type="button"
            onClick={allInOne}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            Trim + drop empty + collapse spaces
          </button>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Result
            </span>
            <CopyButton value={out} />
          </div>
          <textarea
            readOnly
            value={out}
            className={`${TEXTAREA_CLASS} bg-muted/15`}
            placeholder="Run an action to see cleaned text…"
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function DuplicateRemoverTool() {
  const [text, setText] = usePersistedText("notepad-tool:duplicate-remover");
  const [out, setOut] = useState("");

  const dedupe = useCallback(() => {
    const lines = text.split(/\r\n|\r|\n/);
    const seen = new Set<string>();
    const next: string[] = [];
    for (const line of lines) {
      const key = line;
      if (seen.has(key)) continue;
      seen.add(key);
      next.push(line);
    }
    setOut(next.join("\n"));
  }, [text]);

  const dedupeTrimmed = useCallback(() => {
    const lines = text.split(/\r\n|\r|\n/);
    const seen = new Set<string>();
    const next: string[] = [];
    for (const line of lines) {
      const key = line.trim();
      if (seen.has(key)) continue;
      seen.add(key);
      next.push(line);
    }
    setOut(next.join("\n"));
  }, [text]);

  return (
    <ToolChrome>
      <TextInputCard
        title="Lines of text"
        description="Duplicate detection is line-by-line."
        text={text}
        setText={setText}
        placeholder={`One entry per line\nApple\nBanana\nApple`}
      />
      <ToolCard title="Remove duplicates">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={dedupe}
            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Exact lines
          </button>
          <button
            type="button"
            onClick={dedupeTrimmed}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            Ignore leading/trailing spaces
          </button>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Result
            </span>
            <CopyButton value={out} />
          </div>
          <textarea
            readOnly
            value={out}
            className={`${TEXTAREA_CLASS} bg-muted/15`}
            placeholder="Deduplicated lines…"
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function TextSorterTool() {
  const [text, setText] = usePersistedText("notepad-tool:text-sorter");
  const [out, setOut] = useState("");

  const sort = useCallback(
    (dir: "asc" | "desc") => {
      const lines = text.split(/\r\n|\r|\n/);
      const next = [...lines].sort((a, b) => {
        const cmp = a.localeCompare(b, undefined, {
          sensitivity: "base",
          numeric: true,
        });
        return dir === "asc" ? cmp : -cmp;
      });
      setOut(next.join("\n"));
    },
    [text]
  );

  return (
    <ToolChrome>
      <TextInputCard
        title="Lines to sort"
        text={text}
        setText={setText}
        placeholder={"Zebra\nApple\nMoon"}
      />
      <ToolCard title="Sort">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => sort("asc")}
            className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            A → Z
          </button>
          <button
            type="button"
            onClick={() => sort("desc")}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-muted/50"
          >
            Z → A
          </button>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Sorted
            </span>
            <CopyButton value={out} />
          </div>
          <textarea
            readOnly
            value={out}
            className={`${TEXTAREA_CLASS} bg-muted/15`}
            placeholder="Sorted output…"
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}

export function TextCompareDiffTool() {
  const [a, setA] = usePersistedText("notepad-tool:text-compare-a");
  const [b, setB] = usePersistedText("notepad-tool:text-compare-b");

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
        title="Two texts"
        description="Paste or load .txt files. The diff shows what changed between A and B."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Text A
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
              className={TEXTAREA_CLASS}
              placeholder="Original…"
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Text B
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
              className={TEXTAREA_CLASS}
              placeholder="Revised…"
            />
          </div>
        </div>
      </ToolCard>

      <ToolCard title="Diff">
        <pre className="max-h-[50vh] overflow-auto whitespace-pre-wrap rounded-xl border border-border bg-muted/20 p-4 font-mono text-sm leading-relaxed">
          {parts.length === 0 ? (
            <span className="text-muted-foreground">Enter two texts…</span>
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
