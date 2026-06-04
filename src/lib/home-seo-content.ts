/** Homepage "What is…" / "Why notepad.is?" copy, per locale */

export type HomeSeoCopy = {
  whatTitle: string;
  whatParagraphs: [string, string];
  whyTitle: string;
  whyIntro: string;
};

const en: HomeSeoCopy = {
  whatTitle: "What Is An Online Notepad?",
  whatParagraphs: [
    "An online notepad is a free, browser-based text editor that lets you write, edit, and save notes instantly. No account, no download, no setup required. Unlike traditional desktop apps like Windows Notepad or Apple Notes, it works on any device: phone, tablet, laptop, or work computer.",
    "Whether you need to jot down a quick idea, draft an email, paste text, or use it as a scratch pad, it gives you a clean, distraction-free writing space. Everything stays in your browser until you copy or save it.",
  ],
  whyTitle: "Why Use notepad.is?",
  whyIntro:
    "Works on Chrome, Firefox, Safari, and Edge. No ads. No limits. No signup needed.",
};

const byLocale: Record<string, HomeSeoCopy> = {
  en,
  zh: {
    whatTitle: "什么是在线记事本？",
    whatParagraphs: [
      "在线记事本是一种免费的网页文本编辑器，可以让你随时写作、编辑和保存内容。无需注册、无需下载，也不用安装。和电脑上的记事本不同，它可以在手机、平板或电脑上直接使用。",
      "无论是记录想法、写邮件、粘贴文字，还是临时记笔记，它都提供一个干净无干扰的写作空间。内容会保存在浏览器中，直到你复制或保存。",
    ],
    whyTitle: "为什么选择 notepad.is？",
    whyIntro: "支持 Chrome、Firefox、Safari 和 Edge。无广告、无限制、无需注册。",
  },
  es: {
    whatTitle: "¿Qué es un bloc de notas online?",
    whatParagraphs: [
      "Un bloc de notas online es un editor de texto gratuito que funciona en tu navegador. Puedes escribir, editar y guardar notas al instante sin registrarte ni descargar nada. Funciona en móvil, tablet o computadora.",
      "Es ideal para escribir ideas rápidas, correos o pegar texto. Todo se guarda en tu navegador hasta que lo copies o guardes.",
    ],
    whyTitle: "¿Por qué usar notepad.is?",
    whyIntro:
      "Funciona en todos los navegadores. Sin anuncios. Sin límites. Sin registro.",
  },
  ar: {
    whatTitle: "ما هو المفكرة أونلاين؟",
    whatParagraphs: [
      "المفكرة أونلاين هي محرر نصوص مجاني يعمل داخل المتصفح. يمكنك الكتابة والتعديل وحفظ الملاحظات بسهولة بدون تسجيل أو تحميل. تعمل على الهاتف أو الكمبيوتر.",
      "مناسبة لكتابة الأفكار أو الرسائل أو حفظ النصوص بسرعة. كل شيء يبقى في المتصفح حتى تحفظه.",
    ],
    whyTitle: "لماذا تستخدم notepad.is؟",
    whyIntro:
      "يعمل على جميع المتصفحات. بدون إعلانات. بدون حدود. بدون تسجيل.",
  },
  id: {
    whatTitle: "Apa itu Notepad Online?",
    whatParagraphs: [
      "Notepad online adalah editor teks gratis yang bisa digunakan langsung di browser. Kamu bisa menulis, mengedit, dan menyimpan catatan tanpa login atau download. Bisa dipakai di HP, tablet, atau laptop.",
      "Cocok untuk catatan cepat, draft email, atau copy-paste teks. Semua tersimpan di browser sampai kamu simpan.",
    ],
    whyTitle: "Kenapa pakai notepad.is?",
    whyIntro: "Bisa di semua browser. Tanpa iklan. Tanpa batas. Tanpa akun.",
  },
  pt: {
    whatTitle: "O que é um bloco de notas online?",
    whatParagraphs: [
      "É um editor de texto grátis que funciona direto no navegador. Você pode escrever, editar e salvar notas sem cadastro ou download. Funciona em qualquer dispositivo.",
      "Perfeito para anotar ideias, escrever textos rápidos ou colar conteúdo. Tudo fica salvo no navegador.",
    ],
    whyTitle: "Por que usar o notepad.is?",
    whyIntro:
      "Funciona em todos os navegadores. Sem anúncios. Sem limites. Sem login.",
  },
  fr: {
    whatTitle: "Qu’est-ce qu’un bloc-notes en ligne ?",
    whatParagraphs: [
      "C’est un éditeur de texte gratuit qui fonctionne dans votre navigateur. Vous pouvez écrire, modifier et enregistrer vos notes sans inscription ni téléchargement.",
      "Parfait pour prendre des notes rapides ou écrire du texte. Tout reste dans votre navigateur.",
    ],
    whyTitle: "Pourquoi utiliser notepad.is ?",
    whyIntro:
      "Compatible avec tous les navigateurs. Sans publicité. Sans limites. Sans compte.",
  },
  ja: {
    whatTitle: "オンラインメモ帳とは？",
    whatParagraphs: [
      "オンラインメモ帳はブラウザで使える無料のテキストエディタです。登録やダウンロードなしで、すぐに書いて保存できます。スマホやパソコンで使えます。",
      "メモやメール作成、テキスト保存に便利です。内容はブラウザに保存されます。",
    ],
    whyTitle: "notepad.is を使う理由",
    whyIntro: "すべてのブラウザで使える。広告なし。制限なし。登録不要。",
  },
  ru: {
    whatTitle: "Что такое онлайн блокнот?",
    whatParagraphs: [
      "Это бесплатный текстовый редактор в браузере. Можно писать, редактировать и сохранять заметки без регистрации и скачивания. Работает на любом устройстве.",
      "Отлично подходит для быстрых заметок и текста. Всё сохраняется в браузере.",
    ],
    whyTitle: "Почему notepad.is?",
    whyIntro: "Работает везде. Без рекламы. Без ограничений. Без регистрации.",
  },
  de: {
    whatTitle: "Was ist ein Online-Notizblock?",
    whatParagraphs: [
      "Ein Online-Notizblock ist ein kostenloser Texteditor im Browser. Du kannst sofort schreiben, bearbeiten und speichern – ohne Anmeldung oder Download.",
      "Perfekt für schnelle Notizen oder Texte. Alles bleibt im Browser gespeichert.",
    ],
    whyTitle: "Warum notepad.is nutzen?",
    whyIntro: "Funktioniert überall. Keine Werbung. Keine Limits. Kein Login.",
  },
  hi: {
    whatTitle: "ऑनलाइन नोटपैड क्या है?",
    whatParagraphs: [
      "ऑनलाइन नोटपैड एक फ्री टेक्स्ट एडिटर है जो ब्राउज़र में चलता है। इसमें आप बिना डाउनलोड या लॉगिन के नोट लिख, एडिट और सेव कर सकते हैं।",
      "यह जल्दी नोट्स लिखने या टेक्स्ट सेव करने के लिए बेस्ट है।",
    ],
    whyTitle: "notepad.is क्यों इस्तेमाल करें?",
    whyIntro:
      "सभी ब्राउज़र में काम करता है। बिना ऐड। बिना लिमिट। बिना अकाउंट।",
  },
  bn: {
    whatTitle: "অনলাইন নোটপ্যাড কী?",
    whatParagraphs: [
      "অনলাইন নোটপ্যাড একটি ফ্রি টেক্সট এডিটর যা ব্রাউজারে কাজ করে। আপনি সহজেই নোট লিখতে, এডিট করতে এবং সেভ করতে পারেন।",
      "দ্রুত নোট নেওয়ার জন্য খুবই সহজ একটি টুল।",
    ],
    whyTitle: "কেন notepad.is ব্যবহার করবেন?",
    whyIntro:
      "সব ব্রাউজারে কাজ করে। কোনো বিজ্ঞাপন নেই। কোনো সীমা নেই।",
  },
  ur: {
    whatTitle: "آن لائن نوٹ پیڈ کیا ہے؟",
    whatParagraphs: [
      "آن لائن نوٹ پیڈ ایک مفت ٹیکسٹ ایڈیٹر ہے جو براوزر میں کام کرتا ہے۔ آپ بغیر ڈاؤن لوڈ یا لاگ ان کے نوٹس لکھ سکتے ہیں۔",
      "یہ فوری نوٹس اور ٹیکسٹ کے لیے بہترین ہے۔",
    ],
    whyTitle: "notepad.is کیوں استعمال کریں؟",
    whyIntro:
      "تمام براوزرز میں کام کرتا ہے۔ کوئی اشتہار نہیں۔ کوئی حد نہیں۔",
  },
  tr: {
    whatTitle: "Online Not Defteri nedir?",
    whatParagraphs: [
      "Online not defteri, tarayıcıda çalışan ücretsiz bir metin editörüdür. İndirme veya üyelik olmadan yazabilir ve kaydedebilirsiniz.",
      "Hızlı not almak için idealdir.",
    ],
    whyTitle: "Neden notepad.is?",
    whyIntro: "Tüm tarayıcılarda çalışır. Reklam yok. Sınır yok.",
  },
  ko: {
    whatTitle: "온라인 메모장이란?",
    whatParagraphs: [
      "온라인 메모장은 브라우저에서 사용하는 무료 텍스트 편집기입니다. 다운로드 없이 바로 사용할 수 있습니다.",
      "간단한 메모 작성에 좋습니다.",
    ],
    whyTitle: "왜 notepad.is?",
    whyIntro: "광고 없음. 제한 없음. 모든 브라우저 지원.",
  },
  vi: {
    whatTitle: "Notepad Online là gì?",
    whatParagraphs: [
      "Đây là trình soạn thảo văn bản miễn phí chạy trên trình duyệt. Bạn có thể viết và lưu ghi chú ngay lập tức.",
      "Phù hợp để ghi chú nhanh.",
    ],
    whyTitle: "Tại sao dùng notepad.is?",
    whyIntro:
      "Không quảng cáo. Không giới hạn. Dùng trên mọi trình duyệt.",
  },
  it: {
    whatTitle: "Cos’è un notepad online?",
    whatParagraphs: [
      "È un editor di testo gratuito che funziona nel browser. Puoi scrivere e salvare note senza registrarti.",
      "Perfetto per appunti veloci.",
    ],
    whyTitle: "Perché usare notepad.is?",
    whyIntro:
      "Nessuna pubblicità. Nessun limite. Nessun account.",
  },
  fa: {
    whatTitle: "نوت‌پد آنلاین چیست؟",
    whatParagraphs: [
      "نوت‌پد آنلاین یک ویرایشگر متن رایگان در مرورگر است. می‌توانید بدون ثبت‌نام متن بنویسید و ذخیره کنید.",
      "برای یادداشت‌های سریع عالی است.",
    ],
    whyTitle: "چرا notepad.is؟",
    whyIntro: "بدون تبلیغ. بدون محدودیت. بدون ثبت‌نام.",
  },
  th: {
    whatTitle: "โน้ตแพดออนไลน์คืออะไร?",
    whatParagraphs: [
      "โน้ตแพดออนไลน์คือโปรแกรมเขียนข้อความฟรีในเบราว์เซอร์ ใช้งานได้ทันทีโดยไม่ต้องติดตั้ง",
      "เหมาะสำหรับจดโน้ตเร็วๆ",
    ],
    whyTitle: "ทำไมต้อง notepad.is?",
    whyIntro: "ไม่มีโฆษณา ไม่มีข้อจำกัด ใช้ได้ทุกเบราว์เซอร์",
  },
  pl: {
    whatTitle: "Co to jest notatnik online?",
    whatParagraphs: [
      "To darmowy edytor tekstu działający w przeglądarce. Możesz pisać i zapisywać notatki bez rejestracji.",
      "Idealny do szybkich notatek.",
    ],
    whyTitle: "Dlaczego notepad.is?",
    whyIntro: "Brak reklam. Brak limitów. Bez konta.",
  },
  nl: {
    whatTitle: "Wat is een online notitieblok?",
    whatParagraphs: [
      "Een online notitieblok is een gratis teksteditor in je browser. Je kunt direct schrijven, bewerken en opslaan zonder account of download.",
      "Ideaal voor snelle notities of tekst. Alles blijft in je browser.",
    ],
    whyTitle: "Waarom notepad.is gebruiken?",
    whyIntro: "Werkt in alle browsers. Geen advertenties. Geen limieten.",
  },
  sv: {
    whatTitle: "Vad är ett online anteckningsblock?",
    whatParagraphs: [
      "Ett online anteckningsblock är en gratis texteditor i webbläsaren. Du kan skriva och spara direkt utan att installera något.",
      "Perfekt för snabba anteckningar.",
    ],
    whyTitle: "Varför använda notepad.is?",
    whyIntro: "Fungerar i alla webbläsare. Inga annonser. Inga begränsningar.",
  },
  el: {
    whatTitle: "Τι είναι ένα online σημειωματάριο;",
    whatParagraphs: [
      "Είναι ένας δωρεάν επεξεργαστής κειμένου στο πρόγραμμα περιήγησης. Μπορείτε να γράψετε και να αποθηκεύσετε σημειώσεις εύκολα.",
      "Ιδανικό για γρήγορες σημειώσεις.",
    ],
    whyTitle: "Γιατί να χρησιμοποιήσετε το notepad.is;",
    whyIntro: "Χωρίς διαφημίσεις. Χωρίς περιορισμούς.",
  },
  cs: {
    whatTitle: "Co je online poznámkový blok?",
    whatParagraphs: [
      "Je to bezplatný textový editor v prohlížeči. Můžete psát a ukládat poznámky bez instalace.",
      "Skvělé pro rychlé poznámky.",
    ],
    whyTitle: "Proč používat notepad.is?",
    whyIntro: "Bez reklam. Bez omezení.",
  },
  ro: {
    whatTitle: "Ce este un notepad online?",
    whatParagraphs: [
      "Este un editor de text gratuit care funcționează în browser. Poți scrie și salva note fără cont.",
      "Perfect pentru notițe rapide.",
    ],
    whyTitle: "De ce notepad.is?",
    whyIntro: "Fără reclame. Fără limite.",
  },
  hu: {
    whatTitle: "Mi az online jegyzettömb?",
    whatParagraphs: [
      "Egy ingyenes szövegszerkesztő a böngészőben. Írhatsz és menthetsz jegyzeteket egyszerűen.",
      "Jó gyors jegyzetekhez.",
    ],
    whyTitle: "Miért notepad.is?",
    whyIntro: "Nincs reklám. Nincs korlát.",
  },
  he: {
    whatTitle: "מה זה פנקס רשימות אונליין?",
    whatParagraphs: [
      "זה עורך טקסט חינמי בדפדפן. אפשר לכתוב ולשמור בלי הרשמה.",
      "מעולה לרשימות מהירות.",
    ],
    whyTitle: "למה notepad.is?",
    whyIntro: "בלי פרסומות. בלי הגבלות.",
  },
  da: {
    whatTitle: "Hvad er en online notesblok?",
    whatParagraphs: [
      "Det er en gratis teksteditor i browseren. Du kan skrive og gemme noter med det samme.",
      "God til hurtige noter.",
    ],
    whyTitle: "Hvorfor bruge notepad.is?",
    whyIntro: "Ingen reklamer. Ingen begrænsninger.",
  },
  fi: {
    whatTitle: "Mikä on online muistio?",
    whatParagraphs: [
      "Se on ilmainen tekstieditori selaimessa. Voit kirjoittaa ja tallentaa muistiinpanoja helposti.",
      "Hyvä nopeisiin muistiinpanoihin.",
    ],
    whyTitle: "Miksi notepad.is?",
    whyIntro: "Ei mainoksia. Ei rajoituksia.",
  },
  no: {
    whatTitle: "Hva er en online notatblokk?",
    whatParagraphs: [
      "Det er en gratis teksteditor i nettleseren. Du kan skrive og lagre notater raskt.",
      "Perfekt for raske notater.",
    ],
    whyTitle: "Hvorfor bruke notepad.is?",
    whyIntro: "Ingen reklame. Ingen begrensninger.",
  },
  sk: {
    whatTitle: "Čo je online poznámkový blok?",
    whatParagraphs: [
      "Je to bezplatný textový editor v prehliadači. Môžete písať a ukladať poznámky jednoducho.",
      "Ideálne pre rýchle poznámky.",
    ],
    whyTitle: "Prečo notepad.is?",
    whyIntro: "Bez reklám. Bez limitov.",
  },
  bg: {
    whatTitle: "Какво е онлайн бележник?",
    whatParagraphs: [
      "Това е безплатен текстов редактор в браузъра. Можете лесно да пишете и запазвате бележки.",
      "Подходящ за бързи записки.",
    ],
    whyTitle: "Защо notepad.is?",
    whyIntro: "Без реклами. Без ограничения.",
  },
  hr: {
    whatTitle: "Što je online bilježnica?",
    whatParagraphs: [
      "To je besplatan uređivač teksta u pregledniku. Možete pisati i spremati bilješke odmah.",
      "Odlično za brze bilješke.",
    ],
    whyTitle: "Zašto notepad.is?",
    whyIntro: "Bez oglasa. Bez ograničenja.",
  },
  sr: {
    whatTitle: "Šta je online beležnica?",
    whatParagraphs: [
      "To je besplatan tekst editor u browseru. Možete pisati i čuvati beleške lako.",
      "Dobro za brze beleške.",
    ],
    whyTitle: "Zašto notepad.is?",
    whyIntro: "Bez reklama. Bez ograničenja.",
  },
  uk: {
    whatTitle: "Що таке онлайн блокнот?",
    whatParagraphs: [
      "Це безкоштовний текстовий редактор у браузері. Ви можете писати та зберігати нотатки.",
      "Ідеально для швидких записів.",
    ],
    whyTitle: "Чому notepad.is?",
    whyIntro: "Без реклами. Без обмежень.",
  },
  ta: {
    whatTitle: "ஆன்லைன் நோட்பேட் என்றால் என்ன?",
    whatParagraphs: [
      "இது ஒரு இலவச உரை தொகுப்பி, இது உலாவியில் வேலை செய்கிறது. நீங்கள் எளிதாக குறிப்புகளை எழுதலாம்.",
      "விரைவான குறிப்புகளுக்கு சிறந்தது.",
    ],
    whyTitle: "ஏன் notepad.is?",
    whyIntro: "விளம்பரங்கள் இல்லை. வரம்புகள் இல்லை.",
  },
  te: {
    whatTitle: "ఆన్‌లైన్ నోట్‌ప్యాడ్ అంటే ఏమిటి?",
    whatParagraphs: [
      "ఇది బ్రౌజర్‌లో పనిచేసే ఉచిత టెక్స్ట్ ఎడిటర్. మీరు సులభంగా నోట్స్ రాయవచ్చు.",
      "త్వరిత నోట్స్‌కు బాగా ఉపయోగపడుతుంది.",
    ],
    whyTitle: "ఎందుకు notepad.is?",
    whyIntro: "ప్రకటనలు లేవు. పరిమితులు లేవు.",
  },
  mr: {
    whatTitle: "ऑनलाइन नोटपॅड म्हणजे काय?",
    whatParagraphs: [
      "हे एक मोफत टेक्स्ट एडिटर आहे जे ब्राउझरमध्ये चालते. तुम्ही सहज नोट्स लिहू शकता.",
      "जलद नोट्ससाठी उत्तम.",
    ],
    whyTitle: "का notepad.is?",
    whyIntro: "जाहिराती नाहीत. मर्यादा नाहीत.",
  },
  gu: {
    whatTitle: "ઓનલાઇન નોટપેડ શું છે?",
    whatParagraphs: [
      "આ એક મફત ટેક્સ્ટ એડિટર છે જે બ્રાઉઝરમાં ચાલે છે. તમે સરળતાથી નોંધો લખી શકો છો.",
      "ઝડપી નોંધો માટે સારું.",
    ],
    whyTitle: "શા માટે notepad.is?",
    whyIntro: "જાહેરાત નથી. મર્યાદા નથી.",
  },
  kn: {
    whatTitle: "ಆನ್‌ಲೈನ್ ನೋಟ್‌ಪ್ಯಾಡ್ ಎಂದರೇನು?",
    whatParagraphs: [
      "ಇದು ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಉಚಿತ ಪಠ್ಯ ಸಂಪಾದಕವಾಗಿದೆ. ನೀವು ಸುಲಭವಾಗಿ ಟಿಪ್ಪಣಿಗಳನ್ನು ಬರೆಯಬಹುದು.",
      "ವೇಗದ ಟಿಪ್ಪಣಿಗಳಿಗೆ ಉತ್ತಮ.",
    ],
    whyTitle: "ಏಕೆ notepad.is?",
    whyIntro: "ಜಾಹೀರಾತು ಇಲ್ಲ. ಮಿತಿಗಳಿಲ್ಲ.",
  },
  ml: {
    whatTitle: "ഓൺലൈൻ നോട്ട്‌പാഡ് എന്താണ്?",
    whatParagraphs: [
      "ഇത് ബ്രൗസറിൽ പ്രവർത്തിക്കുന്ന ഒരു സൗജന്യ ടെക്സ്റ്റ് എഡിറ്ററാണ്. നിങ്ങൾക്ക് എളുപ്പത്തിൽ കുറിപ്പുകൾ എഴുതാനും സൂക്ഷിക്കാനും കഴിയും.",
      "വേഗത്തിലുള്ള കുറിപ്പുകൾക്ക് മികച്ചതാണ്.",
    ],
    whyTitle: "എന്തിന് notepad.is?",
    whyIntro: "വിജ്ഞാപനങ്ങളില്ല. പരിധികളില്ല.",
  },
  si: {
    whatTitle: "ඔන්ලයින් නෝට්පෑඩ් කියන්නේ මොකක්ද?",
    whatParagraphs: [
      "මෙය බ්‍රව්සරයේ ක්‍රියාකරන නොමිලේ ටෙක්ස්ට් එඩිටරයකි. ඔබට පහසුවෙන් සටහන් ලිවිය හැක.",
      "ඉක්මන් සටහන් සඳහා සුදුසුය.",
    ],
    whyTitle: "ඇයි notepad.is?",
    whyIntro: "ප්‍රචාරණ නැත. සීමා නැත.",
  },
  ne: {
    whatTitle: "अनलाइन नोटप्याड के हो?",
    whatParagraphs: [
      "यो ब्राउजरमा चल्ने निःशुल्क टेक्स्ट एडिटर हो। तपाईं सजिलै नोट लेख्न सक्नुहुन्छ।",
      "छिटो नोटका लागि राम्रो।",
    ],
    whyTitle: "किन notepad.is?",
    whyIntro: "विज्ञापन छैन। सीमा छैन।",
  },
  my: {
    whatTitle: "အွန်လိုင်း နုတ်ပက်ဆိုတာဘာလဲ?",
    whatParagraphs: [
      "ဒါက browser ထဲမှာသုံးလို့ရတဲ့ အခမဲ့ text editor တစ်ခုပါ။ သင်လွယ်ကူစွာ note တွေ ရေးနိုင်ပါတယ်။",
      "အမြန်မှတ်စုရေးဖို့ သင့်တော်ပါတယ်။",
    ],
    whyTitle: "ဘာကြောင့် notepad.is?",
    whyIntro: "ကြော်ငြာမရှိ။ ကန့်သတ်ချက်မရှိ။",
  },
  km: {
    whatTitle: "Notepad អនឡាញជាអ្វី?",
    whatParagraphs: [
      "វាជាកម្មវិធីកែអត្ថបទឥតគិតថ្លៃដែលដំណើរការនៅក្នុង browser។ អ្នកអាចសរសេរកំណត់ត្រាបានយ៉ាងងាយស្រួល។",
      "ល្អសម្រាប់កំណត់ត្រាលឿនៗ។",
    ],
    whyTitle: "ហេតុអ្វីជ្រើស notepad.is?",
    whyIntro: "គ្មានការផ្សាយពាណិជ្ជកម្ម។ គ្មានកំណត់។",
  },
  lo: {
    whatTitle: "Notepad ອອນໄລນ໌ແມ່ນຫຍັງ?",
    whatParagraphs: [
      "ມັນແມ່ນ text editor ຟຣີ ທີ່ໃຊ້ໃນ browser ໄດ້. ທ່ານສາມາດຂຽນ note ໄດ້ງ່າຍ.",
      "ເໝາະສໍາລັບ note ໄວ.",
    ],
    whyTitle: "ເປັນຫຍັງ notepad.is?",
    whyIntro: "ບໍ່ມີໂຄສະນາ. ບໍ່ມີຂໍ້ຈໍາກັດ.",
  },
  mn: {
    whatTitle: "Онлайн тэмдэглэлийн дэвтэр гэж юу вэ?",
    whatParagraphs: [
      "Энэ нь браузерт ажилладаг үнэгүй текст засварлагч юм. Та тэмдэглэлээ амархан бичиж болно.",
      "Хурдан тэмдэглэлд тохиромжтой.",
    ],
    whyTitle: "Яагаад notepad.is?",
    whyIntro: "Зар сурталчилгаа байхгүй. Хязгаарлалт байхгүй.",
  },
  ka: {
    whatTitle: "რა არის ონლაინ ნოუთპადი?",
    whatParagraphs: [
      "ეს არის უფასო ტექსტური რედაქტორი, რომელიც ბრაუზერში მუშაობს. შეგიძლიათ მარტივად დაწეროთ ჩანაწერები.",
      "კარგია სწრაფი ჩანაწერებისთვის.",
    ],
    whyTitle: "რატომ notepad.is?",
    whyIntro: "რეკლამა არ არის. შეზღუდვა არ არის.",
  },
  hy: {
    whatTitle: "Ի՞նչ է օնլայն նոթատետրը։",
    whatParagraphs: [
      "Սա անվճար տեքստային խմբագիր է, որը աշխատում է բրաուզերում։ Կարող եք հեշտությամբ գրել նշումներ։",
      "Հարմար է արագ նշումների համար։",
    ],
    whyTitle: "Ինչու notepad.is?",
    whyIntro: "Գովազդ չկա։ Սահմանափակում չկա։",
  },
  az: {
    whatTitle: "Onlayn Notepad nədir?",
    whatParagraphs: [
      "Bu brauzerdə işləyən pulsuz mətn redaktorudur. Siz asanlıqla qeydlər yaza bilərsiniz.",
      "Sürətli qeydlər üçün idealdır.",
    ],
    whyTitle: "Niyə notepad.is?",
    whyIntro: "Reklam yoxdur. Məhdudiyyət yoxdur.",
  },
  sw: {
    whatTitle: "Notepad Online ni nini?",
    whatParagraphs: [
      "Ni mhariri wa maandishi wa bure unaofanya kazi kwenye browser. Unaweza kuandika notes kwa urahisi.",
      "Nzuri kwa notes za haraka.",
    ],
    whyTitle: "Kwa nini notepad.is?",
    whyIntro: "Hakuna matangazo. Hakuna mipaka.",
  },
  zu: {
    whatTitle: "Yini i-Notepad Online?",
    whatParagraphs: [
      "Iyithuluzi lombhalo lamahhala elisebenza ku-browser. Ungabhala amanothi kalula.",
      "Ilungele amanothi asheshayo.",
    ],
    whyTitle: "Kungani notepad.is?",
    whyIntro: "Akukho zikhangiso. Akukho mingcele.",
  },
  af: {
    whatTitle: "Wat is ’n aanlyn notaboek?",
    whatParagraphs: [
      "Dit is ’n gratis teksredigeerder wat in jou browser werk. Jy kan maklik notas skryf.",
      "Goed vir vinnige notas.",
    ],
    whyTitle: "Hoekom notepad.is?",
    whyIntro: "Geen advertensies. Geen perke.",
  },
  am: {
    whatTitle: "ኦንላይን ኖትፓድ ምንድነው?",
    whatParagraphs: [
      "እሱ በብራውዘር ውስጥ የሚሰራ ነፃ የጽሑፍ አርታዒ ነው። ቀላል ማስታወሻዎችን መጻፍ ይችላሉ።",
      "ፈጣን ማስታወሻዎች ለማድረግ ጥሩ ነው።",
    ],
    whyTitle: "ለምን notepad.is?",
    whyIntro: "ማስታወቂያ የለም። ገደብ የለም።",
  },
  so: {
    whatTitle: "Waa maxay Notepad Online?",
    whatParagraphs: [
      "Waa text editor bilaash ah oo ka shaqeeya browser-ka. Waxaad si fudud u qori kartaa notes.",
      "Ku fiican qoraal degdeg ah.",
    ],
    whyTitle: "Maxaa notepad.is?",
    whyIntro: "Xayeysiis ma jiro. Xad ma jiro.",
  },
  yo: {
    whatTitle: "Kini Notepad Online?",
    whatParagraphs: [
      "O jẹ olootu ọrọ ọfẹ ti o ṣiṣẹ lori browser. O le kọ awọn akọsilẹ ni rọọrun.",
      "Dara fun akọsilẹ yarayara.",
    ],
    whyTitle: "Kí ló dé notepad.is?",
    whyIntro: "Ko si ipolowo. Ko si opin.",
  },
  ig: {
    whatTitle: "Gịnị bụ Notepad Online?",
    whatParagraphs: [
      "Ọ bụ text editor n’efu nke na-arụ ọrụ na browser. Ị nwere ike ide ihe nfe.",
      "Ọ dị mma maka ngwa ngwa notes.",
    ],
    whyTitle: "Gịnị mere notepad.is?",
    whyIntro: "Enweghị mgbasa ozi. Enweghị oke.",
  },
  ha: {
    whatTitle: "Menene Notepad Online?",
    whatParagraphs: [
      "Editan rubutu ne na kyauta da ke aiki a browser. Zaka iya rubuta bayanai cikin sauki.",
      "Ya dace da rubutu da sauri.",
    ],
    whyTitle: "Me yasa notepad.is?",
    whyIntro: "Babu talla. Babu iyaka.",
  },
  mg: {
    whatTitle: "Inona ny Notepad Online?",
    whatParagraphs: [
      "Izy dia text editor maimaim-poana miasa ao amin’ny browser. Afaka manoratra naoty mora ianao.",
      "Tsara ho an’ny naoty haingana.",
    ],
    whyTitle: "Nahoana notepad.is?",
    whyIntro: "Tsy misy dokambarotra. Tsy misy fetra.",
  },
  uz: {
    whatTitle: "Onlayn Notepad nima?",
    whatParagraphs: [
      "Bu brauzerda ishlaydigan bepul matn muharriri. Siz oson yozishingiz mumkin.",
      "Tez yozuvlar uchun yaxshi.",
    ],
    whyTitle: "Nega notepad.is?",
    whyIntro: "Reklama yo‘q. Cheklov yo‘q.",
  },
  kk: {
    whatTitle: "Онлайн блокнот деген не?",
    whatParagraphs: [
      "Бұл браузерде жұмыс істейтін тегін мәтіндік редактор. Сіз оңай жазбалар жаза аласыз.",
      "Жылдам жазбалар үшін өте ыңғайлы.",
    ],
    whyTitle: "Неге notepad.is?",
    whyIntro: "Жарнама жоқ. Шектеу жоқ.",
  },
  ky: {
    whatTitle: "Онлайн блокнот деген эмне?",
    whatParagraphs: [
      "Бул браузерде иштеген акысыз текст редактор. Сиз оңой жазууларды жаза аласыз.",
      "Тез жазуулар үчүн жакшы.",
    ],
    whyTitle: "Эмне үчүн notepad.is?",
    whyIntro: "Жарнама жок. Чектөө жок.",
  },
  tg: {
    whatTitle: "Дафтари онлайн чист?",
    whatParagraphs: [
      "Ин муҳаррири матни ройгон аст, ки дар браузер кор мекунад. Шумо метавонед ба осонӣ ёддоштҳо нависед.",
      "Барои ёддоштҳои зуд хуб аст.",
    ],
    whyTitle: "Чаро notepad.is?",
    whyIntro: "Реклама нест. Маҳдудият нест.",
  },
  tk: {
    whatTitle: "Onlaýn Notepad näme?",
    whatParagraphs: [
      "Bu brauzerde işleýän mugt tekst redaktorydyr. Siz bellikleri aňsat ýazyp bilersiňiz.",
      "Çalt bellikler üçin gowy.",
    ],
    whyTitle: "Näme üçin notepad.is?",
    whyIntro: "Reklama ýok. Çäklendirme ýok.",
  },
  ps: {
    whatTitle: "آنلاین نوټ پیډ څه شی دی؟",
    whatParagraphs: [
      "دا یو وړیا متن ایډیټر دی چې په براوزر کې کار کوي. تاسو کولی شئ په اسانه یادښتونه ولیکئ.",
      "د چټکو یادښتونو لپاره ښه دی.",
    ],
    whyTitle: "ولې notepad.is؟",
    whyIntro: "اعلانونه نشته. محدودیت نشته.",
  },
  ku: {
    whatTitle: "Notepad Online çi ye?",
    whatParagraphs: [
      "Ev edîtora nivîsê ya belaş e ku di browser de dixebite. Tu dikarî bi hêsanî notan binivîsî.",
      "Ji bo notên zû baş e.",
    ],
    whyTitle: "Çima notepad.is?",
    whyIntro: "Reklam tune. Sînordar tune.",
  },
  sq: {
    whatTitle: "Çfarë është Notepad Online?",
    whatParagraphs: [
      "Është një editor teksti falas që funksionon në browser. Mund të shkruani shënime lehtë.",
      "I mirë për shënime të shpejta.",
    ],
    whyTitle: "Pse notepad.is?",
    whyIntro: "Pa reklama. Pa kufizime.",
  },
  lt: {
    whatTitle: "Kas yra online notepad?",
    whatParagraphs: [
      "Tai nemokamas teksto redaktorius naršyklėje. Galite lengvai rašyti užrašus.",
      "Puikiai tinka greitiems užrašams.",
    ],
    whyTitle: "Kodėl notepad.is?",
    whyIntro: "Be reklamų. Be apribojimų.",
  },
  lv: {
    whatTitle: "Kas ir online notepad?",
    whatParagraphs: [
      "Tas ir bezmaksas teksta redaktors pārlūkā. Jūs varat viegli rakstīt piezīmes.",
      "Labs ātrām piezīmēm.",
    ],
    whyTitle: "Kāpēc notepad.is?",
    whyIntro: "Nav reklāmu. Nav ierobežojumu.",
  },
  et: {
    whatTitle: "Mis on online notepad?",
    whatParagraphs: [
      "See on tasuta tekstiredaktor brauseris. Sa saad lihtsalt märkmeid kirjutada.",
      "Hea kiirete märkmete jaoks.",
    ],
    whyTitle: "Miks notepad.is?",
    whyIntro: "Pole reklaame. Pole piiranguid.",
  },
  is: {
    whatTitle: "Hvað er online notepad?",
    whatParagraphs: [
      "Það er ókeypis textaritill í vafra. Þú getur auðveldlega skrifað minnispunkta.",
      "Gott fyrir hraðar glósur.",
    ],
    whyTitle: "Af hverju notepad.is?",
    whyIntro: "Engar auglýsingar. Engin takmörk.",
  },
  ga: {
    whatTitle: "Cad é online notepad?",
    whatParagraphs: [
      "Is eagarthóir téacs saor in aisce é sa bhrabhsálaí. Is féidir leat nótaí a scríobh go héasca.",
      "Oiriúnach do nótaí tapa.",
    ],
    whyTitle: "Cén fáth notepad.is?",
    whyIntro: "Gan fógraí. Gan teorainneacha.",
  },
  cy: {
    whatTitle: "Beth yw online notepad?",
    whatParagraphs: [
      "Mae’n olygydd testun am ddim yn y porwr. Gallwch ysgrifennu nodiadau yn hawdd.",
      "Da ar gyfer nodiadau cyflym.",
    ],
    whyTitle: "Pam notepad.is?",
    whyIntro: "Dim hysbysebion. Dim terfynau.",
  },
  eu: {
    whatTitle: "Zer da online notepad?",
    whatParagraphs: [
      "Doako testu editorea da, nabigatzailean funtzionatzen duena. Ohar errazak idatz ditzakezu.",
      "Oso ona ohar azkarrentzat.",
    ],
    whyTitle: "Zergatik notepad.is?",
    whyIntro: "Ez dago iragarkirik. Ez dago mugarik.",
  },
  ca: {
    whatTitle: "Què és un notepad online?",
    whatParagraphs: [
      "És un editor de text gratuït que funciona al navegador. Pots escriure notes fàcilment.",
      "Ideal per a notes ràpides.",
    ],
    whyTitle: "Per què notepad.is?",
    whyIntro: "Sense anuncis. Sense límits.",
  },
  gl: {
    whatTitle: "Que é un notepad online?",
    whatParagraphs: [
      "É un editor de texto gratuíto que funciona no navegador. Podes escribir notas facilmente.",
      "Bo para notas rápidas.",
    ],
    whyTitle: "Por que notepad.is?",
    whyIntro: "Sen anuncios. Sen límites.",
  },
  mt: {
    whatTitle: "X’inhu Notepad Online?",
    whatParagraphs: [
      "Huwa editur tat-test b’xejn li jaħdem fil-browser. Tista’ tikteb noti faċilment.",
      "Tajjeb għal noti malajr.",
    ],
    whyTitle: "Għaliex notepad.is?",
    whyIntro: "L-ebda reklami. L-ebda limitu.",
  },
  lb: {
    whatTitle: "Wat ass Notepad Online?",
    whatParagraphs: [
      "Et ass e gratis Texteditor am Browser. Dir kënnt einfach Notizen schreiwen.",
      "Gutt fir séier Notizen.",
    ],
    whyTitle: "Firwat notepad.is?",
    whyIntro: "Keng Reklammen. Keng Limitten.",
  },
  mk: {
    whatTitle: "Што е Notepad Online?",
    whatParagraphs: [
      "Тоа е бесплатен текстуален уредник во прелистувач. Можете лесно да пишувате белешки.",
      "Добро за брзи белешки.",
    ],
    whyTitle: "Зошто notepad.is?",
    whyIntro: "Без реклами. Без ограничувања.",
  },
  bs: {
    whatTitle: "Šta je Notepad Online?",
    whatParagraphs: [
      "To je besplatan tekst editor u browseru. Možete lako pisati bilješke.",
      "Dobar za brze bilješke.",
    ],
    whyTitle: "Zašto notepad.is?",
    whyIntro: "Bez reklama. Bez ograničenja.",
  },
  sl: {
    whatTitle: "Kaj je Notepad Online?",
    whatParagraphs: [
      "To je brezplačen urejevalnik besedila v brskalniku. Lahko enostavno pišete zapiske.",
      "Odlično za hitre zapiske.",
    ],
    whyTitle: "Zakaj notepad.is?",
    whyIntro: "Brez oglasov. Brez omejitev.",
  },
  fj: {
    whatTitle: "Na cava na Notepad Online?",
    whatParagraphs: [
      "E dua na text editor sega ni saumi e cakacaka ena browser. E rawa ni o vola na notes rawarawa.",
      "Vinaka kina na notes totolo.",
    ],
    whyTitle: "Na cava notepad.is?",
    whyIntro: "Sega ni ads. Sega ni limits.",
  },
  mi: {
    whatTitle: "He aha te Notepad Online?",
    whatParagraphs: [
      "He etita kuputuhi kore utu e mahi ana i roto i te pūtirotiro. Ka taea e koe te tuhi tuhipoka ngawari.",
      "He pai mō ngā tuhipoka tere.",
    ],
    whyTitle: "He aha te notepad.is?",
    whyIntro: "Kāore he pānuitanga. Kāore he here.",
  },
  sm: {
    whatTitle: "O le ā le Notepad Online?",
    whatParagraphs: [
      "O se text editor fua e galue i le browser. E mafai ona e tusi fa’amaumauga faigofie.",
      "Lelei mo fa’amaumauga vave.",
    ],
    whyTitle: "Aiseā notepad.is?",
    whyIntro: "Leai ni fa’asalalauga. Leai ni tapula’a.",
  },
  to: {
    whatTitle: "Ko e hā e Notepad Online?",
    whatParagraphs: [
      "Ko ha text editor ta’etotongi ‘oku ngaue ‘i he browser. ‘E lava ke ke tohi fakamanatu faingofua.",
      "Lelei ki he fakamanatu vave.",
    ],
    whyTitle: "Ko e hā notepad.is?",
    whyIntro: "‘Ikai ha ads. ‘Ikai ha limit.",
  },
  ht: {
    whatTitle: "Ki sa Notepad Online ye?",
    whatParagraphs: [
      "Se yon editè tèks gratis ki mache nan navigatè a. Ou ka ekri nòt fasil.",
      "Bon pou nòt rapid.",
    ],
    whyTitle: "Poukisa notepad.is?",
    whyIntro: "Pa gen piblisite. Pa gen limit.",
  },
  qu: {
    whatTitle: "Imataq Notepad Online?",
    whatParagraphs: [
      "Kayqa huk qillqa editor mana qullqiyuqmi browserpi llamkan. Qillqaykita aswan facil ruwanki.",
      "Allinmi utqaylla qillqaykunapaq.",
    ],
    whyTitle: "Imarayku notepad.is?",
    whyIntro: "Mana reklamakunachu. Mana limitkuna.",
  },
  ay: {
    whatTitle: "Kunas Notepad Online ukaxa?",
    whatParagraphs: [
      "Ukaxa mä text editor gratis ukawa browseran irnaqiri. Jank’aki qillqaña lurapxasma.",
      "Askiwa jank’aki qillqañataki.",
    ],
    whyTitle: "Kunatsa notepad.is?",
    whyIntro: "Janiw anuncios utjkiti. Janiw límites utjkiti.",
  },
  gn: {
    whatTitle: "Mba’épa Notepad Online?",
    whatParagraphs: [
      "Ha’e peteĩ text editor gratis oikóva browser-pe. Ikatu rehai nde nota pya’e.",
      "Iporã notas pya’e hag̃ua.",
    ],
    whyTitle: "Mba’ére notepad.is?",
    whyIntro: "Ndaipóri anuncio. Ndaipóri límite.",
  },
  nv: {
    whatTitle: "Notepad Online ha’át’íí?",
    whatParagraphs: [
      "Áádóó text editor t’áá ajiłii’ígíí browser bikáa’gi. Níłch’i’í nitsáhákeesgo naaltsoos bits’į’.",
      "Yáhoot’ééł notes t’áá ajiłii’.",
    ],
    whyTitle: "Hágoó notepad.is?",
    whyIntro: "Doo ads da. Doo limits da.",
  },
  iu: {
    whatTitle: "Notepad Online suna?",
    whatParagraphs: [
      "Taamna text editor akeqanngitsoq browser-mi atuinnaasoq. Allagarsiutit iluaqusillugit allassinnaavutit.",
      "Piujuaannartoq sukkasuumik allattornissamut.",
    ],
    whyTitle: "Sooruna notepad.is?",
    whyIntro: "Ads-qanngilaq. Killilersuineqanngilaq.",
  },
  kl: {
    whatTitle: "Suua Notepad Online?",
    whatParagraphs: [
      "Tassa text editor akeqanngitsoq browser-imi atorneqartoq. Allattuutit sukkanermik allassinnaavatit.",
      "Pitsaasuuvoq allattuutinut sukkasunut.",
    ],
    whyTitle: "Sooruna notepad.is?",
    whyIntro: "Ads-qanngilaq. Killilersuineqanngilaq.",
  },
  om: {
    whatTitle: "Notepad Online maal?",
    whatParagraphs: [
      "Inni barreessaa barruu bilisaa kan browser keessatti hojjetu dha. Salphaatti barreessuu dandeessa.",
      "Gaarii dha galmee saffisaa.",
    ],
    whyTitle: "Maaliif notepad.is?",
    whyIntro: "Beeksisa hin jiru. Daangaa hin jiru.",
  },
  ti: {
    whatTitle: "እንታይ እዩ Notepad Online?",
    whatParagraphs: [
      "እዚ ናይ ጽሑፍ ኣርታዒ ነፃ እዩ ኣብ browser ዝሰርሕ። ቀሊል ምስታወሻ ክትጽሕፍ ትኽእል።",
      "ንፈጣን ምስታወሻ ጥሩ እዩ።",
    ],
    whyTitle: "ስለምንታይ notepad.is?",
    whyIntro: "ማስታወቂያ የለን። ገደብ የለን።",
  },
  sn: {
    whatTitle: "Chii chinonzi Notepad Online?",
    whatParagraphs: [
      "Icho chishandiso chekunyora chemahara chinoshanda mu browser. Unogona kunyora manotsi zviri nyore.",
      "Chakanaka kune manotsi ekukurumidza.",
    ],
    whyTitle: "Sei notepad.is?",
    whyIntro: "Hapana ads. Hapana limit.",
  },
  xh: {
    whatTitle: "Yintoni Notepad Online?",
    whatParagraphs: [
      "Sisixhobo sokubhala simahla esisebenza kwi-browser. Ungabhala amanqaku lula.",
      "Silungile kumanqaku akhawulezayo.",
    ],
    whyTitle: "Kutheni notepad.is?",
    whyIntro: "Akukho ads. Akukho limits.",
  },
  ceb: {
    whatTitle: "Unsa ang Notepad Online?",
    whatParagraphs: [
      "Libre nga text editor nga magamit sa browser. Makasulat ka og notes dali.",
      "Maayo para sa dali nga notes.",
    ],
    whyTitle: "Ngano notepad.is?",
    whyIntro: "Walay ads. Walay limit.",
  },
  tl: {
    whatTitle: "Ano ang Notepad Online?",
    whatParagraphs: [
      "Isang libreng text editor na gumagana sa browser. Madali kang makakasulat ng notes.",
      "Maganda para sa mabilis na notes.",
    ],
    whyTitle: "Bakit notepad.is?",
    whyIntro: "Walang ads. Walang limit.",
  },
  jv: {
    whatTitle: "Apa iku Notepad Online?",
    whatParagraphs: [
      "Iki editor teks gratis sing bisa digunakake ing browser. Sampeyan bisa nulis cathetan kanthi gampang.",
      "Apik kanggo cathetan cepet.",
    ],
    whyTitle: "Napa notepad.is?",
    whyIntro: "Ora ana iklan. Ora ana watesan.",
  },
  su: {
    whatTitle: "Naon éta Notepad Online?",
    whatParagraphs: [
      "Ieu editor téks gratis anu jalan di browser. Anjeun bisa nulis catetan kalayan gampang.",
      "Hadé pikeun catetan gancang.",
    ],
    whyTitle: "Naha notepad.is?",
    whyIntro: "Teu aya iklan. Teu aya watesan.",
  },
};

/** Locales that use right-to-left scripts for this block */
export const homeSeoRtlLocales = new Set(["ar", "ur", "fa", "he", "ps"]);

export function getHomeSeoCopy(locale: string): HomeSeoCopy {
  return byLocale[locale] ?? en;
}

/**
 * "Key Features of Notepad Online" section copy, per locale.
 * The `features` array order must match the icon order in SEOContent.tsx.
 * Locales without an entry fall back to English.
 */
export type HomeFeature = { title: string; desc: string };
export type HomeFeaturesCopy = {
  title: string;
  features: HomeFeature[];
  outro: string;
};

const featuresEn: HomeFeaturesCopy = {
  title: "Key Features of Notepad Online",
  features: [
    {
      title: "Auto Save Online",
      desc: "Our online notepad automatically saves your work as you type, so you never lose a single word, even if your browser crashes or you accidentally close the tab.",
    },
    {
      title: "Download in TXT and PDF formats",
      desc: "With our notepad, you can export your notes instantly as a clean TXT or PDF file, making it easy to save, print, or share your work offline.",
    },
    {
      title: "Full Screen",
      desc: "Switch to full-screen mode and let this distraction-free notepad give you a clean, edge-to-edge writing canvas perfect for focused drafting sessions.",
    },
    {
      title: "200% Zoom Feature",
      desc: "This online notepad lets you zoom in up to 200%, making it easier on the eyes for long writing sessions or when working with small text on any screen.",
    },
    {
      title: "Insert Images, Table, Auto-Update Dates, Export HTML",
      desc: "From inserting images and structured tables to auto-updating dates and exporting your content as HTML, this notepad goes far beyond basic text editing.",
    },
    {
      title: "Headings from H1 to H6",
      desc: "Organize your content with a full heading hierarchy, H1 through H6, giving this notepad the structure of a proper document editor right in your browser.",
    },
    {
      title: "Different Font Styles",
      desc: "Choose from a variety of font styles to personalize your writing experience and make your notepad documents more readable, expressive, or professional.",
    },
    {
      title: "Change Text Color",
      desc: "This online notepad lets you highlight key points and add visual clarity by changing text color, a simple but powerful formatting tool for any writer.",
    },
    {
      title: "AI-Powered Speech to Text Without Any Error",
      desc: "Speak your thoughts and watch them appear on screen with high accuracy. This notepad's AI-powered speech-to-text feature instantly turns your voice into clean, error-free text. So you can save a lot of time.",
    },
    {
      title: "Generate Shareable Link After Sign-In",
      desc: "Once signed in, our notepad lets you generate a unique shareable link for any note, making collaboration and quick sharing as simple as copying a URL.",
    },
    {
      title: "Create Account to Record History",
      desc: "Create a free account on this notepad to unlock note history so you can revisit, recover, and manage everything you've ever written, all in one place.",
    },
  ],
  outro:
    "Apart from these, there are a lot of other unique features you can use and enjoy for free.",
};

const featuresByLocale: Record<string, HomeFeaturesCopy> = {
  en: featuresEn,
  af: {
    title: "Belangrike Kenmerke van Aanlyn Notaboek",
    features: [
      {
        title: "Outomatiese Aanlyn Stoor",
        desc: "Ons aanlyn notaboek stoor jou werk outomaties terwyl jy tik, sodat jy nooit 'n enkele woord verloor nie, selfs al val jou blaaier uit of sluit jy per ongeluk die oortjie.",
      },
      {
        title: "Laai Af in TXT- en PDF-Formate",
        desc: "Met ons notaboek kan jy jou notas onmiddellik uitvoer as 'n netjiese TXT- of PDF-lêer, wat dit maklik maak om jou werk vanlyn te stoor, uit te druk of te deel.",
      },
      {
        title: "Volskerm",
        desc: "Skakel oor na volskermmodus en geniet 'n afleidingsvrye skryfervaring met 'n skoon skryfoppervlak wat ideaal is vir gefokusde skryfsessies.",
      },
      {
        title: "200% Zoemfunksie",
        desc: "Hierdie aanlyn notaboek laat jou toe om tot 200% in te zoem, wat dit makliker maak om vir lang tye te skryf of met klein teks op enige skerm te werk.",
      },
      {
        title: "Voeg Beelde en Tabelle In, Dateer Datums Outomaties Op, Voer HTML Uit",
        desc: "Van die invoeging van beelde en gestruktureerde tabelle tot die outomatiese opdatering van datums en die uitvoer van inhoud as HTML – hierdie notaboek bied baie meer as gewone teksredigering.",
      },
      {
        title: "Opskrifte van H1 tot H6",
        desc: "Organiseer jou inhoud met 'n volledige opskrifhiërargie van H1 tot H6, wat hierdie notaboek die struktuur van 'n professionele dokumentredigeerder gee.",
      },
      {
        title: "Verskillende Lettertipes",
        desc: "Kies uit verskeie lettertipes om jou skryfervaring te personaliseer en jou dokumente meer leesbaar, uitdruklik of professioneel te maak.",
      },
      {
        title: "Verander Tekskleur",
        desc: "Hierdie aanlyn notaboek laat jou toe om belangrike punte uit te lig en beter visuele duidelikheid te skep deur die tekskleur te verander – 'n eenvoudige maar kragtige hulpmiddel vir enige skrywer.",
      },
      {
        title: "KI-Aangedrewe Spraak-na-Teks Sonder Foute",
        desc: "Spreek jou gedagtes uit en sien hoe dit met hoë akkuraatheid op die skerm verskyn. Hierdie notaboek se KI-aangedrewe spraak-na-teks-funksie omskep jou stem onmiddellik in skoon, foutvrye teks, wat jou baie tyd bespaar.",
      },
      {
        title: "Genereer Deelbare Skakel Ná Aanmelding",
        desc: "Sodra jy aangemeld is, kan jy 'n unieke deelbare skakel vir enige nota genereer, wat samewerking en vinnige deel so maklik maak soos om 'n URL te kopieer.",
      },
      {
        title: "Skep 'n Rekening om Geskiedenis te Bewaar",
        desc: "Skep 'n gratis rekening op hierdie notaboek om toegang tot jou notageskiedenis te kry, sodat jy alles wat jy ooit geskryf het maklik kan hersien, herstel en bestuur vanaf een plek.",
      },
    ],
    outro:
      "Benewens hierdie funksies is daar nog baie ander unieke kenmerke wat jy gratis kan gebruik en geniet.",
  },
  sq: {
    title: "Veçoritë Kryesore të Notepad-it Online",
    features: [
      {
        title: "Ruajtje Automatike Online",
        desc: "Notepad-i ynë online e ruan automatikisht punën tuaj ndërsa shkruani, kështu që nuk humbni asnjë fjalë, edhe nëse shfletuesi juaj bllokohet ose e mbyllni aksidentalisht skedën.",
      },
      {
        title: "Shkarko në Formatet TXT dhe PDF",
        desc: "Me notepad-in tonë, mund t’i eksportoni menjëherë shënimet tuaja si skedar TXT ose PDF të pastër, duke e bërë të lehtë ruajtjen, printimin ose shpërndarjen e tyre jashtë linje.",
      },
      {
        title: "Ekran i Plotë",
        desc: "Kaloni në modalitetin me ekran të plotë dhe shijoni një hapësirë të pastër shkrimi pa shpërqendrime, ideale për sesione të përqendruara pune.",
      },
      {
        title: "Funksioni i Zmadhimit deri në 200%",
        desc: "Ky notepad online ju lejon të zmadhoni tekstin deri në 200%, duke e bërë më të rehatshëm për sytë gjatë sesioneve të gjata të shkrimit ose kur punoni me tekst të vogël në çdo ekran.",
      },
      {
        title: "Shto Imazhe, Tabela, Përditësim Automatik të Datave dhe Eksporto HTML",
        desc: "Nga shtimi i imazheve dhe tabelave të strukturuara deri te përditësimi automatik i datave dhe eksportimi i përmbajtjes si HTML, ky notepad ofron shumë më tepër sesa redaktimi bazë i tekstit.",
      },
      {
        title: "Tituj nga H1 deri në H6",
        desc: "Organizoni përmbajtjen tuaj me një hierarki të plotë titujsh nga H1 deri në H6, duke i dhënë këtij notepad-i strukturën e një redaktuesi profesional dokumentesh direkt në shfletues.",
      },
      {
        title: "Stile të Ndryshme Shkronjash",
        desc: "Zgjidhni nga një gamë e gjerë stilesh shkronjash për të personalizuar përvojën tuaj të shkrimit dhe për t’i bërë dokumentet më të lexueshme, më shprehëse ose më profesionale.",
      },
      {
        title: "Ndrysho Ngjyrën e Tekstit",
        desc: "Ky notepad online ju lejon të theksoni pikat kryesore dhe të shtoni qartësi vizuale duke ndryshuar ngjyrën e tekstit, një mjet i thjeshtë por i fuqishëm formatimi për çdo shkrimtar.",
      },
      {
        title: "Shndërrim i Zërit në Tekst me Inteligjencë Artificiale pa Gabime",
        desc: "Thoni mendimet tuaja me zë dhe shikoni si shfaqen në ekran me saktësi të lartë. Funksioni i shndërrimit të zërit në tekst me inteligjencë artificiale e kthen menjëherë zërin tuaj në tekst të pastër dhe pa gabime, duke ju kursyer shumë kohë.",
      },
      {
        title: "Gjenero Lidhje të Ndarshme Pas Hyrjes",
        desc: "Pasi të hyni në llogarinë tuaj, notepad-i ynë ju lejon të krijoni një lidhje unike për çdo shënim, duke e bërë bashkëpunimin dhe ndarjen e shpejtë po aq të lehtë sa kopjimi i një URL-je.",
      },
      {
        title: "Krijo Llogari për të Ruajtur Historikun",
        desc: "Krijoni një llogari falas në këtë notepad për të zhbllokuar historikun e shënimeve, në mënyrë që të mund të riktheheni, rikuperoni dhe menaxhoni gjithçka që keni shkruar ndonjëherë, në një vend të vetëm.",
      },
    ],
    outro:
      "Përveç këtyre, ka edhe shumë veçori të tjera unike që mund t’i përdorni dhe t’i shijoni plotësisht falas.",
  },
  am: {
    title: "የኦንላይን ኖትፓድ ዋና ባህሪያት",
    features: [
      {
        title: "በራስ-ሰር ኦንላይን ማስቀመጥ",
        desc: "የእኛ ኦንላይን ኖትፓድ ሲጽፉ ስራዎን በራስ-ሰር ያስቀምጣል፣ ስለዚህ አንድም ቃል አይጠፋብዎትም፤ አሳሹ ቢቋረጥ ወይም ታቡን በስህተት ቢዘጉም እንኳ።",
      },
      {
        title: "በTXT እና PDF ቅርጸቶች አውርድ",
        desc: "በእኛ ኖትፓድ ማስታወሻዎችዎን እንደ ንጹህ TXT ወይም PDF ፋይል በቅጽበት ማውጣት ይችላሉ፣ ይህም ስራዎን ለማስቀመጥ፣ ለማተም ወይም ከመስመር ውጭ ለማጋራት ቀላል ያደርገዋል።",
      },
      {
        title: "ሙሉ ማያ ገጽ",
        desc: "ወደ ሙሉ ማያ ገጽ ሁኔታ ይቀይሩ እና ይህ ከመረበሽ ነጻ የሆነ ኖትፓድ ከዳር እስከ ዳር የሚዘረጋ ንጹህ የጽሑፍ ቦታ እንዲሰጥዎ ያድርጉ፣ ለተጠናከረ የጽሑፍ ስራ ተስማሚ ነው።",
      },
      {
        title: "200% የማጉላት ባህሪ",
        desc: "ይህ ኦንላይን ኖትፓድ እስከ 200% ድረስ እንዲያጉሉ ያስችልዎታል፣ ይህም ረጅም ጊዜ ሲጽፉ ወይም በማንኛውም ማያ ገጽ ላይ ባለ ትንሽ ጽሑፍ ሲሰሩ ለዓይን የበለጠ ምቹ ያደርገዋል።",
      },
      {
        title: "ምስሎችን እና ሰንጠረዦችን አስገባ፣ ቀኖችን በራስ-ሰር አዘምን፣ HTML አውጣ",
        desc: "ምስሎችን እና የተደራጁ ሰንጠረዦችን ከማስገባት ጀምሮ ቀኖችን በራስ-ሰር ማዘመን እና ይዘትዎን እንደ HTML ማውጣት ድረስ፣ ይህ ኖትፓድ ከመሠረታዊ የጽሑፍ ማረም እጅግ የላቀ ነው።",
      },
      {
        title: "ከH1 እስከ H6 ያሉ ርዕሶች",
        desc: "ይዘትዎን በሙሉ የርዕስ ቅደም ተከተል ከH1 እስከ H6 ድረስ ያደራጁ፣ ይህም ለኖትፓዱ በአሳሽዎ ውስጥ የባለሙያ የሰነድ አርታዒ መዋቅር ይሰጠዋል።",
      },
      {
        title: "የተለያዩ የፊደል ቅጦች",
        desc: "የጽሑፍ ልምድዎን ለማበጀት እና ሰነዶችዎን የበለጠ ተነባቢ፣ ገላጭ ወይም ባለሙያዊ ለማድረግ ከተለያዩ የፊደል ቅጦች ይምረጡ።",
      },
      {
        title: "የጽሑፍ ቀለም ቀይር",
        desc: "ይህ ኦንላይን ኖትፓድ ቁልፍ ነጥቦችን ለማጉላት እና የጽሑፍ ቀለምን በመቀየር የእይታ ግልጽነት ለመጨመር ያስችልዎታል፤ ይህም ለማንኛውም ጸሐፊ ቀላል ነገር ግን ኃይለኛ የቅርጸት መሳሪያ ነው።",
      },
      {
        title: "በአርቴፊሻል ኢንተለጀንስ የተጎለበተ ከስህተት ነጻ የድምጽ-ወደ-ጽሑፍ ባህሪ",
        desc: "ሀሳቦችዎን ይናገሩ እና በከፍተኛ ትክክለኛነት በማያ ገጹ ላይ ሲታዩ ይመልከቱ። የዚህ ኖትፓድ በAI የተጎለበተ የድምጽ-ወደ-ጽሑፍ ባህሪ ድምጽዎን ወዲያውኑ ወደ ንጹህ እና ከስህተት ነጻ ጽሑፍ ይቀይረዋል፣ ይህም ብዙ ጊዜ እንዲቆጥቡ ያግዛል።",
      },
      {
        title: "ከግባ በኋላ ሊጋራ የሚችል አገናኝ ፍጠር",
        desc: "አንዴ ከገቡ በኋላ፣ የእኛ ኖትፓድ ለማንኛውም ማስታወሻ ልዩ የሚጋራ አገናኝ እንዲፈጥሩ ያስችልዎታል፣ ይህም ትብብርን እና ፈጣን ማጋራትን URL እንደመቅዳት ቀላል ያደርገዋል።",
      },
      {
        title: "ታሪክን ለማስቀመጥ መለያ ፍጠር",
        desc: "የማስታወሻ ታሪክን ለመክፈት በዚህ ኖትፓድ ላይ ነጻ መለያ ይፍጠሩ፣ ይህም እስካሁን የጻፉትን ሁሉ በአንድ ቦታ እንደገና ለማየት፣ ለማስመለስ እና ለማስተዳደር ያስችልዎታል።",
      },
    ],
    outro:
      "ከእነዚህ በተጨማሪ ብዙ ሌሎች ልዩ ባህሪያት አሉ፣ እነሱንም በነጻ መጠቀም እና መደሰት ይችላሉ።",
  },
  ar: {
    title: "المميزات الرئيسية للمفكرة الإلكترونية عبر الإنترنت",
    features: [
      {
        title: "الحفظ التلقائي عبر الإنترنت",
        desc: "تقوم المفكرة الإلكترونية لدينا بحفظ عملك تلقائياً أثناء الكتابة، لذلك لن تفقد أي كلمة أبداً، حتى لو تعطل المتصفح أو أغلقت التبويب عن طريق الخطأ.",
      },
      {
        title: "تحميل بصيغ TXT و PDF",
        desc: "باستخدام هذه المفكرة يمكنك تصدير ملاحظاتك فوراً كملف TXT أو PDF نظيف، مما يسهل حفظ عملك أو طباعته أو مشاركته بدون إنترنت.",
      },
      {
        title: "وضع ملء الشاشة",
        desc: "انتقل إلى وضع ملء الشاشة واستمتع بمساحة كتابة نظيفة وخالية من الإزعاج تمتد من الحافة إلى الحافة، مثالية لجلسات الكتابة المركزة.",
      },
      {
        title: "ميزة التكبير حتى 200%",
        desc: "تتيح لك هذه المفكرة الإلكترونية التكبير حتى 200%، مما يجعل القراءة والكتابة أكثر راحة للعين أثناء الجلسات الطويلة أو عند استخدام نص صغير على أي شاشة.",
      },
      {
        title: "إدراج الصور والجداول، التحديث التلقائي للتواريخ، وتصدير HTML",
        desc: "من إدراج الصور والجداول المنظمة إلى التحديث التلقائي للتواريخ وتصدير المحتوى كملف HTML، تتجاوز هذه المفكرة حدود تحرير النصوص الأساسي بكثير.",
      },
      {
        title: "العناوين من H1 إلى H6",
        desc: "نظّم محتواك باستخدام هيكل كامل للعناوين من H1 إلى H6، مما يمنح هذه المفكرة بنية محرر مستندات احترافي مباشرة داخل المتصفح.",
      },
      {
        title: "أنماط خطوط متنوعة",
        desc: "اختر من بين مجموعة متنوعة من أنماط الخطوط لتخصيص تجربة الكتابة وجعل مستنداتك أكثر وضوحاً وتعبيراً واحترافية.",
      },
      {
        title: "تغيير لون النص",
        desc: "تتيح لك هذه المفكرة الإلكترونية إبراز النقاط المهمة وإضافة وضوح بصري من خلال تغيير لون النص، وهي أداة تنسيق بسيطة لكنها قوية لأي كاتب.",
      },
      {
        title: "تحويل الكلام إلى نص مدعوم بالذكاء الاصطناعي بدون أخطاء",
        desc: "تحدث بأفكارك وشاهدها تظهر على الشاشة بدقة عالية. تقوم ميزة تحويل الكلام إلى نص المدعومة بالذكاء الاصطناعي في هذه المفكرة بتحويل صوتك فوراً إلى نص نظيف وخالٍ من الأخطاء، مما يوفر لك الكثير من الوقت.",
      },
      {
        title: "إنشاء رابط قابل للمشاركة بعد تسجيل الدخول",
        desc: "بعد تسجيل الدخول، تتيح لك هذه المفكرة إنشاء رابط فريد قابل للمشاركة لأي ملاحظة، مما يجعل التعاون والمشاركة السريعة سهلاً مثل نسخ رابط URL.",
      },
      {
        title: "إنشاء حساب لتسجيل السجل",
        desc: "أنشئ حساباً مجانياً في هذه المفكرة لفتح سجل الملاحظات، بحيث يمكنك الرجوع إلى كل ما كتبته واستعادته وإدارته في مكان واحد.",
      },
    ],
    outro:
      "بخلاف هذه الميزات، هناك العديد من الخصائص الفريدة الأخرى التي يمكنك استخدامها والاستمتاع بها مجاناً.",
  },
  hy: {
    title: "Օնլայն Նոթփադի հիմնական հնարավորությունները",
    features: [
      {
        title: "Ինքնաբերաբար պահպանում առցանց",
        desc: "Մեր օնլայն նոթփադը ավտոմատ կերպով պահպանում է ձեր աշխատանքը գրելիս, այնպես որ դուք երբեք չեք կորցնի ոչ մի բառ, նույնիսկ եթե ձեր բրաուզերը խափանվի կամ պատահաբար փակեք ներդիրը։",
      },
      {
        title: "Ներբեռնում TXT և PDF ձևաչափերով",
        desc: "Մեր նոթփադով դուք կարող եք անմիջապես արտահանել ձեր գրառումները որպես մաքուր TXT կամ PDF ֆայլ, ինչը հեշտացնում է պահպանումը, տպագրումը կամ անցանց կիսումը։",
      },
      {
        title: "Ամբողջ էկրան",
        desc: "Անցեք ամբողջ էկրանի ռեժիմի և ստացեք մաքուր, առանց շեղումների գրելու տարածք՝ կատարյալ կենտրոնացված գրելու համար։",
      },
      {
        title: "200% խոշորացման հնարավորություն",
        desc: "Այս օնլայն նոթփադը թույլ է տալիս խոշորացնել մինչև 200%, ինչը ավելի հարմար է աչքերի համար երկար գրելու ժամանակ կամ փոքր տեքստի հետ աշխատելիս։",
      },
      {
        title: "Ներդնել պատկերներ, աղյուսակներ, ավտոմատ ամսաթվի թարմացում, HTML արտահանում",
        desc: "Պատկերների և կառուցվածքային աղյուսակների ներմուծումից մինչև ամսաթվերի ավտոմատ թարմացում և բովանդակության HTML ձևաչափով արտահանում՝ այս նոթփադը գերազանցում է սովորական տեքստային խմբագրմանը։",
      },
      {
        title: "Վերնագրեր H1-ից H6",
        desc: "Կազմակերպեք ձեր բովանդակությունը ամբողջական վերնագրային հիերարխիայով՝ H1-ից մինչև H6, տալով նոթփադին պրոֆեսիոնալ փաստաթղթի խմբագրի կառուցվածք։",
      },
      {
        title: "Տարբեր տառատեսակների ոճեր",
        desc: "Ընտրեք տարբեր տառատեսակների ոճերից՝ ձեր գրելու փորձը անհատականացնելու և փաստաթղթերը ավելի ընթեռնելի, արտահայտիչ կամ պրոֆեսիոնալ դարձնելու համար։",
      },
      {
        title: "Տեքստի գույնի փոփոխություն",
        desc: "Այս օնլայն նոթփադը թույլ է տալիս ընդգծել կարևոր կետերը և ավելացնել տեսողական հստակություն՝ փոխելով տեքստի գույնը, ինչը պարզ բայց հզոր ձևաչափման գործիք է ցանկացած գրողի համար։",
      },
      {
        title: "Արհեստական բանականությամբ աշխատող ձայնից տեքստ առանց սխալների",
        desc: "Արտահայտեք ձեր մտքերը և դիտեք, թե ինչպես են դրանք բարձր ճշգրտությամբ հայտնվում էկրանին։ Այս նոթփադի արհեստական բանականությամբ աշխատող ձայնից տեքստ ֆունկցիան անմիջապես փոխում է ձեր ձայնը մաքուր և առանց սխալների տեքստի՝ խնայելով ձեր ժամանակը։",
      },
      {
        title: "Մուտքից հետո կիսվող հղում ստեղծել",
        desc: "Մուտք գործելուց հետո մեր նոթփադը թույլ է տալիս ստեղծել յուրահատուկ կիսվող հղում ցանկացած գրառման համար՝ համագործակցությունն ու արագ կիսումը դարձնելով URL պատճենելու չափ պարզ։",
      },
      {
        title: "Հաշվի ստեղծում՝ պատմությունը պահպանելու համար",
        desc: "Ստեղծեք անվճար հաշիվ այս նոթփադում՝ գրառումների պատմությունը բացելու համար, որպեսզի կարողանաք վերադառնալ, վերականգնել և կառավարել ձեր երբևէ գրած ամեն ինչ մեկ տեղում։",
      },
    ],
    outro:
      "Բացի այս հնարավորություններից, կան նաև բազմաթիվ այլ յուրահատուկ գործառույթներ, որոնք կարող եք օգտագործել և վայելել անվճար։",
  },
  ay: {
    title: "Online Notepad ukana Jach’a Uñacht’awinaka",
    features: [
      {
        title: "Internet tuqin Auto Imasiña",
        desc: "Jiwasan online notepad ukaxa luräwimaxa qillqt’asipkakipana auto imasi, ukhamata jani mayni aru chhaqtañapakiti, navegador ukaxa t’unjasiña jan ukaxa tab ukaxa pantjasita jist’antata ukhasa.",
      },
      {
        title: "TXT ukhamaraki PDF formato ukanaka apkataña",
        desc: "Jiwasan notepad ukampi, qillqt’atanakama jank’aki TXT jan ukaxa PDF archivo ukhamaru apsuña, ukhamata imaña, imprimiña jan ukaxa internet jan utjkipana churaña faciläni.",
      },
      {
        title: "Phuqhata pantalla",
        desc: "Phuqhata pantalla ukaru jaqukipaña ukhamata aka jan ch’iqiyir notepad ukaxa qhana, ch’usa qillqañataki wakicht’ata espacio churani, wali sumawa jach’a llank’añanakampi.",
      },
      {
        title: "200% jach’aptayaña (Zoom)",
        desc: "Aka online notepad ukaxa 200% ukhamaru jach’aptayañapataki jayti, ukhamata nayra jani usuchjañapataki jach’a pacha qillqaña jan ukaxa jisk’a qillqampi llank’aña.",
      },
      {
        title: "Uñacht’awinaka, tabla, auto machaqt’ayaña fecha, HTML apsuña",
        desc: "Uñacht’awinaka ukhamaraki tabla ukanaka mantayasa, fecha ukanaka auto machaqt’ayasa ukhamaraki HTML formato ukaru apsusa, aka notepad ukaxa mä sapa qillqaña edición ukat sipana juk’ampiwa.",
      },
      {
        title: "H1 ukat H6 ukakama titulonaka",
        desc: "Qillqt’atanakamxa H1 ukat H6 ukakama jach’a titulonakampi wakicht’aña, ukhamata aka notepad ukaxa suma documentu editor ukhamäni browser ukan.",
      },
      {
        title: "Sapa kasta letra estilo",
        desc: "Walja letra estilos ukanakamp ajlliña, ukhamata qillqaña experienciamxa personalizaña ukhamaraki juk’amp suma uñjaña, profesional ukhamäñapataki.",
      },
      {
        title: "Qillqata saminaka mayjt’ayaña",
        desc: "Aka online notepad ukaxa wakinaka jach’aptayaña ukhamaraki suma uñjaña churaña, qillqata saminaka mayjt’ayasa, ukaxa wali ch’ama format jakhüwiwa qillqiriru.",
      },
      {
        title: "AI ch’amani aru tuqit qillqaru tukuyata jan pantjasita",
        desc: "Arunakam arsuña ukat uñjaña kunjamsa pantalla ukan chiqapa uñstaski. Aka notepad ukana AI ch’amani aru-tuqit qillqaru tukuyata ukaxa jank’akiwa arumaxa qillqaru tukuyi, jan pantjasita, ukhamata walja pacha qhispiyaña.",
      },
      {
        title: "Sign-in tukuyatat mä link uñt’ayasiña",
        desc: "Sign-in tukuyatatxa, jiwasan notepad ukaxa sapa qillqata layku mä jach’a link uñt’ayi, ukhamata irnaqaña ukhamaraki jank’a churaña URL copiña ukhamaki.",
      },
      {
        title: "Historia imañataki cuenta luraña",
        desc: "Aka notepad ukan mä free cuenta luraña, ukhamata qillqt’atanaka historia jist’araña, ukhamata taqi kunatï qillqkta ukampi mayampi uñakipaña, apsuña ukhamaraki apnaqaña mä lugar ukana.",
      },
    ],
    outro:
      "Aka ukanakampi chikachasiñat sipana walja yaqha especial funciónanaka utji, ukanakaxa jani qullqimpi apnaqasiñawa.",
  },
  az: {
    title: "Onlayn Notepadın Əsas Xüsusiyyətləri",
    features: [
      {
        title: "Avtomatik Onlayn Yadda Saxlama",
        desc: "Onlayn notepadımız yazdığınız zaman işinizi avtomatik olaraq yadda saxlayır, buna görə brauzeriniz çökərsə və ya təsadüfən tabı bağlasanız belə, heç bir sözü itirmirsiniz.",
      },
      {
        title: "TXT və PDF formatlarında yükləmə",
        desc: "Notepadımızla qeydlərinizi dərhal təmiz TXT və ya PDF faylı kimi ixrac edə bilərsiniz, bu da işinizi saxlamağı, çap etməyi və ya oflayn paylaşmağı asanlaşdırır.",
      },
      {
        title: "Tam Ekran",
        desc: "Tam ekran rejiminə keçin və bu diqqət yayındırmayan notepad sizə fokuslanmış yazı üçün kənardan kənara qədər təmiz bir yazı sahəsi təqdim etsin.",
      },
      {
        title: "200% Böyütmə Xüsusiyyəti",
        desc: "Bu onlayn notepad mətnləri 200%-ə qədər böyütməyə imkan verir, bu da uzun yazı sessiyaları və ya kiçik mətnlə işləyərkən gözlər üçün daha rahatdır.",
      },
      {
        title: "Şəkil, Cədvəl əlavə et, tarixləri avtomatik yenilə, HTML ixrac et",
        desc: "Şəkillərin və strukturlaşdırılmış cədvəllərin əlavə edilməsindən tutmuş tarixlərin avtomatik yenilənməsi və məzmunun HTML kimi ixracına qədər bu notepad sadə mətn redaktəsindən çox daha irəlidir.",
      },
      {
        title: "H1-dən H6-ya qədər başlıqlar",
        desc: "Məzmununuzu H1-dən H6-ya qədər tam başlıq iyerarxiyası ilə təşkil edin, bu da notepadınıza brauzerdə peşəkar sənəd redaktoru strukturu verir.",
      },
      {
        title: "Müxtəlif Şrift Növləri",
        desc: "Yazı təcrübənizi fərdiləşdirmək və sənədlərinizi daha oxunaqlı, ifadəli və ya peşəkar etmək üçün müxtəlif şrift növlərindən seçim edin.",
      },
      {
        title: "Mətn Rəngini Dəyişdir",
        desc: "Bu onlayn notepad əsas məqamları vurğulamağa və mətn rəngini dəyişərək vizual aydınlıq əlavə etməyə imkan verir, bu da hər yazıçı üçün sadə, lakin güclü formatlama vasitəsidir.",
      },
      {
        title: "Süni İntellektlə Səsdən Mətnə Səhvsiz Çevirmə",
        desc: "Fikirlərinizi danışın və onların ekranda yüksək dəqiqliklə göründüyünü izləyin. Bu notepadın süni intellektlə işləyən səsdən mətnə funksiyası səsinizi dərhal təmiz və səhvsiz mətnə çevirir, bu da sizə çox vaxt qazandırır.",
      },
      {
        title: "Girişdən sonra paylaşıla bilən link yaratmaq",
        desc: "Giriş etdikdən sonra notepadımız hər hansı qeydi paylaşmaq üçün unikal link yaratmağa imkan verir, bu da əməkdaşlığı və sürətli paylaşımı URL kopyalamaq qədər asan edir.",
      },
      {
        title: "Tarixi saxlamaq üçün hesab yaradın",
        desc: "Bu notepadda pulsuz hesab yaradaraq qeyd tarixçənizi aktivləşdirin, beləliklə yazdığınız hər şeyi bir yerdə yenidən baxa, bərpa edə və idarə edə bilərsiniz.",
      },
    ],
    outro:
      "Bunlardan əlavə, istifadə edə biləcəyiniz və pulsuz olaraq zövq ala biləcəyiniz bir çox digər unikal xüsusiyyətlər də var.",
  },
  eu: {
    title: "Online Notepad-aren Ezaugarri Nagusiak",
    features: [
      {
        title: "Gordetze Automatikoa Online",
        desc: "Gure online notepad-ak automatikoki gordetzen du zure lana idazten duzun bitartean, beraz ez duzu inoiz hitz bakar bat ere galduko, nahiz eta zure nabigatzailea itxi edo tab-a ustekabean itxi.",
      },
      {
        title: "TXT eta PDF formatuetan deskargatu",
        desc: "Gure notepad-arekin, zure oharrak berehala TXT edo PDF fitxategi garbi gisa esporta ditzakezu, eta horrek erraz egiten du gordetzea, inprimatzea edo lineaz kanpo partekatzea.",
      },
      {
        title: "Pantaila Osoko Modua",
        desc: "Aldatu pantaila osoko modura eta utzi distrakziorik gabeko notepad honek idazteko espazio garbi eta ertzetik ertzera ematen, idazketa saio kontzentratuetarako ezin hobea.",
      },
      {
        title: "%200 Zoom Eginbidea",
        desc: "Online notepad honek testua %200 arte handitzeko aukera ematen dizu, begientzat erosoagoa bihurtuz idazketa saio luzeetan edo pantaila guztietan testu txikiarekin lan egitean.",
      },
      {
        title: "Irudiak, Taulak Txertatu, Datak Automatikoki Eguneratu, HTML Esportatu",
        desc: "Irudiak eta egitura duten taulak txertatzetik hasi eta datak automatikoki eguneratzera eta zure edukia HTML gisa esportatzera arte, notepad hau testu-editore arrunta baino askoz harago doa.",
      },
      {
        title: "H1etik H6ra arteko goiburuak",
        desc: "Antolatu zure edukia H1etik H6ra arteko goiburu hierarkia oso batekin, eta horrek zure notepad-ari dokumentu editore profesional baten egitura ematen dio nabigatzailean bertan.",
      },
      {
        title: "Letra estilo desberdinak",
        desc: "Aukeratu letra estilo desberdinen artean zure idazketa esperientzia pertsonalizatzeko eta zure dokumentuak irakurgarriagoak, adierazkorragoak edo profesionalagoak egiteko.",
      },
      {
        title: "Testuaren Kolorea Aldatu",
        desc: "Online notepad honek puntu garrantzitsuak nabarmendu eta argitasun bisuala gehitzeko aukera ematen du testuaren kolorea aldatuz, edozein idazlerentzat tresna sinple baina indartsua.",
      },
      {
        title: "AI bidezko ahots-etik-testura, akatsik gabe",
        desc: "Esan zure pentsamenduak eta ikusi pantailan zehaztasun handiz agertzen direla. Notepad honen AI bidezko ahots-etik-testura funtzioak berehala bihurtzen du zure ahotsa testu garbi eta akatsik gabekoa, denbora asko aurrezten lagunduz.",
      },
      {
        title: "Saioa hasi ondoren partekatzeko esteka sortu",
        desc: "Saioa hasi ondoren, gure notepad-ak edozein oharrentzat partekatzeko esteka bakarra sortzeko aukera ematen du, lankidetza eta partekatze azkarra URL bat kopiatzea bezain erraza bihurtuz.",
      },
      {
        title: "Sortu kontua historia gordetzeko",
        desc: "Sortu doako kontu bat notepad honetan oharren historia aktibatzeko, idatzi duzun guztia berrikusi, berreskuratu eta leku bakarrean kudeatu ahal izateko.",
      },
    ],
    outro:
      "Horiez gain, doan erabil eta goza ditzakezun beste ezaugarri berezi asko ere badaude.",
  },
  bn: {
    title: "অনলাইন নোটপ্যাডের প্রধান বৈশিষ্ট্যসমূহ",
    features: [
      {
        title: "স্বয়ংক্রিয় অনলাইন সংরক্ষণ",
        desc: "আমাদের অনলাইন নোটপ্যাড আপনি টাইপ করার সাথে সাথে স্বয়ংক্রিয়ভাবে আপনার কাজ সংরক্ষণ করে, তাই ব্রাউজার ক্র্যাশ করলেও বা ভুল করে ট্যাব বন্ধ করে দিলেও আপনি একটি শব্দও হারাবেন না।",
      },
      {
        title: "TXT এবং PDF ফরম্যাটে ডাউনলোড",
        desc: "আমাদের নোটপ্যাডের মাধ্যমে আপনি আপনার নোটগুলো তাৎক্ষণিকভাবে পরিষ্কার TXT বা PDF ফাইল হিসেবে এক্সপোর্ট করতে পারেন, যা অফলাইনে সংরক্ষণ, প্রিন্ট বা শেয়ার করা সহজ করে।",
      },
      {
        title: "ফুল স্ক্রিন",
        desc: "ফুল-স্ক্রিন মোডে যান এবং এই ডিসট্রাকশন-ফ্রি নোটপ্যাডকে একটি পরিষ্কার, প্রান্ত-থেকে-প্রান্ত লেখার ক্যানভাস হিসেবে ব্যবহার করুন, যা মনোযোগী লেখার জন্য উপযুক্ত।",
      },
      {
        title: "২০০% জুম ফিচার",
        desc: "এই অনলাইন নোটপ্যাড আপনাকে ২০০% পর্যন্ত জুম করার সুযোগ দেয়, যা দীর্ঘ সময় লেখার সময় বা ছোট টেক্সট নিয়ে কাজ করার সময় চোখের জন্য আরও আরামদায়ক করে তোলে।",
      },
      {
        title: "ছবি, টেবিল যুক্ত করুন, তারিখ স্বয়ংক্রিয় আপডেট, HTML এক্সপোর্ট",
        desc: "ছবি ও কাঠামোবদ্ধ টেবিল যোগ করা থেকে শুরু করে তারিখ স্বয়ংক্রিয়ভাবে আপডেট করা এবং আপনার কনটেন্ট HTML হিসেবে এক্সপোর্ট করা পর্যন্ত—এই নোটপ্যাড সাধারণ টেক্সট এডিটিং-এর অনেক বাইরে যায়।",
      },
      {
        title: "H1 থেকে H6 পর্যন্ত হেডিং",
        desc: "আপনার কনটেন্টকে H1 থেকে H6 পর্যন্ত সম্পূর্ণ হেডিং হায়ারার্কি দিয়ে সাজান, যা এই নোটপ্যাডকে ব্রাউজারের মধ্যেই একটি প্রফেশনাল ডকুমেন্ট এডিটরের কাঠামো দেয়।",
      },
      {
        title: "বিভিন্ন ফন্ট স্টাইল",
        desc: "আপনার লেখার অভিজ্ঞতাকে ব্যক্তিগত করতে বিভিন্ন ফন্ট স্টাইল থেকে বেছে নিন এবং আপনার ডকুমেন্টকে আরও পড়ার উপযোগী, অভিব্যক্তিপূর্ণ বা প্রফেশনাল করুন।",
      },
      {
        title: "টেক্সটের রঙ পরিবর্তন",
        desc: "এই অনলাইন নোটপ্যাড আপনাকে গুরুত্বপূর্ণ পয়েন্ট হাইলাইট করতে এবং টেক্সটের রঙ পরিবর্তনের মাধ্যমে ভিজ্যুয়াল ক্ল্যারিটি বাড়াতে সাহায্য করে, যা যেকোনো লেখকের জন্য একটি সহজ কিন্তু শক্তিশালী ফরম্যাটিং টুল।",
      },
      {
        title: "কৃত্রিম বুদ্ধিমত্তা-চালিত স্পিচ টু টেক্সট (ত্রুটিহীন)",
        desc: "আপনার চিন্তাগুলো বলুন এবং দেখুন সেগুলো উচ্চ নির্ভুলতায় স্ক্রিনে প্রদর্শিত হচ্ছে। এই নোটপ্যাডের AI-চালিত স্পিচ-টু-টেক্সট ফিচার আপনার কণ্ঠকে তাৎক্ষণিকভাবে পরিষ্কার ও ত্রুটিমুক্ত টেক্সটে রূপান্তর করে, ফলে আপনার অনেক সময় বাঁচে।",
      },
      {
        title: "সাইন-ইনের পর শেয়ারযোগ্য লিংক তৈরি করুন",
        desc: "সাইন-ইন করার পর আমাদের নোটপ্যাড আপনাকে যেকোনো নোটের জন্য একটি ইউনিক শেয়ারযোগ্য লিংক তৈরি করতে দেয়, যা সহযোগিতা এবং দ্রুত শেয়ারিংকে একটি URL কপি করার মতো সহজ করে তোলে।",
      },
      {
        title: "ইতিহাস সংরক্ষণের জন্য অ্যাকাউন্ট তৈরি করুন",
        desc: "এই নোটপ্যাডে একটি ফ্রি অ্যাকাউন্ট তৈরি করুন যাতে নোট ইতিহাস আনলক হয়, ফলে আপনি আপনার লেখা সবকিছু এক জায়গায় ফিরে দেখতে, পুনরুদ্ধার করতে এবং পরিচালনা করতে পারবেন।",
      },
    ],
    outro:
      "এছাড়াও আরও অনেক ইউনিক ফিচার আছে যা আপনি সম্পূর্ণ বিনামূল্যে ব্যবহার করতে এবং উপভোগ করতে পারেন।",
  },
  bs: {
    title: "Glavne karakteristike online notepada",
    features: [
      {
        title: "Automatsko online spremanje",
        desc: "Naš online notepad automatski sprema vaš rad dok kucate, tako da nikada nećete izgubiti nijednu riječ, čak i ako se vaš browser sruši ili slučajno zatvorite tab.",
      },
      {
        title: "Preuzimanje u TXT i PDF formatima",
        desc: "Pomoću našeg notepada možete odmah izvesti svoje bilješke kao čist TXT ili PDF fajl, što olakšava spremanje, štampanje ili dijeljenje rada offline.",
      },
      {
        title: "Cijeli ekran",
        desc: "Prebacite se na režim cijelog ekrana i koristite ovaj notepad bez ometanja koji vam pruža čist prostor za pisanje od ivice do ivice, savršen za fokusirane sesije pisanja.",
      },
      {
        title: "200% uvećanje",
        desc: "Ovaj online notepad omogućava uvećanje do 200%, što olakšava čitanje očima tokom dugih sesija pisanja ili rada s malim tekstom na bilo kojem ekranu.",
      },
      {
        title: "Umetanje slika, tabela, automatsko ažuriranje datuma, izvoz HTML-a",
        desc: "Od umetanja slika i strukturiranih tabela do automatskog ažuriranja datuma i izvoza sadržaja u HTML, ovaj notepad ide mnogo dalje od osnovnog uređivanja teksta.",
      },
      {
        title: "Naslovi od H1 do H6",
        desc: "Organizujte svoj sadržaj pomoću potpune hijerarhije naslova od H1 do H6, što ovom notepadu daje strukturu profesionalnog uređivača dokumenata direktno u browseru.",
      },
      {
        title: "Različiti stilovi fontova",
        desc: "Izaberite između različitih stilova fontova kako biste personalizovali svoje iskustvo pisanja i učinili dokumente čitljivijim, izražajnijim ili profesionalnijim.",
      },
      {
        title: "Promjena boje teksta",
        desc: "Ovaj online notepad vam omogućava da istaknete važne tačke i dodate vizuelnu jasnoću promjenom boje teksta, što je jednostavan ali moćan alat za formatiranje za svakog pisca.",
      },
      {
        title: "AI pokretano pretvaranje govora u tekst bez grešaka",
        desc: "Izgovorite svoje misli i gledajte kako se pojavljuju na ekranu s visokom preciznošću. AI funkcija pretvaranja govora u tekst ovog notepada trenutno pretvara vaš glas u čist i tekst bez grešaka, čime štedite mnogo vremena.",
      },
      {
        title: "Generisanje dijeljivog linka nakon prijave",
        desc: "Nakon prijave, naš notepad vam omogućava da generišete jedinstveni link za dijeljenje bilo koje bilješke, što saradnju i brzo dijeljenje čini jednostavnim kao kopiranje URL-a.",
      },
      {
        title: "Kreirajte račun za čuvanje historije",
        desc: "Kreirajte besplatan račun na ovom notepadu kako biste otključali historiju bilješki, tako da možete pregledati, vratiti i upravljati svime što ste ikada napisali na jednom mjestu.",
      },
    ],
    outro:
      "Osim ovih, postoji mnogo drugih jedinstvenih funkcija koje možete koristiti i uživati besplatno.",
  },
  bg: {
    title: "Основни характеристики на онлайн бележника",
    features: [
      {
        title: "Автоматично онлайн запазване",
        desc: "Нашият онлайн бележник автоматично запазва работата ви, докато пишете, така че никога няма да загубите нито една дума, дори ако браузърът ви се срине или случайно затворите таба.",
      },
      {
        title: "Изтегляне във формат TXT и PDF",
        desc: "С нашия бележник можете незабавно да експортирате бележките си като чист TXT или PDF файл, което улеснява запазването, печатането или споделянето им офлайн.",
      },
      {
        title: "Цял екран",
        desc: "Превключете към режим на цял екран и използвайте този бележник без разсейване, който ви предоставя чисто пространство за писане от край до край, идеално за фокусирани писателски сесии.",
      },
      {
        title: "200% увеличение",
        desc: "Този онлайн бележник ви позволява да увеличавате до 200%, което прави текста по-лесен за четене при дълги писателски сесии или при работа с малък текст на всеки екран.",
      },
      {
        title: "Вмъкване на изображения, таблици, автоматично обновяване на дати, експортиране в HTML",
        desc: "От вмъкване на изображения и структурирани таблици до автоматично обновяване на дати и експортиране на съдържанието като HTML, този бележник е много повече от основен текстов редактор.",
      },
      {
        title: "Заглавия от H1 до H6",
        desc: "Организирайте съдържанието си с пълна йерархия от заглавия от H1 до H6, като по този начин този бележник придобива структура на професионален документен редактор директно в браузъра.",
      },
      {
        title: "Различни стилове на шрифтове",
        desc: "Изберете от разнообразие от стилове на шрифтове, за да персонализирате преживяването си при писане и да направите документите си по-четими, изразителни или професионални.",
      },
      {
        title: "Промяна на цвета на текста",
        desc: "Този онлайн бележник ви позволява да подчертавате важни точки и да добавяте визуална яснота чрез промяна на цвета на текста – прост, но мощен инструмент за форматиране за всеки писател.",
      },
      {
        title: "Изкуствен интелект за преобразуване на говор в текст без грешки",
        desc: "Кажете мислите си и ги вижте как се появяват на екрана с висока точност. Функцията за преобразуване на говор в текст, задвижвана от изкуствен интелект, незабавно превръща гласа ви в чист и безгрешен текст, като ви спестява много време.",
      },
      {
        title: "Генериране на споделяща се връзка след вход",
        desc: "След като влезете, нашият бележник ви позволява да генерирате уникална споделяема връзка за всяка бележка, което прави сътрудничеството и бързото споделяне толкова лесно, колкото копиране на URL адрес.",
      },
      {
        title: "Създаване на акаунт за запис на история",
        desc: "Създайте безплатен акаунт в този бележник, за да отключите историята на бележките, така че да можете да преглеждате, възстановявате и управлявате всичко, което сте писали, на едно място.",
      },
    ],
    outro:
      "Освен тези, има много други уникални функции, които можете да използвате и да се наслаждавате безплатно.",
  },
  my: {
    title: "အွန်လိုင်း Notepad ၏ အဓိက လုပ်ဆောင်ချက်များ",
    features: [
      {
        title: "အလိုအလျောက် အွန်လိုင်း သိမ်းဆည်းခြင်း",
        desc: "ကျွန်ုပ်တို့၏ အွန်လိုင်း Notepad သည် သင်ရိုက်နေစဉ်အတွင်း သင့်အလုပ်ကို အလိုအလျောက် သိမ်းဆည်းပေးသည်၊ ထို့ကြောင့် browser ပျက်သွားခြင်း သို့မဟုတ် tab ကို မတော်တဆ ပိတ်မိခြင်းဖြစ်သော်လည်း စာလုံးတစ်လုံးမျှ မဆုံးရှုံးပါ။",
      },
      {
        title: "TXT နှင့် PDF ဖိုင်အမျိုးအစားများဖြင့် ဒေါင်းလုဒ်လုပ်ခြင်း",
        desc: "ကျွန်ုပ်တို့၏ Notepad ဖြင့် သင့်မှတ်စုများကို TXT သို့မဟုတ် PDF ဖိုင်အဖြစ် ချက်ချင်း export လုပ်နိုင်ပြီး သိမ်းဆည်းခြင်း၊ ပုံနှိပ်ခြင်း သို့မဟုတ် အင်တာနက်မလိုဘဲ မျှဝေခြင်းကို လွယ်ကူစေသည်။",
      },
      {
        title: "မျက်နှာပြင်အပြည့်",
        desc: "Full-screen mode သို့ ပြောင်းပြီး distraction မရှိသော Notepad ကို အသုံးပြုကာ အစွန်းမှအစွန်းထိ သန့်ရှင်းသော စာရေးကွက်ကို ရရှိစေပြီး အာရုံစိုက်ရေးသားမှုအတွက် အထူးသင့်လျော်သည်။",
      },
      {
        title: "200% ချဲ့ကြည့်နိုင်သော လုပ်ဆောင်ချက်",
        desc: "ဤအွန်လိုင်း Notepad သည် စာသားကို 200% အထိ ချဲ့ကြည့်နိုင်စေပြီး၊ ရှည်လျားသော စာရေးချိန်များ သို့မဟုတ် မျက်နှာပြင်ပေါ်ရှိ စာလုံးသေးများနှင့် အလုပ်လုပ်ရာတွင် မျက်စိအတွက် ပိုမိုသက်သာစေသည်။",
      },
      {
        title: "ပုံများ၊ ဇယားများ ထည့်ခြင်း၊ ရက်စွဲအလိုအလျောက် အပ်ဒိတ်လုပ်ခြင်း၊ HTML အဖြစ် export လုပ်ခြင်း",
        desc: "ပုံများနှင့် စနစ်တကျထားသော ဇယားများ ထည့်သွင်းခြင်းမှ စ၍ ရက်စွဲများကို အလိုအလျောက် အပ်ဒိတ်လုပ်ခြင်းနှင့် သင့်အကြောင်းအရာကို HTML အဖြစ် export လုပ်ခြင်းအထိ၊ ဤ Notepad သည် အခြေခံစာသားတည်းဖြတ်မှုထက် အများကြီးပိုသော လုပ်ဆောင်ချက်များပါရှိသည်။",
      },
      {
        title: "H1 မှ H6 အထိ ခေါင်းစဉ်များ",
        desc: "သင့်အကြောင်းအရာကို H1 မှ H6 အထိ ခေါင်းစဉ်အဆင့်စနစ်အပြည့်အစုံဖြင့် စီစဉ်နိုင်ပြီး၊ ဤ Notepad ကို browser အတွင်းရှိ professional document editor တစ်ခုကဲ့သို့ ဖြစ်စေသည်။",
      },
      {
        title: "ဖောင့်ပုံစံအမျိုးမျိုး",
        desc: "စာရေးအတွေ့အကြုံကို ကိုယ်ပိုင်စိတ်ကြိုက်ပြုလုပ်ရန် ဖောင့်ပုံစံအမျိုးမျိုးမှ ရွေးချယ်နိုင်ပြီး သင့်စာရွက်စာတမ်းများကို ပိုမိုဖတ်ရှုရလွယ်ကူ၊ ထင်ရှားပြီး ပရော်ဖက်ရှင်နယ်ဖြစ်စေသည်။",
      },
      {
        title: "စာသားအရောင် ပြောင်းလဲခြင်း",
        desc: "ဤအွန်လိုင်း Notepad သည် အရေးကြီးသောအချက်များကို ထင်ရှားစေပြီး စာသားအရောင်ပြောင်းလဲခြင်းဖြင့် အမြင်ပိုင်းရှင်းလင်းမှုကို တိုးစေသည်၊ စာရေးသူတိုင်းအတွက် ရိုးရှင်းသော်လည်း အစွမ်းထက်သော formatting tool တစ်ခုဖြစ်သည်။",
      },
      {
        title: "အမှားမရှိ AI အသံမှ စာသားပြောင်းလဲမှု",
        desc: "သင့်အတွေးများကို ပြောဆိုပြီး ၎င်းတို့ကို မျက်နှာပြင်ပေါ်တွင် တိကျမှုမြင့်မားစွာ ပေါ်လာသည်ကို ကြည့်ပါ။ ဤ Notepad ၏ AI အခြေပြု အသံမှ စာသားပြောင်းလဲမှုသည် သင့်အသံကို ချက်ချင်း သန့်ရှင်းပြီး အမှားမရှိသော စာသားအဖြစ် ပြောင်းလဲပေးပြီး အချိန်များစွာ ချွေတာပေးသည်။",
      },
      {
        title: "ဝင်ရောက်ပြီးနောက် မျှဝေနိုင်သော လင့်ခ် ဖန်တီးခြင်း",
        desc: "အကောင့်ဝင်ပြီးနောက် ကျွန်ုပ်တို့၏ Notepad သည် မည်သည့်မှတ်စုအတွက်မဆို ထူးခြားသော မျှဝေနိုင်သည့် လင့်ခ်ကို ဖန်တီးနိုင်စေပြီး၊ ပူးပေါင်းလုပ်ဆောင်ခြင်းနှင့် လျင်မြန်စွာ မျှဝေခြင်းကို URL ကူးယူသကဲ့သို့ လွယ်ကူစေသည်။",
      },
      {
        title: "မှတ်တမ်းသိမ်းရန် အကောင့်ဖန်တီးခြင်း",
        desc: "ဤ Notepad တွင် အခမဲ့အကောင့်တစ်ခု ဖန်တီးပြီး မှတ်စုမှတ်တမ်းကို အသုံးပြုနိုင်စေပါသည်၊ ထို့ကြောင့် သင်ရေးသားခဲ့သမျှအားလုံးကို တစ်နေရာတည်းတွင် ပြန်လည်ကြည့်ရှု၊ ပြန်လည်ရယူနှင့် စီမံခန့်ခွဲနိုင်သည်။",
      },
    ],
    outro:
      "ဤအရာများအပြင် သင်အသုံးပြုနိုင်ပြီး အခမဲ့ခံစားနိုင်သော ထူးခြားသော အင်္ဂါရပ်များစွာလည်း ရှိပါသည်။",
  },
  ca: {
    title: "Característiques principals del bloc de notes en línia",
    features: [
      {
        title: "Desament automàtic en línia",
        desc: "El nostre bloc de notes en línia desa automàticament la teva feina mentre escrius, de manera que no perdràs mai ni una sola paraula, fins i tot si el navegador falla o tanques la pestanya per error.",
      },
      {
        title: "Descarrega en formats TXT i PDF",
        desc: "Amb el nostre bloc de notes, pots exportar les teves notes a l’instant com un fitxer TXT o PDF net, cosa que facilita desar-les, imprimir-les o compartir-les sense connexió.",
      },
      {
        title: "Pantalla completa",
        desc: "Canvia al mode de pantalla completa i utilitza aquest bloc de notes sense distraccions, que et proporciona un espai d’escriptura net de punta a punta, perfecte per a sessions d’escriptura concentrada.",
      },
      {
        title: "Funció de zoom del 200%",
        desc: "Aquest bloc de notes en línia et permet ampliar fins al 200%, fent que sigui més còmode per als ulls durant sessions llargues d’escriptura o quan treballes amb text petit a qualsevol pantalla.",
      },
      {
        title: "Insereix imatges, taules, actualització automàtica de dates i exportació HTML",
        desc: "Des d’inserir imatges i taules estructurades fins a l’actualització automàtica de dates i l’exportació del contingut com a HTML, aquest bloc de notes va molt més enllà de l’edició bàsica de text.",
      },
      {
        title: "Encapçalaments de H1 a H6",
        desc: "Organitza el teu contingut amb una jerarquia completa d’encapçalaments de H1 a H6, donant a aquest bloc de notes l’estructura d’un editor de documents professional directament al navegador.",
      },
      {
        title: "Diferents estils de lletra",
        desc: "Tria entre una varietat d’estils de lletra per personalitzar la teva experiència d’escriptura i fer que els teus documents siguin més llegibles, expressius o professionals.",
      },
      {
        title: "Canviar el color del text",
        desc: "Aquest bloc de notes en línia et permet destacar punts clau i afegir claredat visual canviant el color del text, una eina de format senzilla però potent per a qualsevol escriptor.",
      },
      {
        title: "Conversió de veu a text amb intel·ligència artificial sense errors",
        desc: "Expressa els teus pensaments i mira com apareixen a la pantalla amb alta precisió. La funció de conversió de veu a text amb intel·ligència artificial d’aquest bloc de notes transforma instantàniament la teva veu en text net i sense errors, estalviant-te molt de temps.",
      },
      {
        title: "Generar enllaç compartible després d’iniciar sessió",
        desc: "Un cop iniciada la sessió, el nostre bloc de notes et permet generar un enllaç únic compartible per a qualsevol nota, fent que la col·laboració i la compartició ràpida siguin tan senzilles com copiar una URL.",
      },
      {
        title: "Crear un compte per desar l’historial",
        desc: "Crea un compte gratuït en aquest bloc de notes per desbloquejar l’historial de notes, de manera que puguis revisar, recuperar i gestionar tot el que has escrit en un sol lloc.",
      },
    ],
    outro:
      "A més d’aquestes, hi ha moltes altres funcions úniques que pots utilitzar i gaudir gratuïtament.",
  },
  ceb: {
    title: "Pangunang mga Feature sa Online Notepad",
    features: [
      {
        title: "Awtomatikong Online Save",
        desc: "Ang among online notepad awtomatikong nag-save sa imong trabaho samtang nag-type ka, busa dili ka gayod makawala bisan usa ka pulong, bisan pa kung mo-crash ang imong browser o masayop nimo nga masirad-an ang tab.",
      },
      {
        title: "Pag-download sa TXT ug PDF nga mga format",
        desc: "Pinaagi sa among notepad, mahimo nimo dayon i-export ang imong mga nota isip limpyo nga TXT o PDF file, nga makapasayon sa pag-save, pag-print, o pag-share sa imong trabaho offline.",
      },
      {
        title: "Full Screen Mode",
        desc: "Pagbalhin sa full-screen mode ug gamita kini nga distraction-free notepad nga naghatag og limpyo nga writing space gikan sa kilid hangtod sa kilid, perpekto para sa focused nga pagsulat.",
      },
      {
        title: "200% Zoom Feature",
        desc: "Kining online notepad nagtugot nimo nga mag-zoom hangtod 200%, nga mas komportable sa mata para sa dugay nga pagsulat o kung nagtrabaho ka sa gagmay nga teksto sa bisan unsang screen.",
      },
      {
        title: "Pag-insert og mga imahe, table, auto-update sa petsa, ug HTML export",
        desc: "Gikan sa pag-insert og mga imahe ug structured nga mga table hangtod sa awtomatikong pag-update sa petsa ug pag-export sa imong content isip HTML, kini nga notepad labaw pa ka advanced kaysa basic text editing.",
      },
      {
        title: "Mga Heading gikan H1 hangtod H6",
        desc: "I-organize ang imong content gamit ang kompletong heading hierarchy gikan H1 hangtod H6, nga naghatag sa notepad og porma sa usa ka propesyonal nga document editor sa sulod mismo sa browser.",
      },
      {
        title: "Lain-laing Font Styles",
        desc: "Pilia gikan sa lain-laing font styles aron i-personalize ang imong writing experience ug himoon nga mas readable, expressive, o professional ang imong mga dokumento.",
      },
      {
        title: "Pag-usab sa Kolor sa Teksto",
        desc: "Kining online notepad nagtugot nimo sa pag-highlight sa importanteng puntos ug pagdugang og visual clarity pinaagi sa pag-usab sa kolor sa teksto, usa ka simple pero kusgan nga formatting tool para sa bisan kinsang writer.",
      },
      {
        title: "AI-powered Speech-to-Text nga Walay Sayop",
        desc: "Isulti ang imong mga hunahuna ug tan-awa nga makita kini sa screen nga adunay taas nga katukma. Ang AI-powered speech-to-text feature sa kini nga notepad dayon nag-convert sa imong tingog ngadto sa limpyo ug walay sayop nga teksto, nga makaluwas ka og daghang oras.",
      },
      {
        title: "Paghimo og Shareable Link Human sa Sign-In",
        desc: "Human ka mag-sign in, ang among notepad nagtugot nimo sa paghimo og unique shareable link para sa bisan unsang nota, nga naghimo sa collaboration ug dali nga pag-share sama lang sa pagkopya sa URL.",
      },
      {
        title: "Paghimo og Account aron I-record ang History",
        desc: "Paghimo og libre nga account sa kini nga notepad aron ma-unlock ang note history, aron mahimo nimong balikan, i-recover, ug i-manage ang tanan nimong gisulat sa usa ka lugar.",
      },
    ],
    outro:
      "Gawas niini, daghan pa kaayong laing talagsaon nga features nga mahimo nimong gamiton ug ma-enjoy nga libre.",
  },
  zh: {
    title: "在线记事本的主要功能",
    features: [
      {
        title: "自动在线保存",
        desc: "我们的在线记事本会在你输入的过程中自动保存内容，因此即使浏览器崩溃或你不小心关闭标签页，也不会丢失任何一个字。",
      },
      {
        title: "下载 TXT 和 PDF 格式",
        desc: "使用我们的记事本，你可以立即将笔记导出为干净的 TXT 或 PDF 文件，方便保存、打印或离线分享你的内容。",
      },
      {
        title: "全屏模式",
        desc: "切换到全屏模式，让这款无干扰记事本为你提供干净、全屏的写作画布，非常适合专注写作。",
      },
      {
        title: "200% 缩放功能",
        desc: "这款在线记事本支持最高 200% 缩放，让长时间写作或处理小字体内容时更加护眼舒适。",
      },
      {
        title: "插入图片、表格、自动更新日期、导出 HTML",
        desc: "从插入图片和结构化表格，到自动更新日期以及将内容导出为 HTML，这款记事本远远超越了基础文本编辑功能。",
      },
      {
        title: "H1 到 H6 标题",
        desc: "使用从 H1 到 H6 的完整标题层级来组织内容，让这款记事本在浏览器中也具备专业文档编辑器的结构。",
      },
      {
        title: "多种字体样式",
        desc: "你可以选择多种字体样式来个性化写作体验，让文档更易读、更有表现力或更专业。",
      },
      {
        title: "更改文本颜色",
        desc: "这款在线记事本允许你通过更改文本颜色来突出重点并增强视觉清晰度，是任何写作者都能使用的简单但强大的格式工具。",
      },
      {
        title: "AI 语音转文字（无错误）",
        desc: "说出你的想法，它们会以高准确度显示在屏幕上。这款记事本的 AI 语音转文字功能可将你的语音即时转换为干净、无错误的文本，为你节省大量时间。",
      },
      {
        title: "登录后生成可分享链接",
        desc: "登录后，我们的记事本允许你为任何笔记生成唯一的可分享链接，让协作和快速分享变得像复制 URL 一样简单。",
      },
      {
        title: "创建账户以记录历史",
        desc: "在这款记事本中创建免费账户即可解锁笔记历史，让你可以在一个地方查看、恢复并管理你曾经写过的所有内容。",
      },
    ],
    outro: "除了这些之外，还有许多其他独特功能可以免费使用和享受。",
  },
  hr: {
    title: "Glavne značajke online bilježnice",
    features: [
      {
        title: "Automatsko online spremanje",
        desc: "Naša online bilježnica automatski sprema vaš rad dok tipkate, tako da nikada nećete izgubiti niti jednu riječ, čak i ako se vaš preglednik sruši ili slučajno zatvorite karticu.",
      },
      {
        title: "Preuzimanje u TXT i PDF formatima",
        desc: "Pomoću naše bilježnice možete odmah izvesti svoje bilješke kao čistu TXT ili PDF datoteku, što olakšava spremanje, ispis ili dijeljenje rada izvan mreže.",
      },
      {
        title: "Cijeli zaslon",
        desc: "Prebacite se u način cijelog zaslona i koristite ovu bilježnicu bez ometanja koja vam pruža čist prostor za pisanje od ruba do ruba, savršen za fokusirane sesije pisanja.",
      },
      {
        title: "200% zumiranje",
        desc: "Ova online bilježnica omogućuje zumiranje do 200%, što olakšava čitanje očima tijekom dugih sesija pisanja ili rada s malim tekstom na bilo kojem zaslonu.",
      },
      {
        title: "Umetanje slika, tablica, automatsko ažuriranje datuma, izvoz HTML-a",
        desc: "Od umetanja slika i strukturiranih tablica do automatskog ažuriranja datuma i izvoza sadržaja kao HTML-a, ova bilježnica ide mnogo dalje od osnovnog uređivanja teksta.",
      },
      {
        title: "Naslovi od H1 do H6",
        desc: "Organizirajte svoj sadržaj pomoću potpune hijerarhije naslova od H1 do H6, čime ova bilježnica dobiva strukturu profesionalnog uređivača dokumenata izravno u pregledniku.",
      },
      {
        title: "Različiti stilovi fontova",
        desc: "Odaberite između različitih stilova fontova kako biste personalizirali svoje iskustvo pisanja i učinili svoje dokumente čitljivijima, izražajnijima ili profesionalnijima.",
      },
      {
        title: "Promjena boje teksta",
        desc: "Ova online bilježnica omogućuje vam da istaknete ključne točke i dodate vizualnu jasnoću promjenom boje teksta, što je jednostavan, ali moćan alat za oblikovanje za svakog pisca.",
      },
      {
        title: "AI pretvaranje govora u tekst bez pogrešaka",
        desc: "Izgovorite svoje misli i gledajte kako se pojavljuju na ekranu s visokom točnošću. AI značajka pretvaranja govora u tekst ove bilježnice trenutno pretvara vaš glas u čist i tekst bez pogrešaka, čime štedite mnogo vremena.",
      },
      {
        title: "Generiranje dijeljive poveznice nakon prijave",
        desc: "Nakon prijave, naša bilježnica omogućuje vam stvaranje jedinstvene poveznice za dijeljenje bilo koje bilješke, čineći suradnju i brzo dijeljenje jednostavnim kao kopiranje URL-a.",
      },
      {
        title: "Izrada računa za spremanje povijesti",
        desc: "Kreirajte besplatan račun u ovoj bilježnici kako biste otključali povijest bilješki, tako da možete pregledavati, vraćati i upravljati svime što ste ikada napisali na jednom mjestu.",
      },
    ],
    outro:
      "Osim ovih, postoji mnogo drugih jedinstvenih značajki koje možete koristiti i uživati besplatno.",
  },
  cs: {
    title: "Hlavní funkce online poznámkového bloku",
    features: [
      {
        title: "Automatické online ukládání",
        desc: "Náš online poznámkový blok automaticky ukládá vaši práci během psaní, takže nikdy neztratíte ani jediné slovo, i když váš prohlížeč spadne nebo omylem zavřete kartu.",
      },
      {
        title: "Stažení ve formátech TXT a PDF",
        desc: "S naším poznámkovým blokem můžete své poznámky okamžitě exportovat jako čistý soubor TXT nebo PDF, což usnadňuje ukládání, tisk nebo sdílení offline.",
      },
      {
        title: "Režim celé obrazovky",
        desc: "Přepněte do režimu celé obrazovky a využijte tento nerušený poznámkový blok, který vám poskytne čisté psací plátno od okraje k okraji, ideální pro soustředěné psaní.",
      },
      {
        title: "Funkce 200% přiblížení",
        desc: "Tento online poznámkový blok umožňuje přiblížení až na 200 %, což usnadňuje čtení očím při dlouhém psaní nebo práci s malým textem na jakékoli obrazovce.",
      },
      {
        title: "Vkládání obrázků, tabulek, automatická aktualizace dat, export HTML",
        desc: "Od vkládání obrázků a strukturovaných tabulek až po automatickou aktualizaci dat a export obsahu jako HTML jde tento poznámkový blok daleko za hranice základní úpravy textu.",
      },
      {
        title: "Nadpisy od H1 do H6",
        desc: "Organizujte svůj obsah pomocí kompletní hierarchie nadpisů od H1 do H6, čímž tento poznámkový blok získává strukturu profesionálního editoru dokumentů přímo v prohlížeči.",
      },
      {
        title: "Různé styly písma",
        desc: "Vyberte si z různých stylů písma pro personalizaci vašeho psaní a aby byly vaše dokumenty čitelnější, výraznější nebo profesionálnější.",
      },
      {
        title: "Změna barvy textu",
        desc: "Tento online poznámkový blok vám umožňuje zvýraznit klíčové body a přidat vizuální přehlednost změnou barvy textu, což je jednoduchý, ale silný formátovací nástroj pro každého autora.",
      },
      {
        title: "AI převod řeči na text bez chyb",
        desc: "Vyjádřete své myšlenky a sledujte, jak se zobrazují na obrazovce s vysokou přesností. Funkce převodu řeči na text poháněná umělou inteligencí okamžitě převádí váš hlas na čistý a bezchybný text, což vám šetří spoustu času.",
      },
      {
        title: "Vytvoření sdíleného odkazu po přihlášení",
        desc: "Po přihlášení vám náš poznámkový blok umožňuje vytvořit jedinečný sdílený odkaz pro jakoukoli poznámku, což činí spolupráci a rychlé sdílení stejně snadné jako zkopírování URL adresy.",
      },
      {
        title: "Vytvoření účtu pro ukládání historie",
        desc: "Vytvořte si bezplatný účet v tomto poznámkovém bloku pro odemknutí historie poznámek, abyste mohli znovu zobrazit, obnovit a spravovat vše, co jste kdy napsali, na jednom místě.",
      },
    ],
    outro:
      "Kromě těchto existuje mnoho dalších jedinečných funkcí, které můžete zdarma používat a užívat si je.",
  },
  da: {
    title: "Vigtige funktioner i online notesblok",
    features: [
      {
        title: "Automatisk online gemning",
        desc: "Vores online notesblok gemmer automatisk dit arbejde, mens du skriver, så du aldrig mister et eneste ord, selv hvis din browser går ned, eller du ved et uheld lukker fanen.",
      },
      {
        title: "Download i TXT- og PDF-formater",
        desc: "Med vores notesblok kan du øjeblikkeligt eksportere dine noter som en ren TXT- eller PDF-fil, hvilket gør det nemt at gemme, udskrive eller dele dit arbejde offline.",
      },
      {
        title: "Fuld skærm",
        desc: "Skift til fuldskærmstilstand og brug denne distraktionsfri notesblok, der giver dig et rent skriveområde fra kant til kant, perfekt til fokuserede skrive-sessioner.",
      },
      {
        title: "200% zoomfunktion",
        desc: "Denne online notesblok giver dig mulighed for at zoome op til 200%, hvilket gør det mere behageligt for øjnene ved lange skrive-sessioner eller når du arbejder med lille tekst på enhver skærm.",
      },
      {
        title: "Indsæt billeder, tabeller, automatisk opdatering af datoer, eksport af HTML",
        desc: "Fra indsættelse af billeder og strukturerede tabeller til automatisk opdatering af datoer og eksport af dit indhold som HTML går denne notesblok langt ud over grundlæggende tekstredigering.",
      },
      {
        title: "Overskrifter fra H1 til H6",
        desc: "Organisér dit indhold med en komplet overskriftshierarki fra H1 til H6, hvilket giver denne notesblok strukturen som en professionel dokumenteditor direkte i din browser.",
      },
      {
        title: "Forskellige skrifttyper",
        desc: "Vælg mellem forskellige skrifttyper for at tilpasse din skriveoplevelse og gøre dine dokumenter mere læsbare, udtryksfulde eller professionelle.",
      },
      {
        title: "Skift tekstfarve",
        desc: "Denne online notesblok lader dig fremhæve vigtige punkter og tilføje visuel klarhed ved at ændre tekstfarve, et enkelt men kraftfuldt formateringsværktøj for enhver skribent.",
      },
      {
        title: "AI-drevet tale-til-tekst uden fejl",
        desc: "Sig dine tanker højt og se dem blive vist på skærmen med høj præcision. Denne notesbloks AI-drevne tale-til-tekst funktion omdanner straks din stemme til ren og fejlfri tekst, så du sparer meget tid.",
      },
      {
        title: "Generér delbart link efter login",
        desc: "Når du er logget ind, giver vores notesblok dig mulighed for at generere et unikt delbart link til enhver note, hvilket gør samarbejde og hurtig deling lige så nemt som at kopiere en URL.",
      },
      {
        title: "Opret konto for at gemme historik",
        desc: "Opret en gratis konto i denne notesblok for at låse op for notehistorik, så du kan gennemgå, gendanne og administrere alt, hvad du nogensinde har skrevet, samlet ét sted.",
      },
    ],
    outro:
      "Udover disse er der mange andre unikke funktioner, som du kan bruge og nyde gratis.",
  },
  nl: {
    title: "Belangrijkste functies van de online notitieblok",
    features: [
      {
        title: "Automatisch online opslaan",
        desc: "Onze online notitieblok slaat je werk automatisch op terwijl je typt, zodat je nooit een enkel woord verliest, zelfs niet als je browser crasht of je per ongeluk het tabblad sluit.",
      },
      {
        title: "Download in TXT- en PDF-formaat",
        desc: "Met onze notitieblok kun je je notities direct exporteren als een schoon TXT- of PDF-bestand, waardoor het eenvoudig is om je werk op te slaan, af te drukken of offline te delen.",
      },
      {
        title: "Volledig scherm",
        desc: "Schakel over naar de modus volledig scherm en gebruik deze afleidingsvrije notitieblok die je een schoon schrijfcanvas van rand tot rand biedt, perfect voor geconcentreerde schrijfsessies.",
      },
      {
        title: "200% zoomfunctie",
        desc: "Deze online notitieblok laat je tot 200% inzoomen, waardoor het prettiger is voor de ogen tijdens lange schrijfsessies of bij het werken met kleine tekst op elk scherm.",
      },
      {
        title: "Afbeeldingen invoegen, tabellen, automatische datumupdates, HTML-export",
        desc: "Van het invoegen van afbeeldingen en gestructureerde tabellen tot het automatisch bijwerken van datums en het exporteren van je content als HTML, deze notitieblok gaat veel verder dan basis tekstbewerking.",
      },
      {
        title: "Koppen van H1 tot H6",
        desc: "Organiseer je content met een volledige koppenhiërarchie van H1 tot H6, waardoor deze notitieblok de structuur krijgt van een professionele documenteditor direct in je browser.",
      },
      {
        title: "Verschillende lettertype-stijlen",
        desc: "Kies uit verschillende lettertype-stijlen om je schrijfervaring te personaliseren en je documenten beter leesbaar, expressiever of professioneler te maken.",
      },
      {
        title: "Tekstkleur wijzigen",
        desc: "Deze online notitieblok laat je belangrijke punten markeren en visuele duidelijkheid toevoegen door de tekstkleur te wijzigen, een eenvoudige maar krachtige opmaaktool voor elke schrijver.",
      },
      {
        title: "AI-gestuurde spraak-naar-tekst zonder fouten",
        desc: "Spreek je gedachten uit en zie ze met hoge nauwkeurigheid op het scherm verschijnen. De AI-gestuurde spraak-naar-tekstfunctie van deze notitieblok zet je stem direct om in schone, foutloze tekst, zodat je veel tijd bespaart.",
      },
      {
        title: "Deelbare link genereren na inloggen",
        desc: "Na inloggen kun je in onze notitieblok een unieke deelbare link genereren voor elke notitie, waardoor samenwerking en snel delen net zo eenvoudig wordt als het kopiëren van een URL.",
      },
      {
        title: "Account aanmaken om geschiedenis op te slaan",
        desc: "Maak een gratis account aan in deze notitieblok om de notitiegeschiedenis te ontgrendelen, zodat je alles wat je ooit hebt geschreven kunt terugzien, herstellen en beheren op één plek.",
      },
    ],
    outro:
      "Naast deze functies zijn er nog veel andere unieke functies die je gratis kunt gebruiken en waarvan je kunt genieten.",
  },
  et: {
    title: "Veebipõhise märkmeploki peamised funktsioonid",
    features: [
      {
        title: "Automaatne veebipõhine salvestamine",
        desc: "Meie veebipõhine märkmik salvestab sinu töö automaatselt kirjutamise ajal, nii et sa ei kaota kunagi ühtegi sõna, isegi kui brauser jookseb kokku või sulged vahelehe kogemata.",
      },
      {
        title: "Allalaadimine TXT ja PDF vormingus",
        desc: "Meie märkmikuga saad oma märkmed koheselt eksportida puhta TXT või PDF failina, mis muudab nende salvestamise, printimise või jagamise võrguühenduseta lihtsaks.",
      },
      {
        title: "Täisekraan",
        desc: "Lülitu täisekraanrežiimile ja kasuta seda segajateta märkmikku, mis pakub puhast servast servani kirjutuspinda, mis sobib ideaalselt keskendunud kirjutamiseks.",
      },
      {
        title: "200% suumifunktsioon",
        desc: "See veebipõhine märkmik võimaldab kuni 200% suurendust, muutes selle silmadele mugavamaks pikkade kirjutamissessioonide ajal või väikese tekstiga töötades igal ekraanil.",
      },
      {
        title: "Piltide ja tabelite lisamine, kuupäevade automaatne uuendamine, HTML eksport",
        desc: "Alates piltide ja struktureeritud tabelite lisamisest kuni kuupäevade automaatse uuendamise ja sisu HTML-vormingus eksportimiseni läheb see märkmik palju kaugemale tavalisest tekstiredigeerimisest.",
      },
      {
        title: "Pealkirjad H1 kuni H6",
        desc: "Korralda oma sisu täieliku pealkirjade hierarhiaga H1-st H6-ni, andes sellele märkmikule professionaalse dokumendiredaktori struktuuri otse sinu brauseris.",
      },
      {
        title: "Erinevad kirjatüübid",
        desc: "Vali erinevate kirjatüüpide vahel, et isikupärastada oma kirjutamiskogemust ning muuta dokumendid loetavamaks, väljendusrikkamaks või professionaalsemaks.",
      },
      {
        title: "Teksti värvi muutmine",
        desc: "See veebipõhine märkmik võimaldab esile tõsta olulisi punkte ja lisada visuaalset selgust, muutes teksti värvi — lihtne, kuid võimas vormindustööriist igale kirjutajale.",
      },
      {
        title: "Tehisintellektil põhinev kõnest tekstiks ilma vigadeta",
        desc: "Räägi oma mõtted välja ja näe, kuidas need ilmuvad ekraanile suure täpsusega. Selle märkmiku tehisintellektil põhinev kõnest tekstiks funktsioon muudab sinu hääle koheselt puhtaks ja veavabaks tekstiks, säästes palju aega.",
      },
      {
        title: "Jaga linki pärast sisselogimist",
        desc: "Pärast sisselogimist võimaldab meie märkmik luua iga märkme jaoks unikaalse jagatava lingi, muutes koostöö ja kiire jagamise sama lihtsaks kui URL-i kopeerimine.",
      },
      {
        title: "Konto loomine ajaloo salvestamiseks",
        desc: "Loo selles märkmikus tasuta konto, et avada märkmete ajalugu, nii saad kõike, mida oled kunagi kirjutanud, vaadata, taastada ja hallata ühes kohas.",
      },
    ],
    outro:
      "Lisaks nendele on veel palju teisi unikaalseid funktsioone, mida saad tasuta kasutada ja nautida.",
  },
  fj: {
    title: "Na iTavi Levu ni Notepad ena Initaneti",
    features: [
      {
        title: "Vakacokotaki Vakaiyalayala ena Initaneti",
        desc: "Na neitou notepad ena initaneti e vakacokotaka vakaiyalayala na nomu cakacaka ena gauna o vakatakilakila tiko kina, me kakua ni yali e dua na vosa, kevaka mada ga e vakarusa na nomu browser se o sogota cala na tab.",
      },
      {
        title: "Lavetaka ena TXT kei na PDF formats",
        desc: "Ena neitou notepad, e rawa ni o vakauta vakadodonu na nomu noti me TXT se PDF file savasava, ka rawarawa kina na maroroi, tabaki, se wasei ni nomu cakacaka ena sega ni internet.",
      },
      {
        title: "Matavotu Taucoko",
        desc: "Sucu ki na full-screen mode ka vakayagataka na notepad sega ni vakalatilati oqo ka solia vei iko e dua na vanua vulavula me volavola mai na raba ki na raba, vinaka sara me baleta na volavola vakadikevi.",
      },
      {
        title: "200% Vakalevu na Zoom",
        desc: "Na notepad oqo e rawa ni vakalevu na zoom me yacova na 200%, ka vakalailaitaka na maroroi ni mata ena gauna balavu ni volavola se ni cakacaka ena matanivola lalai ena dua ga na screen.",
      },
      {
        title: "Kuria na iyaloyalo, tabile, vakavoui vakaiyalayala ni siga, kei na HTML export",
        desc: "Mai na kuria ni iyaloyalo kei na tabile vakadodonu me yacova na vakavoui vakaiyalayala ni siga kei na vakauta yani na nomu itukutuku me HTML, na notepad oqo e sivia sara na vakadodonu ni vakadodonu ni text editing.",
      },
      {
        title: "Ulutaga mai H1 ki H6",
        desc: "Vakayagataka e dua na hieraki taucoko ni ulutaga mai H1 ki H6 me tuva kina na nomu itukutuku, ka solia vua na notepad oqo e dua na ituvatuva ni document editor vakadonui ena nomu browser.",
      },
      {
        title: "Duidui na iwalewale ni font",
        desc: "Digitaka mai na vuqa na iwalewale ni font me o vakatabakidua kina na nomu veika e volai, ka vakavuna me rawarawa na wiliki, vakatakilakila, se vakaprofesinolo.",
      },
      {
        title: "Veisautaka na roka ni vosa",
        desc: "Na notepad ena initaneti oqo e rawa ni o vakatakila na veika bibi ka vakuria na matau ni rai ena veisau ni roka ni vosa, e dua na iwalewale rawarawa ia kaukauwa vei ira na dau volavola.",
      },
      {
        title: "AI ka veisautaka na vosa ki na text ka sega na cala",
        desc: "Vosa na nomu vakasama ka raica ni ra basika ena screen ena kena dodonu levu. Na AI speech-to-text feature ni notepad oqo e veisautaka vakatotolo na nomu domo me text savasava ka sega na cala, ka vakabulai iko e levu na gauna.",
      },
      {
        title: "Cakava na link ni wasea ni oti na sign-in",
        desc: "Ni o sa sign in oti, na neitou notepad e rawa ni cakava e dua na link duatani me wasei kina na dua ga na note, ka vakalailaitaka na cakacaka ni veivuke kei na wasei totolo me vaka ga na kopi ni URL.",
      },
      {
        title: "Cakava e dua na akaun me maroroi kina na itukutuku ni gauna sa oti",
        desc: "Cakava e dua na akaun sega ni saumi ena notepad oqo me dolava kina na note history, me rawa ni o lesu tale, vakalesui, ka maroroya na veika kece o vola tu ena dua ga na vanua.",
      },
    ],
    outro:
      "E sega walega ni oqo, e levu tale na veika duatani e rawa ni o vakayagataka ka marautaka sega ni saumi.",
  },
  fi: {
    title: "Verkkomuistion tärkeimmät ominaisuudet",
    features: [
      {
        title: "Automaattinen tallennus verkossa",
        desc: "Verkkomuistio tallentaa työsi automaattisesti kirjoittaessasi, joten et koskaan menetä yhtäkään sanaa, vaikka selain kaatuisi tai sulkisit välilehden vahingossa.",
      },
      {
        title: "Lataa TXT- ja PDF-muodoissa",
        desc: "Muistion avulla voit viedä muistiinpanosi heti siistinä TXT- tai PDF-tiedostona, mikä helpottaa tallentamista, tulostamista tai jakamista offline-tilassa.",
      },
      {
        title: "Koko näytön tila",
        desc: "Siirry koko näytön tilaan ja käytä tätä häiriötöntä muistioita, joka tarjoaa puhtaan reunasta reunaan ulottuvan kirjoitusalustan keskittyneeseen kirjoittamiseen.",
      },
      {
        title: "200 % zoomausominaisuus",
        desc: "Tämä verkkomuistio mahdollistaa jopa 200 % suurennuksen, mikä helpottaa silmien rasitusta pitkissä kirjoitussessioissa tai pienen tekstin kanssa millä tahansa näytöllä.",
      },
      {
        title: "Lisää kuvia, taulukoita, automaattinen päivämäärien päivitys, HTML-vienti",
        desc: "Kuvien ja jäsenneltyjen taulukoiden lisäämisestä automaattiseen päivämäärien päivitykseen ja sisällön viemiseen HTML-muodossa tämä muistio ylittää selvästi perinteisen tekstieditoinnin.",
      },
      {
        title: "Otsikot H1–H6",
        desc: "Järjestä sisältösi täydellisellä otsikkohierarkialla H1:stä H6:een, mikä tekee tästä muistioista oikean asiakirjaeditorin suoraan selaimessa.",
      },
      {
        title: "Erilaiset kirjasintyylit",
        desc: "Valitse useista kirjasintyyleistä personoidaksesi kirjoituskokemuksesi ja tehdäksesi muistiinpanoistasi helpommin luettavia, ilmeikkäämpiä tai ammattimaisempia.",
      },
      {
        title: "Muuta tekstin väriä",
        desc: "Tämä verkkomuistio antaa sinun korostaa tärkeitä kohtia ja lisätä visuaalista selkeyttä muuttamalla tekstin väriä – yksinkertainen mutta tehokas muotoilutyökalu jokaiselle kirjoittajalle.",
      },
      {
        title: "Tekoälypohjainen puheesta tekstiksi ilman virheitä",
        desc: "Ilmaise ajatuksesi ääneen ja näe ne ilmestyvän näytölle erittäin tarkasti. Tämän muistion tekoälypohjainen puheesta tekstiksi -toiminto muuntaa äänesi välittömästi siistiksi ja virheettömäksi tekstiksi, mikä säästää paljon aikaa.",
      },
      {
        title: "Luo jaettava linkki kirjautumisen jälkeen",
        desc: "Kirjautumisen jälkeen muistio antaa sinun luoda ainutlaatuisen jaettavan linkin mihin tahansa muistiinpanoon, mikä tekee yhteistyöstä ja nopeasta jakamisesta yhtä helppoa kuin URL-osoitteen kopioimisen.",
      },
      {
        title: "Luo tili tallentaaksesi historian",
        desc: "Luo ilmainen tili tähän muistioon avataksesi muistiinpanohistorian, jotta voit tarkastella, palauttaa ja hallita kaikkea mitä olet koskaan kirjoittanut yhdessä paikassa.",
      },
    ],
    outro:
      "Näiden lisäksi on paljon muita ainutlaatuisia ominaisuuksia, joita voit käyttää ja nauttia ilmaiseksi.",
  },
  fr: {
    title: "Fonctionnalités principales du bloc-notes en ligne",
    features: [
      {
        title: "Sauvegarde automatique en ligne",
        desc: "Notre bloc-notes en ligne enregistre automatiquement votre travail pendant que vous tapez, afin que vous ne perdiez jamais un seul mot, même si votre navigateur plante ou si vous fermez accidentellement l’onglet.",
      },
      {
        title: "Téléchargement aux formats TXT et PDF",
        desc: "Avec notre bloc-notes, vous pouvez exporter instantanément vos notes sous forme de fichier TXT ou PDF propre, ce qui facilite l’enregistrement, l’impression ou le partage hors ligne.",
      },
      {
        title: "Mode plein écran",
        desc: "Passez en mode plein écran et utilisez ce bloc-notes sans distraction qui vous offre une zone d’écriture propre de bord à bord, idéale pour des sessions de rédaction concentrées.",
      },
      {
        title: "Fonction de zoom à 200 %",
        desc: "Ce bloc-notes en ligne permet un zoom jusqu’à 200 %, ce qui rend la lecture plus confortable lors de longues sessions d’écriture ou lorsque vous travaillez avec du petit texte sur n’importe quel écran.",
      },
      {
        title: "Insertion d’images, tableaux, mise à jour automatique des dates, export HTML",
        desc: "De l’insertion d’images et de tableaux structurés à la mise à jour automatique des dates et à l’export de votre contenu en HTML, ce bloc-notes va bien au-delà de l’édition de texte basique.",
      },
      {
        title: "Titres de H1 à H6",
        desc: "Organisez votre contenu avec une hiérarchie complète de titres allant de H1 à H6, donnant à ce bloc-notes la structure d’un véritable éditeur de documents directement dans votre navigateur.",
      },
      {
        title: "Différents styles de police",
        desc: "Choisissez parmi une variété de styles de police pour personnaliser votre expérience d’écriture et rendre vos documents plus lisibles, expressifs ou professionnels.",
      },
      {
        title: "Changer la couleur du texte",
        desc: "Ce bloc-notes en ligne vous permet de mettre en évidence les points clés et d’ajouter de la clarté visuelle en modifiant la couleur du texte, un outil de mise en forme simple mais puissant pour tout rédacteur.",
      },
      {
        title: "Conversion vocale en texte sans erreur basée sur l’IA",
        desc: "Exprimez vos pensées à voix haute et voyez-les apparaître à l’écran avec une grande précision. La fonction de reconnaissance vocale basée sur l’IA de ce bloc-notes transforme instantanément votre voix en texte propre et sans erreur, vous faisant gagner beaucoup de temps.",
      },
      {
        title: "Générer un lien partageable après connexion",
        desc: "Une fois connecté, notre bloc-notes vous permet de générer un lien partageable unique pour chaque note, rendant la collaboration et le partage aussi simples que la copie d’une URL.",
      },
      {
        title: "Créer un compte pour enregistrer l’historique",
        desc: "Créez un compte gratuit sur ce bloc-notes pour débloquer l’historique des notes afin de pouvoir consulter, récupérer et gérer tout ce que vous avez écrit, au même endroit.",
      },
    ],
    outro:
      "En plus de celles-ci, il existe de nombreuses autres fonctionnalités uniques que vous pouvez utiliser et apprécier gratuitement.",
  },
  gl: {
    title: "Principais funcións do bloc de notas en liña",
    features: [
      {
        title: "Garda automática en liña",
        desc: "O noso bloc de notas en liña garda automaticamente o teu traballo mentres escribes, polo que nunca perderás nin unha soa palabra, mesmo se o teu navegador falla ou pechas a lapela por accidente.",
      },
      {
        title: "Descargar en formatos TXT e PDF",
        desc: "Co noso bloc de notas podes exportar as túas notas ao instante como un ficheiro TXT ou PDF limpo, facilitando gardar, imprimir ou compartir o teu traballo sen conexión.",
      },
      {
        title: "Pantalla completa",
        desc: "Cambia ao modo de pantalla completa e usa este bloc de notas sen distraccións que che ofrece un espazo de escritura limpo de bordo a bordo, perfecto para sesións de redacción concentrada.",
      },
      {
        title: "Función de zoom do 200%",
        desc: "Este bloc de notas en liña permite ampliar ata o 200%, facendo que sexa máis cómodo para os ollos durante sesións longas de escritura ou cando traballas con texto pequeno en calquera pantalla.",
      },
      {
        title: "Inserir imaxes, táboas, actualización automática de datas, exportar HTML",
        desc: "Desde inserir imaxes e táboas estruturadas ata a actualización automática de datas e a exportación do contido como HTML, este bloc de notas vai moito máis alá da edición básica de texto.",
      },
      {
        title: "Encabezados de H1 a H6",
        desc: "Organiza o teu contido cunha xerarquía completa de encabezados de H1 a H6, dándolle a este bloc de notas a estrutura dun editor de documentos profesional directamente no teu navegador.",
      },
      {
        title: "Diferentes estilos de letra",
        desc: "Escolle entre unha variedade de estilos de letra para personalizar a túa experiencia de escritura e facer os teus documentos máis lexibles, expresivos ou profesionais.",
      },
      {
        title: "Cambiar a cor do texto",
        desc: "Este bloc de notas en liña permíteche destacar puntos clave e engadir claridade visual cambiando a cor do texto, unha ferramenta de formato sinxela pero poderosa para calquera escritor.",
      },
      {
        title: "Conversión de voz a texto con IA sen erros",
        desc: "Expresa os teus pensamentos en voz alta e observa como aparecen na pantalla con alta precisión. A función de conversión de voz a texto con IA deste bloc de notas transforma instantaneamente a túa voz en texto limpo e sen erros, aforrándoche moito tempo.",
      },
      {
        title: "Xerar ligazón compartible despois de iniciar sesión",
        desc: "Unha vez iniciada a sesión, o noso bloc de notas permíteche xerar unha ligazón única compartible para calquera nota, facendo que a colaboración e o compartir sexan tan sinxelos como copiar unha URL.",
      },
      {
        title: "Crear conta para gardar o historial",
        desc: "Crea unha conta gratuíta neste bloc de notas para desbloquear o historial de notas, de modo que poidas revisar, recuperar e xestionar todo o que escribiches nun só lugar.",
      },
    ],
    outro:
      "Ademais destas, hai moitas outras funcións únicas que podes usar e gozar de balde.",
  },
  ka: {
    title: "ონლაინ ბლოკნოტის ძირითადი ფუნქციები",
    features: [
      {
        title: "ავტომატური ონლაინ შენახვა",
        desc: "ჩვენი ონლაინ ბლოკნოტი ავტომატურად ინახავს თქვენს ნამუშევარს წერის პროცესში, ამიტომ არასდროს დაკარგავთ არც ერთ სიტყვას, თუნდაც ბრაუზერი გაითიშოს ან შემთხვევით დახუროთ ჩანართი.",
      },
      {
        title: "ჩამოტვირთვა TXT და PDF ფორმატებში",
        desc: "ჩვენი ბლოკნოტის საშუალებით შეგიძლიათ თქვენი ჩანაწერები მყისიერად გადააქციოთ სუფთა TXT ან PDF ფაილად, რაც აადვილებს შენახვას, დაბეჭდვას ან გაზიარებას ოფლაინ რეჟიმში.",
      },
      {
        title: "სრული ეკრანი",
        desc: "გადაერთეთ სრულეკრანიან რეჟიმზე და გამოიყენეთ ეს ყურადღების გარეშე ბლოკნოტი, რომელიც გაძლევთ სუფთა, კიდიდან კიდემდე წერით სივრცეს, იდეალურია კონცენტრირებული წერისთვის.",
      },
      {
        title: "200% მასშტაბირების ფუნქცია",
        desc: "ეს ონლაინ ბლოკნოტი გაძლევთ საშუალებას გაადიდოთ ტექსტი 200%-მდე, რაც ამცირებს თვალის დაღლას ხანგრძლივი წერის დროს ან მცირე ტექსტთან მუშაობისას ნებისმიერ ეკრანზე.",
      },
      {
        title: "სურათების, ცხრილების ჩასმა, თარიღების ავტომატური განახლება, HTML ექსპორტი",
        desc: "სურათების და სტრუქტურირებული ცხრილების ჩასმიდან დაწყებული თარიღების ავტომატურ განახლებამდე და კონტენტის HTML ფორმატში ექსპორტამდე, ეს ბლოკნოტი ბევრად აღემატება მარტივ ტექსტურ რედაქტორს.",
      },
      {
        title: "სათაურები H1-დან H6-მდე",
        desc: "დაალაგეთ თქვენი კონტენტი სრული სათაურების იერარქიით H1-დან H6-მდე, რაც ამ ბლოკნოტს აძლევს პროფესიონალური დოკუმენტის რედაქტორის სტრუქტურას პირდაპირ ბრაუზერში.",
      },
      {
        title: "სხვადასხვა შრიფტის სტილი",
        desc: "აირჩიეთ სხვადასხვა შრიფტის სტილიდან, რათა დააკონფიგურიროთ წერის გამოცდილება და გახადოთ თქვენი დოკუმენტები უფრო წაკითხვადი, გამომხატველი ან პროფესიონალური.",
      },
      {
        title: "ტექსტის ფერის შეცვლა",
        desc: "ეს ონლაინ ბლოკნოტი გაძლევთ საშუალებას გამოყოთ მნიშვნელოვანი წერტილები და გააუმჯობესოთ ვიზუალური სიცხადე ტექსტის ფერის შეცვლით — მარტივი, მაგრამ ძლიერი ფორმატირების ინსტრუმენტი ნებისმიერი ავტორისთვის.",
      },
      {
        title: "ხელოვნური ინტელექტით მხარდაჭერილი მეტყველებიდან ტექსტზე გადაყვანა შეცდომების გარეშე",
        desc: "თქვით თქვენი აზრები და უყურეთ როგორ ჩნდება ისინი ეკრანზე მაღალი სიზუსტით. ამ ბლოკნოტის AI-ზე დაფუძნებული მეტყველებიდან ტექსტზე ფუნქცია მყისიერად აქცევს თქვენს ხმას სუფთა და უშეცდომო ტექსტად, რაც დიდ დროს გიზოგავთ.",
      },
      {
        title: "გაზიარებადი ბმულის გენერირება შესვლის შემდეგ",
        desc: "შესვლის შემდეგ ჩვენი ბლოკნოტი გაძლევთ საშუალებას შექმნათ უნიკალური გაზიარებადი ბმული ნებისმიერი ჩანაწერისთვის, რაც თანამშრომლობას და სწრაფ გაზიარებას აქცევს ისეთ მარტივს, როგორც URL-ის კოპირება.",
      },
      {
        title: "ანგარიშის შექმნა ისტორიის შესანახად",
        desc: "შექმენით უფასო ანგარიში ამ ბლოკნოტში, რათა გახსნათ ჩანაწერების ისტორია და შეძლოთ ყველაფრის გადახედვა, აღდგენა და მართვა ერთ ადგილას, რაც კი ოდესმე დაგიწერიათ.",
      },
    ],
    outro:
      "ამ ყველაფრის გარდა არსებობს ბევრი სხვა უნიკალური ფუნქცია, რომლის გამოყენება და უფასოდ სარგებლობაც შეგიძლიათ.",
  },
  de: {
    title: "Hauptfunktionen des Online-Notizblocks",
    features: [
      {
        title: "Automatisches Online-Speichern",
        desc: "Unser Online-Notizblock speichert deine Arbeit automatisch während du tippst, sodass du kein einziges Wort verlierst, selbst wenn dein Browser abstürzt oder du den Tab versehentlich schließt.",
      },
      {
        title: "Download im TXT- und PDF-Format",
        desc: "Mit unserem Notizblock kannst du deine Notizen sofort als saubere TXT- oder PDF-Datei exportieren, sodass du sie einfach speichern, drucken oder offline teilen kannst.",
      },
      {
        title: "Vollbildmodus",
        desc: "Wechsle in den Vollbildmodus und nutze diesen ablenkungsfreien Notizblock, der dir eine saubere Schreibfläche von Rand zu Rand bietet – perfekt für konzentrierte Schreibsitzungen.",
      },
      {
        title: "200%-Zoom-Funktion",
        desc: "Dieser Online-Notizblock ermöglicht es dir, bis zu 200 % zu zoomen, was die Augen bei langen Schreibsitzungen oder bei kleinem Text auf jedem Bildschirm entlastet.",
      },
      {
        title: "Bilder einfügen, Tabellen, automatische Datumsaktualisierung, HTML-Export",
        desc: "Vom Einfügen von Bildern und strukturierten Tabellen bis hin zur automatischen Datumsaktualisierung und dem Export deines Inhalts als HTML geht dieser Notizblock weit über einfache Textbearbeitung hinaus.",
      },
      {
        title: "Überschriften von H1 bis H6",
        desc: "Organisiere deinen Inhalt mit einer vollständigen Überschriften-Hierarchie von H1 bis H6, wodurch dieser Notizblock die Struktur eines professionellen Dokumenteditors direkt im Browser erhält.",
      },
      {
        title: "Verschiedene Schriftarten",
        desc: "Wähle aus einer Vielzahl von Schriftarten, um dein Schreiberlebnis zu personalisieren und deine Dokumente lesbarer, ausdrucksstärker oder professioneller zu machen.",
      },
      {
        title: "Textfarbe ändern",
        desc: "Dieser Online-Notizblock ermöglicht es dir, wichtige Punkte hervorzuheben und visuelle Klarheit zu schaffen, indem du die Textfarbe änderst – ein einfaches, aber leistungsstarkes Formatierungswerkzeug für jeden Autor.",
      },
      {
        title: "KI-gestützte Sprache-zu-Text-Funktion ohne Fehler",
        desc: "Sprich deine Gedanken aus und sieh, wie sie mit hoher Genauigkeit auf dem Bildschirm erscheinen. Die KI-gestützte Sprache-zu-Text-Funktion dieses Notizblocks wandelt deine Stimme sofort in sauberen und fehlerfreien Text um, sodass du viel Zeit sparst.",
      },
      {
        title: "Teilbaren Link nach Anmeldung erstellen",
        desc: "Nach der Anmeldung kannst du in unserem Notizblock einen einzigartigen teilbaren Link für jede Notiz erstellen, wodurch Zusammenarbeit und schnelles Teilen so einfach wird wie das Kopieren einer URL.",
      },
      {
        title: "Konto erstellen, um Verlauf zu speichern",
        desc: "Erstelle ein kostenloses Konto in diesem Notizblock, um den Notizverlauf freizuschalten, damit du alles, was du jemals geschrieben hast, an einem Ort ansehen, wiederherstellen und verwalten kannst.",
      },
    ],
    outro:
      "Neben diesen gibt es viele weitere einzigartige Funktionen, die du kostenlos nutzen und genießen kannst.",
  },
  el: {
    title: "Κύρια χαρακτηριστικά του διαδικτυακού σημειωματάριου",
    features: [
      {
        title: "Αυτόματη αποθήκευση online",
        desc: "Το διαδικτυακό μας σημειωματάριο αποθηκεύει αυτόματα τη δουλειά σας καθώς πληκτρολογείτε, ώστε να μην χάνετε ούτε μία λέξη, ακόμη κι αν ο browser κολλήσει ή κλείσετε κατά λάθος την καρτέλα.",
      },
      {
        title: "Λήψη σε μορφή TXT και PDF",
        desc: "Με το σημειωματάριό μας μπορείτε να εξάγετε άμεσα τις σημειώσεις σας ως καθαρό αρχείο TXT ή PDF, κάνοντας εύκολη την αποθήκευση, εκτύπωση ή κοινοποίηση εκτός σύνδεσης.",
      },
      {
        title: "Πλήρης οθόνη",
        desc: "Μεταβείτε σε λειτουργία πλήρους οθόνης και χρησιμοποιήστε αυτό το σημειωματάριο χωρίς περισπασμούς που σας προσφέρει έναν καθαρό χώρο γραφής από άκρη σε άκρη, ιδανικό για συγκεντρωμένες συνεδρίες γραφής.",
      },
      {
        title: "Λειτουργία ζουμ 200%",
        desc: "Αυτό το διαδικτυακό σημειωματάριο σας επιτρέπει να κάνετε ζουμ έως και 200%, κάνοντας την ανάγνωση πιο άνετη για τα μάτια σε μεγάλες συνεδρίες γραφής ή όταν εργάζεστε με μικρό κείμενο σε οποιαδήποτε οθόνη.",
      },
      {
        title: "Εισαγωγή εικόνων, πινάκων, αυτόματη ενημέρωση ημερομηνιών, εξαγωγή HTML",
        desc: "Από την εισαγωγή εικόνων και δομημένων πινάκων έως την αυτόματη ενημέρωση ημερομηνιών και την εξαγωγή του περιεχομένου σας σε HTML, αυτό το σημειωματάριο ξεπερνά κατά πολύ την απλή επεξεργασία κειμένου.",
      },
      {
        title: "Κεφαλίδες από H1 έως H6",
        desc: "Οργανώστε το περιεχόμενό σας με μια πλήρη ιεραρχία κεφαλίδων από H1 έως H6, δίνοντας σε αυτό το σημειωματάριο τη δομή ενός επαγγελματικού επεξεργαστή εγγράφων απευθείας στον browser σας.",
      },
      {
        title: "Διαφορετικά στυλ γραμματοσειράς",
        desc: "Επιλέξτε ανάμεσα σε διάφορα στυλ γραμματοσειράς για να εξατομικεύσετε την εμπειρία γραφής σας και να κάνετε τα έγγραφά σας πιο ευανάγνωστα, εκφραστικά ή επαγγελματικά.",
      },
      {
        title: "Αλλαγή χρώματος κειμένου",
        desc: "Αυτό το διαδικτυακό σημειωματάριο σας επιτρέπει να επισημαίνετε βασικά σημεία και να προσθέτετε οπτική καθαρότητα αλλάζοντας το χρώμα του κειμένου, ένα απλό αλλά ισχυρό εργαλείο μορφοποίησης για κάθε συγγραφέα.",
      },
      {
        title: "Μετατροπή ομιλίας σε κείμενο με τεχνητή νοημοσύνη χωρίς σφάλματα",
        desc: "Εκφράστε τις σκέψεις σας και δείτε τις να εμφανίζονται στην οθόνη με υψηλή ακρίβεια. Η λειτουργία μετατροπής ομιλίας σε κείμενο με τεχνητή νοημοσύνη αυτού του σημειωματάριου μετατρέπει άμεσα τη φωνή σας σε καθαρό και χωρίς λάθη κείμενο, εξοικονομώντας σας πολύ χρόνο.",
      },
      {
        title: "Δημιουργία κοινοποιήσιμου συνδέσμου μετά τη σύνδεση",
        desc: "Μόλις συνδεθείτε, το σημειωματάριό μας σας επιτρέπει να δημιουργήσετε έναν μοναδικό κοινοποιήσιμο σύνδεσμο για οποιαδήποτε σημείωση, κάνοντας τη συνεργασία και την γρήγορη κοινοποίηση τόσο απλή όσο η αντιγραφή ενός URL.",
      },
      {
        title: "Δημιουργία λογαριασμού για αποθήκευση ιστορικού",
        desc: "Δημιουργήστε έναν δωρεάν λογαριασμό σε αυτό το σημειωματάριο για να ξεκλειδώσετε το ιστορικό σημειώσεων, ώστε να μπορείτε να επανεξετάζετε, να ανακτάτε και να διαχειρίζεστε όλα όσα έχετε γράψει ποτέ, σε ένα μέρος.",
      },
    ],
    outro:
      "Εκτός από αυτά, υπάρχουν πολλές ακόμη μοναδικές λειτουργίες που μπορείτε να χρησιμοποιείτε και να απολαμβάνετε δωρεάν.",
  },
  kl: {
    title: "Online-notepadip pingaarnerit periarfissai",
    features: [
      {
        title: "Online-mi nammineq ingerlaannaq toqqortuisarneq",
        desc: "Online-notepadip suliatit nammineq ingerlaannaq toqqortarpaat allattaruit, taamaattumik oqaatsit ataasiakkaatulluunniit annaaneq ajorput, browseri unittoorpat imaluunniit tab-i ajortumik matoorukkuunniit.",
      },
      {
        title: "TXT aammalu PDF format-inik aallerneq",
        desc: "Notepadikkut allattukkatit ingerlaannaq TXT imaluunniit PDF file-itut aallerneqarsinnaapput, taamaalilluni toqqortissallugu, naqissallugu imaluunniit offline-mi siammarterissallugu ajornannginnerulerpoq.",
      },
      {
        title: "Skærmi tamakkerlugu (Full screen)",
        desc: "Full-screen mode-mut nuugit aammalu notepad-ip akornusersuiffiunngitsoq atorlugu allaffissaq ersarilluinnartoq atoriuk, pilersaarusiornernut imaluunniit allannermut eqqarsaatiginnilluarnissamut naleqquttoq.",
      },
      {
        title: "200%-mik annertusaanissamut periarfissaq (zoom)",
        desc: "Online-notepadip 200%-mut tikillugu annertusaanissaq (zoom) periarfissaraa, taamaalilluni allanneq sivisooq imaluunniit allagartaq mikisoq atuarlugu oqilisaataalluni.",
      },
      {
        title: "Assit, tabelit, ullut nammineq nutarterneqartartut aammalu HTML-mut aallerneq",
        desc: "Assinik aammalu aaqqissuussamik tabelinik ilanngussinermit aallartilluni, ullunik nammineq nutarterneqartartunik aammalu HTML-inut aallerneq tikillugu, notepad taanna allattarfimmut nalinginnaasumut sanilliullugu annertunerujussuuvoq.",
      },
      {
        title: "H1-mit H6-mut qulequttat",
        desc: "Imarisatit aaqqissuukkit qulequttanik tamakkerlugu H1-mit H6-mut atorlugit, taamaalilluni notepad taanna browserinni dokumentinik aaqqissuussinermut tulluartumik aaqqissuussaavoq.",
      },
      {
        title: "Allattariaatsit assigiinngitsut (font styles)",
        desc: "Allattariaatsit assigiinngitsut akornanni toqqaasinnaavutit, taamaalilluni allanneq nammineq naleqqussarlugu aammalu atuarnissaanut oqilisaataalluni imaluunniit inuussutissarsiornermut tulluarluni.",
      },
      {
        title: "Allatat qalipaataanik allanngortitsineq",
        desc: "Online-notepad taanna pingaarnernik ersarissaanerit allanngortitsinissamut periarfissiivoq aammalu allatat qalipaataannik allanngortitsinikkut ersarissarnerulersitsilluni, suliarinnittumut iluaqutaasoq ajornanngitsoq kisianni nukittooq.",
      },
      {
        title: "AI atorlugu oqaatsit allattanngortinneq (pissarsiassat ajortunngitsumik)",
        desc: "Oqaatsit eqqarsaatigisatit oqaatigikkit, takullugillu screen-imi saqqummiunneqartut qanoq eqqortumik takussutissaqartiginersut. AI atorneqarluni oqaatsit allattanngortinneq ingerlaannaq nipititit oqaatsinut eqqortunut allanngortippai, taamaalilluni piffissamik annertuumik säävaatitsivoq.",
      },
      {
        title: "Isersereernermi linki siammarterneqarsinnaasoq pilersiguk",
        desc: "Isersereernermi notepadip periarfissiivoq nalunaarut immikkut linki siammarterneqarsinnaasoq pilersissallugu, suleqatigiinneq aammalu siammarterineq ajornanngitsumik URL-ip nuutinneratigut pisinnaalluni.",
      },
      {
        title: "Akaunti pilersiguk oqaluttuarisaanermik (history) toqqortuinissamut",
        desc: "Notepad-imi akeqanngitsumik akaunti pilersiguk oqaluttuarisaanermut (history) ammaassinissamut, taamaalilluni allattakkatit tamaasa ataatsimut takusinnaallugit, allanngortillugit imaluunniit aqutsisinnaallutit.",
      },
    ],
    outro:
      "Taakku saniatigut periarfissat immikkut ittut allat amerlasuut akeqanngitsumik atorsinnaavatit aammalu nuannaarutigalugit.",
  },
  gn: {
    title: "Notepad en línea rehegua mba’eporã iporãvéva",
    features: [
      {
        title: "Auto guardado en línea",
        desc: "Ore notepad en línea ombyaty ijeheguiete nde rembiapo rehai aja, upévare ndereperde mo’ãi ni peteĩ ñe’ẽ, jepe nde navegador oñembyai térã remboty sapy’aitépe pestaña.",
      },
      {
        title: "Descargar TXT ha PDF formato-pe",
        desc: "Ore notepad ndive ikatu reguenohẽ nde notakuéra pya’e peteĩ archivo TXT térã PDF ipotĩháicha, ha upéicha ndahasýi hag̃ua reñongatu, reimprimi térã reñemosarambi offline-pe.",
      },
      {
        title: "Pantalla completa",
        desc: "Embohasa modo pantalla completa-pe ha eipuru ko notepad ndorekóiva distracción ome’ẽva ndéve peteĩ espacio de escritura potĩ ha tuicháva, iporãitereíva remba’apo hag̃ua rehecha hag̃uáicha.",
      },
      {
        title: "Zoom 200% rehegua",
        desc: "Ko notepad en línea oheja ndéve remboheta zoom 200% peve, upéicha ndahasýi hag̃ua nde resa rehehápe remba’apo aja heta tiempo térã texto michĩ ndive cualquier pantalla-pe.",
      },
      {
        title: "Moinge ta’anga, tabla, fecha auto-actualización ha exportar HTML",
        desc: "Ta’anga ha tabla estructurada moinge guive, fecha auto-actualización ha nde contenido exportación HTML peve, ko notepad ohasa mombyry edición de texto básico-gui.",
      },
      {
        title: "Títulos H1 guive H6 peve",
        desc: "Emohenda nde contenido peteĩ jerarquía completa de títulos H1 guive H6 peve, ome’ẽva ko notepad peteĩ estructura editor de documentos profesional nde navegador ryepýpe.",
      },
      {
        title: "Estilo de letra opaichagua",
        desc: "Eiporavo heta estilo de letra apytégui emboheko hag̃ua nde escritura ha embojoaju hag̃ua nde documentos ikatu hag̃uáicha oñemoñe’ẽ porãve, expresivo térã profesional.",
      },
      {
        title: "Moambue texto sa’y",
        desc: "Ko notepad en línea oheja ndéve emomba’e guasu hag̃ua punto iñimportánteva ha embojoaju hag̃ua claridad visual rembojuehevo texto sa’y, peteĩ herramienta simple ha katu poderosa mayma escritor-pe guarã.",
      },
      {
        title: "IA rehegua ñe’ẽgui texto oñemoambue hag̃ua, mba’e vai’ỹre",
        desc: "Eñe’ẽ nde pensamiento ha ehecha mba’éichapa ojehechauka pantalla ári hekopete. Ko notepad IA rehegua speech-to-text omoambue pya’e nde ñe’ẽ peteĩ texto potĩ ha hekope’ỹva’ỹre, upéicha reñongatu heta tiempo.",
      },
      {
        title: "Login rire emoheñói link oñembohasa hag̃uáicha",
        desc: "Oike rire, ore notepad oheja ndéve emoheñói peteĩ link único oñembohasa hag̃uáicha peteĩ nota oimeraẽva rehe, ha upéicha ñomoirũ ha ñembohasa pya’e oiko simple URL copia-icha.",
      },
      {
        title: "Emoheñói cuenta eñongatu hag̃ua historial",
        desc: "Emoheñói peteĩ cuenta gratis ko notepad-pe eipe’a hag̃ua nota historial, upéicha ikatu rehecha jey, errecupera ha emohenda opa mba’e nde rehehague peteĩ hendápe.",
      },
    ],
    outro:
      "Ko’ã mba’e ykére, oĩ heta ambue mba’e porã rehegua ikatúva reipuru ha reñembovy’a reiete.",
  },
  gu: {
    title: "ઑનલાઇન નોટપેડની મુખ્ય સુવિધાઓ",
    features: [
      {
        title: "ઓટો સેવ ઑનલાઇન",
        desc: "અમારું ઑનલાઇન નોટપેડ તમે લખો તે સાથે જ આપમેળે તમારું કામ સેવ કરે છે, તેથી તમે એકપણ શબ્દ ગુમાવતા નથી, ભલે તમારો બ્રાઉઝર ક્રેશ થઈ જાય અથવા તમે ભૂલથી ટેબ બંધ કરી દો.",
      },
      {
        title: "TXT અને PDF ફોર્મેટમાં ડાઉનલોડ કરો",
        desc: "અમારા નોટપેડ સાથે તમે તમારી નોંધોને તરત જ સ્વચ્છ TXT અથવા PDF ફાઇલ તરીકે એક્સપોર્ટ કરી શકો છો, જેથી તેને સેવ કરવું, પ્રિન્ટ કરવું અથવા ઑફલાઇન શેર કરવું સરળ બને છે.",
      },
      {
        title: "ફુલ સ્ક્રીન",
        desc: "ફુલ-સ્ક્રીન મોડ પર સ્વિચ કરો અને આ ડિસ્ટ્રેક્શન-ફ્રી નોટપેડ તમને એક સ્વચ્છ અને એજ-ટુ-એજ લખાણ માટેનું કેનવાસ આપે છે, જે ફોકસ્ડ લખાણ સત્રો માટે સંપૂર્ણ છે.",
      },
      {
        title: "200% ઝૂમ સુવિધા",
        desc: "આ ઑનલાઇન નોટપેડ તમને 200% સુધી ઝૂમ કરવાની સુવિધા આપે છે, જેથી લાંબા લખાણ સત્રો દરમિયાન અથવા નાના ટેક્સ્ટ સાથે કામ કરતી વખતે આંખોને આરામ મળે.",
      },
      {
        title: "છબીઓ, ટેબલ, ઓટો-અપડેટ તારીખો, HTML એક્સપોર્ટ ઉમેરો",
        desc: "છબીઓ અને સ્ટ્રક્ચર્ડ ટેબલ ઉમેરવાથી લઈને તારીખોનું ઓટો-અપડેટ અને તમારી સામગ્રીને HTML તરીકે એક્સપોર્ટ કરવા સુધી, આ નોટપેડ સામાન્ય ટેક્સ્ટ એડિટિંગથી ઘણું આગળ છે.",
      },
      {
        title: "H1 થી H6 સુધી હેડિંગ્સ",
        desc: "તમારી સામગ્રીને સંપૂર્ણ હેડિંગ હાયરાર્કી H1 થી H6 સાથે ગોઠવો, જે આ નોટપેડને તમારા બ્રાઉઝરમાં જ એક વ્યાવસાયિક ડોક્યુમેન્ટ એડિટર જેવી રચના આપે છે.",
      },
      {
        title: "વિવિધ ફૉન્ટ શૈલીઓ",
        desc: "તમારા લખાણના અનુભવને વ્યક્તિગત બનાવવા અને તમારા દસ્તાવેજોને વધુ વાંચવા યોગ્ય, અભિવ્યક્તિપૂર્ણ અથવા વ્યાવસાયિક બનાવવા માટે વિવિધ ફૉન્ટ શૈલીઓમાંથી પસંદ કરો.",
      },
      {
        title: "ટેક્સ્ટનો રંગ બદલો",
        desc: "આ ઑનલાઇન નોટપેડ તમને ટેક્સ્ટનો રંગ બદલીને મહત્વપૂર્ણ મુદ્દાઓ હાઇલાઇટ કરવા અને દૃશ્ય સ્પષ્ટતા ઉમેરવા દે છે, જે દરેક લેખક માટે એક સરળ પરંતુ શક્તિશાળી ફોર્મેટિંગ ટૂલ છે.",
      },
      {
        title: "AI આધારિત સ્પીચ ટુ ટેક્સ્ટ (ભૂલ વગર)",
        desc: "તમારા વિચારો બોલો અને તેને ઉચ્ચ ચોકસાઈ સાથે સ્ક્રીન પર દેખાતા જુઓ. આ નોટપેડની AI આધારિત સ્પીચ-ટુ-ટેક્સ્ટ સુવિધા તમારી અવાજને તરત જ સ્વચ્છ અને ભૂલરહિત ટેક્સ્ટમાં ફેરવે છે, જેથી તમારો ઘણો સમય બચી જાય છે.",
      },
      {
        title: "લૉગિન પછી શેર કરી શકાય તેવો લિંક બનાવો",
        desc: "લૉગિન થયા પછી, અમારું નોટપેડ તમને કોઈપણ નોંધ માટે અનન્ય શેર કરી શકાય તેવો લિંક બનાવવા દે છે, જેથી સહકાર અને ઝડપી શેરિંગ URL કોપી કરવા જેટલું સરળ બને છે.",
      },
      {
        title: "ઇતિહાસ સાચવવા માટે એકાઉન્ટ બનાવો",
        desc: "આ નોટપેડ પર મફત એકાઉન્ટ બનાવો જેથી નોટ ઇતિહાસ અનલૉક થાય અને તમે જે કંઈ લખ્યું છે તે બધું એક જ જગ્યાએ ફરી જોઈ, પુનઃપ્રાપ્ત કરી અને મેનેજ કરી શકો.",
      },
    ],
    outro:
      "આ ઉપરાંત ઘણી બધી અન્ય અનન્ય સુવિધાઓ છે જેને તમે મફતમાં ઉપયોગ કરી શકો છો અને માણી શકો છો.",
  },
  ht: {
    title: "Prensipal Karakteristik Notepad sou Entènèt",
    features: [
      {
        title: "Sove otomatik sou entènèt",
        desc: "Notepad sou entènèt nou an sove travay ou otomatikman pandan w ap ekri, konsa ou pa janm pèdi yon sèl mo, menm si navigatè ou a fè fay oswa ou fèmen onglet la pa erè.",
      },
      {
        title: "Telechaje nan fòma TXT ak PDF",
        desc: "Avèk notepad nou an, ou ka ekspòte nòt ou yo imedyatman kòm yon fichye TXT oswa PDF pwòp, sa ki fè li fasil pou sove, enprime oswa pataje travay ou offline.",
      },
      {
        title: "Plein ekran",
        desc: "Chanje nan mòd plein ekran epi sèvi ak notepad sa a ki san distraksyon ki ba ou yon espas ekriti pwòp soti yon bò rive lòt, pafè pou sesyon ekriti konsantre.",
      },
      {
        title: "Fonksyon zoom 200%",
        desc: "Notepad sou entènèt sa a pèmèt ou agrandi jiska 200%, sa ki fè li pi fasil pou je yo pandan sesyon ekriti long oswa lè w ap travay ak tèks piti sou nenpòt ekran.",
      },
      {
        title: "Antre imaj, tablo, aktyalizasyon otomatik dat, ekspòte HTML",
        desc: "Soti nan mete imaj ak tablo estriktire rive nan aktyalizasyon otomatik dat ak ekspòtasyon kontni ou kòm HTML, notepad sa a ale pi lwen pase senp koreksyon tèks.",
      },
      {
        title: "Tit soti H1 rive H6",
        desc: "Òganize kontni ou ak yon yerachi tit konplè soti H1 rive H6, sa ki bay notepad sa a estrikti yon editè dokiman pwofesyonèl dirèk nan navigatè ou.",
      },
      {
        title: "Diferan estil polis (font)",
        desc: "Chwazi pami plizyè estil polis pou pèsonalize eksperyans ekriti ou epi fè dokiman ou yo pi fasil pou li, pi ekspresif oswa pi pwofesyonèl.",
      },
      {
        title: "Chanje koulè tèks",
        desc: "Notepad sou entènèt sa a pèmèt ou make pwen enpòtan yo epi ajoute plis klète vizyèl lè w chanje koulè tèks, yon zouti fòma senp men pwisan pou nenpòt ekriven.",
      },
      {
        title: "Konvèsyon vwa an tèks ak entèlijans atifisyèl san erè",
        desc: "Pale panse ou epi gade yo parèt sou ekran ak gwo presizyon. Fonksyon konvèsyon vwa an tèks ak entèlijans atifisyèl nan notepad sa a transfòme vwa ou imedyatman an tèks pwòp san erè, sa ki ekonomize ou anpil tan.",
      },
      {
        title: "Jenere lyen pou pataje apre koneksyon",
        desc: "Yon fwa ou konekte, notepad nou an pèmèt ou jenere yon lyen inik pou pataje nenpòt nòt, sa ki fè kolaborasyon ak pataj rapid vin senp tankou kopye yon URL.",
      },
      {
        title: "Kreye kont pou anrejistre istwa",
        desc: "Kreye yon kont gratis sou notepad sa a pou ouvri istwa nòt yo, konsa ou ka revize, rekipere epi jere tout sa ou te janm ekri, nan yon sèl kote.",
      },
    ],
    outro:
      "Apa de sa yo, gen anpil lòt karakteristik inik ou ka itilize epi jwi gratis.",
  },
  ha: {
    title: "Muhimman fasalolin Notepad na yanar gizo",
    features: [
      {
        title: "Ajiya ta atomatik a yanar gizo",
        desc: "Notepad ɗinmu na yanar gizo yana adana aikinku ta atomatik yayin da kuke rubutawa, don haka ba za ku taɓa rasa ko da kalma ɗaya ba, ko da burauzar ku ya fadi ko kuma kun rufe tab da kuskure.",
      },
      {
        title: "Sauke a tsarin TXT da PDF",
        desc: "Da wannan notepad ɗin, za ku iya fitar da bayananku nan take a matsayin fayil TXT ko PDF mai tsabta, wanda ke sauƙaƙa adanawa, bugawa ko raba aikinku ba tare da intanet ba.",
      },
      {
        title: "Cikakken allo",
        desc: "Canja zuwa yanayin cikakken allo kuma ku yi amfani da wannan notepad mara shagala wanda ke ba ku tsaftataccen filin rubutu daga gefe zuwa gefe, mai kyau don rubutu mai mayar da hankali.",
      },
      {
        title: "Fasalin zuƙowa har zuwa 200%",
        desc: "Wannan notepad na yanar gizo yana ba ku damar zuƙowa har zuwa 200%, yana sa ya fi sauƙi ga idanu yayin dogon zaman rubutu ko lokacin aiki da ƙaramin rubutu a kowane allo.",
      },
      {
        title: "Saka hotuna, teburi, sabunta kwanan wata ta atomatik, fitar da HTML",
        desc: "Daga saka hotuna da teburi masu tsari zuwa sabunta kwanan wata ta atomatik da fitar da abun cikin ku a matsayin HTML, wannan notepad ya wuce gyaran rubutu na yau da kullum sosai.",
      },
      {
        title: "Kanun labarai daga H1 zuwa H6",
        desc: "Tsara abun cikin ku da cikakken tsarin kanun labarai daga H1 zuwa H6, yana ba wannan notepad tsarin editan takardu na gaskiya kai tsaye a cikin burauzarku.",
      },
      {
        title: "Daban-daban salon rubutu (font)",
        desc: "Zaɓi daga nau’ikan salon rubutu daban-daban don keɓance kwarewar rubutunku kuma ku sa takardunku su zama masu sauƙin karantawa, masu bayyana ji ko ƙwararru.",
      },
      {
        title: "Canza launin rubutu",
        desc: "Wannan notepad na yanar gizo yana ba ku damar haskaka muhimman abubuwa da ƙara bayyananniyar gani ta hanyar canza launin rubutu, kayan aikin gyaran rubutu mai sauƙi amma mai ƙarfi ga kowane marubuci.",
      },
      {
        title: "Rubutu daga murya da AI ba tare da kuskure ba",
        desc: "Faɗi tunaninku kuma ku ga yadda suke bayyana a allo da cikakkiyar daidaito. Fasalin AI na canza murya zuwa rubutu na wannan notepad yana juya muryarku zuwa rubutu mai tsabta ba tare da kuskure ba nan take, yana taimaka muku adana lokaci sosai.",
      },
      {
        title: "Ƙirƙiri hanyar haɗi don rabawa bayan shiga",
        desc: "Bayan kun shiga, notepad ɗinmu yana ba ku damar ƙirƙirar keɓaɓɓen hanyar haɗi don kowane rubutu, yana sa haɗin gwiwa da rabawa cikin sauƙi kamar kwafin URL.",
      },
      {
        title: "Ƙirƙiri asusu don adana tarihin rubutu",
        desc: "Ƙirƙiri asusun kyauta a wannan notepad don buɗe tarihin rubutu, domin ku iya duba, dawo da kuma sarrafa duk abin da kuka taɓa rubutawa a wuri ɗaya.",
      },
    ],
    outro:
      "Baya ga waɗannan, akwai wasu fasaloli na musamman da yawa da za ku iya amfani da su kuma ku more su kyauta.",
  },
  he: {
    title: "תכונות עיקריות של פנקס הרשימות המקוון",
    features: [
      {
        title: "שמירה אוטומטית אונליין",
        desc: "פנקס הרשימות המקוון שלנו שומר אוטומטית את העבודה שלך בזמן ההקלדה, כך שלעולם לא תאבד אפילו מילה אחת, גם אם הדפדפן קורס או שסגרת בטעות את הלשונית.",
      },
      {
        title: "הורדה בפורמט TXT ו-PDF",
        desc: "באמצעות פנקס הרשימות שלנו ניתן לייצא את ההערות שלך באופן מיידי כקובץ TXT או PDF נקי, מה שמקל על שמירה, הדפסה או שיתוף של העבודה שלך ללא חיבור לאינטרנט.",
      },
      {
        title: "מסך מלא",
        desc: "עברו למצב מסך מלא והשתמשו בפנקס הרשימות נטול ההסחות הזה שמעניק לכם מרחב כתיבה נקי מקצה לקצה, מושלם לכתיבה ממוקדת.",
      },
      {
        title: "אפשרות זום של 200%",
        desc: "פנקס הרשימות המקוון הזה מאפשר הגדלה עד 200%, מה שמקל על העיניים במהלך כתיבה ממושכת או עבודה עם טקסט קטן בכל מסך.",
      },
      {
        title: "הוספת תמונות, טבלאות, עדכון תאריכים אוטומטי, ייצוא HTML",
        desc: "מהוספת תמונות וטבלאות מובנות ועד עדכון תאריכים אוטומטי וייצוא התוכן שלך כ-HTML, פנקס הרשימות הזה חורג הרבה מעבר לעריכת טקסט בסיסית.",
      },
      {
        title: "כותרות מ-H1 עד H6",
        desc: "ארגנו את התוכן שלכם עם היררכיית כותרות מלאה מ-H1 עד H6, מה שמעניק לפנקס הרשימות הזה מבנה של עורך מסמכים מקצועי ישירות בדפדפן.",
      },
      {
        title: "סגנונות גופן שונים",
        desc: "בחרו מתוך מגוון סגנונות גופן כדי להתאים אישית את חוויית הכתיבה שלכם ולהפוך את המסמכים לקריאים, אקספרסיביים או מקצועיים יותר.",
      },
      {
        title: "שינוי צבע טקסט",
        desc: "פנקס הרשימות המקוון הזה מאפשר לכם להדגיש נקודות חשובות ולהוסיף בהירות חזותית באמצעות שינוי צבע הטקסט, כלי עיצוב פשוט אך עוצמתי לכל כותב.",
      },
      {
        title: "המרת דיבור לטקסט מבוססת בינה מלאכותית ללא שגיאות",
        desc: "אמרו את מחשבותיכם וצפו בהן מופיעות על המסך בדיוק גבוה. תכונת ההמרה מדיבור לטקסט מבוססת הבינה המלאכותית של פנקס הרשימות הזה ממירה את קולכם מיד לטקסט נקי וללא שגיאות, כך שתוכלו לחסוך הרבה זמן.",
      },
      {
        title: "יצירת קישור לשיתוף לאחר התחברות",
        desc: "לאחר התחברות, פנקס הרשימות שלנו מאפשר לכם ליצור קישור ייחודי לשיתוף עבור כל הערה, מה שהופך שיתוף ושיתוף פעולה לפשוטים כמו העתקת כתובת URL.",
      },
      {
        title: "יצירת חשבון לשמירת היסטוריה",
        desc: "צרו חשבון חינמי בפנקס הרשימות הזה כדי לפתוח את היסטוריית ההערות, כך שתוכלו לעיין, לשחזר ולנהל את כל מה שכתבתם אי פעם במקום אחד.",
      },
    ],
    outro:
      "בנוסף לכך, יש עוד הרבה תכונות ייחודיות שתוכלו להשתמש בהן וליהנות מהן בחינם.",
  },
  hi: {
    title: "ऑनलाइन नोटपैड की मुख्य विशेषताएँ",
    features: [
      {
        title: "ऑटो सेव ऑनलाइन",
        desc: "हमारा ऑनलाइन नोटपैड आपके टाइप करते ही आपका काम अपने आप सेव कर देता है, इसलिए आप एक भी शब्द नहीं खोते, चाहे आपका ब्राउज़र क्रैश हो जाए या आप गलती से टैब बंद कर दें।",
      },
      {
        title: "TXT और PDF फॉर्मेट में डाउनलोड करें",
        desc: "हमारे नोटपैड से आप अपनी नोट्स को तुरंत एक साफ TXT या PDF फाइल के रूप में एक्सपोर्ट कर सकते हैं, जिससे इसे सेव करना, प्रिंट करना या ऑफलाइन शेयर करना आसान हो जाता है।",
      },
      {
        title: "फुल स्क्रीन",
        desc: "फुल-स्क्रीन मोड पर स्विच करें और इस बिना ध्यान भटकाने वाले नोटपैड का उपयोग करें, जो आपको एक साफ और किनारे से किनारे तक लिखने का कैनवास देता है, जो फोकस्ड लेखन के लिए बिल्कुल सही है।",
      },
      {
        title: "200% ज़ूम फीचर",
        desc: "यह ऑनलाइन नोटपैड आपको 200% तक ज़ूम करने की सुविधा देता है, जिससे लंबे लेखन सत्रों में या छोटे टेक्स्ट के साथ काम करते समय आंखों पर कम दबाव पड़ता है।",
      },
      {
        title: "छवियाँ, टेबल, ऑटो-अपडेट तिथियाँ, HTML एक्सपोर्ट जोड़ें",
        desc: "छवियाँ और संरचित टेबल जोड़ने से लेकर तिथियों के ऑटो-अपडेट और आपकी सामग्री को HTML के रूप में एक्सपोर्ट करने तक, यह नोटपैड साधारण टेक्स्ट एडिटिंग से कहीं आगे है।",
      },
      {
        title: "H1 से H6 तक हेडिंग्स",
        desc: "अपनी सामग्री को H1 से H6 तक की पूरी हेडिंग हायरार्की के साथ व्यवस्थित करें, जिससे यह नोटपैड आपके ब्राउज़र में ही एक प्रोफेशनल डॉक्यूमेंट एडिटर जैसी संरचना देता है।",
      },
      {
        title: "विभिन्न फ़ॉन्ट स्टाइल्स",
        desc: "अपने लेखन अनुभव को व्यक्तिगत बनाने और अपने दस्तावेज़ों को अधिक पठनीय, अभिव्यक्तिपूर्ण या पेशेवर बनाने के लिए विभिन्न फ़ॉन्ट स्टाइल्स में से चुनें।",
      },
      {
        title: "टेक्स्ट का रंग बदलें",
        desc: "यह ऑनलाइन नोटपैड आपको टेक्स्ट का रंग बदलकर महत्वपूर्ण बिंदुओं को हाइलाइट करने और दृश्य स्पष्टता जोड़ने की सुविधा देता है, जो किसी भी लेखक के लिए एक सरल लेकिन शक्तिशाली फ़ॉर्मेटिंग टूल है।",
      },
      {
        title: "AI-संचालित स्पीच टू टेक्स्ट बिना किसी त्रुटि के",
        desc: "अपने विचार बोलें और उन्हें उच्च सटीकता के साथ स्क्रीन पर दिखाई देते हुए देखें। इस नोटपैड की AI-संचालित स्पीच-टू-टेक्स्ट सुविधा आपकी आवाज़ को तुरंत साफ और त्रुटिरहित टेक्स्ट में बदल देती है, जिससे आपका बहुत समय बचता है।",
      },
      {
        title: "साइन इन के बाद शेयर करने योग्य लिंक बनाएं",
        desc: "साइन इन करने के बाद, हमारा नोटपैड किसी भी नोट के लिए एक यूनिक शेयर करने योग्य लिंक बनाने की सुविधा देता है, जिससे सहयोग और तेज़ शेयरिंग URL कॉपी करने जितना आसान हो जाता है।",
      },
      {
        title: "इतिहास रिकॉर्ड करने के लिए अकाउंट बनाएं",
        desc: "इस नोटपैड पर एक मुफ्त अकाउंट बनाएं ताकि नोट हिस्ट्री अनलॉक हो सके और आप अपनी लिखी हुई हर चीज़ को एक ही जगह पर देख, रिकवर और मैनेज कर सकें।",
      },
    ],
    outro:
      "इनके अलावा भी कई अन्य अनोखी सुविधाएँ हैं जिन्हें आप मुफ्त में उपयोग कर सकते हैं और आनंद ले सकते हैं।",
  },
  hu: {
    title: "Az online jegyzettömb fő funkciói",
    features: [
      {
        title: "Automatikus online mentés",
        desc: "Az online jegyzettömb automatikusan menti a munkádat gépelés közben, így soha nem veszíted el egyetlen szavadat sem, még akkor sem, ha a böngésző összeomlik vagy véletlenül bezárod a fület.",
      },
      {
        title: "Letöltés TXT és PDF formátumban",
        desc: "A jegyzettömbünkkel azonnal exportálhatod a jegyzeteidet tiszta TXT vagy PDF fájlként, így könnyen elmentheted, kinyomtathatod vagy megoszthatod a munkádat offline.",
      },
      {
        title: "Teljes képernyő",
        desc: "Válts teljes képernyős módra, és használd ezt a zavaró tényezőktől mentes jegyzettömböt, amely tiszta, széltől szélig írófelületet biztosít, tökéletes a koncentrált íráshoz.",
      },
      {
        title: "200%-os nagyítási funkció",
        desc: "Ez az online jegyzettömb akár 200%-os nagyítást is lehetővé tesz, így kíméli a szemet hosszú írási munkamenetek során vagy kis szöveg olvasásakor bármilyen képernyőn.",
      },
      {
        title: "Képek, táblázatok beszúrása, automatikus dátumfrissítés, HTML export",
        desc: "A képek és strukturált táblázatok beszúrásától kezdve az automatikus dátumfrissítésen át a tartalom HTML-ként történő exportálásáig ez a jegyzettömb messze túlmutat az alapvető szövegszerkesztésen.",
      },
      {
        title: "Címsorok H1-től H6-ig",
        desc: "Rendezd a tartalmadat teljes címsor-hierarchiával H1-től H6-ig, így ez a jegyzettömb egy valódi dokumentumszerkesztő struktúráját kapja a böngésződben.",
      },
      {
        title: "Különböző betűstílusok",
        desc: "Válassz különböző betűstílusok közül, hogy személyre szabhasd az írási élményt, és a dokumentumaid olvashatóbbak, kifejezőbbek vagy professzionálisabbak legyenek.",
      },
      {
        title: "Szöveg színének megváltoztatása",
        desc: "Ez az online jegyzettömb lehetővé teszi a fontos pontok kiemelését és a vizuális átláthatóság növelését a szöveg színének megváltoztatásával, ami egy egyszerű, de erőteljes formázóeszköz minden író számára.",
      },
      {
        title: "Mesterséges intelligencia által támogatott beszédfelismerés szöveggé hibák nélkül",
        desc: "Mondd ki a gondolataidat, és figyeld, ahogy nagy pontossággal megjelennek a képernyőn. Ennek a jegyzettömbnek az AI-alapú beszédből szöveggé alakító funkciója azonnal tiszta, hibamentes szöveggé alakítja a hangodat, így sok időt takaríthatsz meg.",
      },
      {
        title: "Megosztható link létrehozása bejelentkezés után",
        desc: "Bejelentkezés után a jegyzettömbünk lehetővé teszi, hogy bármely jegyzethez egyedi megosztható linket hozz létre, így az együttműködés és a gyors megosztás olyan egyszerű, mint egy URL másolása.",
      },
      {
        title: "Fiók létrehozása az előzmények rögzítéséhez",
        desc: "Hozz létre egy ingyenes fiókot ezen a jegyzettömbön, hogy elérd a jegyzetelőzményeket, így újra megtekintheted, helyreállíthatod és kezelheted mindazt, amit valaha írtál, egy helyen.",
      },
    ],
    outro:
      "Ezeken kívül még sok más egyedi funkció is elérhető, amelyeket ingyen használhatsz és élvezhetsz.",
  },
};

export function getHomeFeaturesCopy(locale: string): HomeFeaturesCopy {
  return featuresByLocale[locale] ?? featuresEn;
}
