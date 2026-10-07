import type { Metadata } from "next";
import { Editor } from "@/components/Editor";
import { SocialShare } from "@/components/SocialShare";
import { SEOContent } from "@/components/SEOContent";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { HomeGraphJsonLd } from "@/components/HomeGraphJsonLd";
import { getLatestBlogPosts } from "@/lib/blog-service";
import { canonicalUrlForPage } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: { canonical: canonicalUrlForPage(locale, "/") },
    openGraph: { url: canonicalUrlForPage(locale, "/") },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const latest = await getLatestBlogPosts(6);
  const latestBlogPosts = latest.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    readTime: p.readTime,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HomeGraphJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <main className="flex-1 flex flex-col items-center relative">
        <Editor />
        <SocialShare />
        <SEOContent locale={locale} latestBlogPosts={latestBlogPosts} />
      </main>
    </div>
  );
}
