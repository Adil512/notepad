import type { Metadata } from "next";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/reset-password/update");
  return {
    title: "Set new password | Notepad.is",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default function ResetPasswordUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
