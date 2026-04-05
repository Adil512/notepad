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
import { CodeNotepadTool } from "@/components/tools/tool-code-notepad";
import { JsonEditorTool } from "@/components/tools/tool-json-editor";
import { HtmlEditorTool } from "@/components/tools/tool-html-editor";
import {
  CaseConverterTool,
  CharacterCounterTool,
  DuplicateRemoverTool,
  ParagraphCounterTool,
  ReadingTimeCalculatorTool,
  SentenceCounterTool,
  TextCleanerTool,
  TextCompareDiffTool,
  TextSorterTool,
  WordCounterTool,
} from "@/components/tools/tool-text-utilities";
import {
  Base64CodecTool,
  CssBeautifierTool,
  HtmlMinifierTool,
  JsonFormatterTool,
  RegexTesterTool,
  UrlCodecTool,
  XmlFormatterTool,
} from "@/components/tools/tool-dev-utilities";

export function WritingToolView({ id }: { id: WritingToolId }) {
  switch (id) {
    case "json-formatter":
      return <JsonFormatterTool />;
    case "html-minifier":
      return <HtmlMinifierTool />;
    case "css-beautifier":
      return <CssBeautifierTool />;
    case "base64-codec":
      return <Base64CodecTool />;
    case "url-codec":
      return <UrlCodecTool />;
    case "regex-tester":
      return <RegexTesterTool />;
    case "xml-formatter":
      return <XmlFormatterTool />;
    case "word-counter":
      return <WordCounterTool />;
    case "character-counter":
      return <CharacterCounterTool />;
    case "sentence-counter":
      return <SentenceCounterTool />;
    case "paragraph-counter":
      return <ParagraphCounterTool />;
    case "reading-time-calculator":
      return <ReadingTimeCalculatorTool />;
    case "case-converter":
      return <CaseConverterTool />;
    case "text-cleaner":
      return <TextCleanerTool />;
    case "duplicate-remover":
      return <DuplicateRemoverTool />;
    case "text-sorter":
      return <TextSorterTool />;
    case "text-compare-diff":
      return <TextCompareDiffTool />;
    case "focus-timer":
      return <FocusTimerWriting />;
    case "markdown-notepad":
      return <MarkdownNotepadTool />;
    case "code-notepad":
      return <CodeNotepadTool />;
    case "json-editor":
      return <JsonEditorTool />;
    case "html-editor":
      return <HtmlEditorTool />;
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
