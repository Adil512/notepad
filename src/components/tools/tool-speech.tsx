"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, AlertCircle } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const STORAGE_KEY = "notepad.is-tool-dictation";

type RecCtor = new () => {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((ev: Event) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
};

function getRecognition(): InstanceType<RecCtor> | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecCtor;
    webkitSpeechRecognition?: RecCtor;
  };
  const S = w.SpeechRecognition || w.webkitSpeechRecognition;
  return S ? new S() : null;
}

export function SpeechDictationTool() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);
  const recRef = useRef<InstanceType<RecCtor> | null>(null);

  useEffect(() => {
    setMounted(true);
    setText(localStorage.getItem(STORAGE_KEY) ?? "");
    setSupported(!!getRecognition());
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

  useEffect(() => {
    return () => {
      recRef.current?.stop();
    };
  }, []);

  const toggle = () => {
    const Rec = getRecognition();
    if (!Rec) return;

    if (listening) {
      recRef.current?.stop();
      setListening(false);
      return;
    }

    const r = getRecognition();
    if (!r) return;
    recRef.current = r;
    r.continuous = true;
    r.interimResults = true;
    r.lang = navigator.language || "en-US";

    r.onresult = (ev: Event) => {
      const e = ev as unknown as {
        resultIndex: number;
        results: { length: number; [i: number]: { isFinal: boolean; [j: number]: { transcript: string } } };
      };
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (!res?.isFinal) continue;
        const t = res[0]?.transcript ?? "";
        if (!t) continue;
        setText((prev) =>
          `${prev}${prev && !/\s$/.test(prev) ? " " : ""}${t.trim()}`
        );
      }
    };

    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);

    try {
      r.start();
      setListening(true);
    } catch {
      setListening(false);
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
      {supported === false && (
        <div className="flex gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-900 dark:text-amber-100">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <div>
            <p className="font-medium">Speech recognition not available</p>
            <p className="mt-1 text-amber-800/90 dark:text-amber-200/90">
              Try Chrome or Edge on desktop, or allow microphone access. Text
              still saves locally.
            </p>
          </div>
        </div>
      )}

      <ToolCard
        title="Privacy"
        description="Dictation uses your browser’s speech engine. Audio is processed by the browser/OS vendor, not sent to Notepad.is servers. We do not receive your voice."
      />

      <ToolCard title="Dictation">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={toggle}
            disabled={!supported}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50 ${
              listening
                ? "bg-red-600 hover:bg-red-500"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {listening ? (
              <>
                <MicOff className="h-4 w-4" /> Stop
              </>
            ) : (
              <>
                <Mic className="h-4 w-4" /> Start dictation
              </>
            )}
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-4 min-h-[55vh] w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Tap start and speak, or type here…"
          spellCheck
        />
      </ToolCard>
    </ToolChrome>
  );
}
