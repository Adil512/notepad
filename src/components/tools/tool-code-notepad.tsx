"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { html } from "@codemirror/lang-html";
import { markdown } from "@codemirror/lang-markdown";
import type { Extension } from "@codemirror/state";
import { Download, Trash2 } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import { CodeMirrorField } from "@/components/tools/CodeMirrorField";

const STORAGE_KEY = "notepad.is-tool-code";

type LangId = "javascript" | "typescript" | "css" | "json" | "html" | "markdown" | "plain";

const LANGS: { id: LangId; label: string }[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "css", label: "CSS" },
  { id: "json", label: "JSON" },
  { id: "html", label: "HTML" },
  { id: "markdown", label: "Markdown" },
  { id: "plain", label: "Plain text" },
];

const SNIPPETS: Record<LangId, string> = {
  javascript: `// JavaScript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Notepad"));`,
  typescript: `// TypeScript
type User = { id: string; name: string };

const user: User = { id: "1", name: "Writer" };

function greet(u: User): string {
  return \`Hi, \${u.name}\`;
}`,
  css: `/* CSS */
:root {
  --accent: #7c3aed;
}

.card {
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
}`,
  json: `{
  "app": "Notepad",
  "features": ["autosave", "darkMode"],
  "version": 1
}`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Snippet</title>
</head>
<body>
  <p>Hello from HTML.</p>
</body>
</html>`,
  markdown: `# Notes

Use **bold** and lists:

- Item one
- Item two`,
  plain: `Plain text — no highlighting.

Use this for logs, drafts, or any freeform writing.`,
};

function extensionsFor(lang: LangId): Extension[] {
  switch (lang) {
    case "javascript":
      return [javascript()];
    case "typescript":
      return [javascript({ typescript: true })];
    case "css":
      return [css()];
    case "json":
      return [json()];
    case "html":
      return [html()];
    case "markdown":
      return [markdown()];
    default:
      return [];
  }
}

export function CodeNotepadTool() {
  const [lang, setLang] = useState<LangId>("javascript");
  const [code, setCode] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { l, c } = JSON.parse(raw) as { l: LangId; c: string };
        if (LANGS.some((x) => x.id === l)) setLang(l);
        setCode(c ?? "");
        return;
      }
    } catch {
      /* ignore */
    }
    setCode(SNIPPETS.javascript);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ l: lang, c: code }));
      } catch {
        /* ignore */
      }
    }, 250);
    return () => clearTimeout(t);
  }, [code, lang, mounted]);

  const exts = useMemo(() => extensionsFor(lang), [lang]);

  const loadTemplate = useCallback(() => {
    setCode(SNIPPETS[lang]);
  }, [lang]);

  const clearAll = useCallback(() => {
    if (confirm("Clear the editor?")) setCode("");
  }, []);

  const download = useCallback(() => {
    const ext =
      lang === "javascript"
        ? "js"
        : lang === "typescript"
          ? "ts"
          : lang === "css"
            ? "css"
            : lang === "json"
              ? "json"
              : lang === "html"
                ? "html"
                : lang === "markdown"
                  ? "md"
                  : "txt";
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `snippet-${new Date().toISOString().slice(0, 10)}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [code, lang]);

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading editor…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <ToolCard
        title="Code notepad"
        description="Syntax-highlighted editor for JavaScript, TypeScript, CSS, JSON, HTML, Markdown, or plain text. Everything stays in your browser."
      >
        <div className="flex flex-col gap-4 border-b border-border/50 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {LANGS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLang(id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  lang === id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadTemplate}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted/80"
            >
              Load sample
            </button>
            <button
              type="button"
              onClick={download}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted/80"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-2 rounded-lg border border-destructive/30 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
              Clear
            </button>
          </div>
        </div>

        <div className="mt-5">
          <CodeMirrorField
            value={code}
            onChange={setCode}
            extensions={exts}
            minHeight="min(72vh, 560px)"
            placeholder="Start typing code…"
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
