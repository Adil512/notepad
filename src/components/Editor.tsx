"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import { FontFamily } from "@tiptap/extension-font-family";

import ImageExtension from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, Undo, Redo, Printer,
  Copy, ClipboardPaste, AlignLeft, AlignCenter, AlignRight,
  Code, Link2, Upload, Download, Trash2, ZoomIn, ZoomOut,
  Plus, ChevronDown, Minus, Image as ImageIcon, Table as TableIcon, Calendar,
  Search, Maximize, Minimize, Highlighter, FilePlus, Share, AlertCircle,
  FileCode,
  Keyboard,
  Mic,
  MicOff,
} from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import NextLink from "next/link";
import { useLocale } from "@/components/locale-context";
import { getPathWithoutLocale, localizedPath } from "@/lib/i18n";
import { findNextInEditor, replaceSelectionIfMatches } from "@/lib/editor-search";

const STORAGE_KEY = "notepad.is-saved-content";

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: Event) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
};

export function Editor({ user }: { user?: User | null }) {
  const pathname = usePathname();
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving">("saved");
  const [zoomLevel, setZoomLevel] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // New states for Advanced Features
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [dismissedNotice, setDismissedNotice] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const isHomeEditor = getPathWithoutLocale(pathname || "/") === "/";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editorBlockRef = useRef<HTMLDivElement>(null);
  const [editorBlockInView, setEditorBlockInView] = useState(true);

  useEffect(() => {
    const el = editorBlockRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEditorBlockInView(entry.isIntersecting);
      },
      { threshold: 0, root: null, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showFloatingChrome = isFullscreen || editorBlockInView;

  const updateCursorInfo = (ed: any) => {
    const { selection } = ed.state;
    // Estimate Line based on block element index, and Col based on text offset in block
    const line = selection.$head.index(0) + 1;
    const col = selection.$head.parentOffset + 1;
    setCursorPos({ line, col });
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing, press '/' for commands...",
      }),
      CharacterCount,
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      FontFamily,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ImageExtension,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setSaveStatus("saving");
      localStorage.setItem(STORAGE_KEY, editor.getHTML());
      updateCursorInfo(editor);
      setTimeout(() => setSaveStatus("saved"), 500);
    },
    onSelectionUpdate: ({ editor }) => {
      updateCursorInfo(editor);
    },
    editorProps: {
      attributes: {
        // Line-height is adjusted to roughly match the lined background pattern (1.75rem)
        class: "prose prose-sm sm:prose-base dark:prose-invert prose-p:leading-[1.75rem] prose-p:my-0 prose-pre:bg-muted prose-pre:text-muted-foreground focus:outline-none max-w-none w-full min-h-[70vh] pb-32",
      },
    },
  });

  useEffect(() => {
    if (editor && isMounted) {
      const savedContent = localStorage.getItem(STORAGE_KEY);
      if (savedContent) {
        editor.commands.setContent(savedContent);
      }
    }
  }, [editor, isMounted]);

  useEffect(() => {
    if (!editor || !isMounted || !isHomeEditor) return;

    const W = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const Ctor = W.SpeechRecognition || W.webkitSpeechRecognition;
    if (!Ctor) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new Ctor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = locale || "en";
    recognitionRef.current = recognition;
    setSpeechSupported(true);

    recognition.onresult = (event: Event) => {
      const e = event as unknown as {
        resultIndex: number;
        results: ArrayLike<{
          isFinal: boolean;
          0: { transcript: string };
        }>;
      };
      let finalText = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const result = e.results[i];
        const transcript = result[0]?.transcript ?? "";
        if (result.isFinal) finalText += transcript;
      }
      if (finalText.trim()) {
        editor.chain().focus().insertContent(finalText.trim() + " ").run();
      }
    };

    recognition.onerror = (event: Event) => {
      const e = event as unknown as { error?: string };
      const code = e.error || "unknown";
      if (code === "not-allowed") {
        setSpeechError("Microphone permission blocked. Please allow mic access.");
      } else if (code === "no-speech") {
        setSpeechError("No speech detected. Try speaking closer to the microphone.");
      } else {
        setSpeechError("Speech recognition error. Please try again.");
      }
      setIsDictating(false);
    };

    recognition.onend = () => {
      setIsDictating(false);
    };

    return () => {
      try {
        recognition.stop();
      } catch {
        // noop
      }
      recognitionRef.current = null;
    };
  }, [editor, isMounted, isHomeEditor, locale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        if (editor) {
          localStorage.setItem(STORAGE_KEY, editor.getHTML());
          setSaveStatus("saved");
        }
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        setShowKeyboardHelp((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [editor]);

  if (!editor || !isMounted) {
    return (
      <div className="w-full h-screen max-w-5xl mx-auto p-4 flex items-center justify-center text-muted-foreground">
        Loading editor...
      </div>
    );
  }

  // Adjusted Toolbar UI for Prominent Icon Colors per Request
  const ToolbarItem = ({ onClick, isActive, disabled, children, title }: any) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-1.5 focus:outline-none rounded transition-colors flex items-center justify-center
        ${isActive ? "text-primary bg-primary/10 font-bold" : "text-gray-800 dark:text-gray-200 font-medium hover:bg-muted hover:text-foreground"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );

  const Divider = () => <div className="w-[1px] h-5 bg-border mx-1" />;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const name = file.name.toLowerCase();
      if (name.endsWith(".html") || name.endsWith(".htm")) {
        const stripped = text
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<style[\s\S]*?<\/style>/gi, "");
        editor.commands.setContent(stripped || "<p></p>");
      } else {
        editor.commands.setContent(`<p>${text.replace(/\n/g, "<br>")}</p>`);
      }
    };
    reader.readAsText(file);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(editor.getText());
    alert("Content copied to clipboard!");
  };

  const handleDownloadTxt = () => {
    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Notepad_Document.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Export</title></head><body>${editor.getHTML()}</body></html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Notepad_Document.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) editor.chain().focus().insertContent(text).run();
    } catch {
      alert("Could not read clipboard. Allow paste permission or use Ctrl+V in the editor.");
    }
  };

  const handleShare = async () => {
    if (!user) {
      alert("Please sign in to share notes publicly.");
      return;
    }
    const htmlData = editor?.getHTML();
    if (!htmlData) return;
    
    setIsSharing(true);
    const supabase = createClient();
    if (!supabase) {
      alert("Sign-in is not available (app configuration).");
      setIsSharing(false);
      return;
    }
    const { data, error } = await supabase.from('notes').insert([
      { user_id: user.id, content: htmlData, is_public: true }
    ]).select().single();
    
    if (error) {
      console.error(error);
      alert("Error sharing note. Make sure you have created the Database table properly per the implementation guide!");
    } else if (data) {
      const url = `${window.location.origin}/share/${data.id}`;
      navigator.clipboard.writeText(url);
      alert("Sharable public link successfully generated and copied to clipboard!\n" + url);
    }
    setIsSharing(false);
  };

  const clearAll = () => {
    if (confirm("Are you sure you want to delete everything?")) {
      editor.commands.setContent("");
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const toggleDictation = () => {
    if (!speechSupported || !recognitionRef.current) return;
    setSpeechError(null);
    if (isDictating) {
      recognitionRef.current.stop();
      setIsDictating(false);
      return;
    }
    try {
      recognitionRef.current.lang = locale || "en";
      recognitionRef.current.start();
      setIsDictating(true);
    } catch {
      setSpeechError("Could not start speech recognition in this browser.");
      setIsDictating(false);
    }
  };

  const handleFind = () => {
    if (!findText) return;
    const ok = findNextInEditor(editor, findText);
    if (!ok) alert("No matches found.");
  };

  const handleReplace = () => {
    if (!findText) return;
    replaceSelectionIfMatches(editor, findText, replaceText);
    findNextInEditor(editor, findText);
  };

  // Function to deduce current heading level
  const getCurrentHeading = () => {
    if (editor.isActive("heading", { level: 1 })) return "1";
    if (editor.isActive("heading", { level: 2 })) return "2";
    if (editor.isActive("heading", { level: 3 })) return "3";
    if (editor.isActive("heading", { level: 4 })) return "4";
    if (editor.isActive("heading", { level: 5 })) return "5";
    if (editor.isActive("heading", { level: 6 })) return "6";
    return "p";
  };

  const showNotice = !user && !dismissedNotice && (editor.storage.characterCount.words() > 30);

  return (
    <div
      ref={editorBlockRef}
      className={`flex flex-col bg-background ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : 'w-full max-w-[85rem] mx-auto px-2 sm:px-4 min-h-screen'}`}
    >
      {/* Top Professional Toolbar resembling modern docs */}
      <div className={`sticky ${isFullscreen ? 'top-0' : 'top-14 mt-4'} z-40 w-full bg-background border-b shadow-sm py-2 px-3 flex items-center flex-wrap gap-x-1 gap-y-2 rounded-t-xl text-sm border-x border-t transition-all`}>
        <ToolbarItem 
          onClick={() => {
            if (window.confirm("Are you sure you want to start a new file? Unsaved changes will be lost.")) {
              editor.commands.setContent("");
              localStorage.removeItem(STORAGE_KEY);
            }
          }} 
          title="New File"
        >
          <FilePlus className="w-4 h-4" />
        </ToolbarItem>
        <ToolbarItem onClick={handleDownloadTxt} title="Download as .txt"><Download className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={handlePrint} title="Print"><Printer className="w-4 h-4" /></ToolbarItem>
        <Divider />
        <ToolbarItem onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo"><Undo className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo"><Redo className="w-4 h-4" /></ToolbarItem>
        <Divider />
        <ToolbarItem onClick={handleShare} title="Share Note via Link" isActive={isSharing}>
           <Share className={`w-4 h-4 ${isSharing ? "animate-pulse text-primary" : ""}`} />
        </ToolbarItem>
        <div className="flex-1 min-w-[20px]" />

        {/* Fullscreen & Find */}
        <ToolbarItem
          onClick={() => setShowKeyboardHelp(true)}
          title="Keyboard shortcuts (⌘/)"
        >
          <Keyboard className="w-4 h-4" />
        </ToolbarItem>
        <ToolbarItem onClick={() => setIsFullscreen(!isFullscreen)} title="Fullscreen">
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </ToolbarItem>
        
        <div className="relative">
          <ToolbarItem onClick={() => setShowSearch(!showSearch)} isActive={showSearch} title="Find & Replace"><Search className="w-4 h-4" /></ToolbarItem>
          {showSearch && (
            <div className="absolute top-full left-0 mt-2 bg-popover text-popover-foreground border border-border shadow-lg rounded-md p-3 flex flex-col gap-2 z-50 min-w-[200px] sm:min-w-[250px]">
              <input type="text" placeholder="Find..." value={findText} onChange={e => setFindText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleFind()} className="w-full text-sm px-2 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-primary bg-background text-foreground" />
              <input type="text" placeholder="Replace with..." value={replaceText} onChange={e => setReplaceText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleReplace()} className="w-full text-sm px-2 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-primary bg-background text-foreground" />
              <div className="flex items-center gap-2 mt-1">
                <button onClick={handleFind} className="flex-1 text-xs bg-primary/10 text-primary hover:bg-primary/20 py-1.5 rounded transition-colors font-medium">Find Next</button>
                <button onClick={handleReplace} className="flex-1 text-xs bg-primary hover:bg-primary/90 text-primary-foreground py-1.5 rounded transition-colors font-medium">Replace</button>
              </div>
            </div>
          )}
        </div>
        <Divider />

        {/* Zoom Controls */}
        <div className="flex items-center bg-muted/30 rounded-md px-1 h-8">
          <ToolbarItem onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))} title="Zoom Out"><ZoomOut className="w-4 h-4" /></ToolbarItem>
          <span className="text-xs font-medium w-10 text-center font-semibold text-gray-800 dark:text-gray-200">{zoomLevel}%</span>
          <ToolbarItem onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))} title="Zoom In"><ZoomIn className="w-4 h-4" /></ToolbarItem>
        </div>
        <Divider />

        {/* Insert Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-1 px-2 py-1.5 font-medium hover:bg-muted text-gray-800 dark:text-gray-200 hover:text-foreground cursor-pointer rounded transition-colors h-8">
            <Plus className="w-4 h-4" /> Insert <ChevronDown className="w-3 h-3" />
          </div>
          <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-popover text-popover-foreground border border-border shadow-md rounded-md py-1 min-w-[180px] z-50">
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="flex items-center w-full px-3 py-2 text-sm hover:bg-accent/80 transition-colors"><Minus className="w-4 h-4 mr-2"/> Horizontal Rule</button>
            <button onClick={() => { const url = window.prompt("Image URL"); if (url) editor.chain().focus().setImage({ src: url }).run(); }} className="flex items-center w-full px-3 py-2 text-sm hover:bg-accent/80 transition-colors"><ImageIcon className="w-4 h-4 mr-2"/> Image</button>
            <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="flex items-center w-full px-3 py-2 text-sm hover:bg-accent/80 transition-colors"><TableIcon className="w-4 h-4 mr-2"/> Table</button>
            <button onClick={() => editor.commands.insertContent(new Date().toLocaleDateString())} className="flex items-center w-full px-3 py-2 text-sm hover:bg-accent/80 transition-colors"><Calendar className="w-4 h-4 mr-2"/> Date</button>
            <button onClick={handleDownloadHtml} className="flex items-center w-full px-3 py-2 text-sm hover:bg-accent/80 transition-colors"><FileCode className="w-4 h-4 mr-2"/> Export HTML</button>
          </div>
        </div>
        <Divider />

        {/* Headings Dropdown */}
        <select 
          value={getCurrentHeading()}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "p") editor.chain().focus().setParagraph().run();
            else editor.chain().focus().setHeading({ level: parseInt(val) as any }).run();
          }}
          className="bg-transparent border border-transparent hover:border-border rounded px-2 h-8 text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
        >
          <option value="p">Normal text</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>
        <Divider />

        {/* Fonts Dropdown */}
        <select 
          onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
          className="bg-transparent border border-transparent hover:border-border rounded px-2 h-8 text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
        >
          <option value="Inter">Inter (System)</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Comic Sans MS">Comic Sans</option>
        </select>
        <Divider />

        {/* Highlight Feature */}
        <div className="relative group flex items-center">
          <ToolbarItem onClick={() => editor.chain().focus().toggleHighlight({ color: '#fbbf24' }).run()} isActive={editor.isActive("highlight")} title="Highlight text">
            <Highlighter className={`w-4 h-4 ${editor.isActive("highlight") ? "text-primary" : "text-emerald-600 dark:text-emerald-400"}`} />
          </ToolbarItem>
          {/* Hover Menu for Colors */}
          <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-popover border border-border shadow-md rounded-md p-2 z-50">
             <div className="flex gap-2">
               <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#fbbf24' }).run()} className="w-5 h-5 rounded-full bg-[#fbbf24] border border-border hover:scale-110 transition-transform"></button>
               <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#f472b6' }).run()} className="w-5 h-5 rounded-full bg-[#f472b6] border border-border hover:scale-110 transition-transform"></button>
               <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#34d399' }).run()} className="w-5 h-5 rounded-full bg-[#34d399] border border-border hover:scale-110 transition-transform"></button>
               <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#60a5fa' }).run()} className="w-5 h-5 rounded-full bg-[#60a5fa] border border-border hover:scale-110 transition-transform"></button>
               <button onClick={() => editor.chain().focus().unsetHighlight().run()} className="w-5 h-5 rounded-full bg-transparent border border-border hover:bg-muted text-[10px] font-bold text-foreground flex items-center justify-center transition-colors">X</button>
             </div>
          </div>
        </div>
        <Divider />

        <ToolbarItem onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold"><Bold className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic"><Italic className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline"><UnderlineIcon className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive("code")} title="Code"><Code className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem 
          onClick={() => {
            const url = window.prompt("URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }} 
          isActive={editor.isActive("link")} title="Link"
        ><Link2 className="w-4 h-4" /></ToolbarItem>
        <Divider />

        {/* Alignment */}
        <ToolbarItem onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left"><AlignLeft className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center"><AlignCenter className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right"><AlignRight className="w-4 h-4" /></ToolbarItem>
        <Divider />
        
        <ToolbarItem onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")} title="Bullet List"><List className="w-4 h-4" /></ToolbarItem>
        <ToolbarItem onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")} title="Numbered List"><ListOrdered className="w-4 h-4" /></ToolbarItem>
      </div>
      {isHomeEditor ? (
        <div className="mt-2 flex items-center justify-end gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-2 py-1 shadow-sm">
            <span className="hidden sm:inline px-1 text-xs font-medium text-muted-foreground">
              Voice typing
            </span>
            <button
              onClick={toggleDictation}
              disabled={!speechSupported}
              title={
                speechSupported
                  ? isDictating
                    ? "Stop voice typing"
                    : "Start voice typing"
                  : "Voice typing is not supported in this browser"
              }
              className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-colors ${
                !speechSupported
                  ? "cursor-not-allowed bg-muted text-muted-foreground opacity-70"
                  : isDictating
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {isDictating ? (
                <MicOff className="h-3.5 w-3.5 animate-pulse" />
              ) : (
                <Mic className="h-3.5 w-3.5" />
              )}
              {isDictating ? "Listening" : "Speak"}
            </button>
          </div>
        </div>
      ) : null}
      {isHomeEditor && (isDictating || speechError) ? (
        <div className="mt-2 rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
          {isDictating ? "Listening... Speak to type in the editor." : speechError}
        </div>
      ) : null}

      {/* Editor Container with Ruled Notebook Pattern */}
      <div className={`notebook-paper border border-t-0 bg-[#fafafa] dark:bg-[#121212] dark:text-gray-100 flex-1 relative ${isFullscreen ? 'mb-0 rounded-none w-full min-h-screen' : 'mb-20 rounded-b-xl shadow-md overflow-hidden'}`}>
        <style dangerouslySetInnerHTML={{__html: `
          .notebook-paper {
            background-image: linear-gradient(transparent 95%, #e0e0e0 5%);
            background-size: 100% 1.75rem; /* Match the leading-[1.75rem] in Prose */
            background-attachment: local;
          }
          .dark .notebook-paper {
            background-image: linear-gradient(transparent 95%, #2a2a2a 5%);
          }
          /* The left vertical margin red line for the notebook effect */
          .notebook-margin {
            position: absolute;
            left: 5rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: rgba(239, 68, 68, 0.2);
            z-index: 0;
          }
          .dark .notebook-margin {
            background-color: rgba(239, 68, 68, 0.15);
          }
          .editor-inner-content {
            position: relative;
            z-index: 10;
            margin-left: 2.5rem; /* Push text past the red line */
            transform-origin: top left;
          }
        `}} />
        
        {/* Decorative margin line */}
        <div className="notebook-margin hidden sm:block"></div>

        {/* Editor Instance with Zoom Control */}
        <div 
          className="editor-inner-content px-4 py-8 sm:px-14 sm:py-8"
          style={{ transform: `scale(${zoomLevel / 100})`, width: `${(100 / (zoomLevel / 100))}%` }}
        >
          <EditorContent editor={editor} className="w-full text-lg cursor-text min-h-[700px] outline-none" onClick={() => editor.commands.focus()} />
        </div>
      </div>

      {/* 30-Word Anonymous Notice Banner */}
      {showFloatingChrome && showNotice && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] bg-background border border-border shadow-2xl rounded-full px-6 py-3 flex items-center justify-between gap-4 w-[90%] max-w-md animate-in slide-in-from-bottom-5">
           <div className="flex items-center gap-3">
             <div className="bg-primary/20 p-2 rounded-full hidden sm:block">
               <AlertCircle className="w-5 h-5 text-primary" />
             </div>
             <div>
               <p className="text-sm font-semibold text-foreground leading-tight">Backup your notes</p>
               <p className="text-xs text-muted-foreground mt-0.5">Please sign in to securely save and access your content over the next month!</p>
             </div>
           </div>
           <div className="flex items-center gap-2 shrink-0">
             <NextLink href={localizedPath(locale, "/signup")} className="text-xs font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm">Sign up</NextLink>
             <button onClick={() => setDismissedNotice(true)} className="text-muted-foreground hover:bg-accent rounded-full p-1.5 transition-colors" aria-label="Dismiss">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
             </button>
           </div>
        </div>
      )}

      {/* Real-time stats + bottom actions: only while editor block is on screen (hide over FAQ/footer content) */}
      {showFloatingChrome && (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="bg-background/90 backdrop-blur-md text-foreground border border-border shadow-md px-5 py-2 rounded-full text-xs font-mono font-medium flex items-center gap-6 pointer-events-auto">
          <span>Line {cursorPos.line}, Column {cursorPos.col}</span>
          <span>Chars {editor.storage.characterCount.characters()}, Words {editor.storage.characterCount.words()}</span>
        </div>
      </div>
      )}

      {/* Bottom Fixed Action Bar (Hidden in Fullscreen) */}
      {showFloatingChrome && !isFullscreen && (
        <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none p-4">
          <div className="container max-w-[85rem] mx-auto flex items-end justify-between px-4 pointer-events-auto">
            {/* Left: Upload Button */}
            <div>
              <input type="file" accept=".txt,.html,.md" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
              <button 
                onClick={handleUploadClick}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background hover:bg-accent border border-border shadow-md px-4 py-2.5 rounded-full transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Upload Doc</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button onClick={handleCopyAll} title="Copy All" className="p-3 rounded-full text-muted-foreground hover:text-foreground bg-background border border-border shadow-md hover:bg-accent transition-colors">
                <Copy className="w-4 h-4" />
              </button>
              <button onClick={handlePasteFromClipboard} title="Paste from clipboard" className="p-3 rounded-full text-muted-foreground hover:text-foreground bg-background border border-border shadow-md hover:bg-accent transition-colors">
                <ClipboardPaste className="w-4 h-4" />
              </button>
              <button onClick={handleDownloadTxt} title="Download .txt" className="p-3 rounded-full text-muted-foreground hover:text-foreground bg-background border border-border shadow-md hover:bg-accent transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button onClick={clearAll} title="Clear All" className="p-3 rounded-full text-destructive hover:text-white bg-background border border-border shadow-md hover:bg-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {showKeyboardHelp && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kbd-title"
          onClick={() => setShowKeyboardHelp(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-md overflow-auto rounded-2xl border border-border bg-background p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="kbd-title"
              className="font-display text-lg font-semibold text-foreground"
            >
              Keyboard shortcuts
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Press ⌘/ (Mac) or Ctrl+/ (Windows) to toggle this panel.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  ⌘/Ctrl + S
                </kbd>{" "}
                Save to browser
              </li>
              <li>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  ⌘/Ctrl + B
                </kbd>{" "}
                Bold
              </li>
              <li>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  ⌘/Ctrl + I
                </kbd>{" "}
                Italic
              </li>
              <li>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  ⌘/Ctrl + Z
                </kbd>{" "}
                Undo
              </li>
              <li>
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  ⌘/Ctrl + Shift + Z
                </kbd>{" "}
                Redo
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <NextLink
                href={localizedPath(locale, "/tools/keyboard-shortcuts")}
                className="text-sm font-semibold text-primary hover:underline"
                onClick={() => setShowKeyboardHelp(false)}
              >
                Full reference →
              </NextLink>
              <button
                type="button"
                onClick={() => setShowKeyboardHelp(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



