"use client";

import { useCallback, useEffect, useState } from "react";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const CONTENT_KEY = "notepad.is-tool-focus-content";
const STATS_KEY = "notepad.is-tool-focus-stats";

type Stats = {
  sessions: number;
  focusMinutes: number;
};

function loadStats(): Stats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return { sessions: 0, focusMinutes: 0 };
    const p = JSON.parse(raw) as Partial<Stats>;
    return {
      sessions: typeof p.sessions === "number" ? p.sessions : 0,
      focusMinutes: typeof p.focusMinutes === "number" ? p.focusMinutes : 0,
    };
  } catch {
    return { sessions: 0, focusMinutes: 0 };
  }
}

function saveStats(s: Stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function FocusTimerWriting() {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [phase, setPhase] = useState<"work" | "break">("work");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [text, setText] = useState("");
  const [stats, setStats] = useState<Stats>({ sessions: 0, focusMinutes: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setText(localStorage.getItem(CONTENT_KEY) ?? "");
    setStats(loadStats());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(CONTENT_KEY, text);
      } catch {
        /* ignore */
      }
    }, 250);
    return () => clearTimeout(t);
  }, [text, mounted]);

  const totalForPhase = (phase === "work" ? workMin : breakMin) * 60;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (secondsLeft !== 0 || !running) return;
    if (phase === "work") {
      const next = loadStats();
      next.sessions += 1;
      next.focusMinutes += workMin;
      saveStats(next);
      setStats(next);
      setPhase("break");
      setSecondsLeft(breakMin * 60);
    } else {
      setPhase("work");
      setSecondsLeft(workMin * 60);
    }
  }, [secondsLeft, running, phase, workMin, breakMin]);

  const resetPhase = useCallback(() => {
    setRunning(false);
    setSecondsLeft((phase === "work" ? workMin : breakMin) * 60);
  }, [phase, workMin, breakMin]);

  const fmt = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const progress = totalForPhase > 0 ? 1 - secondsLeft / totalForPhase : 0;

  if (!mounted) {
    return (
      <ToolChrome>
        <p className="text-center text-muted-foreground">Loading…</p>
      </ToolChrome>
    );
  }

  return (
    <ToolChrome>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolCard
          title="Timer"
          description="Classic Pomodoro rhythm. Stats below are stored only in this browser."
        >
          <div className="flex flex-wrap items-end gap-4">
            <label className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
              Focus (min)
              <input
                type="number"
                min={1}
                max={120}
                value={workMin}
                disabled={running}
                onChange={(e) => {
                  const v = Math.min(120, Math.max(1, Number(e.target.value) || 1));
                  setWorkMin(v);
                  if (!running && phase === "work") setSecondsLeft(v * 60);
                }}
                className="w-24 rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-muted-foreground">
              Break (min)
              <input
                type="number"
                min={1}
                max={60}
                value={breakMin}
                disabled={running}
                onChange={(e) => {
                  const v = Math.min(60, Math.max(1, Number(e.target.value) || 1));
                  setBreakMin(v);
                  if (!running && phase === "break") setSecondsLeft(v * 60);
                }}
                className="w-24 rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div
              className={`relative flex h-44 w-44 items-center justify-center rounded-full border-4 ${
                phase === "work"
                  ? "border-violet-500/40 text-violet-600 dark:text-violet-400"
                  : "border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
              }`}
              style={{
                background: `conic-gradient(currentColor ${progress * 360}deg, var(--muted) 0)`,
              }}
            >
              <div className="flex h-[85%] w-[85%] flex-col items-center justify-center rounded-full bg-card">
                <Timer className="mb-1 h-6 w-6 opacity-60" />
                <span className="font-mono text-3xl font-bold tabular-nums">
                  {fmt(secondsLeft)}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {phase === "work" ? "Focus" : "Break"}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setRunning((r) => !r)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {running ? (
                  <>
                    <Pause className="h-4 w-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" /> Start
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={resetPhase}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                <RotateCcw className="h-4 w-4" />
                Reset phase
              </button>
            </div>
          </div>
        </ToolCard>

        <ToolCard
          title="Session stats (local only)"
          description="Completed focus sessions and total focused minutes on this device."
        >
          <dl className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-xl bg-muted/50 p-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Sessions
              </dt>
              <dd className="mt-1 text-3xl font-bold tabular-nums">{stats.sessions}</dd>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Focus min
              </dt>
              <dd className="mt-1 text-3xl font-bold tabular-nums">{stats.focusMinutes}</dd>
            </div>
          </dl>
        </ToolCard>
      </div>

      <ToolCard title="Writing space" description="Autosaves to this browser.">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write during your focus block…"
          className="min-h-[45vh] w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
          spellCheck
        />
      </ToolCard>
    </ToolChrome>
  );
}
