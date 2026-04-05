"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import type { Extension } from "@codemirror/state";

export function CodeMirrorField({
  value,
  onChange,
  extensions,
  minHeight = "min(70vh, 520px)",
  placeholder,
  className = "",
  readOnly = false,
}: {
  value: string;
  onChange?: (v: string) => void;
  minHeight?: string;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
  extensions: Extension[];
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeExt = useMemo(
    () =>
      resolvedTheme === "dark"
        ? [oneDark]
        : [
            EditorView.theme({
              "&": { backgroundColor: "hsl(var(--card))" },
              ".cm-content": { caretColor: "hsl(var(--foreground))" },
              ".cm-gutters": {
                backgroundColor: "hsl(var(--muted))",
                color: "hsl(var(--muted-foreground))",
                border: "none",
              },
            }),
          ],
    [resolvedTheme]
  );

  const allExt = useMemo(
    () => [...extensions, ...themeExt, EditorView.lineWrapping],
    [extensions, themeExt]
  );

  if (!mounted) {
    return (
      <div
        className={`rounded-xl border border-border bg-muted/40 ${className}`}
        style={{ minHeight }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={`group/cm overflow-hidden rounded-xl border border-border/80 bg-card shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] ${className}`}
      style={{ minHeight }}
    >
      <CodeMirror
        value={value}
        minHeight={minHeight}
        extensions={allExt}
        onChange={readOnly ? undefined : onChange}
        editable={!readOnly}
        placeholder={placeholder}
        className="text-[13px] [&_.cm-editor]:outline-none [&_.cm-scroller]:font-mono [&_.cm-scroller]:text-[13px] [&_.cm-scroller]:leading-relaxed [&_.cm-focused]:outline-none"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          foldGutter: true,
        }}
      />
    </div>
  );
}
