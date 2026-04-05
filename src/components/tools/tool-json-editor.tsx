"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { json } from "@codemirror/lang-json";
import {
  Braces,
  Check,
  Copy,
  Minimize2,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import { CodeMirrorField } from "@/components/tools/CodeMirrorField";

const STORAGE_KEY = "notepad.is-tool-json";

const SAMPLE = `{
  "name": "Notepad",
  "url": "https://notepad.is",
  "features": {
    "autosave": true,
    "themes": ["light", "dark", "system"]
  },
  "version": 1
}`;

export function JsonEditorTool() {
  const [text, setText] = useState("");
  const [parseError, setParseError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    setText(localStorage.getItem(STORAGE_KEY) ?? SAMPLE);
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

  const exts = useMemo(() => [json()], []);

  const validate = useCallback(() => {
    const t = text.trim();
    if (!t) {
      setParseError(null);
      return;
    }
    try {
      JSON.parse(t);
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text]);

  useEffect(() => {
    const t = setTimeout(validate, 400);
    return () => clearTimeout(t);
  }, [text, validate]);

  const formatPretty = useCallback(() => {
    try {
      const parsed = JSON.parse(text);
      setText(JSON.stringify(parsed, null, 2));
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text]);

  const minify = useCallback(() => {
    try {
      const parsed = JSON.parse(text);
      setText(JSON.stringify(parsed));
      setParseError(null);
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [text]);

  const copyAll = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, [text]);

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
        title="JSON editor"
        description="Edit JSON with syntax highlighting, live validation, pretty-print, and minify. Data stays local in your browser."
      >
        <div className="flex flex-col gap-3 border-b border-border/50 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={formatPretty}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4" />
              Format
            </button>
            <button
              type="button"
              onClick={minify}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted/80"
            >
              <Minimize2 className="h-4 w-4" />
              Minify
            </button>
            <button
              type="button"
              onClick={copyAll}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted/80"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
              parseError
                ? "border border-destructive/40 bg-destructive/10 text-destructive"
                : text.trim() === ""
                  ? "border border-border bg-muted/40 text-muted-foreground"
                  : "border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-800 dark:text-emerald-200"
            }`}
          >
            {parseError ? (
              <>
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="font-mono text-xs">{parseError}</span>
              </>
            ) : text.trim() === "" ? (
              <>
                <Braces className="h-4 w-4 shrink-0 opacity-60" />
                <span>Empty document</span>
              </>
            ) : (
              <>
                <Braces className="h-4 w-4 shrink-0" />
                <span>Valid JSON</span>
              </>
            )}
          </div>
        </div>

        <div className="mt-5">
          <CodeMirrorField
            value={text}
            onChange={setText}
            extensions={exts}
            minHeight="min(72vh, 560px)"
            placeholder='{ "hello": "world" }'
          />
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
