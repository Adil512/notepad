/** Homepage FAQ — shared by visible accordions and FAQPage JSON-LD */

export const NOTEPAD_ONLINE_FAQS: { q: string; a: string }[] = [
  {
    q: "What is Notepad Online?",
    a: "Notepad Online is a browser-based text editor that allows you to write, edit, and manage notes instantly without installing any software. It works on any device, making note-taking simple, fast, and accessible from anywhere.",
  },
  {
    q: "Is Notepad Online free to use?",
    a: "Yes, Notepad Online is completely free to use with no hidden charges or subscriptions. You can create, edit, and store unlimited notes without worrying about usage limits.",
  },
  {
    q: "Do I need to sign up to use Notepad Online?",
    a: "No, you can start using Notepad Online instantly without creating an account or logging in. This makes it quick and hassle-free for users who want immediate access to a text editor.",
  },
  {
    q: "Can I save my notes online?",
    a: "Yes, your notes can be saved online so you can access and continue editing them anytime. This ensures your work is محفوظ and available across different sessions and devices.",
  },
  {
    q: "Does Notepad Online support auto-save?",
    a: "Yes, the editor includes an auto-save feature that continuously saves your notes while you type. This helps prevent data loss in case of accidental refresh, crash, or browser closure.",
  },
  {
    q: "Can I access my notes from different devices?",
    a: "Yes, you can access your saved notes from any device including mobile, tablet, or desktop. All you need is an internet connection to open and edit your notes anytime.",
  },
  {
    q: "Is my data secure on Notepad Online?",
    a: "Yes, your notes are stored securely with privacy-focused measures to keep your content protected. Your data is not publicly shared and remains under your control.",
  },
  {
    q: "Can I share my notes with others?",
    a: "Yes, you can easily share your notes by generating a unique shareable link. This makes collaboration and quick sharing simple without needing additional tools.",
  },
  {
    q: "Does Notepad Online work on mobile devices?",
    a: "Yes, Notepad Online is fully responsive and works smoothly on smartphones and tablets. You can write and edit notes on the go with the same ease as on a desktop.",
  },
  {
    q: "Can I use Notepad Online offline?",
    a: "Some basic features may work offline depending on your browser capabilities. However, an internet connection is recommended for saving, syncing, and accessing your notes reliably.",
  },
  {
    q: "Is Notepad Online better than traditional Notepad or WordPad?",
    a: "Notepad Online offers cloud saving, cross-device access, and sharing features that traditional offline tools do not provide. It gives you more flexibility and convenience for modern note-taking needs.",
  },
  {
    q: "What features does Notepad Online include?",
    a: "Notepad Online includes a clean text editor, auto-save functionality, online storage, and easy note sharing. It is designed to be fast, minimal, and distraction-free for better productivity.",
  },
  {
    q: "Can I use Notepad Online for writing documents?",
    a: "Yes, you can use it to write notes, drafts, articles, or simple documents quickly and efficiently. It is perfect for users who want a lightweight alternative to heavy writing software.",
  },
  {
    q: "Does Notepad Online support formatting?",
    a: "Basic formatting options may be available to help you structure your text clearly. This makes it easier to organize and read your notes compared to plain text editors.",
  },
  {
    q: "How is Notepad Online different from other online editors?",
    a: "Notepad Online focuses on simplicity, speed, and ease of use without unnecessary features. It is ideal for users who want a clean, distraction-free writing experience.",
  },
];

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NOTEPAD_ONLINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};
