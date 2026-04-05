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
} from "lucide-react";
import type { WritingToolId } from "@/lib/writing-tools-registry";

const ICON_MAP: Record<WritingToolId, LucideIcon> = {
  "focus-timer": Timer,
  "markdown-notepad": FileCode,
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
