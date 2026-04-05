"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { html } from "@codemirror/lang-html";
import { Columns2, Eye, LayoutPanelLeft, Download } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import { CodeMirrorField } from "@/components/tools/CodeMirrorField";

const STORAGE_KEY = "notepad.is-tool-html";

const SAMPLE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Preview</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 1.5rem; line-height: 1.6; }
    h1 { color: #7c3aed; }
  </style>
</head>
<body>
  <h1>Live HTML preview</h1>
  <p>Edit the source on the left — updates appear here safely in a sandbox.</p>
</body>
</html>`;

type View = "split" | "code" | "preview";

export function HtmlEditorTool() {
  const [src, setSrc] = useState("");
  const [view, setView] = useState<View>("split");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSrc(localStorage.getItem(STORAGE_KEY) ?? SAMPLE);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, src);
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [src, mounted]);

  const exts = useMemo(() => [html()], []);

  const downloadHtml = useCallback(() => {
    const blob = new Blob([src], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `page-${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }, [src]);

  const btn = (v: View, icon: React.ReactNode, label: string) => (
    <button
      type="button"
      onClick={() => setView(v)}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
        view === v
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading editor…</p>
      </ToolChrome>
    );
  }

  const editorBlock = (
    <div className="flex min-h-[480px] flex-col overflow-hidden rounded-xl border border-border/80">
      <div className="flex items-center gap-2 border-b border-border/60 bg-card/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        HTML source
      </div>
      <div className="min-h-[440px] flex-1 p-2 sm:p-3">
        <CodeMirrorField
          value={src}
          onChange={setSrc}
          extensions={exts}
          minHeight="420px"
          placeholder="<!DOCTYPE html>…"
        />
      </div>
    </div>
  );

  const previewBlock = (
    <div className="flex min-h-[480px] flex-col overflow-hidden rounded-xl border border-border/80 bg-muted/10">
      <div className="flex items-center gap-2 border-b border-border/60 bg-card/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Eye className="h-3.5 w-3.5" />
        Sandboxed preview
      </div>
      <iframe
        title="HTML preview"
        sandbox="allow-same-origin"
        srcDoc={src || "<p>No HTML yet.</p>"}
        className="min-h-[440px] w-full flex-1 bg-white dark:bg-zinc-950"
      />
    </div>
  );

  return (
    <ToolChrome>
      <ToolCard
        title="HTML editor"
        description="Write HTML with highlighting and a live, sandboxed preview. Scripts do not run in the preview pane for safety."
      >
        <div className="flex flex-wrap items-center gap-2 border-b border-border/50 pb-4">
          {btn("code", <LayoutPanelLeft className="h-4 w-4" />, "Source")}
          {btn("preview", <Eye className="h-4 w-4" />, "Preview")}
          {btn("split", <Columns2 className="h-4 w-4" />, "Split")}
          <button
            type="button"
            onClick={downloadHtml}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted/80"
          >
            <Download className="h-4 w-4" />
            Download .html
          </button>
        </div>

        <div className="mt-5">
          {view === "code" && editorBlock}
          {view === "preview" && previewBlock}
          {view === "split" && (
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
              {editorBlock}
              {previewBlock}
            </div>
          )}
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
