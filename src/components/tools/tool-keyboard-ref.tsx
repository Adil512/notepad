"use client";

import { ToolCard, ToolChrome } from "@/components/tools/ToolChrome";

const ROWS: { keys: string; action: string }[] = [
  { keys: "Ctrl / ⌘ + S", action: "Save HTML to browser (homepage editor)" },
  { keys: "Ctrl / ⌘ + B", action: "Bold" },
  { keys: "Ctrl / ⌘ + I", action: "Italic" },
  { keys: "Ctrl / ⌘ + U", action: "Underline" },
  { keys: "Ctrl / ⌘ + Z", action: "Undo" },
  { keys: "Ctrl / ⌘ + Shift + Z", action: "Redo" },
  { keys: "Ctrl / ⌘ + K", action: "Insert link (when prompted in browser)" },
];

export function KeyboardShortcutsRefTool() {
  return (
    <ToolChrome>
      <ToolCard
        title="Homepage Rich Editor"
        description="These shortcuts work in the main Tiptap editor on the home page. Some browsers may override a few combinations."
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 font-semibold">Shortcut</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {ROWS.map((r) => (
                <tr key={r.keys} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs text-primary">
                    {r.keys}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ToolCard>

      <ToolCard title="Tip">
        <p className="text-sm text-muted-foreground">
          Use the toolbar on the homepage for headings, lists, tables, and
          find/replace. Open this page anytime from{" "}
          <span className="font-medium text-foreground">Tools</span> in the
          footer.
        </p>
      </ToolCard>
    </ToolChrome>
  );
}
