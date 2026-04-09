"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export function AdminFooterGate({ locale }: { locale: string }) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) return null;
  return (
    <>
      <div className="w-full border-t border-border/60 bg-background py-8">
        <div className="mx-auto flex max-w-[85rem] justify-center px-4 sm:px-6 lg:px-8">
          <a
            href="https://chrome.google.com/webstore"
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
