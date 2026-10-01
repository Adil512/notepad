"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PenLine,
  ArrowLeft,
  ArrowRight,
  Search,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Code2,
  FileText,
  FileSpreadsheet,
  Layers,
  Wrench,
  HelpCircle,
  BookOpen,
  ArrowUpRight,
  X,
  FileCode2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLocale } from "@/components/locale-context";
import { localizedPath } from "@/lib/i18n";

interface ToolItem {
  name: string;
  desc: string;
  href: string;
  category: string;
  icon: typeof FileText;
}

const POPULAR_TOOLS: ToolItem[] = [
  {
    name: "Online Notepad",
    desc: "Clean, distraction-free browser notepad with instant autosave.",
    href: "/",
    category: "Editor",
    icon: PenLine,
  },
  {
    name: "Smart Notepad",
    desc: "Free text and code editor with direct Google Drive integration.",
    href: "/smart-notepad/",
    category: "Editor",
    icon: FileCode2,
  },
  {
    name: "Markdown Notepad",
    desc: "Live markdown editor with real-time preview and export.",
    href: "/tools/editors/markdown-notepad/",
    category: "Editor",
    icon: Code2,
  },
  {
    name: "Code Notepad",
    desc: "Syntax-highlighted code editor for multi-language snippets.",
    href: "/tools/editors/code-notepad/",
    category: "Editor",
    icon: Code2,
  },
  {
    name: "Word Counter",
    desc: "Accurate real-time word, character, sentence, and paragraph counts.",
    href: "/tools/text/word-counter/",
    category: "Text Analysis",
    icon: FileText,
  },
  {
    name: "Character Counter",
    desc: "Count letters, symbols, words, and spaces instantly.",
    href: "/tools/text/character-counter/",
    category: "Text Analysis",
    icon: FileText,
  },
  {
    name: "Text Compare / Diff",
    desc: "Side-by-side visual difference comparison between two texts.",
    href: "/tools/text/text-compare-diff/",
    category: "Text Analysis",
    icon: Layers,
  },
  {
    name: "Case Converter",
    desc: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, and more.",
    href: "/tools/text/case-converter/",
    category: "Text Analysis",
    icon: FileText,
  },
  {
    name: "JSON Formatter",
    desc: "Validate, prettify, format, and minify JSON data.",
    href: "/tools/dev-tools/json-formatter/",
    category: "Developer",
    icon: Code2,
  },
  {
    name: "HTML Editor",
    desc: "Live HTML sandbox with real-time preview and syntax coloring.",
    href: "/tools/editors/html-editor/",
    category: "Developer",
    icon: Code2,
  },
  {
    name: "XML Formatter",
    desc: "Clean, format, and inspect XML code structures easily.",
    href: "/tools/dev-tools/xml-formatter/",
    category: "Developer",
    icon: Code2,
  },
  {
    name: "Base64 Codec",
    desc: "Fast Base64 string encoding and decoding utility.",
    href: "/tools/dev-tools/base64-codec/",
    category: "Developer",
    icon: Code2,
  },
  {
    name: "Excel Tools Hub",
    desc: "Convert CSV, JSON, Google Sheets, XML, and PDFs to Excel.",
    href: "/tools/excel/",
    category: "Converter",
    icon: FileSpreadsheet,
  },
  {
    name: "All Writing Tools",
    desc: "Browse our complete directory of 40+ free productivity tools.",
    href: "/tools/",
    category: "Directory",
    icon: Wrench,
  },
  {
    name: "Blog & Guides",
    desc: "Helpful writing advice, productivity workflows, and guides.",
    href: "/blog/",
    category: "Resource",
    icon: BookOpen,
  },
  {
    name: "About Notepad.is",
    desc: "Learn why we built Notepad.is and our privacy-first design.",
    href: "/about/",
    category: "Company",
    icon: HelpCircle,
  },
];

export function NotFoundContent() {
  const router = useRouter();
  const locale = useLocale();

  // Scratchpad state
  const [scratchText, setScratchText] = useState("");
  const [copied, setCopied] = useState(false);
  const [transferred, setTransferred] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return POPULAR_TOOLS.filter(
      (tool) =>
        tool.name.toLowerCase().includes(q) ||
        tool.desc.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleCopy = useCallback(() => {
    if (!scratchText) return;
    navigator.clipboard.writeText(scratchText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [scratchText]);

  const handleTransferToEditor = useCallback(() => {
    if (!scratchText.trim()) return;

    try {
      const STORAGE_KEY = "notepad.is-saved-content";
      const existing = localStorage.getItem(STORAGE_KEY) || "";

      // Escape HTML entities to prevent malformed tags
      const safeText = scratchText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br />");

      let updatedContent = "";
      if (existing.trim()) {
        updatedContent = `${existing}<p>${safeText}</p>`;
      } else {
        updatedContent = `<p>${safeText}</p>`;
      }

      localStorage.setItem(STORAGE_KEY, updatedContent);
      setTransferred(true);

      setTimeout(() => {
        router.push(localizedPath(locale, "/"));
      }, 400);
    } catch {
      router.push(localizedPath(locale, "/"));
    }
  }, [scratchText, locale, router]);

  const wordsCount = useMemo(() => {
    const trimmed = scratchText.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [scratchText]);

  const homeHref = localizedPath(locale, "/");
  const toolsHref = localizedPath(locale, "/tools");

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-10 sm:py-16">
      {/* 404 Visual Card */}
      <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm shadow-xl overflow-hidden mb-12">
        {/* Mock Editor Window Header */}
        <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-muted-foreground hidden sm:inline-block">
              untitled_note_404.txt • Unsaved draft
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Error 404 · Note Not Found
          </div>
        </div>

        {/* Hero Body */}
        <div className="p-6 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden
          />

          <div className="relative z-10">
            {/* 404 Big Display */}
            <div className="font-display font-black text-7xl sm:text-9xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/80 to-muted-foreground/30 select-none mb-4">
              404
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              Looks like this page is still a blank sheet.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              The note, tool, or document you’re searching for doesn&apos;t
              exist, was moved, or hasn&apos;t been drafted yet. Don&apos;t worry
              — your thoughts don&apos;t have to get lost.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href={homeHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <PenLine className="w-4 h-4" />
                Open Online Notepad
              </Link>

              <Link
                href={toolsHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-muted/60 transition-colors shadow-sm"
              >
                <Wrench className="w-4 h-4 text-primary" />
                Browse 40+ Tools
              </Link>

              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && window.history.length > 1) {
                    router.back();
                  } else {
                    router.push(homeHref);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-card/60 px-5 py-3.5 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Interactive Feature: Quick Scratchpad */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-12 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Quick Scratchpad
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Jot down a quick thought before you leave so you don&apos;t lose it.
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-muted-foreground shrink-0 self-start sm:self-auto">
            {wordsCount} {wordsCount === 1 ? "word" : "words"} ·{" "}
            {scratchText.length} chars
          </div>
        </div>

        <textarea
          value={scratchText}
          onChange={(e) => setScratchText(e.target.value)}
          placeholder="Got an idea or reminder right now? Start typing here..."
          rows={3}
          className="w-full rounded-xl border border-border bg-background p-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y transition-all"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!scratchText.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-muted/60 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Text
                </>
              )}
            </button>

            {scratchText && (
              <button
                type="button"
                onClick={() => setScratchText("")}
                className="inline-flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleTransferToEditor}
            disabled={!scratchText.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {transferred ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Transferring...
              </>
            ) : (
              <>
                Transfer to Main Notepad
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Tool Search Bar */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm mb-12">
        <div className="max-w-xl mx-auto text-center mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
            Looking for something specific?
          </h2>
          <p className="text-sm text-muted-foreground">
            Search our writing tools, formatting utilities, and converters:
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search word counter, JSON, diff, excel, code notepad..."
            className="w-full rounded-xl border border-border bg-background pl-11 pr-10 py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Search Results */}
        {searchQuery.trim().length > 0 && (
          <div className="mt-6 border-t border-border pt-6">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredTools.map((tool) => {
                  const Icon = tool.icon;
                  const href = localizedPath(locale, tool.href);
                  return (
                    <Link
                      key={tool.name}
                      href={href}
                      className="group flex flex-col justify-between rounded-xl border border-border/80 bg-background/80 p-4 hover:border-primary/40 hover:bg-primary/[0.03] transition-all shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="flex items-center gap-2 font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                            <Icon className="w-4 h-4 text-primary shrink-0" />
                            {tool.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                      <span className="mt-3 inline-block font-mono text-[10px] text-muted-foreground/80 uppercase tracking-wider">
                        {tool.category}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-sm text-muted-foreground py-4">
                No tools found matching &quot;{searchQuery}&quot;. You can explore
                our{" "}
                <Link
                  href={toolsHref}
                  className="text-primary hover:underline font-medium"
                >
                  full tools directory
                </Link>
                .
              </p>
            )}
          </div>
        )}
      </div>

      {/* Curated Popular Categories Grid */}
      <div className="space-y-8 mb-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Popular Destinations
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore our most popular writing and coding utilities:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Column 1: Editors */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-display font-semibold text-base text-foreground mb-3">
                <PenLine className="w-4 h-4 text-primary" />
                Writing & Editors
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href={localizedPath(locale, "/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Online Notepad</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/smart-notepad/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Smart Notepad</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/editors/markdown-notepad/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Markdown Notepad</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/editors/code-notepad/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Code Notepad</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={localizedPath(locale, "/tools/editors/")}
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-border"
            >
              All editors <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 2: Text Analysis */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-display font-semibold text-base text-foreground mb-3">
                <FileText className="w-4 h-4 text-primary" />
                Text Analysis
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/text/word-counter/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Word Counter</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/text/character-counter/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Character Counter</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/text/text-compare-diff/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Text Compare / Diff</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/text/case-converter/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Case Converter</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={localizedPath(locale, "/tools/text/")}
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-border"
            >
              All text tools <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 3: Developer & Formats */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-display font-semibold text-base text-foreground mb-3">
                <Code2 className="w-4 h-4 text-primary" />
                Developer Tools
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/dev-tools/json-formatter/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>JSON Formatter</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/editors/html-editor/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>HTML Editor</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/dev-tools/xml-formatter/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>XML Formatter</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/dev-tools/base64-codec/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Base64 Codec</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={localizedPath(locale, "/tools/dev-tools/")}
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-border"
            >
              All dev tools <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 4: Converters & Resources */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-display font-semibold text-base text-foreground mb-3">
                <FileSpreadsheet className="w-4 h-4 text-primary" />
                Hubs & Resources
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/excel/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Excel Tools Hub</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/tools/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Writing Tools (40+)</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/blog/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>Blog & Articles</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/about/")}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>About Notepad.is</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={localizedPath(locale, "/contact/")}
              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-border"
            >
              Need help? Contact us <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Help Banner */}
      <div className="rounded-2xl border border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
        <span>Still can&apos;t find what you need or believe something is missing? </span>
        <Link
          href={localizedPath(locale, "/contact/")}
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          Let us know via our Contact page
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
