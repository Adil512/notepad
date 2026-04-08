import { writingToolsMeta } from "@/lib/writing-tools-registry";

export const readingTimeCalculatorSeo: Record<
  string,
  { title: string; description: string }
> = {
  af: {
    title: `Lees tyd Sakrekenaar – Skat Lees Tyd Aanlyn Gratis`,
    description: `Bereken lees tyd vir enige teks onmiddellik. Perfek vir blogs, artikels en SEO-optimalisering. Vinnig, gratis en geen aanmelding nodig nie.`,
  },
  sq: {
    title: `Kalkulator i Kohës së Leximit – Vlerësoni Kohën e Leximit Online Falas`,
    description: `Llogaritni kohën e leximit për çdo tekst menjëherë. I përsosur për bloge, artikuj dhe optimizim SEO. Shpejt, falas dhe pa regjistrim të nevojshëm.`,
  },
  am: {
    title: `የንባብ ጊዜ ማስያ – የንባብ ጊዜን በመስመር ላይ በነጻ ይገመቱ`,
    description: `ለማንኛውም ጽሑፍ የንባብ ጊዜን በፍጥነት ያስሉ። ለብሎጎች፣ ለመጣጥፎች እና ለኤስኢኦ ማመቻቸት ፍጹም። ፈጣን፣ ነጻ እና ምዝገባ አያስፈልግም።`,
  },
  ar: {
    title: `حاسبة وقت القراءة – تقدير وقت القراءة عبر الإنترنت مجاناً`,
    description: `احسب وقت قراءة أي نص فوراً. مثالي للمدونات والمقالات وتحسين محركات البحث. سريع ومجاني وبدون تسجيل.`,
  },
  hy: {
    title: `Ընթերցման ժամանակի հաշվիչ – Անվճար գնահատեք ընթերցման ժամանակը առցանց`,
    description: `Անմիջապես հաշվեք ցանկացած տեքստի ընթերցման ժամանակը: Իդեալական բլոգերի, հոդվածների և SEO օպտիմիզացիայի համար: Արագ, անվճար և առանց գրանցման:`,
  },
  ay: {
    title: `Liyt’aña Q’ipi – Liyt’aña Q’ipi Tiempo uñacht’ayaña (Free)`,
    description: `Maya qillqata liyt’aña tiempo uñacht’ayaña. Blogs, artículos y SEO optimización ukataki. Jach’a, gratis y sin registro.`,
  },
  az: {
    title: `Oxu Vaxtı Kalkulyatoru – Oxu Vaxtını Onlayn Pulsuz Qiymətləndirin`,
    description: `İstənilən mətn üçün oxu vaxtını dərhal hesablayın. Bloqlar, məqalələr və SEO optimallaşdırması üçün mükəmməldir. Sürətli, pulsuz və qeydiyyat tələb olunmur.`,
  },
  eu: {
    title: `Irakurketa Denbora Kalkulagailua – Irakurketa Denbora Online Doan Estimatu`,
    description: `Kalkulatu edozein testuren irakurketa denbora berehala. Blog, artikulu eta SEO optimizaziorako aproposa. Azkarra, doakoa eta erregistro gabe.`,
  },
  bn: {
    title: `রিডিং টাইম ক্যালকুলেটর – অনলাইনে ফ্রি রিডিং টাইম অনুমান করুন`,
    description: `যেকোনো টেক্সটের রিডিং টাইম তাৎক্ষণিকভাবে হিসাব করুন। ব্লগ, আর্টিকেল এবং এসইও অপটিমাইজেশনের জন্য উপযুক্ত। দ্রুত, ফ্রি এবং সাইনআপ ছাড়াই।`,
  },
  bs: {
    title: `Kalkulator Vremena Čitanja – Procijenite Vrijeme Čitanja Online Besplatno`,
    description: `Izračunajte vrijeme čitanja za bilo koji tekst odmah. Savršeno za blogove, članke i SEO optimizaciju. Brzo, besplatno i bez registracije.`,
  },
  bg: {
    title: `Калкулатор за време на четене – Оценете времето за четене онлайн безплатно`,
    description: `Изчислете времето за четене на всеки текст мигновено. Идеален за блогове, статии и SEO оптимизация. Бърз, безплатен и без регистрация.`,
  },
  my: {
    title: `ဖတ်ချိန် တွက်ချက်မှု – အွန်လိုင်း အခမဲ့ ဖတ်ချိန် ခန့်မှန်းပါ`,
    description: `မည်သည့်စာသားမဆို ဖတ်ချိန်ကို ချက်ချင်း တွက်ချက်ပါ။ ဘလော့၊ ဆောင်းပါး နှင့် SEO အတွက် သင့်တော်ပါသည်။ မြန်ဆန်၊ အခမဲ့ နှင့် မှတ်ပုံတင်ရန် မလိုအပ်ပါ။`,
  },
  ca: {
    title: `Calculadora de Temps de Lectura – Estima el Temps de Lectura en Línia Gratuït`,
    description: `Calcula el temps de lectura de qualsevol text a l’instant. Perfecte per a blogs, articles i optimització SEO. Ràpid, gratuït i sense registre.`,
  },
  zh: {
    title: `阅读时间计算器 – 在线免费估算阅读时间`,
    description: `立即计算任何文本的阅读时间。非常适合博客、文章和SEO优化。快速、免费且无需注册。`,
  },
  hr: {
    title: `Kalkulator Vremena Čitanja – Procijenite Vrijeme Čitanja Online Besplatno`,
    description: `Izračunajte vrijeme čitanja za bilo koji tekst odmah. Savršeno za blogove, članke i SEO optimizaciju. Brzo, besplatno i bez registracije.`,
  },
  cs: {
    title: `Kalkulačka doby čtení – Odhadněte dobu čtení online zdarma`,
    description: `Okamžitě vypočítejte dobu čtení pro jakýkoli text. Ideální pro blogy, články a SEO optimalizaci. Rychlé, zdarma a bez registrace.`,
  },
  da: {
    title: `Læsetidsberegner – Estimér læsetid online gratis`,
    description: `Beregn læsetid for enhver tekst øjeblikkeligt. Perfekt til blogs, artikler og SEO-optimering. Hurtig, gratis og ingen tilmelding krævet.`,
  },
  nl: {
    title: `Leestijd Calculator – Schat Leestijd Online Gratis`,
    description: `Bereken direct de leestijd voor elke tekst. Perfect voor blogs, artikelen en SEO-optimalisatie. Snel, gratis en zonder aanmelding.`,
  },
  en: {
    title: `Reading Time Calculator – Estimate Reading Time Online Free`,
    description: `Calculate reading time for any text instantly. Perfect for blogs, articles, and SEO optimization. Fast, free, and no signup required.`,
  },
  et: {
    title: `Lugemisaja Kalkulaator – Hinnake lugemisaega veebis tasuta`,
    description: `Arvutage kohe iga teksti lugemisaeg. Ideaalne blogide, artiklite ja SEO optimeerimise jaoks. Kiire, tasuta ja ilma registreerimiseta.`,
  },
  fj: {
    title: `Vakadidike ni Gauna ni Wilivola – Vakadidike ni Gauna ni Wilivola e Intaneti e Sega ni Lavo`,
    description: `Vakadidike na gauna ni wilivola ni dua na vola vakaotia. Vinaka sara vei blog, articles kei na SEO. Vakatotolo, sega ni lavo, sega ni bulataka.`,
  },
  fi: {
    title: `Lukuaikaa Laskuri – Arvioi lukuaika verkossa ilmaiseksi`,
    description: `Laske minkä tahansa tekstin lukuaika heti. Täydellinen blogeille, artikkeleille ja SEO-optimoinnille. Nopea, ilmainen eikä rekisteröintiä vaadita.`,
  },
  fr: {
    title: `Calculateur de Temps de Lecture – Estimez le Temps de Lecture en Ligne Gratuitement`,
    description: `Calculez instantanément le temps de lecture de n’importe quel texte. Parfait pour les blogs, articles et optimisation SEO. Rapide, gratuit et sans inscription.`,
  },
  gl: {
    title: `Calculadora de Tempo de Lectura – Estima o Tempo de Lectura en Liña Gratis`,
    description: `Calcula o tempo de lectura de calquera texto ao instante. Perfecto para blogs, artigos e optimización SEO. Rápido, gratuíto e sen rexistro.`,
  },
  ka: {
    title: `კითხვის დროის კალკულატორი – შეაფასეთ კითხვის დრო ონლაინ უფასოდ`,
    description: `გამოთვალეთ ნებისმიერი ტექსტის კითხვის დრო მყისიერად. იდეალურია ბლოგებისთვის, სტატიებისთვის და SEO ოპტიმიზაციისთვის. სწრაფი, უფასო და რეგისტრაციის გარეშე.`,
  },
  de: {
    title: `Lesezeit-Rechner – Schätzen Sie die Lesezeit online kostenlos`,
    description: `Berechnen Sie die Lesezeit für jeden Text sofort. Perfekt für Blogs, Artikel und SEO-Optimierung. Schnell, kostenlos und ohne Anmeldung.`,
  },
  el: {
    title: `Υπολογιστής Χρόνου Ανάγνωσης – Εκτιμήστε τον Χρόνο Ανάγνωσης Online Δωρεάν`,
    description: `Υπολογίστε άμεσα τον χρόνο ανάγνωσης για οποιοδήποτε κείμενο. Ιδανικό για blogs, άρθρα και βελτιστοποίηση SEO. Γρήγορο, δωρεάν και χωρίς εγγραφή.`,
  },
  kl: {
    title: `Atuagaqarnermi Qanoq Unnukkaluarneq – Atuagaqarnermi Qanoq Unnukkaluarneq Online Free`,
    description: `Tekstimi atuagaqarnermi qanoq unnukkaluarneq ukiarnerpaaq. Blogit, artikulit aamma SEO-mut. Suli, peqqissaarneqanngitsumik.`,
  },
  gn: {
    title: `Moñe’ẽ Tiempoko Calculadora – Moñe’ẽ Tiempoko Online Rehecha Free`,
    description: `Oimeraẽ moñe’ẽ tiempoko calculá. Blog, artículo ha SEO optimización. Rápido, gratuito ha sin registro.`,
  },
  gu: {
    title: `વાંચન સમય કેલ્ક્યુલેટર – ઓનલાઈન મફત વાંચન સમયનો અંદાજ કાઢો`,
    description: `કોઈપણ ટેક્સ્ટ માટે વાંચન સમય તરત જ ગણો. બ્લોગ્સ, લેખો અને SEO ઑપ્ટિમાઇઝેશન માટે યોગ્ય. ઝડપી, મફત અને સાઇન અપ વિના.`,
  },
  ht: {
    title: `Kalkilatè Tan Lekti – Estime Tan Lekti Sou Entènèt Gratis`,
    description: `Kalkile tan lekti nenpòt tèks imedyatman. Pafè pou blog, atik ak optimize SEO. Rapid, gratis epi pa bezwen enskripsyon.`,
  },
  ha: {
    title: `Kalkuleta Lokacin Karatu – Ƙididdigar Lokacin Karatu Online Kyauta`,
    description: `Ƙididdiga lokacin karatu na kowane rubutu nan take. Cikakke don bulogi, labarai da ingantawa SEO. Sauri, kyauta kuma ba a buƙatar rajista.`,
  },
  he: {
    title: `מחשבון זמן קריאה – העריכו זמן קריאה באינטרנט בחינם`,
    description: `חשבו זמן קריאה לכל טקסט באופן מיידי. מושלם לבלוגים, מאמרים ואופטימיזציית SEO. מהיר, חינם וללא הרשמה.`,
  },
  hi: {
    title: `रीडिंग टाइम कैलकुलेटर – ऑनलाइन फ्री पढ़ने का समय अनुमानित करें`,
    description: `किसी भी टेक्स्ट का पढ़ने का समय तुरंत कैलकुलेट करें। ब्लॉग्स, आर्टिकल्स और SEO ऑप्टिमाइजेशन के लिए बेस्ट। तेज़, फ्री और बिना साइनअप के।`,
  },
  hu: {
    title: `Olvasási Idő Kalkulátor – Becsülje meg az olvasási időt online ingyen`,
    description: `Számolja ki azonnal bármely szöveg olvasási idejét. Tökéletes blogokhoz, cikkekhez és SEO optimalizáláshoz. Gyors, ingyenes és regisztráció nélkül.`,
  },
  is: {
    title: `Lestur Tími Reiknivél – Áætlið lestur tíma á netinu ókeypis`,
    description: `Reiknið lestur tíma fyrir hvaða texta sem er strax. Fullkomið fyrir blogg, greinar og SEO hagræðingu. Hratt, ókeypis og engin skráning nauðsynleg.`,
  },
  ig: {
    title: `Ngụkọ Oge Ọgụgụ – Mee Atụmatụ Oge Ọgụgụ n’ịntanetị n’efu`,
    description: `Gbakọọ oge ọgụgụ maka ederede ọ bụla ozugbo. Ziri ezi maka blọọgụ, akụkọ na SEO. Ngwa ngwa, n’efu na enweghị ndebanye aha.`,
  },
  id: {
    title: `Kalkulator Waktu Baca – Perkirakan Waktu Baca Online Gratis`,
    description: `Hitung waktu baca untuk teks apa pun secara instan. Sempurna untuk blog, artikel, dan optimalisasi SEO. Cepat, gratis, dan tanpa pendaftaran.`,
  },
  iu: {
    title: `Uqausiqarniq Qanuq Unnukkaluarneq – Uqausiqarniq Qanuq Unnukkaluarneq Online Free`,
    description: `Qanuq unnukkaluarneq uqausiqarniq uqausirnut. Blog, article, SEO-mut. Suli, peqqissaarneqanngitsumik.`,
  },
  ga: {
    title: `Áireamhán Ama Léitheoireachta – Meastachán Ama Léitheoireachta Ar Líne Saor in Aisce`,
    description: `Ríomh am léitheoireachta d’aon téacs láithreach. Foirfe do bhlaganna, ailt agus optamú SEO. Tapa, saor in aisce agus gan síniú isteach.`,
  },
  it: {
    title: `Calcolatore Tempo di Lettura – Stima il Tempo di Lettura Online Gratis`,
    description: `Calcola il tempo di lettura di qualsiasi testo istantaneamente. Perfetto per blog, articoli e ottimizzazione SEO. Veloce, gratuito e senza registrazione.`,
  },
  ja: {
    title: `読書時間計算ツール – オンラインで無料で読書時間を推定`,
    description: `任意のテキストの読書時間を即座に計算します。ブログ、記事、SEO最適化に最適です。高速、無料、登録不要。`,
  },
  jv: {
    title: `Kalkulator Wektu Maca – Perkirakan Wektu Maca Online Gratis`,
    description: `Hitung wektu maca kanggo teks apa wae kanthi cepet. Cocok kanggo blog, artikel lan optimalisasi SEO. Cepet, gratis lan ora perlu ndaftar.`,
  },
  kn: {
    title: `ಓದುವ ಸಮಯ ಕ್ಯಾಲ್ಕುಲೇಟರ್ – ಆನ್‌ಲೈನ್ ಉಚಿತವಾಗಿ ಓದುವ ಸಮಯವನ್ನು ಅಂದಾಜು ಮಾಡಿ`,
    description: `ಯಾವುದೇ ಪಠ್ಯದ ಓದುವ ಸಮಯವನ್ನು ತಕ್ಷಣ ಲೆಕ್ಕ ಹಾಕಿ. ಬ್ಲಾಗ್‌ಗಳು, ಲೇಖನಗಳು ಮತ್ತು SEO ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗೆ ಸೂಕ್ತ. ವೇಗವಾಗಿ, ಉಚಿತ ಮತ್ತು ಸೈನ್ ಅಪ್ ಅಗತ್ಯವಿಲ್ಲ.`,
  },
  kk: {
    title: `Оқу Уақытын Есептеуіш – Оқу Уақытын Онлайн Тегін Бағалау`,
    description: `Кез келген мәтіннің оқу уақытын лезде есептеңіз. Блогтар, мақалалар және SEO оңтайландыру үшін өте қолайлы. Жылдам, тегін және тіркеусіз.`,
  },
  km: {
    title: `កម្មវិធីគណនាពេលវេលាអាន – ប៉ាន់ស្មានពេលវេលាអានអនឡាញឥតគិតថ្លៃ`,
    description: `គណនាពេលវេលាអានសម្រាប់អត្ថបទណាមួយភ្លាមៗ។ ល្អសម្រាប់ប្លុក អត្ថបទ និងការបង្កើន SEO។ លឿន ឥតគិតថ្លៃ និងមិនត្រូវការចុះឈ្មោះ។`,
  },
  ko: {
    title: `읽기 시간 계산기 – 온라인에서 무료로 읽기 시간 추정`,
    description: `모든 텍스트의 읽기 시간을 즉시 계산하세요. 블로그, 기사, SEO 최적화에 완벽합니다. 빠르고 무료이며 가입 불필요.`,
  },
  ku: {
    title: `Hesabkera Demê Xwendinê – Demê Xwendinê Li Ser Înternetê Belaş Texmîn Bikin`,
    description: `Demê xwendinê ji bo her nivîsekê tavilê hesab bikin. Ji bo blog, gotar û xweşbîniya SEO bêkêmasî ye. Zû, belaş û bê qeydkirin.`,
  },
  ky: {
    title: `Окуу Убактысын Эсептөөчү – Окуу Убактысын Онлайн Акысыз Баалоо`,
    description: `Каалаган тексттин окуу убактысын дароо эсептеңиз. Блогдор, макалалар жана SEO үчүн идеалдуу. Ыкчам, акысыз жана каттоо талап кылынбайт.`,
  },
  lo: {
    title: `ເຄື່ອງຄິດໄລ່ເວລາອ່ານ – ປະມານເວລາອ່ານອອນລາຍຟຣີ`,
    description: `ຄິດໄລ່ເວລາອ່ານສຳລັບຂໍ້ຄວາມໃດກໍໄດ້ທັນທີ. ເໝາະສຳລັບບລັອກ, ບົດຄວາມ ແລະ SEO. ໄວ, ຟຣີ ແລະ ບໍ່ຕ້ອງສະໝັກ.`,
  },
  lv: {
    title: `Lasīšanas Laika Kalkulators – Novērtējiet Lasīšanas Laiku Tiešsaistē Bezmaksas`,
    description: `Aprēķiniet lasīšanas laiku jebkuram tekstam uzreiz. Ideāli blogiem, rakstiem un SEO optimizācijai. Ātri, bez maksas un bez reģistrācijas.`,
  },
  lt: {
    title: `Skaitymo Laiko Skaičiuoklė – Įvertinkite Skaitymo Laiką Internetu Nemokamai`,
    description: `Akimirksniu apskaičiuokite bet kokio teksto skaitymo laiką. Puikiai tinka tinklaraščiams, straipsniams ir SEO optimizavimui. Greita, nemokama ir nereikia registruotis.`,
  },
  lb: {
    title: `Lieszäit-Rechner – Schätzt Lieszäit Online Gratis`,
    description: `Berechent Lieszäit fir all Text direkt. Perfekt fir Blogs, Artikelen an SEO-Optimiséierung. Schnell, gratis an ouni Umeldung.`,
  },
  mk: {
    title: `Калкулатор за време на читање – Проценете време на читање онлајн бесплатно`,
    description: `Пресметајте го времето на читање за било кој текст веднаш. Совршено за блогови, написи и SEO оптимизација. Брзо, бесплатно и без регистрација.`,
  },
  mg: {
    title: `Kalkulateur Ora Famakiana – Tombanana Ora Famakiana An-tserasera Maimaim-poana`,
    description: `Kajy ora famakiana ho an'ny lahatsoratra rehetra avy hatrany. Tena tsara ho an'ny blog, lahatsoratra ary fanatsarana SEO. Haingana, maimaim-poana ary tsy mila fisoratana anarana.`,
  },
  ms: {
    title: `Kalkulator Masa Membaca – Anggar Masa Membaca Dalam Talian Percuma`,
    description: `Kira masa membaca untuk mana-mana teks dengan serta-merta. Sesuai untuk blog, artikel dan pengoptimuman SEO. Cepat, percuma dan tiada pendaftaran diperlukan.`,
  },
  ml: {
    title: `വായനാ സമയ കാൽക്കുലേറ്റർ – ഓൺലൈൻ സൗജന്യമായി വായനാ സമയം കണക്കാക്കുക`,
    description: `ഏതൊരു ടെക്സ്റ്റിന്റെയും വായനാ സമയം തൽക്ഷണം കണക്കാക്കുക. ബ്ലോഗുകൾ, ലേഖനങ്ങൾ, SEO ഒപ്റ്റിമൈസേഷന് അനുയോജ്യം. വേഗത്തിൽ, സൗജന്യം, സൈൻ അപ്പ് ആവശ്യമില്ല.`,
  },
  mt: {
    title: `Kalkulatur tal-Ħin tal-Qari – Stima l-Ħin tal-Qari Online Bla Ħlas`,
    description: `Ikkalkula l-ħin tal-qari għal kwalunkwe test istantanjament. Perfett għal blogs, artikoli u ottimizzazzjoni SEO. Mgħaġġel, bla ħlas u mingħajr reġistrazzjoni.`,
  },
  mi: {
    title: `Tatau Wā Pānui – Whakatau Wā Pānui Ipurangi Koreutu`,
    description: `Tātari wā pānui mō ngā kupu katoa tonu. Tino pai mō ngā rangitaki, tuhinga me te SEO. Tere, koreutu, kāore he rēhitatanga.`,
  },
  mr: {
    title: `वाचन वेळ कॅल्क्युलेटर – ऑनलाइन मोफत वाचन वेळ अंदाज करा`,
    description: `कोणत्याही मजकुराचा वाचन वेळ त्वरित मोजा. ब्लॉग्स, लेख आणि SEO ऑप्टिमायझेशनसाठी उत्तम. वेगवान, मोफत आणि साइनअपशिवाय.`,
  },
  mn: {
    title: `Унших Хугацаа Тооцоолуур – Унших Хугацааг Онлайн Үнэгүй Тооцоол`,
    description: `Ямар ч текстын унших хугацааг шууд тооцоолно. Блог, нийтлэл, SEO оновчлолд тохиромжтой. Хурдан, үнэгүй, бүртгэлгүй.`,
  },
  nv: {
    title: `Na’ałkidi Biyi’ Łahjį’ – Na’ałkidi Biyi’ Łahjį’ Online Free`,
    description: `Naaltsoos biyi’ na’ałkidi biyi’ łahjį’ yił naalnish. Blog, article, SEO. Łą́ą́, free, doo registration da.`,
  },
  ne: {
    title: `पढ्ने समय क्याल्कुलेटर – अनलाइन नि:शुल्क पढ्ने समय अनुमान गर्नुहोस्`,
    description: `कुनै पनि पाठको पढ्ने समय तुरुन्तै गणना गर्नुहोस्। ब्लग, लेख र SEO अनुकूलनका लागि उपयुक्त। छिटो, नि:शुल्क र साइनअप बिना।`,
  },
  no: {
    title: `Lesetids Kalkulator – Estimer lesetid online gratis`,
    description: `Beregn lesetid for enhver tekst umiddelbart. Perfekt for blogger, artikler og SEO-optimalisering. Rask, gratis og uten påmelding.`,
  },
  om: {
    title: `Kalkuleeta Yeroo Dubbisuu – Yeroo Dubbisuu Online Bilisa Ta’uu`,
    description: `Barruu kamiyyuu yeroo dubbisuu saffisaan herreegaa. Blog, barruulee fi SEO fooyyessuuf mijataa. Saffisa, bilisa fi galtee malee.`,
  },
  ps: {
    title: `لوستلو وخت کیلکولیټر – آنلاین وړیا لوستلو وخت اټکل کړئ`,
    description: `د هر متن لپاره لوستلو وخت سمدستي حساب کړئ. د بلاګونو، مقالو او SEO لپاره مناسب. چټک، وړیا او پرته له ثبت څخه.`,
  },
  fa: {
    title: `ماشین حساب زمان مطالعه – تخمین زمان مطالعه آنلاین رایگان`,
    description: `زمان مطالعه هر متنی را فوراً محاسبه کنید. عالی برای بلاگ، مقالات و بهینه‌سازی SEO. سریع، رایگان و بدون نیاز به ثبت‌نام.`,
  },
  pl: {
    title: `Kalkulator Czasu Czytania – Szacuj Czas Czytania Online Za Darmo`,
    description: `Oblicz czas czytania dowolnego tekstu natychmiast. Idealny dla blogów, artykułów i optymalizacji SEO. Szybki, darmowy i bez rejestracji.`,
  },
  pt: {
    title: `Calculadora de Tempo de Leitura – Estime o Tempo de Leitura Online Grátis`,
    description: `Calcule o tempo de leitura de qualquer texto instantaneamente. Perfeito para blogs, artigos e otimização SEO. Rápido, grátis e sem cadastro.`,
  },
  qu: {
    title: `Ñawiriy Tiempo Calculadora – Ñawiriy Tiempo Online Gratis`,
    description: `Mayqen qillqasqapas ñawiriy tiempo yupay. Blog, artículo, SEO. Utqay, gratis, mana registro.`,
  },
  ro: {
    title: `Calculator Timp de Citire – Estimează Timpul de Citire Online Gratuit`,
    description: `Calculează instantaneu timpul de citire pentru orice text. Perfect pentru bloguri, articole și optimizare SEO. Rapid, gratuit și fără înregistrare.`,
  },
  ru: {
    title: `Калькулятор времени чтения – Оценивайте время чтения онлайн бесплатно`,
    description: `Мгновенно рассчитайте время чтения любого текста. Идеально для блогов, статей и оптимизации SEO. Быстро, бесплатно и без регистрации.`,
  },
  sm: {
    title: `Fua Fa’atau Taimi Faitau – Fua Fa’atau Taimi Faitau I Lugalaina Saoloto`,
    description: `Fua taimi faitau mo ni tusitusiga uma lava. Lelei mo blog, tala ma SEO. Vave, saoloto, leai se lesitala.`,
  },
  sr: {
    title: `Kalkulator Vremena Čitanja – Procenite Vreme Čitanja Online Besplatno`,
    description: `Izračunajte vreme čitanja za bilo koji tekst odmah. Savršeno za blogove, članke i SEO optimizaciju. Brzo, besplatno i bez registracije.`,
  },
  sn: {
    title: `Karikureta Yenguva Yekuverenga – Funga Nguva Yekuverenga Pamhepo Mahara`,
    description: `Verenga nguva yekuverenga yechinyorwa chero chipi zvacho nekukurumidza. Yakanaka kumablog, zvinyorwa neSEO. Inokurumidza, yemahara uye hapana kunyoresa.`,
  },
  si: {
    title: `කියවීමේ කාලය ගණනය කරන්නා – නොමිලේ මාර්ගගතව කියවීමේ කාලය තක්සේරු කරන්න`,
    description: `ඕනෑම පෙළක කියවීමේ කාලය ක්ෂණිකව ගණනය කරන්න. බ්ලොග්, ලිපි සහ SEO සඳහා සුදුසුයි. ඉක්මන්, නොමිලේ සහ ලියාපදිංචිය අවශ්‍ය නැත.`,
  },
  sk: {
    title: `Kalkulačka času čítania – Odhadnite čas čítania online zadarmo`,
    description: `Vypočítajte čas čítania pre akýkoľvek text okamžite. Ideálne pre blogy, články a SEO optimalizáciu. Rýchle, zadarmo a bez registrácie.`,
  },
  sl: {
    title: `Kalkulator Časa Branja – Ocenite Čas Branja Spletno Brezplačno`,
    description: `Takoj izračunajte čas branja za kateri koli tekst. Popolno za bloge, članke in SEO optimizacijo. Hitro, brezplačno in brez prijave.`,
  },
  so: {
    title: `Xisaabiyaha Waqtiga Akhriska – Qiyaas Waqtiga Akhriska Online Bilaash`,
    description: `Ku xisaabi waqtiga akhriska qoraal kasta markiiba. Ku habboon blog, maqaallo iyo SEO. Degdeg ah, bilaash ah oo aan diiwaangelin lahayn.`,
  },
  es: {
    title: `Calculadora de Tiempo de Lectura – Estima el Tiempo de Lectura Online Gratis`,
    description: `Calcula el tiempo de lectura de cualquier texto al instante. Perfecto para blogs, artículos y optimización SEO. Rápido, gratis y sin registro.`,
  },
  su: {
    title: `Kalkulator Waktu Maca – Perkirakeun Waktu Maca Online Gratis`,
    description: `Itung waktu maca pikeun téks naon waé sacara instan. Cocog pikeun blog, artikel jeung optimasi SEO. Gancang, gratis jeung teu perlu ngadaptar.`,
  },
  sw: {
    title: `Kikokotoo cha Muda wa Kusoma – Kadiria Muda wa Kusoma Mtandaoni Bure`,
    description: `Hesabu muda wa kusoma kwa maandishi yoyote mara moja. Bora kwa blogu, makala na uboreshaji wa SEO. Haraka, bure na bila kujisajili.`,
  },
  sv: {
    title: `Lästidskalkylator – Uppskatta lästid online gratis`,
    description: `Beräkna lästid för valfri text direkt. Perfekt för bloggar, artiklar och SEO-optimering. Snabb, gratis och ingen registrering krävs.`,
  },
  tl: {
    title: `Kalkulator ng Oras ng Pagbasa – Tantiyahin ang Oras ng Pagbasa Online Libre`,
    description: `Kalkulahin agad ang oras ng pagbasa para sa anumang teksto. Perpekto para sa mga blog, artikulo at SEO optimization. Mabilis, libre at walang signup.`,
  },
  tg: {
    title: `Ҳисобкунаки Вақти Хондан – Вақти Хонданро Онлайн Ройгон Баҳогузорӣ Кунед`,
    description: `Вақти хондани ҳар гуна матнро фавран ҳисоб кунед. Барои блогҳо, мақолаҳо ва оптимизатсияи SEO комил аст. Зуд, ройгон ва бе сабти ном.`,
  },
  ta: {
    title: `படிக்கும் நேர கால்குலேட்டர் – ஆன்லைன் இலவசமாக படிக்கும் நேரத்தை மதிப்பிடுங்கள்`,
    description: `எந்த உரைக்கும் படிக்கும் நேரத்தை உடனடியாகக் கணக்கிடுங்கள். பிளாக்கள், கட்டுரைகள் மற்றும் SEO மேம்பாட்டிற்கு சிறந்தது. வேகமானது, இலவசம் மற்றும் பதிவு தேவையில்லை.`,
  },
  te: {
    title: `చదువు సమయ కాలిక్యులేటర్ – ఆన్‌లైన్ ఉచితంగా చదువు సమయం అంచనా వేయండి`,
    description: `ఏదైనా టెక్స్ట్ చదువు సమయాన్ని తక్షణం లెక్కించండి. బ్లాగులు, వ్యాసాలు మరియు SEO ఆప్టిమైజేషన్‌కు సరైనది. వేగవంతం, ఉచితం మరియు సైన్‌అప్ అవసరం లేదు।`,
  },
  th: {
    title: `เครื่องคำนวณเวลาในการอ่าน – ประมาณเวลาในการอ่านออนไลน์ฟรี`,
    description: `คำนวณเวลาในการอ่านสำหรับข้อความใดๆ ได้ทันที เหมาะสำหรับบล็อก บทความ และการปรับ SEO เร็ว ฟรี และไม่ต้องสมัคร`,
  },
  ti: {
    title: `ማስተካከያ ግዜ ንባብ – ግዜ ንባብ ኦንላይን ነጻ ግምት ምግባር`,
    description: `ንዝኾነ ጽሑፍ ግዜ ንባብ ብቕልጡፍ ምትካኽ። ንብሎግ፣ መጽናዕቲን SEO ምትካኽ። ቅልጡፍ፣ ነጻን ምዝገባ የብሉን።`,
  },
  to: {
    title: `Kalkulata Taimi Lau – Fika Taimi Lau ‘I he ‘Initaneti Ta’e Totongi`,
    description: `Fika taimi lau ki he tohi kotoa. Lelei ki he blog, ‘atikalá mo SEO. Vave, ta’e totongi, ‘ikai ke fokotu’u.`,
  },
  tr: {
    title: `Okuma Süresi Hesaplayıcı – Okuma Süresini Çevrimiçi Ücretsiz Tahmin Edin`,
    description: `Herhangi bir metnin okuma süresini anında hesaplayın. Bloglar, makaleler ve SEO optimizasyonu için mükemmel. Hızlı, ücretsiz ve kayıt gerektirmez.`,
  },
  tk: {
    title: `Okamak Wagty Kalkulýatory – Okamak Wagtyny Onlaýn Mugt Hasapla`,
    description: `Islendik tekstiň okamak wagtyny derrew hasaplaň. Bloglar, makalalar we SEO optimizasiýasy üçin ýokary. Çalt, mugt we registrasiýa gerek däl.`,
  },
  uk: {
    title: `Калькулятор часу читання – Оцінюйте час читання онлайн безкоштовно`,
    description: `Миттєво розрахуйте час читання будь-якого тексту. Ідеально для блогів, статей та оптимізації SEO. Швидко, безкоштовно і без реєстрації.`,
  },
  ur: {
    title: `ریڈنگ ٹائم کیلکولیٹر – آن لائن مفت پڑھنے کا وقت کا اندازہ لگائیں`,
    description: `کسی بھی متن کا پڑھنے کا وقت فوری طور پر حساب کریں۔ بلاگز، مضامین اور SEO آپٹیمائزیشن کے لیے بہترین۔ تیز، مفت اور سائن اپ کے بغیر۔`,
  },
  uz: {
    title: `O‘qish Vaqti Kalkulyatori – O‘qish Vaqtini Onlayn Bepul Hisoblang`,
    description: `Har qanday matnning o‘qish vaqtini darhol hisoblang. Bloglar, maqolalar va SEO optimizatsiyasi uchun ideal. Tez, bepul va ro‘yxatdan o‘tish shart emas.`,
  },
  vi: {
    title: `Công cụ tính thời gian đọc – Ước tính thời gian đọc trực tuyến miễn phí`,
    description: `Tính thời gian đọc cho bất kỳ văn bản nào ngay lập tức. Hoàn hảo cho blog, bài viết và tối ưu hóa SEO. Nhanh chóng, miễn phí và không cần đăng ký.`,
  },
  cy: {
    title: `Cyfrifiannell Amser Darllen – Amcangyfrifwch Amser Darllen Ar-lein Am Ddim`,
    description: `Cyfrifwch amser darllen unrhyw destun ar unwaith. Perffaith ar gyfer blogiau, erthyglau ac optimeiddio SEO. Cyflym, am ddim ac heb gofrestru.`,
  },
  xh: {
    title: `Isibali-xesha Sokufunda – Qikelela Ixesha Lokufunda Kwi-Intanethi Ngokwasimahla`,
    description: `Bala ixesha lokufunda naluphi na ubhalo ngokukhawuleza. Ifaneleke kwiibhlog, amanqaku kunye nokuphucula i-SEO. Iyakhawuleza, isimahla kwaye akukho kubhalisa.`,
  },
  yo: {
    title: `Ẹrọ Ìṣirò Àkókò Kíkà – Ṣe Àkọsílẹ̀ Àkókò Kíkà Lórí Ayélujára Lọ́fẹ̀ẹ́`,
    description: `Ṣe ìṣirò àkókò kíkà fún ọ̀rọ̀ èyíkéyìí lẹ́sẹ̀kẹsẹ̀. Dára fún àwọn bulọ́ọ̀gì, àwọn àpilẹ̀kọ àti ìmúdára SEO. Yára, lọ́fẹ̀ẹ́ àti láìsí ìforúkọsílẹ̀.`,
  },
  zu: {
    title: `Isibali Sesikhathi Sokufunda – Linganisa Isikhathi Sokufunda Ku-inthanethi Mahhala`,
    description: `Bala isikhathi sokufunda sanoma yimuphi umbhalo ngokushesha. Kulungile kumabhulogi, izindatshana nokuthuthukisa i-SEO. Kushesha, kumahhala futhi akudingi ukubhalisa.`,
  },
};

const baseMeta = writingToolsMeta["reading-time-calculator"];

export function readingTimeCalculatorHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getReadingTimeCalculatorSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = readingTimeCalculatorSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getReadingTimeCalculatorHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getReadingTimeCalculatorSeo(locale);
  return {
    h1: readingTimeCalculatorHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
