"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Plus, Trash2, StickyNote } from "lucide-react";

const STORAGE_KEY = "notepad.is-quick-notes-v1";

type QuickNote = {
  id: string;
  title: string;
  body: string;
  updatedAt: number;
};

function loadNotes(): QuickNote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (n): n is QuickNote =>
          typeof n === "object" &&
          n !== null &&
          typeof (n as QuickNote).id === "string"
      )
      .map((n) => ({
        id: n.id,
        title: typeof n.title === "string" ? n.title : "",
        body: typeof n.body === "string" ? n.body : "",
        updatedAt: typeof n.updatedAt === "number" ? n.updatedAt : Date.now(),
      }));
  } catch {
    return [];
  }
}

function saveNotes(notes: QuickNote[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    /* ignore */
  }
}

function newNote(): QuickNote {
  return {
    id: typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `n-${Date.now()}`,
    title: "",
    body: "",
    updatedAt: Date.now(),
  };
}

export function QuickNotesApp() {
  const [notes, setNotes] = useState<QuickNote[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mobileList, setMobileList] = useState(true);

  useEffect(() => {
    setMounted(true);
    const list = loadNotes();
    setNotes(list);
    if (list.length > 0) {
      setSelectedId(list[0]!.id);
      setMobileList(false);
    }
  }, []);

  const persist = useCallback((next: QuickNote[]) => {
    setNotes(next);
    saveNotes(next);
  }, []);

  const selected = useMemo(
    () => notes.find((n) => n.id === selectedId) ?? null,
    [notes, selectedId]
  );

  const updateSelected = useCallback(
    (patch: Partial<Pick<QuickNote, "title" | "body">>) => {
      if (!selectedId) return;
      const next = notes.map((n) =>
        n.id === selectedId
          ? {
              ...n,
              ...patch,
              updatedAt: Date.now(),
            }
          : n
      );
      persist(next);
    },
    [notes, selectedId, persist]
  );

  const addNote = useCallback(() => {
    const n = newNote();
    persist([n, ...notes]);
    setSelectedId(n.id);
    setMobileList(false);
  }, [notes, persist]);

  const deleteNote = useCallback(
    (id: string) => {
      const next = notes.filter((n) => n.id !== id);
      persist(next);
      if (selectedId === id) {
        setSelectedId(next[0]?.id ?? null);
        if (next.length === 0) setMobileList(true);
      }
    },
    [notes, selectedId, persist]
  );

  const sorted = useMemo(
    () => [...notes].sort((a, b) => b.updatedAt - a.updatedAt),
    [notes]
  );

  if (!mounted) {
    return (
      <div className="min-h-[calc(100dvh-11rem)] flex items-center justify-center text-muted-foreground text-sm">
        Loading notes…
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row flex-1 min-h-[calc(100dvh-11rem)] -mx-4 border border-border rounded-xl overflow-hidden bg-card/30 sm:mx-0">
      <aside
        className={`md:w-56 lg:w-60 shrink-0 border-b md:border-b-0 md:border-r border-border bg-muted/20 flex flex-col max-h-[40vh] md:max-h-none ${
          mobileList ? "flex" : "hidden md:flex"
        } md:flex`}
      >
        <div className="p-3 border-b border-border flex items-center gap-2">
          <button
            type="button"
            onClick={addNote}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium py-2 px-3 hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New note
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto p-2 space-y-1">
          {sorted.length === 0 ? (
            <li className="px-2 py-6 text-center text-xs text-muted-foreground">
              No notes yet. Create one to start.
            </li>
          ) : (
            sorted.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedId(n.id);
                    setMobileList(false);
                  }}
                  className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                    selectedId === n.id
                      ? "bg-primary/15 text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <span className="line-clamp-2">
                    {n.title.trim() || n.body.trim().slice(0, 48) || "Untitled"}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </aside>

      <div
        className={`flex-1 flex flex-col min-h-[50vh] ${
          mobileList ? "hidden md:flex" : "flex"
        } md:flex`}
      >
        <div className="md:hidden shrink-0 flex items-center gap-2 p-2 border-b border-border bg-background/80">
          <button
            type="button"
            onClick={() => setMobileList(true)}
            className="text-sm font-medium text-primary px-2 py-1 rounded-md hover:bg-primary/10"
          >
            ← All notes
          </button>
        </div>

        {selected ? (
          <>
            <div className="shrink-0 p-3 sm:p-4 border-b border-border flex items-start gap-2">
              <input
                type="text"
                value={selected.title}
                onChange={(e) => updateSelected({ title: e.target.value })}
                placeholder="Title (optional)"
                className="flex-1 bg-transparent text-base sm:text-lg font-display font-semibold text-foreground placeholder:text-muted-foreground/60 focus:outline-none min-w-0"
              />
              <button
                type="button"
                onClick={() => deleteNote(selected.id)}
                className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                aria-label="Delete note"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={selected.body}
              onChange={(e) => updateSelected({ body: e.target.value })}
              placeholder="Jot something down… Autosaves as you type."
              className="flex-1 w-full min-h-[40vh] resize-none bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none text-base leading-relaxed p-3 sm:p-4 font-sans"
              aria-label="Note content"
            />
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center text-muted-foreground">
            <StickyNote className="w-12 h-12 opacity-40" />
            <p className="text-sm max-w-xs">
              Quick notes stay on this device. Add a note to capture ideas in
              seconds.
            </p>
            <button
              type="button"
              onClick={addNote}
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium py-2.5 px-4 hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
              New note
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
