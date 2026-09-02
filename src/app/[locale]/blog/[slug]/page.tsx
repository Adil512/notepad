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

import { BLOG_TRANSLATIONS } from "@/lib/blog-i18n";

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

  const translations = BLOG_TRANSLATIONS[locale]?.posts;
  const transPost = translations?.[slug];

  const title = transPost?.metaTitle?.trim() || transPost?.title || post.metaTitle?.trim() || post.title;
  const description = transPost?.metaDescription?.trim() || transPost?.excerpt || post.metaDescription?.trim() || post.excerpt;
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

  const transPost = BLOG_TRANSLATIONS[locale]?.posts?.[slug];
  const tUi = BLOG_TRANSLATIONS[locale]?.postUi || BLOG_TRANSLATIONS.en.postUi;
  const postsTranslations = BLOG_TRANSLATIONS[locale]?.posts || BLOG_TRANSLATIONS.en.posts;

  const localizedPost = {
    ...post,
    title: transPost?.title || post.title,
    excerpt: transPost?.excerpt || post.excerpt,
    contentHtml: transPost?.contentHtml || post.contentHtml,
  };

  const popular = getPopularPostsUnified(all, post.slug, 3);
  const related = getRelatedPostsUnified(post, all);

  const localizedPopular = popular.map((p) => {
    const translation = postsTranslations[p.slug];
    return {
      ...p,
      title: translation?.title || p.title,
    };
  });

  const localizedRelated = related.map((p) => {
    const translation = postsTranslations[p.slug];
    return {
      ...p,
      title: translation?.title || p.title,
      excerpt: translation?.excerpt || p.excerpt,
    };
  });

  const blogHref = localizedPath(locale, "/blog");
  const homeHref = localizedPath(locale, "/");

  const hasStaticSections = Boolean(localizedPost.sections && localizedPost.sections.length > 0);
  const hasDbBody = Boolean(localizedPost.contentHtml?.trim());

  const staticTocItems =
    localizedPost.sections?.map((s) => ({ id: s.id, title: s.title })) ?? [];

  const tocItems = transPost?.toc || post.toc || [];

  return (
    <div className="min-h-screen" id="top">
      <div className="container max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <Link
          href={blogHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {tUi.backToBlog}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-12 lg:gap-16">
          <article>
            <header className="mb-10">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight">
                {localizedPost.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 shrink-0" />
                  {localizedPost.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  {localizedPost.readTime}
                </span>
              </div>
            </header>

            {hasStaticSections && localizedPost.sections && localizedPost.sections.length > 0 ? (
              <>
                {(() => {
                  const sec0 = localizedPost.sections[0];
                  const [firstPara, ...restParas0] = sec0.paragraphs;
                  const restSections = localizedPost.sections.slice(1);
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
                    localizedPost.contentHtml!
                  );
                  return (
                    <>
                      {lead ? (
                        <div
                          className="blog-post-body"
                          dangerouslySetInnerHTML={{ __html: lead }}
                        />
                      ) : null}
                      {tocItems.length > 0 && (
                        <BlogTableOfContents items={tocItems} />
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
                  {tUi.articleInProgress}
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {tUi.articleInProgressDesc}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href={blogHref}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    {tUi.allPosts}
                  </Link>
                  <Link
                    href={homeHref}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {tUi.openNotepad}
                  </Link>
                </div>
              </div>
            )}
          </article>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Mediavine Top Sidebar Ad Placeholder */}
              <div id="sidebar_atf_target" className="w-full min-h-[50px] empty:hidden" />

              <div className="flex shrink-0 w-full">
                <a
                  href="https://www.google.com/preferences/source?q=notepad.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="text-xs font-normal text-gray-700 dark:text-gray-300 leading-normal text-left">
                    Add <strong className="font-semibold text-gray-900 dark:text-white">Notepad.is</strong> as a preferred source on <strong className="font-semibold text-gray-900 dark:text-white">Google</strong>
                  </span>
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                  {tUi.popularPosts}
                </h2>
                <ul className="space-y-4">
                  {localizedPopular.map((p) => (
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
                  {tUi.startWriting}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {tUi.startWritingDesc}
                </p>
                <Link
                  href={homeHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-center leading-snug"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  {tUi.openFreeNotepad}
                </Link>
              </div>

              {/* Mediavine Bottom Sidebar Ad Placeholder */}
              <div id="sidebar_btf_target" className="w-full min-h-[50px] empty:hidden" />
            </div>
          </aside>
        </div>

        {localizedRelated.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              {tUi.relatedPosts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {localizedRelated.map((p) => (
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
                    {tUi.readPost}
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
