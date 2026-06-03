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
};

/** Locales rendered right-to-left on the tools hub page. */
export const toolsHubRtlLocales = new Set(["ar", "ur", "fa", "he", "ps"]);

export function getToolsHubCopy(locale: string): ToolsHubCopy {
  return byLocale[locale] ?? en;
}
