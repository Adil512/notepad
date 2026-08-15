import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Zap, Globe, Heart } from "lucide-react";
import { getAboutPageSeo } from "@/lib/about-page-seo";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = getAboutPageSeo(locale);
  const canonical = canonicalUrlForPage(locale, "/about");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { url: canonical, title, description },
  };
}

const CONTENT = {
  en: {
    aboutUs: "About us",
    heroTitle: "Writing should feel effortless",
    heroDesc: "Notepad.is is a calm, fast online notepad for people who want to capture ideas without fighting the tool. We believe the best software gets out of the way.",
    tryNotepad: "Try the notepad",
    whyBuiltTitle: "Why we built this",
    whyBuiltP1: "Heavy apps are great for long projects, but most notes are small: a paragraph, a URL, a reminder. We wanted one place that opens instantly, saves automatically, and respects your attention. That is Notepad.is.",
    whyBuiltLinkPrefix: "You can explore our ",
    whyBuiltLinkTools: "Writing tools",
    whyBuiltLinkMid: " directory, follow product notes on the ",
    whyBuiltLinkBlog: "Blog",
    whyBuiltLinkSuffix: ", or start typing in the notepad anytime.",
    pillars: [
      {
        title: "Privacy first",
        body: "Your notes stay in the browser by default. Local storage keeps drafts on your device so everyday writing does not depend on our servers.",
      },
      {
        title: "Speed you feel",
        body: "No installers, no project files for a quick thought. Open a tab, type, and move on. The interface stays quiet so your words stay loud.",
      },
      {
        title: "Works everywhere",
        body: "If you have a modern browser, you have your notepad. Use it for lists, snippets, journaling, or the messy first pass before you polish elsewhere.",
      },
      {
        title: "Built for real use",
        body: "We care about typography, keyboard flow, and small details that add up. The goal is simple: a dependable place to think in text.",
      },
    ],
    readyTitle: "Ready when you are",
    readyDesc: "No account required to start. Bookmark the page, keep a tab pinned, and use it the way that fits your day.",
    openNotepad: "Open Notepad.is",
  },
  ko: {
    aboutUs: "소개",
    heroTitle: "글쓰기는 자연스러워야 합니다",
    heroDesc: "Notepad.is는 도구와 씨름하지 않고 아이디어를 기록하고자 하는 분들을 위한 차분하고 빠른 온라인 메모장입니다. 저희는 가장 훌륭한 소프트웨어는 방해가 되지 않아야 한다고 믿습니다.",
    tryNotepad: "메모장 사용해보기",
    whyBuiltTitle: "이 메모장을 만든 이유",
    whyBuiltP1: "무거운 앱은 긴 프로젝트에 유용하지만, 대부분의 메모는 문단 하나, URL 하나, 알림 등 짧고 간단합니다. 저희는 즉시 열리고, 자동으로 저장되며, 당신의 주의를 방해하지 않는 공간을 원했습니다. 그것이 바로 Notepad.is입니다.",
    whyBuiltLinkPrefix: "저희의 ",
    whyBuiltLinkTools: "글쓰기 도구",
    whyBuiltLinkMid: " 디렉터리를 탐색하거나, ",
    whyBuiltLinkBlog: "블로그",
    whyBuiltLinkSuffix: "에서 제품 노트를 확인하거나, 언제든지 메모장에 타이핑을 시작할 수 있습니다.",
    pillars: [
      {
        title: "개인정보 보호 최우선",
        body: "메모는 기본적으로 브라우저에 저장됩니다. 로컬 스토리지가 기기에 초안을 보관하므로 일상적인 글쓰기가 저희 서버에 의존하지 않습니다.",
      },
      {
        title: "체감되는 속도",
        body: "간단한 생각을 기록하기 위해 설치 프로그램이나 프로젝트 파일이 필요하지 않습니다. 탭을 열고, 타이핑하고, 닫으면 됩니다. 인터페이스는 조용하여 당신의 글에만 집중할 수 있습니다.",
      },
      {
        title: "어디서나 작동",
        body: "최신 브라우저만 있다면 메모장을 사용할 수 있습니다. 목록, 스니펫, 일기 또는 다른 곳에서 다듬기 전 거친 초안 작성용으로 활용해 보세요.",
      },
      {
        title: "실제 사용을 위한 설계",
        body: "저희는 타이포그래피, 키보드 흐름, 그리고 디테일의 조화를 중요하게 여깁니다. 목표는 심플합니다: 텍스트로 생각을 정리할 수 있는 신뢰할 수 있는 공간입니다.",
      },
    ],
    readyTitle: "언제든지 시작할 수 있습니다",
    readyDesc: "로그인 없이 바로 시작할 수 있습니다. 페이지를 북마크하거나 탭을 고정하여 일상에 맞는 방식으로 사용해 보세요.",
    openNotepad: "Notepad.is 열기",
  },
};

const pillarIcons = [Shield, Zap, Globe, Heart];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const home = localizedPath(locale, "/");
  const tools = localizedPath(locale, "/tools");
  const blog = localizedPath(locale, "/blog");
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.04] dark:from-primary/[0.12] dark:to-primary/[0.05]"
          aria-hidden
        />
        <div className="container relative max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {t.aboutUs}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
          <div className="mt-10">
            <Link
              href={home}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              {t.tryNotepad}
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {t.whyBuiltTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t.whyBuiltP1}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {t.whyBuiltLinkPrefix}
            <Link
              href={tools}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t.whyBuiltLinkTools}
            </Link>
            {t.whyBuiltLinkMid}
            <Link
              href={blog}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t.whyBuiltLinkBlog}
            </Link>
            {t.whyBuiltLinkSuffix}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {t.pillars.map(({ title, body }, index) => {
            const Icon = pillarIcons[index];
            return (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 dark:bg-muted/10">
        <div className="container max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            {t.readyTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t.readyDesc}
          </p>
          <Link
            href={home}
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.openNotepad}
          </Link>
        </div>
      </section>
    </div>
  );
}
