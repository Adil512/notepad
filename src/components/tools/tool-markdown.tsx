"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Download, LayoutPanelLeft, Eye, Columns2 } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-markdown";

type View = "split" | "edit" | "preview";

export function MarkdownNotepadTool() {
  const [md, setMd] = useState("");
  const [view, setView] = useState<View>("split");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMd(localStorage.getItem(STORAGE_KEY) ?? "# Hello\n\nStart writing **Markdown** here.\n");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, md);
      } catch {
        /* ignore */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [md, mounted]);

  const downloadMd = () => {
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notepad-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const btn = (v: View, icon: React.ReactNode, label: string) => (
    <button
      type="button"
      onClick={() => setView(v)}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        view === v
          ? "bg-primary text-primary-foreground"
          : "bg-muted/60 text-muted-foreground hover:bg-muted"
      }`}
    >
      {icon}
      {label}
    </button>
  );

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  const preview = (
    <div className="prose prose-sm dark:prose-invert max-w-none overflow-auto rounded-xl border border-border bg-muted/20 p-4 sm:prose-base min-h-[50vh]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md || "*Nothing to preview*"}</ReactMarkdown>
    </div>
  );

  const editor = (
    <textarea
      value={md}
      onChange={(e) => setMd(e.target.value)}
      spellCheck
      className="min-h-[50vh] w-full resize-y rounded-xl border border-input bg-background p-4 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
      placeholder="# Markdown"
      aria-label="Markdown source"
    />
  );

  return (
    <ToolChrome>
      <ToolCard
        title="Markdown workspace"
        description="GitHub-flavored Markdown. Everything autosaves locally."
      >
        <div className="flex flex-wrap items-center gap-2">
          {btn("edit", <LayoutPanelLeft className="h-4 w-4" />, "Edit")}
          {btn("preview", <Eye className="h-4 w-4" />, "Preview")}
          {btn("split", <Columns2 className="h-4 w-4" />, "Split")}
          <button
            type="button"
            onClick={downloadMd}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Download .md
          </button>
        </div>

        <div className="mt-4">
          {view === "edit" && editor}
          {view === "preview" && preview}
          {view === "split" && (
            <div className="grid min-h-[50vh] gap-4 lg:grid-cols-2">
              {editor}
              {preview}
            </div>
          )}
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
