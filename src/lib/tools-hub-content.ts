/** Localized copy for the /tools hub page, per locale. */

export type ToolsHubCategoryCopy = {
  title: string;
  description: string;
};

export type ToolsHubCopy = {
  pageTitle: string;
  intro: string;
  ctaNotepad: string;
  chips: {
    writing: string;
    editors: string;
    text: string;
    devTools: string;
    excel: string;
  };
  categoryLabel: string;
  openCategory: string;
  /** Suffix used after the count, e.g. "12 tools". */
  toolsCountWord: string;
  categories: {
    writing: ToolsHubCategoryCopy;
    editors: ToolsHubCategoryCopy;
    text: ToolsHubCategoryCopy;
    devTools: ToolsHubCategoryCopy;
    excel: ToolsHubCategoryCopy;
    documents: ToolsHubCategoryCopy;
    data: ToolsHubCategoryCopy;
    format: ToolsHubCategoryCopy;
  };
  aboutTitle: string;
  aboutBody: string;
  footer: {
    before: string;
    linkLabel: string;
    after: string;
  };
};

const en: ToolsHubCopy = {
  pageTitle: "All Tools",
  intro: "Find all the professional tools that you can use for free, unlimited.",
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Writing tools",
    editors: "Editor tools",
    text: "Text analysis",
    devTools: "Developer tools",
    excel: "Excel converters",
  },
  categoryLabel: "Category",
  openCategory: "Open category",
  toolsCountWord: "tools",
  categories: {
    writing: {
      title: "Writing Tools",
      description:
        "Distraction-free writing, quick notes, focus sessions, goals, dictation, templates, snippets, and workflow helpers.",
    },
    editors: {
      title: "Editor Tools",
      description:
        "Markdown, code, JSON, and HTML editors for technical writing and structured content work.",
    },
    text: {
      title: "Text Analysis Tools",
      description:
        "Word, character, sentence, and paragraph counters with readability and comparison utilities.",
    },
    devTools: {
      title: "Developer Tools",
      description:
        "Formatters, minifiers, encoders, and regex utilities for day-to-day web development.",
    },
    excel: {
      title: "Excel Converter Tools",
      description:
        "Convert between Excel and CSV, JSON, XML, PDF, ODS, Google Sheets, and more spreadsheet formats.",
    },
    documents: {
      title: "Document Converter Tools",
      description:
        "Transform PDF, Word, TXT, Markdown, HTML, RTF, and PowerPoint files for editing and publishing.",
    },
    data: {
      title: "Data & Code Converter Tools",
      description:
        "Move data between JSON, CSV, XML, YAML, SQL, and plain text formats for API and data workflows.",
    },
    format: {
      title: "Text Utility Tools",
      description:
        "Case conversion, line operations, text cleanup, and compact formatting tools for quick text transformations.",
    },
  },
  aboutTitle: "About Our Free Online Tools",
  aboutBody:
    "Welcome to our complete collection of free online tools designed to simplify text editing, data conversion, document processing, and developer workflows.",
  footer: {
    before: "Looking for the classic canvas? The ",
    linkLabel: "Notepad Editor",
    after:
      " is still the full rich-text experience with tables, images, and formatting.",
  },
};

const af: ToolsHubCopy = {
  pageTitle: "Alle Gereedskap",
  intro:
    "Vind al die professionele gereedskap wat jy gratis en onbeperk kan gebruik.",
  ctaNotepad: "Notepad Aanlyn",
  chips: {
    writing: "Skryfgereedskap",
    editors: "Redigeergereedskap",
    text: "Teksontleding",
    devTools: "Ontwikkelaarsgereedskap",
    excel: "Excel-omskakelaars",
  },
  categoryLabel: "Kategorie",
  openCategory: "Maak kategorie oop",
  toolsCountWord: "gereedskap",
  categories: {
    writing: {
      title: "Skryfgereedskap",
      description:
        "Skryf sonder afleiding, vinnige notas, fokus sessies, doelwitte, diktaat, templates, snitte en werkvloeihulpmiddels.",
    },
    editors: {
      title: "Redigeergereedskap",
      description:
        "Markdown, kode, JSON en HTML-redigeerders vir tegniese skryfwerk en gestruktureerde inhoud.",
    },
    text: {
      title: "Teksontledingsgereedskap",
      description:
        "Woord-, karakter-, sin- en paragraaf-tellers met leesbaarheid- en vergelykingsnutsgoed.",
    },
    devTools: {
      title: "Ontwikkelaarsgereedskap",
      description:
        "Formateerders, minifiers, enkodeerders en regex-nutsgoed vir daaglikse webontwikkeling.",
    },
    excel: {
      title: "Excel-omskakelaargereedskap",
      description:
        "Skakel om tussen Excel en CSV, JSON, XML, PDF, ODS, Google Sheets en ander sigbladformate.",
    },
    documents: {
      title: "Dokument-omskakelaargereedskap",
      description:
        "Skakel PDF, Word, TXT, Markdown, HTML, RTF en PowerPoint-lêers om vir redigering en publikasie.",
    },
    data: {
      title: "Data & Kode-omskakelaargereedskap",
      description:
        "Beweeg data tussen JSON, CSV, XML, YAML, SQL en gewone teksformate vir API- en datavloei.",
    },
    format: {
      title: "Teksnutsgoed",
      description:
        "Hoofletter-omskakeling, lynoperasies, teks skoonmaak en kompakte formatering vir vinnige teksveranderings.",
    },
  },
  aboutTitle: "Oor Ons Gratis Aanlyn Gereedskap",
  aboutBody:
    "Welkom by ons volledige versameling gratis aanlyn gereedskap wat ontwerp is om teksredigering, data-omskakeling, dokumentverwerking en ontwikkelaarswerkvloeie makliker te maak.",
  footer: {
    before: "Looking for the classic canvas? The ",
    linkLabel: "Notepad Editor",
    after:
      " is still the full rich-text experience with tables, images, and formatting.",
  },
};

const sq: ToolsHubCopy = {
  pageTitle: "Të Gjitha Mjete",
  intro:
    "Gjeni të gjitha mjetet profesionale që mund t’i përdorni falas dhe pa kufi.",
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Mjete shkrimi",
    editors: "Mjete redaktimi",
    text: "Analizë teksti",
    devTools: "Mjete zhvilluesish",
    excel: "Konvertues Excel",
  },
  categoryLabel: "Kategoria",
  openCategory: "Hape kategorinë",
  toolsCountWord: "mjete",
  categories: {
    writing: {
      title: "Mjete Shkrimi",
      description:
        "Shkrim pa shpërqendrim, shënime të shpejta, sesione fokusi, qëllime, diktime, shabllone, copëza dhe ndihmës për rrjedhën e punës.",
    },
    editors: {
      title: "Mjete Redaktimi",
      description:
        "Redaktues Markdown, kodi, JSON dhe HTML për shkrim teknik dhe punë me përmbajtje të strukturuar.",
    },
    text: {
      title: "Mjete Analize Teksti",
      description:
        "Numërues fjalësh, shenjash, fjalish dhe paragrafesh me vegla lexueshmërie dhe krahasimi.",
    },
    devTools: {
      title: "Mjete Zhvilluesish",
      description:
        "Formues, minifikues, kodues dhe vegla regex për zhvillimin e përditshëm të uebit.",
    },
    excel: {
      title: "Mjete Konvertimi Excel",
      description:
        "Konverto mes Excel dhe CSV, JSON, XML, PDF, ODS, Google Sheets dhe formate të tjera tabelash.",
    },
    documents: {
      title: "Mjete Konvertimi Dokumentesh",
      description:
        "Transformo skedarë PDF, Word, TXT, Markdown, HTML, RTF dhe PowerPoint për redaktim dhe publikim.",
    },
    data: {
      title: "Mjete Konvertimi të të Dhënave & Kodit",
      description:
        "Zhvendos të dhëna mes JSON, CSV, XML, YAML, SQL dhe formate teksti të thjeshtë për API dhe rrjedha të dhënash.",
    },
    format: {
      title: "Mjete Ndihmëse Teksti",
      description:
        "Konvertim shkronjash, operacione rreshtash, pastrim teksti dhe vegla formatimi kompakt për transformime të shpejta të tekstit.",
    },
  },
  aboutTitle: "Rreth Mjeteve tona Falas Online",
  aboutBody:
    "Mirë se vini në koleksionin tonë të plotë të mjeteve falas online të dizajnuara për të thjeshtuar redaktimin e tekstit, konvertimin e të dhënave, përpunimin e dokumenteve dhe rrjedhat e punës së zhvilluesve.",
  footer: {
    before: "Po kërkon kanavacën klasike? ",
    linkLabel: "Notepad Editor",
    after:
      " është ende përvoja e plotë me tekst të pasur me tabela, imazhe dhe formatim.",
  },
};

const am: ToolsHubCopy = {
  pageTitle: "ሁሉም መሳሪያዎች",
  intro:
    "ሁሉንም ፕሮፌሽናል መሳሪያዎች በነጻ እና ያለ ገደብ መጠቀም የሚችሉትን ያግኙ።",
  ctaNotepad: "ኖትፓድ ኦንላይን",
  chips: {
    writing: "የጽሑፍ መሳሪያዎች",
    editors: "የማረሚያ መሳሪያዎች",
    text: "የጽሑፍ ትንተና",
    devTools: "የገንቢዎች መሳሪያዎች",
    excel: "ኤክሰል መቀየሪያዎች",
  },
  categoryLabel: "ምድብ",
  openCategory: "ምድቡን ክፈት",
  toolsCountWord: "መሳሪያዎች",
  categories: {
    writing: {
      title: "የጽሑፍ መሳሪያዎች",
      description:
        "ያለ ማዘናጋት ጽሑፍ፣ ፈጣን ማስታወሻዎች፣ የማተኮር ጊዜዎች፣ ግቦች፣ ዲክቴሽን፣ ቴምፕሌቶች፣ ቁርጥራጮች እና የስራ ፍሰት ረዳቶች።",
    },
    editors: {
      title: "የማረሚያ መሳሪያዎች",
      description:
        "ማርክዳውን፣ ኮድ፣ ጄሰን እና ኤችቲኤምኤል አርታዒዎች ለቴክኒካል ጽሑፍ እና የተዋቀረ ይዘት ስራ።",
    },
    text: {
      title: "የጽሑፍ ትንተና መሳሪያዎች",
      description:
        "የቃላት፣ ቁምፊዎች፣ አንቀጾች እና አንቀጾች ቆጣሪዎች ከንባብ ቀላልነት እና ንጽጽር መሳሪያዎች ጋር።",
    },
    devTools: {
      title: "የገንቢዎች መሳሪያዎች",
      description:
        "ፎርማተሮች፣ ሚኒፋየሮች፣ ኢንኮደሮች እና ሬጌክስ መሳሪያዎች ለዕለታዊ ድር ልማት።",
    },
    excel: {
      title: "ኤክሰል መቀየሪያ መሳሪያዎች",
      description:
        "በኤክሰል እና ሲኤስቪ፣ ጄሰን፣ ኤክስኤምኤል፣ ፒዲኤፍ፣ ኦዲኤስ፣ ጉግል ሉሆች እና ሌሎች ሉሆች ቅርጸቶች መካከል ይቀይሩ።",
    },
    documents: {
      title: "የሰነድ መቀየሪያ መሳሪያዎች",
      description:
        "ፒዲኤፍ፣ ዎርድ፣ ቲኤክስቲ፣ ማርክዳውን፣ ኤችቲኤምኤል፣ አርቲኤፍ እና ፓወርፖይንት ፋይሎችን ለማረም እና ለማተም ይለውጡ።",
    },
    data: {
      title: "የውሂብ እና ኮድ መቀየሪያ መሳሪያዎች",
      description:
        "ውሂብን በጄሰን፣ ሲኤስቪ፣ ኤክስኤምኤል፣ ያሜል፣ ኤስኪውኤል እና ተራ ጽሑፍ ቅርጸቶች መካከል ለኤፒአይ እና የውሂብ ሂደቶች ያንቀሳቅሱ።",
    },
    format: {
      title: "የጽሑፍ መገልገያ መሳሪያዎች",
      description:
        "የፊደል መቀየር፣ መስመር ስራዎች፣ ጽሑፍ ማጽዳት እና የታመቀ ቅርጸት መሳሪያዎች ለፈጣን የጽሑፍ ለውጦች።",
    },
  },
  aboutTitle: "ስለ ነጻ የኦንላይን መሳሪያዎቻችን",
  aboutBody:
    "ወደ የጽሑፍ ማረሚያ፣ የውሂብ መቀየር፣ የሰነድ ሂደት እና የገንቢዎች ስራዎችን ለማቃለል የተነደፉ ሙሉ የነጻ ኦንላይን መሳሪያዎች ስብስባችን እንኳን ደህና መጡ።",
  footer: {
    before: "ክላሲክ ካንቫስ እየፈለጉ ነው? ",
    linkLabel: "ኖትፓድ አርታዒ",
    after:
      " አሁንም ሙሉ ሀብታም-ጽሑፍ ተሞክሮ ከሰንጠረዦች፣ ምስሎች እና ቅርጸት ጋር ነው።",
  },
};

const ar: ToolsHubCopy = {
  pageTitle: "جميع الأدوات",
  intro:
    "اعثر على جميع الأدوات الاحترافية التي يمكنك استخدامها مجانًا وبدون أي حدود.",
  ctaNotepad: "المفكرة عبر الإنترنت",
  chips: {
    writing: "أدوات الكتابة",
    editors: "أدوات التحرير",
    text: "تحليل النصوص",
    devTools: "أدوات المطورين",
    excel: "محولات Excel",
  },
  categoryLabel: "الفئة",
  openCategory: "فتح الفئة",
  toolsCountWord: "أداة",
  categories: {
    writing: {
      title: "أدوات الكتابة",
      description:
        "كتابة خالية من التشتيت، وملاحظات سريعة، وجلسات تركيز، وأهداف، وإملاء صوتي، وقوالب، ومقتطفات، وأدوات مساعدة لسير العمل.",
    },
    editors: {
      title: "أدوات التحرير",
      description:
        "محررات Markdown وCode وJSON وHTML للكتابة التقنية والعمل على المحتوى المنظم.",
    },
    text: {
      title: "أدوات تحليل النصوص",
      description:
        "عدادات الكلمات والأحرف والجمل والفقرات مع أدوات قياس قابلية القراءة وأدوات المقارنة.",
    },
    devTools: {
      title: "أدوات المطورين",
      description:
        "أدوات التنسيق والتصغير والترميز وأدوات التعبيرات النمطية (Regex) للاستخدام اليومي في تطوير الويب.",
    },
    excel: {
      title: "أدوات تحويل Excel",
      description:
        "التحويل بين Excel وCSV وJSON وXML وPDF وODS وGoogle Sheets والمزيد من تنسيقات جداول البيانات.",
    },
    documents: {
      title: "أدوات تحويل المستندات",
      description:
        "تحويل ملفات PDF وWord وTXT وMarkdown وHTML وRTF وPowerPoint لأغراض التحرير والنشر.",
    },
    data: {
      title: "أدوات تحويل البيانات والأكواد",
      description:
        "نقل البيانات بين JSON وCSV وXML وYAML وSQL والنصوص العادية لتدفقات عمل واجهات البرمجة (API) والبيانات.",
    },
    format: {
      title: "أدوات النص المساعدة",
      description:
        "تحويل حالة الأحرف، وعمليات معالجة الأسطر، وتنظيف النصوص، وأدوات التنسيق المضغوط لإجراء تحويلات نصية سريعة.",
    },
  },
  aboutTitle: "حول أدواتنا المجانية عبر الإنترنت",
  aboutBody:
    "مرحبًا بك في مجموعتنا الكاملة من الأدوات المجانية عبر الإنترنت المصممة لتبسيط تحرير النصوص، وتحويل البيانات، ومعالجة المستندات، وسير عمل المطورين.",
  footer: {
    before: "هل تبحث عن المحرر الكلاسيكي؟ لا يزال ",
    linkLabel: "محرر المفكرة (Notepad Editor)",
    after:
      " يوفر تجربة تحرير نصوص غنية بالكامل مع الجداول والصور وخيارات التنسيق.",
  },
};

const hy: ToolsHubCopy = {
  pageTitle: "Բոլոր գործիքները",
  intro:
    "Գտեք բոլոր պրոֆեսիոնալ գործիքները, որոնք կարող եք օգտագործել անվճար և անսահմանափակ։",
  ctaNotepad: "Օնլայն նոթատետր",
  chips: {
    writing: "Գրելու գործիքներ",
    editors: "Խմբագրման գործիքներ",
    text: "Տեքստի վերլուծություն",
    devTools: "Ծրագրավորողների գործիքներ",
    excel: "Excel փոխակերպիչներ",
  },
  categoryLabel: "Կատեգորիա",
  openCategory: "Բացել կատեգորիան",
  toolsCountWord: "գործիք",
  categories: {
    writing: {
      title: "Գրելու գործիքներ",
      description:
        "Առանց շեղումների գրառում, արագ նշումներ, կենտրոնացման սեսիաներ, նպատակներ, ձայնային մուտքագրում, ձևանմուշներ, հատվածներ և աշխատանքային հոսքի օգնականներ։",
    },
    editors: {
      title: "Խմբագրման գործիքներ",
      description:
        "Markdown, կոդ, JSON և HTML խմբագրիչներ տեխնիկական գրելու և կառուցվածքային բովանդակության համար։",
    },
    text: {
      title: "Տեքստի վերլուծության գործիքներ",
      description:
        "Բառերի, նշանների, նախադասությունների և պարբերությունների հաշվիչներ՝ ընթեռնելիության և համեմատման գործիքներով։",
    },
    devTools: {
      title: "Ծրագրավորողների գործիքներ",
      description:
        "Ֆորմատավորիչներ, փոքրացուցիչներ, կոդավորիչներ և Regex գործիքներ՝ ամենօրյա վեբ ծրագրավորման համար։",
    },
    excel: {
      title: "Excel փոխակերպման գործիքներ",
      description:
        "Փոխակերպում Excel-ի և CSV, JSON, XML, PDF, ODS, Google Sheets և այլ աղյուսակային ձևաչափերի միջև։",
    },
    documents: {
      title: "Փաստաթղթերի փոխակերպման գործիքներ",
      description:
        "Փոխակերպում PDF, Word, TXT, Markdown, HTML, RTF և PowerPoint ֆայլերը՝ խմբագրման և հրապարակման համար։",
    },
    data: {
      title: "Տվյալների և կոդի փոխակերպման գործիքներ",
      description:
        "Տվյալների տեղափոխում JSON, CSV, XML, YAML, SQL և պարզ տեքստի ձևաչափերի միջև՝ API և տվյալների աշխատանքային հոսքերի համար։",
    },
    format: {
      title: "Տեքստային օգտակար գործիքներ",
      description:
        "Տառերի ձևափոխում, տողերի գործողություններ, տեքստի մաքրում և կոմպակտ ձևաչափման գործիքներ՝ արագ տեքստային փոփոխությունների համար։",
    },
  },
  aboutTitle: "Մեր անվճար օնլայն գործիքների մասին",
  aboutBody:
    "Բարի գալուստ մեր անվճար օնլայն գործիքների ամբողջական հավաքածու, որը նախատեսված է պարզեցնելու տեքստի խմբագրումը, տվյալների փոխակերպումը, փաստաթղթերի մշակումը և ծրագրավորման աշխատանքային հոսքերը։",
  footer: {
    before: "Փնտրո՞ւմ եք դասական միջավայրը։ ",
    linkLabel: "Notepad Editor",
    after:
      "-ը դեռևս ապահովում է լիարժեք rich-text փորձ՝ աղյուսակներով, պատկերներով և ձևաչափմամբ։",
  },
};

const ay: ToolsHubCopy = {
  pageTitle: "Taqi yänaka (herramientas)",
  intro:
    "Taqi profesional yänaka uñt’ama, ukanakax qhispiyata ukhamarak jan tukusiraki apnaqasispa.",
  ctaNotepad: "Onlayn notepad",
  chips: {
    writing: "Qillqañ yänaka",
    editors: "Editar yänaka",
    text: "Textu yatxatawi",
    devTools: "Desarrollador yänaka",
    excel: "Excel mayjt’irinaka",
  },
  categoryLabel: "Kategoriya",
  openCategory: "Kategoriya jist’araña",
  toolsCountWord: "yänaka",
  categories: {
    writing: {
      title: "Qillqañ yänaka",
      description:
        "Jan ch’iqiyata qillqañ, jank’a notanak luraña, concentración sesiones, metas, voz tuqi qillqaña, plantillanak, fragmentos ukhamarak irnaqawi thakhi yanapt’irinaka.",
    },
    editors: {
      title: "Editar yänaka",
      description:
        "Markdown, código, JSON ukhamarak HTML editar yänaka técnico qillqañataki ukhamarak estructurado contenido lurañataki.",
    },
    text: {
      title: "Textu yatxatawi yänaka",
      description:
        "Arunak, chimpunak, aruskipäwinaka ukhamarak parrafo jakhuwi yänaka, uñt’awi ukhamarak jikthaptawi yanapt’irinaka.",
    },
    devTools: {
      title: "Desarrollador yänaka",
      description:
        "Formato luririnaka, jisk’achirinaka, codificador yänaka ukhamarak Regex yanapt’irinaka, sapa uru web desarrollo lurañataki.",
    },
    excel: {
      title: "Excel mayjt’irinaka",
      description:
        "Excel ukhamarak CSV, JSON, XML, PDF, ODS, Google Sheets ukhamarak yaqha tabla formato mayjt’ayaña.",
    },
    documents: {
      title: "Documento mayjt’irinaka yänaka",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF ukhamarak PowerPoint archivonaka editar ukhamarak publicar lurañataki mayjt’ayaña.",
    },
    data: {
      title: "Datos ukhamarak código mayjt’irinaka",
      description:
        "JSON, CSV, XML, YAML, SQL ukhamarak plano text formato ukar datos mayjt’ayaña API ukhamarak datos irnaqawi thakhinaka.",
    },
    format: {
      title: "Textu yanapt’iri yänaka",
      description:
        "Mayjt’awi capital/minúscula, lineanak irnaqawi, textu q’umachaña ukhamarak compacta formato yänaka jank’a textu mayjt’ayañataki.",
    },
  },
  aboutTitle: "Jiwasan qhispiyata onlayn yänaka tuqita",
  aboutBody:
    "Qhispiyata onlayn yänaka taqi uñt’awi ukar katuqt’asiñani, ukax textu editar, datos mayjt’ayaña, documento irnaqawi ukhamarak desarrollador workflow lurawinaka jisk’achañataki wakicht’atawa.",
  footer: {
    before: "Clásico canvas thaqhasktati? ",
    linkLabel: "Notepad Editor",
    after:
      " ukax jichhakamax taqi rich-text experiencia uñacht’ayi, tabla, imagen ukhamarak formato ukampiwa.",
  },
};

const byLocale: Record<string, ToolsHubCopy> = {
  en,
  af,
  sq,
  am,
  ar,
  hy,
  ay,
};

/** Locales rendered right-to-left on the tools hub page. */
export const toolsHubRtlLocales = new Set(["ar", "ur", "fa", "he", "ps"]);

export function getToolsHubCopy(locale: string): ToolsHubCopy {
  return byLocale[locale] ?? en;
}
