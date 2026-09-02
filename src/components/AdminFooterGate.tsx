"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export function AdminFooterGate({ locale }: { locale: string }) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) return null;
  return (
    <>
      <div className="w-full border-t border-border/60 bg-background py-10">
        <div className="mx-auto flex max-w-[85rem] flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex shrink-0">
            <a
              href="https://www.google.com/preferences/source?q=notepad.is"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[20px] px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <svg className="w-6.5 h-6.5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-300 leading-tight text-left">
                Add <strong className="font-semibold text-gray-900 dark:text-white">Notepad.is</strong> as a preferred source on <strong className="font-semibold text-gray-900 dark:text-white">Google</strong>
              </span>
            </a>
          </div>

          <a
            href="https://chromewebstore.google.com/detail/notepadis/dhmnleochiopeodajekdgidhglodiodb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Install Our Free Extension
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
