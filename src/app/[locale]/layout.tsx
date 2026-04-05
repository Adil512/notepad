import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { AdminFooterGate } from "@/components/AdminFooterGate";
import { LocaleProvider } from "@/components/locale-context";
import { DocumentLang } from "@/components/document-lang";
import { createClient } from "@/utils/supabase/server";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocaleMetadata } from "@/lib/locale-metadata";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }
  const { title, description } = getLocaleMetadata(locale);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <LocaleProvider locale={locale}>
      <DocumentLang locale={locale} />
      <div className="flex flex-col min-h-screen">
        <Header user={user} />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <AdminFooterGate locale={locale} />
      </div>
    </LocaleProvider>
  );
}
