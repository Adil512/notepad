"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Copy, Pencil } from "lucide-react";
import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const KEY = "notepad.is-tool-snippets";

type Snippet = { id: string; title: string; body: string };

function load(): Snippet[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const p = JSON.parse(raw) as unknown;
    if (!Array.isArray(p)) return [];
    return p.filter(
      (x): x is Snippet =>
        typeof x === "object" &&
        x !== null &&
        typeof (x as Snippet).id === "string"
    );
  } catch {
    return [];
  }
}

function save(list: Snippet[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export function SnippetShelfTool() {
  const [list, setList] = useState<Snippet[]>([]);
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setList(load());
  }, []);

  const persist = (next: Snippet[]) => {
    setList(next);
    save(next);
  };

  const add = () => {
    const t = title.trim() || "Untitled";
    const b = body.trim();
    if (!b) return;
    const id =
      editing ||
      (typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `s-${Date.now()}`);
    if (editing) {
      persist(
        list.map((s) => (s.id === id ? { ...s, title: t, body: b } : s))
      );
      setEditing(null);
    } else {
      persist([{ id, title: t, body: b }, ...list]);
    }
    setTitle("");
    setBody("");
  };

  const remove = (id: string) => {
    if (!window.confirm("Delete this snippet?")) return;
    persist(list.filter((s) => s.id !== id));
  };

  const copyBody = async (s: Snippet) => {
    try {
      await navigator.clipboard.writeText(s.body);
    } catch {
      window.alert("Copy failed.");
    }
  };

  const startEdit = (s: Snippet) => {
    setEditing(s.id);
    setTitle(s.title);
    setBody(s.body);
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
        title={editing ? "Edit snippet" : "New snippet"}
        description="Stored only in this browser."
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mb-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Signature, bio, code block, address…"
          className="min-h-[120px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={add}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            {editing ? "Save" : "Add snippet"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setTitle("");
                setBody("");
              }}
              className="rounded-xl border border-border px-4 py-2 text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </ToolCard>

      <ToolCard title="Your snippets">
        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">No snippets yet.</p>
        ) : (
          <ul className="space-y-3">
            {list.map((s) => (
              <li
                key={s.id}
                className="flex flex-col gap-2 rounded-xl border border-border p-4 sm:flex-row sm:items-start"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{s.title}</p>
                  <pre className="mt-2 max-h-32 overflow-auto whitespace-pre-wrap font-mono text-xs text-muted-foreground">
                    {s.body}
                  </pre>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => copyBody(s)}
                    className="rounded-lg border border-border p-2 hover:bg-muted"
                    aria-label="Copy"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => startEdit(s)}
                    className="rounded-lg border border-border p-2 hover:bg-muted"
                    aria-label="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(s.id)}
                    className="rounded-lg border border-destructive/30 p-2 text-destructive hover:bg-destructive/10"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </ToolCard>
    </ToolChrome>
  );
}
