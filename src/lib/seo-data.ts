export interface SEOPageData {
  title: string;
  description: string;
  h1: string;
}

export type SEOPageMode = "rich-editor" | "distraction-free" | "quick-notes";

export const seoPages: Record<string, SEOPageData & { mode?: SEOPageMode }> = {
  "secure-text-editor": {
    title: "Secure Text Editor | Privacy Focused | Notepad.is",
    description:
      "Write notes securely on your browser. Notepad.is autosaves locally to your device and never hits our servers.",
    h1: "Secure Text Editor",
    mode: "rich-editor",
  },
  "distraction-free-writer": {
    title: "Distraction Free Writing App | Notepad.is",
    description:
      "A zen, full-screen plain-text space with only the essentials: nav, footer, and your words. Autosaves locally in your browser.",
    h1: "Distraction Free Writer",
    mode: "distraction-free",
  },
  "quick-notes": {
    title: "Quick Notes | Fast capture in your browser | Notepad.is",
    description:
      "Capture many short notes fast: a simple list on the side, instant autosave, everything stored locally. Built for speed.",
    h1: "Quick Notes",
    mode: "quick-notes",
  },
};

export const defaultSEO: SEOPageData = {
  title: "Notepad.is - Premium Online Notepad",
  description:
    "A fast, distraction-free, privacy-focused online notepad with auto-save. The best professional text editor on the web.",
  h1: "Premium Online Notepad",
};
