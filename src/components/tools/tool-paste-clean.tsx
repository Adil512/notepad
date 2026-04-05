"use client";

import { useState } from "react";
import { Copy, Eraser } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

function stripToPlain(raw: string, isHtml: boolean): string {
  if (!isHtml) return raw.replace(/\r\n/g, "\n").trim();
  const doc = new DOMParser().parseFromString(raw, "text/html");
  return (doc.body.textContent || "").replace(/\r\n/g, "\n").trim();
}

export function PasteCleanTool() {
  const [raw, setRaw] = useState("");
  const [clean, setClean] = useState("");

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const html = e.clipboardData.getData("text/html");
    const plain = e.clipboardData.getData("text/plain");
    e.preventDefault();
    if (html && html.trim()) {
      const t = stripToPlain(html, true);
      setRaw((p) => p + t);
      setClean(stripToPlain(html, true));
    } else {
      setRaw((p) => p + plain);
      setClean(plain.replace(/\r\n/g, "\n").trim());
    }
  };

  const runClean = () => {
    if (raw.trim().startsWith("<")) {
      setClean(stripToPlain(raw, true));
    } else {
      setClean(raw.replace(/\r\n/g, "\n").trim());
    }
  };

  const copyClean = async () => {
    try {
      await navigator.clipboard.writeText(clean);
    } catch {
      window.alert("Could not copy. Select the text manually.");
    }
  };

  return (
    <ToolChrome>
      <ToolCard
        title="Paste here"
        description="Paste from Word, Google Docs, or the web. We strip tags and styles to plain text."
      >
        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          onPaste={handlePaste}
          className="min-h-[200px] w-full rounded-xl border border-input bg-background p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Paste (Ctrl+V) or type messy text, then Clean…"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={runClean}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Eraser className="h-4 w-4" />
            Clean
          </button>
          <button
            type="button"
            onClick={() => {
              setRaw("");
              setClean("");
            }}
            className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Clear all
          </button>
        </div>
      </ToolCard>

      <ToolCard
        title="Clean output"
        description="Review and copy plain text only."
      >
        <textarea
          readOnly
          value={clean}
          className="min-h-[220px] w-full rounded-xl border border-border bg-muted/30 p-4 font-mono text-sm"
        />
        <button
          type="button"
          onClick={copyClean}
          disabled={!clean}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-50"
        >
          <Copy className="h-4 w-4" />
          Copy clean text
        </button>
      </ToolCard>
    </ToolChrome>
  );
}
