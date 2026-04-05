import { canonicalUrlForPage, getSiteUrl } from "@/lib/site";

const BASE_ORG = {
  "@type": "Organization" as const,
  name: "Notepad",
  email: "hi@adilbalti.app",
  sameAs: [
    "https://x.com/notepad_is",
    "https://www.linkedin.com/company/notepad-is/",
    "https://www.youtube.com/@Notepad-is",
    "https://www.facebook.com/notepad.is/",
  ],
};

/** Homepage @graph JSON-LD (Organization, WebSite, WebApplication). */
export function getHomeGraphJsonLd(locale: string) {
  const siteOrigin = getSiteUrl();
  const siteRoot = `${siteOrigin}/`;
  const logoUrl = `${siteOrigin}/logo.png`;
  const pageUrl = canonicalUrlForPage(locale, "/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...BASE_ORG,
        url: siteRoot,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
      },
      {
        "@type": "WebSite",
        name: "Notepad",
        url: pageUrl,
        publisher: { "@type": "Organization", name: "Notepad" },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteOrigin}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebApplication",
        name: "Notepad – Free Online Notepad",
        url: pageUrl,
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory:
          "Online Text Editor, Note Taking App, Writing Tool",
        operatingSystem: "Any (Web Browser)",
        browserRequirements: "Requires JavaScript",
        softwareVersion: "1.0.0",
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().slice(0, 10),
        description:
          "Notepad is a fast, free online notepad and text editor that lets you write, edit, and save notes instantly in your browser. No login required. Enjoy distraction-free writing, auto-save, dark mode, and secure note storage. Access and share your notes anytime from any device.",
        featureList: [
          "Distraction-free writing mode",
          "Instant auto-save in browser",
          "No login or signup required",
          "Fast and lightweight interface",
          "Word count and character count",
          "Dark mode and light mode",
          "Secure and privacy-focused editing",
          "Works across all modern browsers",
          "Quick notes and scratchpad support",
          "Copy, download, and export notes",
          "Keyboard shortcuts for fast writing",
          "Mobile-friendly responsive design",
          "No ads in writing area",
          "Unlimited note size",
          "Instant sharing capability",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        creator: { "@type": "Organization", name: "Notepad" },
        publisher: { "@type": "Organization", name: "Notepad" },
      },
    ],
  };
}
