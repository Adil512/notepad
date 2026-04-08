/** Shown first on /tools and in the footer "editor" row; excluded from category grids to avoid duplicates. */
export const PRIMARY_EDITOR_TOOL_IDS = [
  "markdown-notepad",
  "code-notepad",
  "json-editor",
  "html-editor",
] as const;

export type PrimaryEditorToolId = (typeof PRIMARY_EDITOR_TOOL_IDS)[number];

/** Text counters, converters, and diff: own hub section + `analysis` category. */
export const TEXT_ANALYSIS_TOOL_IDS = [
  "word-counter",
  "character-counter",
  "sentence-counter",
  "paragraph-counter",
  "reading-time-calculator",
  "case-converter",
  "text-cleaner",
  "duplicate-remover",
  "text-sorter",
  "text-compare-diff",
] as const;

export type TextAnalysisToolId = (typeof TEXT_ANALYSIS_TOOL_IDS)[number];

/** Formatters, encoders, regex: hub strip + `devtools` category. */
export const DEVTOOLS_TOOL_IDS = [
  "json-formatter",
  "html-minifier",
  "css-beautifier",
  "base64-codec",
  "url-codec",
  "regex-tester",
  "xml-formatter",
] as const;

export type DevtoolsToolId = (typeof DEVTOOLS_TOOL_IDS)[number];

export const WRITING_TOOL_IDS = [
  ...PRIMARY_EDITOR_TOOL_IDS,
  ...TEXT_ANALYSIS_TOOL_IDS,
  ...DEVTOOLS_TOOL_IDS,
  "focus-timer",
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
  "text-to-excel",
  "csv-to-excel",
  "json-to-excel",
  "xml-to-excel",
  "html-to-excel",
  "pdf-to-excel",
  "excel-to-csv",
  "excel-to-json",
  "excel-to-xml",
  "excel-to-pdf",
  "google-sheet-to-excel",
  "numbers-to-excel",
  "ods-to-excel",
  "excel-to-ods",
  "excel-to-google-sheet",
  "pdf-to-word",
  "word-to-pdf",
  "text-to-pdf",
  "pdf-to-text",
  "word-to-txt",
  "txt-to-word",
  "html-to-pdf",
  "pdf-to-html",
  "markdown-to-pdf",
  "pdf-to-markdown",
  "ppt-to-pdf",
  "pdf-to-ppt",
  "rtf-to-pdf",
  "pdf-to-rtf",
  "txt-to-markdown",
  "markdown-to-txt",
  "html-to-word",
  "word-to-html",
  "json-to-csv",
  "csv-to-json",
  "json-to-xml",
  "xml-to-json",
  "yaml-to-json",
  "json-to-yaml",
  "sql-to-csv",
  "csv-to-sql",
  "text-to-json",
  "json-to-text",
  "text-to-xml",
  "xml-to-text",
  "text-uppercase-lowercase",
  "text-to-camel-case",
  "text-to-snake-case",
  "text-to-kebab-case",
  "split-text-to-columns",
  "merge-text-lines",
  "convert-line-endings",
  "minify-json",
  "minify-xml",
] as const;

export type WritingToolId = (typeof WRITING_TOOL_IDS)[number];

export type WritingToolCategory =
  | "focus"
  | "analysis"
  | "text"
  | "devtools"
  | "converters"
  | "capture"
  | "export"
  | "workspace";

export const WRITING_TOOL_CATEGORY_ORDER: WritingToolCategory[] = [
  "analysis",
  "converters",
  "focus",
  "text",
  "devtools",
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
  analysis: {
    title: "Text analysis & counters",
    description:
      "Count words and characters, estimate reading time, convert case, clean and sort lines, and compare drafts, all locally in your browser.",
  },
  text: {
    title: "Text & Structure",
    description:
      "Shape, clean, compare, and read your words with dedicated layouts.",
  },
  devtools: {
    title: "Developer utilities",
    description:
      "Format JSON and XML, minify HTML, beautify CSS, encode Base64 and URLs, and test regular expressions, all client-side.",
  },
  converters: {
    title: "Converters",
    description:
      "Convert between document, spreadsheet, and structured data formats from a single English-only toolbox.",
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
  analysis:
    "from-rose-600 to-orange-600 dark:from-rose-500 dark:to-orange-500",
  text: "from-sky-600 to-cyan-600 dark:from-sky-500 dark:to-cyan-400",
  devtools:
    "from-indigo-600 to-violet-600 dark:from-indigo-500 dark:to-violet-500",
  converters:
    "from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-400",
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
  englishOnly?: boolean;
};

export const writingToolsMeta: Record<WritingToolId, WritingToolMeta> = {
  "markdown-notepad": {
    id: "markdown-notepad",
    title:
      "Markdown Editor Online – Free MD Editor, Preview & Export Notes",
    description:
      "Write and edit Markdown online with a fast, free editor. Live preview, syntax highlighting, and easy export options. No login required. Start writing instantly.",
    h1: "Markdown Editor",
    tagline: "Highlighting, GFM preview, split view, export",
    category: "text",
  },
  "code-notepad": {
    id: "code-notepad",
    title:
      "Code Notepad Online – Free Code Editor with Syntax Highlighting",
    description:
      "Write and edit code online with syntax highlighting and auto-formatting. Supports multiple languages, fast performance, and no signup required. Perfect for quick coding and testing.",
    h1: "Code notepad",
    tagline: "Multi-language syntax highlighting",
    category: "text",
  },
  "json-editor": {
    id: "json-editor",
    title: "JSON Editor Online – Format, Validate & Beautify JSON Free",
    description:
      "Edit, format, and validate JSON instantly with this free online JSON editor. Beautify or minify JSON, fix errors, and copy results easily. Fast, secure, and no login needed.",
    h1: "JSON editor",
    tagline: "Format, minify, live validation",
    category: "text",
  },
  "html-editor": {
    id: "html-editor",
    title:
      "HTML Editor Online – Free Live HTML, CSS & JS Code Editor",
    description:
      "Write and preview HTML, CSS, and JavaScript in real-time with this free online editor. Fast, simple, and no signup required. Perfect for developers and beginners.",
    h1: "HTML editor",
    tagline: "Source + sandboxed preview",
    category: "text",
  },
  "word-counter": {
    id: "word-counter",
    title: "Word Counter Online – Free Word & Character Count Tool",
    description:
      "Count words, characters, sentences, and paragraphs instantly with this free online word counter. Fast, accurate, and no login required.",
    h1: "Word counter",
    tagline: "Words, characters, sentences, paragraphs",
    category: "analysis",
  },
  "character-counter": {
    id: "character-counter",
    title: "Character Counter Online – Free Text & Letter Count Tool",
    description:
      "Count characters, letters, and spaces instantly with this free online character counter. Perfect for SEO, social media, and writing tasks.",
    h1: "Character counter",
    tagline: "With / without spaces, words, lines",
    category: "analysis",
  },
  "sentence-counter": {
    id: "sentence-counter",
    title: "Sentence Counter Online – Free Text Sentence Count Tool",
    description:
      "Count sentences in your text instantly with this free online tool. Simple, fast, and accurate for writers, students, and content creators.",
    h1: "Sentence counter",
    tagline: "Instant sentence totals",
    category: "analysis",
  },
  "paragraph-counter": {
    id: "paragraph-counter",
    title: "Paragraph Counter Online – Free Paragraph Count Tool",
    description:
      "Easily count paragraphs in your text with this free online paragraph counter. Fast, accurate, and useful for essays, blogs, and documents.",
    h1: "Paragraph counter",
    tagline: "Split on blank lines",
    category: "analysis",
  },
  "reading-time-calculator": {
    id: "reading-time-calculator",
    title: "Reading Time Calculator – Estimate Reading Time Online Free",
    description:
      "Calculate reading time for any text instantly. Perfect for blogs, articles, and SEO optimization. Fast, free, and no signup required.",
    h1: "Reading time calculator",
    tagline: "Minutes at common reading speeds",
    category: "analysis",
  },
  "case-converter": {
    id: "case-converter",
    title: "Case Converter – Uppercase, Lowercase & Title Case Tool",
    description:
      "Convert text to uppercase, lowercase, title case, and more instantly. Free online case converter for writers, developers, and students.",
    h1: "Case converter",
    tagline: "UPPER, lower, Title, Sentence",
    category: "analysis",
  },
  "text-cleaner": {
    id: "text-cleaner",
    title: "Text Cleaner Online – Remove Spaces, Line Breaks & Format Text",
    description:
      "Clean and format text easily by removing extra spaces, line breaks, and unwanted characters. Fast, free, and perfect for clean writing.",
    h1: "Text cleaner",
    tagline: "Collapse spaces, strip breaks, trim lines",
    category: "analysis",
  },
  "duplicate-remover": {
    id: "duplicate-remover",
    title: "Duplicate Text Remover – Remove Repeated Lines Online Free",
    description:
      "Remove duplicate lines and repeated text instantly with this free online tool. Clean your content quickly and improve text quality.",
    h1: "Duplicate line remover",
    tagline: "Unique lines, order preserved",
    category: "analysis",
  },
  "text-sorter": {
    id: "text-sorter",
    title: "Text Sorter Online – Sort Text A to Z, Z to A Instantly",
    description:
      "Sort text alphabetically (A–Z or Z–A) in seconds. Free online text sorter for lists, keywords, and data organization.",
    h1: "Text sorter",
    tagline: "Sort lines A–Z or Z–A",
    category: "analysis",
  },
  "text-compare-diff": {
    id: "text-compare-diff",
    title: "Text Compare Tool – Free Online Diff Checker & Text Comparison",
    description:
      "Compare two texts and find differences instantly with this free online diff checker. Highlight changes, edits, and mismatches",
    h1: "Text compare (diff)",
    tagline: "Side-by-side diff highlights",
    category: "analysis",
  },
  "json-formatter": {
    id: "json-formatter",
    title: "JSON Formatter & Validator Online – Beautify, Minify & Fix JSON",
    description:
      "Format, validate, and beautify JSON instantly with this free online tool. Fix errors, minify JSON, and improve readability in seconds. Fast and secure.",
    h1: "JSON formatter & validator",
    tagline: "Beautify, minify, validate, copy",
    category: "devtools",
  },
  "html-minifier": {
    id: "html-minifier",
    title: "HTML Minifier Online – Compress & Optimize HTML Code Free",
    description:
      "Minify and compress HTML code to reduce file size and improve website performance. Fast, free HTML minifier with instant results.",
    h1: "HTML minifier",
    tagline: "Strip comments & whitespace",
    category: "devtools",
  },
  "css-beautifier": {
    id: "css-beautifier",
    title: "CSS Beautifier Online – Format & Pretty Print CSS Code Free",
    description:
      "Beautify and format messy CSS code instantly. Improve readability with this free online CSS formatter and beautifier tool.",
    h1: "CSS beautifier",
    tagline: "Pretty-print stylesheets",
    category: "devtools",
  },
  "base64-codec": {
    id: "base64-codec",
    title: "Base64 Encoder & Decoder – Encode or Decode Text & Files Online",
    description:
      "Encode and decode Base64 strings instantly with this free online tool. Supports text and file conversion with fast and accurate results.",
    h1: "Base64 encoder & decoder",
    tagline: "Text, UTF-8, and small files",
    category: "devtools",
  },
  "url-codec": {
    id: "url-codec",
    title: "URL Encoder & Decoder – Encode or Decode URLs Online Free",
    description:
      "Encode or decode URLs instantly with this free online tool. Convert special characters safely for web use. Fast, simple, and accurate.",
    h1: "URL encoder & decoder",
    tagline: "encodeURIComponent / decodeURIComponent",
    category: "devtools",
  },
  "regex-tester": {
    id: "regex-tester",
    title: "Regex Tester Online – Test & Debug Regular Expressions Free",
    description:
      "Test, debug, and validate regex patterns instantly with this free online regex tester. Supports real-time matching and quick results.",
    h1: "Regex tester",
    tagline: "Live matches and flags",
    category: "devtools",
  },
  "xml-formatter": {
    id: "xml-formatter",
    title: "XML Formatter Online – Beautify, Format & Validate XML Free",
    description:
      "Format, beautify, and validate XML code instantly. Fix errors and improve readability with this fast, free online XML formatter.",
    h1: "XML formatter",
    tagline: "Validate & pretty-print",
    category: "devtools",
  },
  "focus-timer": {
    id: "focus-timer",
    title: "Focus Timer Online – Pomodoro & Zen Writing Editor",
    description:
      "Focus Timer Online with Pomodoro, zen editor, and local stats. Stay productive, track sessions, and improve writing focus with a distraction-free tool.",
    h1: "Focus timer & writing",
    tagline: "Pomodoro + zen editor + local stats",
    category: "focus",
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
  "text-to-excel": { id: "text-to-excel", title: "Text to Excel Converter Online", description: "Convert plain text into spreadsheet-ready Excel tables quickly.", h1: "Text to Excel", tagline: "Convert text rows to sheets", category: "converters", englishOnly: true },
  "csv-to-excel": { id: "csv-to-excel", title: "CSV to Excel Converter Online", description: "Turn CSV files into Excel format instantly.", h1: "CSV to Excel", tagline: "CSV file to XLSX", category: "converters", englishOnly: true },
  "json-to-excel": { id: "json-to-excel", title: "JSON to Excel Converter Online", description: "Convert JSON arrays to Excel columns and rows.", h1: "JSON to Excel", tagline: "JSON data to XLSX", category: "converters", englishOnly: true },
  "xml-to-excel": { id: "xml-to-excel", title: "XML to Excel Converter Online", description: "Transform XML data into Excel sheets.", h1: "XML to Excel", tagline: "XML nodes to cells", category: "converters", englishOnly: true },
  "html-to-excel": { id: "html-to-excel", title: "HTML to Excel Converter Online", description: "Convert HTML table markup into Excel files.", h1: "HTML to Excel", tagline: "HTML tables to XLSX", category: "converters", englishOnly: true },
  "pdf-to-excel": { id: "pdf-to-excel", title: "PDF to Excel Converter Online", description: "Extract table-like PDF content for Excel editing.", h1: "PDF to Excel", tagline: "PDF tables to sheets", category: "converters", englishOnly: true },
  "excel-to-csv": { id: "excel-to-csv", title: "Excel to CSV Converter Online", description: "Convert Excel sheets to standard CSV output.", h1: "Excel to CSV", tagline: "XLSX to CSV", category: "converters", englishOnly: true },
  "excel-to-json": { id: "excel-to-json", title: "Excel to JSON Converter Online", description: "Export Excel data as clean JSON.", h1: "Excel to JSON", tagline: "Sheets to objects", category: "converters", englishOnly: true },
  "excel-to-xml": { id: "excel-to-xml", title: "Excel to XML Converter Online", description: "Convert Excel rows to XML output.", h1: "Excel to XML", tagline: "Spreadsheet to XML", category: "converters", englishOnly: true },
  "excel-to-pdf": { id: "excel-to-pdf", title: "Excel to PDF Converter Online", description: "Create PDF-ready outputs from Excel data.", h1: "Excel to PDF", tagline: "Sheet to document", category: "converters", englishOnly: true },
  "google-sheet-to-excel": { id: "google-sheet-to-excel", title: "Google Sheet to Excel Converter", description: "Convert Google Sheet exports to Excel format.", h1: "Google Sheet to Excel", tagline: "Sheet export to XLSX", category: "converters", englishOnly: true },
  "numbers-to-excel": { id: "numbers-to-excel", title: "Numbers to Excel Converter", description: "Convert Apple Numbers files to Excel-compatible format.", h1: "Numbers to Excel", tagline: "Apple Numbers to XLSX", category: "converters", englishOnly: true },
  "ods-to-excel": { id: "ods-to-excel", title: "ODS to Excel Converter Online", description: "Convert OpenDocument Spreadsheet files to Excel.", h1: "ODS to Excel", tagline: "ODS to XLSX", category: "converters", englishOnly: true },
  "excel-to-ods": { id: "excel-to-ods", title: "Excel to ODS Converter Online", description: "Convert Excel files to OpenDocument spreadsheets.", h1: "Excel to ODS", tagline: "XLSX to ODS", category: "converters", englishOnly: true },
  "excel-to-google-sheet": { id: "excel-to-google-sheet", title: "Excel to Google Sheet Converter", description: "Prepare Excel data for Google Sheets imports.", h1: "Excel to Google Sheet", tagline: "XLSX import prep", category: "converters", englishOnly: true },
  "pdf-to-word": { id: "pdf-to-word", title: "PDF to Word Converter Online", description: "Convert PDF documents into editable Word files.", h1: "PDF to Word", tagline: "PDF to DOCX", category: "converters", englishOnly: true },
  "word-to-pdf": { id: "word-to-pdf", title: "Word to PDF Converter Online", description: "Convert Word documents to PDF in seconds.", h1: "Word to PDF", tagline: "DOCX to PDF", category: "converters", englishOnly: true },
  "text-to-pdf": { id: "text-to-pdf", title: "Text to PDF Converter Online", description: "Convert plain text content into a printable PDF.", h1: "Text to PDF", tagline: "TXT to PDF", category: "converters", englishOnly: true },
  "pdf-to-text": { id: "pdf-to-text", title: "PDF to Text Converter Online", description: "Extract plain text from PDF documents quickly.", h1: "PDF to Text", tagline: "PDF text extraction", category: "converters", englishOnly: true },
  "word-to-txt": { id: "word-to-txt", title: "Word to TXT Converter Online", description: "Convert Word documents to plain TXT.", h1: "Word to TXT", tagline: "DOCX to TXT", category: "converters", englishOnly: true },
  "txt-to-word": { id: "txt-to-word", title: "TXT to Word Converter Online", description: "Convert plain text files into Word-friendly documents.", h1: "TXT to Word", tagline: "TXT to DOCX", category: "converters", englishOnly: true },
  "html-to-pdf": { id: "html-to-pdf", title: "HTML to PDF Converter Online", description: "Convert HTML content into PDF output.", h1: "HTML to PDF", tagline: "Markup to PDF", category: "converters", englishOnly: true },
  "pdf-to-html": { id: "pdf-to-html", title: "PDF to HTML Converter Online", description: "Convert PDF content into editable HTML format.", h1: "PDF to HTML", tagline: "PDF to markup", category: "converters", englishOnly: true },
  "markdown-to-pdf": { id: "markdown-to-pdf", title: "Markdown to PDF Converter Online", description: "Render Markdown and export it as PDF.", h1: "Markdown to PDF", tagline: "MD to PDF", category: "converters", englishOnly: true },
  "pdf-to-markdown": { id: "pdf-to-markdown", title: "PDF to Markdown Converter Online", description: "Convert PDF content into Markdown text.", h1: "PDF to Markdown", tagline: "PDF to MD", category: "converters", englishOnly: true },
  "ppt-to-pdf": { id: "ppt-to-pdf", title: "PPT to PDF Converter Online", description: "Convert PowerPoint slides into PDF files.", h1: "PPT to PDF", tagline: "Slides to PDF", category: "converters", englishOnly: true },
  "pdf-to-ppt": { id: "pdf-to-ppt", title: "PDF to PPT Converter Online", description: "Convert PDF pages into editable slide format.", h1: "PDF to PPT", tagline: "PDF to slides", category: "converters", englishOnly: true },
  "rtf-to-pdf": { id: "rtf-to-pdf", title: "RTF to PDF Converter Online", description: "Convert Rich Text Format files to PDF.", h1: "RTF to PDF", tagline: "RTF document to PDF", category: "converters", englishOnly: true },
  "pdf-to-rtf": { id: "pdf-to-rtf", title: "PDF to RTF Converter Online", description: "Convert PDF content into editable RTF format.", h1: "PDF to RTF", tagline: "PDF to rich text", category: "converters", englishOnly: true },
  "txt-to-markdown": { id: "txt-to-markdown", title: "TXT to Markdown Converter Online", description: "Convert plain text to Markdown-friendly output.", h1: "TXT to Markdown", tagline: "TXT to MD", category: "converters", englishOnly: true },
  "markdown-to-txt": { id: "markdown-to-txt", title: "Markdown to TXT Converter Online", description: "Convert Markdown files to plain text output.", h1: "Markdown to TXT", tagline: "MD to TXT", category: "converters", englishOnly: true },
  "html-to-word": { id: "html-to-word", title: "HTML to Word Converter Online", description: "Convert HTML content into Word-compatible documents.", h1: "HTML to Word", tagline: "HTML to DOCX", category: "converters", englishOnly: true },
  "word-to-html": { id: "word-to-html", title: "Word to HTML Converter Online", description: "Convert Word documents into clean HTML.", h1: "Word to HTML", tagline: "DOCX to HTML", category: "converters", englishOnly: true },
  "json-to-csv": { id: "json-to-csv", title: "JSON to CSV Converter Online", description: "Convert JSON arrays into CSV tables instantly.", h1: "JSON to CSV", tagline: "JSON records to CSV", category: "converters", englishOnly: true },
  "csv-to-json": { id: "csv-to-json", title: "CSV to JSON Converter Online", description: "Convert CSV rows into JSON objects quickly.", h1: "CSV to JSON", tagline: "CSV rows to JSON", category: "converters", englishOnly: true },
  "json-to-xml": { id: "json-to-xml", title: "JSON to XML Converter Online", description: "Transform JSON structures into XML output.", h1: "JSON to XML", tagline: "JSON to XML tree", category: "converters", englishOnly: true },
  "xml-to-json": { id: "xml-to-json", title: "XML to JSON Converter Online", description: "Convert XML documents into JSON structures.", h1: "XML to JSON", tagline: "XML nodes to JSON", category: "converters", englishOnly: true },
  "yaml-to-json": { id: "yaml-to-json", title: "YAML to JSON Converter Online", description: "Convert YAML files to valid JSON.", h1: "YAML to JSON", tagline: "YAML to JSON", category: "converters", englishOnly: true },
  "json-to-yaml": { id: "json-to-yaml", title: "JSON to YAML Converter Online", description: "Convert JSON into clean YAML format.", h1: "JSON to YAML", tagline: "JSON to YAML", category: "converters", englishOnly: true },
  "sql-to-csv": { id: "sql-to-csv", title: "SQL to CSV Converter Online", description: "Convert SQL-like row data into CSV files.", h1: "SQL to CSV", tagline: "SQL rows to CSV", category: "converters", englishOnly: true },
  "csv-to-sql": { id: "csv-to-sql", title: "CSV to SQL Converter Online", description: "Generate SQL inserts from CSV data.", h1: "CSV to SQL", tagline: "CSV to INSERT statements", category: "converters", englishOnly: true },
  "text-to-json": { id: "text-to-json", title: "Text to JSON Converter Online", description: "Convert structured text into JSON quickly.", h1: "Text to JSON", tagline: "Text parsing to JSON", category: "converters", englishOnly: true },
  "json-to-text": { id: "json-to-text", title: "JSON to Text Converter Online", description: "Flatten JSON into readable plain text.", h1: "JSON to Text", tagline: "JSON to readable text", category: "converters", englishOnly: true },
  "text-to-xml": { id: "text-to-xml", title: "Text to XML Converter Online", description: "Turn structured text into XML output.", h1: "Text to XML", tagline: "Text to XML format", category: "converters", englishOnly: true },
  "xml-to-text": { id: "xml-to-text", title: "XML to Text Converter Online", description: "Extract readable text from XML data.", h1: "XML to Text", tagline: "XML to plain text", category: "converters", englishOnly: true },
  "text-uppercase-lowercase": { id: "text-uppercase-lowercase", title: "Text Uppercase Lowercase Converter", description: "Convert text to uppercase or lowercase instantly.", h1: "Text Uppercase/Lowercase", tagline: "UPPER/lower in one click", category: "converters", englishOnly: true },
  "text-to-camel-case": { id: "text-to-camel-case", title: "Text to camelCase Converter", description: "Convert phrases into camelCase format.", h1: "Text to camelCase", tagline: "camelCase conversion", category: "converters", englishOnly: true },
  "text-to-snake-case": { id: "text-to-snake-case", title: "Text to snake_case Converter", description: "Convert text to snake_case format.", h1: "Text to snake_case", tagline: "snake_case conversion", category: "converters", englishOnly: true },
  "text-to-kebab-case": { id: "text-to-kebab-case", title: "Text to kebab-case Converter", description: "Convert text to kebab-case format.", h1: "Text to kebab-case", tagline: "kebab-case conversion", category: "converters", englishOnly: true },
  "split-text-to-columns": { id: "split-text-to-columns", title: "Split Text to Columns Tool", description: "Split text using delimiters into columnar output.", h1: "Split Text to Columns", tagline: "Delimiter-based split", category: "converters", englishOnly: true },
  "merge-text-lines": { id: "merge-text-lines", title: "Merge Text Lines Tool", description: "Merge multiple lines into a single text output.", h1: "Merge Text Lines", tagline: "Join lines with separators", category: "converters", englishOnly: true },
  "convert-line-endings": { id: "convert-line-endings", title: "Convert Line Endings LF CRLF Tool", description: "Convert text line endings between LF and CRLF.", h1: "Convert Line Endings (LF ↔ CRLF)", tagline: "Normalize line endings", category: "converters", englishOnly: true },
  "minify-json": { id: "minify-json", title: "Minify JSON Tool Online", description: "Compress JSON by removing whitespace and line breaks.", h1: "Minify JSON", tagline: "Compact JSON output", category: "converters", englishOnly: true },
  "minify-xml": { id: "minify-xml", title: "Minify XML Tool Online", description: "Compress XML into a single-line compact form.", h1: "Minify XML", tagline: "Compact XML output", category: "converters", englishOnly: true },
};

export const ENGLISH_ONLY_TOOL_IDS = WRITING_TOOL_IDS.filter(
  (id) => writingToolsMeta[id].englishOnly
) as WritingToolId[];

export const EXCEL_SPREADSHEET_TOOL_IDS: WritingToolId[] = [
  "text-to-excel","csv-to-excel","json-to-excel","xml-to-excel","html-to-excel","pdf-to-excel","excel-to-csv","excel-to-json","excel-to-xml","excel-to-pdf","google-sheet-to-excel","numbers-to-excel","ods-to-excel","excel-to-ods","excel-to-google-sheet",
];
export const DOCUMENT_CONVERTER_TOOL_IDS: WritingToolId[] = [
  "pdf-to-word","word-to-pdf","text-to-pdf","pdf-to-text","word-to-txt","txt-to-word","html-to-pdf","pdf-to-html","markdown-to-pdf","pdf-to-markdown","ppt-to-pdf","pdf-to-ppt","rtf-to-pdf","pdf-to-rtf","txt-to-markdown","markdown-to-txt","html-to-word","word-to-html",
];
export const DATA_CODE_CONVERTER_TOOL_IDS: WritingToolId[] = [
  "json-to-csv","csv-to-json","json-to-xml","xml-to-json","yaml-to-json","json-to-yaml","sql-to-csv","csv-to-sql","text-to-json","json-to-text","text-to-xml","xml-to-text",
];
export const TEXT_FORMAT_CONVERTER_TOOL_IDS: WritingToolId[] = [
  "text-uppercase-lowercase","text-to-camel-case","text-to-snake-case","text-to-kebab-case","split-text-to-columns","merge-text-lines","convert-line-endings","minify-json","minify-xml",
];

export function isToolVisibleInLocale(id: WritingToolId, locale: string): boolean {
  if (!writingToolsMeta[id].englishOnly) return true;
  return locale === "en";
}

export function toolsInCategory(
  cat: WritingToolCategory
): WritingToolId[] {
  const primary = new Set<string>(PRIMARY_EDITOR_TOOL_IDS);
  return WRITING_TOOL_IDS.filter(
    (id) =>
      writingToolsMeta[id].category === cat && !primary.has(id)
  );
}
