"use client";

import { useEffect, useState } from "react";
import { Copy, Download, Share2 } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-share";

export function ShareNoteTool() {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setText(localStorage.getItem(STORAGE_KEY) ?? "");
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

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      window.alert("Copy failed.");
    }
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      window.alert("System share is not available in this browser. Use Copy or Download.");
      return;
    }
    try {
      await navigator.share({ title: "Note", text });
    } catch {
      /* user cancelled */
    }
  };

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
        title="How sharing works here"
        description="Notepad.is does not upload your note to our servers for a public link. You stay in control: copy text, download a file, or use your device’s share sheet where supported."
      />

      <ToolCard title="Your note">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[50vh] w-full rounded-xl border border-input bg-background p-4 text-base leading-relaxed"
          placeholder="Write something to share out…"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            <Copy className="h-4 w-4" />
            Copy all
          </button>
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Download .txt
          </button>
          <button
            type="button"
            onClick={nativeShare}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Share2 className="h-4 w-4" />
            Share…
          </button>
        </div>
      </ToolCard>
    </ToolChrome>
  );
}
