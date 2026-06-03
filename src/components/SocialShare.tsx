"use client";

import { useEffect, useState } from "react";
import { Mail, Link2, Check, Share2 } from "lucide-react";

type Network = {
  name: string;
  color: string;
  href: (url: string, title: string) => string;
  icon: React.ReactNode;
};

const NETWORKS: Network[] = [
  {
    name: "X",
    color: "#000000",
    href: (url, title) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    color: "#1877F2",
    href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    href: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    href: (url, title) => `https://wa.me/?text=${title}%20${url}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.768-.999.21.292zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    color: "#FF4500",
    href: (url, title) =>
      `https://www.reddit.com/submit?url=${url}&title=${title}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    color: "#E60023",
    href: (url, title) =>
      `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24.007 5.367 18.641.001 12.017.001z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    color: "#229ED9",
    href: (url, title) => `https://t.me/share/url?url=${url}&text=${title}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Email",
    color: "#EA4335",
    href: (url, title) => `mailto:?subject=${title}&body=${url}`,
    icon: <Mail className="h-[18px] w-[18px]" />,
  },
];

export function SocialShare() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const enc = (s: string) => encodeURIComponent(s);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title, url: url || window.location.href });
    } catch {
      /* user cancelled or unsupported */
    }
  };

  return (
    <section className="w-full max-w-[85rem] mx-auto px-2 sm:px-4 mt-1">
      <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 px-2 py-1.5">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Share2 className="h-4 w-4 text-primary" />
          Share
        </span>

        <span className="hidden sm:block h-5 w-px bg-border" />

        <div className="flex items-center gap-1.5">
          {NETWORKS.map((n) => (
            <a
              key={n.name}
              href={n.href(enc(url), enc(title))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${n.name}`}
              title={`Share on ${n.name}`}
              style={{
                ["--brand" as string]: n.color,
                color: n.color,
                backgroundColor: `color-mix(in srgb, ${n.color} 14%, transparent)`,
              }}
              className="group/btn flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:!text-white hover:[background-color:var(--brand)] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {n.icon}
            </a>
          ))}
        </div>

        <span className="hidden sm:block h-5 w-px bg-border" />

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className="flex h-9 items-center gap-1.5 rounded-full bg-muted px-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              Copy link
            </>
          )}
        </button>

        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="More sharing options"
            title="More options"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:hidden"
          >
            <Share2 className="h-[18px] w-[18px]" />
          </button>
        )}
      </div>
    </section>
  );
}
