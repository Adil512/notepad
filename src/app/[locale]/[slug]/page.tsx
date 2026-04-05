import { Editor } from "@/components/Editor";
import { DistractionFreeWriter } from "@/components/DistractionFreeWriter";
import { QuickNotesApp } from "@/components/QuickNotesApp";
import { seoPages, defaultSEO } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({
    locale: defaultLocale,
    slug,
  }));
}

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const pageData = seoPages[resolvedParams.slug];

  if (!pageData) {
    return {
      title: defaultSEO.title,
      description: defaultSEO.description,
    };
  }

  const canonical = canonicalUrlForPage(
    resolvedParams.locale,
    `/${resolvedParams.slug}`
  );

  return {
    title: pageData.title,
    description: pageData.description,
    alternates: {
      canonical,
    },
    openGraph: { url: canonical },
  };
}

export default async function SEOLandingPage({ params }: Props) {
  const resolvedParams = await params;
  const pageData = seoPages[resolvedParams.slug];

  if (!pageData) {
    notFound();
  }

  const mode = pageData.mode ?? "rich-editor";

  const body =
    mode === "distraction-free" ? (
      <DistractionFreeWriter />
    ) : mode === "quick-notes" ? (
      <QuickNotesApp />
    ) : (
      <Editor />
    );

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <h1 className="sr-only">{pageData.h1}</h1>
      <div className="flex-1 flex flex-col pt-2 sm:pt-4 min-h-0">{body}</div>
    </div>
  );
}
