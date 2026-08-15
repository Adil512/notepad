import Link from "next/link";
import type { Metadata } from "next";
import { localizedPath } from "@/lib/i18n";
import { canonicalUrlForPage } from "@/lib/site";

const CONTENT = {
  en: {
    metaTitle: "Contact | Notepad.is",
    metaDesc: "Get in touch with the Notepad.is team for support, feedback, or inquiries.",
    title: "Contact Us",
    subtitle: "Have a question, feedback, or need support? Send us a message below and our team will get back to you shortly.",
    linkPrefix: "Looking for something without waiting? Browse the ",
    linkTools: "writing tools directory",
    linkMid: ", read the ",
    linkBlog: "Blog",
    linkOr: ", or open the ",
    linkNotepad: "online notepad",
    linkSuffix: ".",
    fieldName: "Full Name",
    placeholderName: "John Doe",
    fieldEmail: "Email Address",
    placeholderEmail: "hello@example.com",
    fieldMessage: "Your Message",
    placeholderMessage: "How can we help you today?",
    submitBtn: "Send Message",
  },
  ko: {
    metaTitle: "문의하기 | Notepad.is",
    metaDesc: "지원, 피드백 또는 문의 사항이 있으시면 Notepad.is 팀에 연락해 주세요.",
    title: "문의하기",
    subtitle: "질문, 피드백이 있거나 지원이 필요하신가요? 아래에 메시지를 보내주시면 팀에서 신속하게 연락드리겠습니다.",
    linkPrefix: "기다리지 않고 바로 확인하고 싶으신가요? ",
    linkTools: "글쓰기 도구 디렉터리",
    linkMid: "를 둘러보거나, ",
    linkBlog: "블로그",
    linkOr: "를 읽거나, ",
    linkNotepad: "온라인 메모장",
    linkSuffix: "을 열어보세요.",
    fieldName: "이름",
    placeholderName: "홍길동",
    fieldEmail: "이메일 주소",
    placeholderEmail: "hello@example.com",
    fieldMessage: "메시지",
    placeholderMessage: "오늘 어떤 도움이 필요하신가요?",
    submitBtn: "메시지 보내기",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: canonicalUrlForPage(locale, "/contact") },
    openGraph: {
      url: canonicalUrlForPage(locale, "/contact"),
      title: t.metaTitle,
      description: t.metaDesc,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const L = (path: string) => localizedPath(locale, path);
  const t = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.en;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 md:py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t.title}</h1>
        <p className="text-lg text-muted-foreground mb-4">
          {t.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          {t.linkPrefix}
          <Link
            href={L("/tools")}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.linkTools}
          </Link>
          {t.linkMid}
          <Link
            href={L("/blog")}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.linkBlog}
          </Link>
          {t.linkOr}
          <Link
            href={L("/")}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.linkNotepad}
          </Link>
          {t.linkSuffix}
        </p>

        <form className="space-y-6 bg-background border shadow-sm p-6 sm:p-8 rounded-xl">
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t.fieldName}
            </label>
            <input
              id="name"
              type="text"
              placeholder={t.placeholderName}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t.fieldEmail}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t.placeholderEmail}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t.fieldMessage}
            </label>
            <textarea
              id="message"
              placeholder={t.placeholderMessage}
              rows={6}
              required
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full sm:w-auto"
          >
            {t.submitBtn}
          </button>
        </form>
      </main>
    </div>
  );
}
