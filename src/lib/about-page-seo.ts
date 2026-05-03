import { defaultLocale, locales } from "@/lib/i18n";

export type AboutPageSeo = { title: string; description: string };

/** Localized `<title>` and meta description for `/about` (one entry per site locale). */
const ABOUT_PAGE_SEO: Record<string, AboutPageSeo> = {
  af: {
    title: "Oor",
    description:
      "Leer meer oor Notepad.is: ’n vinnige, minimaliste aanlyn notaboek gebou vir fokus en privaatheid.",
  },
  am: {
    title: "ስለ",
    description:
      "ስለ Notepad.is የበለጠ ይወቁ፡ ፈጣን፣ ቀላል የመስመር ላይ ማስታወሻ ደብተር፣ ለትኩረት እና ግላዊነት የተገነባ።",
  },
  ar: {
    title: "حول",
    description:
      "تعرّف على المزيد حول Notepad.is: دفتر ملاحظات سريع وبسيط عبر الإنترنت مصمم للتركيز والخصوصية.",
  },
  ay: {
    title: "Uñt’ayiri",
    description:
      "Juk’amp yatxataña Notepad.is uka: jank’aki, juk’a uñt’ata qillqaña wakichata, chuymachañataki y jist’aqañataki.",
  },
  az: {
    title: "Haqqında",
    description:
      "Notepad.is haqqında daha çox öyrənin: fokus və məxfilik üçün yaradılmış sürətli, minimal onlayn qeyd dəftəri.",
  },
  bg: {
    title: "За",
    description:
      "Научете повече за Notepad.is: бърз, минималистичен онлайн бележник, създаден за фокус и поверителност.",
  },
  bn: {
    title: "সম্পর্কে",
    description:
      "Notepad.is সম্পর্কে আরও জানুন: দ্রুত, সরল অনলাইন নোটপ্যাড যা ফোকাস এবং গোপনীয়তার জন্য তৈরি।",
  },
  bs: {
    title: "O nama / O aplikaciji",
    description:
      "Saznajte više o Notepad.is: brz, minimalan online notesnik napravljen za fokus i privatnost.",
  },
  ca: {
    title: "Quant a",
    description:
      "Obtingueu més informació sobre Notepad.is: un bloc de notes en línia ràpid i minimalista dissenyat per a la concentració i la privadesa.",
  },
  ceb: {
    title: "Mahitungod sa",
    description:
      "Pagkat-on og dugang mahitungod sa Notepad.is: usa ka paspas ug simple nga online notepad nga gibuhat alang sa focus ug privacy.",
  },
  cs: {
    title: "O",
    description:
      "Zjistěte více o Notepad.is: rychlý, minimalistický online poznámkový blok vytvořený pro soustředění a soukromí.",
  },
  cy: {
    title: "Am",
    description:
      "Dysgu rhagor am Notepad.is: nodfa ar-lein gyflym a minimalaidd a adeiladwyd ar gyfer canolbwyntio ac preifatrwydd.",
  },
  da: {
    title: "Om",
    description:
      "Lær mere om Notepad.is: en hurtig, minimalistisk online notesblok bygget til fokus og privatliv.",
  },
  de: {
    title: "Über",
    description:
      "Mehr über Notepad.is erfahren: ein schneller, minimalistischer Online-Notizblock für Fokus und Privatsphäre.",
  },
  el: {
    title: "Σχετικά",
    description:
      "Μάθετε περισσότερα για το Notepad.is: ένα γρήγορο, μινιμαλιστικό online σημειωματάριο φτιαγμένο για συγκέντρωση και ιδιωτικότητα.",
  },
  en: {
    title: "About",
    description:
      "Learn more about Notepad.is: a fast, minimal online notepad built for focus and privacy.",
  },
  es: {
    title: "Acerca de",
    description:
      "Conoce más sobre Notepad.is: un bloc de notas en línea rápido y minimalista creado para el enfoque y la privacidad.",
  },
  et: {
    title: "Teave",
    description:
      "Lisateave Notepad.is kohta: kiire, minimalistlik veebipõhine märkmik, mis on loodud keskendumiseks ja privaatsuseks.",
  },
  eu: {
    title: "Honi buruz",
    description:
      "Ikasi gehiago Notepad.is-ri buruz: fokus eta pribatutasunerako eraikitako notepad azkar eta minimala sarean.",
  },
  fa: {
    title: "درباره",
    description:
      "درباره Notepad.is بیشتر بدانید: یک نوت‌پد آنلاین سریع و مینیمال ساخته‌شده برای تمرکز و حریم خصوصی.",
  },
  fi: {
    title: "Tietoja",
    description:
      "Lue lisää Notepad.is-sivustosta: nopea ja minimalistinen verkkomuistiinpano, rakennettu keskittymiseen ja yksityisyyteen.",
  },
  fj: {
    title: "Matai",
    description:
      "Vakarautaka cake na ka me baleta Notepad.is: dua na notepad vaka-internet totoka ka vou, vakarautaki me baleta na vakarauqaravi kei na maroroi.",
  },
  fr: {
    title: "À propos",
    description:
      "En savoir plus sur Notepad.is : un bloc-notes en ligne rapide et minimaliste conçu pour la concentration et la confidentialité.",
  },
  ga: {
    title: "Maidir le",
    description:
      "Foghlaim tuilleadh faoi Notepad.is: notepad ar líne tapa, íostach tógtha le haghaidh fócas agus príobháideacht.",
  },
  gl: {
    title: "Sobre",
    description:
      "Coñece máis sobre Notepad.is: un bloc de notas en liña rápido e minimalista creado para o foco e a privacidade.",
  },
  gn: {
    title: "Rehegua",
    description:
      "Eikuaave Notepad.is rehe: pya’e ha mbykymiha ha’eño haipyre ñanduti rupáre, enfoque ha privacidad-pe g̃uarã.",
  },
  gu: {
    title: "વિશે",
    description:
      "Notepad.is વિશે વધુ જાણો: ઝડપી, ન્યૂનતમ ઓનલાઈન નોટપેડ જે ફોકસ અને પ્રાઈવસી માટે બનાવવામાં આવ્યું છે.",
  },
  ha: {
    title: "Game da",
    description:
      "Koyi ƙari game da Notepad.is: notepad na kan layi mai sauri, mai sauƙi wanda aka gina don mai da hankali da sirri.",
  },
  he: {
    title: "אודות",
    description:
      "למדו עוד על Notepad.is: פנקס רשימות מקוון מהיר ומינימליסטי שנבנה להתמקדות ולפרטיות.",
  },
  hi: {
    title: "बारे में",
    description:
      "Notepad.is के बारे में और जानें: एक तेज़, न्यूनतम ऑनलाइन नोटपैड जो फोकस और गोपनीयता के लिए बनाया गया है।",
  },
  hr: {
    title: "O nama",
    description:
      "Saznajte više o Notepad.is: brz, minimalan online notesnik izgrađen za fokus i privatnost.",
  },
  ht: {
    title: "Konsènan",
    description:
      "Aprann plis sou Notepad.is: yon notepad sou entènèt rapid epi minim ki fèt pou konsantrasyon ak vi prive.",
  },
  hu: {
    title: "Rólunk / Névjegy",
    description:
      "Tudjon meg többet a Notepad.is-ről: egy gyors, minimalista online jegyzettömb a fókusz és a magánélet védelme érdekében.",
  },
  hy: {
    title: "Մասին",
    description:
      "Իմացեք ավելին Notepad.is-ի մասին՝ արագ, մինիմալիստական առցանց նոթատետր՝ կենտրոնացման և գաղտնիության համար ստեղծված։",
  },
  id: {
    title: "Tentang",
    description:
      "Pelajari lebih lanjut tentang Notepad.is: notepad online yang cepat dan minimalis, dibuat untuk fokus dan privasi.",
  },
  ig: {
    title: "Gbasara",
    description:
      "Mụta ihe ndị ọzọ gbasara Notepad.is: akwụkwọ ndetu ngwa ngwa, nke pere mpe n’ịntanetị arụnyere maka itinye uche na nzuzo.",
  },
  is: {
    title: "Um",
    description:
      "Kynntu þér Notepad.is betur: hratt, lágmarkandi netbók sem byggt er fyrir einbeitingu og friðhelgi.",
  },
  it: {
    title: "Informazioni",
    description:
      "Scopri di più su Notepad.is: un blocco note online veloce e minimalista progettato per concentrazione e privacy.",
  },
  iu: {
    title: "Qanuq",
    description:
      "Ilisaiyuk Notepad.is-mik: pingasuut, minimalisuuq qarasaujaakkut titiraruti, isumaksaqsiurnirmut pillugit.",
  },
  ja: {
    title: "について",
    description:
      "Notepad.isについて詳しく知る：集中力とプライバシーのために作られた高速で最小限のオンラインノートパッド。",
  },
  jv: {
    title: "Babagan",
    description:
      "Sinau luwih lengkap bab Notepad.is: notepad online sing cepet lan minimalis, dibangun kanggo fokus lan privasi.",
  },
  ka: {
    title: "შესახებ",
    description:
      "გაიგეთ მეტი Notepad.is-ის შესახებ: სწრაფი, მინიმალისტური ონლაინ ჩანაწერების აპლიკაცია, შექმნილი კონცენტრაციისა და კონფიდენციალურობისთვის.",
  },
  kk: {
    title: "Туралы",
    description:
      "Notepad.is туралы көбірек біліңіз: жылдам, минималды онлайн жазба дәптері, фокус пен құпиялылық үшін жасалған.",
  },
  kl: {
    title: "Pillugu",
    description:
      "Ilisimasaqarneq Notepad.is pillugu: sukkasuumik, minimalisumik inuunermi allagaqarnermut, susassaqarnermut ataatsimoortumut pilersaarutaq.",
  },
  km: {
    title: "អំពី",
    description:
      "ស្វែងយល់បន្ថែមអំពី Notepad.is៖ កម្មវិធីកត់ត្រាលើអ៊ីនធឺណិតរហ័ស និងសាមញ្ញ ដែលត្រូវបានបង្កើតឡើងសម្រាប់ការផ្តោតអារម្មណ៍និងភាពឯកជន។",
  },
  kn: {
    title: "ಬಗ್ಗೆ",
    description:
      "Notepad.is ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ: ವೇಗವಾದ, ಕನಿಷ್ಠ ಆನ್‌ಲೈನ್ ನೋಟ್‌ಪ್ಯಾಡ್ ಗಮನ ಮತ್ತು ಗೌಪ್ಯತೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
  },
  ko: {
    title: "정보",
    description:
      "Notepad.is에 대해 자세히 알아보기: 집중과 프라이버시를 위해 만들어진 빠르고 미니멀한 온라인 메모장.",
  },
  ku: {
    title: "Derbarê",
    description:
      "Zêdetir li ser Notepad.is fêr bibe: deftera notan a bilez û hêsan a serhêl ji bo baldarî û nepeniyê hatiye çêkirin.",
  },
  ky: {
    title: "Жөнүндө",
    description:
      "Notepad.is жөнүндө көбүрөөк билиңиз: тез, минималдуу онлайн жазуу блокноту, концентрация жана купуялык үчүн түзүлгөн.",
  },
  lb: {
    title: "Iwwer",
    description:
      "Léiert méi iwwer Notepad.is: e séieren, minimalisteschen Online-Notizblock fir Fokus an Privatsphär.",
  },
  lo: {
    title: "ກ່ຽວກັບ",
    description:
      "ຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບ Notepad.is: ໂນດບຸກອອນລາຍທີ່ໄວ ແລະ ຂັ້ນຕ່ຳ ສ້າງຂຶ້ນສຳລັບການສຸມໃສ່ ແລະ ຄວາມເປັນສ່ວນຕົວ.",
  },
  lt: {
    title: "Apie",
    description:
      "Sužinokite daugiau apie Notepad.is: greitas, minimalus internetinis užrašų bloknotas, sukurtas susikaupimui ir privatumui.",
  },
  lv: {
    title: "Par",
    description:
      "Uzziniet vairāk par Notepad.is: ātrs, minimālistisks tiešsaistes piezīmjdēlis, kas izveidots fokusam un privātumam.",
  },
  mg: {
    title: "Momba",
    description:
      "Mianara bebe kokoa momba ny Notepad.is: notepad an-tserasera haingana sy tsotra, noforonina ho an'ny fifantohana sy ny fiainana manokana.",
  },
  mi: {
    title: "Mō",
    description:
      "Akohia ātu mō Notepad.is: he pukapuka tuhipoka ipurangi tere, ngāwari i hangaia mō te arotahi me te matatapu.",
  },
  mk: {
    title: "За",
    description:
      "Дознајте повеќе за Notepad.is: брз, минимален онлајн бележник направен за фокус и приватност.",
  },
  ml: {
    title: "കുറിച്ച്",
    description:
      "Notepad.is-നെ കുറിച്ച് കൂടുതൽ അറിയുക: ഫോക്കസ്, സ്വകാര്യത എന്നിവയ്ക്കായി നിർമ്മിച്ച വേഗതയുള്ള, ലളിതമായ ഓൺലൈൻ നോട്ട്‌പാഡ്.",
  },
  mn: {
    title: "Тухай",
    description:
      "Notepad.is-ийн тухай дэлгэрэнгүй мэдээлэл авах: хурдан, хамгийн бага онлайн тэмдэглэлийн дэвтэр, анхаарал төвлөрүүлэх, нууцлалд зориулагдсан.",
  },
  mr: {
    title: "बद्दल",
    description:
      "Notepad.is बद्दल अधिक जाणून घ्या: वेगवान, कमीत कमी ऑनलाइन नोटपॅड जी फोकस आणि गोपनीयतेसाठी तयार केली आहे.",
  },
  ms: {
    title: "Tentang",
    description:
      "Ketahui lebih lanjut tentang Notepad.is: notepad dalam talian yang pantas dan minimalis, dibina untuk fokus dan privasi.",
  },
  mt: {
    title: "Dwar",
    description:
      "Tgħallem aktar dwar Notepad.is: notepad online mgħaġġel u minimu mibni għall-fokus u l-privatezza.",
  },
  my: {
    title: "အကြောင်း",
    description:
      "Notepad.is အကြောင်း ပိုမိုလေ့လာပါ။ အာရုံစိုက်မှုနှင့် ကိုယ်ရေးကာကွယ်ရေးအတွက် တည်ဆောက်ထားသော မြန်ဆန်ပြီး ရိုးရှင်းသော အွန်လိုင်း မှတ်စုစာအုပ်။",
  },
  ne: {
    title: "बारेमा",
    description:
      "Notepad.is को बारेमा थप जान्नुहोस्: छिटो, न्यूनतम अनलाइन नोटप्याड जसलाई फोकस र गोपनीयताका लागि बनाइएको छ।",
  },
  nl: {
    title: "Over",
    description:
      "Lees meer over Notepad.is: een snelle, minimalistische online notitieblok gebouwd voor focus en privacy.",
  },
  no: {
    title: "Om",
    description:
      "Lær mer om Notepad.is: en rask, minimalistisk online notatblokk bygget for fokus og personvern.",
  },
  nv: {
    title: "Baa",
    description:
      "Notepad.is baa’ąą łá’í yee’ąą: t’áá yá’át’ééhgo, áłts’íísígo online naaltsoos, bee ’ákwiidziil dóó privacy bá hooghan.",
  },
  om: {
    title: "Waa’ee",
    description:
      "Notepad.is waa’ee dabalataan baradhaa: barruu barreessaa saffisaa fi xiqqaa intarneetii irratti kan uumame xiyyeeffannaa fi iccitii tiif.",
  },
  pl: {
    title: "O",
    description:
      "Dowiedz się więcej o Notepad.is: szybki, minimalistyczny notatnik online stworzony z myślą o skupieniu i prywatności.",
  },
  ps: {
    title: "په اړه",
    description:
      "د Notepad.is په اړه نور معلومات ترلاسه کړئ: چټک، لږترلږه آنلاین نوټ پاډ چې د تمرکز او محرمیت لپاره جوړ شوی دی.",
  },
  pt: {
    title: "Sobre",
    description:
      "Saiba mais sobre o Notepad.is: um bloco de notas online rápido e minimalista, criado para foco e privacidade.",
  },
  qu: {
    title: "Sobre",
    description:
      "Yachay astawan Notepad.ismanta: utqaylla, pisi online qillqana, focusman y privacidadman ruwasqa.",
  },
  ro: {
    title: "Despre",
    description:
      "Află mai multe despre Notepad.is: un notepad online rapid și minimalist, creat pentru concentrare și confidențialitate.",
  },
  ru: {
    title: "О нас / О сервисе",
    description:
      "Узнайте больше о Notepad.is: быстрый, минималистичный онлайн-блокнот, созданный для фокуса и приватности.",
  },
  si: {
    title: "ගැන",
    description:
      "Notepad.is ගැන තව දැනගන්න: වේගවත්, අවම මාර්ගගත සටහන් පොතක්, අවධානය සහ පෞද්ගලිකත්වය සඳහා නිර්මාණය කර ඇත.",
  },
  sk: {
    title: "O",
    description:
      "Zistite viac o Notepad.is: rýchly, minimalistický online zápisník vytvorený pre sústredenie a súkromie.",
  },
  sl: {
    title: "O",
    description:
      "Več o Notepad.is: hiter, minimalen spletni beležnik, zasnovan za fokus in zasebnost.",
  },
  sm: {
    title: "E uiga i",
    description:
      "A’oa’o atili e uiga i Notepad.is: o se notepad i luga o le initaneti vave ma faigofie, fausia mo le taulai ma le faalilo.",
  },
  sn: {
    title: "Nezve",
    description:
      "Dzidza zvakawanda nezve Notepad.is: notepad yepamhepo inokurumidza uye shoma yakagadzirirwa kutarisa uye kuvanzika.",
  },
  so: {
    title: "Ku saabsan",
    description:
      "Baro wax badan oo ku saabsan Notepad.is: buug xawaare leh oo aad u yar oo online ah oo loo sameeyay diiradda iyo gaarka ah.",
  },
  sq: {
    title: "Rreth",
    description:
      "Mësoni më shumë për Notepad.is: një notepad online i shpejtë dhe minimal, i ndërtuar për fokus dhe privatësi.",
  },
  sr: {
    title: "О",
    description:
      "Сазнајте више о Notepad.is: брз, минималан онлајн бележник направљен за фокус и приватност.",
  },
  su: {
    title: "Ngeunaan",
    description:
      "Diajar leuwih loba ngeunaan Notepad.is: notepad online anu gancang jeung minimalis, diwangun pikeun fokus jeung privasi.",
  },
  sv: {
    title: "Om",
    description:
      "Lär dig mer om Notepad.is: en snabb, minimalistisk online anteckningsbok byggd för fokus och integritet.",
  },
  sw: {
    title: "Kuhusu",
    description:
      "Jifunze zaidi kuhusu Notepad.is: daftari la maelezo la mtandaoni lenye kasi na rahisi, lililoundwa kwa ajili ya umakinifu na faragha.",
  },
  ta: {
    title: "பற்றி",
    description:
      "Notepad.is பற்றி மேலும் அறியுங்கள்: வேகமான, குறைந்தபட்ச ஆன்லைன் நோட்டுப் புத்தகம், கவனம் மற்றும் தனியுரிமைக்காக உருவாக்கப்பட்டது.",
  },
  te: {
    title: "గురించి",
    description:
      "Notepad.is గురించి మరింత తెలుసుకోండి: వేగవంతమైన, కనీస ఆన్‌లైన్ నోట్‌ప్యాడ్ ఫోకస్ మరియు ప్రైవసీ కోసం రూపొందించబడింది.",
  },
  tg: {
    title: "Дар бораи",
    description:
      "Дар бораи Notepad.is бештар маълумот гиред: дафтари зуд ва ҳадди ақал онлайн барои тамаркуз ва махфият сохта шудааст.",
  },
  th: {
    title: "เกี่ยวกับ",
    description:
      "เรียนรู้เพิ่มเติมเกี่ยวกับ Notepad.is: แอปจดบันทึกออนไลน์ที่เร็วและเรียบง่าย สร้างขึ้นเพื่อการโฟกัสและความเป็นส่วนตัว",
  },
  ti: {
    title: "ብዛዕባ",
    description:
      "ብዛዕባ Notepad.is ዝያዳ ይፍለጡ፡ ፉጡን፣ ትንሽ ኦንላይን ኖትፓድ፣ ንትኹስትናን ምስጢራዊነትን ዝተሰርዐ።",
  },
  tk: {
    title: "Hakda",
    description:
      "Notepad.is hakda köpräk maglumat alyň: ýokary tizlikli, minimal onlaýn bellik depderi, üns we ýaşyrynlyk üçin döredildi.",
  },
  tl: {
    title: "Tungkol sa",
    description:
      "Alamin pa ang tungkol sa Notepad.is: isang mabilis at minimal na online notepad na ginawa para sa focus at privacy.",
  },
  to: {
    title: "Ko e",
    description:
      "Ako lahi ange ki he Notepad.is: ko ha notepad ‘i he initaneti vave mo fakalukuluku, na’e langa ki he fokasí mo e fakapulipuli.",
  },
  tr: {
    title: "Hakkında",
    description:
      "Notepad.is hakkında daha fazla bilgi edinin: odaklanma ve gizlilik için tasarlanmış hızlı, minimal bir online not defteri.",
  },
  uk: {
    title: "Про",
    description:
      "Дізнайтеся більше про Notepad.is: швидкий, мінімалістичний онлайн-блокнот, створений для фокусу та приватності.",
  },
  ur: {
    title: "کے بارے میں",
    description:
      "Notepad.is کے بارے میں مزید جانیں: ایک تیز، کم سے کم آن لائن نوٹ پیڈ جو توجہ اور رازداری کے لیے بنایا گیا ہے۔",
  },
  uz: {
    title: "Haqida",
    description:
      "Notepad.is haqida ko‘proq bilib oling: tez, minimal onlayn yozuv daftarchasi, diqqat va maxfiylik uchun yaratilgan.",
  },
  vi: {
    title: "Giới thiệu",
    description:
      "Tìm hiểu thêm về Notepad.is: một sổ ghi chú trực tuyến nhanh chóng, tối giản được xây dựng cho sự tập trung và quyền riêng tư.",
  },
  xh: {
    title: "Malunga",
    description:
      "Funda okungakumbi malunga ne-Notepad.is: inqaku elikhawulezayo nelincinane kwi-intanethi elakhelwe ukugxila kunye nobumfihlo.",
  },
  yo: {
    title: "Nipa",
    description:
      "Kọ ẹ̀kọ́ síi nípa Notepad.is: notepad ori ayelujara yara ati pẹrẹpẹ, ti a ṣe fun idojukọ ati aṣiri.",
  },
  zh: {
    title: "关于",
    description:
      "了解更多关于 Notepad.is：一款快速、极简的在线记事本，专为专注和隐私而打造。",
  },
  zu: {
    title: "Mayelana",
    description:
      "Funda kabanzi mayelana ne-Notepad.is: i-notepad esheshayo, encane ku-inthanethi eyakhelwe ukugxila nokuvikeleka.",
  },
};

const localeSet = new Set(locales);
for (const key of Object.keys(ABOUT_PAGE_SEO)) {
  if (!localeSet.has(key)) {
    throw new Error(`about-page-seo: unknown locale key "${key}"`);
  }
}
for (const code of locales) {
  if (!ABOUT_PAGE_SEO[code]) {
    throw new Error(`about-page-seo: missing locale "${code}"`);
  }
}

export function getAboutPageSeo(locale: string): AboutPageSeo {
  return ABOUT_PAGE_SEO[locale] ?? ABOUT_PAGE_SEO[defaultLocale];
}
