/** Localized copy for the /tools/writing category page, per locale. */

import type { WritingProductivityToolId } from "@/lib/writing-tools-registry";

/** A piece of the intro paragraph: either plain text or an inline link. */
export type IntroSegment = { text: string } | { link: string; label: string };

export type WritingToolLabel = { h1: string; tagline: string };

export type WritingToolsCopy = {
  pageTitle: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Intro paragraph as ordered text/link segments. */
  intro: IntroSegment[];
  ctaAllTools: string;
  ctaNotepadEditor: string;
  experiencesHeading: string;
  utilitiesHeading: string;
  open: string;
  landings: {
    distractionFree: { title: string; description: string };
    quickNotes: { title: string; description: string };
  };
  /** Per-tool card overrides; falls back to the registry meta when absent. */
  toolLabels?: Partial<Record<WritingProductivityToolId, WritingToolLabel>>;
};

const en: WritingToolsCopy = {
  pageTitle: "Writing tools",
  metaTitle:
    "Best Writing Tools for Productivity – Focus Timer, Dictation, Templates & More",
  metaDescription:
    "Boost your writing productivity with powerful writing tools including Focus Timer, Writing Goals, Speech Dictation, Templates, Snippet Shelf and more",
  intro: [
    {
      text: "Our writing tools help you create, organize, and manage digital notes, content, and drafts in the browser. Start from a ",
    },
    { link: "/distraction-free-writer", label: "distraction-free writing mode" },
    { text: " or capture thoughts with " },
    { link: "/quick-notes", label: "quick notes" },
    { text: ", then layer on productivity helpers: a " },
    { link: "/tools/writing/focus-timer", label: "focus timer" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "speech-to-text dictation" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "writing goals" },
    { text: ", and " },
    { link: "/tools/writing/templates", label: "content templates" },
    {
      text: ". Whether you blog, draft for work, or study, these utilities improve focus and throughput without leaving Notepad.is.",
    },
  ],
  ctaAllTools: "All tools",
  ctaNotepadEditor: "Notepad editor",
  experiencesHeading: "Writing experiences",
  utilitiesHeading: "Free Online Writing Tools",
  open: "Open",
  landings: {
    distractionFree: {
      title: "Distraction-free writer",
      description:
        "A calm full-screen canvas for deep work—no clutter, just your words.",
    },
    quickNotes: {
      title: "Quick notes",
      description:
        "Lightweight capture for ideas and lists when you do not need the full editor.",
    },
  },
};

const af: WritingToolsCopy = {
  pageTitle: "Skryfgereedskap",
  intro: [
    {
      text: "Ons skryfgereedskap help jou om digitale notas, inhoud en konsepte in die blaaier te skep, te organiseer en te bestuur. Begin met ’n ",
    },
    { link: "/distraction-free-writer", label: "skryfmodus sonder afleiding" },
    { text: " of vang gedagtes vinnig met " },
    { link: "/quick-notes", label: "vinnige notas" },
    { text: ", en voeg dan produktiwiteitshulpmiddels by: ’n " },
    { link: "/tools/writing/focus-timer", label: "fokus-tydhouer" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "spraak-na-teks diktaat" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "skryfdoelwitte" },
    { text: " en " },
    { link: "/tools/writing/templates", label: "inhoudtemplates" },
    {
      text: ". Of jy nou ’n blog skryf, werkskonsepte maak of studeer — hierdie nutsgoed verbeter jou fokus en produktiwiteit sonder om Notepad.is te verlaat.",
    },
  ],
  ctaAllTools: "Alle gereedskap",
  ctaNotepadEditor: "Notepad-redigeerder",
  experiencesHeading: "Skryfervarings",
  utilitiesHeading: "Nutsgoed",
  open: "Maak oop",
  landings: {
    distractionFree: {
      title: "Skryf sonder afleiding",
      description:
        "’n rustige volskermdoek vir diep werk — geen deurmekaarspul nie, net jou woorde.",
    },
    quickNotes: {
      title: "Vinnige notas",
      description:
        "Liggewig vaslegging vir idees en lyste wanneer jy nie die volle redigeerder nodig het nie.",
    },
  },
  toolLabels: {
    "focus-timer": {
      h1: "Fokus-tydhouer & skryf",
      tagline: "Pomodoro + zen-redigeerder + plaaslike statistieke",
    },
    "goal-tracker": {
      h1: "Skryfdoelwitte",
      tagline: "Teikens, vordering, mylpale",
    },
    "speech-dictation": {
      h1: "Spraakdiktaat",
      tagline: "Stem na teks in die blaaier",
    },
    templates: {
      h1: "Templates",
      tagline: "Een-klik beginstrukture",
    },
    "snippet-shelf": {
      h1: "Snippersrak",
      tagline: "Herbruikbare teks, kitskopie",
    },
    "reading-mode": {
      h1: "Leesmodus",
      tagline: "Rustige leesuitleg",
    },
    "print-note": {
      h1: "Druk nota",
      tagline: "Drukvriendelike uitleg",
    },
    "share-note": {
      h1: "Deel nota",
      tagline: "Voer uit & deel plaaslik",
    },
    "import-export": {
      h1: "Invoer & uitvoer",
      tagline: "Lêers op een plek",
    },
  },
};

const ko: WritingToolsCopy = {
  pageTitle: "글쓰기 도구",
  metaTitle: "생산성을 위한 최고의 글쓰기 도구 – 집중 타이머, 받아쓰기, 템플릿 등",
  metaDescription: "집중 타이머, 글쓰기 목표, 음성 받아쓰기, 템플릿, 스니펫 셸프 등 강력한 글쓰기 도구로 글쓰기 생산성을 높이세요.",
  intro: [
    {
      text: "저희 글쓰기 도구는 브라우저에서 디지털 메모, 콘텐츠, 초안을 작성하고 정리하며 관리할 수 있도록 돕습니다. ",
    },
    { link: "/distraction-free-writer", label: "방해 없는 글쓰기 모드" },
    { text: "로 시작하거나 " },
    { link: "/quick-notes", label: "빠른 메모" },
    { text: "로 아이디어를 기록한 다음, 생산성 도우미를 추가해 보세요: " },
    { link: "/tools/writing/focus-timer", label: "집중 타이머" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "음성 받아쓰기" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "글쓰기 목표" },
    { text: ", 그리고 " },
    { link: "/tools/writing/templates", label: "콘텐츠 템플릿" },
    {
      text: ". 블로그 작성, 업무 초안 작성, 학습 등 모든 작업에서 Notepad.is를 벗어나지 않고도 집중력과 효율성을 향상시킬 수 있습니다.",
    },
  ],
  ctaAllTools: "모든 도구",
  ctaNotepadEditor: "메모장 에디터",
  experiencesHeading: "글쓰기 경험",
  utilitiesHeading: "무료 온라인 글쓰기 도구",
  open: "열기",
  landings: {
    distractionFree: {
      title: "방해 없는 글쓰기",
      description:
        "깊은 작업을 위해 오직 당신의 글에만 집중할 수 있는 깔끔한 전체 화면 캔버스입니다.",
    },
    quickNotes: {
      title: "빠른 메모",
      description:
        "전체 에디터가 필요하지 않을 때 아이디어와 목록을 캡처할 수 있는 가벼운 메모 기능입니다.",
    },
  },
  toolLabels: {
    "focus-timer": {
      h1: "집중 타이머 & 글쓰기",
      tagline: "포모도로 + 젠 에디터 + 로컬 통계",
    },
    "goal-tracker": {
      h1: "글쓰기 목표",
      tagline: "목표 설정, 진행률, 이정표",
    },
    "speech-dictation": {
      h1: "음성 받아쓰기",
      tagline: "브라우저에서 실시간 음성을 텍스트로",
    },
    templates: {
      h1: "템플릿",
      tagline: "한 번의 클릭으로 시작하는 문서 구조",
    },
    "snippet-shelf": {
      h1: "스니펫 보관함",
      tagline: "자주 쓰는 텍스트 저장 및 빠른 복사",
    },
    "reading-mode": {
      h1: "읽기 모드",
      tagline: "집중하기 좋은 조용한 읽기 레이아웃",
    },
    "print-note": {
      h1: "메모 인쇄",
      tagline: "인쇄하기 편리한 레이아웃",
    },
    "share-note": {
      h1: "메모 공유",
      tagline: "메모를 즉시 내보내고 공유하기",
    },
    "import-export": {
      h1: "가져오기 & 내보내기",
      tagline: "간편한 메모 파일 관리",
    },
  },
};

const zh: WritingToolsCopy = {
  pageTitle: "写作工具",
  metaTitle: "提高效率的极佳写作工具 – 专注计时器、语音听写、模板等",
  metaDescription: "使用专注计时器、写作目标、语音听写、内容模板、便签架等强大的写作工具，提升您的写作效率。",
  intro: [
    {
      text: "我们的写作工具可帮助您在浏览器中创建、组织和管理数字笔记、内容和草稿。您可以从 ",
    },
    { link: "/distraction-free-writer", label: "无干扰写作模式" },
    { text: " 开始，或者使用 " },
    { link: "/quick-notes", label: "快速笔记" },
    { text: " 捕捉灵感，然后添加提高效率的辅助工具：" },
    { link: "/tools/writing/focus-timer", label: "专注计时器" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "语音听写" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "写作目标" },
    { text: " 和 " },
    { link: "/tools/writing/templates", label: "内容模板" },
    {
      text: "。无论您是写博客、撰写工作草稿还是学习，这些工具都能在不离开 Notepad.is 的情况下提高您的专注度和产出。",
    },
  ],
  ctaAllTools: "所有工具",
  ctaNotepadEditor: "记事本编辑器",
  experiencesHeading: "写作体验",
  utilitiesHeading: "免费在线写作工具",
  open: "打开",
  landings: {
    distractionFree: {
      title: "无干扰写作",
      description:
        "安静的全屏画布，专为深度工作设计——没有任何杂念，只有您的文字。",
    },
    quickNotes: {
      title: "快速笔记",
      description:
        "在不需要完整编辑器时，轻量级捕捉想法和清单。",
    },
  },
  toolLabels: {
    "focus-timer": {
      h1: "专注计时器 & 写作",
      tagline: "番茄钟 + 禅宗编辑器 + 本地统计数据",
    },
    "goal-tracker": {
      h1: "写作目标",
      tagline: "设定目标、跟踪进度、里程碑",
    },
    "speech-dictation": {
      h1: "语音听写",
      tagline: "浏览器内语音转文字",
    },
    templates: {
      h1: "模板",
      tagline: "一键生成内容结构",
    },
    "snippet-shelf": {
      h1: "便签架",
      tagline: "复用文本，快速复制",
    },
    "reading-mode": {
      h1: "阅读模式",
      tagline: "安静的阅读排版布局",
    },
    "print-note": {
      h1: "打印笔记",
      tagline: "适合打印的排版格式",
    },
    "share-note": {
      h1: "分享笔记",
      tagline: "导出并在本地分享",
    },
    "import-export": {
      h1: "导入与导出",
      tagline: "文件一站式管理",
    },
  },
};

const ar: WritingToolsCopy = {
  pageTitle: "أدوات الكتابة",
  metaTitle: "أدوات كتابة ممتازة لزيادة الإنتاجية - مؤقت التركيز، الإملاء الصوتي، القوالب والمزيد",
  metaDescription: "عزز إنتاجيتك في الكتابة باستخدام أدوات قوية مثل مؤقت التركيز، وتتبع أهداف الكتابة، والإملاء الصوتي، وقوالب المحتوى، ورف القصاصات والمزيد.",
  intro: [
    {
      text: "تساعدك أدوات الكتابة لدينا على إنشاء وتنظيم وإدارة ملاحظاتك الرقمية ومحتواك ومسوداتك مباشرة في متصفحك. يمكنك البدء بـ ",
    },
    { link: "/distraction-free-writer", label: "وضع كاتب خالٍ من المشتتات" },
    { text: " أو استخدام " },
    { link: "/quick-notes", label: "ملاحظات سريعة" },
    { text: " لالتقاط أفكارك بشكل سريع، ثم إضافة أدوات مساعدة لزيادة الإنتاجية مثل: " },
    { link: "/tools/writing/focus-timer", label: "مؤقت التركيز" },
    { text: ", " },
    { link: "/tools/writing/speech-dictation", label: "الإملاء الصوتي" },
    { text: ", " },
    { link: "/tools/writing/goal-tracker", label: "تتبع الأهداف" },
    { text: " و " },
    { link: "/tools/writing/templates", label: "قوالب المحتوى" },
    {
      text: ". سواء كنت تدون، أو تكتب مسودات للعمل، أو تدرس، فإن هذه الأدوات مصممة لتعزيز تركيزك وإنتاجيتك دون مغادرة Notepad.is.",
    },
  ],
  ctaAllTools: "كل الأدوات",
  ctaNotepadEditor: "محرر الملاحظات",
  experiencesHeading: "تجارب الكتابة",
  utilitiesHeading: "أدوات كتابة مجانية عبر الإنترنت",
  open: "فتح",
  landings: {
    distractionFree: {
      title: "كتابة خالية من المشتتات",
      description:
        "مساحة كاملة هادئة مصممة للعمل العميق والتركيز - لا مشتتات، فقط كلماتك.",
    },
    quickNotes: {
      title: "ملاحظات سريعة",
      description:
        "التقط الأفكار والقوائم بسرعة عندما لا تحتاج إلى محرر ملاحظات كامل.",
    },
  },
  toolLabels: {
    "focus-timer": {
      h1: "مؤقت التركيز والكتابة",
      tagline: "تقنية البومودورو + محرر الزن + إحصاءات محلية",
    },
    "goal-tracker": {
      h1: "أهداف الكتابة",
      tagline: "حدد الأهداف، وتتبع تقدمك، وحقق الإنجازات",
    },
    "speech-dictation": {
      h1: "الإملاء الصوتي",
      tagline: "تحويل الصوت إلى نص داخل المتصفح",
    },
    templates: {
      h1: "القوالب",
      tagline: "إنشاء هياكل المحتوى بنقرة واحدة",
    },
    "snippet-shelf": {
      h1: "رف القصاصات",
      tagline: "إعادة استخدام النصوص ونسخها بسرعة",
    },
    "reading-mode": {
      h1: "وضع القراءة",
      tagline: "تنسيق قراءة نظيف ومريح للعين",
    },
    "print-note": {
      h1: "طباعة الملاحظة",
      tagline: "تنسيق جاهز ومحسن للطباعة الورقية",
    },
    "share-note": {
      h1: "مشاركة الملاحظة",
      tagline: "تصدير ومشاركة الملاحظات محلياً",
    },
    "import-export": {
      h1: "استيراد وتصدير",
      tagline: "إدارة ملفات الملاحظات في مكان واحد",
    },
  },
};

const byLocale: Record<string, WritingToolsCopy> = {
  en,
  af,
  ko,
  zh,
  ar,
};

export function getWritingToolsCopy(locale: string): WritingToolsCopy {
  return byLocale[locale] ?? en;
}
