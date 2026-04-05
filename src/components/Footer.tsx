import Link from "next/link";
import { FileText } from "lucide-react";
import { localizedPath } from "@/lib/i18n";
import { getFooterTagline } from "@/lib/footer-tagline";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();
  const L = (path: string) => localizedPath(locale, path);
  const tagline = getFooterTagline(locale);

  return (
    <footer className="w-full bg-muted/40 border-t mt-auto">
      <div className="max-w-[85rem] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={L("/")} className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="font-display font-semibold text-2xl tracking-tight">
                Notepad
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/notepad.is/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notepad.is on Facebook"
                className="h-8 w-8 rounded-full bg-accent hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/notepad_is"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notepad.is on X"
                className="h-8 w-8 rounded-full bg-accent hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/notepad-is/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notepad.is on LinkedIn"
                className="h-8 w-8 rounded-full bg-accent hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@Notepad-is"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notepad.is on YouTube"
                className="h-8 w-8 rounded-full bg-accent hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={L("/about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={L("/contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href={L("/blog")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Writing Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={L("/tools")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  All Writing Tools
                </Link>
              </li>
              <li>
                <Link
                  href={L("/distraction-free-writer")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Distraction-Free Writer
                </Link>
              </li>
              <li>
                <Link
                  href={L("/quick-notes")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Quick Notes
                </Link>
              </li>
              <li>
                <Link
                  href={L("/secure-text-editor")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Secure Text Editor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={L("/privacy")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={L("/terms")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Notepad.is. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={L("/privacy")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href={L("/terms")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
