import type { WritingToolId } from "@/lib/writing-tools-registry";

export type ToolEducationContent = {
  whatIs: string[];
  howToUse: string[];
  whyUse: string[];
  faqs: { question: string; answer: string }[];
};

export type ToolFaqSchema = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
};

/** Title-case tool name for H2 headings (preserves acronyms). */
export function formatToolNameForHeading(h1: string): string {
  const upper = new Set([
    "md",
    "json",
    "html",
    "css",
    "xml",
    "url",
    "api",
    "utf-8",
    "base64",
    "diff",
  ]);
  return h1
    .split(/(\s+|\(|\)|&|,)/)
    .map((part) => {
      if (!part || /^\s+$/.test(part)) return part;
      if (part === "(" || part === ")" || part === "&" || part === ",") return part;
      const lower = part.toLowerCase();
      if (upper.has(lower)) {
        if (lower === "md") return "MD";
        if (lower === "base64") return "Base64";
        if (lower === "utf-8") return "UTF-8";
        return lower.toUpperCase();
      }
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join("");
}

const EDU: Partial<Record<WritingToolId, ToolEducationContent>> = {
  "markdown-notepad": {
    whatIs: [
      "A Markdown editor lets you write structured documents using simple punctuation: headings with #, lists with - or 1., emphasis with asterisks, and links in brackets, without a traditional word processor.",
      "This tool highlights your syntax, previews GitHub-flavored Markdown, and keeps your draft in the browser so you can focus on content.",
    ],
    howToUse: [
      "Paste or type your Markdown in the editor.",
      "Choose edit-only, split view, or preview to see rendered output as you work.",
      "Use format and export actions to copy clean Markdown or download a .md file.",
    ],
    whyUse: [
      "Perfect for READMEs, blog posts, documentation, and notes that need consistent structure.",
      "Live preview reduces mistakes before you publish or commit to a repo.",
    ],
    faqs: [
      {
        question: "What is a Markdown editor?",
        answer:
          "A Markdown editor is a tool that allows users to write and format text using simple Markdown syntax instead of complex HTML or rich-text editors and preview it live and download in .md format at the same time. It converts plain text into structured and formatted content like headings, lists, links, and code blocks.",
      },
      {
        question: "What is Markdown and how does it work?",
        answer:
          "Markdown is a lightweight markup language that uses simple symbols to format plain text into structured documents. It allows you to create formatted content such as headings, bold text, links, and images using easy-to-learn syntax.",
      },
      {
        question: "Why should I use a Markdown editor instead of a rich text editor?",
        answer:
          "A Markdown editor helps you focus on writing instead of formatting by removing unnecessary visual distractions. Unlike traditional editors, it allows you to write faster using keyboard-based syntax instead of clicking formatting buttons.",
      },
      {
        question: "Is this Markdown editor free to use online?",
        answer:
          "Yes, browser-based Markdown editors like this tool are completely free and require no installation or signup. You can instantly start writing and formatting content directly in your browser.",
      },
      {
        question: "Can I convert Markdown to HTML using this editor?",
        answer:
          "Yes, a Markdown editor automatically converts your Markdown syntax into HTML in real time or through export options. This allows you to use the content directly on websites or blogs.",
      },
      {
        question: "Does this Markdown editor support live preview?",
        answer:
          "Yes, this Markdown editor provides a live preview feature that shows how your formatted content will look in real time. This helps you quickly verify formatting like headings, links, and code blocks.",
      },
      {
        question: "Can beginners use a Markdown editor easily?",
        answer:
          "Yes, Markdown is very beginner-friendly and can be learned in a short time because it uses simple and intuitive syntax. Most users can understand basic formatting like headings and bold text quickly.",
      },
      {
        question: "What are the main features of a good Markdown editor?",
        answer:
          "A good Markdown editor typically includes features like live preview, syntax highlighting, auto-formatting, export options, and keyboard shortcuts. These features help users write faster and manage content more efficiently.",
      },
      {
        question: "Can I download or export my Markdown content?",
        answer:
          "Yes, most Markdown editors allow users to export content in multiple formats, such as .md, HTML, or PDF. This makes it easy to reuse content across different platforms.",
      },
      {
        question: "Is Markdown better than HTML for writing content?",
        answer:
          "Markdown is easier and faster to write compared to HTML because it uses simple syntax instead of complex tags. It allows users to focus on content creation rather than code structure.",
      },
      {
        question: "Can I use a Markdown editor for blogging?",
        answer:
          "Yes, Markdown editors are widely used for blogging because they allow fast writing and clean formatting. Many blogging platforms and static site generators support Markdown natively.",
      },
      {
        question: "Does Markdown support images and links?",
        answer:
          "Yes, Markdown supports adding images and links using simple syntax. You can easily embed images and create hyperlinks without writing complex HTML code.",
      },
      {
        question: "Is a Markdown editor useful for developers?",
        answer:
          "Markdown editors are extremely useful for developers as they are commonly used for writing documentation, README files, and technical guides. They integrate well with version control systems like Git.",
      },
      {
        question: "Can I use Markdown offline?",
        answer:
          "Yes, Markdown files are plain text files, so they can be created and edited offline using any text editor or Markdown tool. This makes them highly portable and accessible across devices, but the web editor should be loaded fully online first.",
      },
      {
        question: "What makes the Markdown editor different from Notepad?",
        answer:
          "A Markdown editor provides formatting capabilities using syntax and often includes a live preview, while basic Notepad only supports plain text editing without formatting features.",
      },
      {
        question: "Is Markdown future-proof for content writing?",
        answer:
          "Yes, Markdown is considered future-proof because it is plain text and not dependent on any proprietary software. It can be opened and edited in any text editor without compatibility issues.",
      },
      {
        question: "Can I use a Markdown editor for technical documentation?",
        answer:
          "Markdown is widely used for technical documentation because it allows clean formatting, code blocks, and easy version control. It is supported by platforms like GitHub and many documentation tools.",
      },
      {
        question: "Does Markdown support code formatting?",
        answer:
          "Yes, Markdown supports code blocks and inline code formatting, making it ideal for developers and programmers. You can easily display code snippets with proper formatting.",
      },
      {
        question: "Is an online Markdown editor secure?",
        answer:
          "Yes. This Markdown editor processes content locally in your browser, meaning your data is not stored on external servers.",
      },
      {
        question: "Does it replace a full IDE?",
        answer:
          "This Markdown editor is optimized for writing and previewing Markdown quickly, not for large project management or Git workflows. For larger projects, use a professional IDE.",
      },
    ],
  },
  "code-notepad": {
    whatIs: [
      "A code notepad is a lightweight editor with syntax highlighting for many languages, ideal for snippets, experiments, and quick edits without opening a full IDE.",
      "Switch languages, keep a scratch buffer, and download your file when you are done.",
    ],
    howToUse: [
      "Pick a language mode (JavaScript, TypeScript, CSS, JSON, HTML, Markdown, or plain text).",
      "Write or paste code; highlighting updates automatically.",
      "Clear, load samples, or download the buffer using the toolbar actions.",
    ],
    whyUse: [
      "Fast place to test a few lines or share a snippet without project setup.",
      "Multiple modes in one tab reduce context switching for polyglot work.",
    ],
    faqs: [
      {
        question: "What is a code notepad?",
        answer:
          "A code notepad is an online tool that allows users to write, edit, and manage programming code directly in the browser without installing any software. It provides features like syntax highlighting and formatting to make code easier to read and debug.",
      },
      {
        question: "Can I write code online without installing software?",
        answer:
          "Yes, a code notepad lets you write and edit code online without downloading or installing any application. It runs directly in your browser, making it perfect for quick coding tasks, testing snippets, and learning programming.",
      },
      {
        question: "Which programming languages are supported in this code notepad?",
        answer:
          "This code notepad supports multiple programming languages such as JavaScript, TypeScript, CSS, JSON, HTML, Markdown, and plain text.",
      },
      {
        question: "Does this code notepad support syntax highlighting?",
        answer:
          "Yes, syntax highlighting is a core feature of a code notepad that visually differentiates keywords, variables, and code structures. This improves readability and helps developers quickly identify errors and understand code logic.",
      },
      {
        question: "Is this online code editor free to use?",
        answer:
          "Yes, the code notepad is completely free to use and does not require any signup or subscription. Users can instantly start coding, making it a convenient tool for beginners and professionals alike.",
      },
      {
        question: "Can I use this code notepad for debugging code?",
        answer:
          "A code notepad can help identify syntax errors through highlighting and formatting, making it useful for basic debugging. However, advanced debugging may require additional tools or integrated development environments.",
      },
      {
        question: "Does the code notepad auto-format code?",
        answer:
          "Yes, this notepad includes formatting options that help structure and organize your code. This improves readability, especially for larger code files.",
      },
      {
        question: "Is an online code notepad safe to use?",
        answer:
          "Yes, this online code notepad is safe to use. Nothing is installed on your machine and editing happens in the browser.",
      },
      {
        question: "Who should use a code notepad?",
        answer:
          "A code notepad is ideal for developers, students, and beginners who want a fast and simple way to write and test code. It is especially useful for quick edits, practice, and sharing code snippets.",
      },
      {
        question: "What is the difference between a code notepad and a full IDE?",
        answer:
          "A code notepad is lightweight and browser-based, focusing on quick editing and simplicity, while a full IDE offers advanced features like debugging, version control, and project management. Code notepads are best for speed and convenience, whereas IDEs are suited for large-scale development.",
      },
    ],
  },
  "json-editor": {
    whatIs: [
      "A JSON editor helps you view and change JSON data with validation, pretty-printing, and minify options so you can spot errors before they reach an API or config file.",
    ],
    howToUse: [
      "Paste JSON into the editor.",
      "Watch the status line for parse errors; fix commas, quotes, or brackets as indicated.",
      "Use Format to indent, Minify to compress, and Copy to grab the result.",
    ],
    whyUse: [
      "Safer than editing raw JSON in a plain textarea when structure matters.",
      "Speeds up debugging payloads, env snippets, and API responses.",
    ],
    faqs: [
      {
        question: "Why does validation fail on trailing commas?",
        answer:
          "Standard JSON does not allow trailing commas. Remove them or use a linter in your pipeline.",
      },
      {
        question: "Large files?",
        answer:
          "Very large documents may slow the browser. For huge files, prefer desktop tools or streaming parsers.",
      },
      {
        question: "Is data uploaded?",
        answer:
          "Processing happens in your browser; nothing is uploaded by this tool.",
      },
    ],
  },
  "html-editor": {
    whatIs: [
      "An HTML editor with a sandboxed preview lets you write markup (and inline CSS or scripts where allowed) and see output safely separated from the rest of the site.",
    ],
    howToUse: [
      "Edit HTML in the source pane.",
      "Open split or preview mode to render inside an isolated iframe.",
      "Download your page as .html when you are happy with the result.",
    ],
    whyUse: [
      "Learn HTML, prototype small layouts, or verify snippets before dropping them into a project.",
    ],
    faqs: [
      {
        question: "Why might some scripts not run?",
        answer:
          "The preview uses a restrictive sandbox for security. Behavior differs from a full open browser tab.",
      },
      {
        question: "Can I host this file directly?",
        answer:
          "Downloaded HTML is static. You still need hosting and correct paths for assets and APIs.",
      },
    ],
  },
  "word-counter": {
    whatIs: [
      "A word counter measures words, characters, sentences, and paragraphs from any text you paste, useful for assignments, SEO drafts, and social limits.",
    ],
    howToUse: [
      "Paste or type your text in the box.",
      "Read the live totals; counts update as you edit.",
    ],
    whyUse: [
      "Instant feedback without installing software or creating an account.",
    ],
    faqs: [
      {
        question: "How are words defined?",
        answer:
          "Runs of non-whitespace characters separated by spaces typically count as words; edge cases may differ slightly from every style guide.",
      },
      {
        question: "Are sentence counts exact?",
        answer:
          "Sentence detection uses punctuation heuristics and may miscount abbreviations or unusual formatting.",
      },
    ],
  },
  "character-counter": {
    whatIs: [
      "A character counter reports length with and without spaces, plus helpful extras like lines, ideal for tweets, meta descriptions, and SMS-style limits.",
    ],
    howToUse: [
      "Enter your string in the text area.",
      "Compare \"all characters\" vs \"no spaces\" to match the limit you care about.",
    ],
    whyUse: [
      "Avoid submit errors on platforms with strict character caps.",
    ],
    faqs: [
      {
        question: "Does it count emojis as one character?",
        answer:
          "The browser’s string length is used; some emojis use multiple code units but display as one symbol.",
      },
    ],
  },
  "sentence-counter": {
    whatIs: [
      "A sentence counter estimates how many sentences appear in a passage using punctuation cues, helpful for readability checks and editing goals.",
    ],
    howToUse: [
      "Paste your article or chapter.",
      "Review the total; refine text and watch the count change.",
    ],
    whyUse: [
      "Quick sanity check for pacing without manual tallying.",
    ],
    faqs: [
      {
        question: "Why might the count look wrong?",
        answer:
          "Ellipses, decimals, and titles without clear end punctuation can confuse simple sentence detectors.",
      },
    ],
  },
  "paragraph-counter": {
    whatIs: [
      "A paragraph counter splits text on blank lines to approximate how many distinct paragraphs you have, useful for essays, blogs, and reports.",
    ],
    howToUse: [
      "Paste text with paragraphs separated by one or more empty lines.",
      "Adjust spacing and recount as you restructure.",
    ],
    whyUse: [
      "Align with minimum or maximum paragraph requirements quickly.",
    ],
    faqs: [
      {
        question: "Single line breaks inside one paragraph?",
        answer:
          "Soft line breaks within a paragraph usually stay inside one block until you add a blank line between sections.",
      },
    ],
  },
  "reading-time-calculator": {
    whatIs: [
      "A reading time calculator estimates how long typical readers need based on word count and common words-per-minute assumptions (such as 200–250 WPM).",
    ],
    howToUse: [
      "Paste your article.",
      "Compare the range shown for slower vs faster reading speeds.",
    ],
    whyUse: [
      "Set honest “X min read” labels on blogs and newsletters.",
    ],
    faqs: [
      {
        question: "Is the time guaranteed?",
        answer:
          "It is an estimate. Technical or dense text often takes longer than marketing copy.",
      },
    ],
  },
  "case-converter": {
    whatIs: [
      "A case converter reshapes letter casing (UPPERCASE, lowercase, Title Case, and sentence case) in one click for drafts, data cleanup, and coding prep.",
    ],
    howToUse: [
      "Paste source text.",
      "Press the case style you need and copy the output pane.",
    ],
    whyUse: [
      "Faster than manual retyping for long lists or pasted all-caps content.",
    ],
    faqs: [
      {
        question: "Title case and proper nouns?",
        answer:
          "Automated title case may not capitalize every proper noun; proofread names and brands.",
      },
    ],
  },
  "text-cleaner": {
    whatIs: [
      "A text cleaner removes extra spaces, blank lines, or merges lines so pasted content from PDFs, emails, or websites becomes easier to read and reuse.",
    ],
    howToUse: [
      "Paste messy text.",
      "Choose an action such as collapse spaces, remove empty lines, or an all-in-one clean.",
      "Copy the result from the output area.",
    ],
    whyUse: [
      "Prepare quotes, CSV-ish lists, or notes without invisible formatting junk.",
    ],
    faqs: [
      {
        question: "Will this strip intentional formatting?",
        answer:
          "Yes. Actions are aggressive. Keep a backup if you might need original spacing.",
      },
    ],
  },
  "duplicate-remover": {
    whatIs: [
      "A duplicate line remover keeps the first occurrence of each line and drops later repeats, great for log excerpts, keyword lists, and merged notes.",
    ],
    howToUse: [
      "Paste one item per line (or as your data allows).",
      "Pick exact match or ignore leading/trailing spaces, then copy the deduped list.",
    ],
    whyUse: [
      "Shrink noisy datasets before import or analysis.",
    ],
    faqs: [
      {
        question: "Does order change?",
        answer:
          "First-seen order is preserved; later duplicates are removed.",
      },
    ],
  },
  "text-sorter": {
    whatIs: [
      "A text sorter alphabetizes lines A→Z or Z→A using locale-aware comparison, handy for glossaries, tags, and quick data hygiene.",
    ],
    howToUse: [
      "Paste lines to sort.",
      "Choose direction and copy the sorted output.",
    ],
    whyUse: [
      "Turn unordered brainstorms into scannable lists in seconds.",
    ],
    faqs: [
      {
        question: "Numbers vs text?",
        answer:
          "Locale-aware sort may interleave digits and letters differently than spreadsheet tools.",
      },
    ],
  },
  "text-compare-diff": {
    whatIs: [
      "A text compare (diff) tool highlights additions and removals between two versions so you can review edits, config drift, or copy changes side by side.",
    ],
    howToUse: [
      "Paste version A and version B (or load small .txt files).",
      "Read the diff: green shows content added in B, red shows parts removed relative to B.",
    ],
    whyUse: [
      "Faster than eyeballing two long documents for what changed.",
    ],
    faqs: [
      {
        question: "Line vs word diff?",
        answer:
          "This view is line-oriented; very fine-grained word diff may need specialized merge tools.",
      },
    ],
  },
  "json-formatter": {
    whatIs: [
      "A JSON formatter validates structure, beautifies indentation, and minifies payloads so humans and machines can both work with the same data safely.",
    ],
    howToUse: [
      "Paste JSON and check the validation banner.",
      "Beautify for reading or minify for transport, then copy.",
    ],
    whyUse: [
      "Catch syntax issues before they break APIs, apps, or CI jobs.",
    ],
    faqs: [
      {
        question: "How is this different from the JSON editor?",
        answer:
          "Both overlap; this page emphasizes format/validate/minify workflows in a focused layout.",
      },
    ],
  },
  "html-minifier": {
    whatIs: [
      "An HTML minifier strips comments and collapses whitespace between tags to shrink file size, often used before deployment (always verify output).",
    ],
    howToUse: [
      "Paste HTML and click Minify.",
      "Review the output; adjust source if aggressive compression breaks readability you still need in source form.",
    ],
    whyUse: [
      "Experiment with smaller payloads for static snippets or email HTML prototypes.",
    ],
    faqs: [
      {
        question: "Is every minified file safe to ship?",
        answer:
          "Test in target browsers. Some whitespace-sensitive layouts can behave differently.",
      },
    ],
  },
  "css-beautifier": {
    whatIs: [
      "A CSS beautifier re-indents and breaks lines in stylesheets so nested rules and declarations are easier to scan than one long minified line.",
    ],
    howToUse: [
      "Paste compressed or messy CSS.",
      "Run Beautify and copy the formatted result.",
    ],
    whyUse: [
      "Onboard teammates faster when inherited CSS lacks formatting.",
    ],
    faqs: [
      {
        question: "Will it understand every preprocessor?",
        answer:
          "Plain CSS works best. Sass/Less-specific syntax may need native toolchain formatters.",
      },
    ],
  },
  "base64-codec": {
    whatIs: [
      "Base64 encoding represents binary or text as ASCII-safe strings, common for data URLs, tokens, and small attachments in configs.",
    ],
    howToUse: [
      "Encode plain text to Base64 or decode a Base64 string back to UTF-8 text.",
      "Optional: load a small file to see its Base64 form.",
    ],
    whyUse: [
      "Debug APIs, embed tiny assets, or verify what an encoder produced.",
    ],
    faqs: [
      {
        question: "Is Base64 encryption?",
        answer:
          "No. It is encoding, not secrecy. Anyone can decode Base64.",
      },
    ],
  },
  "url-codec": {
    whatIs: [
      "URL encoding escapes reserved characters so query strings and paths are transmitted safely; decoding reverses that process.",
    ],
    howToUse: [
      "Paste a full string or component.",
      "Encode with Encode or reverse with Decode, then copy the result.",
    ],
    whyUse: [
      "Debug broken links, build query strings, and inspect what browsers send on the wire.",
    ],
    faqs: [
      {
        question: "Plus signs in query strings?",
        answer:
          "Decoding may treat + as space in some contexts; know what your server expects.",
      },
    ],
  },
  "regex-tester": {
    whatIs: [
      "A regex tester runs JavaScript-style regular expressions against sample text so you can confirm patterns, flags, and capture groups before shipping code.",
    ],
    howToUse: [
      "Enter your pattern and toggle flags (global, ignore case, multiline, dotAll, unicode).",
      "Type sample text and inspect each match index in the list.",
    ],
    whyUse: [
      "Avoid guess-and-check loops inside production code.",
    ],
    faqs: [
      {
        question: "Same regex in every language?",
        answer:
          "Engines differ slightly. Validate again in Python, Go, or PCRE if you port patterns.",
      },
    ],
  },
  "xml-formatter": {
    whatIs: [
      "An XML formatter parses your document, reports structural errors, and re-indents elements for readability, similar to \"pretty print\" in desktop XML tools.",
    ],
    howToUse: [
      "Paste XML including optional declaration.",
      "Click Format; fix any parser error messages, then copy the output.",
    ],
    whyUse: [
      "Review configs, RSS-like feeds, and integration payloads without squinting at one line.",
    ],
    faqs: [
      {
        question: "Huge documents?",
        answer:
          "Very large XML may stress the browser; consider streaming validators for multi-megabyte files.",
      },
    ],
  },
};

export function getToolPageEducation(
  id: WritingToolId
): ToolEducationContent | null {
  return EDU[id] ?? null;
}

export const TOOL_PAGE_EDUCATION_IDS = new Set(
  Object.keys(EDU) as WritingToolId[]
);

export function getToolFaqSchema(id: WritingToolId): ToolFaqSchema | null {
  if (id !== "markdown-notepad" && id !== "code-notepad") return null;
  const content = EDU[id];
  if (!content || content.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
