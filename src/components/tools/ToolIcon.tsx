import type { LucideIcon } from "lucide-react";
import {
  Timer,
  FileCode,
  Target,
  Mic,
  Eraser,
  GitCompare,
  LayoutTemplate,
  Library,
  BookOpen,
  Printer,
  Share2,
  FolderInput,
  Download,
  Keyboard,
  Code2,
  Braces,
  FileCode2,
  Type,
  CaseSensitive,
  ListOrdered,
  Pilcrow,
  Clock,
  CaseUpper,
  RemoveFormatting,
  CopyMinus,
  ArrowDownAZ,
  FileDiff,
  Wand2,
  Minimize2,
  Paintbrush,
  Binary,
  Link2,
  Regex,
  CodeXml,
} from "lucide-react";
import type { WritingToolId } from "@/lib/writing-tools-registry";

const ICON_MAP: Record<WritingToolId, LucideIcon> = {
  "markdown-notepad": FileCode,
  "code-notepad": Code2,
  "json-editor": Braces,
  "html-editor": FileCode2,
  "word-counter": Type,
  "character-counter": CaseSensitive,
  "sentence-counter": ListOrdered,
  "paragraph-counter": Pilcrow,
  "reading-time-calculator": Clock,
  "case-converter": CaseUpper,
  "text-cleaner": RemoveFormatting,
  "duplicate-remover": CopyMinus,
  "text-sorter": ArrowDownAZ,
  "text-compare-diff": FileDiff,
  "json-formatter": Wand2,
  "html-minifier": Minimize2,
  "css-beautifier": Paintbrush,
  "base64-codec": Binary,
  "url-codec": Link2,
  "regex-tester": Regex,
  "xml-formatter": CodeXml,
  "focus-timer": Timer,
  "goal-tracker": Target,
  "speech-dictation": Mic,
  "paste-clean": Eraser,
  "compare-drafts": GitCompare,
  templates: LayoutTemplate,
  "snippet-shelf": Library,
  "reading-mode": BookOpen,
  "print-note": Printer,
  "share-note": Share2,
  "import-export": FolderInput,
  "install-app": Download,
  "keyboard-shortcuts": Keyboard,
};

export function ToolIcon({
  id,
  className,
}: {
  id: WritingToolId;
  className?: string;
}) {
  const I = ICON_MAP[id];
  if (!I) return null;
  return <I className={className} aria-hidden />;
}
