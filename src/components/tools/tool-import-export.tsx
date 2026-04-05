"use client";

import { useState } from "react";
import { Upload, FileText, FileCode, FileType2 } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

export function ImportExportHubTool() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("export");

  const loadFile = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setContent(String(reader.result ?? ""));
    reader.readAsText(file);
  };

  const download = (ext: string, mime: string) => {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/[^a-z0-9-_]/gi, "-").slice(0, 40) || "export"}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolChrome>
      <ToolCard
        title="Import"
        description="Load .txt, .md, or .html as plain text into the box below."
      >
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border px-4 py-8 text-sm font-medium hover:bg-muted/50">
          <Upload className="h-5 w-5" />
          Choose file
          <input
            type="file"
            accept=".txt,.md,.html,.htm,text/plain,text/markdown,text/html"
            className="hidden"
            onChange={(e) => loadFile(e.target.files?.[0] ?? null)}
          />
        </label>
      </ToolCard>

      <ToolCard title="Workspace">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Base filename for export"
          className="mb-3 w-full max-w-md rounded-lg border border-input bg-background px-3 py-2 text-sm"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[40vh] w-full rounded-xl border border-input bg-background p-4 font-mono text-sm"
          placeholder="Imported or pasted content…"
        />
      </ToolCard>

      <ToolCard
        title="Export"
        description="Download in common formats. HTML export wraps your text in a minimal document."
      >
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => download("txt", "text/plain")}
            disabled={!content}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-50"
          >
            <FileText className="h-4 w-4" />
            .txt
          </button>
          <button
            type="button"
            onClick={() => download("md", "text/markdown")}
            disabled={!content}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-50"
          >
            <FileType2 className="h-4 w-4" />
            .md
          </button>
          <button
            type="button"
            onClick={() => {
              const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>${name}</title></head><body><pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;padding:1rem;">${content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre></body></html>`;
              const blob = new Blob([html], { type: "text/html;charset=utf-8" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `${name || "export"}.html`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            disabled={!content}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-50"
          >
            <FileCode className="h-4 w-4" />
            .html
          </button>
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
