const fs = require('fs');
const path = require('path');

const LANGUAGE_TO_LOCALE = {
  English: "en",
  Chinese: "zh",
  Spanish: "es",
  Arabic: "ar",
  Indonesian: "id",
  Malay: "ms",
  Portuguese: "pt",
  French: "fr",
  Japanese: "ja",
  Russian: "ru",
  German: "de",
  Hindi: "hi",
  Bengali: "bn",
  Urdu: "ur",
  Turkish: "tr",
  Korean: "ko",
  Vietnamese: "vi",
  Italian: "it",
  Persian: "fa",
  Thai: "th",
  Polish: "pl",
  Dutch: "nl",
  Swedish: "sv",
  Greek: "el",
  Czech: "cs",
  Romanian: "ro",
  Hungarian: "hu",
  Hebrew: "he",
  Danish: "da",
  Finnish: "fi",
  Norwegian: "no",
  Slovak: "sk",
  Bulgarian: "bg",
  Croatian: "hr",
  Serbian: "sr",
  Ukrainian: "uk",
  Tamil: "ta",
  Telugu: "te",
  Marathi: "mr",
  Gujarati: "gu",
  Kannada: "kn",
  Malayalam: "ml",
  Sinhala: "si",
  Nepali: "ne",
  Burmese: "my",
  Khmer: "km",
  Lao: "lo",
  Mongolian: "mn",
  Georgian: "ka",
  Armenian: "hy",
  Azerbaijani: "az",
  Swahili: "sw",
  Zulu: "zu",
  Afrikaans: "af",
  Amharic: "am",
  Somali: "so",
  Yoruba: "yo",
  Igbo: "ig",
  Hausa: "ha",
  Malagasy: "mg",
  Uzbek: "uz",
  Kazakh: "kk",
  Kyrgyz: "ky",
  Tajik: "tg",
  Turkmen: "tk",
  Pashto: "ps",
  Kurdish: "ku",
  Albanian: "sq",
  Lithuanian: "lt",
  Latvian: "lv",
  Estonian: "et",
  Icelandic: "is",
  Irish: "ga",
  Welsh: "cy",
  Basque: "eu",
  Catalan: "ca",
  Galician: "gl",
  Maltese: "mt",
  Luxembourgish: "lb",
  Macedonian: "mk",
  Bosnian: "bs",
  Slovenian: "sl",
  Fijian: "fj",
  Maori: "mi",
  Samoan: "sm",
  Tongan: "to",
  "Haitian Creole": "ht",
  Quechua: "qu",
  Aymara: "ay",
  Guarani: "gn",
  Navajo: "nv",
  Inuktitut: "iu",
  Greenlandic: "kl",
  Oromo: "om",
  Tigrinya: "ti",
  Shona: "sn",
  Xhosa: "xh",
  Cebuano: "ceb",
  Tagalog: "tl",
  Javanese: "jv",
  Sundanese: "su"
};

const input = \`Afrikaans (South Africa)
JSON Editor Aanlyn – Formateer, Valideer & Verskaf JSON Gratis
Redigeer, formateer en valideer JSON onmiddellik met hierdie gratis aanlyn JSON-redigeerder. Verskaf of minifiseer JSON, herstel foute en kopieer resultate maklik. Vinnig, veilig en geen aanmelding nodig nie.

Albanian (Albania)
JSON Editor Online – Formato, Valido & Zbukuro JSON Falas
Redakto, formato dhe valido JSON menjëherë me këtë redaktues JSON online falas. Zbukuro ose minimizo JSON, rregullo gabimet dhe kopjo rezultatet lehtësisht. Shpejt, i sigurt dhe pa nevojë për hyrje.

Amharic (Ethiopia)
JSON Editor Online – ጂኤስኦን አርትዕ፣ አረጋግጥ እና ውብ አድርግ በነጻ
ጂኤስኦንን በቅጽበት አርትዕ፣ አርቅቅ እና አረጋግጥ በዚህ ነጻ የመስመር ላይ ጂኤስኦን አርታዒ። ጂኤስኦንን ውብ ወይም አጭር አድርግ፣ ስህተቶችን አስተካክል እና ውጤቶችን በቀላሉ ቅዳ። ፈጣን፣ ደህንነቱ የተጠበቀ እና ምንም መግቢያ አያስፈልግም።

Arabic (Saudi Arabia / Egypt)
محرر JSON عبر الإنترنت – تنسيق، التحقق والتجميل JSON مجاناً
قم بتحرير وتنسيق والتحقق من JSON فوراً باستخدام محرر JSON المجاني عبر الإنترنت هذا. جمّل أو صغّر JSON، أصلح الأخطاء وانسخ النتائج بسهولة. سريع، آمن وبدون الحاجة لتسجيل الدخول.

Armenian (Armenia)
JSON Editor Online – Ֆորմատավորել, Վավերացնել և Գեղեցկացնել JSON Անվճար
Խմբագրեք, ֆորմատավորեք և վավերացրեք JSON-ը ակնթարթորեն այս անվճար առցանց JSON խմբագրիչով: Գեղեցկացրեք կամ մինիմիզացրեք JSON-ը, շտկեք սխալները և հեշտությամբ պատճենեք արդյունքները: Արագ, ապահով և առանց գրանցման:

Aymara (Bolivia)
JSON Editor Online – Formato, Validar & Embellecer JSON Gratis
Uñst’ayaña, formatoña y validar JSON al instante con este editor JSON gratuito en línea. Embellece o minifica JSON, arregla errores y copia resultados fácilmente. Rápido, seguro y sin necesidad de login.

Azerbaijani (Azerbaijan)
JSON Editor Online – JSON Formatla, Doğrula və Gözəlləşdir Pulsuz
JSON-u dərhal redaktə edin, formatlayın və doğrulayın bu pulsuz onlayn JSON redaktoru ilə. JSON-u gözəlləşdirin və ya kiçildin, səhvləri düzəldin və nəticələri asanlıqla kopyalayın. Sürətli, təhlükəsiz və giriş tələb olunmur.

Basque (Spain)
JSON Editor Online – Formateatu, Balidatu eta Edertu JSON Doan
Editatu, formateatu eta balidatu JSON berehala doako lineako JSON editore honekin. Edertu edo txikiagotu JSON, konpondu erroreak eta kopiatu emaitzak erraz. Azkarra, segurua eta saioa hasteko beharrik gabe.

Bengali (Bangladesh / India)
জেএসএন এডিটর অনলাইন – ফরম্যাট, ভ্যালিডেট ও বিউটিফাই জেএসএন ফ্রি
এই ফ্রি অনলাইন জেএসএন এডিটর দিয়ে তাৎক্ষণিকভাবে জেএসএন এডিট, ফরম্যাট ও ভ্যালিডেট করুন। জেএসএন বিউটিফাই বা মিনিফাই করুন, ত্রুটি ঠিক করুন এবং ফলাফল সহজে কপি করুন। দ্রুত, নিরাপদ এবং লগইনের প্রয়োজন নেই।

Bosnian (Bosnia)
JSON Editor Online – Formatiraj, Validiraj i Ulijepšaj JSON Besplatno
Uredi, formatiraj i validiraj JSON odmah uz ovaj besplatni online JSON editor. Ulijepšaj ili minificiraj JSON, popravi greške i lako kopiraj rezultate. Brzo, sigurno i bez potrebe za prijavom.

Bulgarian (Bulgaria)
JSON Editor Online – Форматирай, Валидирай и Разкраси JSON Безплатно
Редактирай, форматирай и валидирай JSON мигновено с този безплатен онлайн JSON редактор. Разкраси или минимизирай JSON, поправи грешки и лесно копирай резултатите. Бързо, сигурно и без регистрация.

Burmese (Myanmar)
JSON Editor Online – JSON ဖော်မတ်၊ အတည်ပြု၊ အလှဆင် အခမဲ့
ဤအခမဲ့ အွန်လိုင်း JSON တည်းဖြတ်ကိရိယာဖြင့် JSON ကို ချက်ချင်း တည်းဖြတ်၊ ဖော်မတ် နှင့် အတည်ပြုပါ။ JSON ကို အလှဆင် သို့မဟုတ် သေးငယ်အောင် လုပ်ပါ၊ အမှားများကို ပြင်ဆင်ပါ၊ ရလဒ်များကို လွယ်ကူစွာ ကူးယူပါ။ မြန်ဆန်၊ လုံခြုံပြီး အကောင့်ဝင်ရန် မလိုအပ်ပါ။

Catalan (Spain)
JSON Editor Online – Formata, Valida i Embelleix JSON Gratuït
Edita, formata i valida JSON a l’instant amb aquest editor JSON en línia gratuït. Embelleceix o minimitza JSON, corregeix errors i copia els resultats fàcilment. Ràpid, segur i sense necessitat d’iniciar sessió.

Cebuano (Philippines)
JSON Editor Online – Format, Validate ug Beautify JSON Libre
Usba, format ug validate ang JSON dayon gamit kini nga libre nga online JSON editor. Beautify o minify ang JSON, ayaw ang mga sayop ug kopyaha ang mga resulta nga dali. Paspas, luwas ug walay login kinahanglan.

Chinese (China / Simplified)
JSON 编辑器在线 – 格式化、验证和美化 JSON 免费
使用这个免费的在线 JSON 编辑器即时编辑、格式化和验证 JSON。美化或压缩 JSON，修复错误并轻松复制结果。快速、安全且无需登录。

Croatian (Croatia)
JSON Editor Online – Formatiraj, Validiraj i Uredi JSON Besplatno
Uredi, formatiraj i validiraj JSON odmah s ovim besplatnim online JSON editorom. Uredi ili minificiraj JSON, popravi greške i lako kopiraj rezultate. Brzo, sigurno i bez prijave.

Czech (Czech Republic)
JSON Editor Online – Formátovat, Validovat a Zkrášlit JSON Zdarma
Upravujte, formátujte a validujte JSON okamžitě pomocí tohoto bezplatného online JSON editoru. Zkrášlete nebo minifikujte JSON, opravte chyby a snadno zkopírujte výsledky. Rychlé, bezpečné a bez nutnosti přihlášení.

Danish (Denmark)
JSON Editor Online – Formatér, Valider og Forskønn JSON Gratis
Rediger, formatér og valider JSON øjeblikkeligt med denne gratis online JSON-editor. Forskønn eller minificér JSON, ret fejl og kopier resultater nemt. Hurtig, sikker og ingen login nødvendigt.

Dutch (Netherlands / Belgium)
JSON Editor Online – Format, Valideer & Verfraai JSON Gratis
Bewerk, formatteer en valideer JSON direct met deze gratis online JSON-editor. Verfraai of minificeer JSON, corrigeer fouten en kopieer resultaten eenvoudig. Snel, veilig en geen login vereist.

English (United States / United Kingdom)
JSON Editor Online – Format, Validate & Beautify JSON Free
Edit, format, and validate JSON instantly with this free online JSON editor. Beautify or minify JSON, fix errors, and copy results easily. Fast, secure, and no login needed.

Estonian (Estonia)
JSON Editor Online – Vorminda, Valideeri ja Ilusta JSON Tasuta
Redigeeri, vorminda ja valideeri JSON kohe selle tasuta veebipõhise JSON-redaktoriga. Ilusta või minimeeri JSON, paranda vead ja kopeeri tulemused hõlpsalt. Kiire, turvaline ja sisselogimist pole vaja.

Fijian (Fiji)
JSON Editor Online – Format, Validate & Beautify JSON Free
Veisautaka, vakamatatataki ka vakadonui JSON vakasigalevu kei na free online JSON editor oqo. Vakamatatataka se vakalailai JSON, vakadonui cala ka kopi na i'oti ni cakacaka vakasaurava. Vakarerevaki, vakaruru ka sega ni gadrevi login.

Finnish (Finland)
JSON Editor Online – Muotoile, Vahvista ja Kaunista JSON Ilmaiseksi
Muokkaa, muotoile ja vahvista JSON välittömästi tällä ilmaisella verkkopohjaisella JSON-muokkaimella. Kaunista tai tiivistä JSON, korjaa virheet ja kopioi tulokset helposti. Nopea, turvallinen eikä kirjautumista tarvita.

French (France)
JSON Editor Online – Formater, Valider et Embellir JSON Gratuitement
Modifiez, formatez et validez JSON instantanément avec cet éditeur JSON en ligne gratuit. Embellissez ou minifiez le JSON, corrigez les erreurs et copiez les résultats facilement. Rapide, sécurisé et sans inscription requise.

Galician (Spain)
JSON Editor Online – Formata, Valida e Embellece JSON Gratis
Edita, formata e valida JSON ao instante con este editor JSON en liña gratuíto. Embellece ou minifica JSON, corrixe erros e copia os resultados facilmente. Rápido, seguro e sen necesidade de iniciar sesión.

Georgian (Georgia)
JSON Editor Online – ფორმატირება, ვალიდაცია და გალამაზება JSON უფასოდ
ჩაასწორეთ, დააფორმატირეთ და გადაამოწმეთ JSON მაშინვე ამ უფასო ონლაინ JSON რედაქტორით. გალამაზეთ ან შეამცირეთ JSON, გაასწორეთ შეცდომები და ადვილად დააკოპირეთ შედეგები. სწრაფი, უსაფრთხო და რეგისტრაციის გარეშე.

German (Germany)
JSON Editor Online – Formatieren, Validieren & Verschönern JSON Kostenlos
Bearbeiten, formatieren und validieren Sie JSON sofort mit diesem kostenlosen Online-JSON-Editor. Verschönern oder minimieren Sie JSON, beheben Sie Fehler und kopieren Sie Ergebnisse einfach. Schnell, sicher und ohne Anmeldung.

Greek (Greece)
JSON Editor Online – Μορφοποίηση, Επικύρωση & Ομορφιά JSON Δωρεάν
Επεξεργαστείτε, μορφοποιήστε και επικυρώστε JSON αμέσως με αυτόν τον δωρεάν διαδικτυακό επεξεργαστή JSON. Ομορφύνετε ή συμπιέστε το JSON, διορθώστε σφάλματα και αντιγράψτε τα αποτελέσματα εύκολα. Γρήγορο, ασφαλές και χωρίς απαιτούμενη σύνδεση.

Greenlandic (Greenland)
JSON Editor Online – Format, Validate & Pinnersaarneq JSON Namminersorneq
JSON-ip allagaqqaarneranut, formatinnut, validaterinullu atorneqarsinnaavoq tassani gratis-inngitsumik online JSON editor-imi. Pinnersaarsimassakkiartorlugu imaluunniit minify-siartorlugu, ajornartorsiutit aaqqiissutiginiarlugit aamma nassaatit annertuumik killeqartitsinngillugit. Suliartorluinnartoq, aningaasaqarnermut illersuussisoq aamma login-ip pisariaqannginnera.

Guarani (Paraguay)
JSON Editor Online – Formato, Valida ha Embellece JSON Gratis
Embojuruja, emboforma ha embo valida JSON ko’áğa ko free online JSON editor rupive. Emboaty ha embomichĩ JSON, emoĩporã jejavy ha emonguatia resultado fácil. Ipya’e, hekorosã ha ndaipóri login.

Gujarati (India)
JSON એડિટર ઓનલાઈન – ફોર્મેટ, વેલિડેટ અને બ્યુટિફાઈ JSON ફ્રી
આ ફ્રી ઓનલાઈન JSON એડિટર વડે તરત જ JSON એડિટ, ફોર્મેટ અને વેલિડેટ કરો. JSON ને બ્યુટિફાઈ અથવા મિનિફાઈ કરો, ભૂલો સુધારો અને પરિણામો સરળતાથી કોપી કરો. ઝડપી, સુરક્ષિત અને લોગિનની જરૂર નથી.

Haitian Creole (Haiti)
JSON Editor Online – Fòmate, Validé & Bèl JSON Gratis
Edite, fòmate epi valide JSON imedyatman ak editè JSON sou entènèt gratis sa a. Fè JSON bèl oswa pi piti, korije erè yo epi kopye rezilta yo fasil. Rapid, sekirite epi pa bezwen login.

Hausa (Nigeria)
JSON Editor Online – Tsara, Tabbatar & Kyakkyawan JSON Kyauta
Shirya, tsara da tabbatar da JSON nan take tare da wannan editan JSON na kan layi kyauta. Kyakkyalata ko rage JSON, gyara kura-kurai kuma kwafi sakamakon cikin sauƙi. Mai sauri, amintacce kuma ba a buƙatar shiga ba.

Hebrew (Israel)
עורך JSON מקוון – עיצוב, אימות וייפוי JSON בחינם
ערוך, עצב ואמת JSON באופן מיידי עם עורך ה-JSON המקוון החינמי הזה. יפה או מזער את ה-JSON, תקן שגיאות והעתק תוצאות בקלות. מהיר, מאובטח וללא צורך בהתחברות.

Hindi (India)
JSON एडिटर ऑनलाइन – फॉर्मेट, वैलिडेट और ब्यूटिफाई JSON फ्री
इस फ्री ऑनलाइन JSON एडिटर से तुरंत JSON एडिट, फॉर्मेट और वैलिडेट करें। JSON को ब्यूटिफाई या मिनिफाई करें, त्रुटियां ठीक करें और परिणाम आसानी से कॉपी करें। तेज, सुरक्षित और लॉगिन की जरूरत नहीं।

Hungarian (Hungary)
JSON Editor Online – Formázás, Érvényesítés és Szépítés JSON Ingyen
Szerkessze, formázza és érvényesítse a JSON-t azonnal ezzel az ingyenes online JSON-szerkesztővel. Szépítse vagy minimalizálja a JSON-t, javítsa a hibákat és másolja a eredményeket könnyen. Gyors, biztonságos és bejelentkezés nélkül.

Icelandic (Iceland)
JSON Editor Online – Forsníða, Staðfesta og Fegra JSON Ókeypis
Breyttu, forsnið og staðfestu JSON samstundis með þessum ókeypis netvænum JSON ritli. Fegraðu eða minnkaðu JSON, lagaðu villur og afritaðu niðurstöður auðveldlega. Hratt, öruggt og engin innskráning nauðsynleg.

Igbo (Nigeria)
JSON Editor Online – Hazie, Kwado & Mee Mma JSON N’efu
Dezie, hazie ma kwado JSON ozugbo site na iji ihe nchọgharị JSON n’efu a dị n’ịntanet. Mee mma ma ọ bụ belata JSON, dozie mmejọ ma depụta nsonaazụ n’ụzọ dị mfe. Ngwa ngwa, nchekwa na enweghị mkpa ibanye.

Indonesian (Indonesia)
JSON Editor Online – Format, Validasi & Perindah JSON Gratis
Edit, format, dan validasi JSON secara instan dengan editor JSON online gratis ini. Perindah atau perkecil JSON, perbaiki kesalahan, dan salin hasil dengan mudah. Cepat, aman, dan tidak perlu login.

Inuktitut (Canada)
ᔭᓄᓇᑦ ᐃᑭᐊᖅᑎᖅᓯᒪᔪᖅ ᐅᓪᓗᒥᐅᑕᖅ – ᐊᓯᐊᓕᖅᑎᑦᑎᓂᖅ, ᑐᑭᓯᒋᐊᕐᓂᖅ ᐊᒻᒪ ᐱᐊᓕᖅᑎᑦᑎᓂᖅ JSON ᐃᓚᐃᓐᓇᖅ
(Full translation available if needed – very limited digital tools for Inuktitut)

Irish (Ireland)
JSON Editor Online – Formáidigh, Bailígh & Áilleachtaigh JSON Saor in Aisce
Cuir in eagar, formáidigh agus bailígh JSON láithreach leis an eagarthóir JSON ar líne saor in aisce seo. Áilleachtaigh nó íoslaghdaigh JSON, deisigh earráidí agus cóipeáil torthaí go héasca. Tapa, slán agus gan gá le logáil isteach.

Italian (Italy)
JSON Editor Online – Formatta, Valida e Abbellisci JSON Gratis
Modifica, formatta e valida JSON all’istante con questo editor JSON online gratuito. Abbellisci o minifica il JSON, correggi gli errori e copia i risultati facilmente. Veloce, sicuro e senza bisogno di login.

Japanese (Japan)
JSON Editor Online – JSONをフォーマット、検証、美化 無料
この無料のオンラインJSONエディターでJSONを即座に編集、フォーマット、検証します。JSONを美しく整えたり縮小したり、エラーを修正して結果を簡単にコピーできます。高速、安全、ログイン不要です。

Javanese (Indonesia)
JSON Editor Online – Format, Validasi & Beautify JSON Gratis
Sunting, format lan validasi JSON kanthi cepet nganggo editor JSON online gratis iki. Beautify utawa minify JSON, ndandani kesalahan lan salin asil kanthi gampang. Cepet, aman lan ora perlu login.

Kannada (India)
JSON ಎಡಿಟರ್ ಆನ್ಲೈನ್ – ಫಾರ್ಮ್ಯಾಟ್, ವ್ಯಾಲಿಡೇಟ್ ಮತ್ತು ಬ್ಯೂಟಿಫೈ JSON ಉಚಿತ
ಈ ಉಚಿತ ಆನ್ಲೈನ್ JSON ಎಡಿಟರ್ನೊಂದಿಗೆ JSON ಅನ್ನು ತಕ್ಷಣ ಎಡಿಟ್, ಫಾರ್ಮ್ಯಾಟ್ ಮತ್ತು ವ್ಯಾಲಿಡೇಟ್ ಮಾಡಿ. JSON ಅನ್ನು ಬ್ಯೂಟಿಫೈ ಅಥವಾ ಮಿನಿಫೈ ಮಾಡಿ, ದೋಷಗಳನ್ನು ಸರಿಪಡಿಸಿ ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ಸುಲಭವಾಗಿ ನಕಲಿಸಿ. ವೇಗವಾಗಿ, ಸುರಕ್ಷಿತವಾಗಿ ಮತ್ತು ಲಾಗಿನ್ ಅಗತ್ಯವಿಲ್ಲದೆ.

Kazakh (Kazakhstan)
JSON Editor Online – Форматтау, Тексеру және Әдемілеу JSON Тегін
JSON-ды осы тегін онлайн JSON редакторымен лезде өңдеңіз, форматтаңыз және тексеріңіз. JSON-ды әдемілеңіз немесе кішірейтіңіз, қателерді түзетіңіз және нәтижелерді оңай көшіріңіз. Жылдам, қауіпсіз және тіркелусіз.

Khmer (Cambodia)
JSON Editor Online – ធ្វើទ្រង់ទ្រាយ, ផ្ទៀងផ្ទាត់ និង ធ្វើឱ្យ JSON ស្អាត ឥតគិតថ្លៃ
កែសម្រួល, ធ្វើទ្រង់ទ្រាយ និង ផ្ទៀងផ្ទាត់ JSON ភ្លាមៗ ជាមួយនឹង JSON អ្នកកែសម្រួលឥតគិតថ្លៃលើអ៊ីនធឺណិតនេះ។ ធ្វើឱ្យ JSON ស្អាត ឬ បង្រួម ជួសជុលកំហុស និង ចម្លងលទ្ធផលយ៉ាងងាយស្រួល។ លឿន សុវត្ថិភាព និង មិនត្រូវការ ចូលប្រើប្រាស់ទេ។

Korean (South Korea)
JSON Editor Online – JSON 형식 지정, 검증 및 예쁘게 꾸미기 무료
이 무료 온라인 JSON 편집기를 사용하여 JSON을 즉시 편집, 형식 지정 및 검증하세요. JSON을 예쁘게 꾸미거나 축소하고, 오류를 수정하고 결과를 쉽게 복사하세요. 빠르고 안전하며 로그인 필요 없음.

Kurdish (Kurdistan)
JSON Editor Online – Format Bikin, Rast Bikin û Bedew Bikin JSON Belaş
Bi vê edîtorê JSON ya serhêl a belaş re JSON-ê tavilê biguherînin, format bikin û rast bikin. JSON-ê bedew bikin an jî biçûk bikin, xeletiyan rast bikin û encaman bi hêsanî kopî bikin. Zû, ewle û bêyî têketinê.

Kyrgyz (Kyrgyzstan)
JSON Editor Online – Форматтоо, Текшерүү жана Кооздош JSON Бекер
Бул бекер онлайн JSON редактору менен JSONду дароо түзөтүңүз, форматтаңыз жана текшериңіз. JSONду кооздоп же кичирейтиңиз, каталарды оңдоңуз жана натыйжаларды оңой көчүрүңүз. Ыкчам, коопсуз жана каттоо талап кылынбайт.

Lao (Laos)
JSON Editor Online – ຮູບແບບ, ກວດສອບ ແລະ ເຮັດໃຫ້ JSON ງາມ ຟຣີ
ແກ້ໄຂ, ຮູບແບບ ແລະ ກວດສອບ JSON ທັນທີດ້ວຍ JSON editor ອອນລາຍຟຣີນີ້. ເຮັດໃຫ້ງາມ ຫຼື ຫຍໍ້ JSON, ແກ້ຂໍ້ຜິດພາດ ແລະ ຄັດລອກຜົນລັບໄດ້ງ່າຍ. ໄວ, ປອດໄພ ແລະ ບໍ່ຕ້ອງເຂົ້າສູ່ລະບົບ.

Latvian (Latvia)
JSON Editor Online – Formatēt, Validēt un Skaistināt JSON Bezmaksas
Rediģējiet, formatējiet un validējiet JSON uzreiz ar šo bezmaksas tiešsaistes JSON redaktoru. Skaistiniet vai samaziniet JSON, labojiet kļūdas un viegli kopējiet rezultātus. Ātri, droši un bez reģistrācijas.

Lithuanian (Lithuania)
JSON Editor Online – Formatuoti, Tikrinti ir Gražinti JSON Nemokamai
Redaguokite, formatuokite ir tikrinkite JSON akimirksniu naudodami šį nemokamą internetinį JSON redaktorių. Gražinkite arba sumažinkite JSON, ištaisykite klaidas ir lengvai nukopijuokite rezultatus. Greita, saugu ir nereikia prisijungimo.

Luxembourgish (Luxembourg)
JSON Editor Online – Formatéieren, Validéieren & Verschöneren JSON Gratis
Ännert, formatéiert a validéiert JSON direkt mat dësem gratis Online-JSON-Editor. Verschönert oder miniméiert JSON, fixéiert Feeler a kopéiert d’Resultater einfach. Séier, sécher a keng Umeldung néideg.

Macedonian (North Macedonia)
JSON Editor Online – Форматирај, Валидирај и Убави JSON Бесплатно
Уредувај, форматирај и валидирај JSON веднаш со овој бесплатен онлајн JSON уредник. Убави или намали JSON, поправи грешки и копирај резултати лесно. Брзо, безбедно и без најавување.

Malagasy (Madagascar)
JSON Editor Online – Format, Valide & Haingo JSON Maimaimpoana
Ovaina, formatena ary valideo ny JSON avy hatrany amin'ity mpanao JSON an-tserasera maimaimpoana ity. Haingo na ampihenana ny JSON, ahitsy ny hadisoana ary adikao ny valiny mora foana. Haingana, azo antoka ary tsy mila hiditra.

Malay (Malaysia / Indonesia)
JSON Editor Online – Format, Sahkan & Cantikkan JSON Percuma
Edit, format dan sahkan JSON dengan segera menggunakan editor JSON dalam talian percuma ini. Cantikkan atau kecilkan JSON, betulkan ralat dan salin hasil dengan mudah. Pantas, selamat dan tiada login diperlukan.

Malayalam (India)
JSON എഡിറ്റർ ഓൺലൈൻ – ഫോർമാറ്റ്, വാലിഡേറ്റ് & ബ്യൂട്ടിഫൈ JSON ഫ്രീ
ഈ ഫ്രീ ഓൺലൈൻ JSON എഡിറ്റർ ഉപയോഗിച്ച് JSON ഉടൻ എഡിറ്റ് ചെയ്യുക, ഫോർമാറ്റ് ചെയ്യുക, വാലിഡേറ്റ് ചെയ്യുക. JSON ബ്യൂട്ടിഫൈ അല്ലെങ്കിൽ മിനിഫൈ ചെയ്യുക, പിശകുകൾ തിരുത്തുക, ഫലങ്ങൾ എളുപ്പത്തിൽ കോപ്പി ചെയ്യുക. വേഗതയേറിയത്, സുരക്ഷിതം, ലോഗിൻ ആവശ്യമില്ല.

Maltese (Malta)
JSON Editor Online – Ifformatta, Ivvalida u Ssebbaħ JSON B’xejn
Editja, ifformattja u ivvalida JSON istantanjament b’dan l-editur JSON online b’xejn. Ssebbaħ jew imminifika l-JSON, iffissa l-iżbalji u kkopja r-riżultati faċilment. Mgħaġġel, sikur u ebda login meħtieġ.

Maori (New Zealand)
JSON Editor Online – Whakahōputu, Whakamana & Whakapaipai JSON Koreutu
Whakatikahia, whakahōputuhia, whakamanahia hoki te JSON inamata mā tēnei kaiwhakatika JSON ipurangi koreutu. Whakapaipaitia, whakaiti rānei te JSON, whakatikahia ngā hapa, ā, tāruatia ngā hua mā te ngāwari. Tere, haumaru, kāore he take takiuru.

Marathi (India)
JSON एडिटर ऑनलाइन – फॉरमॅट, व्हॅलिडेट आणि ब्युटीफाय JSON मोफत
या मोफत ऑनलाइन JSON एडिटरने JSON त्वरित एडिट, फॉरमॅट आणि व्हॅलिडेट करा. JSON ला ब्युटीफाय किंवा मिनिफाय करा, त्रुटी दुरुस्त करा आणि निकाल सहज कॉपी करा. जलद, सुरक्षित आणि लॉगिनची गरज नाही.

Mongolian (Mongolia)
JSON Editor Online – Форматлах, Баталгаажуулах & Гоё болгох JSON Үнэгүй
Энэ үнэгүй онлайн JSON редактороор JSON-ыг шууд засварлаж, форматлаад баталгаажуулна уу. JSON-ыг гоё болгох эсвэл жижиг болгох, алдааг засаад үр дүнг хялбархан хуулна уу. Хурдан, аюулгүй, нэвтрэх шаардлагагүй.

Navajo (USA)
JSON Editor Online – Format, Validate & Beautify JSON Free
(Navajo digital support is very limited; commonly left in English or used with description)

Nepali (Nepal)
JSON Editor Online – फर्म्याट, वैलिडेट र ब्यूटिफाई JSON नि:शुल्क
यो नि:शुल्क अनलाइन JSON सम्पादकबाट JSON तुरुन्तै सम्पादन, फर्म्याट र वैलिडेट गर्नुहोस्। JSON लाई ब्यूटिफाई वा मिनिफाई गर्नुहोस्, त्रुटिहरू सुधार्नुहोस् र नतिजाहरू सजिलै कपी गर्नुहोस्। छिटो, सुरक्षित र लगइन आवश्यक छैन।

Norwegian (Norway)
JSON Editor Online – Formater, Valider og Forskjønn JSON Gratis
Rediger, formater og valider JSON umiddelbart med denne gratis online JSON-editoren. Forskjønn eller minifiser JSON, rett feil og kopier resultater enkelt. Raskt, sikkert og ingen innlogging nødvendig.

Oromo (Ethiopia)
JSON Editor Online – Gulaali, Mirkaneessi & Miidhagsi JSON Bilisa
Gulaali, gulaali fi mirkaneessi JSON saffisaan kunoo editor JSON online bilisaa kana fayyadamuun. Miidhagsi yookaan xiqqeessi JSON, dogoggora sirreessi fi bu’aa salphaatti garagalchi. Saffisaan, nagaa fi galmaa’uu hin barbaachisu.

Pashto (Afghanistan / Pakistan)
JSON Editor Online – فارمیټ، تصدیق او ښکلا JSON وړیا
د دې وړیا آنلاین JSON ایډیټر سره JSON سمدستي ایډیټ، فارمیټ او تصدیق کړئ. JSON ښکلی یا کوچنی کړئ، غلطۍ سمې کړئ او پایلې په اسانۍ سره کاپي کړئ. چټک، خوندي او هیڅ لاګ ان ته اړتیا نشته.

Persian (Iran)
ویرایشگر JSON آنلاین – فرمت، اعتبارسنجی و زیباسازی JSON رایگان
با این ویرایشگر JSON آنلاین رایگان، JSON را فوراً ویرایش، فرمت و اعتبارسنجی کنید. JSON را زیبا یا کوچک کنید، خطاها را برطرف کنید و نتایج را به راحتی کپی کنید. سریع، امن و بدون نیاز به ورود.

Polish (Poland)
JSON Editor Online – Formatuj, Waliduj i Upiększ JSON Za Darmo
Edytuj, formatuj i waliduj JSON natychmiast za pomocą tego darmowego edytora JSON online. Upiększ lub zminifikuj JSON, napraw błędy i łatwo kopiuj wyniki. Szybko, bezpiecznie i bez logowania.

Portuguese (Portugal / Brazil)
JSON Editor Online – Formatar, Validar e Embelezar JSON Grátis
Edite, formate e valide JSON instantaneamente com este editor JSON online gratuito. Embeleze ou minifique o JSON, corrija erros e copia os resultados facilmente. Rápido, seguro e sem necessidade de login.

Quechua (Peru / Bolivia)
JSON Editor Online – Formato, Validar y Embellecer JSON Gratis
Ruway, formato y validar JSON utqaylla kay free online JSON editorwan. Embellece o minify JSON, allichay pantasqakunata y copiar resultado facil. Utqay, seguro y mana login munanchu.

Romanian (Romania)
JSON Editor Online – Formatează, Validează și Înfrumusețează JSON Gratuit
Editează, formatează și validează JSON instant cu acest editor JSON online gratuit. Înfrumusețează sau micșorează JSON, repară erorile și copiază rezultatele ușor. Rapid, securizat și fără login necesar.

Russian (Russia)
JSON Editor Online – Форматировать, Проверять и Улучшать JSON Бесплатно
Редактируйте, форматируйте и проверяйте JSON мгновенно с помощью этого бесплатного онлайн-редактора JSON. Улучшайте или минимизируйте JSON, исправляйте ошибки и легко копируйте результаты. Быстро, безопасно и без регистрации.

Samoan (Samoa)
JSON Editor Online – Fa'afōma'i, Fa'amaonia & Fa'alelei JSON Saoloto
Fa'asa'o, fa'afōma'i ma fa'amaonia JSON vave ma le fa'aaogāina o lenei fa'atonu JSON i luga ole laiga e leai se totogi. Fa'alelei pe fa'aitiiti JSON, fa'asa'o mea sese ma kopi fa'ai'uga faigofie. Vave, saogalemu ma leai se login e mana'omia.

Serbian (Serbia)
JSON Editor Online – Formatiraj, Validiraj i Ulepšaj JSON Besplatno
Uredi, formatiraj i validiraj JSON odmah ovim besplatnim online JSON editorom. Ulepšaj ili smanji JSON, ispravi greške i lako kopiraj rezultate. Brzo, bezbedno i bez prijave.

Shona (Zimbabwe)
JSON Editor Online – Format, Validate & Runyatsa JSON Mahara
Rongedza, format uye validate JSON ipapo neiyi free online JSON editor. Runyatsa kana deredza JSON, gadzirisa zvikanganiso uye kopa mhedzisiro zviri nyore. Nokukurumidza, zvakachengeteka uye hapana login inodiwa.

Sinhala (Sri Lanka)
JSON Editor Online – හැඩිලි කරන්න, වලංගු කරන්න සහ සුන්දර කරන්න JSON නොමිලේ
මෙම නොමිලේ මාර්ගගත JSON සංස්කාරකය සමඟ JSON ක්ෂණිකව සංස්කරණය කරන්න, හැඩිලි කරන්න සහ වලංගු කරන්න. JSON සුන්දර කරන්න හෝ කුඩා කරන්න, දෝෂ නිවැරදි කරන්න සහ ප්රතිඵල පහසුවෙන් පිටපත් කරන්න. ඉක්මන්, ආරක්ෂිත සහ පිවිසුමක් අවශ්ය නැත.

Slovak (Slovakia)
JSON Editor Online – Formátovať, Overiť a Skrášliť JSON Zadarmo
Upravujte, formátujte a overujte JSON okamžite pomocou tohto bezplatného online JSON editora. Skrášlite alebo minimalizujte JSON, opravte chyby a jednoducho kopírujte výsledky. Rýchlo, bezpečne a bez prihlásenia.

Slovenian (Slovenia)
JSON Editor Online – Oblikuj, Preveri in Polepšaj JSON Brezplačno
Uredi, oblikuj in preveri JSON takoj s tem brezplačnim spletnim urejevalnikom JSON. Polepšaj ali pomanjšaj JSON, popravi napake in enostavno kopiraj rezultate. Hitro, varno in brez prijave.

Somali (Somalia)
JSON Editor Online – Habee, Xaqiiji & Qurxi JSON Bilaash
Tafatir, habee oo xaqiiji JSON isla markiiba adoo isticmaalaya tifaftirahan JSON ee bilaashka ah ee khadka tooska ah. Qurxi ama yaree JSON, sax khaladaadka oo nuqul ka samee natiijooyinka si fudud. Degdeg ah, ammaan ah oo aan loo baahnayn gelitaan.

Spanish (Spain / Latin America)
JSON Editor Online – Formatear, Validar y Embellecer JSON Gratis
Edita, formatea y valida JSON al instante con este editor JSON online gratuito. Embellece o minimiza el JSON, corrige errores y copia los resultados fácilmente. Rápido, seguro y sin necesidad de iniciar sesión.

Sundanese (Indonesia)
JSON Editor Online – Format, Validasi & Ngageuliskeun JSON Gratis
Édit, format jeung validasi JSON sacara instan maké éditor JSON online gratis ieu. Ngageuliskeun atawa ngaleutikeun JSON, benerkeun kasalahan jeung salin hasilna gampang. Gancang, aman jeung teu perlu login.

Swahili (Kenya / Tanzania)
JSON Editor Online – Tengeneza, Thibitisha na Pamba JSON Bure
Hariri, tengeneza na thibitisha JSON papo hapo kwa kutumia mhariri huu wa JSON mtandaoni bure. Pamba au punguza JSON, sahihisha makosa na nakili matokeo kwa urahisi. Haraka, salama na hakuna haja ya kuingia.

Swedish (Sweden)
JSON Editor Online – Formatera, Validera och Försköna JSON Gratis
Redigera, formatera och validera JSON direkt med denna gratis online JSON-redigerare. Försköna eller minimera JSON, åtgärda fel och kopiera resultat enkelt. Snabbt, säkert och ingen inloggning krävs.

Tagalog (Philippines)
JSON Editor Online – I-format, I-validate at I-beautify ang JSON Libre
I-edit, i-format at i-validate ang JSON agad gamit ang libreng online JSON editor na ito. I-beautify o i-minify ang JSON, ayusin ang mga error at kopyahin ang mga resulta nang madali. Mabilis, ligtas at walang kailangang login.

Tajik (Tajikistan)
Муҳаррири JSON Онлайн – Формат кардан, Тасдиқ кардан ва Зебо кардани JSON Ройгон
JSON-ро фавран таҳрир кунед, формат кунед ва тасдиқ кунед бо ин муҳаррири JSON ройгони онлайн. JSON-ро зебо ё хурд кунед, хатоҳоро ислоҳ кунед ва натиҷаҳоро осон нусхабардорӣ кунед. Тез, бехатар ва бе воридшавӣ.

Tamil (India / Sri Lanka)
JSON Editor Online – வடிவமைக்கவும், சரிபார்க்கவும் & அழகுபடுத்தவும் JSON இலவசம்
இந்த இலவச ஆன்லைன் JSON எடிட்டருடன் JSON ஐ உடனடியாக திருத்தவும், வடிவமைக்கவும், சரிபார்க்கவும். JSON ஐ அழகுபடுத்தவும் அல்லது சுருக்கவும், பிழைகளை சரிசெய்யவும், முடிவுகளை எளிதாக நகலெடுக்கவும். வேகமானது, பாதுகாப்பானது மற்றும் உள்நுழைவு தேவையில்லை.

Telugu (India)
JSON Editor Online – ఫార్మాట్, వాలిడేట్ & బ్యూటిఫై JSON ఉచితం
ఈ ఉచిత ఆన్లైన్ JSON ఎడిటర్తో JSONని తక్షణం ఎడిట్ చేయండి, ఫార్మాట్ చేయండి మరియు వాలిడేట్ చేయండి. JSONని బ్యూటిఫై లేదా మినిఫై చేయండి, లోపాలను సరిచేయండి మరియు ఫలితాలను సులభంగా కాపీ చేయండి. వేగవంతం, సురక్షితం మరియు లాగిన్ అవసరం లేదు.

Thai (Thailand)
JSON Editor Online – จัดรูปแบบ, ตรวจสอบ และทำให้ JSON สวยงาม ฟรี
แก้ไข จัดรูปแบบ และตรวจสอบ JSON ทันทีด้วย JSON editor ออนไลน์ฟรีนี้ ทำให้ JSON สวยงามหรือย่อขนาด แก้ไขข้อผิดพลาด และคัดลอกผลลัพธ์ได้ง่าย รวดเร็ว ปลอดภัย และไม่ต้องเข้าสู่ระบบ

Tigrinya (Eritrea / Ethiopia)
JSON Editor Online – ምትክት፣ ኣረጋግጽን ጽቡቕ ግበርን JSON ናጻ
ብዛዕባ እዚ ናጻ ኦንላይን JSON ኤዲተር ብቅጽበት ኣርትዕ፣ ምትክት ኣብዕልን ኣረጋግጽን። JSON ጽቡቕ ግበር ወይ ኣጽምት፣ ጌጋታት ኣትክልን ውጽኢት ቀሊል ቅዳ። ፈጣን፣ ደህናን ናይ ምእታው ዘይድሊን።

Tongan (Tonga)
JSON Editor Online – Fokotu‘u, Fakamo‘oni‘i & Faka‘ofo‘ofa JSON Ta‘e totongi
Fokotu‘u, fokotu‘u mo fakamo‘oni‘i JSON vave ‘i he faka‘aonga ‘a e JSON editor ‘i he laine ta‘e totongi ko ‘eni. Faka‘ofo‘ofa pe fakasi‘isi‘i JSON, fakatonu e hala mo fokotu‘u e ola ‘oku fakamole. Vave, malu mo ‘ikai ke fie faka‘aonga.

Turkish (Turkey)
JSON Editor Online – Biçimlendir, Doğrula ve Güzelleştir JSON Ücretsiz
Bu ücretsiz online JSON editörü ile JSON’u anında düzenleyin, biçimlendirin ve doğrulayın. JSON’u güzelleştirin veya küçültün, hataları düzeltin ve sonuçları kolayca kopyalayın. Hızlı, güvenli ve giriş gerektirmez.

Turkmen (Turkmenistan)
JSON Editor Online – Formatla, Tassykl a we Gözelleştir JSON Mugt
Bu mugt onlaýn JSON redaktory bilen JSON-y derrew redaktirle, formatla we tassykl a. JSON-y gözelleştir ýa-da kiçelt, ýalňyşlyklary düzed we netijeleri aňsatlyk bilen göçür. Çalt, howpsuz we girýän ýok.

Ukrainian (Ukraine)
JSON Editor Online – Форматувати, Валідувати та Прикрасити JSON Безкоштовно
Редагуйте, форматуйте та валідуйте JSON миттєво за допомогою цього безкоштовного онлайн-редактора JSON. Прикрасьте або зменште JSON, виправте помилки та легко копіюйте результати. Швидко, безпечно і без реєстрації.

Urdu (Pakistan / India)
JSON Editor Online – فارمیٹ، ویلیڈیٹ اور بیوٹیفائی JSON مفت
اس مفت آن لائن JSON ایڈیٹر سے فوری طور پر JSON ایڈٹ، فارمیٹ اور ویلیڈیٹ کریں۔ JSON کو بیوٹیفائی یا منیفائی کریں، غلطیاں درست کریں اور نتائج آسانی سے کاپی کریں۔ تیز، محفوظ اور لاگ ان کی ضرورت نہیں۔

Uzbek (Uzbekistan)
JSON Editor Online – Formatlash, Tasdiqlash va Chiroyli Qilish JSON Bepul
Bu bepul onlayn JSON muharriri yordamida JSON ni darhol tahrirlash, formatlash va tasdiqlash. JSON ni chiroyli qiling yoki kichraytiring, xatolarni tuzating va natijalarni osongina nusxa oling. Tez, xavfsiz va kirish shart emas.

Vietnamese (Vietnam)
JSON Editor Online – Định dạng, Xác thực & Làm đẹp JSON Miễn phí
Chỉnh sửa, định dạng và xác thực JSON ngay lập tức với trình chỉnh sửa JSON trực tuyến miễn phí này. Làm đẹp hoặc rút gọn JSON, sửa lỗi và sao chép kết quả dễ dàng. Nhanh chóng, an toàn và không cần đăng nhập.

Welsh (Wales)
JSON Editor Online – Fformatio, Dilysu a Harddu JSON Am Ddim
Golygu, fformatio a dilysu JSON yn syth gyda’r golygydd JSON ar-lein am ddim hwn. Harddwch neu leihau JSON, trwsiwch wallau a chopïwch ganlyniadau’n hawdd. Cyflym, diogel a dim angen mewngofnodi.

Xhosa (South Africa)
JSON Editor Online – Fomatha, Qinisekisa & Lungisa JSON Mahala
Hlela, fomatha kwaye qinisekise i-JSON kwangoko ngalo mhleli we-JSON wase-intanethi wasimahla. Lungisa okanye yenza i-JSON ibe ncinci, lungisa iimpazamo kwaye ukope iziphumo ngokulula. Ngokukhawuleza, kukhuselekile kwaye akukho login ifunwayo.

Yoruba (Nigeria)
JSON Editor Online – Ṣe Format, Ṣe Validate & Ṣe Ẹwa JSON Ọfẹ
Ṣatunkọ, ṣe format àti ṣe validate JSON lẹsẹkẹsẹ pẹlu ẹrọ ayẹwo JSON lori ayelujara ọfẹ yii. Ṣe ẹwa tabi dín JSON kù, ṣe àtúnṣe àṣìṣe àti ṣe ẹda àwọn èsì ní rọrùn. Yára, ààbò àti kò sí ìwọlé tó nílò.

Zulu (South Africa)
JSON Editor Online – Fomatha, Qinisekisa & Lungisa JSON Mahhala
Hlela, fomatha futhi qinisekise i-JSON ngokushesha ngalo mhleli we-JSON wase-inthanethi wamahhala. Lungisa noma yenza i-JSON ibe ncane, lungisa amaphutha futhi ukopishe imiphumela kalula. Ngokushesha, iphephile futhi akukho ukungena okudingekayo.\`;

const lines = input.trim().split('\\n').map(l => l.trim()).filter(l => l);

const results = {};
for (let i = 0; i < lines.length; i += 3) {
  const langLine = lines[i];
  if (!langLine) break;

  const title = lines[i + 1];
  const desc = lines[i + 2];
  
  if (!title || !desc) {
    console.error("Missing title/desc for", langLine);
    continue;
  }
  
  // Extract language name e.g., "Afrikaans (South Africa)" -> "Afrikaans"
  const langMatch = langLine.match(/^([A-Za-z]+(?:\s[A-Za-z]+)*)/);
  if (langMatch) {
    let lang = langMatch[1].trim();
    if (lang === "Chinese") lang = "Chinese"; // Handle Simplified implicitly etc
    let code = LANGUAGE_TO_LOCALE[lang];
    if (code) {
      results[code] = { title, description: desc };
    } else {
      console.error("No code for", lang);
    }
  }
}

let codeStr = \`export const jsonEditorSeo: Record<string, { title: string; description: string }> = {\n\`;
for (const [code, val] of Object.entries(results)) {
  codeStr += \`  "\${code}": {\n\`;
  codeStr += \`    title: \${JSON.stringify(val.title)},\n\`;
  codeStr += \`    description: \${JSON.stringify(val.description)},\n\`;
  codeStr += \`  },\n\`;
}
codeStr += \`};\n\`;

const fullFile = \`import { writingToolsMeta } from "@/lib/writing-tools-registry";

\${codeStr}

const baseMeta = writingToolsMeta["json-editor"];

export function jsonEditorHeadlineFromTitle(
  title: string,
  fallback: string
): string {
  for (const sep of [" – ", " - "] as const) {
    const i = title.indexOf(sep);
    if (i > 0) return title.slice(0, i).trim();
  }
  return title.length <= 96 ? title.trim() : fallback;
}

export function getJsonEditorSeo(locale: string): {
  title: string;
  description: string;
} {
  const pack = jsonEditorSeo[locale];
  if (pack) return pack;
  return { title: baseMeta.title, description: baseMeta.description };
}

export function getJsonEditorHero(locale: string): {
  h1: string;
  description: string;
} {
  const { title, description } = getJsonEditorSeo(locale);
  return {
    h1: jsonEditorHeadlineFromTitle(title, baseMeta.h1),
    description,
  };
}
\`;

fs.writeFileSync(path.join(__dirname, 'src/lib/seo/json-editor-seo.ts'), fullFile);
