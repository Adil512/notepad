import type { Editor } from "@tiptap/core";
import type { Node as ProseMirrorNode } from "@tiptap/pm/model";

function collectTextMatches(
  doc: ProseMirrorNode,
  query: string
): { from: number; to: number }[] {
  if (!query) return [];
  const q = query.toLowerCase();
  const matches: { from: number; to: number }[] = [];
  doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;
    const text = node.text;
    for (let i = 0; i <= text.length - query.length; i++) {
      if (text.slice(i, i + query.length).toLowerCase() === q) {
        matches.push({ from: pos + i, to: pos + i + query.length });
      }
    }
  });
  return matches.sort((a, b) => a.from - b.from);
}

/** Select next occurrence after cursor, or wrap to first. */
export function findNextInEditor(editor: Editor, query: string): boolean {
  const matches = collectTextMatches(editor.state.doc, query);
  if (!matches.length) return false;
  const c = editor.state.selection.from;
  const next = matches.find((m) => m.from > c) ?? matches[0];
  editor.chain().focus().setTextSelection({ from: next.from, to: next.to }).run();
  return true;
}

export function replaceSelectionIfMatches(
  editor: Editor,
  findText: string,
  replaceWith: string
): boolean {
  if (!findText) return false;
  const { from, to } = editor.state.selection;
  const selected = editor.state.doc.textBetween(from, to, "");
  if (selected.toLowerCase() !== findText.toLowerCase()) return false;
  editor.chain().focus().deleteRange({ from, to }).insertContent(replaceWith).run();
  return true;
}
