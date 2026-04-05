import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogNewsletter } from "@/components/BlogNewsletter";
import { getMergedBlogPosts } from "@/lib/blog-service";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog",
    description:
      "Read the latest news, updates, and articles on productivity, quick note taking, and writing tools.",
    alternates: { canonical: canonicalUrlForPage(locale, "/blog") },
    openGraph: { url: canonicalUrlForPage(locale, "/blog") },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const blogPosts = await getMergedBlogPosts();

  return (
    <div className="container max-w-[85rem] mx-auto px-4 py-16 sm:py-24 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display">
          Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 object-cover">
        {blogPosts.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground text-sm border border-dashed border-border rounded-2xl py-16 px-6">
            No articles yet. Check back soon.
          </p>
        ) : null}
        {blogPosts.map((post) => (
          <div
            key={`${post.kind}-${post.slug}`}
            className="group border border-border bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            <div className="h-48 w-full bg-muted/60 relative overflow-hidden flex items-center justify-center border-b border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-50 transition-opacity group-hover:opacity-100" />
              <span className="text-muted-foreground/30 font-display font-bold text-5xl">
                Notepad.is
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                <Link
                  href={localizedPath(locale, `/blog/${post.slug}`)}
                  className="outline-none"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
                <div className="flex items-center text-xs text-muted-foreground font-medium">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {post.date}
                </div>
                <Link
                  href={localizedPath(locale, `/blog/${post.slug}`)}
                  className="text-sm font-semibold text-primary flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Read <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogNewsletter />
    </div>
  );
}
