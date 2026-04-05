export const WRITING_TOOL_IDS = [
  "focus-timer",
  "markdown-notepad",
  "goal-tracker",
  "speech-dictation",
  "paste-clean",
  "compare-drafts",
  "templates",
  "snippet-shelf",
  "reading-mode",
  "print-note",
  "share-note",
  "import-export",
  "install-app",
  "keyboard-shortcuts",
] as const;

export type WritingToolId = (typeof WRITING_TOOL_IDS)[number];

export type WritingToolCategory =
  | "focus"
  | "text"
  | "capture"
  | "export"
  | "workspace";

export const WRITING_TOOL_CATEGORY_ORDER: WritingToolCategory[] = [
  "focus",
  "text",
  "capture",
  "export",
  "workspace",
];

export const writingToolCategoryCopy: Record<
  WritingToolCategory,
  { title: string; description: string }
> = {
  focus: {
    title: "Focus & Goals",
    description:
      "Stay on task and hit targets without leaving the flow. Everything stays on your device.",
  },
  text: {
    title: "Text & Structure",
    description:
      "Shape, clean, compare, and read your words with dedicated layouts.",
  },
  capture: {
    title: "Capture & Reuse",
    description:
      "Dictate, template, and shelf snippets you use again and again.",
  },
  export: {
    title: "Export & Share",
    description:
      "Move content out as files or through your OS. No forced cloud upload.",
  },
  workspace: {
    title: "Workspace",
    description: "Install the app shell and master editor shortcuts.",
  },
};

/** Tailwind gradient classes for category accents (icon wells, section markers). */
export const writingToolCategoryAccent: Record<
  WritingToolCategory,
  string
> = {
  focus: "from-violet-600 to-fuchsia-600 dark:from-violet-500 dark:to-fuchsia-500",
  text: "from-sky-600 to-cyan-600 dark:from-sky-500 dark:to-cyan-400",
  capture: "from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500",
  export: "from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-400",
  workspace: "from-slate-600 to-zinc-600 dark:from-slate-500 dark:to-zinc-400",
};

export function isWritingToolId(s: string): s is WritingToolId {
  return (WRITING_TOOL_IDS as readonly string[]).includes(s);
}

export type WritingToolMeta = {
  id: WritingToolId;
  title: string;
  description: string;
  h1: string;
  /** Short label for cards */
  tagline: string;
  category: WritingToolCategory;
};

export const writingToolsMeta: Record<WritingToolId, WritingToolMeta> = {
  "focus-timer": {
    id: "focus-timer",
    title: "Focus Timer Online – Pomodoro & Zen Writing Editor",
    description:
      "Focus Timer Online with Pomodoro, zen editor, and local stats. Stay productive, track sessions, and improve writing focus with a distraction-free tool.",
    h1: "Focus timer & writing",
    tagline: "Pomodoro + zen editor + local stats",
    category: "focus",
  },
  "markdown-notepad": {
    id: "markdown-notepad",
    title: "Markdown Notepad Online – GFM Editor & Preview Tool",
    description:
      "Markdown Notepad Online with split view, GFM preview, and export options. Write, edit, and manage markdown files easily in your browser.",
    h1: "Markdown notepad",
    tagline: "Split view, GFM preview, export .md",
    category: "text",
  },
  "goal-tracker": {
    id: "goal-tracker",
    title: "Writing Goals Tracker – Set Targets & Track Progress",
    description:
      "Writing Goals Tracker helps you set targets, track progress, and reach milestones. Stay motivated and manage your writing goals effectively online.",
    h1: "Writing goals",
    tagline: "Targets, progress, milestones",
    category: "focus",
  },
  "speech-dictation": {
    id: "speech-dictation",
    title: "Speech to Text Online – Voice Dictation Notepad Tool",
    description:
      "Speech to Text Online lets you convert voice into text instantly. Use browser-based dictation to write notes faster and hands-free.",
    h1: "Speech dictation",
    tagline: "Voice to text in the browser",
    category: "capture",
  },
  "paste-clean": {
    id: "paste-clean",
    title: "Paste & Clean Text – Remove Formatting Instantly",
    description:
      "Paste & Clean Text tool removes unwanted formatting instantly. Clean copied content and get plain text for notes, documents, and editing.",
    h1: "Paste & clean",
    tagline: "Strip formatting from pasted content",
    category: "text",
  },
  "compare-drafts": {
    id: "compare-drafts",
    title: "Compare Drafts Online – Text Diff & Side-by-Side Tool",
    description:
      "Compare drafts online with a side-by-side text diff tool. Easily find changes, track edits, and improve your writing with instant comparison.",
    h1: "Compare drafts",
    tagline: "Side-by-side diff",
    category: "text",
  },
  templates: {
    id: "templates",
    title: "Writing Templates Online – Ready-to-Use Note Formats",
    description:
      "Writing Templates Online with one-click starter structures. Save time and create notes faster using pre-built formats for any use.",
    h1: "Templates",
    tagline: "One-click starter structures",
    category: "capture",
  },
  "snippet-shelf": {
    id: "snippet-shelf",
    title: "Snippet Shelf – Save & Reuse Text Snippets Online",
    description:
      "Snippet Shelf lets you save and reuse text instantly. Store snippets, copy quickly, and boost productivity with reusable content.",
    h1: "Snippet shelf",
    tagline: "Reusable text, instant copy",
    category: "capture",
  },
  "reading-mode": {
    id: "reading-mode",
    title: "Reading Mode Online – Clean & Distraction-Free View",
    description:
      "Reading Mode Online provides a calm, distraction-free layout for better focus. Read notes and text comfortably with a clean interface.",
    h1: "Reading mode",
    tagline: "Calm reading layout",
    category: "text",
  },
  "print-note": {
    id: "print-note",
    title: "Print Notes Online – Clean & Print-Friendly Layout",
    description:
      "Print Notes Online with a clean, print-friendly layout. Easily format and print your notes without distractions or extra styling issues.",
    h1: "Print note",
    tagline: "Print-friendly layout",
    category: "export",
  },
  "share-note": {
    id: "share-note",
    title: "Share Notes Online – Export & Share Instantly",
    description:
      "Share Notes Online with easy export and sharing options. Quickly send your notes or download them for offline use anytime.",
    h1: "Share note",
    tagline: "Export & share locally",
    category: "export",
  },
  "import-export": {
    id: "import-export",
    title: "Import & Export Notes – Manage Files Easily Online",
    description:
      "Import and export notes easily in one place. Upload, download, and manage your files seamlessly with this online notepad tool.",
    h1: "Import & export",
    tagline: "Files in one place",
    category: "export",
  },
  "install-app": {
    id: "install-app",
    title: "Install Notepad App – PWA & Add to Home Screen",
    description:
      "Install Notepad App as a PWA or add to your home screen. Access your notes quickly with an app-like experience on any device.",
    h1: "Install app",
    tagline: "PWA / add to home screen",
    category: "workspace",
  },
  "keyboard-shortcuts": {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts – Notepad Power User Guide",
    description:
      "Keyboard Shortcuts guide for power users. Learn quick commands to write, edit, and navigate faster in your online notepad.",
    h1: "Keyboard shortcuts",
    tagline: "Power-user reference",
    category: "workspace",
  },
};

export function toolsInCategory(
  cat: WritingToolCategory
): WritingToolId[] {
  return WRITING_TOOL_IDS.filter((id) => writingToolsMeta[id].category === cat);
}
