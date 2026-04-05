import type { Metadata } from "next";
import { Editor } from "@/components/Editor";
import { SEOContent } from "@/components/SEOContent";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { createClient } from "@/utils/supabase/server";
import { getLatestBlogPosts } from "@/lib/blog-service";
import { canonicalUrlForPage } from "@/lib/site";

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
  const supabase = await createClient();
  let user = null;
  if (supabase) {
    const { data } = await supabase.auth.getUser();
    user = data.user;
  }

  const latest = await getLatestBlogPosts(3);
  const latestBlogPosts = latest.map((p) => ({
    slug: p.slug,
    title: p.title,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FaqJsonLd />
      <main className="flex-1 flex flex-col items-center relative">
        <Editor user={user} />
        <SEOContent locale={locale} latestBlogPosts={latestBlogPosts} />
      </main>
    </div>
  );
}
