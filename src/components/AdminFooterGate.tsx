"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function AdminFooterGate({ locale }: { locale: string }) {
  const pathname = usePathname();
  if (pathname?.includes("/admin")) return null;
  return <Footer locale={locale} />;
}
