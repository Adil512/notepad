import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Home,
} from "lucide-react";
import {
  getAllPublishedSlugs,
  getBlogPostBySlug,
  getMergedBlogPosts,
  getPopularPostsUnified,
  getRelatedPostsUnified,
} from "@/lib/blog-service";
import { defaultLocale, localizedPath } from "@/lib/i18n";
import { splitHtmlAfterFirstParagraph } from "@/lib/blog-content";
import { blogPostAbsoluteUrl, resolveCanonicalUrl } from "@/lib/blog-urls";
import { BlogTableOfContents } from "@/components/BlogTableOfContents";
import { BlogScrollToTop } from "@/components/BlogScrollToTop";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ locale: defaultLocale, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }

  const title = post.metaTitle?.trim() || post.title;
  const description = post.metaDescription?.trim() || post.excerpt;
  const defaultCanonical = blogPostAbsoluteUrl(locale, slug);
  const canonical = resolveCanonicalUrl(post.canonicalUrl, defaultCanonical);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const [post, all] = await Promise.all([
    getBlogPostBySlug(slug),
    getMergedBlogPosts(),
  ]);
  if (!post) notFound();

  const popular = getPopularPostsUnified(all, post.slug, 3);
  const related = getRelatedPostsUnified(post, all);

  const blogHref = localizedPath(locale, "/blog");
  const homeHref = localizedPath(locale, "/");

  const hasStaticSections = Boolean(post.sections && post.sections.length > 0);
  const hasDbBody = Boolean(post.contentHtml?.trim());

  const staticTocItems =
    post.sections?.map((s) => ({ id: s.id, title: s.title })) ?? [];

  return (
    <div className="min-h-screen" id="top">
      <BlogScrollToTop />
      <div className="container max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <Link
          href={blogHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-16">
          <article>
            <header className="mb-10">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 shrink-0" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {hasStaticSections && post.sections && post.sections.length > 0 ? (
              <>
                {(() => {
                  const sec0 = post.sections[0];
                  const [firstPara, ...restParas0] = sec0.paragraphs;
                  const restSections = post.sections.slice(1);
                  return (
                    <>
                      <section
                        id={sec0.id}
                        className="scroll-mt-28"
                      >
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                          {sec0.title}
                        </h2>
                        {firstPara !== undefined && (
                          <div className="space-y-4 text-base sm:text-[1.0625rem] leading-relaxed text-muted-foreground">
                            <p>{firstPara}</p>
                          </div>
                        )}
                      </section>

                      {staticTocItems.length > 0 && (
                        <BlogTableOfContents items={staticTocItems} />
                      )}

                      {restParas0.length > 0 && (
                        <div className="space-y-4 text-base sm:text-[1.0625rem] leading-relaxed text-muted-foreground mb-14">
                          {restParas0.map((para, j) => (
                            <p key={j}>{para}</p>
                          ))}
                        </div>
                      )}

                      <div className="space-y-14">
                        {restSections.map((section) => (
                          <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-28"
                          >
                            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                              {section.title}
                            </h2>
                            <div className="space-y-4 text-base sm:text-[1.0625rem] leading-relaxed text-muted-foreground">
                              {section.paragraphs.map((para, j) => (
                                <p key={j}>{para}</p>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </>
            ) : hasDbBody ? (
              <>
                {(() => {
                  const { lead, rest } = splitHtmlAfterFirstParagraph(
                    post.contentHtml!
                  );
                  return (
                    <>
                      {lead ? (
                        <div
                          className="blog-post-body"
                          dangerouslySetInnerHTML={{ __html: lead }}
                        />
                      ) : null}
                      {post.toc.length > 0 && (
                        <BlogTableOfContents items={post.toc} />
                      )}
                      {rest ? (
                        <div
                          className="blog-post-body"
                          dangerouslySetInnerHTML={{ __html: rest }}
                        />
                      ) : null}
                    </>
                  );
                })()}
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 sm:p-14 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Article in progress
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We are finishing this piece. Browse the blog index for other
                  posts, or open the editor and start writing your own notes in
                  the meantime.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href={blogHref}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    All posts
                  </Link>
                  <Link
                    href={homeHref}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Open notepad
                  </Link>
                </div>
              </div>
            )}
          </article>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                  Popular posts
                </h2>
                <ul className="space-y-4">
                  {popular.map((p) => (
                    <li key={`${p.kind}-${p.slug}`}>
                      <Link
                        href={localizedPath(locale, `/blog/${p.slug}`)}
                        className="group block"
                      >
                        <span className="text-[13px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {p.date}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/[0.08] to-transparent dark:from-primary/[0.12] p-6 shadow-sm">
                <p className="text-sm font-medium text-foreground mb-1">
                  Start writing
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Use our free online notepad in the browser. No install, autosave
                  on your device.
                </p>
                <Link
                  href={homeHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-center leading-snug"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  Open free online notepad
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={`${p.kind}-${p.slug}`}
                  href={localizedPath(locale, `/blog/${p.slug}`)}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {p.title}
                  </span>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                    Read post
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
