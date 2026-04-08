import type { WritingToolId } from "@/lib/writing-tools-registry";
import { writingToolsMeta } from "@/lib/writing-tools-registry";

export type ToolEducationContent = {
  whatIs: string[];
  howToUse: string[];
  whyUse: string[];
  faqs: { question: string; answer: string }[];
  testimonials?: { name: string; role: string; quote: string }[];
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
        question: "What is a JSON editor online?",
        answer:
          "A JSON editor online is a browser-based tool that allows users to create, edit, format, and validate JSON data instantly without installing any software. It helps developers and data analysts manage structured data efficiently with real-time feedback.",
      },
      {
        question: "Can I validate JSON using this tool?",
        answer:
          "Yes, this JSON editor automatically validates your JSON data and highlights syntax errors in real time. This makes it easier to fix issues quickly and ensure your JSON is properly structured for APIs and applications.",
      },
      {
        question: "What is JSON beautify and minify?",
        answer:
          "JSON beautify formats your JSON data into a readable structure with proper indentation, while JSON minify removes unnecessary spaces to reduce file size. Both features are useful for improving readability and optimizing performance.",
      },
      {
        question: "Is this JSON editor free and secure?",
        answer:
          "Yes, the JSON editor is completely free to use and works directly in your browser without requiring login or installation. Most tools process data locally, ensuring better privacy and security for your JSON content.",
      },
      {
        question: "Who should use an online JSON editor?",
        answer:
          "An online JSON editor is ideal for developers, API testers, and data engineers who need to quickly edit, validate, or format JSON data. It is also useful for beginners learning how JSON works in web development.",
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
        question: "What is an HTML editor online?",
        answer:
          "An HTML editor online is a web-based tool that allows users to write and edit HTML code directly in the browser. It often includes support for CSS and JavaScript, making it useful for building and testing web pages in real time.",
      },
      {
        question: "Can I preview HTML code in real time?",
        answer:
          "Yes, this HTML editor provides a live preview feature that instantly shows how your HTML, CSS, and JavaScript code will appear in a browser. This helps developers quickly test and refine their designs.",
      },
      {
        question: "Is this HTML editor suitable for beginners?",
        answer:
          "Yes, an online HTML editor is beginner-friendly and does not require installation or setup. It allows new users to practice coding and understand how web pages work in a simple and interactive environment.",
      },
      {
        question: "Can I use this HTML editor for web development?",
        answer:
          "Yes, this tool is perfect for writing, testing, and debugging HTML, CSS, and JavaScript code. It is especially useful for quick prototyping, learning, and making small changes without using a full development environment.",
      },
      {
        question: "Is the HTML editor free to use?",
        answer:
          "Yes, the HTML editor is completely free and does not require any signup or login. Users can start coding instantly, making it a convenient tool for developers and students.",
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
        question: "What is a word counter tool?",
        answer:
          "A word counter is an online tool that calculates the total number of words, characters, sentences, and paragraphs in your text instantly. It is widely used by writers, students, and SEO professionals to manage content length and readability.",
      },
      {
        question: "How does this word counter work?",
        answer:
          "This word counter analyzes your text in real time as you type or paste content into the editor. It automatically updates word count, character count, and sentence structure without requiring manual input or refresh.",
      },
      {
        question: "Why is word count important for SEO?",
        answer:
          "Word count plays a key role in SEO because longer, well-structured content often performs better in search rankings. It helps ensure your content meets recommended length for blog posts, articles, and landing pages.",
      },
      {
        question: "Can I count sentences and paragraphs with this tool?",
        answer:
          "Yes, this word counter also tracks the number of sentences and paragraphs along with words and characters. This helps improve content structure, readability, and overall writing quality.",
      },
      {
        question: "Is this word counter free and accurate?",
        answer:
          "Yes, this tool is completely free to use and provides highly accurate results in real time. It works directly in your browser, making it fast, reliable, and accessible without any signup.",
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
        question: "What is a character counter tool?",
        answer:
          "A character counter is an online tool that counts the total number of characters, including or excluding spaces, in your text. It is commonly used for writing tasks that have strict character limits.",
      },
      {
        question: "Why should I use a character counter?",
        answer:
          "A character counter helps ensure your text meets specific length requirements for platforms like social media, SEO meta descriptions, and ad copy. It prevents exceeding limits and improves content optimization.",
      },
      {
        question: "Does this character counter include spaces?",
        answer:
          "Yes, this tool typically provides counts for both characters with spaces and without spaces. This allows users to accurately measure content based on different platform requirements.",
      },
      {
        question: "Can I use this tool for SEO meta tags?",
        answer:
          "Yes, a character counter is highly useful for optimizing SEO meta titles and descriptions within recommended limits. It helps improve click-through rates by ensuring your text is not truncated in search results.",
      },
      {
        question: "Is this character counter free to use online?",
        answer:
          "Yes, this character counter is completely free and does not require any login or installation. You can instantly paste or type text and get accurate character counts in real time.",
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
        question: "What is a sentence counter tool?",
        answer:
          "A sentence counter is an online tool that calculates the total number of sentences in a given text instantly. It helps writers, students, and content creators analyze content structure and improve readability.",
      },
      {
        question: "How does a sentence counter work?",
        answer:
          "A sentence counter detects sentence boundaries using punctuation marks like periods, question marks, and exclamation points. It processes your text in real time and provides accurate sentence counts instantly.",
      },
      {
        question: "Why is counting sentences important in writing?",
        answer:
          "Counting sentences helps improve content clarity, structure, and readability by ensuring proper sentence length and variation. It is especially useful for essays, blogs, and SEO content optimization.",
      },
      {
        question: "Can I use a sentence counter for SEO content?",
        answer:
          "Yes, a sentence counter helps optimize SEO content by maintaining balanced sentence length and improving readability. Well-structured sentences can enhance user engagement and search engine rankings.",
      },
      {
        question: "Is this sentence counter free and accurate?",
        answer:
          "Yes, this sentence counter is completely free to use and provides accurate results instantly. It works directly in your browser without requiring any signup or installation.",
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
        question: "What is a paragraph counter tool?",
        answer:
          "A paragraph counter is an online tool that counts the number of paragraphs in your text automatically. It helps users organize content and maintain proper formatting in essays, blogs, and documents.",
      },
      {
        question: "How does a paragraph counter identify paragraphs?",
        answer:
          "A paragraph counter detects paragraph breaks based on line spacing or formatting in your text. It instantly calculates the number of paragraphs as you type or paste content into the tool.",
      },
      {
        question: "Why is paragraph count important for writing?",
        answer:
          "Paragraph count is important because it improves content readability and structure by breaking text into manageable sections. Proper paragraphing enhances user experience and makes content easier to scan.",
      },
      {
        question: "Can I use a paragraph counter for academic writing?",
        answer:
          "Yes, a paragraph counter is useful for academic writing as it helps ensure proper structure and organization in essays and assignments. It allows students to meet formatting guidelines more effectively.",
      },
      {
        question: "Is this paragraph counter tool free to use?",
        answer:
          "Yes, this paragraph counter is completely free and requires no login or installation. You can instantly count paragraphs in your text with fast and reliable results.",
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
        question: "What is a reading time calculator?",
        answer:
          "A reading time calculator is an online tool that estimates how long it will take to read a piece of text based on average reading speed. It helps bloggers, writers, and SEO professionals optimize content length for better user engagement.",
      },
      {
        question: "How does a reading time calculator work?",
        answer:
          "A reading time calculator analyzes the total word count of your text and divides it by an average reading speed, usually around 200–250 words per minute. It instantly provides an estimated reading duration to help plan content effectively.",
      },
      {
        question: "Why is reading time important for SEO?",
        answer:
          "Reading time is important for SEO because it improves user experience and engagement metrics like dwell time. When users know how long content will take to read, they are more likely to stay on the page and interact with it.",
      },
      {
        question: "Can I use a reading time calculator for blog posts?",
        answer:
          "Yes, a reading time calculator is perfect for blog posts as it helps writers structure content according to audience expectations. It also allows publishers to display estimated reading time, which increases click-through and retention rates.",
      },
      {
        question: "Is this reading time calculator free and accurate?",
        answer:
          "Yes, this tool is completely free and provides accurate reading time estimates instantly. It works directly in your browser without requiring signup, making it fast and convenient for everyday use.",
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
        question: "What is a case converter tool?",
        answer:
          "A case converter is an online tool that transforms text into different letter cases such as uppercase, lowercase, title case, and sentence case. It helps users quickly format text without manual editing.",
      },
      {
        question: "How does a case converter work?",
        answer:
          "A case converter automatically processes your text and changes the letter casing based on the selected format. It instantly updates the output, saving time and reducing formatting errors.",
      },
      {
        question: "Why should I use a case converter?",
        answer:
          "A case converter helps improve writing efficiency by instantly correcting text formatting for emails, articles, code, and documents. It is especially useful for ensuring consistency and professional presentation.",
      },
      {
        question: "Can I use a case converter for SEO content?",
        answer:
          "Yes, a case converter is useful for SEO as it helps format titles, headings, and meta tags correctly. Proper casing improves readability and can enhance click-through rates in search results.",
      },
      {
        question: "Is this case converter free to use online?",
        answer:
          "Yes, this case converter is completely free and does not require any login or installation. You can instantly convert text into different cases directly in your browser with fast and accurate results.",
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
        question: "What is a text cleaner tool?",
        answer:
          "A text cleaner is an online tool that removes unwanted elements like extra spaces, line breaks, and special characters from your text. It helps improve formatting and ensures your content is clean, readable, and ready for use.",
      },
      {
        question: "How does a text cleaner work?",
        answer:
          "A text cleaner automatically scans your input and applies formatting rules to remove unnecessary spaces, duplicate breaks, and unwanted characters. It processes everything instantly, saving time compared to manual editing.",
      },
      {
        question: "Why should I use a text cleaner?",
        answer:
          "A text cleaner helps improve text quality by making it more structured and readable. It is especially useful for writers, developers, and SEO professionals who need properly formatted content for publishing.",
      },
      {
        question: "Can I use a text cleaner for SEO content?",
        answer:
          "Yes, a text cleaner is very useful for SEO as it ensures your content is well-formatted and free from errors. Clean text improves readability, user experience, and overall search engine performance.",
      },
      {
        question: "Is this text cleaner free and secure?",
        answer:
          "Yes, this text cleaner is completely free and works directly in your browser without requiring login. Most tools process data locally, ensuring your content remains private and secure.",
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
        question: "What is a duplicate line remover?",
        answer:
          "A duplicate line remover is an online tool that identifies and removes repeated lines or duplicate text from your content. It helps clean large datasets and improves overall text quality.",
      },
      {
        question: "How does a duplicate remover tool work?",
        answer:
          "This tool scans your text line by line and detects duplicates based on exact matches. It then removes repeated entries instantly, leaving only unique lines in the output.",
      },
      {
        question: "Why should I remove duplicate lines from text?",
        answer:
          "Removing duplicate lines improves readability and prevents redundancy in your content. It is especially useful for cleaning data files, logs, lists, and bulk text content.",
      },
      {
        question: "Can I use a duplicate remover for data cleaning?",
        answer:
          "Yes, a duplicate remover is widely used for data cleaning tasks where repeated entries need to be eliminated. It helps organize data efficiently and ensures accuracy in analysis.",
      },
      {
        question: "Is this duplicate line remover free to use?",
        answer:
          "Yes, this tool is completely free and does not require any signup or installation. You can instantly remove duplicate lines from your text with fast and accurate results.",
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
        question: "What is a text sorter tool?",
        answer:
          "A text sorter is an online tool that arranges text in a specific order, such as alphabetical (A–Z) or reverse alphabetical (Z–A). It is commonly used to organize lists, keywords, and data quickly and efficiently.",
      },
      {
        question: "How does a text sorter work?",
        answer:
          "A text sorter processes each line of text and rearranges it based on the selected sorting method. It instantly organizes your content without altering the original data, making it easy to manage large text lists.",
      },
      {
        question: "Why should I use a text sorter?",
        answer:
          "A text sorter helps improve organization and readability by structuring your text in a logical order. It is especially useful for managing keyword lists, names, datasets, and other structured content.",
      },
      {
        question: "Can I use a text sorter for SEO keywords?",
        answer:
          "Yes, a text sorter is very useful for SEO as it helps organize keyword lists alphabetically. This makes it easier to analyze, group, and manage keywords for better content planning and optimization.",
      },
      {
        question: "Is this text sorter free and accurate?",
        answer:
          "Yes, this text sorter is completely free to use and provides accurate results instantly. It works directly in your browser without requiring signup or installation, ensuring a fast and seamless experience.",
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
        question: "What is a text compare or diff tool?",
        answer:
          "A text compare tool, also known as a diff checker, is an online tool that compares two pieces of text and highlights the differences between them. It helps users quickly identify changes, edits, or mismatches.",
      },
      {
        question: "How does a text diff checker work?",
        answer:
          "A text diff checker analyzes both inputs line by line or word by word to detect differences. It then highlights added, removed, or modified content, making it easy to track changes.",
      },
      {
        question: "Why should I use a text compare tool?",
        answer:
          "A text compare tool saves time by instantly identifying differences between two texts. It is useful for developers, writers, and editors who need to review updates, revisions, or versions of content.",
      },
      {
        question: "Can I use a diff checker for code comparison?",
        answer:
          "Yes, a diff checker is widely used by developers to compare code files and detect changes. It helps in debugging, version control, and ensuring code accuracy during updates.",
      },
      {
        question: "Is this text compare tool free and secure?",
        answer:
          "Yes, this text compare tool is completely free and works directly in your browser without requiring login. It ensures fast performance and keeps your data private while comparing text.",
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
        question: "What is a JSON formatter and validator?",
        answer:
          "A JSON formatter and validator is an online tool that helps you format, beautify, and validate JSON data instantly. It ensures your JSON is properly structured and error-free, making it easier to read and use in applications.",
      },
      {
        question: "How does a JSON formatter work?",
        answer:
          "A JSON formatter restructures raw or minified JSON into a clean, readable format with proper indentation and spacing. At the same time, it checks for syntax errors and highlights issues that need to be fixed.",
      },
      {
        question: "Why should I validate JSON data?",
        answer:
          "Validating JSON ensures that your data follows the correct syntax required for APIs, web applications, and databases. Proper validation prevents errors, improves data integrity, and ensures smooth data processing.",
      },
      {
        question: "Can I minify JSON using this tool?",
        answer:
          "Yes, this tool allows you to minify JSON by removing unnecessary spaces and line breaks. This reduces file size and improves performance when sending or storing JSON data.",
      },
      {
        question: "Is this JSON formatter free and secure?",
        answer:
          "Yes, this JSON formatter and validator is completely free and works directly in your browser without requiring login. It provides fast processing and ensures your data remains private and secure.",
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
        question: "What is an HTML minifier?",
        answer:
          "An HTML minifier is a tool that compresses HTML code by removing unnecessary spaces, comments, and line breaks. This helps reduce file size and improves website loading speed.",
      },
      {
        question: "How does an HTML minifier improve performance?",
        answer:
          "An HTML minifier reduces the size of your code, which decreases page load time and improves website performance. Faster loading pages can enhance user experience and contribute to better SEO rankings.",
      },
      {
        question: "Is it safe to minify HTML code?",
        answer:
          "Yes, HTML minification is safe as it only removes redundant characters without affecting the functionality of your code. It preserves the structure while making the file more efficient.",
      },
      {
        question: "Can I use an HTML minifier for SEO optimization?",
        answer:
          "Yes, an HTML minifier helps improve SEO by reducing page load speed, which is a key ranking factor. Faster websites provide a better user experience and can lead to higher search engine visibility.",
      },
      {
        question: "Is this HTML minifier free to use online?",
        answer:
          "Yes, this HTML minifier is completely free and requires no signup or installation. You can instantly paste your code and get compressed HTML output in seconds.",
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
        question: "What is a CSS beautifier tool?",
        answer:
          "A CSS beautifier is an online tool that formats messy or minified CSS code into a clean, readable structure with proper indentation. It helps developers understand and manage stylesheets more efficiently.",
      },
      {
        question: "How does a CSS beautifier work?",
        answer:
          "A CSS beautifier automatically restructures your CSS code by adding line breaks, spacing, and indentation. This improves readability without changing the actual functionality of the code.",
      },
      {
        question: "Why should I beautify CSS code?",
        answer:
          "Beautifying CSS makes it easier to debug, edit, and maintain stylesheets, especially in large projects. Clean code improves productivity and reduces the chances of errors during development.",
      },
      {
        question: "Is CSS beautification useful for developers?",
        answer:
          "Yes, CSS beautification is highly useful for developers because it converts compressed or messy code into a readable format. It is especially helpful when working with third-party or minified stylesheets.",
      },
      {
        question: "Is this CSS beautifier free to use?",
        answer:
          "Yes, this CSS beautifier is completely free and works directly in your browser without requiring login or installation. It provides instant formatting for fast and efficient workflow.",
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
        question: "What is a Base64 encoder and decoder?",
        answer:
          "A Base64 encoder and decoder is an online tool that converts text or files into Base64 format and decodes Base64 strings back into readable data. It is commonly used in web development and data transmission.",
      },
      {
        question: "How does Base64 encoding work?",
        answer:
          "Base64 encoding converts binary or text data into an ASCII string format using a specific encoding scheme. This allows data to be safely transmitted over systems that only support text-based formats.",
      },
      {
        question: "Why is Base64 encoding used?",
        answer:
          "Base64 encoding is used to safely transfer data such as images, files, and text over networks or APIs without data corruption. It ensures compatibility across different systems and platforms.",
      },
      {
        question: "Can I decode Base64 strings using this tool?",
        answer:
          "Yes, this tool allows you to easily decode Base64 strings back into their original text or file format. It provides instant results, making it useful for developers and data handling tasks.",
      },
      {
        question: "Is this Base64 encoder and decoder free?",
        answer:
          "Yes, this Base64 tool is completely free and works directly in your browser without any signup. It provides fast and accurate encoding and decoding for both text and file data.",
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
        question: "Why do URLs need to be encoded or decoded?",
        answer:
          "URLs need encoding because special characters like spaces, symbols, or non-ASCII text are not allowed in raw form inside a web address. Encoding converts them into a safe format so browsers and servers can correctly interpret the URL without breaking.",
      },
      {
        question: "What does a URL encoder and decoder tool do?",
        answer:
          "A URL encoder and decoder tool converts unsafe or special characters into a valid URL format and also reverses encoded URLs back into readable text. This ensures proper data transmission in web applications, APIs, and browser requests.",
      },
      {
        question: "When should I use URL encoding?",
        answer:
          "URL encoding is required whenever you are passing data through a URL, such as query parameters, API requests, or form submissions. It prevents errors caused by spaces, symbols, or reserved characters in web addresses.",
      },
      {
        question: "Can I decode an encoded URL using this tool?",
        answer:
          "Yes, this tool allows you to instantly decode any encoded URL back into its original readable format. This is especially useful for debugging, analyzing links, or understanding API request parameters.",
      },
      {
        question: "Is this URL encoder and decoder free to use?",
        answer:
          "Yes, this URL codec tool is completely free and works directly in your browser without any signup. It provides fast and accurate encoding and decoding for developers and general users.",
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
        question: "What is a regex tester tool used for?",
        answer:
          "A regex tester is an online tool that helps you test and validate regular expressions against sample text. It is widely used by developers to ensure patterns correctly match or extract the desired data.",
      },
      {
        question: "How does a regex tester help in development?",
        answer:
          "A regex tester provides real-time feedback by highlighting matches, groups, and errors in your regular expression. This helps developers debug patterns quickly and avoid mistakes in production code.",
      },
      {
        question: "Why is regex testing important?",
        answer:
          "Regex testing is important because regular expressions can be complex and error-prone. Testing ensures that patterns behave as expected before being used in applications, reducing bugs and improving reliability.",
      },
      {
        question: "Can beginners use a regex tester?",
        answer:
          "Yes, beginners can use a regex tester to learn how regular expressions work in a visual and interactive way. It helps users understand pattern matching step by step with instant results.",
      },
      {
        question: "Is this regex tester free and real-time?",
        answer:
          "Yes, this regex tester is completely free and provides real-time matching results. It allows you to test patterns instantly without installation or login.",
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
        question: "What is an XML formatter tool?",
        answer:
          "An XML formatter is an online tool that formats and organizes messy XML code into a clean, structured, and readable format. It helps improve readability and makes XML easier to debug and maintain.",
      },
      {
        question: "How does an XML formatter work?",
        answer:
          "An XML formatter automatically adds proper indentation, line breaks, and structure to raw XML code. It also helps identify syntax errors so you can fix issues quickly.",
      },
      {
        question: "Why should I format XML code?",
        answer:
          "Formatting XML makes it easier to read, understand, and debug large datasets or configuration files. Clean XML structure also reduces errors and improves development efficiency.",
      },
      {
        question: "Can this tool validate XML errors?",
        answer:
          "Yes, many XML formatters also help detect syntax errors such as missing tags or incorrect nesting. This ensures your XML data is properly structured and compatible with applications.",
      },
      {
        question: "Is this XML formatter free to use online?",
        answer:
          "Yes, this XML formatter is completely free and works instantly in your browser. It requires no signup or installation and provides fast formatting and validation.",
      },
    ],
  },
};

export function getToolPageEducation(
  id: WritingToolId
): ToolEducationContent | null {
  const existing = EDU[id];
  if (existing) return existing;

  const meta = writingToolsMeta[id];
  if (!meta?.englishOnly) return null;

  return {
    whatIs: [
      `${meta.h1} is an online conversion utility designed to quickly transform your source content into the target format.`,
      "It runs in your browser workflow and is structured for fast input/output handling without complicated setup.",
    ],
    howToUse: [
      "Paste or upload your source content in the Input area.",
      "Click Convert to generate transformed output.",
      "Review and copy/download the result for your next workflow step.",
    ],
    whyUse: [
      "Saves time when moving data between tools and formats.",
      "Keeps conversion workflows simple for daily content operations.",
    ],
    faqs: [
      {
        question: `What does the ${meta.h1} tool do?`,
        answer: `${meta.h1} converts source content into a target format so you can continue editing, sharing, or importing it in the destination application.`,
      },
      {
        question: "Is this conversion tool free to use?",
        answer:
          "Yes, this tool is available online for free and is designed for quick, repeatable conversion tasks.",
      },
      {
        question: "Is my data secure while converting?",
        answer:
          "The conversion interface is built for browser-first workflows and avoids unnecessary complexity in handling your content.",
      },
      {
        question: "Can I use this tool for professional workflows?",
        answer:
          "Yes, this tool is built for creators, developers, students, and teams who need fast format conversion during daily work.",
      },
    ],
    testimonials: [
      {
        name: "Sara M.",
        role: "Content Manager",
        quote:
          "This converter helps us move files between formats in seconds, without slowing down publishing.",
      },
      {
        name: "Daniel K.",
        role: "Data Analyst",
        quote:
          "Clean interface and quick output. It saves a lot of repetitive manual steps.",
      },
      {
        name: "Nadia R.",
        role: "Student",
        quote:
          "Super simple to use. I can switch formats quickly for assignments and notes.",
      },
    ],
  };
}

export const TOOL_PAGE_EDUCATION_IDS = new Set(
  Object.keys(EDU) as WritingToolId[]
);

export function getToolFaqSchema(id: WritingToolId): ToolFaqSchema | null {
  const content = getToolPageEducation(id);
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
