"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "notepad.is-distraction-free";

export function DistractionFreeWriter() {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      setText(localStorage.getItem(STORAGE_KEY) ?? "");
    } catch {
      setText("");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    taRef.current?.focus();
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const t = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, text);
      } catch {
        /* ignore quota */
      }
    }, 200);
    return () => clearTimeout(t);
  }, [text, mounted]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  const words = mounted
    ? text.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const chars = text.length;

  return (
    <div className="flex flex-1 flex-col min-h-[calc(100dvh-11rem)] -mx-4 px-4 sm:-mx-0 sm:px-0">
      <textarea
        ref={taRef}
        value={text}
        onChange={onChange}
        spellCheck
        placeholder="Start writing…"
        className="flex-1 w-full min-h-[50vh] resize-none bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-lg sm:text-xl leading-[1.85] font-serif tracking-wide px-1 sm:px-2 py-2 selection:bg-primary/20"
        aria-label="Distraction-free writing area"
      />
      <div className="shrink-0 flex items-center justify-between gap-3 pt-3 pb-1 text-xs text-muted-foreground tabular-nums border-t border-border/60">
        <span>
          {words} {words === 1 ? "word" : "words"} · {chars}{" "}
          {chars === 1 ? "character" : "characters"}
        </span>
        <span className="text-muted-foreground/70">Saved in this browser</span>
      </div>
    </div>
  );
}
