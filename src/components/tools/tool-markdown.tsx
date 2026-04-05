"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdown } from "@codemirror/lang-markdown";
import {
  Download,
  LayoutPanelLeft,
  Eye,
  Columns2,
  Sparkles,
} from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";
import { CodeMirrorField } from "@/components/tools/CodeMirrorField";

const STORAGE_KEY = "notepad.is-tool-markdown";
const DEFAULT_MD = `# Welcome

Edit **Markdown** with **syntax highlighting**, then preview or export.

- Lists and \`inline code\`
- [Links](https://notepad.is)
- Tables, tasks, and more (GFM)
`;

type View = "split" | "edit" | "preview";

export function MarkdownNotepadTool() {
  const [md, setMd] = useState("");
  const [view, setView] = useState<View>("split");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMd(localStorage.getItem(STORAGE_KEY) ?? DEFAULT_MD);
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

  const mdExtensions = useMemo(() => [markdown()], []);

  const downloadMd = useCallback(() => {
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notepad-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [md]);

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

  const preview = (
    <div className="flex min-h-[480px] flex-col overflow-hidden rounded-xl border border-border/80 bg-muted/15 shadow-inner dark:bg-muted/10">
      <div className="flex items-center gap-2 border-b border-border/60 bg-card/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Live preview
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none flex-1 overflow-auto p-5 sm:prose-base">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {md || "*Nothing to preview yet.*"}
        </ReactMarkdown>
      </div>
    </div>
  );

  const editorPane = (
    <div className="flex min-h-[480px] flex-col gap-0 overflow-hidden rounded-xl border border-border/80">
      <div className="flex items-center gap-2 border-b border-border/60 bg-card/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Source
      </div>
      <div className="min-h-[440px] flex-1 p-2 sm:p-3">
        <CodeMirrorField
          value={md}
          onChange={setMd}
          extensions={mdExtensions}
          minHeight="420px"
          placeholder="Write Markdown…"
          className="border-0 bg-transparent shadow-none"
        />
      </div>
    </div>
  );

  return (
    <ToolChrome>
      <ToolCard
        title="Markdown editor"
        description="GitHub-flavored Markdown with highlighted source, live preview, and local autosave."
      >
        <div className="flex flex-wrap items-center gap-2 border-b border-border/50 pb-4">
          {btn("edit", <LayoutPanelLeft className="h-4 w-4" />, "Source")}
          {btn("preview", <Eye className="h-4 w-4" />, "Preview")}
          {btn("split", <Columns2 className="h-4 w-4" />, "Split")}
          <button
            type="button"
            onClick={downloadMd}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-muted/80"
          >
            <Download className="h-4 w-4" />
            Download .md
          </button>
        </div>

        <div className="mt-5">
          {view === "edit" && editorPane}
          {view === "preview" && preview}
          {view === "split" && (
            <div className="grid min-h-0 gap-4 lg:grid-cols-2 lg:gap-5">
              {editorPane}
              {preview}
            </div>
          )}
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
