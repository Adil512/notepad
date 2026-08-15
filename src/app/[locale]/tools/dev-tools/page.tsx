import Link from "next/link";
import type { Metadata } from "next";
import {
  DEV_TOOLS_HUB_TOOL_IDS,
  isToolVisibleInLocale,
  writingToolsMeta,
  type WritingToolId,
} from "@/lib/writing-tools-registry";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";
import { ToolIcon } from "@/components/tools/ToolIcon";
import { ArrowRight } from "lucide-react";

const CONTENT = {
  en: {
    metaTitle: "Free Developer Tools – JSON, HTML, CSS, XML, Base64 & Regex Utilities",
    metaDesc: "Access free developer tools to format, validate, encode, decode, and optimize code. Use JSON Formatter & Validator, HTML Minifier, CSS Beautifier, Base64 Encoder/Decoder, URL Encoder/Decoder, Regex Tester, and XML Formatter online.",
    pageTitle: "Developer tools",
    introPrefix: "Developer tools give you essential utilities for web development, programming, and technical SEO—without installing desktop software. Format and inspect JSON with the ",
    introJsonFormatter: "JSON formatter",
    introTighten: ", tighten markup using the ",
    introHtmlMinifier: "HTML minifier",
    introTidy: ", tidy styles with the ",
    introCssBeautifier: "CSS beautifier",
    introEncode: ", encode or decode with ",
    introBase64: "Base64",
    introAnd: " and ",
    introUrl: "URL",
    introValidate: " tools, validate patterns in the ",
    introRegexTester: "regex tester",
    introStructure: ", and structure XML in the ",
    introXmlFormatter: "XML formatter",
    introSuffix: ". Everything runs locally in your browser where supported.",
    ctaAllTools: "All tools",
    ctaEditorTools: "Editor tools",
    ctaTextAnalysis: "Text analysis",
    ctaNotepadEditor: "Notepad editor",
    sectionHeading: "Free Online Developer Tools",
    toolTitles: {
      "json-formatter": "JSON Formatter",
      "html-minifier": "HTML Minifier",
      "css-beautifier": "CSS Beautifier",
      "base64-codec": "Base64 Codec",
      "url-codec": "URL Codec",
      "regex-tester": "Regex Tester",
      "xml-formatter": "XML Formatter",
    },
  },
  ko: {
    metaTitle: "무료 개발자 도구 – JSON, HTML, CSS, XML, Base64 및 정규식 유틸리티",
    metaDesc: "코드를 포맷하고, 유효성을 검증하며, 인코딩, 디코딩 및 최적화하기 위한 무료 개발자 도구를 사용해 보세요. JSON 포맷터 & 검증기, HTML 미니파이어, CSS 뷰티파이어, Base64 인코더/디코더, URL 인코더/디코더, 정규식 테스터, XML 포맷터를 온라인에서 사용할 수 있습니다.",
    pageTitle: "개발자 도구",
    introPrefix: "개발자 도구는 데스크톱 소프트웨어를 설치하지 않고도 웹 개발, 프로그래밍 및 기술적 SEO를 위한 필수 유틸리티를 제공합니다. ",
    introJsonFormatter: "JSON 포맷터",
    introTighten: "로 JSON을 포맷하고 검사하며, ",
    introHtmlMinifier: "HTML 미니파이어",
    introTidy: "로 마크업을 압축하고, ",
    introCssBeautifier: "CSS 뷰티파이어",
    introEncode: "로 스타일을 정리하며, ",
    introBase64: "Base64",
    introAnd: " 및 ",
    introUrl: "URL",
    introValidate: " 도구로 인코딩 또는 디코딩하고, ",
    introRegexTester: "정규식 테스터",
    introStructure: "에서 패턴을 검증하고, ",
    introXmlFormatter: "XML 포맷터",
    introSuffix: "에서 XML을 구조화할 수 있습니다. 지원되는 모든 기능은 브라우저에서 로컬로 실행됩니다.",
    ctaAllTools: "모든 도구",
    ctaEditorTools: "에디터 도구",
    ctaTextAnalysis: "텍스트 분석",
    ctaNotepadEditor: "메모장 에디터",
    sectionHeading: "무료 온라인 개발자 도구",
    toolTitles: {
      "json-formatter": "JSON 포맷터",
      "html-minifier": "HTML 미니파이어",
      "css-beautifier": "CSS 뷰티파이어",
      "base64-codec": "Base64 변환기",
      "url-codec": "URL 변환기",
      "regex-tester": "정규식 테스터",
      "xml-formatter": "XML 포맷터",
    },
  },
  zh: {
    metaTitle: "免费开发者工具 – JSON、HTML、CSS、XML、Base64 和 正则表达式实用程序",
    metaDesc: "使用免费的开发者工具来格式化、验证、编码、解码和优化代码。在线使用 JSON 格式化与验证器、HTML 压缩器、CSS 美化器、Base64 编码/解码器、URL 编码/解码器、正则表达式测试器和 XML 格式化器。",
    pageTitle: "开发者工具",
    introPrefix: "开发者工具为您提供了网页开发、编程和技术 SEO 所需的必备实用工具，而无需安装桌面软件。您可以使用 ",
    introJsonFormatter: "JSON 格式化器",
    introTighten: " 来格式化和检查 JSON，使用 ",
    introHtmlMinifier: "HTML 压缩器",
    introTidy: " 来精简标记，使用 ",
    introCssBeautifier: "CSS 美化器",
    introEncode: " 来整理样式，使用 ",
    introBase64: "Base64",
    introAnd: " 和 ",
    introUrl: "URL",
    introValidate: " 工具进行编码或解码，在 ",
    introRegexTester: "正则表达式测试器",
    introStructure: " 中验证模式，并在 ",
    introXmlFormatter: "XML 格式化器",
    introSuffix: " 中构建 XML 结构。在支持的情况下，所有工具均在您的浏览器中本地运行。",
    ctaAllTools: "所有工具",
    ctaEditorTools: "编辑器工具",
    ctaTextAnalysis: "文本分析",
    ctaNotepadEditor: "记事本编辑器",
    sectionHeading: "免费在线开发者工具",
    toolTitles: {
      "json-formatter": "JSON 格式化器",
      "html-minifier": "HTML 压缩器",
      "css-beautifier": "CSS 美化器",
      "base64-codec": "Base64 编解码器",
      "url-codec": "URL 编解码器",
      "regex-tester": "正则表达式测试器",
      "xml-formatter": "XML 格式化器",
    },
  },
  ar: {
    metaTitle: "أدوات مجانية للمطورين – أدوات مساعدة لـ JSON، HTML، CSS، XML، Base64 والتعبيرات النمطية",
    metaDesc: "استخدم أدوات مطورين مجانية لتنسيق الكود والتحقق من صحته وترميزه وفك ترميزه وتحسينه. استخدم منسق JSON والتحقق من صحته، ضاغط HTML، مجمل CSS، مشفر/مفكك Base64، مشفر/مفكك URL، ومختبر التعبيرات النمطية (Regex)، ومنسق XML عبر الإنترنت.",
    pageTitle: "أدوات المطورين",
    introPrefix: "توفر أدوات المطورين لدينا الأدوات المساعدة الأساسية التي تحتاجها لتطوير الويب والبرمجة وتحسين محركات البحث التقني (SEO) دون الحاجة لتثبيت برامج مكتبية. يمكنك استخدام ",
    introJsonFormatter: "منسق JSON",
    introTighten: " لتنسيق وفحص ملفات JSON، واستخدام ",
    introHtmlMinifier: "ضاغط HTML",
    introTidy: " لضغط الكود البرمجي، واستخدام ",
    introCssBeautifier: "مجمل CSS",
    introEncode: " لترتيب الأنماط، وتشفير أو فك تشفير البيانات عبر أدوات ",
    introBase64: "Base64",
    introAnd: " و ",
    introUrl: "URL",
    introValidate: "، والتحقق من الأنماط في ",
    introRegexTester: "مختبر التعبيرات النمطية (Regex)",
    introStructure: "، وتنظيم بنية XML في ",
    introXmlFormatter: "منسق XML",
    introSuffix: ". تعمل جميع الأدوات محلياً داخل متصفحك عند دعم ذلك.",
    ctaAllTools: "كل الأدوات",
    ctaEditorTools: "أدوات المحرر",
    ctaTextAnalysis: "تحليل النصوص",
    ctaNotepadEditor: "محرر الملاحظات",
    sectionHeading: "أدوات مطورين مجانية عبر الإنترنت",
    toolTitles: {
      "json-formatter": "منسق JSON",
      "html-minifier": "ضاغط HTML",
      "css-beautifier": "مجمل CSS",
      "base64-codec": "مشفر/مفكك Base64",
      "regex-tester": "مختبر التعبيرات النمطية (Regex)",
      "xml-formatter": "منسق XML",
    },
  },
  id: {
    metaTitle: "Alat Pengembang Gratis – Utilitas JSON, HTML, CSS, XML, Base64 & Regex",
    metaDesc: "Gunakan alat pengembang gratis untuk memformat, memvalidasi, menyandikan, mendekode, dan mengoptimalkan kode. Gunakan format & validator JSON, kompresor HTML, pemercantik CSS, encoder/decoder Base64, encoder/decoder URL, penguji ekspresi reguler (Regex), dan format XML secara online.",
    pageTitle: "Alat Pengembang",
    introPrefix: "Alat pengembang kami menyediakan utilitas penting yang Anda butuhkan untuk pengembangan web, pemrograman, dan SEO teknis tanpa perlu menginstal perangkat lunak desktop. Anda dapat menggunakan ",
    introJsonFormatter: "Format JSON",
    introTighten: " untuk memformat dan memvalidasi JSON, menggunakan ",
    introHtmlMinifier: "Kompresor HTML",
    introTidy: " untuk memperkecil markup, menggunakan ",
    introCssBeautifier: "Pemercantik CSS",
    introEncode: " untuk merapikan gaya, menyandikan atau mendekode data melalui alat ",
    introBase64: "Base64",
    introAnd: " dan ",
    introUrl: "URL",
    introValidate: "، memvalidasi pola di ",
    introRegexTester: "Penguji Regex",
    introStructure: "، dan menyusun struktur XML di ",
    introXmlFormatter: "Format XML",
    introSuffix: ". Semua alat berjalan secara lokal di browser Anda jika didukung.",
    ctaAllTools: "Semua Alat",
    ctaEditorTools: "Alat Editor",
    ctaTextAnalysis: "Analisis Teks",
    ctaNotepadEditor: "Editor Catatan",
    sectionHeading: "Alat Pengembang Online Gratis",
    toolTitles: {
      "json-formatter": "Format JSON",
      "html-minifier": "Kompresor HTML",
      "css-beautifier": "Pemercantik CSS",
      "base64-codec": "Penyandi/Dekode Base64",
      "url-codec": "Penyandi/Dekode URL",
      "regex-tester": "Penguji Regex",
      "xml-formatter": "Format XML",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = canonicalUrlForPage(locale, "/tools/dev-tools");
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: t.metaTitle,
      description: t.metaDesc,
    },
  };
}

export default async function DevToolsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (p: string) => localizedPath(locale, p);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  const visibleIds = DEV_TOOLS_HUB_TOOL_IDS.filter((id) =>
    isToolVisibleInLocale(id, locale)
  );

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[min(100%,64rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgb(99_102_241/0.1),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgb(129_140_248/0.14),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <header className="mx-auto max-w-3xl lg:mx-0">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.pageTitle}
          </h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              {t.introPrefix}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/json-formatter" : L("/tools/dev-tools/json-formatter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introJsonFormatter}
              </Link>
              {t.introTighten}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/html-minifier" : L("/tools/dev-tools/html-minifier")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introHtmlMinifier}
              </Link>
              {t.introTidy}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/css-beautifier" : L("/tools/dev-tools/css-beautifier")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introCssBeautifier}
              </Link>
              {t.introEncode}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/base64-codec" : L("/tools/dev-tools/base64-codec")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introBase64}
              </Link>
              {t.introAnd}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/url-codec" : L("/tools/dev-tools/url-codec")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introUrl}
              </Link>
              {t.introValidate}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/regex-tester" : L("/tools/dev-tools/regex-tester")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introRegexTester}
              </Link>
              {t.introStructure}
              <Link
                href={(locale === "zh" || locale === "ko" || locale === "ar" || locale === "id") ? "/tools/dev-tools/xml-formatter" : L("/tools/dev-tools/xml-formatter")}
                className="font-semibold text-primary hover:underline"
              >
                {t.introXmlFormatter}
              </Link>
              {t.introSuffix}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href={L("/tools")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaAllTools}
            </Link>
            <Link
              href={L("/tools/editors")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaEditorTools}
            </Link>
            <Link
              href={L("/tools/text")}
              className="inline-flex items-center gap-2 rounded-full border border-border/90 bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/30 hover:bg-muted/40"
            >
              {t.ctaTextAnalysis}
            </Link>
            <Link
              href={L("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:bg-primary/90"
            >
              {t.ctaNotepadEditor}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </div>
        </header>

        <section className="mt-14" aria-labelledby="dev-tools-grid-heading">
          <h2
            id="dev-tools-grid-heading"
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.sectionHeading}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleIds.map((id) => (
              <DevToolCard
                key={id}
                id={id}
                href={
                  (locale === "zh" || locale === "ko" || locale === "ar" || locale === "id")
                    ? `/tools/dev-tools/${id}`
                    : L(`/tools/dev-tools/${id}`)
                }
                title={
                  t.toolTitles[id as keyof typeof t.toolTitles] ??
                  writingToolsMeta[id].h1
                }
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function DevToolCard({
  id,
  href,
  title,
}: {
  id: WritingToolId;
  href: string;
  title: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full min-h-[5rem] items-start gap-3 rounded-xl border border-indigo-200/80 bg-indigo-50/65 p-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-primary/35 hover:bg-indigo-50/90 hover:shadow-md dark:border-indigo-900/45 dark:bg-indigo-950/25 dark:hover:bg-indigo-950/35 dark:ring-white/[0.03]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-primary dark:from-indigo-400/15 dark:to-violet-400/10">
          <ToolIcon id={id} className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block font-medium text-foreground">{title}</span>
        </span>
      </Link>
    </li>
  );
}
