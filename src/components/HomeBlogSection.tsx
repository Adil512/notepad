import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { localizedPath } from "@/lib/i18n";

export type HomeBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export function HomeBlogSection({
  locale,
  posts,
}: {
  locale: string;
  posts: HomeBlogPost[];
}) {
  if (posts.length === 0) return null;

  const blogPath = localizedPath(locale, "/blog");

  return (
    <section className="relative max-w-6xl mx-auto" aria-labelledby="home-blog-heading">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent" />

      <div className="text-center mb-12">
        <h2
          id="home-blog-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display"
        >
          Our blog
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <Link
              href={localizedPath(locale, `/blog/${post.slug}`)}
              className="relative block h-40 overflow-hidden border-b border-border bg-muted/40"
              tabIndex={-1}
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-bold tracking-tight text-foreground/20 transition-colors group-hover:text-primary/30">
                  Notepad.is
                </span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
                {post.date ? (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    {post.date}
                  </span>
                ) : null}
                {post.readTime ? (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                ) : null}
              </div>

              <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                <Link
                  href={localizedPath(locale, `/blog/${post.slug}`)}
                  className="line-clamp-2 outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={localizedPath(locale, `/blog/${post.slug}`)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5"
              >
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href={blogPath}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          View all articles
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
