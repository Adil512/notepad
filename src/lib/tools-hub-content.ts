/** Localized copy for the /tools hub page, per locale. */

export type ToolsHubCategoryCopy = {
  title: string;
  description: string;
};

export type ToolsHubCopy = {
  pageTitle: string;
  intro: string;
  /** When set, intro is rendered with a bold link around `label`. */
  introLink?: {
    before: string;
    label: string;
    after: string;
    href?: string;
  };
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
  /**
   * Optional count phrase template using the `{count}` placeholder, e.g.
   * "tools {count}". When present it overrides the default `{count} {word}`
   * layout for languages whose counter does not follow "number + word".
   */
  toolsCountTemplate?: string;
  /**
   * Optional full count-phrase builder for languages with grammatical number
   * (e.g. Russian/Slavic plurals). Takes precedence over the template/word.
   */
  formatToolsCount?: (count: number) => string;
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
  pageTitle: "Notepad & Writing Tools",
  intro:
    "Find all the professional Notepad writing tools that you can use for free, unlimited.",
  introLink: {
    before: "Find all the professional ",
    label: "Notepad",
    after: " writing tools that you can use for free, unlimited.",
    href: "https://notepad.is/",
  },
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

const az: ToolsHubCopy = {
  pageTitle: "Bütün alətlər",
  intro:
    "Pulsuz və limitsiz istifadə edə biləcəyiniz bütün peşəkar alətləri tapın.",
  ctaNotepad: "Onlayn Notepad",
  chips: {
    writing: "Yazı alətləri",
    editors: "Redaktor alətləri",
    text: "Mətn analizi",
    devTools: "Tərtibatçı alətləri",
    excel: "Excel çeviriciləri",
  },
  categoryLabel: "Kateqoriya",
  openCategory: "Kateqoriyanı açın",
  toolsCountWord: "alət",
  categories: {
    writing: {
      title: "Yazı alətləri",
      description:
        "Diqqəti yayındırmayan yazı, sürətli qeydlər, fokus sessiyaları, məqsədlər, diktə, şablonlar, qısa parçalar və iş axını köməkçiləri.",
    },
    editors: {
      title: "Redaktor alətləri",
      description:
        "Markdown, kod, JSON və HTML redaktorları texniki yazı və strukturlaşdırılmış məzmun işi üçün.",
    },
    text: {
      title: "Mətn analizi alətləri",
      description:
        "Söz, simvol, cümlə və paraqraf sayğacları, oxunaqlılıq və müqayisə vasitələri ilə birlikdə.",
    },
    devTools: {
      title: "Tərtibatçı alətləri",
      description:
        "Formatlayıcılar, kiçildicilər, kodlaşdırıcılar və regex vasitələri gündəlik veb inkişaf üçün.",
    },
    excel: {
      title: "Excel çeviriciləri",
      description:
        "Excel ilə CSV, JSON, XML, PDF, ODS, Google Sheets və digər cədvəl formatları arasında çevirmə.",
    },
    documents: {
      title: "Sənəd çevirici alətləri",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF və PowerPoint fayllarını redaktə və nəşr üçün çevirmək.",
    },
    data: {
      title: "Məlumat və kod çevirici alətləri",
      description:
        "API və məlumat iş axınları üçün JSON, CSV, XML, YAML, SQL və sadə mətn formatları arasında məlumat ötürmə.",
    },
    format: {
      title: "Mətn yardımçı alətləri",
      description:
        "Böyük/kiçik hərf çevirmə, sətir əməliyyatları, mətn təmizləmə və sürətli mətn çevirmələri üçün kompakt format alətləri.",
    },
  },
  aboutTitle: "Pulsuz onlayn alətlərimiz haqqında",
  aboutBody:
    "Mətn redaktəsi, məlumat çevirmə, sənəd işlənməsi və tərtibatçı iş axınlarını asanlaşdırmaq üçün hazırlanmış pulsuz onlayn alətlər kolleksiyamıza xoş gəlmisiniz.",
  footer: {
    before: "Klassik redaktor axtarırsınız? ",
    linkLabel: "Notepad Editor",
    after:
      " hələ də cədvəllər, şəkillər və formatlama ilə tam rich-text təcrübəsi təqdim edir.",
  },
};

const eu: ToolsHubCopy = {
  pageTitle: "Tresna guztiak",
  intro:
    "Aurki itzazu doan eta mugarik gabe erabil ditzakezun tresna profesional guztiak.",
  ctaNotepad: "Online Notepad-a",
  chips: {
    writing: "Idazketa tresnak",
    editors: "Editore tresnak",
    text: "Testu analisia",
    devTools: "Garatzaile tresnak",
    excel: "Excel bihurgailuak",
  },
  categoryLabel: "Kategoria",
  openCategory: "Kategoria ireki",
  toolsCountWord: "tresna",
  categories: {
    writing: {
      title: "Idazketa tresnak",
      description:
        "Distrakziorik gabeko idazketa, ohar azkarrak, kontzentrazio saioak, helburuak, diktaketa, txantiloiak, zatiak eta lan-fluxu laguntzaileak.",
    },
    editors: {
      title: "Editore tresnak",
      description:
        "Markdown, kodea, JSON eta HTML editoreak idazketa teknikorako eta eduki egituraturako lanetarako.",
    },
    text: {
      title: "Testu analisi tresnak",
      description:
        "Hitz, karaktere, esaldi eta paragrafo kontagailuak, irakurgarritasun eta konparazio tresnekin.",
    },
    devTools: {
      title: "Garatzaile tresnak",
      description:
        "Formateatzaileak, txikigailuak, kodetzaileak eta regex utilitateak eguneroko web garapenerako.",
    },
    excel: {
      title: "Excel bihurgailu tresnak",
      description:
        "Excel eta CSV, JSON, XML, PDF, ODS, Google Sheets eta beste kalkulu-orri formatuen artean bihurtzeko.",
    },
    documents: {
      title: "Dokumentu bihurgailu tresnak",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF eta PowerPoint fitxategiak editatzeko eta argitaratzeko bihurtu.",
    },
    data: {
      title: "Datu eta kode bihurgailu tresnak",
      description:
        "JSON, CSV, XML, YAML, SQL eta testu arrunt formatuen artean datuak mugitzea API eta datu lan-fluxuetarako.",
    },
    format: {
      title: "Testu utilitate tresnak",
      description:
        "Maiuskula/minuskula bihurketa, lerro eragiketak, testu garbiketa eta formatu trinkoko tresnak testu aldaketa azkarrak egiteko.",
    },
  },
  aboutTitle: "Gure doako online tresnei buruz",
  aboutBody:
    "Ongi etorri gure doako online tresnen bilduma osora, testu edizioa, datu bihurketa, dokumentu prozesamendua eta garatzaile lan-fluxuak errazteko diseinatua.",
  footer: {
    before: "Ohiko lan-eremua bilatzen ari zara? ",
    linkLabel: "Notepad Editor",
    after:
      " oraindik ere testu aberatsaren esperientzia osoa eskaintzen du, taulak, irudiak eta formatuekin.",
  },
};

const bn: ToolsHubCopy = {
  pageTitle: "সব টুলস",
  intro:
    "সব পেশাদার টুল খুঁজে নিন যেগুলো আপনি বিনামূল্যে এবং সীমাহীনভাবে ব্যবহার করতে পারেন।",
  ctaNotepad: "অনলাইন নোটপ্যাড",
  chips: {
    writing: "লেখার টুলস",
    editors: "এডিটর টুলস",
    text: "টেক্সট বিশ্লেষণ",
    devTools: "ডেভেলপার টুলস",
    excel: "এক্সেল কনভার্টার",
  },
  categoryLabel: "ক্যাটাগরি",
  openCategory: "ক্যাটাগরি খুলুন",
  toolsCountWord: "টি টুল",
  categories: {
    writing: {
      title: "লেখার টুলস",
      description:
        "বিঘ্নহীন লেখা, দ্রুত নোট, ফোকাস সেশন, লক্ষ্য নির্ধারণ, ভয়েস ডিকটেশন, টেমপ্লেট, স্নিপেট এবং ওয়ার্কফ্লো সহায়তা।",
    },
    editors: {
      title: "এডিটর টুলস",
      description:
        "Markdown, কোড, JSON এবং HTML এডিটর প্রযুক্তিগত লেখা এবং স্ট্রাকচারড কনটেন্ট কাজের জন্য।",
    },
    text: {
      title: "টেক্সট বিশ্লেষণ টুলস",
      description:
        "শব্দ, অক্ষর, বাক্য এবং অনুচ্ছেদ গণনা টুল, সাথে পড়ার সহজতা এবং তুলনা সুবিধা।",
    },
    devTools: {
      title: "ডেভেলপার টুলস",
      description:
        "ফরম্যাটার, মিনিফায়ার, এনকোডার এবং Regex টুলস দৈনন্দিন ওয়েব ডেভেলপমেন্টের জন্য।",
    },
    excel: {
      title: "এক্সেল কনভার্টার টুলস",
      description:
        "Excel এবং CSV, JSON, XML, PDF, ODS, Google Sheets এবং আরও স্প্রেডশিট ফরম্যাটের মধ্যে রূপান্তর করুন।",
    },
    documents: {
      title: "ডকুমেন্ট কনভার্টার টুলস",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF এবং PowerPoint ফাইল সম্পাদনা ও প্রকাশনার জন্য রূপান্তর করুন।",
    },
    data: {
      title: "ডাটা ও কোড কনভার্টার টুলস",
      description:
        "API এবং ডাটা ওয়ার্কফ্লোর জন্য JSON, CSV, XML, YAML, SQL এবং সাধারণ টেক্সট ফরম্যাটের মধ্যে ডাটা স্থানান্তর করুন।",
    },
    format: {
      title: "টেক্সট ইউটিলিটি টুলস",
      description:
        "বড় হাতা/ছোট হাতা পরিবর্তন, লাইন অপারেশন, টেক্সট পরিষ্কার এবং দ্রুত টেক্সট পরিবর্তনের জন্য কম্প্যাক্ট ফরম্যাটিং টুলস।",
    },
  },
  aboutTitle: "আমাদের ফ্রি অনলাইন টুলস সম্পর্কে",
  aboutBody:
    "আমাদের ফ্রি অনলাইন টুলসের সম্পূর্ণ সংগ্রহে স্বাগতম, যা টেক্সট এডিটিং, ডাটা কনভার্সন, ডকুমেন্ট প্রসেসিং এবং ডেভেলপার ওয়ার্কফ্লো সহজ করার জন্য ডিজাইন করা হয়েছে।",
  footer: {
    before: "ক্লাসিক ক্যানভাস খুঁজছেন? ",
    linkLabel: "Notepad Editor",
    after:
      " এখনও টেবিল, ছবি এবং ফরম্যাটিং সহ পূর্ণ রিচ-টেক্সট অভিজ্ঞতা দেয়।",
  },
};

const bs: ToolsHubCopy = {
  pageTitle: "Svi alati",
  intro:
    "Pronađite sve profesionalne alate koje možete koristiti besplatno i neograničeno.",
  ctaNotepad: "Online Notepad",
  chips: {
    writing: "Alati za pisanje",
    editors: "Alati za uređivanje",
    text: "Analiza teksta",
    devTools: "Alati za programere",
    excel: "Excel konverteri",
  },
  categoryLabel: "Kategorija",
  openCategory: "Otvori kategoriju",
  toolsCountWord: "alata",
  categories: {
    writing: {
      title: "Alati za pisanje",
      description:
        "Pisanje bez ometanja, brze bilješke, sesije fokusiranja, ciljevi, diktiranje, predlošci, isječci i alati za pomoć u radu.",
    },
    editors: {
      title: "Alati za uređivanje",
      description:
        "Markdown, kod, JSON i HTML uređivači za tehničko pisanje i rad sa strukturiranim sadržajem.",
    },
    text: {
      title: "Alati za analizu teksta",
      description:
        "Brojači riječi, znakova, rečenica i pasusa sa alatima za čitljivost i poređenje.",
    },
    devTools: {
      title: "Alati za programere",
      description:
        "Alati za formatiranje, minifikaciju, kodiranje i regex za svakodnevni web razvoj.",
    },
    excel: {
      title: "Excel konverter alati",
      description:
        "Pretvaranje između Excel, CSV, JSON, XML, PDF, ODS, Google Sheets i drugih formata tabela.",
    },
    documents: {
      title: "Alati za konverziju dokumenata",
      description:
        "Pretvaranje PDF, Word, TXT, Markdown, HTML, RTF i PowerPoint fajlova za uređivanje i objavljivanje.",
    },
    data: {
      title: "Alati za konverziju podataka i koda",
      description:
        "Prenos podataka između JSON, CSV, XML, YAML, SQL i običnog teksta za API i tokove podataka.",
    },
    format: {
      title: "Alati za tekstualne usluge",
      description:
        "Promjena velikih/malih slova, operacije nad linijama, čišćenje teksta i alati za kompaktno formatiranje za brze izmjene teksta.",
    },
  },
  aboutTitle: "O našim besplatnim online alatima",
  aboutBody:
    "Dobrodošli u našu kompletnu kolekciju besplatnih online alata dizajniranih da pojednostave uređivanje teksta, konverziju podataka, obradu dokumenata i radne tokove programera.",
  footer: {
    before: "Tražite klasično radno okruženje? ",
    linkLabel: "Notepad Editor",
    after:
      " i dalje nudi potpuno rich-text iskustvo sa tabelama, slikama i formatiranjem.",
  },
};

const bg: ToolsHubCopy = {
  pageTitle: "Всички инструменти",
  intro:
    "Намерете всички професионални инструменти, които можете да използвате безплатно и неограничено.",
  ctaNotepad: "Онлайн Notepad",
  chips: {
    writing: "Инструменти за писане",
    editors: "Инструменти за редактиране",
    text: "Анализ на текст",
    devTools: "Инструменти за разработчици",
    excel: "Excel конвертори",
  },
  categoryLabel: "Категория",
  openCategory: "Отвори категорията",
  toolsCountWord: "инструмента",
  categories: {
    writing: {
      title: "Инструменти за писане",
      description:
        "Писане без разсейване, бързи бележки, сесии за концентрация, цели, диктовка, шаблони, откъси и помощни инструменти за работен процес.",
    },
    editors: {
      title: "Инструменти за редактиране",
      description:
        "Редактори за Markdown, код, JSON и HTML за техническо писане и работа със структурирано съдържание.",
    },
    text: {
      title: "Инструменти за анализ на текст",
      description:
        "Броячи на думи, символи, изречения и абзаци с инструменти за четимост и сравнение.",
    },
    devTools: {
      title: "Инструменти за разработчици",
      description:
        "Форматиращи инструменти, минификатори, кодиращи инструменти и Regex помощни средства за ежедневна уеб разработка.",
    },
    excel: {
      title: "Инструменти за конвертиране на Excel",
      description:
        "Конвертиране между Excel и CSV, JSON, XML, PDF, ODS, Google Sheets и други формати на таблици.",
    },
    documents: {
      title: "Инструменти за конвертиране на документи",
      description:
        "Преобразуване на PDF, Word, TXT, Markdown, HTML, RTF и PowerPoint файлове за редактиране и публикуване.",
    },
    data: {
      title: "Инструменти за конвертиране на данни и код",
      description:
        "Преместване на данни между JSON, CSV, XML, YAML, SQL и обикновен текст за API и работни процеси с данни.",
    },
    format: {
      title: "Инструменти за текстови операции",
      description:
        "Промяна на главни/малки букви, операции с редове, почистване на текст и компактно форматиране за бързи текстови трансформации.",
    },
  },
  aboutTitle: "За нашите безплатни онлайн инструменти",
  aboutBody:
    "Добре дошли в нашата пълна колекция от безплатни онлайн инструменти, създадени да улеснят редактирането на текст, конвертирането на данни, обработката на документи и работните процеси на разработчици.",
  footer: {
    before: "Търсите класическа работна среда? ",
    linkLabel: "Notepad Editor",
    after:
      " все още предлага пълно rich-text изживяване с таблици, изображения и форматиране.",
  },
};

const my: ToolsHubCopy = {
  pageTitle: "ကိရိယာအားလုံး",
  intro:
    "သင် အခမဲ့နှင့် အကန့်အသတ်မရှိ အသုံးပြုနိုင်သော ပရော်ဖက်ရှင်နယ် ကိရိယာအားလုံးကို ရှာဖွေပါ။",
  ctaNotepad: "အွန်လိုင်း Notepad",
  chips: {
    writing: "ရေးသားရေး ကိရိယာများ",
    editors: "တည်းဖြတ်ရေး ကိရိယာများ",
    text: "စာသား ခွဲခြမ်းစိတ်ဖြာခြင်း",
    devTools: "Developer ကိရိယာများ",
    excel: "Excel ပြောင်းလဲကိရိယာများ",
  },
  categoryLabel: "အမျိုးအစား",
  openCategory: "အမျိုးအစားဖွင့်ရန်",
  toolsCountWord: "ကိရိယာ",
  toolsCountTemplate: "ကိရိယာ {count} ခု",
  categories: {
    writing: {
      title: "ရေးသားရေး ကိရိယာများ",
      description:
        "အာရုံမပြန့်ပွားစေသော ရေးသားခြင်း၊ အမြန်မှတ်စုများ၊ အာရုံစိုက် အလုပ်ချိန်များ၊ ရည်မှန်းချက်များ၊ အသံဖြင့် ရေးသားခြင်း၊ template များ၊ snippet များနှင့် အလုပ်လုပ်ဆောင်မှု အထောက်အကူများ။",
    },
    editors: {
      title: "တည်းဖြတ်ရေး ကိရိယာများ",
      description:
        "Markdown, code, JSON နှင့် HTML တည်းဖြတ်ကိရိယာများသည် နည်းပညာရေးသားမှုနှင့် ဖွဲ့စည်းထားသော အကြောင်းအရာအလုပ်များအတွက် ဖြစ်သည်။",
    },
    text: {
      title: "စာသား ခွဲခြမ်းစိတ်ဖြာ ကိရိယာများ",
      description:
        "စကားလုံး၊ အက္ခရာ၊ ဝါကျနှင့် အပိုဒ်များကို ရေတွက်နိုင်သော၊ ဖတ်ရှုရလွယ်ကူမှုနှင့် နှိုင်းယှဉ်မှု ကိရိယာများပါဝင်သည်။",
    },
    devTools: {
      title: "Developer ကိရိယာများ",
      description:
        "နေ့စဉ် ဝဘ်ဖွံ့ဖြိုးရေးအတွက် format ပြုလုပ်ခြင်း၊ အရွယ်လျှော့ခြင်း၊ encoding လုပ်ခြင်းနှင့် regex ကိရိယာများ။",
    },
    excel: {
      title: "Excel ပြောင်းလဲကိရိယာများ",
      description:
        "Excel နှင့် CSV, JSON, XML, PDF, ODS, Google Sheets နှင့် အခြား spreadsheet format များအကြား ပြောင်းလဲနိုင်သည်။",
    },
    documents: {
      title: "စာရွက်စာတမ်း ပြောင်းလဲကိရိယာများ",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF နှင့် PowerPoint ဖိုင်များကို တည်းဖြတ်ရန်နှင့် ထုတ်ဝေရန်အတွက် ပြောင်းလဲနိုင်သည်။",
    },
    data: {
      title: "ဒေတာနှင့် ကုဒ် ပြောင်းလဲကိရိယာများ",
      description:
        "API နှင့် data workflow များအတွက် JSON, CSV, XML, YAML, SQL နှင့် plain text format များအကြား ဒေတာများကို ပြောင်းရွှေ့နိုင်သည်။",
    },
    format: {
      title: "စာသား အသုံးဝင် ကိရိယာများ",
      description:
        "စာလုံးအကြီး/အသေး ပြောင်းလဲခြင်း၊ လိုင်းလုပ်ဆောင်မှုများ၊ စာသားသန့်ရှင်းရေးနှင့် အမြန်စာသားပြောင်းလဲမှုများအတွက် compact format ကိရိယာများ။",
    },
  },
  aboutTitle: "ကျွန်ုပ်တို့၏ အခမဲ့အွန်လိုင်း ကိရိယာများအကြောင်း",
  aboutBody:
    "စာသားတည်းဖြတ်ခြင်း၊ ဒေတာပြောင်းလဲခြင်း၊ စာရွက်စာတမ်းလုပ်ငန်းများနှင့် developer workflow များကို လွယ်ကူစေရန် ဒီဇိုင်းထုတ်ထားသော အခမဲ့အွန်လိုင်း ကိရိယာစုစည်းမှုသို့ ကြိုဆိုပါသည်။",
  footer: {
    before: "ဂန္တဝင် canvas ကိုရှာနေပါသလား? ",
    linkLabel: "Notepad Editor",
    after:
      " သည် ဇယားများ၊ ပုံများနှင့် formatting ပါဝင်သော full rich-text အတွေ့အကြုံကို ဆက်လက်ပေးနေဆဲဖြစ်သည်။",
  },
};

const ca: ToolsHubCopy = {
  pageTitle: "Totes les eines",
  intro:
    "Troba totes les eines professionals que pots utilitzar de manera gratuïta i il·limitada.",
  ctaNotepad: "Bloc de notes en línia",
  chips: {
    writing: "Eines d’escriptura",
    editors: "Eines d’edició",
    text: "Anàlisi de text",
    devTools: "Eines per a desenvolupadors",
    excel: "Convertidors d’Excel",
  },
  categoryLabel: "Categoria",
  openCategory: "Obre la categoria",
  toolsCountWord: "eines",
  categories: {
    writing: {
      title: "Eines d’escriptura",
      description:
        "Escriptura sense distraccions, notes ràpides, sessions de concentració, objectius, dictat, plantilles, fragments i ajudants de flux de treball.",
    },
    editors: {
      title: "Eines d’edició",
      description:
        "Editors de Markdown, codi, JSON i HTML per a escriptura tècnica i treball amb contingut estructurat.",
    },
    text: {
      title: "Eines d’anàlisi de text",
      description:
        "Comptadors de paraules, caràcters, frases i paràgrafs amb eines de llegibilitat i comparació.",
    },
    devTools: {
      title: "Eines per a desenvolupadors",
      description:
        "Formatadors, minificadors, codificadors i utilitats regex per al desenvolupament web diari.",
    },
    excel: {
      title: "Eines de conversió d’Excel",
      description:
        "Converteix entre Excel i CSV, JSON, XML, PDF, ODS, Google Sheets i altres formats de full de càlcul.",
    },
    documents: {
      title: "Eines de conversió de documents",
      description:
        "Transforma fitxers PDF, Word, TXT, Markdown, HTML, RTF i PowerPoint per a l’edició i la publicació.",
    },
    data: {
      title: "Eines de conversió de dades i codi",
      description:
        "Mou dades entre formats JSON, CSV, XML, YAML, SQL i text pla per a APIs i fluxos de treball de dades.",
    },
    format: {
      title: "Eines d’utilitat de text",
      description:
        "Conversió de majúscules i minúscules, operacions de línies, neteja de text i eines de format compacte per a transformacions ràpides de text.",
    },
  },
  aboutTitle: "Sobre les nostres eines en línia gratuïtes",
  aboutBody:
    "Benvingut a la nostra col·lecció completa d’eines en línia gratuïtes dissenyades per simplificar l’edició de text, la conversió de dades, el processament de documents i els fluxos de treball de desenvolupament.",
  footer: {
    before: "Busques el llenç clàssic? ",
    linkLabel: "L’Editor de Notepad",
    after:
      " encara ofereix una experiència de text enriquit completa amb taules, imatges i format.",
  },
};

/** Russian plural: 1 → инструмент, 2–4 → инструмента, else → инструментов. */
function russianToolsCount(count: number): string {
  const mod100 = count % 100;
  const mod10 = count % 10;
  let word: string;
  if (mod100 >= 11 && mod100 <= 14) word = "инструментов";
  else if (mod10 === 1) word = "инструмент";
  else if (mod10 >= 2 && mod10 <= 4) word = "инструмента";
  else word = "инструментов";
  return `${count} ${word}`;
}

const ru: ToolsHubCopy = {
  pageTitle: "Все инструменты",
  intro:
    "Найдите все профессиональные инструменты, которые вы можете использовать бесплатно и без ограничений.",
  ctaNotepad: "Онлайн блокнот",
  chips: {
    writing: "Инструменты для письма",
    editors: "Инструменты редактора",
    text: "Анализ текста",
    devTools: "Инструменты разработчика",
    excel: "Конвертеры Excel",
  },
  categoryLabel: "Категория",
  openCategory: "Открыть категорию",
  toolsCountWord: "инструментов",
  formatToolsCount: russianToolsCount,
  categories: {
    writing: {
      title: "Инструменты для письма",
      description:
        "Письмо без отвлечений, быстрые заметки, сессии концентрации, цели, диктовка, шаблоны, фрагменты и помощники рабочего процесса.",
    },
    editors: {
      title: "Инструменты редактора",
      description:
        "Редакторы Markdown, кода, JSON и HTML для технического письма и работы со структурированным контентом.",
    },
    text: {
      title: "Инструменты анализа текста",
      description:
        "Счетчики слов, символов, предложений и абзацев с инструментами читабельности и сравнения.",
    },
    devTools: {
      title: "Инструменты разработчика",
      description:
        "Форматтеры, минификаторы, кодировщики и Regex-инструменты для повседневной веб-разработки.",
    },
    excel: {
      title: "Инструменты конвертации Excel",
      description:
        "Конвертация между Excel и CSV, JSON, XML, PDF, ODS, Google Sheets и другими форматами таблиц.",
    },
    documents: {
      title: "Инструменты конвертации документов",
      description:
        "Преобразование файлов PDF, Word, TXT, Markdown, HTML, RTF и PowerPoint для редактирования и публикации.",
    },
    data: {
      title: "Инструменты конвертации данных и кода",
      description:
        "Перемещение данных между форматами JSON, CSV, XML, YAML, SQL и обычным текстом для API и рабочих процессов данных.",
    },
    format: {
      title: "Текстовые утилиты",
      description:
        "Преобразование регистра, операции со строками, очистка текста и компактное форматирование для быстрых преобразований текста.",
    },
  },
  aboutTitle: "О наших бесплатных онлайн-инструментах",
  aboutBody:
    "Добро пожаловать в нашу полную коллекцию бесплатных онлайн-инструментов, предназначенных для упрощения редактирования текста, преобразования данных, обработки документов и рабочих процессов разработчиков.",
  footer: {
    before: "Ищете классическое рабочее пространство? ",
    linkLabel: "Notepad Editor",
    after:
      " по-прежнему предлагает полноценный rich-text опыт с таблицами, изображениями и форматированием.",
  },
};

const zh: ToolsHubCopy = {
  pageTitle: "所有工具",
  intro: "查找所有可以免费无限使用的专业工具。",
  ctaNotepad: "在线记事本",
  chips: {
    writing: "写作工具",
    editors: "编辑工具",
    text: "文本分析",
    devTools: "开发者工具",
    excel: "Excel 转换工具",
  },
  categoryLabel: "分类",
  openCategory: "打开分类",
  toolsCountWord: "个工具",
  toolsCountTemplate: "{count} 个工具",
  categories: {
    writing: {
      title: "写作工具",
      description:
        "无干扰写作、快速笔记、专注会话、目标设定、语音输入、模板、代码片段和工作流程辅助工具。",
    },
    editors: {
      title: "编辑工具",
      description:
        "Markdown、代码、JSON 和 HTML 编辑器，用于技术写作和结构化内容处理。",
    },
    text: {
      title: "文本分析工具",
      description:
        "字数、字符、句子和段落统计工具，并提供可读性和对比功能。",
    },
    devTools: {
      title: "开发者工具",
      description:
        "格式化工具、压缩工具、编码工具以及正则表达式工具，用于日常网页开发。",
    },
    excel: {
      title: "Excel 转换工具",
      description:
        "在 Excel 与 CSV、JSON、XML、PDF、ODS、Google Sheets 等多种表格格式之间进行转换。",
    },
    documents: {
      title: "文档转换工具",
      description:
        "将 PDF、Word、TXT、Markdown、HTML、RTF 和 PowerPoint 文件转换为可编辑和发布的格式。",
    },
    data: {
      title: "数据与代码转换工具",
      description:
        "在 JSON、CSV、XML、YAML、SQL 和纯文本格式之间移动数据，用于 API 和数据工作流。",
    },
    format: {
      title: "文本实用工具",
      description:
        "大小写转换、行操作、文本清理和紧凑格式化工具，用于快速文本处理。",
    },
  },
  aboutTitle: "关于我们的免费在线工具",
  aboutBody:
    "欢迎使用我们完整的免费在线工具集合，旨在简化文本编辑、数据转换、文档处理和开发者工作流程。",
  footer: {
    before: "在寻找经典编辑界面吗？",
    linkLabel: "Notepad 编辑器",
    after:
      "仍然提供完整的富文本体验，包括表格、图片和格式化功能。",
  },
};

const fr: ToolsHubCopy = {
  pageTitle: "Tous les outils",
  intro:
    "Trouvez tous les outils professionnels que vous pouvez utiliser gratuitement et sans limite.",
  ctaNotepad: "Bloc-notes en ligne",
  chips: {
    writing: "Outils d’écriture",
    editors: "Outils d’édition",
    text: "Analyse de texte",
    devTools: "Outils pour développeurs",
    excel: "Convertisseurs Excel",
  },
  categoryLabel: "Catégorie",
  openCategory: "Ouvrir la catégorie",
  toolsCountWord: "outils",
  categories: {
    writing: {
      title: "Outils d’écriture",
      description:
        "Écriture sans distraction, notes rapides, sessions de concentration, objectifs, dictée, modèles, extraits et outils d’aide au flux de travail.",
    },
    editors: {
      title: "Outils d’édition",
      description:
        "Éditeurs Markdown, code, JSON et HTML pour l’écriture technique et le travail de contenu structuré.",
    },
    text: {
      title: "Outils d’analyse de texte",
      description:
        "Compteurs de mots, caractères, phrases et paragraphes avec outils de lisibilité et de comparaison.",
    },
    devTools: {
      title: "Outils pour développeurs",
      description:
        "Formateurs, minificateurs, encodeurs et outils regex pour le développement web quotidien.",
    },
    excel: {
      title: "Outils de conversion Excel",
      description:
        "Convertir entre Excel et CSV, JSON, XML, PDF, ODS, Google Sheets et d’autres formats de feuilles de calcul.",
    },
    documents: {
      title: "Outils de conversion de documents",
      description:
        "Transformer des fichiers PDF, Word, TXT, Markdown, HTML, RTF et PowerPoint pour l’édition et la publication.",
    },
    data: {
      title: "Outils de conversion de données et de code",
      description:
        "Déplacer des données entre les formats JSON, CSV, XML, YAML, SQL et texte brut pour les API et les flux de données.",
    },
    format: {
      title: "Outils utilitaires de texte",
      description:
        "Conversion de casse, opérations sur les lignes, nettoyage de texte et outils de formatage compact pour des transformations rapides de texte.",
    },
  },
  aboutTitle: "À propos de nos outils en ligne gratuits",
  aboutBody:
    "Bienvenue dans notre collection complète d’outils en ligne gratuits conçus pour simplifier l’édition de texte, la conversion de données, le traitement de documents et les flux de travail des développeurs.",
  footer: {
    before: "Vous cherchez le canevas classique ? ",
    linkLabel: "L’éditeur Notepad",
    after:
      " offre toujours une expérience riche en texte avec tableaux, images et mise en forme.",
  },
};

const ko: ToolsHubCopy = {
  pageTitle: "메모장 및 글쓰기 도구",
  intro:
    "제한 없이 무료로 사용할 수 있는 모든 전문적인 메모장 글쓰기 도구를 찾아보세요.",
  introLink: {
    before: "제한 없이 무료로 사용할 수 있는 모든 전문적인 ",
    label: "메모장",
    after: " 글쓰기 도구를 찾아보세요.",
    href: "https://notepad.is/ko/",
  },
  ctaNotepad: "온라인 메모장",
  chips: {
    writing: "글쓰기 도구",
    editors: "에디터 도구",
    text: "텍스트 분석",
    devTools: "개발자 도구",
    excel: "Excel 변환기",
  },
  categoryLabel: "카테고리",
  openCategory: "카테고리 열기",
  toolsCountWord: "개 도구",
  categories: {
    writing: {
      title: "글쓰기 도구",
      description:
        "집중을 방해하지 않는 글쓰기, 빠른 메모, 집중 세션, 목표 설정, 음성 받아쓰기, 템플릿, 스니펫 및 워크플로 도우미.",
    },
    editors: {
      title: "에디터 도구",
      description:
        "기술 문서 작성 및 구조화된 콘텐츠 작업을 위한 Markdown, 코드, JSON 및 HTML 에디터.",
    },
    text: {
      title: "텍스트 분석 도구",
      description:
        "가독성 및 비교 유틸리티가 포함된 단어, 문자, 문장 및 단락 수 계산기.",
    },
    devTools: {
      title: "개발자 도구",
      description:
        "일반적인 웹 개발 작업을 위한 포맷터, 미니파이어, 인코더 및 정규식(Regex) 유틸리티.",
    },
    excel: {
      title: "Excel 변환 도구",
      description:
        "Excel과 CSV, JSON, XML, PDF, ODS, Google Sheets 및 기타 스프레드시트 형식 간 변환.",
    },
    documents: {
      title: "문서 변환 도구",
      description:
        "편집 및 게시를 위해 PDF, Word, TXT, Markdown, HTML, RTF 및 PowerPoint 파일 변환.",
    },
    data: {
      title: "데이터 및 코드 변환 도구",
      description:
        "API 및 데이터 워크플로를 위해 JSON, CSV, XML, YAML, SQL 및 일반 텍스트 형식 간 데이터 이동.",
    },
    format: {
      title: "텍스트 유틸리티 도구",
      description:
        "빠른 텍스트 변환을 위한 대소문자 변환, 줄 작업, 텍스트 정리 및 컴팩트한 포맷팅 도구.",
    },
  },
  aboutTitle: "무료 온라인 도구 소개",
  aboutBody:
    "텍스트 편집, 데이터 변환, 문서 처리 및 개발자 워크플로를 단순화하도록 설계된 다양한 무료 온라인 도구를 만나보세요.",
  footer: {
    before: "클래식 캔버스를 찾고 계신가요? ",
    linkLabel: "메모장 에디터",
    after:
      "는 여전히 표, 이미지, 서식을 포함한 모든 서식 있는 텍스트(Rich-Text) 편집 환경을 제공합니다.",
  },
};

const id: ToolsHubCopy = {
  pageTitle: "Alat Catatan & Menulis",
  intro:
    "Temukan semua alat menulis Catatan profesional yang dapat Anda gunakan secara gratis dan tanpa batas.",
  introLink: {
    before: "Temukan semua alat menulis ",
    label: "Catatan",
    after: " profesional yang dapat Anda gunakan secara gratis dan tanpa batas.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Catatan Online",
  chips: {
    writing: "Alat Menulis",
    editors: "Alat Editor",
    text: "Analisis Teks",
    devTools: "Alat Pengembang",
    excel: "Konverter Excel",
  },
  categoryLabel: "Kategori",
  openCategory: "Buka kategori",
  toolsCountWord: "alat",
  categories: {
    writing: {
      title: "Alat Menulis",
      description:
        "Menulis bebas gangguan, catatan cepat, sesi fokus, target menulis, dikte suara, templat, potongan teks, dan asisten alur kerja.",
    },
    editors: {
      title: "Alat Editor",
      description:
        "Editor Markdown, kode, JSON, dan HTML untuk penulisan teknis dan konten terstruktur.",
    },
    text: {
      title: "Alat Analisis Teks",
      description:
        "Penghitung kata, karakter, kalimat, dan paragraf dengan alat keterbacaan dan perbandingan teks.",
    },
    devTools: {
      title: "Alat Pengembang",
      description:
        "Pemformat, pemampat (minify), penyandi (encoder), dan utilitas regex untuk pengembangan web sehari-hari.",
    },
    excel: {
      title: "Alat Konverter Excel",
      description:
        "Konversi antara Excel dan CSV, JSON, XML, PDF, ODS, Google Sheets, dan format spreadsheet lainnya.",
    },
    documents: {
      title: "Alat Konverter Dokumen",
      description:
        "Ubah file PDF, Word, TXT, Markdown, HTML, RTF, dan PowerPoint untuk penyuntingan dan penerbitan.",
    },
    data: {
      title: "Alat Konverter Data & Kode",
      description:
        "Pindahkan data antara format JSON, CSV, XML, YAML, SQL, and teks biasa untuk alur kerja API dan data.",
    },
    format: {
      title: "Alat Utilitas Teks",
      description:
        "Konversi huruf besar/kecil, operasi baris, pembersihan teks, dan format ringkas untuk transformasi teks cepat.",
    },
  },
  aboutTitle: "Tentang Alat Online Gratis Kami",
  aboutBody:
    "Selamat datang di koleksi lengkap alat online gratis kami yang dirancang untuk menyederhanakan penyuntingan teks, konversi data, pemrosesan dokumen, dan alur kerja pengembang.",
  footer: {
    before: "Mencari kanvas klasik? ",
    linkLabel: "Editor Catatan",
    after:
      " tetap menyajikan pengalaman teks kaya (rich-text) lengkap dengan tabel, gambar, dan pemformatan.",
  },
};

const ceb: ToolsHubCopy = {
  pageTitle: "Mga Himan sa Pagsulat ug Notepad",
  intro:
    "Pangitaa ang tanang propesyonal nga mga himan sa pagsulat sa Notepad nga mahimo nimong magamit nga libre, walay kutub.",
  introLink: {
    before: "Pangitaa ang tanang propesyonal nga ",
    label: "Notepad",
    after: " nga mga himan sa pagsulat nga mahimo nimong magamit nga libre, walay kutub.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Mga himan sa pagsulat",
    editors: "Mga himan sa editor",
    text: "Pagtuki sa teksto",
    devTools: "Mga himan sa developer",
    excel: "Mga konverter sa Excel",
  },
  categoryLabel: "Kategorya",
  openCategory: "Ablihi ang kategorya",
  toolsCountWord: "himan",
  categories: {
    writing: {
      title: "Mga Himan sa Pagsulat",
      description:
        "Pagsulat nga walay makabalda, dali nga mga nota, mga sesyon sa focus, mga tumong, dictation, mga templat, mga snippet, ug mga tabang sa workflow.",
    },
    editors: {
      title: "Mga Himan sa Editor",
      description:
        "Mga editor sa Markdown, code, JSON, ug HTML para sa teknikal nga pagsulat ug structured nga mga sulod.",
    },
    text: {
      title: "Mga Himan sa Pagtuki sa Teksto",
      description:
        "Mga counter sa pulong, karakter, sentensya, ug parapo nga adunay mga kapuslanan sa pagbasa ug pagtandi.",
    },
    devTools: {
      title: "Mga Himan sa Developer",
      description:
        "Mga formatter, minifier, encoder, ug regex nga mga utility para sa adlaw-adlaw nga web development.",
    },
    excel: {
      title: "Mga Himan sa Konverter sa Excel",
      description:
        "Pag-convert tali sa Excel ug CSV, JSON, XML, PDF, ODS, Google Sheets, ug uban pang mga format sa spreadsheet.",
    },
    documents: {
      title: "Mga Himan sa Konverter sa Dokumento",
      description:
        "I-transform ang mga PDF, Word, TXT, Markdown, HTML, RTF, ug PowerPoint nga mga file para sa pag-edit ug pagmantala.",
    },
    data: {
      title: "Mga Himan sa Data & Code Converter",
      description:
        "Ibalhin ang data tali sa JSON, CSV, XML, YAML, SQL, ug yano nga mga format sa teksto para sa API ug data workflows.",
    },
    format: {
      title: "Mga Himan sa Teksto nga Utility",
      description:
        "Pagbalhin sa case sa teksto, mga operasyon sa linya, paglimpyo sa teksto, ug compact nga mga himan sa pag-format para sa dali nga pagbag-o sa teksto.",
    },
  },
  aboutTitle: "Bahin sa Atong Libreng Online nga mga Himan",
  aboutBody:
    "Welcome sa among kompleto nga koleksyon sa libreng online nga mga himan nga gidisenyo aron pasyohon ang pag-edit sa teksto, pag-convert sa data, pagproseso sa dokumento, ug mga workflow sa developer.",
  footer: {
    before: "Nangita sa klasiko nga canvas? Ang ",
    linkLabel: "Editor sa Notepad",
    after:
      " mao gihapon ang bug-os nga rich-text nga kasinatian nga adunay mga lamesa, mga imahe, ug pag-format.",
  },
};

const hr: ToolsHubCopy = {
  pageTitle: "Notepad i alati za pisanje",
  intro:
    "Pronađite sve profesionalne Notepad alate za pisanje koje možete koristiti besplatno i neograničeno.",
  introLink: {
    before: "Pronađite sve profesionalne ",
    label: "Notepad",
    after: " alate za pisanje koje možete koristiti besplatno i neograničeno.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad na mreži",
  chips: {
    writing: "Alati za pisanje",
    editors: "Urednički alati",
    text: "Analiza teksta",
    devTools: "Razvojni alati",
    excel: "Excel pretvarači",
  },
  categoryLabel: "Kategorija",
  openCategory: "Otvori kategoriju",
  toolsCountWord: "alati",
  categories: {
    writing: {
      title: "Alati za pisanje",
      description:
        "Pisanje bez ometanja, brze bilješke, fokusirane sesije, ciljevi, diktat, predlošci, isječci i pomoćnici za tijek rada.",
    },
    editors: {
      title: "Urednički alati",
      description:
        "Markdown, kod, JSON i HTML urednici za tehničko pisanje i rad s strukturiranim sadržajem.",
    },
    text: {
      title: "Alati za analizu teksta",
      description:
        "Brojači riječi, znakova, rečenica i odlomaka s alatima za čitljivost i usporedbu.",
    },
    devTools: {
      title: "Razvojni alati",
      description:
        "Formatatori, minifikatori, koderi i regex uslužni alati za svakodnevni web razvoj.",
    },
    excel: {
      title: "Alati za pretvorbu Excela",
      description:
        "Pretvorite između Excela i CSV, JSON, XML, PDF, ODS, Google Sheets i drugih formata proračunskih tablica.",
    },
    documents: {
      title: "Alati za pretvorbu dokumenata",
      description:
        "Pretvorite PDF, Word, TXT, Markdown, HTML, RTF i PowerPoint datoteke za uređivanje i objavljivanje.",
    },
    data: {
      title: "Alati za pretvorbu podataka i koda",
      description:
        "Premjestite podatke između JSON, CSV, XML, YAML, SQL i običnih tekstualnih formata za API i podatkovne tijekove rada.",
    },
    format: {
      title: "Uslužni tekstualni alati",
      description:
        "Pretvorba velikih i malih slova, operacije s linijama, čišćenje teksta i kompaktni alati za oblikovanje za brze transformacije teksta.",
    },
  },
  aboutTitle: "O našim besplatnim online alatima",
  aboutBody:
    "Dobrodošli u našu cjelovitu kolekciju besplatnih online alata dizajniranih za pojednostavljenje uređivanja teksta, pretvorbe podataka, obrade dokumenata i razvojnih tijekova rada.",
  footer: {
    before: "Tražite klasično platno? ",
    linkLabel: "Urednik Notepada",
    after:
      " i dalje nudi potpuno iskustvo bogatog teksta s tablicama, slikama i oblikovanjem.",
  },
};

const cs: ToolsHubCopy = {
  pageTitle: "Nástroje pro Poznámkový blok a psaní",
  intro:
    "Najděte všechny profesionální nástroje na psaní v Poznámkovém bloku, které můžete používat zdarma a neomezeně.",
  introLink: {
    before: "Najděte všechny profesionální nástroje na psaní v ",
    label: "Poznámkovém bloku",
    after: ", které můžete používat zdarma a neomezeně.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Poznámkový blok online",
  chips: {
    writing: "Nástroje pro psaní",
    editors: "Editory",
    text: "Analýza textu",
    devTools: "Vývojářské nástroje",
    excel: "Převodníky Excel",
  },
  categoryLabel: "Kategorie",
  openCategory: "Otevřít kategorii",
  toolsCountWord: "nástroje",
  categories: {
    writing: {
      title: "Nástroje pro psaní",
      description:
        "Psaní bez rozptylování, rychlé poznámky, soustředěná sezení, cíle, diktování, šablony, úryvky a pomocníci pro pracovní postupy.",
    },
    editors: {
      title: "Editory",
      description:
        "Editory Markdown, kódu, JSON a HTML pro technické psaní a práci se strukturovaným obsahem.",
    },
    text: {
      title: "Nástroje pro analýzu textu",
      description:
        "Počítadla slov, znaků, vět a odstavců s nástroji pro čitelnost a porovnávání.",
    },
    devTools: {
      title: "Vývojářské nástroje",
      description:
        "Formátovače, minifikátory, kodéry a regex nástroje pro každodenní vývoj webu.",
    },
    excel: {
      title: "Nástroje pro převod Excelu",
      description:
        "Převod mezi formáty Excel, CSV, JSON, XML, PDF, ODS, Google Tabulky a dalšími tabulkovými formáty.",
    },
    documents: {
      title: "Nástroje pro převod dokumentů",
      description:
        "Převod souborů PDF, Word, TXT, Markdown, HTML, RTF a PowerPoint pro úpravy a publikování.",
    },
    data: {
      title: "Nástroje pro převod dat a kódu",
      description:
        "Přenos dat mezi formáty JSON, CSV, XML, YAML, SQL a prostým textem pro rozhraní API a datové toky.",
    },
    format: {
      title: "Užitečné textové nástroje",
      description:
        "Převod velikosti písma, řádkové operace, čištění textu a kompaktní formátovací nástroje pro rychlé úpravy textu.",
    },
  },
  aboutTitle: "O našich bezplatných online nástrojích",
  aboutBody:
    "Vítejte v naší kompletní sbírce bezplatných online nástrojů navržených pro zjednodušení úprav textu, převodu dat, zpracování dokumentů a vývojářských pracovních postupů.",
  footer: {
    before: "Hledáte klasické plátno? ",
    linkLabel: "Editor Poznámkového bloku",
    after:
      " stále nabízí plnohodnotné úpravy formátovaného textu s tabulkami, obrázky a formátováním.",
  },
};

const da: ToolsHubCopy = {
  pageTitle: "Notepad & skriveværktøjer",
  intro:
    "Find alle de professionelle Notepad skriveværktøjer, som du kan bruge gratis, ubegrænset.",
  introLink: {
    before: "Find alle de professionelle ",
    label: "Notepad",
    after: " skriveværktøjer, som du kan bruge gratis, ubegrænset.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Skriveværktøjer",
    editors: "Editor-værktøjer",
    text: "Tekstanalyse",
    devTools: "Udviklerværktøjer",
    excel: "Excel-konvertere",
  },
  categoryLabel: "Kategori",
  openCategory: "Åbn kategori",
  toolsCountWord: "værktøjer",
  categories: {
    writing: {
      title: "Skriveværktøjer",
      description:
        "Distraktionsfri skrivning, hurtige noter, fokussessioner, mål, diktering, skabeloner, uddrag og workflow-hjælpere.",
    },
    editors: {
      title: "Editor-værktøjer",
      description:
        "Markdown-, kode-, JSON- og HTML-editorer til teknisk skrivning og struktureret indholdsarbejde.",
    },
    text: {
      title: "Tekstanalyseværktøjer",
      description:
        "Ord-, tegn-, sætnings- og afsnitstællere med læsbarheds- og sammenligningsværktøjer.",
    },
    devTools: {
      title: "Udviklerværktøjer",
      description:
        "Formateringsværktøjer, minimeringsværktøjer, kodere og regex-værktøjer til daglig webudvikling.",
    },
    excel: {
      title: "Excel-konverteringsværktøjer",
      description:
        "Konverter mellem Excel og CSV, JSON, XML, PDF, ODS, Google Sheets og flere regnearksformater.",
    },
    documents: {
      title: "Dokumentkonverteringsværktøjer",
      description:
        "Transformer PDF-, Word-, TXT-, Markdown-, HTML-, RTF- og PowerPoint-filer til redigering og udgivelse.",
    },
    data: {
      title: "Data- & kodekonverteringsværktøjer",
      description:
        "Flyt data mellem JSON-, CSV-, XML-, YAML-, SQL- og almindelige tekstformater til API- og dataworkflows.",
    },
    format: {
      title: "Tekstværktøjer",
      description:
        "Versal- og minuskelkonvertering, linjeoperationer, tekstoprydning og kompakte formateringsværktøjer til hurtige teksttransformationer.",
    },
  },
  aboutTitle: "Om vores gratis online værktøjer",
  aboutBody:
    "Velkommen til vores komplette samling af gratis online værktøjer designet til at forenkle tekstredigering, datakonvertering, dokumentbehandling og udviklerworkflows.",
  footer: {
    before: "Leder du efter det klassiske lærred? ",
    linkLabel: "Notepad-editoren",
    after:
      " er stadig den fulde rige tekstoplevelse med tabeller, billeder og formatering.",
  },
};

const nl: ToolsHubCopy = {
  pageTitle: "Notepad & schrijfhulpmiddelen",
  intro:
    "Vind alle professionele Notepad schrijfhulpmiddelen die je gratis en onbeperkt kunt gebruiken.",
  introLink: {
    before: "Vind alle profesionale ",
    label: "Notepad",
    after: " schrijfhulpmiddelen die je gratis en onbeperkt kunt gebruiken.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Schrijfhulpmiddelen",
    editors: "Editor-tools",
    text: "Tekstanalyse",
    devTools: "Ontwikkelaarstools",
    excel: "Excel-converters",
  },
  categoryLabel: "Categorie",
  openCategory: "Open categorie",
  toolsCountWord: "tools",
  categories: {
    writing: {
      title: "Schrijfhulpmiddelen",
      description:
        "Afleidingsvrij schrijven, snelle notities, focussessies, doelen, dicteren, sjablonen, fragmenten en workflow-helpers.",
    },
    editors: {
      title: "Editor-tools",
      description:
        "Markdown-, code-, JSON- en HTML-editors voor technisch schrijven en gestructureerd inhoudelijk werk.",
    },
    text: {
      title: "Tekstanalysetools",
      description:
        "Woord-, teken-, zin- en alineatellers met leesbaarheids- en vergelijkingstools.",
    },
    devTools: {
      title: "Ontwikkelaarstools",
      description:
        "Formatters, minifiers, encoders en regex-tools voor dagelijkse webontwikkeling.",
    },
    excel: {
      title: "Excel-conversietools",
      description:
        "Converteer tussen Excel en CSV, JSON, XML, PDF, ODS, Google Sheets en meer spreadsheet-indelingen.",
    },
    documents: {
      title: "Documentconversietools",
      description:
        "Transformeer PDF-, Word-, TXT-, Markdown-, HTML-, RTF- en PowerPoint-bestanden voor bewerking en publicatie.",
    },
    data: {
      title: "Data- & codeconversietools",
      description:
        "Verplaats gegevens tussen JSON-, CSV-, XML-, YAML-, SQL- en platte tekstindelingen voor API- en dataworkflows.",
    },
    format: {
      title: "Tekstutil-tools",
      description:
        "Omzetten van hoofdletters naar kleine letters, regelbewerkingen, tekst opschonen en compacte opmaaktools for snelle teksttransformaties.",
    },
  },
  aboutTitle: "Over onze gratis online tools",
  aboutBody:
    "Welkom bij onze complete verzameling gratis online tools die zijn ontworpen om tekstbewerking, gegevensconversie, documentverwerking en ontwikkelaarsworkflows te vereenvoudigen.",
  footer: {
    before: "Op zoek naar het klassieke canvas? De ",
    linkLabel: "Notepad-editor",
    after:
      " biedt nog steeds de volledige rich-text-ervaring met tabellen, afbeeldingen en opmaak.",
  },
};

const et: ToolsHubCopy = {
  pageTitle: "Märkmiku ja kirjutamise tööriistad",
  intro:
    "Leidke kõik professionaalsed märkmiku kirjutamise tööriistad, mida saate kasutada tasuta ja piiramatult.",
  introLink: {
    before: "Leidke kõik professionaalsed ",
    label: "Märkmiku",
    after: " kirjutamise tööriistad, mida saate kasutada tasuta ja piiramatult.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Märkmik veebis",
  chips: {
    writing: "Kirjutamise tööriistad",
    editors: "Redaktori tööriistad",
    text: "Tekstianalüüs",
    devTools: "Arendaja tööriistad",
    excel: "Exceli konverterid",
  },
  categoryLabel: "Kategooria",
  openCategory: "Ava kategooria",
  toolsCountWord: "tööriistad",
  categories: {
    writing: {
      title: "Kirjutamise Tööriistad",
      description:
        "Häiretevaba kirjutamine, kiired märkmed, keskendumissessioonid, eesmärgid, dikteerimine, mallid, koodilõigud ja töövoo abimehed.",
    },
    editors: {
      title: "Redaktori Tööriistad",
      description:
        "Markdowni, koodi, JSON-i ja HTML-i redaktorid tehniliseks kirjutamiseks ja struktureeritud sisu loomiseks.",
    },
    text: {
      title: "Tekstianalüüsi Tööriistad",
      description:
        "Sõnade, märkide, lausete ja lõikude loendurid koos loetavuse ja võrdlemise utiliitidega.",
    },
    devTools: {
      title: "Arendaja Tööriistad",
      description:
        "Vormindajad, minimeerijad, kodeerijad ja regulaaravaldiste (regex) utiliidid igapäevaseks veebiarenduseks.",
    },
    excel: {
      title: "Exceli Konverteerimise Tööriistad",
      description:
        "Konverteerige Exceli ja CSV, JSON-i, XML-i, PDF-i, ODS-i, Google'i tabelite ning teiste tabelivormingute vahel.",
    },
    documents: {
      title: "Dokumendi Konverteerimise Tööriistad",
      description:
        "Teisendage PDF-, Wordi, TXT-, Markdowni, HTML-i, RTF-i ja PowerPointi faile redigeerimiseks ja avaldamiseks.",
    },
    data: {
      title: "Andmete ja Koodi Konverteerimise Tööriistad",
      description:
        "Teisaldage andmeid JSON-i, CSV, XML-i, YAML-i, SQL-i ja lihtteksti vormingute vahel API- ja andmetöövoogude jaoks.",
    },
    format: {
      title: "Teksti Utiliidid",
      description:
        "Suur- ja väiketähtede konverteerimine, reatoimingud, teksti puhastamine ja kompaktsed vormindustööriistad kiireks teksti muutmiseks.",
    },
  },
  aboutTitle: "Meie tasuta veebitööriistade kohta",
  aboutBody:
    "Tere tulemast meie täielikku tasuta veebitööriistade kogusse, mis on loodud tekstiredigeerimise, andmete teisendamise, dokumenditöötluse ja arendaja töövoogude lihtsustamiseks.",
  footer: {
    before: "Kas otsite klassikalist lõuendit? ",
    linkLabel: "Märkmiku redaktor",
    after:
      " pakub endiselt täielikku rikkaliku teksti kogemust koos tabelite, piltide ja vormindamisega.",
  },
};

const fj: ToolsHubCopy = {
  pageTitle: "iYaya ni Volavola kei na Notepad",
  intro:
    "Kunea kece na iyaya ni volavola ni Notepad vakacakacaka ka rawa ni o vakayagataka walega, sega ni vakaiyalayala.",
  introLink: {
    before: "Kunea kece na iyaya ni volavola ni ",
    label: "Notepad",
    after: " vakacakacaka ka rawa ni o vakayagataka walega, sega ni vakaiyalayala.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "iYaya ni volavola",
    editors: "iYaya ni editor",
    text: "Vakadidike ni volavola",
    devTools: "iYaya ni developer",
    excel: "Veisau ni Excel",
  },
  categoryLabel: "Wasewase",
  openCategory: "Dolava na wasewase",
  toolsCountWord: "iyaya",
  categories: {
    writing: {
      title: "iYaya ni Volavola",
      description:
        "Volavola galugalu, volavola totolo, gauna ni focus, takete, dictation, templates, snippets, kei na dauveivuke ni workflow.",
    },
    editors: {
      title: "iYaya ni Editor",
      description:
        "Markdown, code, JSON, kei na HTML editors me baleta na volavola vakatekinikolo kei na cakacaka ni lewena sa tuvani makawa.",
    },
    text: {
      title: "iYaya ni Vakadidike ni Volavola",
      description:
        "Wili vosa, matanivola, iyatuvosa, kei na parakaravu vata kei na iyaya ni wilivola kei na veidutaitaki.",
    },
    devTools: {
      title: "iYaya ni Developer",
      description:
        "Formatters, minifiers, encoders, kei na regex utilities me baleta na veisiga yadua ni web development.",
    },
    excel: {
      title: "iYaya ni Veisau ni Excel",
      description:
        "Veisautaka na Excel kei na CSV, JSON, XML, PDF, ODS, Google Sheets, kei na so tale na formats ni spreadsheet.",
    },
    documents: {
      title: "iYaya ni Veisau ni Document",
      description:
        "Veisautaka na PDF, Word, TXT, Markdown, HTML, RTF, kei na PowerPoint files me baleta na veisau kei na tabaki.",
    },
    data: {
      title: "iYaya ni Veisau ni Data & Code",
      description:
        "Kauta na data ena kedra maliwa na JSON, CSV, XML, YAML, SQL, kei na plain text formats me baleta na API kei na data workflows.",
    },
    format: {
      title: "iYaya ni Teksto ni Utility",
      description:
        "Veisau ni case, cakacaka ni laini, samaki ni teksto, kei na iyaya ni format lalai me baleta na veisau totolo ni teksto.",
    },
  },
  aboutTitle: "Baleta na Noda iYaya ni Livaliva Soliwale",
  aboutBody:
    "Bula mai ki na noda kumuni iyaya ni livaliva soliwale kece sa tuvanaki me vakarawarawataka na veisau ni teksto, veisau ni data, processing ni document, kei na workflows ni developer.",
  footer: {
    before: "Vakasaqara tiko na classic canvas? Na ",
    linkLabel: "Notepad Editor",
    after:
      " e se tiko ga kina na rich-text experience taucoko vata kei na tables, images, kei na formatting.",
  },
};

const fi: ToolsHubCopy = {
  pageTitle: "Muistio- ja kirjoitustyökalut",
  intro:
    "Löydä kaikki ammattimaiset Muistio-kirjoitustyökalut, joita voit käyttää ilmaiseksi ja rajoituksetta.",
  introLink: {
    before: "Löydä kaikki ammattimaiset ",
    label: "Muistio",
    after: "-kirjoitustyökalut, joita voit käyttää ilmaiseksi ja rajoituksetta.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Muistio verkossa",
  chips: {
    writing: "Kirjoitustyökalut",
    editors: "Editorityökalut",
    text: "Tekstianalyysi",
    devTools: "Kehittäjätyökalut",
    excel: "Excel-muuntimet",
  },
  categoryLabel: "Kategoria",
  openCategory: "Avaa kategoria",
  toolsCountWord: "työkalua",
  categories: {
    writing: {
      title: "Kirjoitustyökalut",
      description:
        "Häiriötön kirjoittaminen, pikamuistiinpanot, keskittymisistunnot, tavoitteet, saneilu, mallit, koodipätkät ja työnkulun auttajat.",
    },
    editors: {
      title: "Editorityökalut",
      description:
        "Markdown-, koodi-, JSON- ja HTML-editorit tekniseen kirjoittamiseen ja rakenteisen sisällön työstämiseen.",
    },
    text: {
      title: "Tekstianalyysityökalut",
      description:
        "Sana-, merkki-, lause- ja kappalelaskurit sekä luettavuus- ja vertailuohjelmat.",
    },
    devTools: {
      title: "Kehittäjätyökalut",
      description:
        "Muotoilijat, tiivistäjät, kooderit ja regex-työkalut päivittäiseen web-kehitykseen.",
    },
    excel: {
      title: "Excel-muunnostyökalut",
      description:
        "Muunna Excelin ja CSV-, JSON-, XML-, PDF-, ODS-, Google Sheets- ja muiden taulukkomuotojen välillä.",
    },
    documents: {
      title: "Asiakirjojen muunnostyökalut",
      description:
        "Muunna PDF-, Word-, TXT-, Markdown-, HTML-, RTF- ja PowerPoint-tiedostoja muokkausta ja julkaisemista varten.",
    },
    data: {
      title: "Datan ja koodin muunnostyökalut",
      description:
        "Siirrä tietoja JSON-, CSV-, XML-, YAML-, SQL- ja pelkän tekstin muotojen välillä API- ja datatyönkulkuja varten.",
    },
    format: {
      title: "Tekstiapuohjelmat",
      description:
        "Kirjainkoon muunnos, rivitoiminnot, tekstin puhdistus ja kompaktit muotoilutyökalut nopeaan tekstin muokkaamiseen.",
    },
  },
  aboutTitle: "Tietoja ilmaisista verkkotyökaluistamme",
  aboutBody:
    "Tervetuloa kattavaan ilmaisten verkkotyökalujen kokoelmaamme, joka on suunniteltu yksinkertaistamaan tekstin muokkausta, tiedonsiirtoa, asiakirjojen käsittelyä ja kehittäjien työnkulkuja.",
  footer: {
    before: "Etsitkö perinteistä työtilaa? ",
    linkLabel: "Muistio-editori",
    after:
      " tarjoaa edelleen täydellisen rikaan tekstin käsittelykokemuksen taulukoineen, kuvineen ja muotoiluineen.",
  },
};

const gl: ToolsHubCopy = {
  pageTitle: "Ferramentas de escrita e bloc de notas",
  intro:
    "Atopa todas las ferramentas de escrita profesionais do bloc de notas que podes usar de balde e sen límites.",
  introLink: {
    before: "Atopa todas las ferramentas de escrita profesionais do ",
    label: "bloc de notas",
    after: " que podes usar de balde e sen límites.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Bloc de notas en liña",
  chips: {
    writing: "Ferramentas de escrita",
    editors: "Editores",
    text: "Análise de texto",
    devTools: "Ferramentas de desenvolvedor",
    excel: "Conversores de Excel",
  },
  categoryLabel: "Categoría",
  openCategory: "Abrir categoría",
  toolsCountWord: "ferramentas",
  categories: {
    writing: {
      title: "Ferramentas de Escrita",
      description:
        "Escrita sen distraccións, notas rápidas, sesións de concentración, obxectivos, ditado, modelos, fragmentos de código e axudantes de fluxo de traballo.",
    },
    editors: {
      title: "Editores",
      description:
        "Editores de Markdown, código, JSON e HTML para escrita técnica e traballo de contido estruturado.",
    },
    text: {
      title: "Ferramentas de Análise de Texto",
      description:
        "Contadores de palabras, caracteres, frases e parágrafos con utilidades de lexitibilidade e comparación.",
    },
    devTools: {
      title: "Ferramentas de Desenvolvedor",
      description:
        "Formatadores, minificadores, codificadores e utilidades regex para o desenvolvemento web diario.",
    },
    excel: {
      title: "Ferramentas de Conversión de Excel",
      description:
        "Converte entre Excel e CSV, JSON, XML, PDF, ODS, Google Sheets e máis formatos de follas de cálculo.",
    },
    documents: {
      title: "Ferramentas de Conversión de Documentos",
      description:
        "Transforma ficheiros PDF, Word, TXT, Markdown, HTML, RTF e PowerPoint para edición e publicación.",
    },
    data: {
      title: "Ferramentas de Conversión de Datos e Código",
      description:
        "Move datos entre formatos JSON, CSV, XML, YAML, SQL e texto plano para fluxos de traballo de API e datos.",
    },
    format: {
      title: "Ferramentas de Utilidade de Texto",
      description:
        "Conversión de maiúsculas e minúsculas, operacións de liña, limpeza de texto e ferramentas de formato compacto para transformacións rápidas de texto.",
    },
  },
  aboutTitle: "Sobre as nosas ferramentas en liña gratuítas",
  aboutBody:
    "Benvido á nosa colección completa de ferramentas en liña gratuítas deseñadas para simplificar a edición de texto, a conversión de datos, o procesamento de documentos e os fluxos de traballo dos desenvolvedores.",
  footer: {
    before: "Buscas o lenzo clásico? O ",
    linkLabel: "editor de bloc de notas",
    after:
      " segue a ofrecer a experiencia completa de texto enriquecido con táboas, imaxes e formato.",
  },
};

const ka: ToolsHubCopy = {
  pageTitle: "Notepad & საწერი ინსტრუმენტები",
  intro:
    "იპოვეთ Notepad-ის ყველა პროფესიონალური საწერი ინსტრუმენტი, რომელთა გამოყენებაც შეგიძლიათ უფასოდ, შეუზღუდავად.",
  introLink: {
    before: "იპოვეთ ",
    label: "Notepad",
    after: "-ის ყველა პროფესიონალური საწერი ინსტრუმენტი, რომელთა გამოყენებაც შეგიძლიათ უფასოდ, შეუზღუდავად.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad ონლაინ",
  chips: {
    writing: "საწერი ინსტრუმენტები",
    editors: "რედაქტორის ინსტრუმენტები",
    text: "ტექსტის ანალიზი",
    devTools: "დეველოპერის ინსტრუმენტები",
    excel: "Excel-ის კონვერტერები",
  },
  categoryLabel: "კატეგორია",
  openCategory: "გახსენით კატეგორია",
  toolsCountWord: "ინსტრუმენტი",
  categories: {
    writing: {
      title: "საწერი ინსტრუმენტები",
      description:
        "სამუშაო სივრცე ყურადღების გაფანტვის გარეშე, სწრაfi შენიშვნები, ფოკუსის სესიები, მიზნები, კარნახი, შაბლონები, ფრაგმენტები და სამუშაო ნაკადის დამხმარეები.",
    },
    editors: {
      title: "რედაქტორის ინსტრუმენტები",
      description:
        "Markdown, კოდი, JSON და HTML რედაქტორები ტექნიკური წერისა და სტრუქტურირებული შინაარსისთვის.",
    },
    text: {
      title: "ტექსტის ანალიზის ინსტრუმენტები",
      description:
        "სიტყვების, სიმბოლოების, წინადადებებისა და აბზაცების მრიცხველები წაკითხვადობისა და შედარების უტილიტებით.",
    },
    devTools: {
      title: "დეველოპერის ინსტრუმენტები",
      description:
        "ფორმატორები, მინიფიკატორები, ენკოდერები და regex უტილიტები ყოველდღიური ვებ დეველოპმენტისთვის.",
    },
    excel: {
      title: "Excel-ის კონვერტერები",
      description:
        "კონვერტაცია Excel-სა და CSV, JSON, XML, PDF, ODS, Google Sheets და სხვა ელექტრონული ცხრილების ფორმატებს შორის.",
    },
    documents: {
      title: "დოკუმენტების კონვერტერები",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF და PowerPoint ფაილების კონვერტაცია რედაქტირებისა და გამოქვეყნებისთვის.",
    },
    data: {
      title: "მონაცემთა & კოდის კონვერტერები",
      description:
        "მონაცემების გადატანა JSON, CSV, XML, YAML, SQL და ჩვეულებრივ ტექსტურ ფორმატებს შორის API და მონაცემთა სამუშაოებისთვის.",
    },
    format: {
      title: "ტექსტის დამხმარე უტილიტები",
      description:
        "ასოების რეგისტრის შეცვლა, ხაზებთან მუშაობა, ტექსტის გასუფთავება და კომპაქტური ფორმატირების ინსტრუმენტები ტექსტის სწრაfi გარდაქმნისთვის.",
    },
  },
  aboutTitle: "ჩვენი უფასო ონლაინ ინსტრუმენტების შესახებ",
  aboutBody:
    "კეთილი იყოს თქვენი მობრძანება ჩვენს უფასო ონლაინ ინსტრუმენტების სრულ კოლექციაში, რომელიც შექმნილია ტექსტის რედაქტირების, მონაცემთა კონვერტაციის, დოკუმენტების დამუშავებისა და დეველოპერის სამუშაო ნაკადების გასამარტივებლად.",
  footer: {
    before: "ეძებთ კლასიკურ სამუშაო გარემოს? ",
    linkLabel: "Notepad-ის რედაქტორი",
    after:
      " კვლავ გთავაზობთ სრულყოფილ rich-text გამოცდილებას ცხრილებით, სურათებითა და ფორმატირებით.",
  },
};

const de: ToolsHubCopy = {
  pageTitle: "Notepad & Schreibwerkzeuge",
  intro:
    "Finden Sie alle professionellen Notepad-Schreibwerkzeuge, die Sie kostenlos und unbegrenzt nutzen können.",
  introLink: {
    before: "Finden Sie alle professionellen ",
    label: "Notepad",
    after: "-Schreibwerkzeuge, die Sie kostenlos und unbegrenzt nutzen können.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Schreibwerkzeuge",
    editors: "Editoren",
    text: "Textanalyse",
    devTools: "Entwicklerwerkzeuge",
    excel: "Excel-Konverter",
  },
  categoryLabel: "Kategorie",
  openCategory: "Kategorie öffnen",
  toolsCountWord: "Werkzeuge",
  categories: {
    writing: {
      title: "Schreibwerkzeuge",
      description:
        "Ablenkungsfreies Schreiben, schnelle Notizen, Focussitzungen, Ziele, Diktat, Vorlagen, Snippets und Workflow-Helfer.",
    },
    editors: {
      title: "Editoren",
      description:
        "Markdown-, Code-, JSON- und HTML-Editoren für technisches Schreiben und strukturierte Inhaltsarbeit.",
    },
    text: {
      title: "Textanalyse-Werkzeuge",
      description:
        "Wort-, Zeichen-, Satz- und Absatzzähler mit Lesbarkeits- und Vergleichswerkzeugen.",
    },
    devTools: {
      title: "Entwicklerwerkzeuge",
      description:
        "Formatierer, Minifier, Encoder und Regex-Werkzeuge für die tägliche Webentwicklung.",
    },
    excel: {
      title: "Excel-Konvertierungswerkzeuge",
      description:
        "Konvertieren Sie zwischen Excel und CSV, JSON, XML, PDF, ODS, Google Sheets und weiteren Tabellenkalkulationsformaten.",
    },
    documents: {
      title: "Dokumentenkonvertierungswerkzeuge",
      description:
        "Konvertieren Sie PDF-, Word-, TXT-, Markdown-, HTML-, RTF- und PowerPoint-Dateien zur Bearbeitung und Veröffentlichung.",
    },
    data: {
      title: "Daten- & Codekonvertierungswerkzeuge",
      description:
        "Verschieben Sie Daten zwischen JSON, CSV, XML, YAML, SQL und Klartextformaten für API- und Datenworkflows.",
    },
    format: {
      title: "Text-Hilfswerkzeuge",
      description:
        "Groß-/Kleinschreibung ändern, Zeilenoperationen, Textbereinigung und kompakte Formatierungswerkzeuge für schnelle Texttransformationen.",
    },
  },
  aboutTitle: "Über unsere kostenlosen Online-Werkzeuge",
  aboutBody:
    "Willkommen in unserer kompletten Sammlung kostenloser Online-Werkzeuge, mit denen Sie Textbearbeitung, Datenkonvertierung, Dokumentenverarbeitung und Entwicklerworkflows vereinfachen können.",
  footer: {
    before: "Suchen Sie die klassische Arbeitsfläche? Der ",
    linkLabel: "Notepad-Editor",
    after:
      " bietet weiterhin die vollständige Rich-Text-Erfahrung mit Tabellen, Bildern und Formatierungen.",
  },
};

const el: ToolsHubCopy = {
  pageTitle: "Notepad & Εργαλεία Συγγραφής",
  intro:
    "Βρείτε όλα τα επαγγελματικά εργαλεία συγγραφής Notepad που μπορείτε να χρησιμοποιήσετε δωρεάν και απεριόριστα.",
  introLink: {
    before: "Βρείτε όλα τα επαγγελματικά εργαλεία συγγραφής ",
    label: "Notepad",
    after: " που μπορείτε να χρησιμοποιήσετε δωρεάν και απεριόριστα.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Εργαλεία συγγραφής",
    editors: "Εργαλεία επεξεργαστή",
    text: "Ανάλυση κειμένου",
    devTools: "Εργαλεία προγραμματιστή",
    excel: "Μετατροπείς Excel",
  },
  categoryLabel: "Κατηγορία",
  openCategory: "Άνοιγμα κατηγορίας",
  toolsCountWord: "εργαλεία",
  categories: {
    writing: {
      title: "Εργαλεία Συγγραφής",
      description:
        "Συγγραφή χωρίς περισπασμούς, γρήγορες σημειώσεις, συνεδρίες εστίασης, στόχοι, υπαγόρευση, πρότυπα, αποσπάσματα και βοηθοί ροής εργασίας.",
    },
    editors: {
      title: "Εργαλεία Επεξεργαστή",
      description:
        "Επεξεργαστές Markdown, κώδικα, JSON και HTML για τεχνική συγγραφή και δομημένο περιεχόμενο.",
    },
    text: {
      title: "Εργαλεία Ανάλυσης Κειμένου",
      description:
        "Μετρητές λέξεων, χαρακτήρων, προτάσεων και παραγράφων με βοηθητικά προγράμματα αναγνωσιμότητας και σύγκρισης.",
    },
    devTools: {
      title: "Εργαλεία Προγραμματιστή",
      description:
        "Μορφοποιητές, συμπιεστές (minifiers), κωδικοποιητές και βοηθητικά προγράμματα regex για καθημερινή ανάπτυξη ιστού.",
    },
    excel: {
      title: "Εργαλεία Μετατροπής Excel",
      description:
        "Μετατροπή μεταξύ Excel και CSV, JSON, XML, PDF, ODS, Google Sheets και άλλων μορφών υπολογιστικών φύλλων.",
    },
    documents: {
      title: "Εργαλεία Μετατροπής Εγγράφων",
      description:
        "Μετατροπή αρχείων PDF, Word, TXT, Markdown, HTML, RTF και PowerPoint για επεξεργασία και δημοσίευση.",
    },
    data: {
      title: "Εργαλεία Μετατροπής Δεδομένων & Κώδικα",
      description:
        "Μεταφορά δεδομένων μεταξύ μορφών JSON, CSV, XML, YAML, SQL και απλού κειμένου για ροές εργασίας API και δεδομένων.",
    },
    format: {
      title: "Εργαλεία Βοηθητικού Κειμένου",
      description:
        "Μετατροπή πεζών/κεφαλαίων, λειτουργίες γραμμής, καθαρισμός κειμένου και συμπαγή εργαλεία μορφοποίησης για γρήγορες μετατροπές κειμένου.",
    },
  },
  aboutTitle: "Σχετικά με τα Δωρεάν Online Εργαλεία μας",
  aboutBody:
    "Καλώς ορίσατε στην πλήρη συλλογή δωρεάν online εργαλείων που έχουν σχεδιαστεί για να απλοποιούν την επεξεργασία κειμένου, τη μετατροπή δεδομένων, την επεξεργασία εγγράφων και τις ροές εργασίας των προγραμματιστών.",
  footer: {
    before: "Ψάχνετε για τον κλασικό καμβά; Ο ",
    linkLabel: "Επεξεργαστής Notepad",
    after:
      " εξακολουθεί να προσφέρει την πλήρη εμπειρία εμπλουτισμένου κειμένου με πίνακες, εικόνες και μορφοποίηση.",
  },
};

const kl: ToolsHubCopy = {
  pageTitle: "Allaffissutit & Allannermi Atortut",
  intro:
    "Notepad allannermi atortut pikkorissut akeqanngitsumik killeqanngitsumillu atorsinnaasasi tamaasa uani nassaarikkit.",
  introLink: {
    before: "Nalinginnaasumik allaffissaq ",
    label: "Notepad",
    after: " allannermi atortut pikkorissut akeqanngitsumik killeqanngitsumillu atorsinnaasasi tamaasa uani nassaarikkit.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad Online",
  chips: {
    writing: "Allannermi atortut",
    editors: "Aaqqissuisut",
    text: "Allatanik misissueqqissaarneq",
    devTools: "Inerisaasup atortui",
    excel: "Excel-mut veisartut",
  },
  categoryLabel: "Sumut atassuseq",
  openCategory: "Ammasoq sumut atassuseq",
  toolsCountWord: "atortut",
  categories: {
    writing: {
      title: "Allannermi Atortut",
      description:
        "Akornusersorneqanngitsumik allanneq, allattukkat pilertortut, ukkatarinninnerit, anguniakkat, oqalunnikkut allanneq, skabelonit, snippet-it allallu.",
    },
    editors: {
      title: "Aaqqissuisut",
      description:
        "Markdown-, kode-, JSON- HTML-imillu aaqqissuisut teknikkikkut allannermut aaqqissugaasumillu suliaqarnermut.",
    },
    text: {
      title: "Allatanik Misissueqqissaarneq",
      description:
        "Oqaatsinik, naqinnernik, oqaaseqatigiinnik paragraffinillu kisitsissutit atuaruminassutsimik oqimaalutaanermullu atortut.",
    },
    devTools: {
      title: "Inerisaasup Atortui",
      description:
        "Formatiterissutit, minifier-it, encoder-it regex-imillu atortut ulluinnarni web-developer-inut.",
    },
    excel: {
      title: "Excel-mut Veisartut",
      description:
        "Excel-ip CSV-illu, JSON-ip, XML-ip, PDF-ip, ODS-ip, Google Sheets-ip regneark-illu formats assigiinngitsut akornanni veisineq.",
    },
    documents: {
      title: "Allagaatinik Veisartut",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF PowerPoint-illu fiilit aaqqissuunneqarnissaannut saqqummersinneqarnissaannullu veisineq.",
    },
    data: {
      title: "Data & Kode-mut Veisartut",
      description:
        "Datat JSON, CSV, XML, YAML, SQL tekst-iinnarmillu formats akornanni nuunneri API data workflows-inullu.",
    },
    format: {
      title: "Allatanut Atortut",
      description:
        "Naqinnerit angissusaannik veisineq, laininik suliaqarneq, allatanik samaneq formatiterinerillu pilertortumik veisitsinermut.",
    },
  },
  aboutTitle: "Akeqanngitsumik Online Atortut pillugit",
  aboutBody:
    "Tikilluarit akeqanngitsumik online atortutsinnut, siunertaralugu allatanik aaqqissuussinerup, datanik veisinermut, allagaatinik suliaqarnermut inerisaasunullu workflows pisariillisaanissaq.",
  footer: {
    before: "Klassiskiusoq allaffissaq ujarpiuk? Na ",
    linkLabel: "Notepad Aaqqissuisoq",
    after:
      " suli rich-text taucoko vata tabel-inik, assilissanut aaqqissuussinermillu pigalugu.",
  },
};

const gn: ToolsHubCopy = {
  pageTitle: "Kuatiahai ha Kuatiarogue ha Kuatiañe'ẽ rembiporu",
  intro:
    "Etopa opaite kuatiarogue Notepad mba'epururã ikatuva reiporu reiete ha ijapyra'ỹva.",
  introLink: {
    before: "Etopa opaite kuatiarogue ",
    label: "Notepad",
    after: " mba'epururã ikatuva reiporu reiete ha ijapyra'ỹva.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad Ñandutípe",
  chips: {
    writing: "Hai rembiporu",
    editors: "Mba'emboguejyha",
    text: "Ñe'ẽnguéra ñehesa'ỹijo",
    devTools: "Dapohã rembiporu",
    excel: "Excel mbohasa rembiporu",
  },
  categoryLabel: "Ñemohenda",
  openCategory: "Epe'a ñemohenda",
  toolsCountWord: "rembiporu",
  categories: {
    writing: {
      title: "Hai Rembiporu",
      description:
        "Hai joko'ỹre, kuatiañe'ẽ pya'e, mba'erecha añetete, tembiaporã, ñe'ẽ haipyre, kuatiarogue ha tembiapo pytyvõha.",
    },
    editors: {
      title: "Mba'emboguejyha",
      description:
        "Markdown, code, JSON ha HTML mba'emboguejyha hai tekniko ha kuatiañe'ẽ apytépe guarã.",
    },
    text: {
      title: "Ñe'ẽnguéra Ñehesa'ỹijo",
      description:
        "Ñe'ẽ, taiky, ñe'ẽjoaju ha parakaravu papaha ñe'ẽporã ha jopoipyrã ndive.",
    },
    devTools: {
      title: "Dapohã Rembiporu",
      description:
        "Formatter, minifier, encoder ha regex rembiapo ára ha ára ñanduti guarápe.",
    },
    excel: {
      title: "Excel Mbohasa Rembiporu",
      description:
        "Mbohasa Excel guive CSV, JSON, XML, PDF, ODS, Google Sheets ha ambue kuatia marandúpe.",
    },
    documents: {
      title: "Kuatia Mbohasa Rembiporu",
      description:
        "Mbohasa PDF, Word, TXT, Markdown, HTML, RTF ha PowerPoint marandu apytépe aaqqissuunnerã.",
    },
    data: {
      title: "Data & Code Mbohasa",
      description:
        "Kauta data JSON, CSV, XML, YAML, SQL ha plain text formats apytépe API ha data workflows-pe.",
    },
    format: {
      title: "Kuatiañe'ẽ Rembiporu Mba'e",
      description:
        "Taiguasu/taichĩ mbohasa, laini rembiapo, kuatiañe'ẽ samaki ha formatiterinerillu pya'e ñembohasarã.",
    },
  },
  aboutTitle: "Orereiete Online Rembiporu rehegua",
  aboutBody:
    "Eguahẽ porãite orereiete online rembiporu apytépe oñeimo'ãva omofaçilita haguã kuatiañe'ẽ samaki, data mbohasa, allagaatinik suliaqarneq ha developer workflows.",
  footer: {
    before: "Eheka kuatia ymaguare? Na ",
    linkLabel: "Notepad Mba'emboguejyha",
    after:
      " oguereko gueteri rich-text experience taucoko vata tabel-inik, images ha formatting ndive.",
  },
};

const gu: ToolsHubCopy = {
  pageTitle: "નોટપેડ અને લેખન સાધનો",
  intro:
    "નોટપેડના તમામ વ્યાવસાયિક લેખન સાધનો શોધો જેનો તમે મફત અને અમર્યાદિત ઉપયોગ કરી શકો છો.",
  introLink: {
    before: "શોધો તમામ વ્યાવસાયિક ",
    label: "નોટપેડ",
    after: " લેખન સાધનો જેને તમે મફતમાં અને અમર્યાદિત રીતે વાપરી શકો છો.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "નોટપેડ ઓનલાઇન",
  chips: {
    writing: "લેખન સાધનો",
    editors: "એડિટર સાધનો",
    text: "ટેક્સ્ટ વિશ્લેષણ",
    devTools: "ડેવલપર સાધનો",
    excel: "એક્સેલ કન્વર્ટર",
  },
  categoryLabel: "કેટેગરી",
  openCategory: "કેટેગરી ખોલો",
  toolsCountWord: "સાધનો",
  categories: {
    writing: {
      title: "લેખન સાધનો",
      description:
        "ધ્યાન ભટક્યા વિના લેખન, ઝડપી નોંધો, ફોકસ સત્રો, લક્ષ્યો, ડિક્ટેશન, ટેમ્પલેટ્સ, સ્નિપેટ્સ અને વર્કફ્લો સહાયકો.",
    },
    editors: {
      title: "એડિટર સાધનો",
      description:
        "ટેકનિકલ લેખન અને માળખાગત સામગ્રી માટે માર્કડાઉન, કોડ, JSON અને HTML એડિટર્સ.",
    },
    text: {
      title: "ટેક્સ્ટ વિશ્લેષણ સાધનો",
      description:
        "વાંચનક્ષમતા અને સરખામણી ઉપયોગિતાઓ સાથે શબ્દો, અક્ષરો, વાક્યો અને ફકરાના કાઉન્ટર્સ.",
    },
    devTools: {
      title: "ડેવલપર સાધનો",
      description:
        "રોજિંદા વેબ ડેવલપમેન્ટ માટે ફોર્મેટર્સ, મિનિફાયર્સ, એન્કોડર્સ અને રેજેક્સ ઉપયોગિતાઓ.",
    },
    excel: {
      title: "એક્સેલ કન્વર્ઝન સાધનો",
      description:
        "એક્સેલ અને CSV, JSON, XML, PDF, ODS, ગૂગલ શીટ્સ અને અન્ય સ્પ્રેડશીટ ફોર્મેટ્સ વચ્ચે કન્વર્ટ કરો.",
    },
    documents: {
      title: "દસ્તાવેજ કન્વર્ઝન સાધનો",
      description:
        "ફેરફાર અને પ્રકાશન માટે PDF, Word, TXT, માર્કડાઉન, HTML, RTF અને પાવરપોઇન્ટ ફાઇલોને કન્વર્ટ કરો.",
    },
    data: {
      title: "ડેટા અને કોડ કન્વર્ઝન સાધનો",
      description:
        "JSON, CSV, XML, YAML, SQL અને પ્લેઇન ટેક્સ્ટ ફોર્મેટ્સ વચ્ચે API અને ડેટા વર્કફ્લો માટે ડેટા ખસેડો.",
    },
    format: {
      title: "ટેક્સ્ટ ઉપયોગિતા સાધનો",
      description:
        "ઝડપી ટેક્સ્ટ ફેરફારો માટે કેસ કન્વર્ઝન, લાઇન ઓપરેશन्स, ટેક્સ્ટ ક્લિનિંગ અને કોમ્પેક્ટ ફોર્મેટિંગ સાધનો.",
    },
  },
  aboutTitle: "અમારા મફત ઓનલાઇન સાધનો વિશે",
  aboutBody:
    "ટેક્સ્ટ એડિટિંગ, ડેટા કન્વર્ઝન, દસ્તાવેજ પ્રોસેસિંગ અને ડેવલપર વર્કફ્લોને સરળ બનાવવા માટે રચાયેલા અમારા મફત ઓનલાઇન સાધનોના સંપૂર્ણ સંગ્રહમાં તમારું સ્વાગત છે.",
  footer: {
    before: "શું તમે ક્લાસિક કેનવાસ શોધી રહ્યા છો? ",
    linkLabel: "નોટપેડ એડિટર",
    after:
      " હજી પણ કોષ્ટકો, છબીઓ અને ફોર્મેટિંગ સાથે સંપૂર્ણ રિચ-ટેક્સ્ટ અનુભવ પ્રદાન કરે છે.",
  },
};

const ht: ToolsHubCopy = {
  pageTitle: "Notepad & Zouti Ekri",
  intro:
    "Jwenn tout zouti ekri Notepad pwofesyonèl ou ka itilize gratis epi san limit.",
  introLink: {
    before: "Jwenn tout zouti ekri ",
    label: "Notepad",
    after: " pwofesyonèl ou ka itilize gratis epi san limit.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad sou entènèt",
  chips: {
    writing: "Zouti ekri",
    editors: "Zouti editè",
    text: "Analiz tèks",
    devTools: "Zouti devlopè",
    excel: "Konvètisè Excel",
  },
  categoryLabel: "Kategori",
  openCategory: "Louvri kategori",
  toolsCountWord: "zouti",
  categories: {
    writing: {
      title: "Zouti Ekri",
      description:
        "Ekri san distraksyon, nòt rapid, sesyon konsantrasyon, objektif, dikte, modèl, kòd kout ak èd pou workflow.",
    },
    editors: {
      title: "Zouti Editè",
      description:
        "Editè Markdown, kòd, JSON ak HTML pou ekri teknik ak travay sou kontni estriktire.",
    },
    text: {
      title: "Zouti Analiz Tèks",
      description:
        "Kompteur mo, karaktè, fraz ak paragraf avèk sèvis piblik pou lizibilite ak konparezon.",
    },
    devTools: {
      title: "Zouti Devlopè",
      description:
        "Formatè, minifikateur, ankodè ak sèvis piblik regex pou devlopman entènèt chak jou.",
    },
    excel: {
      title: "Zouti Konvèsyon Excel",
      description:
        "Konvèti ant Excel ak CSV, JSON, XML, PDF, ODS, Google Sheets ak lòt fòma fèy kalkil.",
    },
    documents: {
      title: "Zouti Konvèsyon Dokiman",
      description:
        "Transfòme dosye PDF, Word, TXT, Markdown, HTML, RTF ak PowerPoint pou edisyon ak piblikasyon.",
    },
    data: {
      title: "Zouti Konvèsyon Done & Kòd",
      description:
        "Deplase done ant fòma JSON, CSV, XML, YAML, SQL ak tèks senp pou API ak workflows done.",
    },
    format: {
      title: "Zouti Sèvis Piblik Tèks",
      description:
        "Konvèsyon ka, operasyon liy, netwayaj tèks ak zouti fòma kontra enfòmèl ant pou transfòmasyon tèks rapid.",
    },
  },
  aboutTitle: "Konsènan Zouti sou Entènèt Gratis Nou Yo",
  aboutBody:
    "Byenveni nan koleksyon konplè zouti sou entènèt gratis nou yo ki fèt pou senplifye edisyon tèks, konvèsyon done, pwosesis dokiman ak workflows devlopè.",
  footer: {
    before: "Èske w ap chèche twal klasik la? ",
    linkLabel: "Editè Notepad",
    after:
      " la toujou ofri eksperyans konplè rich-tèks la avèk tab, imaj ak fòma.",
  },
};

const ha: ToolsHubCopy = {
  pageTitle: "Notepad & Kayan Rubutu",
  intro:
    "Nemi duk ƙwararrun kayan rubutu na Notepad waɗanda zaku iya amfani da su kyauta kuma ba tare da iyaka ba.",
  introLink: {
    before: "Nemi duk ƙwararrun kayan rubutu na ",
    label: "Notepad",
    after: " waɗanda zaku iya amfani da su kyauta kuma ba tare da iyaka ba.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad kan layi",
  chips: {
    writing: "Kayan rubutu",
    editors: "Kayan edita",
    text: "Binciken rubutu",
    devTools: "Kayan mai haɓakawa",
    excel: "Masu canza Excel",
  },
  categoryLabel: "Rukunoni",
  openCategory: "Buɗe rukunoni",
  toolsCountWord: "kayan aiki",
  categories: {
    writing: {
      title: "Kayan Rubutu",
      description:
        "Rubutu ba tare da shagala ba, rubutu mai sauri, zaman mayar da hankali, buri, faɗar rubutu, samfura, gutsuttsuran kodi da mataimaka.",
    },
    editors: {
      title: "Kayan Edita",
      description:
        "Editocin Markdown, kodi, JSON da HTML don rubuce-rubucen fasaha da tsarin abun ciki.",
    },
    text: {
      title: "Kayan Binciken Rubutu",
      description:
        "Masu ƙididdige kalmomi, haruffa, jimloli da sassa tare da kayan karantawa da kwatanta rubutu.",
    },
    devTools: {
      title: "Kayan Mai Haɓakawa",
      description:
        "Masu tsara kodi, masu rage girman kodi, masu ɓoye kodi da kayan regex don haɓaka gidan yanar gizo na yau da kullun.",
    },
    excel: {
      title: "Kayan Canza Excel",
      description:
        "Canza tsakanin Excel da CSV, JSON, XML, PDF, ODS, Google Sheets da sauran tsarin maƙunsar bayanai.",
    },
    documents: {
      title: "Kayan Canza Takardu",
      description:
        "Canza fayilolin PDF, Word, TXT, Markdown, HTML, RTF da PowerPoint don gyarawa da bugawa.",
    },
    data: {
      title: "Kayan Canza Bayanai & Kodi",
      description:
        "Canza bayanai tsakanin tsarin JSON, CSV, XML, YAML, SQL da bayyanannen rubutu don API da tsarin bayanai.",
    },
    format: {
      title: "Kayan Aiki na Musamman",
      description:
        "Canza manyan/ƙananan haruffa, ayyukan layi, tsaftace rubutu da kayan tsara rubutu don saurin canza rubutu.",
    },
  },
  aboutTitle: "Game da Kayan Aikinmu na Kan Layi Kyauta",
  aboutBody:
    "Barka da zuwa cikakken rukunin kayan aikinmu na kan layi kyauta wanda aka tsara don sauƙaƙe gyaran rubutu, canza bayanai, sarrafa takardu da tsarin aikin mai haɓakawa.",
  footer: {
    before: "Kuna neman asalin shafin rubutu? ",
    linkLabel: "Editan Notepad",
    after:
      " yana ci gaba da ba da cikakkiyar ƙwarewar rubutu tare da tebura, hotuna da tsarin rubutu.",
  },
};

const he: ToolsHubCopy = {
  pageTitle: "פנקס רשימות וכלי כתיבה",
  intro:
    "מצאו את כל כלי הכתיבה המקצועיים של פנקס הרשימות בהם תוכלו להשתמש בחינם וללא הגבלה.",
  introLink: {
    before: "מצאו את כל כלי הכתיבה המקצועיים של ",
    label: "פנקס הרשימות",
    after: " בהם תוכלו להשתמש בחינם וללא הגבלה.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "פנקס רשימות אונליין",
  chips: {
    writing: "כלי כתיבה",
    editors: "כלי עריכה",
    text: "ניתוח טקסט",
    devTools: "כלי מפתח",
    excel: "ממירי אקסל",
  },
  categoryLabel: "קטגוריה",
  openCategory: "פתיחת קטגוריה",
  toolsCountWord: "כלים",
  categories: {
    writing: {
      title: "כלי כתיבה",
      description:
        "כתיבה ללא הסחות דעת, הערות מהירות, מפגשי מיקוד, יעדים, הכתבה, תבניות, קטעי קוד ועזרי זרימת עבודה.",
    },
    editors: {
      title: "כלי עריכה",
      description:
        "עורכי Markdown, קוד, JSON ו-HTML לכתיבה טכנית ועבודה על תוכן מובנה.",
    },
    text: {
      title: "כלי ניתוח טקסט",
      description:
        "מוני מילים, תווים, משפטים ופסקאות עם כלי קריאות והשוואה.",
    },
    devTools: {
      title: "כלי מפתח",
      description:
        "מעצבים, מכווצים, מקודדים וכלי regex לפיתוח אינטרנט יומיומי.",
    },
    excel: {
      title: "כלי המרת אקסל",
      description:
        "המר בין Excel ל-CSV, JSON, XML, PDF, ODS, Google Sheets ופורמטים נוספים של גיליונות אלקטרוניים.",
    },
    documents: {
      title: "כלי המרת מסמכים",
      description:
        "המר קובצי PDF, Word, TXT, Markdown, HTML, RTF ו-PowerPoint לעריכה ופרסום.",
    },
    data: {
      title: "כלי המרת נתונים וקוד",
      description:
        "העבר נתונים בין פורמטים של JSON, CSV, XML, YAML, SQL וטקסט רגיל עבור זרימות עבודה של API ונתונים.",
    },
    format: {
      title: "כלי עזר לטקסט",
      description:
        "המרת אותיות רישיות/קטנות, פעולות שורה, ניקוי טקסט וכלי עיצוב קומפקטיים לשינויי טקסט מהירים.",
    },
  },
  aboutTitle: "אודות הכלים המקוונים החינמיים שלנו",
  aboutBody:
    "ברוכים הבאים לאוסף המלא של הכלים המקוונים החינמיים שלנו, שנועדו לפשט עריכת טקסט, המרת נתונים, עיבוד מסמכים וזרימות עבודה של מפתחים.",
  footer: {
    before: "מחפשים את לוח העבודה הקלאסי? ",
    linkLabel: "עורך פנקס הרשימות",
    after:
      " עדיין מציע את חוויית הטקסט העשיר המלאה עם טבלאות, תמונות ועיצוב.",
  },
};

const hi: ToolsHubCopy = {
  pageTitle: "नोटपैड और लेखन उपकरण",
  intro:
    "नोटपैड के सभी पेशेवर लेखन उपकरण खोजें जिनका आप मुफ्त और असीमित उपयोग कर सकते हैं.",
  introLink: {
    before: "खोजें सभी पेशेवर ",
    label: "नोटपैड",
    after: " लेखन उपकरण जिनका आप मुफ्त और असीमित उपयोग कर सकते हैं.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "नोटपैड ऑनलाइन",
  chips: {
    writing: "लेखन उपकरण",
    editors: "संपादक उपकरण",
    text: "पाठ विश्लेषण",
    devTools: "डेवलपर उपकरण",
    excel: "एक्सेल कन्वर्टर्स",
  },
  categoryLabel: "श्रेणी",
  openCategory: "श्रेणी खोलें",
  toolsCountWord: "उपकरण",
  categories: {
    writing: {
      title: "लेखन उपकरण",
      description:
        "बिना ध्यान भटके लिखना, त्वरित नोट्स, फोकस सत्र, लक्ष्य, श्रुतलेख, टेम्पलेट, स्निपेट और वर्कफ़्लो सहायक.",
    },
    editors: {
      title: "संपादक उपकरण",
      description:
        "तकनीकी लेखन और संरचित सामग्री कार्य के लिए मार्कडाउन, कोड, JSON और HTML संपादक.",
    },
    text: {
      title: "पाठ विश्लेषण उपकरण",
      description:
        "पठनीयता और तुलना उपयोगिताओं के साथ शब्द, वर्ण, वाक्य और पैराग्राफ काउंटर.",
    },
    devTools: {
      title: "डेवलपर उपकरण",
      description:
        "दैनिक वेब विकास के लिए फ़ॉर्मेटर्स, मिनिफ़ायर्स, एन्कोडर और रेगेक्स उपयोगिताएँ.",
    },
    excel: {
      title: "एक्सेल रूपांतरण उपकरण",
      description:
        "एक्सेल और CSV, JSON, XML, PDF, ODS, Google Sheets और अन्य स्प्रेडशीट प्रारूपों के बीच कनवर्ट करें.",
    },
    documents: {
      title: "दस्तावेज़ रूपांतरण उपकरण",
      description:
        "संपादन और प्रकाशन के लिए PDF, Word, TXT, मार्कडाउन, HTML, RTF और PowerPoint फ़ाइलों को कनवर्ट करें.",
    },
    data: {
      title: "डेटा और कोड रूपांतरण उपकरण",
      description:
        "API और डेटा वर्कफ़्लो के लिए JSON, CSV, XML, YAML, SQL और प्लेन टेक्स्ट प्रारूपों के बीच डेटा स्थानांतरित करें.",
    },
    format: {
      title: "पाठ उपयोगिता उपकरण",
      description:
        "त्वरित पाठ परिवर्तनों के लिए केस रूपांतरण, लाइन संचालन, पाठ सफाई और कॉम्पैक्ट फ़ॉर्मेटिंग टूल.",
    },
  },
  aboutTitle: "हमारे निःशुल्क ऑनलाइन टूल के बारे में",
  aboutBody:
    "पाठ संपादन, डेटा रूपांतरण, दस्तावेज़ प्रसंस्करण और डेवलपर वर्कफ़्लो को सरल बनाने के लिए डिज़ाइन किए गए हमारे मुफ़्त ऑनलाइन टूल के संपूर्ण संग्रह में आपका स्वागत है.",
  footer: {
    before: "क्या आप क्लासिक कैनवास की तलाश में हैं? ",
    linkLabel: "नोटपैड संपादक",
    after:
      " अभी भी तालिकाओं, छवियों और फ़ॉर्मेटिंग के साथ संपूर्ण रिच-टेक्स्ट अनुभव प्रदान करता है.",
  },
};

const hu: ToolsHubCopy = {
  pageTitle: "Jegyzettömb & Íróeszközök",
  intro:
    "Találja meg a Jegyzettömb összes professzionális íróeszközét, amelyeket ingyenesen és korlátlanul használhat.",
  introLink: {
    before: "Találja meg a ",
    label: "Jegyzettömb",
    after: " összes professzionális íróeszközét, amelyeket ingyenesen és korlátlanul használhat.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Jegyzettömb online",
  chips: {
    writing: "Íróeszközök",
    editors: "Szerkesztő eszközök",
    text: "Szövegelemzés",
    devTools: "Fejlesztői eszközök",
    excel: "Excel konverterer",
  },
  categoryLabel: "Kategória",
  openCategory: "Kategória megnyitása",
  toolsCountWord: "eszköz",
  categories: {
    writing: {
      title: "Íróeszközök",
      description:
        "Zavaró tényezőktől mentes írás, gyors jegyzetek, fókuszálási alkalmak, célok, diktálás, sablonok, kódrészletek és munkafolyamat-segítők.",
    },
    editors: {
      title: "Szerkesztő Eszközök",
      description:
        "Markdown, kód, JSON és HTML szerkesztők technikai íráshoz és strukturált tartalomkészítéshez.",
    },
    text: {
      title: "Szövegelemző Eszközök",
      description:
        "Szó-, karakter-, mondat- és bekezdésszámlálók olvashatósági és összehasonlító segédprogramokkal.",
    },
    devTools: {
      title: "Fejlesztői Eszközök",
      description:
        "Formázók, minifikálók, kódolók és regex segédprogramok a napi webfejlesztéshez.",
    },
    excel: {
      title: "Excel Konverziós Eszközök",
      description:
        "Konvertáljon Excel és CSV, JSON, XML, PDF, ODS, Google Táblázatok és egyéb táblázatkezelő formátumok között.",
    },
    documents: {
      title: "Dokumentum Konverziós Eszközök",
      description:
        "Alakítson át PDF, Word, TXT, Markdown, HTML, RTF és PowerPoint fájlokat szerkesztéshez és közzétételhez.",
    },
    data: {
      title: "Adat- és Kódkonverziós Eszközök",
      description:
        "Adatok mozgatása JSON, CSV, XML, YAML, SQL és sima szöveges formátumok között API- és adat-munkafolyamatokhoz.",
    },
    format: {
      title: "Szöveges Segédprogramok",
      description:
        "Kis- és nagybetűk konvertálása, sorvegyes műveletek, szövegtisztítás és kompakt formázóeszközök a gyors szövegmódosításokhoz.",
    },
  },
  aboutTitle: "Az ingyenes online eszközeinkről",
  aboutBody:
    "Üdvözöljük az ingyenes online eszközeink teljes gyűjteményében, amelyek célja a szövegszerkesztés, az adatkonvertálás, a dokumentumfeldolgozás és a fejlesztői munkafolyamatok egyszerűsítése.",
  footer: {
    before: "A klasszikus felületet keresi? A ",
    linkLabel: "Jegyzettömb szerkesztő",
    after:
      " továbbra is teljes gazdag szöveges élményt nyújt táblázatokkal, képekkel és formázással.",
  },
};

const is: ToolsHubCopy = {
  pageTitle: "Gjörðabók & Ritverkfæri",
  intro:
    "Finndu öll fagleg ritverkfæri fyrir Gjörðabók sem þú getur notað ókeypis og takmarkalaust.",
  introLink: {
    before: "Finndu öll fagleg ritverkfæri fyrir ",
    label: "Gjörðabók",
    after: " sem þú getur notað ókeypis og takmarkalaust.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Gjörðabók á netinu",
  chips: {
    writing: "Ritverkfæri",
    editors: "Ritstjórar",
    text: "Textagreining",
    devTools: "Hönnuðaverkfæri",
    excel: "Excel breytar",
  },
  categoryLabel: "Flokkur",
  openCategory: "Opna flokk",
  toolsCountWord: "verkfæri",
  categories: {
    writing: {
      title: "Ritverkfæri",
      description:
        "Truflanalaus skrif, hraðskrifaðar glósur, einbeitingarlotur, markmið, upplestur, sniðmát og vinnuflæðishjálp.",
    },
    editors: {
      title: "Ritstjórar",
      description:
        "Markdown-, kóða-, JSON- og HTML-ritstjórar fyrir tæknilegan skrif og skipulagt efni.",
    },
    text: {
      title: "Textagreiningartól",
      description:
        "Orða-, stafa-, setninga- og málsgreinatölur með læsileika- og samanburðarverkfærum.",
    },
    devTools: {
      title: "Hönnuðaverkfæri",
      description:
        "Sniðarar, minnkarar, kóðarar og regex-tól fyrir daglega vefþróun.",
    },
    excel: {
      title: "Excel breytingatól",
      description:
        "Breyta á milli Excel og CSV, JSON, XML, PDF, ODS, Google Sheets og fleiri töflureiknissniða.",
    },
    documents: {
      title: "Skjala breytingatól",
      description:
        "Breyta PDF-, Word-, TXT-, Markdown-, HTML-, RTF- og PowerPoint-skrám til ritunar og útgáfu.",
    },
    data: {
      title: "Gagna- og kóðabreytar",
      description:
        "Flytja gögn á milli JSON, CSV, XML, YAML, SQL og venjulegs texta fyrir vefþjónustu og gagnaflæði.",
    },
    format: {
      title: "Textahjálpartól",
      description:
        "Breyta há-/lágstöfum, línuvinnsla, textahreinsun og þjappað sniðverkfæri fyrir fljótlegar textabreytingar.",
    },
  },
  aboutTitle: "Um ókeypis netverkfærin okkar",
  aboutBody:
    "Velkomin í heildarsafn ókeypis netverkfæra okkar sem eru hönnuð til að einfalda textaritun, gagnaumbreytingu, skjalavinnslu og vinnuflæði hönnuða.",
  footer: {
    before: "Ertu að leita að klassíska ritfletinum? ",
    linkLabel: "Gjörðabókarritstjórinn",
    after:
      " býður enn upp á fullkomna ríkulega textaupplifun með töflum, myndum og sniði.",
  },
};

const ig: ToolsHubCopy = {
  pageTitle: "Notepad & Kayan Ọrụ Ederede",
  intro:
    "Chọta kayan ọrụ ederede Notepad ọkachamara niile ị nwere ike iji n'efu na n'enweghị njedebe.",
  introLink: {
    before: "Chọta kayan ọrụ ederede ",
    label: "Notepad",
    after: " ọkachamara niile ị nwere ike iji n'efu na n'enweghị njedebe.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad n'ịntanetị",
  chips: {
    writing: "Kayan ederede",
    editors: "Kayan editọ",
    text: "Nyocha ederede",
    devTools: "Kayan mmemme",
    excel: "Ndị ntụgharị Excel",
  },
  categoryLabel: "Ụdị",
  openCategory: "Mepee ụdị",
  toolsCountWord: "kayan ọrụ",
  categories: {
    writing: {
      title: "Kayan Ederede",
      description:
        "Ederede na-enweghị mgbagwoju anya, ndetu ngwa ngwa, oge nlebara anya, ebumnuche, dictation, templates, snippets na ndị na-enyere aka na workflow.",
    },
    editors: {
      title: "Kayan Editọ",
      description:
        "Editọ Markdown, koodu, JSON na HTML maka ederede teknụzụ na ọrụ ọdịnaya a haziri ahazi.",
    },
    text: {
      title: "Kayan Nyocha Ederede",
      description:
        "Ihe counter okwu, mkpụrụ edemede, ahịrịokwu na paragraf nwere akara ọgụgụ na ngwa ntụnyere.",
    },
    devTools: {
      title: "Kayan Mmemme",
      description:
        "Ndị na-ahazi koodu, ndị na-ebelata koodu, ndị na-ezobe koodu na ngwa regex maka mmepe weebụ kwa ụbọchị.",
    },
    excel: {
      title: "Kayan Ntụgharị Excel",
      description:
        "Tụgharịa n'etiti Excel na CSV, JSON, XML, PDF, ODS, Google Sheets na usoro mpempe akwụkwọ ndị ọzọ.",
    },
    documents: {
      title: "Kayan Ntụgharị Akwụkwọ",
      description:
        "Tụgharịa faịlụ PDF, Word, TXT, Markdown, HTML, RTF na PowerPoint maka edeziri na mbipụta.",
    },
    data: {
      title: "Kayan Ntụgharị Data & Koodu",
      description:
        "Bugharịa data n'etiti usoro JSON, CSV, XML, YAML, SQL na ederede doro anya maka API na workflows data.",
    },
    format: {
      title: "Kayan Ọrụ Ederede Dị Mkpa",
      description:
        "Tụgharịa mkpụrụ edemede ukwu/obere, arụmọrụ ahịrị, nhicha ederede na ngwa nhazi ederede maka ngwa ngwa.",
    },
  },
  aboutTitle: "Maka Kayan Ọrụ Ịntanetị N'efu Anyị",
  aboutBody:
    "Nnọọ na nchịkọta zuru ezu nke kayan ọrụ ịntanetị n'efu anyị emebere iji mee ka ederede ederede, ntụgharị data, nhazi akwụkwọ na mmepe mmemme dị mfe.",
  footer: {
    before: "Ị na-achọ asambodo ederede mbụ? ",
    linkLabel: "Editọ Notepad",
    after:
      " ka na-enye ahụmịhe ederede zuru oke nwere tebụl, foto na usoro ederede.",
  },
};

const iu: ToolsHubCopy = {
  pageTitle: "ᑎᑎᕋᕐᕕᒃ ᐊᒻᒪ ᑎᑎᕋᕈᑎᑦ ᐊᑐᒐᐃᑦ",
  intro:
    "ᓇᓂᓯᓗᑎᑦ ᑕᒪᐃᓐᓂᒃ ᑎᑎᕋᕐᕕᐅᑉ ᐱᓕᕆᔨᒻᒪᕆᖕᓄᑦ ᑎᑎᕋᕈᑎᖏᓐᓂᒃ ᐊᑐᕈᓐᓇᖅ台ᕐᓂᒃ ᐊᑭᖃᙱᓪᓗᓂ ᐊᒻᒪ ᐊ लिमिटᖃᙱᓪᓗᓂ.",
  introLink: {
    before: "ᓇᓂᓯᓗᑎᑦ ᑕᒪᐃᓐᓂᒃ ᑎᑎᕋᕈᑎᖏᓐᓂᒃ ",
    label: "ᑎᑎᕋᕐᕕᒃ",
    after: " ᐱᓕᕆᔨᒻᒪᕆᖕᓄᑦ ᑎᑎᕋᕈᑎᖏᓐᓂᒃ ᐊᑐᕈᓐᓇᖅᑕᕐᓂᒃ ᐊᑭᖃᙱᓪᓗᓂ.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "ᑎᑎᕋᕐᕕᒃ ᖃᕆᑕᐅᔭᒃᑯᑦ",
  chips: {
    writing: "ᑎᑎᕋᕈᑎᑦ",
    editors: "ᐋᖅᑭᒃᓱᐃᔨᑦ",
    text: "ᑎᑎᖅᑲᓂᒃ ᖃᐅᔨᓴᕐᓂᖅ",
    devTools: "ᓴᓇᔨᐅᑉ ᐊᑐᒐᖏᑦ",
    excel: "Excel-ᒧᑦ ᑐᑭᓯᓇᖅᓯᑎᑦᑎᔨᑦ",
  },
  categoryLabel: "ᖃᓄᐃᑦᑐᓂᖓ",
  openCategory: "ᐋᖅᑭᒃᓱᐃᓂᖅ ᖃᓄᐃᑦᑐᓂᖓᓂᒃ",
  toolsCountWord: "ᐊᑐᒐᐃᑦ",
  categories: {
    writing: {
      title: "ᑎᑎᕋᕈᑎᑦ ᐊᑐᒐᐃᑦ",
      description:
        "ᑎᑎᕋᕐᓂᖅ ᐅᐃgroupedᙱᓪᓗᓂ, ᓱᑲᔪᒥᒃ ᑎᑎᕋᕐᓂᖅ, ᑕᐅᑐᒃᑕᑐᐊᖃᓪᓚᕆᖕᓂᖅ, ᑐᕌᒐᐃᑦ, ᐅᖃᓪᓚᖕᓂᒃᑯᑦ ᑎᑎᕋᕐᓂᖅ, ᐊᑐᒐᒃᓴᐃᑦ ᐊᒻᒪ ᖃᓄᐃᓕᐅᕐᓂᕐᒧᑦ ᐃᑲᔪᖅᑎᑦ.",
    },
    editors: {
      title: "ᐋᖅᑭᒃᓱᐃᔨᑦ ᐊᑐᒐᐃᑦ",
      description:
        "Markdown, code, JSON ᐊᒻᒪ HTML ᐋᖅᑭᒃᓱᐃᔨᑦ ᐱᓕᕆᔾᔪᑎᓄᑦ ᑎᑎᕋᕈᑎᓄᑦ ᐊᒻᒪ ᐋᖅᑭᒃᓯᒪᔪᓄᑦ ᐃᓗᓕᖏᓐᓄᑦ.",
    },
    text: {
      title: "ᑎᑎᖅᑲᓂᒃ ᖃᐅᔨᓴᕐᓂᕐᒧᑦ ᐊᑐᒐᐃᑦ",
      description:
        "ᐅᖃᐅᓯᖅ, ᓇᑭᖅᑕᐅᑦ, ᐅᖃᐅᓯᕐloᒃ ᐊᒻᒪ ᖃᑉᓯᐅᓂᖏᓐᓂᒃ ᖃᐅᔨᓴᕈᑎᑦ ᐅᖃᓕᒫᕈᓐᓇᕐᓂᕐᒧᑦ ᐊᒻᒪ ᐊᔾᔨᐅᙱᓐniᖏᓐᓂᒃ ᖃᐅᔨᓴᕈᑎᑦ.",
    },
    devTools: {
      title: "ᓴᓇᔨᐅᑉ ᐊᑐᒐᖏᑦ",
      description:
        "ᐋᖅᑭᒃᓯᒪᔪᑦ, ᒥᑭᓪᓕᒋᐊᖅᓯᒪᔪᑦ, ᑐᑭᓕᐅᖅᓯᒪᔪᑦ ᐊᒻᒪ regex ᐊᑐᒐᐃᑦ ᖃᐅᑕᒫᑦ ᖃᕆᑕᐅᔭᒃᑯᑦ ᓴᓇᓂᕐᒧᑦ.",
    },
    excel: {
      title: "Excel-ᒧᑦ ᑐᑭᓯᓇᖅᓯᑎᑦᑎᓂᕐᒧᑦ ᐊᑐᒐᐃᑦ",
      description:
        "Excel ᐊᒻᒪ CSV, JSON, XML, PDF, ODS, Google Sheets ᐊᒻᒪ ᐊᓯᖏᑦ ᖃᕆᑕᐅᔭᒃᑯᑦ ᑎᑎᕋᕈᑎᑦ ᐊᑯᓐniᖓᓂ.",
    },
    documents: {
      title: "ᑎᑎᖅᑲᓂᒃ ᑐᑭᓯᓇᖅᓯᑎᑦᑎᓂᕐᒧᑦ ᐊᑐᒐᐃᑦ",
      description:
        "PDF, Word, TXT, Markdown, HTML, RTF ᐊᒻᒪ PowerPoint ᑐᑭᓯᓇᖅᓯᑎᓪᓗᒋᑦ ᐋᖅᑭᒋᐊᕈᑎᓄᑦ ᐊᒻᒪ ᓴᖅᑭᑎᑦᑎᓂᕐᒧᑦ.",
    },
    data: {
      title: "ᑐᓴᕐᓂᖅ & Code ᑐᑭᓯᓇᖅᓯᑎᑦᑎᓂᕐᒧᑦ ᐊᑐᒐᐃᑦ",
      description:
        "ᑐᓴᕐᓂᖅ JSON, CSV, XML, YAML, SQL ᐊᒻᒪ plain text ᐊᑯᓐᓂᖓᓂ API ᐊᒻᒪ data workflows-mo.",
    },
    format: {
      title: "ᑎᑎᖅᑲᓂᒃ ᐋᖅᑭᒃᓱᐃᓂᕐᒧᑦ ᐊᑐᒐᐃᑦ",
      description:
        "Case ᐋᖅᑭᒋᐊᕐᓗᒍ, ᑎᑎᖅᑲᑦ ᐃᓚᖏᑦ, ᑎᑎᖅᑲᓂᒃ ᓴᓗᒻᒪᖅsaᐃᓂᖅ ᐊᒻᒪ ᒥᑭᔪᑦ ᐋᖅᑭᒃᓱᐃᔾᔪᑎᑦ ᓱᑲᔪᒥᒃ ᑎᑎᖅᑲᓂᒃ ᐋᖅᑭᒋᐊᕐᓂᕐᒧᑦ.",
    },
  },
  aboutTitle: "ᖃᕆᑕᐅᔭᒃᑯᑦ ᐊᑭᖃᙱᑦᑐᓂᒃ ᐊᑐᒐᑦᑎᓐᓂᒃ",
  aboutBody:
    "ᑐᙵᓱᒋᑦ ᖃᕆᑕᐅᔭᒃᑯᑦ ᐊᑭᖃᙱᑦᑐᓂᒃ ᐊᑐᒐᑦᑎᓐᓄᑦ ᐋᖅᑭᒃᑕᐅᓯᒪᔪᑦ ᑎᑎᖅᑲᓂᒃ ᐋᖅᑭᒃᓱᐃᓂᕐᒧᑦ, ᑐᓴᕋᓱᐊᕐᓂᕐᒧᑦ, ᑎᑎᖅᑲᓂᒃ ᐱᓕᕆᓂᕐᒧᑦ ᐊᒻᒪ ᓴᓇᔨᓄᑦ ᐃᑲᔪᕈᑎᓄᑦ.",
  footer: {
    before: "Classic-ᒥᒃ ᑎᑎᕋᕐᕕᖕᒥᒃ ᓇᓂᓯᔪᒪᒍᕕᑦ? ᑎᑎᕋᕐᕕᐅᑉ ",
    linkLabel: "ᑎᑎᕋᕐᕕᐅᑉ ᐋᖅᑭᒃᓱᐃᔨᖓ",
    after:
      " ᓱᓕ ᐊᑐᕈᓐᓇᖅᑎᑦᑎᕗᖅ ᑎᑎᕋᕈᑎᓂᒃ ᒪᓂᕋᕐᓂᒃ, ᐊᔾᔨᓂᒃ ᐊᒻᒪ ᐋᖅᑭᒃᓱᐃᔾᔪᑎᓂᒃ.",
  },
};

const ga: ToolsHubCopy = {
  pageTitle: "Notepad & Uirlisí Scríbhneoireachta",
  intro:
    "Aimsigh gach uirlis scríbhneoireachta Notepad gairmiúil ar féidir leat a úsáid saor in aisce agus gan teorainn.",
  introLink: {
    before: "Aimsigh gach uirlis scríbhneoireachta ",
    label: "Notepad",
    after: " gairmiúil ar féidir leat a úsáid saor in aisce agus gan teorainn.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad ar líne",
  chips: {
    writing: "Uirlisí scríbhneoireachta",
    editors: "Eagarthóirí",
    text: "Anailís téacs",
    devTools: "Uirlisí forbróra",
    excel: "Tiontairí Excel",
  },
  categoryLabel: "Catagóir",
  openCategory: "Oscail an chatagóir",
  toolsCountWord: "uirlisí",
  categories: {
    writing: {
      title: "Uirlisí Scríbhneoireachta",
      description:
        "Scríbhneoireacht saor ó tharraingt aird, meabhraithe tapa, seisiúin dírithe, spriocanna, deachtú, teimpléid, blúiríní cóid agus cabhróirí sreafa oibre.",
    },
    editors: {
      title: "Eagarthóirí",
      description:
        "Eagarthóirí Markdown, cóid, JSON agus HTML le haghaidh scríbhneoireachta teicniúla agus obair ábhair struchtúrtha.",
    },
    text: {
      title: "Uirlisí Anailíse Téacs",
      description:
        "Áiritheoirí focal, carachtar, abairtí agus alt le fóntais inléiteachta agus comparáide.",
    },
    devTools: {
      title: "Uirlisí Forbróra",
      description:
        "Formáiditheoirí, mionaitheoirí, ionchódóirí agus fóntais regex le haghaidh forbairt gréasáin laethúil.",
    },
    excel: {
      title: "Uirlisí Tiontaithe Excel",
      description:
        "Tiontaigh idir Excel agus CSV, JSON, XML, PDF, ODS, Google Sheets agus formáidí scarbhileoige eile.",
    },
    documents: {
      title: "Uirlisí Tiontaithe Doiciméad",
      description:
        "Claochlú comhaid PDF, Word, TXT, Markdown, HTML, RTF agus PowerPoint le haghaidh eagarthóireacht agus foilsiú.",
    },
    data: {
      title: "Uirlisí Tiontaithe Sonraí & Cóid",
      description:
        "Bog sonraí idir formáidí JSON, CSV, XML, YAML, SQL agus téacs soiléir le haghaidh sreafaí oibre API agus sonraí.",
    },
    format: {
      title: "Uirlisí Fóntais Téacs",
      description:
        "Tiontú cáis, oibríochtaí líne, glanadh téacs agus uirlisí formáidithe dlúth le haghaidh claochluithe téacs tapa.",
    },
  },
  aboutTitle: "Faoi Ár nUirlisí Ar Líne In Aisce",
  aboutBody:
    "Fáilte chuig ár mbailiúchán iomlán de uirlisí ar líne in aisce atá deartha chun eagarthóireacht téacs, tiontú sonraí, próiseáil doiciméad agus sreafaí oibre forbróra a shimpliú.",
  footer: {
    before: "An bhfuil tú ag lorg an chanbhás clasaiceach? Cuireann an ",
    linkLabel: "Eagarthóir Notepad",
    after:
      " taithí iomlán téacs shaibhir ar fáil fós le táblaí, íomhánna agus formáidiú.",
  },
};

const it: ToolsHubCopy = {
  pageTitle: "Notepad & Strumenti di Scrittura",
  intro:
    "Trova tutti gli strumenti di scrittura professionali di Notepad che puoi utilizzare gratuitamente e senza limiti.",
  introLink: {
    before: "Trova tutti gli strumenti di scrittura professionali di ",
    label: "Notepad",
    after: " che puoi utilizzare gratuitamente e senza limiti.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Strumenti di scrittura",
    editors: "Editor",
    text: "Analisi del testo",
    devTools: "Strumenti di sviluppo",
    excel: "Convertitori Excel",
  },
  categoryLabel: "Categoria",
  openCategory: "Apri categoria",
  toolsCountWord: "strumenti",
  categories: {
    writing: {
      title: "Strumenti di Scrittura",
      description:
        "Scrittura senza distrazioni, note rapide, sessioni di concentrazione, obiettivi, dettatura, modelli, frammenti di codice e assistenti per il flusso di lavoro.",
    },
    editors: {
      title: "Editor",
      description:
        "Editor Markdown, codice, JSON e HTML per scrittura tecnica e gestione di contenuti strutturati.",
    },
    text: {
      title: "Strumenti di Analisi del Testo",
      description:
        "Conteggio di parole, caratteri, frasi e paragrafi con strumenti di leggibilità e confronto.",
    },
    devTools: {
      title: "Strumenti di Sviluppo",
      description:
        "Formattatori, minificatori, encoder e utilità regex per lo sviluppo web quotidiano.",
    },
    excel: {
      title: "Strumenti di Conversione Excel",
      description:
        "Converti tra Excel e CSV, JSON, XML, PDF, ODS, Google Sheets e altri formati di fogli di calcolo.",
    },
    documents: {
      title: "Strumenti di Conversione Documenti",
      description:
        "Trasforma file PDF, Word, TXT, Markdown, HTML, RTF e PowerPoint per la modifica e la pubblicazione.",
    },
    data: {
      title: "Strumenti di Conversione Dati e Codice",
      description:
        "Trasferisci dati tra i formati JSON, CSV, XML, YAML, SQL e testo semplice per API e flussi di lavoro di dati.",
    },
    format: {
      title: "Strumenti di Utilità di Testo",
      description:
        "Conversione maiuscole/minuscole, operazioni sulle righe, pulizia del testo e strumenti di formattazione compatta per rapide modifiche al testo.",
    },
  },
  aboutTitle: "Informazioni sui nostri strumenti online gratuiti",
  aboutBody:
    "Benvenuto nella nostra raccolta completa di strumenti online gratuiti progettati per semplificare l'editing di testi, la conversione di dati, l'elaborazione di documenti e i flussi di lavoro degli sviluppatori.",
  footer: {
    before: "Cerchi l'area di lavoro classica? L'",
    linkLabel: "editor di Notepad",
    after:
      " offre ancora l'esperienza di testo avanzata completa con tabelle, immagini e formattazione.",
  },
};

const ja: ToolsHubCopy = {
  pageTitle: "メモ帳＆執筆ツール",
  intro:
    "無料かつ無制限で使用できる、メモ帳のすべてのプロフェッショナルな執筆ツールをご覧ください。",
  introLink: {
    before: "無料かつ無制限で使用できる、",
    label: "メモ帳",
    after: "のすべてのプロフェッショナルな執筆ツールをご覧ください。",
    href: "https://notepad.is/",
  },
  ctaNotepad: "オンラインメモ帳",
  chips: {
    writing: "執筆ツール",
    editors: "エディタツール",
    text: "テキスト分析",
    devTools: "開発者ツール",
    excel: "Excel変換",
  },
  categoryLabel: "カテゴリ",
  openCategory: "カテゴリを開く",
  toolsCountWord: "個のツール",
  categories: {
    writing: {
      title: "執筆ツール",
      description:
        "気を散らさない執筆、クイックメモ、集中セッション、目標設定、音声入力、テンプレート、コードスニペット、ワークフロー支援ツール。",
    },
    editors: {
      title: "エディタツール",
      description:
        "テクニカルライティングや構造化されたコンテンツ作成のためのMarkdown、コード、JSON、HTMLエディタ。",
    },
    text: {
      title: "テキスト分析ツール",
      description:
        "可読性スコアや比較ユーティリティを備えた単語、文字、文、段落カウンター。",
    },
    devTools: {
      title: "開発者ツール",
      description:
        "日常的なウェブ開発に役立つフォーマッタ、ミニファイア、エンコーダ、正規表現ユーティリティ。",
    },
    excel: {
      title: "Excel変換ツール",
      description:
        "ExcelとCSV、JSON、XML、PDF、ODS、Googleスプレッドシート、その他のスプレッドシート形式間の相互変換。",
    },
    documents: {
      title: "文書変換ツール",
      description:
        "編集や公開のためのPDF、Word、TXT、Markdown、HTML、RTF、PowerPointファイルの相互変換。",
    },
    data: {
      title: "データ＆コード変換ツール",
      description:
        "APIやデータワークフロー用にJSON、CSV、XML、YAML、SQL、プレーンテキスト形式間でデータを移行。",
    },
    format: {
      title: "テキストユーティリティ",
      description:
        "大文字・小文字変換、行操作、テキストクリーニング、クイック編集用のコンパクトな書式設定ツール。",
    },
  },
  aboutTitle: "無料のオンラインツールについて",
  aboutBody:
    "テキスト編集, データ変換, ドキュメント処理, 開発者ワークフローを簡素化するために設計された, 無料オンラインツールの完全なコレクションへようこそ。",
  footer: {
    before: "クラシックな執筆キャンバスをお探しですか？ ",
    linkLabel: "メモ帳エディタ",
    after:
      "は、表、画像、書式設定を備えた完全なリッチテキスト体験を引き続き提供しています。",
  },
};

const jv: ToolsHubCopy = {
  pageTitle: "Notepad & Piranti Nulis",
  intro:
    "Temokake kabeh piranti nulis Notepad profesional sing bisa digunakake kanthi gratis lan tanpa watesan.",
  introLink: {
    before: "Temokake kabeh piranti nulis ",
    label: "Notepad",
    after: " profesional sing bisa digunakake kanthi gratis lan tanpa watesan.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Notepad online",
  chips: {
    writing: "Piranti nulis",
    editors: "Piranti editor",
    text: "Analisis teks",
    devTools: "Piranti pangembang",
    excel: "Konverter Excel",
  },
  categoryLabel: "Kategori",
  openCategory: "Bukak kategori",
  toolsCountWord: "piranti",
  categories: {
    writing: {
      title: "Piranti Nulis",
      description:
        "Nulis tanpa gangguan, cathetan cepet, sesi fokus, target, dikte, template, snippet, lan pembantu alur kerja.",
    },
    editors: {
      title: "Piranti Editor",
      description:
        "Editor Markdown, kode, JSON, lan HTML kanggo nulis teknis lan karya konten sing terstruktur.",
    },
    text: {
      title: "Piranti Analisis Teks",
      description:
        "Kalkulator tembung, karakter, ukara, lan paragraf kanthi utilitas keterbacaan lan perbandingan.",
    },
    devTools: {
      title: "Piranti Pangembang",
      description:
        "Formatter, minifier, encoder, lan utilitas regex kanggo pangembangan web saben dina.",
    },
    excel: {
      title: "Piranti Konversi Excel",
      description:
        "Konversi antarane Excel lan CSV, JSON, XML, PDF, ODS, Google Sheets, lan format spreadsheet liyane.",
    },
    documents: {
      title: "Piranti Konversi Dokumen",
      description:
        "Transformasi file PDF, Word, TXT, Markdown, HTML, RTF, lan PowerPoint kanggo nyunting lan nerbitake.",
    },
    data: {
      title: "Piranti Konversi Data & Kode",
      description:
        "Pindhah data ing antarane JSON, CSV, XML, YAML, SQL, lan format plain text kanggo API lan alur kerja data.",
    },
    format: {
      title: "Piranti Utilitas Teks",
      description:
        "Konversi kasus, operasi baris, reresik teks, lan piranti format kompak kanggo transformasi teks cepet.",
    },
  },
  aboutTitle: "Babagan Piranti Online Gratis Kita",
  aboutBody:
    "Sugeng rawuh in koleksi lengkap piranti online gratis sing dirancang kanggo nyederhanakake nyunting teks, konversi data, pangolahan dokumen, lan alur kerja pangembang.",
  footer: {
    before: "Nggoleki kanvas klasik? Na ",
    linkLabel: "Editor Notepad",
    after:
      " isih nawakake pengalaman rich-text lengkap kanthi tabel, gambar, lan format.",
  },
};

const kn: ToolsHubCopy = {
  pageTitle: "ನೋಟ್‌ಪ್ಯಾಡ್ ಮತ್ತು ಬರವಣಿಗೆಯ ಉಪಕರಣಗಳು",
  intro:
    "ನೀವು ಉಚಿತವಾಗಿ ಮತ್ತು ಅನಿಯಮಿತವಾಗಿ ಬಳಸಬಹುದಾದ ನೋಟ್‌ಪ್ಯಾಡ್‌ನ ಎಲ್ಲಾ ವೃತ್ತಿಪರ ಬರವಣಿಗೆಯ ಉಪಕರಣಗಳನ್ನು ಹುಡುಕಿ.",
  introLink: {
    before: "ಹುಡುಕಿ ಎಲ್ಲಾ ವೃತ್ತಿಪರ ",
    label: "ನೋಟ್‌ಪ್ಯಾಡ್",
    after: " ಬರವಣಿಗೆಯ ಉಪಕರಣಗಳನ್ನು ನೀವು ಉಚಿತವಾಗಿ ಮತ್ತು ಅನಿಯಮಿತವಾಗಿ ಬಳಸಬಹುದು.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "ನೋಟ್‌ಪ್ಯಾಡ್ ಆನ್‌ಲיין",
  chips: {
    writing: "ಬರವಣಿಗೆಯ ಉಪಕರಣಗಳು",
    editors: "ಎಡಿಟರ್ ಉಪಕರಣಗಳು",
    text: "ಪಠ್ಯ ವಿಶ್ಲೇಷಣೆ",
    devTools: "ಡೆವಲಪರ್ ಉಪಕರಣಗಳು",
    excel: "ಎಕ್ಸೆಲ್ ಪರಿವರ್ತಕಗಳು",
  },
  categoryLabel: "ವರ್ಗ",
  openCategory: "ವರ್ಗವನ್ನು ತೆರೆಯಿರಿ",
  toolsCountWord: "ಉಪಕರಣಗಳು",
  categories: {
    writing: {
      title: "ಬರವಣಿಗೆಯ ಉಪಕರಣಗಳು",
      description:
        "ಗಮನ ಬೇರೆಡೆಗೆ ಸೆಳೆಯದ ಬರವಣಿಗೆ, ತ್ವರಿತ ಟಿಪ್ಪಣಿಗಳು, ಗಮನ ಕೇಂದ್ರೀಕರಿಸುವ ಅವಧಿಗಳು, ಗುರಿಗಳು, ಡಿಕ್ಟೇಶನ್, ಟೆಂಪ್ಲೇಟ್‌ಗಳು, ತುಣುಕುಗಳು ಮತ್ತು ವರ್ಕ್‌ಫ್ಲೋ ಸಹಾಯಕರು.",
    },
    editors: {
      title: "ಎಡಿಟರ್ ಉಪಕರಣಗಳು",
      description:
        "ತಾಂತ್ರಿక ಬರವಣಿಗೆ空间 ಮತ್ತು ರಚನಾತ್ಮक ವಿಷಯದ ಕೆಲಸಕ್ಕಾಗಿ ಮಾರ್ಕ್‌ಡೌನ್, ಕೋಡ್, JSON ಮತ್ತು HTML ಎಡಿಟರ್‌ಗಳು.",
    },
    text: {
      title: "ಪಠ್ಯ ವಿಶ್ಲೇಷಣಾ ಉಪಕರಣಗಳು",
      description:
        "ಓದುವಿಕೆ ಮತ್ತು ಹೋಲಿಕೆ ಉಪಯುಕ್ತತೆಗಳೊಂದಿಗೆ ಪದಗಳು, ಅಕ್ಷರಗಳು, ವಾಕ್ಯಗಳು ಮತ್ತು ಪ್ಯಾರಾಗ್ರಾಫ್ ಕೌಂಟರ್‌ಗಳು.",
    },
    devTools: {
      title: "ಡೆವಲಪರ್ ಉಪಕರಣಗಳು",
      description:
        "ದೈನಂದಿನ ವೆಬ್ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಫಾರ್ಮ್ಯಾಟರ್‌ಗಳು, ಮಿನಿಫೈಯರ್‌ಗಳು, ಎನ್‌ಕೋಡರ್‌ಗಳು ಮತ್ತು ರೆಜೆಕ್ಸ್ ಉಪಯುಕ್ತತೆಗಳು.",
    },
    excel: {
      title: "ಎಕ್ಸೆಲ್ ಪರಿವರ್ತನಾ ಉಪಕರಣಗಳು",
      description:
        "ಎಕ್ಸೆಲ್ ಮತ್ತು CSV, JSON, XML, PDF, ODS, ಗೂಗል ಶೀಟ್‌ಗಳು ಮತ್ತು ಇತರ ಸ್ಪ್ರೆಡ್‌ಶೀಟ್ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳ ನಡುವೆ ಪರಿವರ್ತಿಸಿ.",
    },
    documents: {
      title: "ದಾಖಲೆ ಪರಿವರ್ತನಾ ಉಪಕರಣಗಳು",
      description:
        "ಸಂಪಾದನೆ ಮತ್ತು ಪ್ರಕಟಣೆಗಾಗಿ PDF, Word, TXT, ಮಾರ್ಕ್‌ಡೌನ್, HTML, RTF ಮತ್ತು ಪವರ್‌ಪಾಯಿಂಟ್ ಫೈಲ್‌ಗಳನ್ನು ಪರಿವರ್ತಿಸಿ.",
    },
    data: {
      title: "ಡೇಟಾ ಮತ್ತು ಕೋಡ್ ಪರಿವರ್ತನಾ ಉಪಕರಣಗಳು",
      description:
        "API ಮತ್ತು ಡೇಟಾ ವರ್ಕ್‌ಫ್ಲೋಗಳಿಗಾಗಿ JSON, CSV, XML, YAML, SQL ಮತ್ತು ಪ್ಲೇನ್ ಟೆಕ್ಸ್ಟ್ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳ ನಡುವೆ ಡೇಟಾವನ್ನು ವರ್ಗಾಯಿಸಿ.",
    },
    format: {
      title: "ಪಠ್ಯ ಉಪಯುಕ್ತತೆಯ ಉಪಕರಣಗಳು",
      description:
        "ತ್ವರಿತ ಪಠ್ಯ ಬದಲಾವಣೆಗಳಿಗಾಗಿ ಕೇಸ್ ಪರಿವರ್ತನೆ, ಸಾಲಿನ ಕಾರ್ಯಾಚರಣೆಗಳು, ಪಠ್ಯ ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಕಾಂಪ್ಯಾಕ್ಟ್ ಫಾರ್ಮ್ಯಾಟಿಂಗ್ ಉಪಕರಣಗಳು.",
    },
  },
  aboutTitle: "ನಮ್ಮ ಉಚಿತ ಆನ್‌ಲೈನ್ ಉಪಕರಣಗಳ ಕುರಿತು",
  aboutBody:
    "ಪಠ್ಯ ಸಂಪಾದನೆ, ಡೇಟಾ ಪರಿವರ್ತನೆ, ದಾಖಲೆ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಡೆವಲಪರ್ ವರ್ಕ್‌ಫ್ಲೋಗಳನ್ನು ಸರಳಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಉಚಿತ ಆನ್‌ಲೈನ್ ಉಪಕರಣಗಳ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹಕ್ಕೆ ಸುಸ್ವಾಗत.",
  footer: {
    before: "ನೀವು ಕ್ಲಾಸಿಕ್ ಕ್ಯಾನ್ವಾಸ್ ಅನ್ನು ಹುಡುಕುತ್ತಿದ್ದೀರಾ? ",
    linkLabel: "ನೋಟ್‌ಪ್ಯಾಡ್ ಎಡಿಟರ್",
    after:
      " ಇಂದಿಗೂ ಕೋಷ್ಟಕಗಳು, ಚಿತ್ರಗಳು ಮತ್ತು ಫಾರ್ಮ್ಯಾಟಿಂಗ್‌ನೊಂದಿಗೆ ಸಂಪೂರ್ಣ ರಿಚ್-ಟೆಕ್ಸ್ಟ್ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ.",
  },
};

const kk: ToolsHubCopy = {
  pageTitle: "Блокнот және жазу құралдары",
  intro:
    "Блокноттың барлық кәсіби жазу құралдарын табыңыз, оларды тегін және шектеусіз пайдалана аласыз.",
  introLink: {
    before: "Табыңыз барлық кәсіби ",
    label: "Блокнот",
    after: " жазу құралдарын, оларды тегін және шектеусіз пайдалана аласыз.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Блокнот онлайн",
  chips: {
    writing: "Жазу құралдары",
    editors: "Редактор құралдары",
    text: "Мәтінді талдау",
    devTools: "Әзірлеуші құралдары",
    excel: "Excel түрлендіргіштері",
  },
  categoryLabel: "Санат",
  openCategory: "Санатты ашу",
  toolsCountWord: "құрал",
  categories: {
    writing: {
      title: "Жазу Құралдары",
      description:
        "Алаңдаусыз жазу, жылдам жазбалар, фокус сессиялары, мақсаттар, диктант, шаблондар, код үзінділері және жұмыс процесінің көмекшілері.",
    },
    editors: {
      title: "Редактор Құралдары",
      description:
        "Техникалық жазу және құрылымдалған мазмұнмен жұмыс істеуге арналған Markdown, код, JSON және HTML редакторлары.",
    },
    text: {
      title: "Мәтінді Талдау Құралдары",
      description:
        "Оқылу деңгейін бағалау және салыстыру утилиталары бар сөз, таңба, сөйлем және параграф есептегіштері.",
    },
    devTools: {
      title: "Әзірлеуші Құралдары",
      description:
        "Күнделікті веб-әзірлеуге арналған форматтаушылар, минификаторлар, кодтаушылар және regex утилиталары.",
    },
    excel: {
      title: "Excel Түрлендіру Құралдары",
      description:
        "Excel мен CSV, JSON, XML, PDF, ODS, Google Sheets және басқа электрондық кесте форматтары арасында түрлендіру.",
    },
    documents: {
      title: "Құжаттарды Түрлендіру Құралдары",
      description:
        "Өңдеу және жариялау үшін PDF, Word, TXT, Markdown, HTML, RTF және PowerPoint файлдарын түрлендіру.",
    },
    data: {
      title: "Деректер мен Кодты Түрлендіру Құралдары",
      description:
        "API және деректер ағындары үшін JSON, CSV, XML, YAML, SQL және қарапайым мәтін форматтары арасында деректерді тасымалдау.",
    },
    format: {
      title: "Мәтіндік Утилиталар",
      description:
        "Жылдам мәтіндік өзгерістерге арналған регистрді ауыстыру, жолдармен жұмыс, мәтінді тазалау және ықшам форматтау құралдары.",
    },
  },
  aboutTitle: "Біздің тегін онлайн құралдарымыз туралы",
  aboutBody:
    "Мәтінді өңдеуді, деректерді түрлендіруді, құжаттарды өңдеуді және әзірлеушілердің жұмыс процестерін жеңілдетуге арналған тегін онлайн құралдардың толық жиынтығына қош келдіңіз.",
  footer: {
    before: "Классикалық кенепті іздеп жүрсіз бе? ",
    linkLabel: "Блокнот редакторы",
    after:
      " әлі күнге дейін кестелер, суреттер және форматтау мүмкіндіктері бар толыққанды бай мәтінмен жұмыс істеу мүмкіндігін ұсынады.",
  },
};

const km: ToolsHubCopy = {
  pageTitle: "កូនសៀវភៅចំណាំ និងឧបករណ៍សរសេរ",
  intro:
    "ស្វែងរកឧបករណ៍សរសេរកូនសៀវភៅចំណាំអាជីពទាំងអស់ដែលអ្នកអាចប្រើបានដោយឥតគិតថ្លៃ និងគ្មានដែនកំណត់។",
  introLink: {
    before: "ស្វែងរកឧបករណ៍សរសេរ ",
    label: "កូនសៀវភៅចំណាំ",
    after: " អាជីពទាំងអស់ដែលអ្នកអាចប្រើបានដោយឥតគិតថ្លៃ និងគ្មានដែនកំណត់។",
    href: "https://notepad.is/",
  },
  ctaNotepad: "កូនសៀវភៅចំណាំអនឡាញ",
  chips: {
    writing: "ឧបករណ៍សរសេរ",
    editors: "ឧបករណ៍កែសម្រួល",
    text: "ការវិភាគអត្ថបទ",
    devTools: "ឧបករណ៍អ្នកអភិវឌ្ឍន៍",
    excel: "កម្មវិធីបម្លែង Excel",
  },
  categoryLabel: "ប្រភេទ",
  openCategory: "បើកប្រភេទ",
  toolsCountWord: "ឧបករណ៍",
  categories: {
    writing: {
      title: "ឧបករណ៍សរសេរ",
      description:
        "ការសរសេរដោយគ្មានការរំខាន, កំណត់ត្រារហ័ស, វគ្គផ្តោតអារម្មណ៍, គោលដៅ, ការសរសេរតាមការអាន, គំរូ, បំណែកកូដ និងជំនួយការលំហូរការងារ។",
    },
    editors: {
      title: "ឧបករណ៍កែសម្រួល",
      description:
        "កម្មវិធីកែសម្រួល Markdown, កូដ, JSON និង HTML សម្រាប់ការសរសេរបច្ចេកទេស និងការងារមាតិកាដែលមានរចនាសម្ព័ន្ធ។",
    },
    text: {
      title: "ឧបករណ៍វិភាគអត្ថបទ",
      description:
        "ឧបករណ៍រាប់ពាក្យ, តួអក្សរ, ប្រយោគ និងកថាខណ្ឌ ជាមួយឧបករណ៍វាស់កម្រិតអានងាយស្រួល និងការប្រៀបធៀប។",
    },
    devTools: {
      title: "ឧបករណ៍អ្នកអភិវឌ្ឍន៍",
      description:
        "កម្មវិធីរៀបចំទ្រង់ទ្រាយ, កម្មវិធីបង្រួមកូដ, កម្មវិធីកូដនីយកម្ម និងឧបករណ៍ regex សម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រប្រចាំថ្ងៃ។",
    },
    excel: {
      title: "ឧបករណ៍បម្លែង Excel",
      description:
        "បម្លែងរវាង Excel និង CSV, JSON, XML, PDF, ODS, Google Sheets និងទម្រង់សន្លឹកកិច្ចការផ្សេងទៀត។",
    },
    documents: {
      title: "ឧបករណ៍បម្លែងឯកសារ",
      description:
        "បម្លែងឯកសារ PDF, Word, TXT, Markdown, HTML, RTF និង PowerPoint សម្រាប់ការកែសម្រួល និងការបោះពុម្ពផ្សាយ។",
    },
    data: {
      title: "ឧបករណ៍បម្លែងទិន្នន័យ និងកូដ",
      description:
        "ផ្លាស់ប្តូរទិន្នន័យរវាងទម្រង់ JSON, CSV, XML, YAML, SQL និងអត្ថបទធម្មតាសម្រាប់ API និងលំហូរការងារទិន្នន័យ។",
    },
    format: {
      title: "ឧបករណ៍ប្រើប្រាស់អត្ថបទ",
      description:
        "បម្លែងអក្សរធំ/តូច, ប្រតិបត្តិការលើបន្ទាត់, ការសម្អាតអត្ថបទ និងឧបករណ៍តម្រឹមទ្រង់ទ្រាយរហ័ស។",
    },
  },
  aboutTitle: "អំពីឧបករណ៍អនឡាញឥតគិតថ្លៃរបស់យើង",
  aboutBody:
    "សូមស្វាគមន៍មកកាន់ការប្រមូលផ្តុំពេញលេញនៃឧបករណ៍អនឡាញឥតគិតថ្លៃglassរបស់យើង ដែលត្រូវបានរចនាឡើងដើម្បីសម្រួលដល់ការកែសម្រួលអត្ថបទ ការបម្លែងទិន្នន័យ ការដំណើរការឯកសារ និងលំហូរការងាររបស់អ្នកអភិវឌ្ឍន៍។",
  footer: {
    before: "តើអ្នកកំពុងស្វែងរកផ្ទាំងសរសេរបែបបុរាណមែនទេ? ",
    linkLabel: "កម្មវិធីនិពន្ធកូនសៀវភៅចំណាំ",
    after:
      " នៅតែផ្តល់នូវបទពិសោធន៍អត្ថបទសម្បូរបែបពេញលេញជាមួយតារាង រូបភាព និងទ្រង់ទ្រាយផ្សេងៗ។",
  },
};

const ku: ToolsHubCopy = {
  pageTitle: "Nîşe & Amûrên Nivîsandinê",
  intro:
    "Hemî amûrên nivîsandinê yên profesyonel ên Nîşeyê ku hûn dikarin belaş û bêsînor bikar bînin bibînin.",
  introLink: {
    before: "Hemî amûrên nivîsandinê yên ",
    label: "Nîşe",
    after: " ên profesyonel ku hûn dikarin belaş û bêsînor bikar bînin bibînin.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Nîşe serhêl",
  chips: {
    writing: "Amûrên nivîsandinê",
    editors: "Amûrên edîtorê",
    text: "Analîza nivîsê",
    devTools: "Amûrên pêşdebir",
    excel: "Veguherînerên Excel",
  },
  categoryLabel: "Kategorî",
  openCategory: "Kategorî veke",
  toolsCountWord: "amûr",
  categories: {
    writing: {
      title: "Amûrên Nivîsandinê",
      description:
        "Nivîsandina bêbaldariyê, nîşeyên bilez, danişînên balê, armanc, dîktatorî, şablon, snippet û alîkarên xebatê.",
    },
    editors: {
      title: "Amûrên Edîtorê",
      description:
        "Edîtorên Markdown, kod, JSON û HTML ji bo nivîsandina teknîkî û naveroka sazkirî.",
    },
    text: {
      title: "Amûrên Analîza Nivîsê",
      description:
        "Jimarkerên peyvan, tîpan, hevokan û paragrafan bi karûbarên xwendinê û berhevkirinê.",
    },
    devTools: {
      title: "Amûrên Pêşdebir",
      description:
        "Formatker, kêmker, şîfreker û amûrên regex ji bo pêşvebirina malperê ya rojane.",
    },
    excel: {
      title: "Amûrên Veguherandina Excel",
      description:
        "Di navbera Excel û CSV, JSON, XML, PDF, ODS, Google Sheets û formatên din ên tabloyê de veguherînin.",
    },
    documents: {
      title: "Amûrên Veguherandina Belgeyan",
      description:
        "Pelên PDF, Word, TXT, Markdown, HTML, RTF û PowerPoint ji bo edîtokirin û weşandinê veguherînin.",
    },
    data: {
      title: "Amûrên Veguherandina Dane û Kodê",
      description:
        "Ji bo API û workflows daneyan, daneyan di navbera formatên JSON, CSV, XML, YAML, SQL û nivîsa sade de biguhazînin.",
    },
    format: {
      title: "Amûrên Karûbarê Nivîsê",
      description:
        "Veguheztina tîpan, karên rêzê, paqijkirina nivîsê û amûrên formatkirina kompakt ji bo guhertinên bilez ên nivîsê.",
    },
  },
  aboutTitle: "Amûrên Me Yên Serhêl Ên Belaş",
  aboutBody:
    "Bi xêr hatî berhevoka meya bêkêmasî ya amûrên serhêl ên belaş ku ji bo hêsankirina edîtokirina nivîsê, veguherandina daneyan, hilberandina belgeyan û karên pêşdebiran hatine sêwirandin.",
  footer: {
    before: "Li kaxezek klasîk digerin? ",
    linkLabel: "Edîtorê Nîşeyê",
    after:
      " hîn jî bi tablo, wêne û formatkirinê re ezmûnek nivîsê ya dewlemend a bêkêmasî pêşkêşî dike.",
  },
};

const ky: ToolsHubCopy = {
  pageTitle: "Блокнот жана жазуу куралдары",
  intro:
    "Блокноттун бардык кесипкөй жазуу куралдарын табыңыз, аларды акысыз жана чектөөсүз колдоно аласыз.",
  introLink: {
    before: "Табыңыз бардык кесипкөй жазуу куралдарын ",
    label: "Блокнот",
    after: " акысыз жана чектөөсүз колдоно аласыз.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Блокнот онлайн",
  chips: {
    writing: "Жазуу куралдары",
    editors: "Редактор куралдары",
    text: "Текстти талдоо",
    devTools: "Иштеп чыгуучу куралдары",
    excel: "Excel конвертерлери",
  },
  categoryLabel: "Категория",
  openCategory: "Категорияны ачуу",
  toolsCountWord: "курал",
  categories: {
    writing: {
      title: "Жазуу Куралдары",
      description:
        "Алаксыбай жазуу, тез жазуулар, фокус сессиялары, максаттар, диктант, шаблондор, код үзүндүлөрү жана жумуш процессинин көмөкчүлөрү.",
    },
    editors: {
      title: "Редактор Куралдары",
      description:
        "Техникалык жазуу жана структураланган мазмун менен иштөө үчүн Markdown, код, JSON жана HTML редакторлору.",
    },
    text: {
      title: "Текстти Талдоо Куралдары",
      description:
        "Окулушун баалоо жана салыштыруу утилиталары бар сөз, символ, сүйлөм жана абзац эсептегичтери.",
    },
    devTools: {
      title: "Иштеп Чыгуучу Куралдары",
      description:
        "Күнүмдүк веб-иштеп чыгуу үчүн форматтоочулар, минификаторлар, коддоочулар жана regex утилиталары.",
    },
    excel: {
      title: "Excel Түрлөнтүү Куралдары",
      description:
        "Excel жана CSV, JSON, XML, PDF, ODS, Google Sheets жана башка электрондук таблица форматтарынын ортосунда түрлөнтүү.",
    },
    documents: {
      title: "Документтерди Түрлөнтүү Куралдары",
      description:
        "Өзгөртүү жана жарыялоо үчүн PDF, Word, TXT, Markdown, HTML, RTF жана PowerPoint файлдарын түрлөнтүү.",
    },
    data: {
      title: "Маалыматтар жана Кодду Түрлөнтүү Куралдары",
      description:
        "API жана маалымат агымдары үчүн JSON, CSV, XML, YAML, SQL жана жөнөкөй текст форматтарынын ортосунда маалыматтарды өткөрүү.",
    },
    format: {
      title: "Тексттик Утилиталар",
      description:
        "Тез тексттик өзгөртүүлөр үчүн регистрди алмаштыруу, саптар менен иштөө, текстти тазалоо жана чакан форматтоо куралдары.",
    },
  },
  aboutTitle: "Биздин акысыз онлайн куралдарымыз жөнүндө",
  aboutBody:
    "Текстти өзгөртүүнү, маалыматтарды түрлөнтүүнү, документтерди иштетүүнү жана иштеп чыгуучулардын жумуш процесстерин жеңілдетүүгө багытталган акысыз онлайн куралдарымыздын толук жыйнагына кош келиңиз.",
  footer: {
    before: "Классикалык кенепти издеп жатасызбы? ",
    linkLabel: "Блокнот редактору",
    after:
      " дагы эле таблицалар, сүрөттөр жана форматтоо мүмкүнчүлүктөрү бар толық кандуу бай текст тажрыйбасын сунуштайт.",
  },
};

const lo: ToolsHubCopy = {
  pageTitle: "ປື້ມບັນທຶກ & ເຄື່ອງມືການຂຽນ",
  intro:
    "ຊອກຫາເຄື່ອງມືການຂຽນປື້ມບັນທຶກແບບມືອາຊີບທັງໝົດທີ່ທ່ານສາມາດນໍາໃຊ້ໄດ້ຟຣີ ແລະ ບໍ່ຈໍາກັດ.",
  introLink: {
    before: "ຊອກຫາເຄື່ອງມືການຂຽນ ",
    label: "ປື້ມບັນທຶກ",
    after: " ແບບມືອາຊີບທັງໝົດທີ່ທ່ານສາມາດນໍາໃຊ້ໄດ້ຟຣີ ແລະ ບໍ່ຈໍາກັດ.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "ປື້ມບັນທຶກອອນໄລນ໌",
  chips: {
    writing: "ເຄື່ອງມືການຂຽນ",
    editors: "ເຄື່ອງມືບັນນາທິການ",
    text: "ການວິເຄາະຂໍ້ຄວາມ",
    devTools: "ເຄື່ອງມືນັກພັດທະນາ",
    excel: "ຕົວແປງ Excel",
  },
  categoryLabel: "ໝວດໝູ່",
  openCategory: "ເປີດໝວດໝູ່",
  toolsCountWord: "ເຄື່ອງມື",
  categories: {
    writing: {
      title: "ເຄື່ອງມືການຂຽນ",
      description:
        "CN: ການຂຽນທີ່ບໍ່ມີການລົບກວນ, ບັນທຶກໄວ, ເຊດຊັນຈຸດສຸມ, ເປົ້າໝາຍ, ການຂຽນຕາມຄໍາບອກ, ແມ່ແບບ, ບົດສະຫຼຸບລະຫັດ ແລະ ຕົວຊ່ວຍຂະບວນການເຮັດວຽກ.",
    },
    editors: {
      title: "ເຄື່ອງມືບັນນາທິການ",
      description:
        "ຕົວແກ້ໄຂ Markdown, ລະຫັດ, JSON ແລະ HTML ສໍາລັບການຂຽນດ້ານວິຊາການ ແລະ ວຽກງານເນື້ອຫາທີ່ມີໂຄງສ້າງ.",
    },
    text: {
      title: "...: ເຄື່ອງມືວິເຄາະຂໍ້ຄວາມ",
      description:
        "ເຄື່ອງມືນັບຄໍາສັບ, ຕົວອັກສອນ, ປະໂຫຍກ ແລະ ຫຍໍ້ໜ້າ ພ້ອມເຄື່ອງມືວັດແທກຄວາມງ່າຍໃນການອ່ານ ແລະ ການປຽបທຽ比.",
    },
    devTools: {
      title: "ເຄື່ອງມືນັກພັດທະນາ",
      description:
        "ຕົວຈັດຮູບແບບ, ຕົວບີບອັດລະຫັດ, ຕົວເຂົ້າລະຫັດ ແລະ ເຄື່ອງມື regex ສໍາລັບການພັດທະນາເວັບປະຈໍາວັນ.",
    },
    excel: {
      title: "ເຄື່ອງມືແປງ Excel",
      description:
        "ແປງລະຫວ່າງ Excel ແລະ CSV, JSON, XML, PDF, ODS, Google Sheets ແລະ ຮູບແບບສະເປຣດຊີດອື່ນໆ.",
    },
    documents: {
      title: "ເຄື່ອງມືແປງເອກະសານ",
      description:
        "ແປງໄຟລ໌ PDF, Word, TXT, Markdown, HTML, RTF ແລະ PowerPoint ສໍາລັບການແກ້ໄຂ ແລະ ການເຜີຍແຜ່.",
    },
    data: {
      title: "ເຄື່ອງມືແປງຂໍ້ມູນ ແລະ ລະຫັດ",
      description:
        "ຍົกຍ້າຍຂໍ້ມູນລະຫວ່າງຮູບແບບ JSON, CSV, XML, YAML, SQL ແລະ ຂໍ້ຄວາມທໍາມະດາສໍາລັບ API ແລະ ຂະບວນການເຮັດວຽກຂອງຂໍ້ມູນ.",
    },
    format: {
      title: "ເຄື່ອງມືໃຊ້ສອยຂໍ້ຄວາມ",
      description:
        "ແປງຕົວອັກສອນໃຫຍ່/ນ້ອຍ, ການເຮັດວຽກກັບແຖວ, ການອະນາໄມຂໍ້ຄວາມ ແລະ ເຄື່ອງມືຈັດຮູບແບບດ່ວນ.",
    },
  },
  aboutTitle: "ກ່ຽວກັບເຄື່ອງມືອອນໄລນ໌ຟຣີຂອງພວກເຮົາ",
  aboutBody:
    "ຍິນດີຕ້ອນຮັບສູ່ຄໍເລັກຊັນເຄື່ອງມືອອນໄລນ໌ຟຣີທັງໝົດຂອງພວກເຮົາ ທີ່ຖືກອອກແບບມາເພື່ອເຮັດໃຫ້ການແກ້ໄຂຂໍ້ຄວາມ, ການແປງຂໍ້ມູນ, ການປະມວນຜົນເອກະສານ ແລະ ຂະບວນการເຮັດວຽກຂອງນັກພັດທະນາງ່າຍຂຶ້ນ.",
  footer: {
    before: "ທ່ານກໍາລັງຊອກຫາພື້ນທີ່ຂຽນແບບຄລາສສິກບໍ່? ",
    linkLabel: "ຕົວແກ້ໄຂປື້ມບັນທຶກ",
    after:
      " ຍັງຄົງສະໜອງປະສົບການຂໍ້ຄວາມທີ່ສົມບູນແບບດ້ວຍຕາຕະລາງ, ຮູບພາບ ແລະ ການຈັດຮູບແບບ.",
  },
};

const lv: ToolsHubCopy = {
  pageTitle: "Piezīmjbloks & Rakstīšanas rīki",
  intro:
    "Atrodiet visus profesionālos Piezīmjbloka rakstīšanas rīkus, kurus varat izmantot bez maksas un bez ierobežojumiem.",
  introLink: {
    before: "Atrodiet visus profesionālos ",
    label: "Piezīmjbloka",
    after: " rakstīšanas rīkus, kurus varat izmantot bez maksas un bez ierobežojumiem.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Piezīmjbloks tiešsaistē",
  chips: {
    writing: "Rakstīšanas rīki",
    editors: "Redaktori",
    text: "Teksta analīze",
    devTools: "Izstrādātāju rīki",
    excel: "Excel konvertētāji",
  },
  categoryLabel: "Kategorija",
  openCategory: "Atvērt kategoriju",
  toolsCountWord: "rīki",
  categories: {
    writing: {
      title: "Rakstīšanas Rīki",
      description:
        "Rakstīšana bez traucēkļiem, ātras piezīmes, fokusa sesijas, mērķi, diktēšana, veidnes, koda fragmenti un darba plūsmas palīgi.",
    },
    editors: {
      title: "Redaktori",
      description:
        "Markdown, koda, JSON un HTML redaktori tehniskai rakstīšanai un strukturētam satura darbam.",
    },
    text: {
      title: "Teksta Analīzes Rīki",
      description:
        "Vārdu, rakstzīmju, teikumu un rindkopu skaitītāji ar lasāmības un salīdzināšanas utilītprogrammām.",
    },
    devTools: {
      title: "Izstrādātāju Rīki",
      description:
        "Formatētāji, minificētāji, kodētāji un regex rīki ikdienas tīmekļa izstrādei.",
    },
    excel: {
      title: "Excel Konvertēšanas Rīki",
      description:
        "Konvertējiet starp Excel un CSV, JSON, XML, PDF, ODS, Google Sheets un citiem izklājlapu formātiem.",
    },
    documents: {
      title: "Dokumentu Konvertēšanas Rīki",
      description:
        "Pārveidojiet PDF, Word, TXT, Markdown, HTML, RTF un PowerPoint failus rediģēšanai un publicēšanai.",
    },
    data: {
      title: "Datu un Koda Konvertēšanas Rīki",
      description:
        "Pārvietojiet datus starp JSON, CSV, XML, YAML, SQL un vienkārša teksta formātiem API un datu darba plūsmām.",
    },
    format: {
      title: "Teksta Utilītprogrammas",
      description:
        "Reģistra konvertēšana, darbības ar rindām, teksta tīrīšana un kompakti formatēšanas rīki ātrām teksta izmaiņām.",
    },
  },
  aboutTitle: "Par mūsu bezmaksas tiešsaistes rīkiem",
  aboutBody:
    "Laipni lūdzam mūsu pilnajā bezmaksas tiešsaistes rīku kolekcijā, kas paredzēta teksta rediģēšanas, datu konvertēšanas, dokumentu apstrādes un izstrādātāju darba plūsmu vienkāršošanai.",
  footer: {
    before: "Meklējat klasisko darba virsmu? ",
    linkLabel: "Piezīmjbloka redaktors",
    after:
      " joprojām piedāvā pilnvērtīgu bagātināta teksta pieredzi ar tabulām, attēliem un formatējumu.",
  },
};

const lt: ToolsHubCopy = {
  pageTitle: "Užrašinė & Rašymo įrankiai",
  intro:
    "Raskite visus profesionalius Užrašinės rašymo įrankius, kuriais galite naudotis nemokamai ir be apribojimų.",
  introLink: {
    before: "Raskite visus profesionalius ",
    label: "Užrašinės",
    after: " rašymo įrankius, kuriais galite naudotis nemokamai ir be apribojimų.",
    href: "https://notepad.is/",
  },
  ctaNotepad: "Užrašinė internete",
  chips: {
    writing: "Rašymo įrankiai",
    editors: "Redaktoriai",
    text: "Teksto analizė",
    devTools: "Kūrėjų įrankiai",
    excel: "Excel keitikliai",
  },
  categoryLabel: "Kategorija",
  openCategory: "Atidaryti kategoriją",
  toolsCountWord: "įrankiai",
  categories: {
    writing: {
      title: "Rašymo Įrankiai",
      description:
        "Rašymas be blaškymosi, greiti užrašai, susikaupimo sesijos, tikslai, diktavimas, šablonai, kodo fragmentai ir darbo eigos padėjėjai.",
    },
    editors: {
      title: "Redaktoriai",
      description:
        "Markdown, koda, JSON ir HTML redaktoriai techniniam rašymui ir struktūrizuotam turinio darbui.",
    },
    text: {
      title: "Teksto Analizės Įrankiai",
      description:
        "Žodžių, simbolių, sakinių ir pastraipų skaitikliai su skaitomumo ir palyginimo komunalinėmis programomis.",
    },
    devTools: {
      title: "Kūrėjų Įrankiai",
      description:
        "Formatuotuvai, minifikatoriai, kodavimo įrankiai ir regex įrankiai kasdieniam svetainių kūrimui.",
    },
    excel: {
      title: "Excel Konvertavimo Įrankiai",
      description:
        "Konvertuokite tarp Excel ir CSV, JSON, XML, PDF, ODS, Google Sheets ir kitų skaičiuoklių formatų.",
    },
    documents: {
      title: "Dokumentų Konvertavimo Įrankiai",
      description:
        "Konvertuokite PDF, Word, TXT, Markdown, HTML, RTF ir PowerPoint failus redagavimui ir publikavimui.",
    },
    data: {
      title: "Duomenų ir Kodo Konvertavimo Įrankiai",
      description:
        "Perkelkite duomenis tarp JSON, CSV, XML, YAML, SQL ir paprasto teksto formatų API ir duomenų darbo eigoms.",
    },
    format: {
      title: "Teksto Komunalinės Programos",
      description:
        "Didžiųjų/mažųjų raidžių keitimas, veiksmai su eilutėmis, teksto valymas ir kompaktiški formatavimo įrankiai greitam teksto keitimui.",
    },
  },
  aboutTitle: "Apie mūsų nemokamus internetinius įrankius",
  aboutBody:
    "Sveiki atvykę į mūsų nemokamų internetinių įrankių kolekciją, skirtą teksto redagavimui, duomenų konvertavimui, dokumentų apdorojimui ir kūrėjų darbo eigoms supaprastinti.",
  footer: {
    before: "Iškote klasikinės darbo vietos? ",
    linkLabel: "Užrašinės redaktorius",
    after:
      " vis dar siūlo pilnavertę raiškiojo teksto patirtį su lentelėmis, paveikslėliais ir formatavimu.",
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
  az,
  eu,
  bn,
  bs,
  bg,
  my,
  ca,
  ru,
  zh,
  fr,
  ko,
  id,
  ceb,
  hr,
  cs,
  da,
  nl,
  et,
  fj,
  fi,
  gl,
  ka,
  de,
  el,
  kl,
  gn,
  gu,
  ht,
  ha,
  he,
  hi,
  hu,
  is,
  ig,
  iu,
  ga,
  it,
  ja,
  jv,
  kn,
  kk,
  km,
  ku,
  ky,
  lo,
  lv,
  lt,
};

/** Locales rendered right-to-left on the tools hub page. */
export const toolsHubRtlLocales = new Set(["ar", "ur", "fa", "he", "ps"]);

export function getToolsHubCopy(locale: string): ToolsHubCopy {
  return byLocale[locale] ?? en;
}
