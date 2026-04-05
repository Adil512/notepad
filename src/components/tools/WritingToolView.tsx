"use client";

import type { WritingToolId } from "@/lib/writing-tools-registry";
import { FocusTimerWriting } from "@/components/tools/tool-focus-timer";
import { MarkdownNotepadTool } from "@/components/tools/tool-markdown";
import { GoalTrackerTool } from "@/components/tools/tool-goal-tracker";
import { SpeechDictationTool } from "@/components/tools/tool-speech";
import { PasteCleanTool } from "@/components/tools/tool-paste-clean";
import { CompareDraftsTool } from "@/components/tools/tool-compare";
import { TemplatesTool } from "@/components/tools/tool-templates";
import { SnippetShelfTool } from "@/components/tools/tool-snippets";
import { ReadingModeTool } from "@/components/tools/tool-reading-mode";
import { PrintNoteTool } from "@/components/tools/tool-print-note";
import { ShareNoteTool } from "@/components/tools/tool-share-note";
import { ImportExportHubTool } from "@/components/tools/tool-import-export";
import { InstallAppTool } from "@/components/tools/tool-install-app";
import { KeyboardShortcutsRefTool } from "@/components/tools/tool-keyboard-ref";

export function WritingToolView({ id }: { id: WritingToolId }) {
  switch (id) {
    case "focus-timer":
      return <FocusTimerWriting />;
    case "markdown-notepad":
      return <MarkdownNotepadTool />;
    case "goal-tracker":
      return <GoalTrackerTool />;
    case "speech-dictation":
      return <SpeechDictationTool />;
    case "paste-clean":
      return <PasteCleanTool />;
    case "compare-drafts":
      return <CompareDraftsTool />;
    case "templates":
      return <TemplatesTool />;
    case "snippet-shelf":
      return <SnippetShelfTool />;
    case "reading-mode":
      return <ReadingModeTool />;
    case "print-note":
      return <PrintNoteTool />;
    case "share-note":
      return <ShareNoteTool />;
    case "import-export":
      return <ImportExportHubTool />;
    case "install-app":
      return <InstallAppTool />;
    case "keyboard-shortcuts":
      return <KeyboardShortcutsRefTool />;
    default:
      return null;
  }
}
