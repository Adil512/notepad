import { defaultLocale } from "./i18n";

export type LocaleMetadata = { title: string; description: string };

/** Per-locale default <title> and meta description (homepage / layout). */
export const LOCALE_METADATA: Record<string, LocaleMetadata> = {
  en: {
    title:
      "Notepad Online – Free Online Text Editor & Note Writer [Write, Save & Share]",
    description:
      "Notepad Online is a fast, free text editor to write, edit, and save notes online. Access your notes anytime and share instantly from any device.",
  },
  zh: {
    title: "在线记事本 – 免费在线文本编辑器与笔记工具【写作、保存与分享】",
    description:
      "在线记事本是一款快速、免费的文本编辑器，可用于在线编写、编辑和保存笔记。您可以随时访问您的笔记，并可从任何设备即时分享。",
  },
  es: {
    title:
      "Bloc de notas en línea – Editor de texto gratuito y creador de notas [Escribir, guardar y compartir]",
    description:
      "Bloc de notas en línea es un editor de texto rápido y gratuito para escribir, editar y guardar notas en línea. Accede a tus notas en cualquier momento y compártelas al instante desde cualquier dispositivo.",
  },
  ar: {
    title:
      "المفكرة عبر الإنترنت – محرر نصوص مجاني وكتابة الملاحظات [اكتب، احفظ وشارك]",
    description:
      "المفكرة عبر الإنترنت هي محرر نصوص سريع ومجاني لكتابة وتحرير وحفظ الملاحظات عبر الإنترنت. يمكنك الوصول إلى ملاحظاتك في أي وقت ومشاركتها فورًا من أي جهاز.",
  },
  id: {
    title:
      "Notepad Online – Editor Teks Gratis & Penulis Catatan [Tulis, Simpan & Bagikan]",
    description:
      "Notepad Online adalah editor teks cepat dan gratis untuk menulis, mengedit, dan menyimpan catatan secara online. Akses catatan Anda kapan saja dan bagikan secara instan dari perangkat apa pun.",
  },
  ms: {
    title:
      "Notepad Dalam Talian – Editor Teks Percuma & Penulis Nota [Tulis, Simpan & Kongsi]",
    description:
      "Notepad dalam talian ialah editor teks yang pantas dan percuma untuk menulis, mengedit dan menyimpan nota secara dalam talian. Akses nota anda pada bila-bila masa dan kongsikan serta-merta dari mana-mana peranti.",
  },
  pt: {
    title:
      "Bloco de Notas Online – Editor de Texto Gratuito e Escritor de Notas [Escrever, salvar e compartilhar]",
    description:
      "O Bloco de Notas Online é um editor de texto rápido e gratuito para escrever, editar e salvar notas online. Acesse suas notas a qualquer momento e compartilhe instantaneamente de qualquer dispositivo.",
  },
  fr: {
    title:
      "Bloc-notes en ligne – Éditeur de texte gratuit et outil de notes [Écrire, enregistrer et partager]",
    description:
      "Le bloc-notes en ligne est un éditeur de texte rapide et gratuit pour écrire, modifier et enregistrer des notes en ligne. Accédez à vos notes à tout moment et partagez-les instantanément depuis n'importe quel appareil.",
  },
  ja: {
    title: "オンラインメモ帳 – 無料テキストエディタ＆ノート作成ツール【作成・保存・共有】",
    description:
      "オンラインメモ帳は、メモの作成、編集、保存ができる高速で無料のテキストエディタです。いつでもアクセスでき、どのデバイスからでもすぐに共有できます。",
  },
  ru: {
    title:
      "Онлайн блокнот – Бесплатный текстовый редактор и заметки [Писать, сохранять и делиться]",
    description:
      "Онлайн блокнот — это быстрый и бесплатный текстовый редактор для написания, редактирования и сохранения заметок онлайн. Получайте доступ к заметкам в любое время и мгновенно делитесь ими с любого устройства.",
  },
  de: {
    title:
      "Online-Notizblock – Kostenloser Texteditor & Notiz-Tool [Schreiben, speichern & teilen]",
    description:
      "Der Online-Notizblock ist ein schneller und kostenloser Texteditor zum Schreiben, Bearbeiten und Speichern von Notizen online. Greifen Sie jederzeit auf Ihre Notizen zu und teilen Sie sie sofort von jedem Gerät.",
  },
  hi: {
    title:
      "ऑनलाइन नोटपैड – मुफ्त टेक्स्ट एडिटर और नोट लिखने का टूल [लिखें, सेव करें और साझा करें]",
    description:
      "ऑनलाइन नोटपैड एक तेज़ और मुफ्त टेक्स्ट एडिटर है जिससे आप ऑनलाइन नोट लिख, संपादित और सेव कर सकते हैं। अपने नोट्स को कभी भी एक्सेस करें और किसी भी डिवाइस से तुरंत साझा करें।",
  },
  bn: {
    title:
      "অনলাইন নোটপ্যাড – ফ্রি টেক্সট এডিটর ও নোট লেখার টুল [লিখুন, সংরক্ষণ করুন ও শেয়ার করুন]",
    description:
      "অনলাইন নোটপ্যাড একটি দ্রুত এবং ফ্রি টেক্সট এডিটর যা দিয়ে আপনি অনলাইনে নোট লিখতে, এডিট করতে এবং সংরক্ষণ করতে পারেন। যেকোনো সময় আপনার নোট অ্যাক্সেস করুন এবং যেকোনো ডিভাইস থেকে শেয়ার করুন।",
  },
  ur: {
    title:
      "آن لائن نوٹ پیڈ – مفت ٹیکسٹ ایڈیٹر اور نوٹ لکھنے کا ٹول [لکھیں، محفوظ کریں اور شیئر کریں]",
    description:
      "آن لائن نوٹ پیڈ ایک تیز اور مفت ٹیکسٹ ایڈیٹر ہے جس سے آپ آن لائن نوٹس لکھ، ایڈٹ اور محفوظ کر سکتے ہیں۔ اپنے نوٹس کسی بھی وقت حاصل کریں اور کسی بھی ڈیوائس سے فوراً شیئر کریں۔",
  },
  tr: {
    title:
      "Online Not Defteri – Ücretsiz Metin Editörü ve Not Yazma Aracı [Yaz, Kaydet ve Paylaş]",
    description:
      "Online Not Defteri, notlarınızı yazmak, düzenlemek ve kaydetmek için hızlı ve ücretsiz bir metin editörüdür. Notlarınıza istediğiniz zaman erişin ve herhangi bir cihazdan anında paylaşın.",
  },
  ko: {
    title: "온라인 메모장 – 무료 텍스트 편집기 및 노트 작성 도구 [작성, 저장 및 공유]",
    description:
      "온라인 메모장은 메모를 작성, 편집 및 저장할 수 있는 빠르고 무료인 텍스트 편집기입니다. 언제든지 노트에 접근하고 어떤 기기에서든 즉시 공유할 수 있습니다.",
  },
  vi: {
    title:
      "Notepad Trực Tuyến – Trình soạn thảo văn bản miễn phí & ghi chú [Viết, lưu và chia sẻ]",
    description:
      "Notepad trực tuyến là trình soạn thảo văn bản nhanh và miễn phí để viết, chỉnh sửa và lưu ghi chú. Truy cập ghi chú mọi lúc và chia sẻ ngay từ bất kỳ thiết bị nào.",
  },
  it: {
    title:
      "Blocco note online – Editor di testo gratuito e scrittura note [Scrivi, salva e condividi]",
    description:
      "Il blocco note online è un editor di testo veloce e gratuito per scrivere, modificare e salvare note online. Accedi alle tue note in qualsiasi momento e condividile istantaneamente da qualsiasi dispositivo.",
  },
  fa: {
    title:
      "نوت پد آنلاین – ویرایشگر متن رایگان و ابزار یادداشت‌برداری [بنویس، ذخیره کن و اشتراک‌گذاری کن]",
    description:
      "نوت پد آنلاین یک ویرایشگر متن سریع و رایگان برای نوشتن، ویرایش و ذخیره یادداشت‌ها است. در هر زمان به یادداشت‌های خود دسترسی داشته باشید و از هر دستگاهی فوراً به اشتراک بگذارید.",
  },
  th: {
    title:
      "โน้ตแพดออนไลน์ – โปรแกรมแก้ไขข้อความฟรีและเครื่องมือเขียนโน้ต [เขียน บันทึก และแชร์]",
    description:
      "โน้ตแพดออนไลน์เป็นโปรแกรมแก้ไขข้อความที่รวดเร็วและฟรีสำหรับเขียน แก้ไข และบันทึกโน้ต เข้าถึงโน้ตของคุณได้ทุกเวลาและแชร์ได้ทันทีจากทุกอุปกรณ์",
  },
  pl: {
    title:
      "Notatnik online – Darmowy edytor tekstu i narzędzie do notatek [Pisz, zapisuj i udostępniaj]",
    description:
      "Notatnik online to szybki i darmowy edytor tekstu do pisania, edytowania i zapisywania notatek. Uzyskaj dostęp do swoich notatek w dowolnym czasie i udostępniaj je natychmiast z dowolnego urządzenia.",
  },
  nl: {
    title:
      "Online notitieblok – Gratis teksteditor en notitieschrijver [Schrijven, opslaan en delen]",
    description:
      "Online notitieblok is een snelle en gratis teksteditor om notities te schrijven, bewerken en op te slaan. Krijg altijd toegang tot je notities en deel ze direct vanaf elk apparaat.",
  },
  sv: {
    title:
      "Online anteckningsblock – Gratis textredigerare och anteckningsverktyg [Skriv, spara och dela]",
    description:
      "Online anteckningsblock är en snabb och gratis textredigerare för att skriva, redigera och spara anteckningar. Få tillgång till dina anteckningar när som helst och dela dem direkt från vilken enhet som helst.",
  },
  el: {
    title:
      "Διαδικτυακό Σημειωματάριο – Δωρεάν επεξεργαστής κειμένου και εργαλείο σημειώσεων [Γράψτε, αποθηκεύστε και μοιραστείτε]",
    description:
      "Το διαδικτυακό σημειωματάριο είναι ένας γρήγορος και δωρεάν επεξεργαστής κειμένου για να γράφετε, να επεξεργάζεστε και να αποθηκεύετε σημειώσεις. Έχετε πρόσβαση στις σημειώσεις σας οποιαδήποτε στιγμή και μοιραστείτε τις άμεσα από οποιαδήποτε συσκευή.",
  },
  cs: {
    title:
      "Online poznámkový blok – Bezplatný textový editor a nástroj pro poznámky [Pište, ukládejte a sdílejte]",
    description:
      "Online poznámkový blok je rychlý a bezplatný textový editor pro psaní, úpravu a ukládání poznámek. Přistupujte ke svým poznámkám kdykoli a sdílejte je okamžitě z jakéhokoli zařízení.",
  },
  ro: {
    title:
      "Notepad Online – Editor de text gratuit și scriere note [Scrie, salvează și distribuie]",
    description:
      "Notepad Online este un editor de text rapid și gratuit pentru a scrie, edita și salva note online. Accesează notițele oricând și distribuie instant de pe orice dispozitiv.",
  },
  hu: {
    title:
      "Online jegyzettömb – Ingyenes szövegszerkesztő és jegyzetíró [Írj, ments és ossz meg]",
    description:
      "Az online jegyzettömb egy gyors és ingyenes szövegszerkesztő jegyzetek írásához, szerkesztéséhez és mentéséhez. Bármikor hozzáférhetsz jegyzeteidhez és azonnal megoszthatod őket bármilyen eszközről.",
  },
  he: {
    title:
      "פנקס רשימות אונליין – עורך טקסט חינמי וכלי לכתיבת הערות [כתוב, שמור ושתף]",
    description:
      "פנקס רשימות אונליין הוא עורך טקסט מהיר וחינמי לכתיבה, עריכה ושמירה של הערות. גש להערות שלך בכל זמן ושתף אותן מיד מכל מכשיר.",
  },
  da: {
    title:
      "Online notesblok – Gratis teksteditor og noteværktøj [Skriv, gem og del]",
    description:
      "Online notesblok er en hurtig og gratis teksteditor til at skrive, redigere og gemme noter. Få adgang til dine noter når som helst og del dem med det samme fra enhver enhed.",
  },
  fi: {
    title:
      "Online muistio – Ilmainen tekstieditori ja muistiinpanotyökalu [Kirjoita, tallenna ja jaa]",
    description:
      "Online muistio on nopea ja ilmainen tekstieditori muistiinpanojen kirjoittamiseen, muokkaamiseen ja tallentamiseen. Käytä muistiinpanojasi milloin tahansa ja jaa ne heti miltä tahansa laitteelta.",
  },
  no: {
    title:
      "Online notatblokk – Gratis teksteditor og notatverktøy [Skriv, lagre og del]",
    description:
      "Online notatblokk er en rask og gratis teksteditor for å skrive, redigere og lagre notater. Få tilgang til notatene dine når som helst og del dem umiddelbart fra hvilken som helst enhet.",
  },
  sk: {
    title:
      "Online poznámkový blok – Bezplatný textový editor a nástroj na poznámky [Píšte, ukladajte a zdieľajte]",
    description:
      "Online poznámkový blok je rýchly a bezplatný textový editor na písanie, úpravu a ukladanie poznámok. Pristupujte k svojim poznámkam kedykoľvek a okamžite ich zdieľajte z akéhokoľvek zariadenia.",
  },
  bg: {
    title:
      "Онлайн бележник – Безплатен текстов редактор и инструмент за бележки [Пиши, запази и сподели]",
    description:
      "Онлайн бележник е бърз и безплатен текстов редактор за писане, редактиране и запазване на бележки. Достъпвайте бележките си по всяко време и ги споделяйте незабавно от всяко устройство.",
  },
  hr: {
    title:
      "Online bilježnica – Besplatan uređivač teksta i alat za bilješke [Piši, spremi i podijeli]",
    description:
      "Online bilježnica je brz i besplatan uređivač teksta za pisanje, uređivanje i spremanje bilješki. Pristupite svojim bilješkama u bilo kojem trenutku i odmah ih podijelite s bilo kojeg uređaja.",
  },
  sr: {
    title:
      "Online beležnica – Besplatan tekst editor i alat za beleške [Piši, sačuvaj i podeli]",
    description:
      "Online beležnica je brz i besplatan tekst editor za pisanje, uređivanje i čuvanje beleški. Pristupite beleškama bilo kada i odmah ih podelite sa bilo kog uređaja.",
  },
  uk: {
    title:
      "Онлайн блокнот – Безкоштовний текстовий редактор і нотатки [Пишіть, зберігайте та діліться]",
    description:
      "Онлайн блокнот — це швидкий і безкоштовний текстовий редактор для написання, редагування та збереження нотаток. Отримуйте доступ до своїх нотаток у будь-який час і миттєво діліться ними з будь-якого пристрою.",
  },
  ta: {
    title:
      "ஆன்லைன் நோட்பேட் – இலவச உரை தொகுப்பி மற்றும் குறிப்பெழுதல் கருவி [எழுது, சேமி மற்றும் பகிர்]",
    description:
      "ஆன்லைன் நோட்பேட் ஒரு வேகமான மற்றும் இலவச உரை தொகுப்பி ஆகும், இது குறிப்புகளை எழுத, திருத்த மற்றும் சேமிக்க உதவுகிறது. எந்த நேரத்திலும் உங்கள் குறிப்புகளை அணுகி எந்த சாதனத்திலிருந்தும் உடனடியாக பகிரலாம்.",
  },
  te: {
    title:
      "ఆన్‌లైన్ నోట్‌ప్యాడ్ – ఉచిత టెక్స్ట్ ఎడిటర్ & నోట్ రాయడానికి సాధనం [రాయండి, సేవ్ చేయండి & షేర్ చేయండి]",
    description:
      "ఆన్‌లైన్ నోట్‌ప్యాడ్ ఒక వేగవంతమైన మరియు ఉచిత టెక్స్ట్ ఎడిటర్, ఇది నోట్లు రాయడానికి, సవరించడానికి మరియు సేవ్ చేయడానికి ఉపయోగపడుతుంది. ఎప్పుడైనా మీ నోట్లను యాక్సెస్ చేసి ఏ పరికరం నుండైనా వెంటనే షేర్ చేయండి.",
  },
  mr: {
    title:
      "ऑनलाइन नोटपॅड – मोफत टेक्स्ट एडिटर आणि नोट लेखन साधन [लिहा, जतन करा आणि शेअर करा]",
    description:
      "ऑनलाइन नोटपॅड हे जलद आणि मोफत टेक्स्ट एडिटर आहे जे नोट्स लिहिणे, संपादित करणे आणि जतन करणे सोपे करते. कधीही आपल्या नोट्सला प्रवेश करा आणि कोणत्याही डिव्हाइसवरून लगेच शेअर करा.",
  },
  gu: {
    title:
      "ઓનલાઈન નોટપેડ – મફત ટેક્સ્ટ એડિટર અને નોંધ લખવાનું સાધન [લખો, સાચવો અને શેર કરો]",
    description:
      "ઓનલાઈન નોટપેડ એક ઝડપી અને મફત ટેક્સ્ટ એડિટર છે જેમાં તમે નોંધો લખી, સંપાદિત કરી અને સાચવી શકો છો. તમારા નોંધોને ક્યારેપણ ઍક્સેસ કરો અને કોઈપણ ઉપકરણ પરથી તરત શેર કરો.",
  },
  kn: {
    title:
      "ಆನ್‌ಲೈನ್ ನೋಟ್‌ಪ್ಯಾಡ್ – ಉಚಿತ ಪಠ್ಯ ಸಂಪಾದಕ ಮತ್ತು ಟಿಪ್ಪಣಿ ಬರೆಯುವ ಸಾಧನ [ಬರೆಯಿರಿ, ಉಳಿಸಿ ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಿ]",
    description:
      "ಆನ್‌ಲೈನ್ ನೋಟ್‌ಪ್ಯಾಡ್ ಒಂದು ವೇಗವಾದ ಮತ್ತು ಉಚಿತ ಪಠ್ಯ ಸಂಪಾದಕವಾಗಿದ್ದು ಟಿಪ್ಪಣಿಗಳನ್ನು ಬರೆಯಲು, ಸಂಪಾದಿಸಲು ಮತ್ತು ಉಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ಯಾವಾಗ ಬೇಕಾದರೂ ಪ್ರವೇಶಿಸಿ ಯಾವುದೇ ಸಾಧನದಿಂದ ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಿ.",
  },
  ml: {
    title:
      "ഓൺലൈൻ നോട്ട്‌പാഡ് – സൗജന്യ ടെക്സ്റ്റ് എഡിറ്റർ & കുറിപ്പെഴുത്ത് ഉപകരണം [എഴുതുക, സംരക്ഷിക്കുക, പങ്കിടുക]",
    description:
      "ഓൺലൈൻ നോട്ട്‌പാഡ് ഒരു വേഗതയേറിയ സൗജന്യ ടെക്സ്റ്റ് എഡിറ്ററാണ്, കുറിപ്പുകൾ എഴുതാനും തിരുത്താനും സംരക്ഷിക്കാനും ഉപയോഗിക്കാം. നിങ്ങളുടെ കുറിപ്പുകൾ എപ്പോഴും ആക്‌സസ് ചെയ്ത് ഏത് ഉപകരണത്തിലെയും ഉടൻ പങ്കിടുക.",
  },
  si: {
    title:
      "ඔන්ලයින් නෝට්පෑඩ් – නොමිලේ පෙළ සංස්කරණය සහ සටහන් ලිවීම [ලියන්න, සුරකින්න සහ බෙදාගන්න]",
    description:
      "ඔන්ලයින් නෝට්පෑඩ් යනු සටහන් ලිවීමට, සංස්කරණය කිරීමට සහ සුරැකීමට භාවිතා කළ හැකි වේගවත් සහ නොමිලේ පෙළ සංස්කරණයකි. ඔබගේ සටහන් ඕනෑම වෙලාවක ප්‍රවේශ වී ඕනෑම උපාංගයකින් වහාම බෙදාගන්න.",
  },
  ne: {
    title:
      "अनलाइन नोटप्याड – निःशुल्क टेक्स्ट एडिटर र नोट लेखन उपकरण [लेख्नुहोस्, सुरक्षित गर्नुहोस् र साझा गर्नुहोस्]",
    description:
      "अनलाइन नोटप्याड छिटो र निःशुल्क टेक्स्ट एडिटर हो जसले नोटहरू लेख्न, सम्पादन गर्न र सुरक्षित गर्न मद्दत गर्दछ। तपाईंका नोटहरू जुनसुकै बेला पहुँच गर्नुहोस् र कुनै पनि उपकरणबाट तुरुन्त साझा गर्नुहोस्।",
  },
  my: {
    title:
      "အွန်လိုင်းမှတ်စုစာအုပ် – အခမဲ့ စာသားတည်းဖြတ်ကိရိယာနှင့် မှတ်စုရေးရန် [ရေးပါ၊ သိမ်းဆည်းပါ နှင့် မျှဝေပါ]",
    description:
      "အွန်လိုင်းမှတ်စုစာအုပ်သည် မှတ်စုများရေးရန်၊ ပြင်ဆင်ရန်နှင့် သိမ်းဆည်းရန် အတွက် မြန်ဆန်ပြီး အခမဲ့ စာသားတည်းဖြတ်ကိရိယာဖြစ်သည်။ မည်သည့်အချိန်မဆို သင့်မှတ်စုများကို ဝင်ရောက်ကြည့်ရှုနိုင်ပြီး မည်သည့်ကိရိယာမှမဆို ချက်ချင်း မျှဝေနိုင်သည်။",
  },
  km: {
    title:
      "កំណត់ត្រាអនឡាញ – កម្មវិធីកែអត្ថបទឥតគិតថ្លៃ និងសរសេរកំណត់ត្រា [សរសេរ រក្សាទុក និងចែករំលែក]",
    description:
      "កំណត់ត្រាអនឡាញគឺជាកម្មវិធីកែអត្ថបទលឿន និងឥតគិតថ្លៃសម្រាប់សរសេរ កែសម្រួល និងរក្សាទុកកំណត់ត្រា។ អ្នកអាចចូលប្រើកំណត់ត្រារបស់អ្នកគ្រប់ពេល និងចែករំលែកភ្លាមៗពីឧបករណ៍ណាមួយ។",
  },
  lo: {
    title:
      "ສົກບັນທຶກອອນໄລນ໌ – ຕົວແກ້ໄຂຂໍ້ຄວາມຟຣີ ແລະ ການຂຽນບັນທຶກ [ຂຽນ, ບັນທຶກ ແລະ ແບ່ງປັນ]",
    description:
      "ສົກບັນທຶກອອນໄລນ໌ແມ່ນຕົວແກ້ໄຂຂໍ້ຄວາມທີ່ຮວດໄວ ແລະ ຟຣີ ສໍາລັບການຂຽນ, ແກ້ໄຂ ແລະ ບັນທຶກບັນທຶກ. ເຂົ້າເຖິງບັນທຶກໄດ້ທຸກເວລາ ແລະ ແບ່ງປັນທັນທີຈາກອຸປະກອນໃດກໍໄດ້.",
  },
  mn: {
    title:
      "Онлайн тэмдэглэлийн дэвтэр – Үнэгүй текст засварлагч ба тэмдэглэл бичих хэрэгсэл [Бичих, хадгалах, хуваалцах]",
    description:
      "Онлайн тэмдэглэлийн дэвтэр нь тэмдэглэл бичих, засварлах, хадгалах зориулалттай хурдан бөгөөд үнэгүй текст засварлагч юм. Та хүссэн үедээ тэмдэглэлдээ хандаж, ямар ч төхөөрөмжөөс шууд хуваалцах боломжтой.",
  },
  ka: {
    title:
      "ონლაინ ჩანაწერი – უფასო ტექსტური რედაქტორი და ჩანაწერების ინსტრუმენტი [წერა, შენახვა და გაზიარება]",
    description:
      "ონლაინ ჩანაწერი არის სწრაფი და უფასო ტექსტური რედაქტორი ჩანაწერების დასაწერად, შესაცვლელად და შესანახად. მიიღეთ წვდომა თქვენს ჩანაწერებზე ნებისმიერ დროს და გააზიარეთ ისინი მყისიერად ნებისმიერი მოწყობილობიდან.",
  },
  hy: {
    title:
      "Առցանց նոթատետր – Անվճար տեքստային խմբագիր և նշումների գործիք [Գրեք, պահեք և կիսվեք]",
    description:
      "Առցանց նոթատետրը արագ և անվճար տեքստային խմբագիր է՝ նշումներ գրելու, խմբագրելու և պահպանելու համար։ Մուտք գործեք ձեր նշումներին ցանկացած ժամանակ և կիսվեք դրանցով անմիջապես ցանկացած սարքից։",
  },
  az: {
    title:
      "Onlayn Notepad – Pulsuz mətn redaktoru və qeyd yazma aləti [Yaz, saxla və paylaş]",
    description:
      "Onlayn Notepad qeydləri yazmaq, redaktə etmək və saxlamaq üçün sürətli və pulsuz mətn redaktorudur. Qeydlərinizə istənilən vaxt daxil olun və onları istənilən cihazdan dərhal paylaşın.",
  },
  sw: {
    title:
      "Notepad Mtandaoni – Mhariri wa Maandishi Bure & Uandishi wa Vidokezo [Andika, Hifadhi na Shiriki]",
    description:
      "Notepad mtandaoni ni mhariri wa maandishi wa haraka na bure wa kuandika, kuhariri na kuhifadhi vidokezo. Fikia vidokezo vyako wakati wowote na shiriki papo hapo kutoka kifaa chochote.",
  },
  zu: {
    title:
      "I-Notepad Ku-inthanethi – Umhleli wombhalo wamahhala & ukubhala amanothi [Bhala, Londoloza futhi Yabelana]",
    description:
      "I-notepad ku-inthanethi iyithuluzi lombhalo elisheshayo nelimahhala lokubhala, ukuhlela nokugcina amanothi. Finyelela amanothi akho noma nini futhi uwabelane ngokushesha kunoma iyiphi idivayisi.",
  },
  af: {
    title:
      "Aanlyn Notaboek – Gratis teksredigeerder en notas skryf [Skryf, stoor en deel]",
    description:
      "Aanlyn notaboek is ’n vinnige en gratis teksredigeerder om notas te skryf, te wysig en te stoor. Kry toegang tot jou notas enige tyd en deel dit onmiddellik vanaf enige toestel.",
  },
  am: {
    title:
      "የመስመር ላይ ኖትፓድ – ነፃ የጽሑፍ አርታዒ እና ማስታወሻ መጻፊያ [ጻፍ፣ አስቀምጥ እና አጋራ]",
    description:
      "የመስመር ላይ ኖትፓድ ፈጣን እና ነፃ የጽሑፍ አርታዒ ሲሆን ማስታወሻዎችን ለመጻፍ፣ ለማርትዕ እና ለማስቀመጥ ይረዳል። በማንኛውም ጊዜ ይድረሱባቸው እና ከማንኛውም መሣሪያ ወዲያውኑ ያጋሩ።",
  },
  so: {
    title:
      "Notepad Online – Tifaftiraha Qoraalka Bilaashka ah & Qorista Qoraalada [Qor, Kaydi oo Wadaag]",
    description:
      "Notepad Online waa tifaftire qoraal degdeg ah oo bilaash ah oo lagu qoro, lagu hagaajiyo laguna kaydiyo qoraalada. Hel qoraaladaada wakhti kasta oo si degdeg ah uga wadaag qalab kasta.",
  },
  yo: {
    title:
      "Notepad Ayelujara – Olootu ọrọ ọfẹ & kikọ akọsilẹ [Kọ, Fipamọ & Pin]",
    description:
      "Notepad ayelujara jẹ olootu ọrọ yara ati ọfẹ fun kikọ, ṣiṣatunkọ ati fipamọ awọn akọsilẹ. Wọle si awọn akọsilẹ rẹ nigbakugba ki o pin wọn lẹsẹkẹsẹ lati eyikeyi ẹrọ.",
  },
  ig: {
    title:
      "Notepad N’ịntanetị – Onye ndezi ederede n’efu & ide ihe ncheta [Dee, Chekwaa ma kesaa]",
    description:
      "Notepad n’ịntanetị bụ ngwa ederede ngwa ngwa na n’efu maka ide, imezi na ichekwa ihe ncheta. Nweta ihe ncheta gị oge ọ bụla ma kesaa ha ozugbo site na ngwaọrụ ọ bụla.",
  },
  ha: {
    title:
      "Notepad na Yanar Gizo – Editan rubutu kyauta & rubuta bayanai [Rubuta, Ajiye & Raba]",
    description:
      "Notepad na yanar gizo editan rubutu ne mai sauri kuma kyauta don rubuta, gyara da ajiye bayanai. Samu bayananka a kowane lokaci kuma raba su nan take daga kowace na’ura.",
  },
  mg: {
    title:
      "Notepad an-tserasera – Mpandrindra lahatsoratra maimaim-poana & fanoratana naoty [Soraty, Tehirizo ary Zarao]",
    description:
      "Notepad an-tserasera dia mpandrindra lahatsoratra haingana sy maimaim-poana ho an’ny fanoratana, fanitsiana ary fitahirizana naoty. Midira amin’ny naoty-nao amin’ny fotoana rehetra ary zarao avy hatrany amin’ny fitaovana rehetra.",
  },
  uz: {
    title:
      "Onlayn Notepad – Bepul matn muharriri va eslatma yozish [Yozing, saqlang va ulashing]",
    description:
      "Onlayn Notepad tez va bepul matn muharriri bo‘lib, eslatmalar yozish, tahrirlash va saqlash imkonini beradi. Eslatmalaringizga istalgan vaqtda kirish va ularni har qanday qurilmadan darhol ulashish mumkin.",
  },
  kk: {
    title:
      "Онлайн блокнот – Тегін мәтіндік редактор және жазбалар құралы [Жазу, сақтау және бөлісу]",
    description:
      "Онлайн блокнот – жазбаларды жазуға, өңдеуге және сақтауға арналған жылдам әрі тегін мәтіндік редактор. Жазбаларыңызға кез келген уақытта қол жеткізіп, кез келген құрылғыдан бірден бөлісіңіз.",
  },
  ky: {
    title:
      "Онлайн блокнот – Акысыз текст редактору жана жазуулар [Жазыңыз, сактаңыз жана бөлүшүңүз]",
    description:
      "Онлайн блокнот – жазууларды жазуу, түзөтүү жана сактоо үчүн ылдам жана акысыз текст редактору. Жазууларыңызга каалаган убакта кирип, каалаган түзмөктөн дароо бөлүшүңүз.",
  },
  tg: {
    title:
      "Дафтари онлайн – Муҳаррири матни ройгон ва навиштани ёддоштҳо [Навиштан, захира ва мубодила]",
    description:
      "Дафтари онлайн муҳаррири матни зуд ва ройгон барои навиштан, таҳрир ва захираи ёддоштҳо мебошад. Ба ёддоштҳои худ ҳар вақт дастрасӣ пайдо кунед ва онҳоро фавран аз ҳар дастгоҳ мубодила намоед.",
  },
  tk: {
    title:
      "Onlaýn Notepad – Mugt tekst redaktory we bellik ýazmak [Ýaz, sakla we paýlaş]",
    description:
      "Onlaýn Notepad bellikleri ýazmak, redaktirlemek we saklamak üçin çalt we mugt tekst redaktorydyr. Bellikleriňize islendik wagt girip, islendik enjamdan derrew paýlaşyp bilersiňiz.",
  },
  ps: {
    title:
      "آنلاین نوټ پیډ – وړیا متن ایډیټر او یادښت لیکل [ولیکئ، خوندي کړئ او شریک کړئ]",
    description:
      "آنلاین نوټ پیډ یو چټک او وړیا متن ایډیټر دی چې د یادښتونو لیکلو، سمولو او خوندي کولو لپاره کارول کیږي. خپل یادښتونه هر وخت وګورئ او له هرې وسیلې څخه یې سمدستي شریک کړئ.",
  },
  ku: {
    title:
      "Notepad Online – Edîtora nivîsê ya belaş & nivîsandina notan [Binivîse, biparêze û parve bike]",
    description:
      "Notepad Online edîtora nivîsê ya zû û belaş e ku ji bo nivîsandin, guhertin û parastina notan tê bikaranîn. Hema demê notên xwe bibîne û ji her amûrekê zû parve bike.",
  },
  sq: {
    title:
      "Notepad Online – Redaktues teksti falas dhe shkrim shënimesh [Shkruaj, ruaj dhe ndaj]",
    description:
      "Notepad Online është një redaktues teksti i shpejtë dhe falas për të shkruar, redaktuar dhe ruajtur shënime. Hyni në shënimet tuaja në çdo kohë dhe ndajini menjëherë nga çdo pajisje.",
  },
  lt: {
    title:
      "Internetinis užrašų blokas – Nemokamas teksto redaktorius ir užrašai [Rašyti, išsaugoti ir dalintis]",
    description:
      "Internetinis užrašų blokas yra greitas ir nemokamas teksto redaktorius užrašams rašyti, redaguoti ir saugoti. Pasiekite savo užrašus bet kada ir iš karto dalinkitės iš bet kurio įrenginio.",
  },
  lv: {
    title:
      "Tiešsaistes piezīmju bloks – Bezmaksas teksta redaktors un piezīmes [Rakstīt, saglabāt un kopīgot]",
    description:
      "Tiešsaistes piezīmju bloks ir ātrs un bezmaksas teksta redaktors piezīmju rakstīšanai, rediģēšanai un saglabāšanai. Piekļūstiet savām piezīmēm jebkurā laikā un nekavējoties kopīgojiet tās no jebkuras ierīces.",
  },
  et: {
    title:
      "Veebipõhine märkmik – Tasuta tekstiredaktor ja märkmete tööriist [Kirjuta, salvesta ja jaga]",
    description:
      "Veebipõhine märkmik on kiire ja tasuta tekstiredaktor märkmete kirjutamiseks, muutmiseks ja salvestamiseks. Pääse oma märkmetele ligi igal ajal ja jaga neid kohe igast seadmest.",
  },
  is: {
    title:
      "Net minnisbók – Ókeypis textaritill og glósutól [Skrifa, vista og deila]",
    description:
      "Net minnisbók er hraður og ókeypis textaritill til að skrifa, breyta og vista glósur. Fáðu aðgang að glósunum þínum hvenær sem er og deildu þeim strax frá hvaða tæki sem er.",
  },
  ga: {
    title:
      "Leabhar nótaí ar líne – Eagarthóir téacs saor in aisce agus nótaí [Scríobh, sábháil agus roinn]",
    description:
      "Is eagarthóir téacs tapa agus saor in aisce é leabhar nótaí ar líne chun nótaí a scríobh, a chur in eagar agus a shábháil. Faigh rochtain ar do nótaí am ar bith agus roinn iad láithreach ó aon ghléas.",
  },
  cy: {
    title:
      "Llyfr nodiadau ar-lein – Golygydd testun am ddim a nodiadau [Ysgrifennu, cadw a rhannu]",
    description:
      "Mae llyfr nodiadau ar-lein yn olygydd testun cyflym ac am ddim ar gyfer ysgrifennu, golygu a chadw nodiadau. Cyrchwch eich nodiadau unrhyw bryd a’u rhannu ar unwaith o unrhyw ddyfais.",
  },
  eu: {
    title:
      "Online koadernoa – Testu editore doakoa eta oharrak [Idatzi, gorde eta partekatu]",
    description:
      "Online koadernoa testu editore azkar eta doakoa da oharrak idazteko, editatzeko eta gordetzeko. Sar zaitez zure oharretara edozein unetan eta partekatu berehala edozein gailutatik.",
  },
  ca: {
    title:
      "Bloc de notes en línia – Editor de text gratuït i notes [Escriure, desar i compartir]",
    description:
      "El bloc de notes en línia és un editor de text ràpid i gratuït per escriure, editar i desar notes. Accedeix a les teves notes en qualsevol moment i comparteix-les a l’instant des de qualsevol dispositiu.",
  },
  gl: {
    title:
      "Bloc de notas en liña – Editor de texto gratuíto e notas [Escribir, gardar e compartir]",
    description:
      "O bloc de notas en liña é un editor de texto rápido e gratuíto para escribir, editar e gardar notas. Accede ás túas notas en calquera momento e compárteas ao instante desde calquera dispositivo.",
  },
  mt: {
    title:
      "Notepad Online – Editur tat-test b’xejn u kitba ta’ noti [Ikteb, issejvja u aqsam]",
    description:
      "Notepad Online huwa editur tat-test veloċi u b’xejn biex tikteb, teditja u ssejvja noti online. Aċċessa n-noti tiegħek f’kull ħin u aqsamhom minnufih minn kwalunkwe apparat.",
  },
  lb: {
    title:
      "Online Notizblock – Gratis Texteditor an Notizen Tool [Schreiwen, späicheren a deelen]",
    description:
      "Den Online Notizblock ass e séieren a gratis Texteditor fir Notizen ze schreiwen, z’änneren an ze späicheren. Kritt Zougang zu Äre Notizen zu all Zäit a deelt se direkt vun all Apparat.",
  },
  mk: {
    title:
      "Онлајн бележник – Бесплатен текстуален уредник и белешки [Пишувај, зачувај и сподели]",
    description:
      "Онлајн бележник е брз и бесплатен текстуален уредник за пишување, уредување и зачувување белешки. Пристапете до вашите белешки во секое време и споделете ги веднаш од било кој уред.",
  },
  bs: {
    title:
      "Online bilježnica – Besplatan tekst editor i bilješke [Piši, sačuvaj i podijeli]",
    description:
      "Online bilježnica je brz i besplatan tekst editor za pisanje, uređivanje i čuvanje bilješki. Pristupite svojim bilješkama u bilo kojem trenutku i odmah ih podijelite s bilo kojeg uređaja.",
  },
  sl: {
    title:
      "Spletni beležnik – Brezplačen urejevalnik besedila in zapiski [Piši, shrani in deli]",
    description:
      "Spletni beležnik je hiter in brezplačen urejevalnik besedila za pisanje, urejanje in shranjevanje zapiskov. Do svojih zapiskov dostopajte kadarkoli in jih takoj delite iz katerekoli naprave.",
  },
  fj: {
    title:
      "Notepad Ena Initaneti – Edita ni Vosa Sega ni Saumi & Volavola ni vola [Volavola, Maroroya ka Wasea]",
    description:
      "Notepad ena initaneti e dua na edita ni vosa totolo ka sega ni saumi me volavola, maroroya ka wasea na vola. Curuma nomu vola ena gauna cava ga ka wasea vakatotolo mai na iyaya kece.",
  },
  mi: {
    title:
      "Pukatuhi Ipurangi – Etita kuputuhi kore utu me ngā tuhipoka [Tuhia, tiakina me te tiri]",
    description:
      "Ko te pukatuhi ipurangi he etita kuputuhi tere, kore utu hoki mō te tuhi, whakatika me te tiaki tuhipoka. Uru atu ki ō tuhipoka i ngā wā katoa, ā, tohaina wawe mai i tētahi pūrere.",
  },
  sm: {
    title:
      "Notepad i luga o le Initaneti – Fa’atonu tusitusiga fua & tusi fa’amaumauga [Tusi, teu ma fa’asoa]",
    description:
      "Notepad i luga o le initaneti o se fa’atonu tusitusiga vave ma fua e tusi, fa’asa’o ma teu ai fa’amaumauga. Avanoa i au fa’amaumauga i so’o se taimi ma fa’asoa vave mai so’o se masini.",
  },
  to: {
    title:
      "Notepad ‘i he ‘Initaneti – Me’a fakalelei tohi ta’etotongi & tohi fakamanatu [Tohi, tauhi mo vahevahe]",
    description:
      "Notepad ‘i he ‘initaneti ko ha me’a fakalelei tohi vave mo ta’etotongi ke tohi, fakatonutonu mo tauhi ngaahi fakamanatu. Hū ki ho’o ngaahi fakamanatu he taimi kotoa pē pea vahevahe leva mei ha me’angāue pē.",
  },
  ht: {
    title:
      "Notepad sou Entènèt – Editè tèks gratis ak ekriti nòt [Ekri, sove epi pataje]",
    description:
      "Notepad sou entènèt se yon editè tèks rapid ak gratis pou ekri, modifye ak sove nòt. Aksede nòt ou nenpòt lè epi pataje yo touswit depi nenpòt aparèy.",
  },
  qu: {
    title:
      "Online qillqana – Qillqa allin kamachiq mana qullqi & yuyaykuna [Qillqay, waqaychay, rakiy]",
    description:
      "Online qillqanaqa utqaylla mana qullqiyuq qillqa kamachiqmi yuyaykunata qillqanapaq, allinchaypaq, waqaychanapaq. Yuyaykunaykita imaykama haykuy, chaymanta imayna aparatomanta utqaylla rakiy.",
  },
  ay: {
    title:
      "Notepad en línea – Qillqaña editor gratis & amuyt’añanaka [Qillqaña, imaña ukat uñt’ayaña]",
    description:
      "Notepad en línea ukaxa mä jank’aki ukat gratis qillqaña editorawa qillqaña, askichaña ukat imaña amuyt’añanaka. Kuna pachasa amuyt’añanakamaru mantaña ukat kuna aparato tuqitasa jank’aki uñt’ayaña.",
  },
  gn: {
    title:
      "Notepad en línea – Moha’anga jehaipyre rehegua gratis & kuatiañe’ẽ [Hai, eñongatu ha emoherakuã]",
    description:
      "Notepad en línea ha’e peteĩ moha’anga jehaipyre rehegua pya’e ha gratis ojejapo hag̃ua kuatiañe’ẽ, oñemyatyrõ ha oñeñongatu. Eike nde kuatiañe’ẽme araka’eve ha emoherakuã pya’e opaichagua mba’e’apopyrãgui.",
  },
  nv: {
    title:
      "Notepad Online – Ákót’éego béeso da’íínaa’íí bikáa’gi & naaltsoos bits’į’ [Ákót’éego, náshdóítsoh & hadííłnih]",
    description:
      "Notepad Online yaa ákót’éego béeso da’íínaa’íí bikáa’gi t’áá ajiłii’ígíí naaltsoos bits’į’ yáhoot’ééł. Ákót’éego naaltsoos bits’į’ nitsáhákeesgo t’áá ajiłii’ígíí doo hadííłnih dóó bikáa’gi.",
  },
  iu: {
    title:
      "ᐃᓂᑦᑐᖅ ᓄᑕᕋᖅ – ᐊᑭᖃᖏᑦᑐᖅ ᑎᑎᖅᑲᓕᕆᔨ & ᓄᑕᕋᖅ [ᑎᑎᕋᕐᓗᒍ, ᐊᑐᖅᑐᖅ ᐊᒻᒪ ᐊᐃᑦᑐᖅ]",
    description:
      "ᐃᓂᑦᑐᖅ ᓄᑕᕋᖅ ᐊᑭᖃᖏᑦᑐᖅ ᑎᑎᖅᑲᓕᕆᔨ ᑎᑎᕋᕐᓗᒍ ᐊᒻᒪ ᐊᑐᖅᑐᖅ ᓄᑕᕋᖅ. ᐊᑐᖅᑐᖅ ᐃᓕᖓᓂᖅ ᐊᒻᒪ ᐊᐃᑦᑐᖅ ᓄᑕᕋᖅ ᑕᐃᑲᓂ ᐊᐃᑦᑐᖅ.",
  },
  kl: {
    title:
      "Online noti – Allannermut editori akeqanngitsoq & allattuutit [Allagit, toqqoruk & avitseq]",
    description:
      "Online noti tassaavoq allannermut editori sukkasuumik akeqanngitsoq allannissamut, allanngortitsinissamut aammalu toqqorsinermut. Allattuutitit qaqugukkulluunniit takusinnaavatit aammalu ingerlaannaq avitseqatigalugit.",
  },
  om: {
    title:
      "Notepad Online – Barreessaa barruu bilisaa & galmee barreessuu [Barreessi, kuusi & qoodi]",
    description:
      "Notepad Online barreessaa barruu saffisaa fi bilisaa dha kan galmee barreessuu, fooyyeessuu fi kuusuu. Yeroo kamiyyuu galmee kee argadhuu fi meeshaa kamirraayyuu dafanii qoodi.",
  },
  ti: {
    title:
      "ኦንላይን ኖትፓድ – ነፃ ናይ ጽሑፍ ኣርታዒ & ምጽሓፍ ምስታወሻ [ጻፍ, ኣከምትን ኣካፍል]",
    description:
      "ኦንላይን ኖትፓድ ፈጣንን ነፃን ናይ ጽሑፍ ኣርታዒ እዩ ምስታወሻታት ምጽሓፍ፣ ምርታዕን ምክታትን ዝረዳ። ምስታወሻታትካ ኣብ ዝኾነ ጊዜ ርአን ካብ ዝኾነ መሳርሒ ብቕልጡፍ ኣካፍል።",
  },
  sn: {
    title:
      "Notepad paIndaneti – Mupepeti wemavara emahara & kunyora manotsi [Nyora, chengeta uye govera]",
    description:
      "Notepad paIndaneti mupepeti wemavara unokurumidza uye wemahara wekugadzira, kugadzirisa uye kuchengetedza manotsi. Wana manotsi ako chero nguva uye ugovane ipapo ipapo kubva kune chero mudziyo.",
  },
  xh: {
    title:
      "I-Notepad kwi-Intanethi – Umhleli wombhalo wasimahla & amanqaku [Bhala, gcina kwaye wabelane]",
    description:
      "I-Notepad kwi-intanethi ngumhleli wombhalo okhawulezayo nowasimahla wokubhala, ukuhlela nokugcina amanqaku. Fikelela kumanqaku akho nanini na kwaye wabelane ngawo kwangoko kuso nasiphi na isixhobo.",
  },
  ceb: {
    title:
      "Online Notepad – Libre nga text editor & pagsulat og notes [Isulat, i-save ug i-share]",
    description:
      "Ang Online Notepad usa ka paspas ug libre nga text editor alang sa pagsulat, pag-edit ug pag-save sa notes. Ma-access nimo ang imong notes bisan kanus-a ug i-share dayon gikan sa bisan unsang device.",
  },
  tl: {
    title:
      "Online Notepad – Libreng text editor at pagsusulat ng tala [Sumulat, i-save at ibahagi]",
    description:
      "Ang Online Notepad ay isang mabilis at libreng text editor para magsulat, mag-edit at mag-save ng mga tala. I-access ang iyong mga tala anumang oras at ibahagi agad mula sa anumang device.",
  },
  jv: {
    title:
      "Notepad Online – Editor teks gratis & nulis cathetan [Tulis, simpen lan barengno]",
    description:
      "Notepad Online yaiku editor teks cepet lan gratis kanggo nulis, ngowahi lan nyimpen cathetan. Akses cathetanmu kapan wae lan barengno langsung saka piranti apa wae.",
  },
  su: {
    title:
      "Notepad Online – Editor téks gratis & nulis catetan [Tulis, simpen jeung bagikeun]",
    description:
      "Notepad Online mangrupikeun editor téks anu gancang sareng gratis pikeun nulis, ngédit sareng nyimpen catetan. Aksés catetan anjeun iraha waé sareng bagikeun langsung tina alat naon waé.",
  },
};

export function getLocaleMetadata(locale: string): LocaleMetadata {
  return LOCALE_METADATA[locale] ?? LOCALE_METADATA[defaultLocale];
}
