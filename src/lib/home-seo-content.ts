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
  is: {
    title: "Helstu eiginleikar netminnisbókar",
    features: [
      {
        title: "Sjálfvirk vistun á netinu",
        desc: "Netminnisbókin okkar vistar vinnuna þína sjálfkrafa á meðan þú skrifar, þannig að þú tapar aldrei einu einasta orði, jafnvel þótt vafrinn hrynji eða þú lokir flipanum óvart.",
      },
      {
        title: "Niðurhal í TXT og PDF sniði",
        desc: "Með minnisbókinni okkar geturðu flutt glósurnar þínar út samstundis sem hreina TXT eða PDF skrá, sem gerir það auðvelt að vista, prenta eða deila vinnunni þinni án nettengingar.",
      },
      {
        title: "Fullskjár",
        desc: "Skiptu í fullskjástillingu og notaðu þessa truflunarlausu minnisbók sem gefur þér hreint ritunarsvæði frá kanti til kants, fullkomið fyrir einbeitta skriflotu.",
      },
      {
        title: "200% aðdráttareiginleiki",
        desc: "Þessi netminnisbók gerir þér kleift að stækka allt að 200%, sem léttir á augunum við langar skriflotur eða þegar unnið er með lítinn texta á hvaða skjá sem er.",
      },
      {
        title: "Setja inn myndir, töflur, sjálfvirk dagsetningaruppfærsla, flytja út HTML",
        desc: "Frá því að setja inn myndir og skipulagðar töflur til sjálfvirkrar dagsetningaruppfærslu og útflutnings á efni sem HTML, fer þessi minnisbók langt umfram hefðbundna textavinnslu.",
      },
      {
        title: "Fyrirsagnir frá H1 til H6",
        desc: "Skipuleggðu efnið þitt með heilli fyrirsagnarstigveldi frá H1 til H6, sem gefur þessari minnisbók uppbyggingu faglegs skjalaritstjóra beint í vafranum þínum.",
      },
      {
        title: "Mismunandi leturgerðir",
        desc: "Veldu úr fjölbreyttum leturgerðum til að sérsníða skrifupplifun þína og gera skjölin þín læsilegri, tjáningarríkari eða faglegri.",
      },
      {
        title: "Breyta textalit",
        desc: "Þessi netminnisbók gerir þér kleift að auðkenna lykilatriði og bæta sjónræna skýrleika með því að breyta textalit, einfalt en öflugt sniðverkfæri fyrir alla skrifara.",
      },
      {
        title: "Gervigreindarstudd tal-í-texta umbreyting án villna",
        desc: "Segðu hugsanir þínar upphátt og sjáðu þær birtast á skjánum með mikilli nákvæmni. Gervigreindarstudd tal-í-texta eiginleiki þessarar minnisbókar umbreytir rödd þinni samstundis í hreinan og villulausan texta, sem sparar þér mikinn tíma.",
      },
      {
        title: "Búa til deilanlegan hlekk eftir innskráningu",
        desc: "Eftir innskráningu gerir minnisbókin okkar þér kleift að búa til einstakan deilanlegan hlekk fyrir hvaða glósu sem er, sem gerir samvinnu og hraða deilingu eins einfalda og að afrita slóð.",
      },
      {
        title: "Búa til reikning til að vista feril",
        desc: "Búðu til ókeypis reikning á þessari minnisbók til að opna glósuferil, svo þú getir skoðað, endurheimt og stjórnað öllu sem þú hefur nokkurn tíma skrifað, allt á einum stað.",
      },
    ],
    outro:
      "Auk þessara eru margar aðrar einstakar eiginleikar sem þú getur notað og notið ókeypis.",
  },
  ig: {
    title: "Njirimara ndị bụ isi nke Notepad dị n’ịntanetị",
    features: [
      {
        title: "Nchekwa akpaghị aka n’ịntanetị",
        desc: "Notepad anyị dị n’ịntanetị na-echekwa ọrụ gị akpaghị aka mgbe ị na-ede, ya mere ị gaghị atụfu ọbụna otu okwu, ọbụlagodi ma ọ bụrụ na ihe nchọgharị gị daa ma ọ bụ mechie taabụ ahụ n’amaghị ama.",
      },
      {
        title: "Budata na ụdị TXT na PDF",
        desc: "Site na notepad anyị, ị nwere ike ịtụpụ (export) ndetu gị ozugbo dịka faịlụ TXT ma ọ bụ PDF dị ọcha, nke na-eme ka ọ dị mfe ịchekwa, ibipụta, ma ọ bụ kesaa ọrụ gị na-enweghị ịntanetị.",
      },
      {
        title: "Ihuenyo zuru ezu",
        desc: "Gbanwee gaa na ọnọdụ ihuenyo zuru ezu ma jiri notepad a na-enweghị ihe na-adọpụ uche nke na-enye gị ebe ide ihe dị ọcha site n’otu akụkụ ruo n’akụkụ ọzọ, nke zuru oke maka ide ihe nke na-achọ itinye uche.",
      },
      {
        title: "Njirimara mbugharị (zoom) 200%",
        desc: "Notepad a dị n’ịntanetị na-enye gị ohere ime ka ihe dị ukwuu ruo 200%, nke na-eme ka ọ dị mfe maka anya n’oge ide ogologo oge ma ọ bụ mgbe ị na-arụ ọrụ na ederede pere mpe na ihuenyo ọ bụla.",
      },
      {
        title: "Tinye onyonyo, tebụl, mmelite ụbọchị akpaghị aka, mbupụ HTML",
        desc: "Site n’itinye onyonyo na tebụl ahaziri ahazi ruo na mmelite ụbọchị akpaghị aka na mbupụ ọdịnaya gị dịka HTML, notepad a karịrị nke ukwuu ndezi ederede nkịtị.",
      },
      {
        title: "Aha isiokwu site na H1 ruo H6",
        desc: "Hazie ọdịnaya gị site na usoro aha isiokwu zuru ezu H1 ruo H6, nke na-enye notepad a nhazi dịka onye editọ akwụkwọ ọkachamara n’ime ihe nchọgharị gị.",
      },
      {
        title: "Ụdị font dị iche iche",
        desc: "Họrọ n’etiti ụdị font dị iche iche iji hazie ahụmịhe ide gị ma mee ka akwụkwọ gị dịkwuo mfe ịgụ, nwee nkọwa ma ọ bụ bụrụ ọkachamara.",
      },
      {
        title: "Gbanwee agba ederede",
        desc: "Notepad a dị n’ịntanetị na-enye gị ohere ịkọwapụta isi ihe dị mkpa ma tinye nghọta anya site n’ịgbanwe agba ederede, ngwá ọrụ nhazi dị mfe ma sie ike maka onye ọ bụla na-ede ihe.",
      },
      {
        title: "Ntughari olu gaa na ederede site na AI na-enweghị njehie",
        desc: "Kwuo echiche gị ma lelee ka ha si apụta na ihuenyo n’ụzọ ziri ezi nke ukwuu. Njirimara AI nke notepad a na-agbanwe olu gaa na ederede na-eme ka olu gị bụrụ ederede dị ọcha na-enweghị njehie ozugbo, nke na-enyere gị aka ịchekwa oge buru ibu.",
      },
      {
        title: "Mepụta njikọ enwere ike ịkekọrịta mgbe ị batara (login)",
        desc: "Mgbe ị batara n’ime akaụntụ, notepad anyị na-enye gị ohere ịmepụta njikọ pụrụ iche enwere ike ịkekọrịta maka ndetu ọ bụla, nke na-eme ka ịrụkọ ọrụ ọnụ na ịkekọrịta ngwa ngwa dị mfe dịka ịdepụta URL.",
      },
      {
        title: "Mepụta akaụntụ iji chekwa akụkọ (history)",
        desc: "Mepụta akaụntụ n’efu na notepad a iji mepee akụkọ ndetu, ka i wee nwee ike ileghachi anya, weghachite ma jikwaa ihe niile i dere n’otu ebe.",
      },
    ],
    outro:
      "E wezụga ihe ndị a, enwere ọtụtụ atụmatụ pụrụ iche ndị ọzọ ị nwere ike iji ma nwee obi ụtọ na ha n’efu.",
  },
  id: {
    title: "Fitur Utama Notepad Online",
    features: [
      {
        title: "Penyimpanan otomatis online",
        desc: "Notepad online kami secara otomatis menyimpan pekerjaan Anda saat Anda mengetik, sehingga Anda tidak akan kehilangan satu kata pun, bahkan jika browser Anda crash atau Anda tidak sengaja menutup tab.",
      },
      {
        title: "Unduh dalam format TXT dan PDF",
        desc: "Dengan notepad kami, Anda dapat mengekspor catatan Anda secara instan sebagai file TXT atau PDF yang bersih, sehingga mudah untuk disimpan, dicetak, atau dibagikan secara offline.",
      },
      {
        title: "Layar penuh",
        desc: "Beralih ke mode layar penuh dan gunakan notepad bebas gangguan ini yang memberikan kanvas menulis yang bersih dari tepi ke tepi, sempurna untuk sesi menulis yang fokus.",
      },
      {
        title: "Fitur zoom 200%",
        desc: "Notepad online ini memungkinkan Anda memperbesar hingga 200%, sehingga lebih nyaman untuk mata saat sesi menulis panjang atau saat bekerja dengan teks kecil di layar apa pun.",
      },
      {
        title: "Sisipkan gambar, tabel, pembaruan tanggal otomatis, ekspor HTML",
        desc: "Mulai dari menyisipkan gambar dan tabel terstruktur hingga pembaruan tanggal otomatis dan mengekspor konten Anda sebagai HTML, notepad ini jauh melampaui pengeditan teks dasar.",
      },
      {
        title: "Heading dari H1 sampai H6",
        desc: "Atur konten Anda dengan hierarki heading lengkap dari H1 hingga H6, memberikan notepad ini struktur seperti editor dokumen profesional langsung di browser Anda.",
      },
      {
        title: "Berbagai gaya font",
        desc: "Pilih dari berbagai gaya font untuk mempersonalisasi pengalaman menulis Anda dan membuat dokumen Anda lebih mudah dibaca, ekspresif, atau profesional.",
      },
      {
        title: "Ubah warna teks",
        desc: "Notepad online ini memungkinkan Anda menyoroti poin penting dan menambah kejelasan visual dengan mengubah warna teks, alat pemformatan sederhana namun kuat untuk setiap penulis.",
      },
      {
        title: "Speech-to-text berbasis AI tanpa kesalahan",
        desc: "Ucapkan pikiran Anda dan lihat semuanya muncul di layar dengan akurasi tinggi. Fitur speech-to-text berbasis AI pada notepad ini secara instan mengubah suara Anda menjadi teks yang bersih dan bebas kesalahan, sehingga Anda dapat menghemat banyak waktu.",
      },
      {
        title: "Buat tautan yang bisa dibagikan setelah login",
        desc: "Setelah login, notepad kami memungkinkan Anda membuat tautan unik yang dapat dibagikan untuk setiap catatan, sehingga kolaborasi dan berbagi cepat menjadi semudah menyalin URL.",
      },
      {
        title: "Buat akun untuk menyimpan riwayat",
        desc: "Buat akun gratis di notepad ini untuk membuka riwayat catatan, sehingga Anda dapat melihat kembali, memulihkan, dan mengelola semua yang pernah Anda tulis dalam satu tempat.",
      },
    ],
    outro:
      "Selain itu, masih banyak fitur unik lainnya yang dapat Anda gunakan dan nikmati secara gratis.",
  },
  iu: {
    title: "ᐊᓯᖏᑦ ᐱᔪᓐᓇᕈᑏᑦ ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎᒧᑦ (Notepad Online)",
    features: [
      {
        title: "ᐊᐅᓚᔾᔪᑎᖃᖅᑐᖅ ᐊᓯᖏᓐᓂ ᓄᑖᒥ ᐱᓯᒪᔪᓂᒃ (Auto Save) ᐃᓄᖕᓄᑦ ᓄᑖᒥ",
        desc: "ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎᕗᑦ ᐊᐅᓚᔾᔪᑎᖃᖅᑐᖅ ᐊᓯᖏᓐᓂ ᐱᓯᒪᔪᓂᒃ ᑎᑎᕋᓕᕐᓂᐊᕐᓗᑎᑦ, ᑕᐃᒪᓐᓇ ᐊᓯᖏᑦ ᐃᓚᒋᐊᖅᑐᑦ ᐃᓕᓐᓂᒃ ᐊᔪᖅᑐᖅ ᐊᓯᐊᓂ ᐃᓚᖏᑦ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᑦ, ᐊᓯᐊᓂ ᐅᐃᒍᓐᓇᐃᑦ ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᓱᕐᕋᔭᖅᑐᖅ ᐅᕙᓂ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ.",
      },
      {
        title: "TXT ᐊᒻᒪ PDF ᐱᔭᕇᖅᑐᑦ ᐊᓯᖏᓐᓂ ᓄᑖᒥ",
        desc: "ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎᕗᑦ ᐊᔪᖏᑦᑐᖅ ᐱᓯᒪᔪᓂᒃ TXT ᐅᕝᕙᓘᓐᓃᑦ PDF ᐊᓯᖏᓐᓂ ᐱᓯᒪᔪᓂᒃ ᓄᑖᒥ, ᑕᐃᒪᓐᓇ ᐊᓯᖏᑦ ᐱᔭᕇᖅᑐᑦ, ᐅᐃᒍᓐᓇᐃᑦ, ᐊᒻᒪ ᐱᖃᑖᖅᑐᑦ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᑦ.",
      },
      {
        title: "ᐱᔭᕇᖅᑐᖅ ᓵᓚᐅᑎᒥ (Full Screen)",
        desc: "ᓵᓚᐅᑎᒥ ᐊᓯᐊᓂ ᐊᓯᖏᑦ ᐱᓯᒪᔪᓂᒃ ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᐊᐅᓚᔾᔪᑎᖃᖅᑐᖅ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᓄᑖᒥ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᑎᑎᕋᓂᒃ ᐱᔭᕇᖅᑐᖅ ᓄᑖᒥ.",
      },
      {
        title: "200% ᐊᔾᔨᖏᑦ (Zoom)",
        desc: "ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᐊᔪᖏᑦᑐᖅ ᐊᔾᔨᖏᑦ 200% ᐱᔭᕇᖅᑐᖅ, ᑕᐃᒪᓐᓇ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐱᔭᕇᖅᑐᖅ.",
      },
      {
        title: "ᐃᓚᓯᒋᑦ ᐊᔾᔨᓐᓂᒃ, ᑐᐊᐸᓪ, ᑕᐃᒪᓐᓇ ᐊᐅᓚᔾᔪᑎᖃᖅᑐᖅ ᐅᑭᐅᑦ, HTML ᐱᔭᕇᖅᑐᑦ",
        desc: "ᐃᓚᓯᒋᑦ ᐊᔾᔨᓐᓂᒃ ᐊᒻᒪ ᑐᐊᐸᓪ ᐊᓯᖏᑦ ᐱᔭᕇᖅᑐᑦ, HTML ᐱᔭᕇᖅᑐᑦ, ᐊᓯᐊᓂ ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᐊᓯᖏᓐᓂ.",
      },
      {
        title: "H1 ᐊᒻᒪ H6 ᐊᓯᖏᑦ",
        desc: "ᐊᓯᐊᓂ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᐊᓯᐊᓂ H1 ᐊᒻᒪ H6, ᐱᔭᕇᖅᑐᖅ ᓄᑖᒥ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ.",
      },
      {
        title: "ᐊᓯᖏᑦ ᐱᔭᕇᖅᑐᑦ ᐊᓯᖏᑦ",
        desc: "ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᑦ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᐊᓯᖏᑦ ᐱᔭᕇᖅᑐᖅ.",
      },
      {
        title: "ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ (ᑕᐃᒪᓐᓇ ᐊᓯᖏᑦ)",
        desc: "ᓄᑖᒥ ᑎᑎᕋᐅᓯᕆᔾᔪᑎ ᐊᓯᐊᓂ ᐊᔪᖏᑦᑐᖅ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ.",
      },
      {
        title: "AI ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ (ᐱᔭᕇᖅᑐᖅ ᐊᓯᖏᑦ)",
        desc: "ᐅᖃᓗᒃᑎᑦ ᐱᔭᕇᖅᑐᑦ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ.",
      },
      {
        title: "ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᓄᑖᒥ (link)",
        desc: "ᓄᑖᒥ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐱᔭᕇᖅᑐᖅ ᓄᑖᒥ.",
      },
      {
        title: "ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐱᔭᕇᖅᑐᖅ (history)",
        desc: "ᓄᑖᒥ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ ᐱᔭᕇᖅᑐᖅ ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ.",
      },
    ],
    outro:
      "ᐊᓯᐊᓂ ᐱᔭᕇᖅᑐᖅ, ᐊᓯᖏᑦ ᐱᔭᕇᖅᑐᑦ ᐊᔪᖏᑦᑐᑦ ᐱᔭᕇᖅᑐᑦ ᐱᔭᕇᖅᑐᑦ.",
  },
  ga: {
    title: "Príomhghnéithe an Notepad Ar Líne",
    features: [
      {
        title: "Sábháil Uathoibríoch Ar Líne",
        desc: "Sábhálann ár notepad ar líne do chuid oibre go huathoibríoch agus tú ag clóscríobh, ionas nach gcaillfidh tú aon fhocal riamh, fiú má thuairteálann do bhrabhsálaí nó má dhúnann tú an cluaisín trí thimpiste.",
      },
      {
        title: "Íoslódáil i bhformáidí TXT agus PDF",
        desc: "Leis an notepad seo, is féidir leat do nótaí a easpórtáil láithreach mar chomhad glan TXT nó PDF, rud a fhágann go bhfuil sé éasca iad a shábháil, a phriontáil nó a roinnt as líne.",
      },
      {
        title: "Lánscáileán",
        desc: "Athraigh go mód lánscáileáin agus lig don notepad seo gan seachráin canbhás scríbhneoireachta glan, ó imeall go imeall, a thabhairt duit atá foirfe do sheisiúin scríbhneoireachta dírithe.",
      },
      {
        title: "Gné súmála 200%",
        desc: "Ligeann an notepad ar líne seo duit súmáil isteach suas le 200%, rud a fhágann go bhfuil sé níos éasca ar na súile le linn seisiúin fhada scríbhneoireachta nó agus tú ag obair le téacs beag ar aon scáileán.",
      },
      {
        title: "Cuir isteach íomhánna, táblaí, nuashonrú uathoibríoch dátaí, easpórtáil HTML",
        desc: "Ó íomhánna agus táblaí struchtúrtha a chur isteach go nuashonrú uathoibríoch dátaí agus d’inneachar a easpórtáil mar HTML, téann an notepad seo i bhfad níos faide ná eagarthóireacht bhunúsach téacs.",
      },
      {
        title: "Ceannteidil ó H1 go H6",
        desc: "Eagraigh d’inneachar le hiarrachas iomlán ceannteideal ó H1 go H6, rud a thugann struchtúr eagarthóra doiciméad cheart don notepad seo i do bhrabhsálaí.",
      },
      {
        title: "Stíleanna éagsúla cló",
        desc: "Roghnaigh ó éagsúlacht stíleanna cló chun do thaithí scríbhneoireachta a phearsanú agus chun do chuid doiciméad a dhéanamh níos inléite, níos léiritheacha nó níos gairmiúla.",
      },
      {
        title: "Athraigh dath an téacs",
        desc: "Ligeann an notepad ar líne seo duit príomhphointí a aibhsiú agus soiléireacht amhairc a chur leis trí dhath an téacs a athrú, uirlis fhormáidithe shimplí ach chumhachtach d’aon scríbhneoir.",
      },
      {
        title: "Ó chaint go téacs faoi thiomáint AI gan aon earráid",
        desc: "Abair do chuid smaointe agus féach orthu ag teacht chun cinn ar an scáileán le cruinneas ard. Tiontaíonn gné AI an notepad seo do ghuth ina théacs glan gan earráid láithreach, rud a shábhálann go leor ama duit.",
      },
      {
        title: "Cruthaigh nasc inroinnte tar éis logáil isteach",
        desc: "Nuair atá tú logáilte isteach, ligeann ár notepad duit nasc uathúil inroinnte a ghiniúint do nóta ar bith, rud a fhágann go bhfuil comhoibriú agus comhroinnt tapa chomh simplí le URL a chóipeáil.",
      },
      {
        title: "Cruthaigh cuntas chun stair a thaifeadadh",
        desc: "Cruthaigh cuntas saor in aisce ar an notepad seo chun stair na nótaí a dhíghlasáil, ionas gur féidir leat gach rud a scríobh tú riamh a athbhreithniú, a aisghabháil agus a bhainistiú in aon áit amháin.",
      },
    ],
    outro:
      "Seachas iad seo, tá go leor gnéithe uathúla eile ann ar féidir leat a úsáid agus taitneamh a bhaint astu saor in aisce.",
  },
  it: {
    title: "Caratteristiche principali del Blocco Note Online",
    features: [
      {
        title: "Salvataggio automatico online",
        desc: "Il nostro blocco note online salva automaticamente il tuo lavoro mentre scrivi, così non perdi mai nemmeno una parola, anche se il browser si blocca o chiudi accidentalmente la scheda.",
      },
      {
        title: "Download in formato TXT e PDF",
        desc: "Con il nostro blocco note puoi esportare subito le tue note come file TXT o PDF puliti, rendendo facile salvarle, stamparle o condividerle offline.",
      },
      {
        title: "Schermo intero",
        desc: "Passa alla modalità a schermo intero e usa questo blocco note senza distrazioni che ti offre una superficie di scrittura pulita da bordo a bordo, perfetta per sessioni di scrittura concentrate.",
      },
      {
        title: "Funzione zoom al 200%",
        desc: "Questo blocco note online ti permette di ingrandire fino al 200%, rendendo più facile la lettura durante lunghe sessioni di scrittura o quando lavori con testo piccolo su qualsiasi schermo.",
      },
      {
        title: "Inserisci immagini, tabelle, aggiornamento automatico delle date, esporta HTML",
        desc: "Dall’inserimento di immagini e tabelle strutturate all’aggiornamento automatico delle date fino all’esportazione dei contenuti in HTML, questo blocco note va ben oltre la semplice modifica del testo.",
      },
      {
        title: "Intestazioni da H1 a H6",
        desc: "Organizza i tuoi contenuti con una gerarchia completa di intestazioni da H1 a H6, dando a questo blocco note la struttura di un vero editor di documenti direttamente nel tuo browser.",
      },
      {
        title: "Diversi stili di carattere",
        desc: "Scegli tra vari stili di carattere per personalizzare la tua esperienza di scrittura e rendere i tuoi documenti più leggibili, espressivi o professionali.",
      },
      {
        title: "Cambia colore del testo",
        desc: "Questo blocco note online ti permette di evidenziare i punti chiave e migliorare la chiarezza visiva cambiando il colore del testo, uno strumento di formattazione semplice ma potente per ogni scrittore.",
      },
      {
        title: "Trascrizione vocale con IA senza errori",
        desc: "Pronuncia i tuoi pensieri e guardali apparire sullo schermo con alta precisione. La funzione di trascrizione vocale con IA di questo blocco note trasforma istantaneamente la tua voce in testo pulito e senza errori, facendoti risparmiare molto tempo.",
      },
      {
        title: "Genera link condivisibile dopo l’accesso",
        desc: "Una volta effettuato l’accesso, il nostro blocco note ti permette di generare un link unico condivisibile per qualsiasi nota, rendendo la collaborazione e la condivisione rapida semplice come copiare un URL.",
      },
      {
        title: "Crea un account per registrare la cronologia",
        desc: "Crea un account gratuito su questo blocco note per sbloccare la cronologia delle note, così puoi rivedere, recuperare e gestire tutto ciò che hai scritto in un unico posto.",
      },
    ],
    outro:
      "Oltre a queste, ci sono molte altre funzionalità uniche che puoi usare e goderti gratuitamente.",
  },
  ja: {
    title: "オンラインメモ帳の主な機能",
    features: [
      {
        title: "オンライン自動保存",
        desc: "このオンラインメモ帳は入力中の作業を自動的に保存するため、ブラウザがクラッシュしたりタブを誤って閉じてしまっても、一文字も失うことはありません。",
      },
      {
        title: "TXTおよびPDF形式でダウンロード",
        desc: "このメモ帳では、メモをすぐにきれいなTXTまたはPDFファイルとしてエクスポートでき、保存・印刷・オフライン共有が簡単に行えます。",
      },
      {
        title: "全画面表示",
        desc: "全画面モードに切り替えることで、この集中できるメモ帳は余計な要素のない、端から端まで使えるクリーンな書き込みキャンバスを提供し、集中した執筆に最適です。",
      },
      {
        title: "200%ズーム機能",
        desc: "このオンラインメモ帳は最大200%までズームできるため、長時間の執筆や小さな文字を扱う際でも目に優しくなります。",
      },
      {
        title: "画像・表の挿入、自動日付更新、HTMLエクスポート",
        desc: "画像や構造化された表の挿入から、自動日付更新、そしてコンテンツのHTMLエクスポートまで、このメモ帳は基本的なテキスト編集をはるかに超えています。",
      },
      {
        title: "H1からH6までの見出し",
        desc: "H1からH6までの完全な見出し階層でコンテンツを整理でき、このメモ帳はブラウザ上で本格的なドキュメントエディタの構造を提供します。",
      },
      {
        title: "さまざまなフォントスタイル",
        desc: "さまざまなフォントスタイルから選択して、執筆体験を自分好みにカスタマイズし、ドキュメントをより読みやすく、表現豊かで、プロフェッショナルに仕上げることができます。",
      },
      {
        title: "テキストの色を変更",
        desc: "このオンラインメモ帳では、テキストの色を変更することで重要なポイントを強調し、視覚的な分かりやすさを向上させることができます。これは誰にとってもシンプルでありながら強力な書式ツールです。",
      },
      {
        title: "AI搭載の音声テキスト変換（エラーなし）",
        desc: "考えを話すだけで、高精度で画面上に文字として表示されます。このメモ帳のAI音声認識機能は、あなたの声を瞬時にクリーンでエラーのないテキストへ変換し、大幅な時間短縮を実現します。",
      },
      {
        title: "サインイン後に共有リンクを生成",
        desc: "サインインすると、このメモ帳は任意のノートに対して固有の共有リンクを生成でき、コラボレーションや素早い共有をURLをコピーするだけで簡単に行えます。",
      },
      {
        title: "アカウント作成で履歴を保存",
        desc: "このメモ帳で無料アカウントを作成するとノート履歴が利用可能になり、これまで書いたすべてを1か所で確認・復元・管理できます。",
      },
    ],
    outro: "これら以外にも、無料で使えて楽しめる多くのユニークな機能があります。",
  },
  jv: {
    title: "Fitur Utama Notepad Online",
    features: [
      {
        title: "Simpen otomatis online",
        desc: "Notepad online iki otomatis nyimpen gaweyanmu nalika kowe ngetik, dadi kowe ora bakal ilang siji tembung wae, sanajan browsermu rusak utawa kowe ora sengaja nutup tab.",
      },
      {
        title: "Undhuh ing format TXT lan PDF",
        desc: "Kanthi notepad iki, kowe bisa ngekspor cathetanmu langsung dadi file TXT utawa PDF sing resik, supaya gampang disimpen, dicithak, utawa dienggo bareng tanpa internet.",
      },
      {
        title: "Layar kebak",
        desc: "Ganti menyang mode layar kebak lan gunakake notepad sing tanpa gangguan iki sing menehi papan nulis resik saka pinggir nganti pinggir, pas banget kanggo sesi nulis sing fokus.",
      },
      {
        title: "Fitur zoom 200%",
        desc: "Notepad online iki ngidini kowe nggedhekake nganti 200%, supaya luwih nyaman kanggo mripat nalika nulis suwe utawa nalika kerja karo teks cilik ing layar apa wae.",
      },
      {
        title: "Lebokake gambar, tabel, update tanggal otomatis, ekspor HTML",
        desc: "Saka nglebokake gambar lan tabel terstruktur nganti update tanggal otomatis lan ngekspor kontenmu dadi HTML, notepad iki luwih maju tinimbang editor teks biasa.",
      },
      {
        title: "Judhul saka H1 nganti H6",
        desc: "Atur kontenmu nganggo hirarki judhul lengkap saka H1 nganti H6, sing nggawe notepad iki kaya editor dokumen profesional langsung ing browsermu.",
      },
      {
        title: "Macem-macem gaya font",
        desc: "Pilih saka macem-macem gaya font kanggo nggawe pengalaman nulis luwih pribadi lan nggawe dokumenmu luwih gampang diwaca, luwih ekspresif, utawa luwih profesional.",
      },
      {
        title: "Ganti warna teks",
        desc: "Notepad online iki ngidini kowe nyorot poin penting lan nambah kejelasan visual kanthi ngganti warna teks, alat formatting sing sederhana nanging kuat kanggo saben penulis.",
      },
      {
        title: "Speech-to-text nganggo AI tanpa kesalahan",
        desc: "Omongna pikiranmu lan delengen carane muncul ing layar kanthi akurasi dhuwur. Fitur speech-to-text nganggo AI saka notepad iki langsung ngowahi swaramu dadi teks sing resik lan tanpa kesalahan, supaya kowe bisa ngirit akeh wektu.",
      },
      {
        title: "Gawe link sing bisa dienggo bareng sawise login",
        desc: "Sawise login, notepad iki ngidini kowe nggawe link unik sing bisa dienggo bareng kanggo saben cathetan, supaya kerja bareng lan nuduhake dadi gampang kaya nyalin URL.",
      },
      {
        title: "Gawe akun kanggo nyimpen riwayat",
        desc: "Gawe akun gratis ing notepad iki kanggo mbukak riwayat cathetan, supaya kowe bisa ndeleng maneh, mbalekake, lan ngatur kabeh sing tau kowe tulis ing siji panggonan.",
      },
    ],
    outro:
      "Saliyane iki, ana akeh fitur unik liyane sing bisa kowe gunakake lan nikmati kanthi gratis.",
  },
  kn: {
    title: "ಆನ್‌ಲೈನ್ ನೋಟ್ಪ್ಯಾಡ್‌ನ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
    features: [
      {
        title: "ಆನ್‌ಲೈನ್ ಸ್ವಯಂ-ಉಳಿಕೆ",
        desc: "ನಮ್ಮ ಆನ್‌ಲೈನ್ ನೋಟ್ಪ್ಯಾಡ್ ನೀವು ಟೈಪ್ ಮಾಡುತ್ತಿದ್ದಂತೆಯೇ ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಬ್ರೌಸರ್ ಕ್ರ್ಯಾಶ್ ಆದರೂ ಅಥವಾ ನೀವು ತಪ್ಪಾಗಿ ಟ್ಯಾಬ್ ಮುಚ್ಚಿದರೂ ಒಂದೇ ಒಂದು ಪದವೂ ಕಳೆದುಹೋಗುವುದಿಲ್ಲ.",
      },
      {
        title: "TXT ಮತ್ತು PDF ಸ್ವರೂಪಗಳಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        desc: "ನಮ್ಮ ನೋಟ್ಪ್ಯಾಡ್‌ನೊಂದಿಗೆ ನೀವು ನಿಮ್ಮ ಟಿಪ್ಪಣಿಗಳನ್ನು ತಕ್ಷಣವೇ ಸ್ವಚ್ಛವಾದ TXT ಅಥವಾ PDF ಫೈಲ್ ಆಗಿ ಎಕ್ಸ್ಪೋರ್ಟ್ ಮಾಡಬಹುದು, ಇದರಿಂದ ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಉಳಿಸುವುದು, ಮುದ್ರಿಸುವುದು ಅಥವಾ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳುವುದು ಸುಲಭವಾಗುತ್ತದೆ.",
      },
      {
        title: "ಪೂರ್ಣ ಪರದೆ",
        desc: "ಪೂರ್ಣ ಪರದೆ ಮೋಡ್‌ಗೆ ಬದಲಿಸಿ, ಈ ವ್ಯತ್ಯಯರಹಿತ ನೋಟ್ಪ್ಯಾಡ್ ನಿಮಗೆ ಸ್ವಚ್ಛವಾದ, ಅಂಚಿನಿಂದ ಅಂಚಿಗೆ ಬರೆಯುವ ಕ್ಯಾನ್ವಾಸ್ ಅನ್ನು ನೀಡುತ್ತದೆ, ಇದು ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿದ ಬರವಣಿಗೆಗೆ ಪರಿಪೂರ್ಣವಾಗಿದೆ.",
      },
      {
        title: "200% ಜೂಮ್ ವೈಶಿಷ್ಟ್ಯ",
        desc: "ಈ ಆನ್‌ಲೈನ್ ನೋಟ್ಪ್ಯಾಡ್ ನಿಮಗೆ 200% ವರೆಗೆ ಜೂಮ್ ಮಾಡಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ, ಇದರಿಂದ ದೀರ್ಘ ಬರವಣಿಗೆ ಅವಧಿಗಳಲ್ಲಿ ಅಥವಾ ಚಿಕ್ಕ ಅಕ್ಷರಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವಾಗ ಕಣ್ಣಿಗೆ ಸುಲಭವಾಗುತ್ತದೆ.",
      },
      {
        title: "ಚಿತ್ರಗಳು, ಟೇಬಲ್, ಸ್ವಯಂ ದಿನಾಂಕ ನವೀಕರಣ, HTML ಎಕ್ಸ್ಪೋರ್ಟ್ ಸೇರಿಸಿ",
        desc: "ಚಿತ್ರಗಳು ಮತ್ತು ರಚನಾತ್ಮಕ ಟೇಬಲ್‌ಗಳನ್ನು ಸೇರಿಸುವುದರಿಂದ ಹಿಡಿದು ಸ್ವಯಂ ದಿನಾಂಕ ನವೀಕರಣ ಮತ್ತು ನಿಮ್ಮ ವಿಷಯವನ್ನು HTML ಆಗಿ ಎಕ್ಸ್ಪೋರ್ಟ್ ಮಾಡುವವರೆಗೆ, ಈ ನೋಟ್ಪ್ಯಾಡ್ ಮೂಲ ಪಠ್ಯ ಸಂಪಾದನೆಯಿಗಿಂತ ಬಹಳ ಮುಂದಿದೆ.",
      },
      {
        title: "H1 ರಿಂದ H6 ವರೆಗೆ ಶೀರ್ಷಿಕೆಗಳು",
        desc: "H1 ರಿಂದ H6 ವರೆಗೆ ಸಂಪೂರ್ಣ ಶೀರ್ಷಿಕೆ ಕ್ರಮದೊಂದಿಗೆ ನಿಮ್ಮ ವಿಷಯವನ್ನು ಸಂಘಟಿಸಿ, ಇದರಿಂದ ಈ ನೋಟ್ಪ್ಯಾಡ್ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ವೃತ್ತಿಪರ ಡಾಕ್ಯುಮೆಂಟ್ ಎಡಿಟರ್‌ನ ರಚನೆಯನ್ನು ನೀಡುತ್ತದೆ.",
      },
      {
        title: "ವಿವಿಧ ಫಾಂಟ್ ಶೈಲಿಗಳು",
        desc: "ನಿಮ್ಮ ಬರವಣಿಗೆ ಅನುಭವವನ್ನು ವೈಯಕ್ತಿಕಗೊಳಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಡಾಕ್ಯುಮೆಂಟ್‌ಗಳನ್ನು ಹೆಚ್ಚು ಓದಲು ಸುಲಭವಾಗುವಂತೆ, ಅಭಿವ್ಯಕ್ತಿಪೂರ್ಣವಾಗಿ ಅಥವಾ ವೃತ್ತಿಪರವಾಗಿ ಮಾಡಲು ವಿವಿಧ ಫಾಂಟ್ ಶೈಲಿಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ.",
      },
      {
        title: "ಪಠ್ಯದ ಬಣ್ಣ ಬದಲಾಯಿಸಿ",
        desc: "ಈ ಆನ್‌ಲೈನ್ ನೋಟ್ಪ್ಯಾಡ್ ನಿಮಗೆ ಪ್ರಮುಖ ಅಂಶಗಳನ್ನು ಹೈಲೈಟ್ ಮಾಡಲು ಮತ್ತು ಪಠ್ಯದ ಬಣ್ಣವನ್ನು ಬದಲಾಯಿಸುವ ಮೂಲಕ ದೃಶ್ಯ ಸ್ಪಷ್ಟತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ, ಇದು ಯಾವುದೇ ಬರಹಗಾರರಿಗೆ ಸರಳ ಆದರೆ ಶಕ್ತಿಶಾಲಿ ಫಾರ್ಮ್ಯಾಟಿಂಗ್ ಸಾಧನವಾಗಿದೆ.",
      },
      {
        title: "AI ಚಾಲಿತ ಮಾತು-ಇಂದ-ಪಠ್ಯ (Speech to Text) ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ",
        desc: "ನಿಮ್ಮ ಆಲೋಚನೆಗಳನ್ನು ಮಾತನಾಡಿ, ಅವು ಪರದೆ ಮೇಲೆ ಹೆಚ್ಚಿನ ನಿಖರತೆಯೊಂದಿಗೆ ಕಾಣುವುದನ್ನು ನೋಡಿ. ಈ ನೋಟ್ಪ್ಯಾಡ್‌ನ AI ಚಾಲಿತ ಮಾತು-ಇಂದ-ಪಠ್ಯ ವೈಶಿಷ್ಟ್ಯವು ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ತಕ್ಷಣವೇ ಸ್ವಚ್ಛವಾದ, ದೋಷರಹಿತ ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ, ಇದರಿಂದ ನೀವು ಬಹಳ ಸಮಯವನ್ನು ಉಳಿಸಬಹುದು.",
      },
      {
        title: "ಲಾಗಿನ್ ಆದ ನಂತರ ಹಂಚಬಹುದಾದ ಲಿಂಕ್ ರಚಿಸಿ",
        desc: "ಲಾಗಿನ್ ಆದ ನಂತರ, ನಮ್ಮ ನೋಟ್ಪ್ಯಾಡ್ ಯಾವುದೇ ಟಿಪ್ಪಣಿಗಾಗಿ ವಿಶೇಷ ಹಂಚಬಹುದಾದ ಲಿಂಕ್ ಅನ್ನು ರಚಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ, ಇದರಿಂದ ಸಹಕಾರ ಮತ್ತು ವೇಗವಾದ ಹಂಚಿಕೆ URL ನಕಲಿಸುವಷ್ಟೇ ಸುಲಭವಾಗುತ್ತದೆ.",
      },
      {
        title: "ಇತಿಹಾಸವನ್ನು ದಾಖಲಿಸಲು ಖಾತೆ ರಚಿಸಿ",
        desc: "ಈ ನೋಟ್ಪ್ಯಾಡ್‌ನಲ್ಲಿ ಉಚಿತ ಖಾತೆ ರಚಿಸಿ ಟಿಪ್ಪಣಿ ಇತಿಹಾಸವನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ, ಇದರಿಂದ ನೀವು ಬರೆದಿರುವ ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಮರುಪರಿಶೀಲಿಸಲು, ಮರುಪಡೆಯಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.",
      },
    ],
    outro:
      "ಇವುಗಳ ಹೊರತಾಗಿ, ನೀವು ಉಚಿತವಾಗಿ ಬಳಸಬಹುದಾದ ಮತ್ತು ಆನಂದಿಸಬಹುದಾದ ಇನ್ನೂ ಅನೇಕ ವಿಶಿಷ್ಟ ವೈಶಿಷ್ಟ್ಯಗಳು ಇವೆ.",
  },
  kk: {
    title: "Онлайн блокноттың негізгі мүмкіндіктері",
    features: [
      {
        title: "Онлайн автоматты сақтау",
        desc: "Біздің онлайн блокнот теріп жатқан кезде жұмысыңызды автоматты түрде сақтайды, сондықтан браузеріңіз істен шықса немесе қойындыны байқаусызда жауып қойсаңыз да, бірде-бір сөзіңіз жоғалмайды.",
      },
      {
        title: "TXT және PDF форматында жүктеу",
        desc: "Біздің блокнот арқылы жазбаларыңызды бірден таза TXT немесе PDF файл ретінде экспорттай аласыз, бұл оларды сақтау, басып шығару немесе офлайн бөлісу үшін өте ыңғайлы.",
      },
      {
        title: "Толық экран",
        desc: "Толық экран режиміне ауысып, осы алаңдатпайтын блокноттың көмегімен шеттен шетке дейін таза жазу кеңістігін пайдаланыңыз, бұл назарды толық шоғырландыруға өте қолайлы.",
      },
      {
        title: "200% үлкейту мүмкіндігі",
        desc: "Бұл онлайн блокнот мәтінді 200%-ға дейін үлкейтуге мүмкіндік береді, бұл ұзақ жазу кезінде немесе шағын мәтінмен жұмыс істегенде көзге жеңіл болады.",
      },
      {
        title: "Суреттер, кестелер қосу, күндерді автоматты жаңарту, HTML экспорт",
        desc: "Суреттер мен құрылымдалған кестелерді қосудан бастап, күндерді автоматты жаңартуға және мазмұнды HTML ретінде экспорттауға дейін, бұл блокнот қарапайым мәтін өңдеуден әлдеқайда кең мүмкіндіктер ұсынады.",
      },
      {
        title: "H1-ден H6-ға дейінгі тақырыптар",
        desc: "Мазмұныңызды H1-ден H6-ға дейінгі толық тақырыптар иерархиясымен ұйымдастырыңыз, бұл блокнотқа браузер ішінде кәсіби құжат редакторының құрылымын береді.",
      },
      {
        title: "Әртүрлі қаріп стильдері",
        desc: "Жазу тәжірибеңізді жекелендіру үшін әртүрлі қаріп стильдерін таңдаңыз, бұл құжаттарыңызды оқуға жеңіл, мәнерлі немесе кәсіби етеді.",
      },
      {
        title: "Мәтін түсін өзгерту",
        desc: "Бұл онлайн блокнот мәтін түсін өзгерту арқылы маңызды ойларды ерекшелеуге және көрнекі айқындықты арттыруға мүмкіндік береді — бұл кез келген жазушы үшін қарапайым, бірақ қуатты құрал.",
      },
      {
        title: "Қатесіз AI-мен жұмыс істейтін сөйлеуді мәтінге айналдыру",
        desc: "Ойыңызды дауыстап айтыңыз, олар экранда жоғары дәлдікпен пайда болады. Бұл блокноттың AI-ға негізделген сөйлеуді мәтінге айналдыру мүмкіндігі дауысыңызды бірден таза әрі қатесіз мәтінге айналдырады, бұл сізге көп уақыт үнемдеуге көмектеседі.",
      },
      {
        title: "Кіруден кейін бөлісуге болатын сілтеме жасау",
        desc: "Кіргеннен кейін, біздің блокнот кез келген жазба үшін бірегей бөлісу сілтемесін жасауға мүмкіндік береді, бұл бірлесіп жұмыс істеуді және жылдам бөлісуді URL көшіру сияқты оңай етеді.",
      },
      {
        title: "Тарихты сақтау үшін аккаунт жасау",
        desc: "Осы блокнотта тегін аккаунт жасап, жазбалар тарихын ашыңыз, сонда сіз бұрын жазған барлық нәрсені бір жерден қарап, қалпына келтіріп және басқара аласыз.",
      },
    ],
    outro:
      "Бұлардан бөлек, сіз тегін қолдана алатын көптеген басқа да ерекше мүмкіндіктер бар.",
  },
  km: {
    title: "លក្ខណៈពិសេសសំខាន់ៗរបស់ Notepad អនឡាញ",
    features: [
      {
        title: "រក្សាទុកដោយស្វ័យប្រវត្តិលើអនឡាញ",
        desc: "Notepad អនឡាញរបស់យើងរក្សាទុកការងាររបស់អ្នកដោយស្វ័យប្រវត្តិពេលអ្នកកំពុងវាយ ដូច្នេះអ្នកមិនបាត់បង់ពាក្យណាមួយឡើយ ទោះបីជា browser គាំង ឬអ្នកបិទ tab ដោយចៃដន្យក៏ដោយ។",
      },
      {
        title: "ទាញយកជាទ្រង់ទ្រាយ TXT និង PDF",
        desc: "ជាមួយ Notepad របស់យើង អ្នកអាចនាំចេញកំណត់ត្រារបស់អ្នកភ្លាមៗជាឯកសារ TXT ឬ PDF ស្អាតៗ ដែលធ្វើឲ្យងាយស្រួលក្នុងការរក្សាទុក បោះពុម្ព ឬចែករំលែកការងាររបស់អ្នកដោយមិនចាំបាច់មានអ៊ីនធឺណិត។",
      },
      {
        title: "អេក្រង់ពេញ",
        desc: "ប្តូរទៅរបៀបអេក្រង់ពេញ ហើយអនុញ្ញាតឲ្យ Notepad ដែលគ្មានការរំខាននេះ ផ្តល់ឲ្យអ្នកនូវផ្ទៃសរសេរស្អាតពីគែមទៅគែម ដែលសមស្របសម្រាប់ការសរសេរដែលផ្តោតអារម្មណ៍។",
      },
      {
        title: "មុខងារពង្រីក 200%",
        desc: "Notepad អនឡាញនេះអនុញ្ញាតឲ្យអ្នកពង្រីករហូតដល់ 200% ដែលធ្វើឲ្យភ្នែកងាយស្រួលពេលសរសេរយូរ ឬពេលធ្វើការជាមួយអក្សរតូចៗលើអេក្រង់ណាមួយ។",
      },
      {
        title: "បញ្ចូលរូបភាព តារាង ការធ្វើបច្ចុប្បន្នភាពកាលបរិច្ឆេទដោយស្វ័យប្រវត្តិ នាំចេញជា HTML",
        desc: "ចាប់ពីការបញ្ចូលរូបភាព និងតារាងមានរចនាសម្ព័ន្ធ រហូតដល់ការធ្វើបច្ចុប្បន្នភាពកាលបរិច្ឆេទដោយស្វ័យប្រវត្តិ និងនាំចេញមាតិកាជា HTML Notepad នេះមានមុខងារលើសពីការកែសម្រួលអត្ថបទធម្មតា។",
      },
      {
        title: "ចំណងជើងពី H1 ដល់ H6",
        desc: "រៀបចំមាតិការបស់អ្នកដោយប្រើលំដាប់ចំណងជើងពេញលេញពី H1 ដល់ H6 ដែលធ្វើឲ្យ Notepad នេះមានរចនាសម្ព័ន្ធដូចកម្មវិធីកែសម្រួលឯកសារអាជីពនៅក្នុង browser របស់អ្នក។",
      },
      {
        title: "រចនាប័ទ្មអក្សរផ្សេងៗ",
        desc: "ជ្រើសរើសពីរចនាប័ទ្មអក្សរជាច្រើន ដើម្បីកែតម្រូវបទពិសោធន៍សរសេររបស់អ្នក និងធ្វើឲ្យឯកសាររបស់អ្នកអានងាយ សម្តែងអារម្មណ៍បានល្អ ឬមានភាពជាអាជីព។",
      },
      {
        title: "ប្តូរពណ៌អត្ថបទ",
        desc: "Notepad អនឡាញនេះអនុញ្ញាតឲ្យអ្នកបន្លិចចំណុចសំខាន់ៗ និងបន្ថែមភាពច្បាស់លាស់ដោយការប្តូរពណ៌អត្ថបទ ដែលជាឧបករណ៍រៀបចំទ្រង់ទ្រាយសាមញ្ញ តែមានអានុភាពសម្រាប់អ្នកសរសេរគ្រប់រូប។",
      },
      {
        title: "បម្លែងសម្លេងទៅជាអត្ថបទដោយ AI ដោយគ្មានកំហុស",
        desc: "និយាយគំនិតរបស់អ្នក ហើយមើលវាបង្ហាញលើអេក្រង់ដោយភាពត្រឹមត្រូវខ្ពស់។ មុខងារ AI បម្លែងសម្លេងទៅជាអត្ថបទរបស់ Notepad នេះនឹងបម្លែងសម្លេងរបស់អ្នកទៅជាអត្ថបទស្អាត និងគ្មានកំហុសភ្លាមៗ ដែលជួយសន្សំពេលវេលាបានច្រើន។",
      },
      {
        title: "បង្កើតតំណចែករំលែកបន្ទាប់ពីចូលគណនី",
        desc: "បន្ទាប់ពីចូលគណនីរួច Notepad របស់យើងអនុញ្ញាតឲ្យអ្នកបង្កើតតំណចែករំលែកពិសេសសម្រាប់កំណត់ត្រាណាមួយ ដែលធ្វើឲ្យការសហការនិងការចែករំលែកលឿនៗងាយស្រួលដូចការចម្លង URL។",
      },
      {
        title: "បង្កើតគណនីដើម្បីរក្សាទុកប្រវត្តិ",
        desc: "បង្កើតគណនីឥតគិតថ្លៃលើ Notepad នេះ ដើម្បីបើកប្រវត្តិកំណត់ត្រា ដើម្បីឲ្យអ្នកអាចត្រឡប់មកមើល ស្ដារឡើងវិញ និងគ្រប់គ្រងអ្វីៗដែលអ្នកបានសរសេរទាំងអស់នៅកន្លែងតែមួយ។",
      },
    ],
    outro:
      "ក្រៅពីមុខងារទាំងនេះ ក៏មានមុខងារពិសេសជាច្រើនផ្សេងទៀតដែលអ្នកអាចប្រើ និងរីករាយបានដោយឥតគិតថ្លៃ។",
  },
  ko: {
    title: "온라인 메모장의 주요 기능",
    features: [
      {
        title: "온라인 자동 저장",
        desc: "온라인 메모장은 입력하는 동안 작업 내용을 자동으로 저장하므로 브라우저가 충돌하거나 실수로 탭을 닫더라도 단 한 글자도 잃어버리지 않습니다.",
      },
      {
        title: "TXT 및 PDF 형식으로 다운로드",
        desc: "이 메모장을 사용하면 메모를 깔끔한 TXT 또는 PDF 파일로 즉시 내보낼 수 있어 저장, 인쇄 또는 오프라인 공유가 매우 간편합니다.",
      },
      {
        title: "전체 화면",
        desc: "전체 화면 모드로 전환하면 방해 요소 없는 깨끗한 작업 공간을 제공하여 집중해서 글을 작성하기에 최적의 환경을 만들어 줍니다.",
      },
      {
        title: "200% 확대 기능",
        desc: "이 온라인 메모장은 최대 200%까지 확대할 수 있어 장시간 글을 작성하거나 작은 글씨를 읽고 편집할 때 눈의 피로를 줄여줍니다.",
      },
      {
        title: "이미지 삽입, 표 추가, 날짜 자동 업데이트, HTML 내보내기",
        desc: "이미지와 구조화된 표를 삽입하고 날짜를 자동으로 업데이트하며 콘텐츠를 HTML로 내보낼 수 있어, 이 메모장은 기본적인 텍스트 편집 기능을 훨씬 뛰어넘습니다.",
      },
      {
        title: "H1부터 H6까지의 제목 지원",
        desc: "H1부터 H6까지의 완전한 제목 계층 구조를 사용하여 콘텐츠를 정리할 수 있으며, 브라우저에서 전문 문서 편집기와 같은 구조를 제공합니다.",
      },
      {
        title: "다양한 글꼴 스타일",
        desc: "다양한 글꼴 스타일 중에서 선택하여 작성 환경을 개인화하고 문서를 더욱 읽기 쉽고, 표현력 있게 또는 전문적으로 만들 수 있습니다.",
      },
      {
        title: "텍스트 색상 변경",
        desc: "텍스트 색상을 변경하여 중요한 내용을 강조하고 시각적인 가독성을 높일 수 있으며, 이는 모든 작성자에게 유용한 강력한 서식 도구입니다.",
      },
      {
        title: "AI 기반 음성 텍스트 변환 기능",
        desc: "생각을 말하기만 하면 높은 정확도로 화면에 텍스트가 표시됩니다. 이 메모장의 AI 기반 음성-텍스트 변환 기능은 사용자의 음성을 즉시 깔끔하고 오류 없는 텍스트로 변환하여 많은 시간을 절약해 줍니다.",
      },
      {
        title: "로그인 후 공유 링크 생성",
        desc: "로그인하면 모든 메모에 대해 고유한 공유 링크를 생성할 수 있어 협업과 빠른 공유를 URL 복사만큼 간단하게 만들 수 있습니다.",
      },
      {
        title: "기록 저장을 위한 계정 생성",
        desc: "이 메모장에서 무료 계정을 만들면 메모 기록 기능이 활성화되어 지금까지 작성한 모든 내용을 한곳에서 확인하고 복구하며 관리할 수 있습니다.",
      },
    ],
    outro:
      "이 외에도 무료로 사용하고 즐길 수 있는 다양한 고유 기능들이 많이 제공됩니다.",
  },
  ku: {
    title: "Taybetmendiyên Sereke yên Notepadê Online",
    features: [
      {
        title: "Tomarkirina Xweser a Online",
        desc: "Notepadê me ya online dema ku tu dinivîsî karê te bixweber tomar dike, ji ber vê yekê tu qet yek peyv jî winda nakî, heta ger browserê te bixete an jî tabê bi xeletî bigirî.",
      },
      {
        title: "Daxistin bi formatên TXT û PDF",
        desc: "Bi notepadê me re, tu dikarî notên xwe di cih de wekî pelgeyek TXT an PDF ya paqij derxe, ku tomarkirin, çapkirin an parvekirina karê te offline hêsan dike.",
      },
      {
        title: "Ekrana Tevahî",
        desc: "Biguherîne moda ekrana tevahî û bila ev notepadê bêalîkarî ji te re qadeke nivîsandinê ya paqij ji serî heta dawiyê peyda bike ku ji bo danûstandin û nivîsandina bi baldarî pir guncaw e.",
      },
      {
        title: "Taybetmendiya Mezinbûnê ya 200%",
        desc: "Ev notepadê online dihêle ku tu heta 200% mezin bikî, ku ji bo çavan di demên nivîsandina dirêj an dema kar bi nivîsên biçûk li ser her ekranekê de hêsantir dike.",
      },
      {
        title: "Têxistina Wêneyan, Tabloyan, Nûkirina Xweser a Dîrokan, Derxistina HTML",
        desc: "Ji têxistina wêneyan û tabloyên rêkxistî heta nûkirina bixweber a dîrokan û derxistina naveroka te wekî HTML, ev notepad ji sererastkirina nivîsê ya bingehîn gelek pêştir diçe.",
      },
      {
        title: "Sernivîs ji H1 heta H6",
        desc: "Naveroka xwe bi hiyerarşiya tevahî ya sernivîsan ji H1 heta H6 rêk bixe, da ku ev notepad di nav browserê te de avahiya edîtorek belgeyê ya profesyonel peyda bike.",
      },
      {
        title: "Şêwazên Cûda yên Fontê",
        desc: "Ji nav gelek şêwazên fontê hilbijêre da ku ezmûna nivîsandina xwe kesane bikî û belgeyên xwe xwendinê hêsantir, bêtir vegotinî an profesyoneltir bikî.",
      },
      {
        title: "Guherandina Rengê Nivîsê",
        desc: "Ev notepadê online dihêle ku tu xalên girîng ronî bikî û bi guherandina rengê nivîsê zelaliya dîtbarî zêde bikî. Ev amûrek formatkirinê ya sade lê bihêz e ji bo her nivîskarî.",
      },
      {
        title: "Veguhastina Deng bo Nivîsê bi AI bê Çewtî",
        desc: "Ramanên xwe bibêje û bibîne ku bi rastiya bilind li ser ekranê xuya dibin. Taybetmendiya veguhastina deng bo nivîsê ya bi AI ya vê notepadê dengê te di cih de vediguherîne bo nivîsek paqij û bê çewtî, ji ber vê yekê tu gelek demê xilas dikî.",
      },
      {
        title: "Piştî Têketinê Linkek Parvekirinê Çêbike",
        desc: "Piştî ku têketî hesabê xwe bûyî, notepadê me dihêle ku ji bo her notekê linkek taybet a parvekirinê çêbikî, ku hevkarî û parvekirina bilez hêsan dike wek kopîkirina URL-ekê.",
      },
      {
        title: "Çêkirina Hesabê ji bo Tomarkirina Dîrokê",
        desc: "Li ser vê notepadê hesabek belaş çêbike da ku dîroka notan vekî, û tu bikaribî hemû tiştên ku te nivîsandine li yek cihê bibînî, vegerînî û birêve bibî.",
      },
    ],
    outro:
      "Ji bilî van taybetmendiyan, gelek taybetmendiyên din ên taybet hene ku tu dikarî wan belaş bikar bînî û jê kêfxweş bibî.",
  },
  ky: {
    title: "Онлайн блокноттун негизги мүмкүнчүлүктөрү",
    features: [
      {
        title: "Онлайн автоматтык сактоо",
        desc: "Биздин онлайн блокнот сиз терип жатканда ишиңизди автоматтык түрдө сактайт. Ошондуктан браузериңиз жабылып калса же өтмөктү кокусунан жаап алсаңыз да, бир дагы сөзүңүз жоголбойт.",
      },
      {
        title: "TXT жана PDF форматтарында жүктөп алуу",
        desc: "Биздин блокноттун жардамы менен жазууларыңызды дароо таза TXT же PDF файл катары экспорттой аласыз. Бул аларды сактоону, басып чыгарууну же интернетсиз бөлүшүүнү жеңилдетет.",
      },
      {
        title: "Толук экран",
        desc: "Толук экран режимине өтүп, алаксыткан нерселерден арылган бул блокноттун четинен четине чейин таза жазуу мейкиндигин пайдаланыңыз. Ал көңүл коюп жазуу үчүн эң ылайыктуу шарттарды түзөт.",
      },
      {
        title: "200% чоңойтуу мүмкүнчүлүгү",
        desc: "Бул онлайн блокнот 200% чейин чоңойтууга мүмкүндүк берет. Бул узак убакыт жазганда же каалаган экранда майда текст менен иштегенде көзгө ыңгайлуулук жаратат.",
      },
      {
        title: "Сүрөттөрдү жана таблицаларды кошуу, даталарды автоматтык жаңыртуу, HTML экспорттоо",
        desc: "Сүрөттөрдү жана түзүмдүү таблицаларды кошуудан тартып, даталарды автоматтык жаңыртууга жана мазмунуңузду HTML катары экспорттоого чейин бул блокнот жөнөкөй текст редакторунан алда канча кең мүмкүнчүлүктөрдү сунуштайт.",
      },
      {
        title: "H1ден H6га чейинки аталыштар",
        desc: "Мазмунуңузду H1ден H6га чейинки толук аталыштар иерархиясы менен уюштуруңуз. Бул блокнот браузериңиздин ичинде эле профессионалдуу документ редакторунун түзүмүн камсыз кылат.",
      },
      {
        title: "Ар кандай шрифт стилдери",
        desc: "Жазуу тажрыйбаңызды жекелештирүү үчүн ар кандай шрифт стилдерин тандаңыз жана документтериңизди окууга жеңил, таасирдүү же профессионалдуу кылыңыз.",
      },
      {
        title: "Тексттин түсүн өзгөртүү",
        desc: "Бул онлайн блокнот тексттин түсүн өзгөртүү аркылуу маанилүү ойлорду баса белгилөөгө жана көрүү ыңгайлуулугун жогорулатууга мүмкүндүк берет. Бул ар бир жазуучу үчүн жөнөкөй, бирок күчтүү форматтоо куралы болуп саналат.",
      },
      {
        title: "AI негизиндеги катасыз үнүн текстке айландыруу",
        desc: "Ойлоруңузду сүйлөңүз жана алардын экранда жогорку тактык менен пайда болгонун көрүңүз. Бул блокноттун AI негизиндеги үнүн текстке айландыруу функциясы үнүңүздү дароо таза жана катасыз текстке айландырып, көп убакытты үнөмдөөгө жардам берет.",
      },
      {
        title: "Киргенден кийин бөлүшүүгө боло турган шилтеме түзүү",
        desc: "Аккаунтуңузга киргенден кийин, биздин блокнот каалаган жазуу үчүн уникалдуу бөлүшүү шилтемесин түзүүгө мүмкүндүк берет. Бул кызматташуу жана тез бөлүшүүнү URL көчүргөндөй эле оңой кылат.",
      },
      {
        title: "Тарыхты сактоо үчүн аккаунт түзүү",
        desc: "Бул блокнотто акысыз аккаунт түзүп, жазуулар тарыхын ачыңыз. Ошондо буга чейин жазган бардык нерселериңизди бир жерден көрүп, калыбына келтирип жана башкара аласыз.",
      },
    ],
    outro:
      "Мындан тышкары, сиз акысыз пайдаланып жана ырахат ала турган дагы көптөгөн өзгөчө мүмкүнчүлүктөр бар.",
  },
  lo: {
    title: "ຄຸນສົມບັດຫຼັກຂອງ Notepad ອອນລາຍ",
    features: [
      {
        title: "ບັນທຶກອັດຕະໂນມັດອອນລາຍ",
        desc: "Notepad ອອນລາຍຂອງພວກເຮົາຈະບັນທຶກວຽກຂອງທ່ານໂດຍອັດຕະໂນມັດໃນຂະນະທີ່ທ່ານກຳລັງພິມ ເຮັດໃຫ້ທ່ານບໍ່ສູນເສຍແມ່ນແຕ່ຄຳດຽວ ແມ່ນວ່າ browser ຂອງທ່ານຈະຂັດຂ້ອງ ຫຼື ປິດແຖບໂດຍບໍ່ຕັ້ງໃຈກໍຕາມ.",
      },
      {
        title: "ດາວໂຫລດໃນຮູບແບບ TXT ແລະ PDF",
        desc: "ດ້ວຍ Notepad ຂອງພວກເຮົາ ທ່ານສາມາດສົ່ງອອກບັນທຶກຂອງທ່ານໄດ້ທັນທີເປັນໄຟລ໌ TXT ຫຼື PDF ທີ່ສະອາດ ເຮັດໃຫ້ການບັນທຶກ ການພິມ ຫຼື ການແບ່ງປັນວຽກຂອງທ່ານແບບອອບໄລນ໌ເປັນເລື່ອງງ່າຍ.",
      },
      {
        title: "ເຕັມໜ້າຈໍ",
        desc: "ປ່ຽນໄປເປັນໂໝດເຕັມໜ້າຈໍ ແລະ ໃຫ້ Notepad ທີ່ປາດຈາກສິ່ງລົບກວນນີ້ ມອບພື້ນທີ່ຂຽນທີ່ສະອາດຈາກຂອບຫາຂອບ ເໝາະສຳລັບການຂຽນຢ່າງມີສະມາທິ.",
      },
      {
        title: "ຟັງຊັນຂະຫຍາຍ 200%",
        desc: "Notepad ອອນລາຍນີ້ອະນຸຍາດໃຫ້ທ່ານຂະຫຍາຍໄດ້ສູງສຸດ 200% ເຮັດໃຫ້ສະບາຍຕາຫຼາຍຂຶ້ນເມື່ອຂຽນເປັນເວລາດົນ ຫຼື ເມື່ອເຮັດວຽກກັບຂໍ້ຄວາມຂະໜາດນ້ອຍໃນໜ້າຈໍໃດກໍຕາມ.",
      },
      {
        title: "ແຊກຮູບພາບ, ຕາຕະລາງ, ອັບເດດວັນທີອັດຕະໂນມັດ, ສົ່ງອອກ HTML",
        desc: "ຕັ້ງແຕ່ການແຊກຮູບພາບ ແລະ ຕາຕະລາງທີ່ມີໂຄງສ້າງ ຈົນເຖິງການອັບເດດວັນທີອັດຕະໂນມັດ ແລະ ການສົ່ງອອກເນື້ອຫາເປັນ HTML, Notepad ນີ້ກ້າວລ້ຳກວ່າການແກ້ໄຂຂໍ້ຄວາມພື້ນຖານຫຼາຍ.",
      },
      {
        title: "ຫົວຂໍ້ຈາກ H1 ຫາ H6",
        desc: "ຈັດລະບຽບເນື້ອຫາຂອງທ່ານດ້ວຍລຳດັບຫົວຂໍ້ຄົບຖ້ວນຈາກ H1 ຫາ H6 ເຮັດໃຫ້ Notepad ນີ້ມີໂຄງສ້າງເໝືອນຕົວແກ້ໄຂເອກະສານແບບມືອາຊີບໃນ browser ຂອງທ່ານ.",
      },
      {
        title: "ຮູບແບບຟອນຫຼາຍຮູບແບບ",
        desc: "ເລືອກຈາກຮູບແບບຟອນຫຼາຍຊະນິດເພື່ອປັບແຕ່ງປະສົບການຂຽນຂອງທ່ານ ແລະ ເຮັດໃຫ້ເອກະສານຂອງທ່ານອ່ານງ່າຍ ສື່ຄວາມໄດ້ດີ ຫຼື ມີຄວາມເປັນມືອາຊີບຫຼາຍຂຶ້ນ.",
      },
      {
        title: "ປ່ຽນສີຂໍ້ຄວາມ",
        desc: "Notepad ອອນລາຍນີ້ອະນຸຍາດໃຫ້ທ່ານເນັ້ນຈຸດສຳຄັນ ແລະ ເພີ່ມຄວາມຊັດເຈນດ້ານສາຍຕາໂດຍການປ່ຽນສີຂໍ້ຄວາມ ເປັນເຄື່ອງມືຈັດຮູບແບບທີ່ງ່າຍແຕ່ຊົງພະລັງສຳລັບນັກຂຽນທຸກຄົນ.",
      },
      {
        title: "ປ່ຽນສຽງເປັນຂໍ້ຄວາມດ້ວຍ AI ຢ່າງແມ່ນຍຳ",
        desc: "ພຽງແຕ່ເວົ້າຄວາມຄິດຂອງທ່ານ ແລະ ເບິ່ງມັນປາກົດຂຶ້ນໃນໜ້າຈໍດ້ວຍຄວາມແມ່ນຍຳສູງ. ຟັງຊັນປ່ຽນສຽງເປັນຂໍ້ຄວາມດ້ວຍ AI ຂອງ Notepad ນີ້ຈະປ່ຽນສຽງຂອງທ່ານເປັນຂໍ້ຄວາມທີ່ສະອາດ ແລະ ບໍ່ມີຂໍ້ຜິດພາດໃນທັນທີ ຊ່ວຍປະຢັດເວລາໄດ້ຫຼາຍ.",
      },
      {
        title: "ສ້າງລິ້ງສຳລັບແບ່ງປັນຫຼັງຈາກເຂົ້າລະບົບ",
        desc: "ເມື່ອເຂົ້າລະບົບແລ້ວ Notepad ຂອງພວກເຮົາຈະອະນຸຍາດໃຫ້ທ່ານສ້າງລິ້ງສະເພາະສຳລັບແບ່ງປັນບັນທຶກໃດໆ ເຮັດໃຫ້ການຮ່ວມມື ແລະ ການແບ່ງປັນຢ່າງລວດເລັວງ່າຍດາຍເທົ່າກັບການຄັດລອກ URL.",
      },
      {
        title: "ສ້າງບັນຊີເພື່ອບັນທຶກປະຫວັດ",
        desc: "ສ້າງບັນຊີຟຣີໃນ Notepad ນີ້ເພື່ອເປີດໃຊ້ປະຫວັດບັນທຶກ ເພື່ອໃຫ້ທ່ານສາມາດກັບມາເບິ່ງ ກູ້ຄືນ ແລະ ຈັດການທຸກສິ່ງທີ່ທ່ານເຄີຍຂຽນໄວ້ໃນບ່ອນດຽວ.",
      },
    ],
    outro:
      "ນອກຈາກຄຸນສົມບັດເຫຼົ່ານີ້ ຍັງມີຟັງຊັນພິເສດອື່ນໆອີກຫຼາຍຢ່າງທີ່ທ່ານສາມາດໃຊ້ ແລະ ເພີດເພີນໄດ້ຟຣີ.",
  },
  lv: {
    title: "Tiešsaistes piezīmju bloka galvenās funkcijas",
    features: [
      {
        title: "Automātiskā saglabāšana tiešsaistē",
        desc: "Mūsu tiešsaistes piezīmju bloks automātiski saglabā jūsu darbu rakstīšanas laikā, tāpēc jūs nezaudēsiet nevienu vārdu pat tad, ja pārlūkprogramma avarē vai nejauši aizverat cilni.",
      },
      {
        title: "Lejupielāde TXT un PDF formātos",
        desc: "Ar mūsu piezīmju bloku jūs varat uzreiz eksportēt savas piezīmes kā tīru TXT vai PDF failu, padarot to saglabāšanu, drukāšanu vai kopīgošanu bezsaistē vienkāršu.",
      },
      {
        title: "Pilnekrāna režīms",
        desc: "Pārslēdzieties uz pilnekrāna režīmu un izmantojiet šo netraucējošo piezīmju bloku, kas nodrošina tīru rakstīšanas vidi no malas līdz malai, ideāli piemērotu koncentrētam darbam.",
      },
      {
        title: "200% tālummaiņas funkcija",
        desc: "Šis tiešsaistes piezīmju bloks ļauj palielināt tekstu līdz 200%, padarot ilgstošu rakstīšanu vai darbu ar mazu tekstu daudz ērtāku acīm.",
      },
      {
        title: "Ievietojiet attēlus, tabulas, automātiski atjauniniet datumus, eksportējiet HTML formātā",
        desc: "No attēlu un strukturētu tabulu ievietošanas līdz automātiskai datumu atjaunināšanai un satura eksportēšanai HTML formātā — šis piezīmju bloks piedāvā daudz vairāk nekā vienkāršu teksta rediģēšanu.",
      },
      {
        title: "Virsraksti no H1 līdz H6",
        desc: "Sakārtojiet savu saturu, izmantojot pilnu virsrakstu hierarhiju no H1 līdz H6, piešķirot šim piezīmju blokam profesionāla dokumentu redaktora struktūru tieši jūsu pārlūkprogrammā.",
      },
      {
        title: "Dažādi fontu stili",
        desc: "Izvēlieties no dažādiem fontu stiliem, lai pielāgotu savu rakstīšanas pieredzi un padarītu dokumentus vieglāk lasāmus, izteiksmīgākus vai profesionālākus.",
      },
      {
        title: "Mainīt teksta krāsu",
        desc: "Šis tiešsaistes piezīmju bloks ļauj izcelt svarīgākos punktus un uzlabot vizuālo pārskatāmību, mainot teksta krāsu. Tas ir vienkāršs, bet jaudīgs formatēšanas rīks jebkuram rakstītājam.",
      },
      {
        title: "Ar mākslīgo intelektu darbināta runas pārvēršana tekstā bez kļūdām",
        desc: "Izsakiet savas domas balsī un vērojiet, kā tās ar augstu precizitāti parādās ekrānā. Šī piezīmju bloka AI balstītā runas pārvēršanas tekstā funkcija acumirklī pārvērš jūsu balsi tīrā un bezkļūdu tekstā, palīdzot ietaupīt daudz laika.",
      },
      {
        title: "Izveidojiet kopīgojamu saiti pēc pierakstīšanās",
        desc: "Pēc pierakstīšanās mūsu piezīmju bloks ļauj izveidot unikālu kopīgojamu saiti jebkurai piezīmei, padarot sadarbību un ātru kopīgošanu tikpat vienkāršu kā URL kopēšanu.",
      },
      {
        title: "Izveidojiet kontu, lai saglabātu vēsturi",
        desc: "Izveidojiet bezmaksas kontu šajā piezīmju blokā, lai piekļūtu piezīmju vēsturei un vienuviet pārskatītu, atjaunotu un pārvaldītu visu, ko jebkad esat rakstījis.",
      },
    ],
    outro:
      "Papildus šīm iespējām ir pieejamas daudzas citas unikālas funkcijas, kuras varat izmantot un baudīt pilnīgi bez maksas.",
  },
  lt: {
    title: "Internetinio užrašų bloknoto pagrindinės funkcijos",
    features: [
      {
        title: "Automatinis išsaugojimas internete",
        desc: "Mūsų internetinis užrašų bloknotas automatiškai išsaugo jūsų darbą jums rašant, todėl neprarasite nė vieno žodžio net jei naršyklė užstringa arba netyčia uždarote skirtuką.",
      },
      {
        title: "Atsisiųsti TXT ir PDF formatais",
        desc: "Naudodami mūsų užrašų bloknotą galite akimirksniu eksportuoti savo užrašus kaip švarų TXT arba PDF failą, todėl juos lengva išsaugoti, atspausdinti ar bendrinti be interneto.",
      },
      {
        title: "Viso ekrano režimas",
        desc: "Perjunkite į viso ekrano režimą ir naudokite šį netrukdantį užrašų bloknotą, kuris suteikia švarią rašymo erdvę nuo krašto iki krašto, puikiai tinkančią susikaupusiems rašymo darbams.",
      },
      {
        title: "200 % priartinimo funkcija",
        desc: "Šis internetinis užrašų bloknotas leidžia priartinti iki 200 %, todėl ilgos rašymo sesijos ar darbas su mažu tekstu bet kuriame ekrane tampa patogesnis akims.",
      },
      {
        title: "Įterpti vaizdus, lenteles, automatinį datų atnaujinimą, HTML eksportą",
        desc: "Nuo vaizdų ir struktūruotų lentelių įterpimo iki automatinio datų atnaujinimo ir turinio eksportavimo HTML formatu – šis užrašų bloknotas gerokai pranoksta paprastą teksto redagavimą.",
      },
      {
        title: "Antraštės nuo H1 iki H6",
        desc: "Sutvarkykite savo turinį naudodami pilną antraščių hierarchiją nuo H1 iki H6, suteikdami šiam užrašų bloknotui profesionalaus dokumentų redaktoriaus struktūrą tiesiai jūsų naršyklėje.",
      },
      {
        title: "Skirtingi šriftų stiliai",
        desc: "Rinkitės iš įvairių šriftų stilių, kad pritaikytumėte rašymo patirtį ir padarytumėte dokumentus lengviau skaitomus, išraiškingus ar profesionalesnius.",
      },
      {
        title: "Keisti teksto spalvą",
        desc: "Šis internetinis užrašų bloknotas leidžia paryškinti svarbiausias vietas ir pagerinti vizualinį aiškumą keičiant teksto spalvą – tai paprastas, bet galingas formatavimo įrankis kiekvienam rašytojui.",
      },
      {
        title: "DI pagrįstas kalbos pavertimas tekstu be klaidų",
        desc: "Išsakykite savo mintis balsu ir stebėkite, kaip jos ekrane atsiranda itin tiksliai. Šio užrašų bloknoto DI pagrįsta kalbos pavertimo tekstu funkcija akimirksniu paverčia jūsų balsą švariu ir be klaidų tekstu, taip sutaupydama daug laiko.",
      },
      {
        title: "Sukurti bendrinamą nuorodą po prisijungimo",
        desc: "Prisijungus mūsų užrašų bloknotas leidžia sugeneruoti unikalią bendrinamą nuorodą bet kuriai pastabai, todėl bendradarbiavimas ir greitas dalinimasis tampa toks pat paprastas kaip URL kopijavimas.",
      },
      {
        title: "Sukurti paskyrą istorijai išsaugoti",
        desc: "Sukurkite nemokamą paskyrą šiame užrašų bloknote, kad atrakintumėte pastabų istoriją ir galėtumėte vienoje vietoje peržiūrėti, atkurti bei valdyti viską, ką kada nors esate parašę.",
      },
    ],
    outro:
      "Be šių funkcijų yra daug kitų unikalių galimybių, kurias galite naudoti ir mėgautis visiškai nemokamai.",
  },
  lb: {
    title: "Haaptfunktioune vum Online Notizblock",
    features: [
      {
        title: "Automatescht Späicheren online",
        desc: "Eisen Online-Notizblock späichert Är Aarbecht automatesch wärend Dir tippt, sou datt Dir kee eenzege Wuert verléiert, och wann Äre Browser ofstierzt oder Dir de Tab zoufälleg zoumaacht.",
      },
      {
        title: "Eroflueden am TXT- a PDF-Format",
        desc: "Mat eisem Notizblock kënnt Dir Är Notizen direkt als propper TXT- oder PDF-Datei exportéieren, wat et einfach mécht se ze späicheren, ze drécken oder offline ze deelen.",
      },
      {
        title: "Vollbildmodus",
        desc: "Wiesselt op de Vollbildmodus an notzt dësen oflenkungsfräien Notizblock, deen Iech eng propper Schreiffläch vu Bord zu Bord bitt – perfekt fir konzentréiert Schreiwsitzungen.",
      },
      {
        title: "200% Vergréisserungsfunktioun",
        desc: "Dësen Online-Notizblock erlaabt Iech bis zu 200% ze vergréisseren, wat d'Aarbecht mat klenge Schrëft oder laange Schreiwsitzungen op all Écran vill méi bequem mécht.",
      },
      {
        title: "Biller, Tabellen asetzen, automatesch Datums-Update, HTML-Export",
        desc: "Vun der Asetze vu Biller a strukturéierte Tabellen bis zur automatescher Aktualiséierung vum Datum an dem Export vun Ärem Inhalt als HTML geet dësen Notizblock wäit iwwer einfach Textbeaarbechtung eraus.",
      },
      {
        title: "Iwwerschrëften vun H1 bis H6",
        desc: "Organiséiert Ären Inhalt mat enger voller Iwwerschrëften-Hierarchie vun H1 bis H6, wat dësem Notizblock d’Struktur vun engem richtegen Dokument-Editor direkt an Ärem Browser gëtt.",
      },
      {
        title: "Verschidde Schrëftstiler",
        desc: "Wielt aus enger Rei vu Schrëftstiler fir Är Schreiferfarung ze personaliséieren an Är Dokumenter méi liesbar, expressiv oder professionell ze maachen.",
      },
      {
        title: "Textfaarf änneren",
        desc: "Dëse Online-Notizblock erlaabt Iech wichteg Punkten ze markéieren an d’Visibilitéit ze verbesseren andeems Dir d’Textfaarf ännert – en einfachen awer staarke Formatéierungs-Tool fir all Schrëftsteller.",
      },
      {
        title: "AI-gestëtzt Stëmm-zu-Text ouni Feeler",
        desc: "Schwätzt Är Gedanken a kuckt wéi se mat héijer Genauegkeet um Écran erschéngen. D’AI-gestëtzte Stëmm-zu-Text Funktioun vun dësem Notizblock verwandelt Är Stëmm direkt an e proppert, fehlerfräit Text, sou datt Dir vill Zäit spuert.",
      },
      {
        title: "Deelbare Link no Umeldung erstellen",
        desc: "Nodeems Dir Iech ageloggt hutt, erlaabt eise Notizblock Iech e eenzegaartege deelbare Link fir all Notiz ze generéieren, wat Zesummenaarbecht a séier Deele esou einfach mécht wéi eng URL ze kopéieren.",
      },
      {
        title: "Kont erstellen fir Geschicht ze späicheren",
        desc: "Erstellt e gratis Kont op dësem Notizblock fir d’Notiz-Geschicht opzespären, sou datt Dir alles wat Dir jeemools geschriwwen hutt op enger Plaz kucke, restauréieren an verwalten kënnt.",
      },
    ],
    outro:
      "Nieft dëse Funktiounen ginn et nach vill aner eenzegaarteg Méiglechkeeten, déi Dir gratis benotze an genéisse kënnt.",
  },
  mk: {
    title: "Главни карактеристики на онлајн бележникот",
    features: [
      {
        title: "Автоматско зачувување онлајн",
        desc: "Нашиот онлајн бележник автоматски ја зачувува вашата работа додека пишувате, па никогаш нема да изгубите ниту еден збор, дури и ако прелистувачот се сруши или случајно го затворите табот.",
      },
      {
        title: "Преземање во TXT и PDF формати",
        desc: "Со нашиот бележник можете веднаш да ги извезете вашите белешки како чист TXT или PDF фајл, што го олеснува зачувувањето, печатењето или споделувањето офлајн.",
      },
      {
        title: "Цел екран",
        desc: "Префрлете се во режим на цел екран и користете го овој бележник без одвлекување на вниманието, кој ви дава чист простор за пишување од раб до раб, совршен за фокусирано пишување.",
      },
      {
        title: "Функција за зголемување до 200%",
        desc: "Овој онлајн бележник овозможува зголемување до 200%, што го прави поудобен за очите при долги сесии на пишување или работа со мал текст на било кој екран.",
      },
      {
        title: "Вметнување слики, табели, автоматско ажурирање на датуми, извоз во HTML",
        desc: "Од вметнување слики и структурирани табели до автоматско ажурирање на датуми и извоз на содржина во HTML, овој бележник оди далеку надвор од основно уредување на текст.",
      },
      {
        title: "Наслови од H1 до H6",
        desc: "Организирајте ја вашата содржина со целосна хиерархија на наслови од H1 до H6, давајќи му на овој бележник структура на вистински документ-уредувач директно во вашиот прелистувач.",
      },
      {
        title: "Различни стилови на фонт",
        desc: "Изберете од различни стилови на фонт за да го персонализирате вашето пишување и да ги направите документите почитливи, поизразни или попрофесионални.",
      },
      {
        title: "Промена на боја на текст",
        desc: "Овој онлајн бележник ви овозможува да ги истакнете клучните точки и да додадете визуелна јасност со промена на бојата на текстот, едноставна но моќна алатка за форматирање за секој автор.",
      },
      {
        title: "AI говор во текст без грешки",
        desc: "Изговарајте ги вашите мисли и гледајте како се појавуваат на екранот со висока прецизност. AI функцијата за претворање на говор во текст веднаш го претвора вашиот глас во чист и безгрешен текст, штедејќи ви многу време.",
      },
      {
        title: "Генерирање споделлива врска по најавување",
        desc: "Откако ќе се најавите, нашиот бележник ви овозможува да генерирате уникатна споделлива врска за секоја белешка, што ја прави соработката и брзото споделување едноставно како копирање URL.",
      },
      {
        title: "Креирање сметка за зачувување историја",
        desc: "Креирајте бесплатна сметка на овој бележник за да ја отклучите историјата на белешките, за да можете да прегледате, вратите и управувате со сè што некогаш сте напишале, на едно место.",
      },
    ],
    outro:
      "Покрај овие, постојат уште многу уникатни функции што можете да ги користите и да уживате во нив бесплатно.",
  },
  mg: {
    title: "Endri-javatra lehibe amin’ny Notepad an-tserasera",
    features: [
      {
        title: "Fitehirizana mandeha ho azy an-tserasera",
        desc: "Ny notepad an-tserasera dia mitahiry ho azy ny asanao rehefa manoratra ianao, ka tsy ho very na dia teny iray aza ianao, na dia miharatsy tampoka ny navigateur-nao na manidy tabilao tsy nahy aza ianao.",
      },
      {
        title: "Fakana amin’ny endrika TXT sy PDF",
        desc: "Amin’ny notepad-nay dia afaka manondrana avy hatrany ny naoty ho rakitra TXT na PDF madio ianao, ka mora tehirizina, pirinty, na zaraina ivelan’ny aterineto ny asanao.",
      },
      {
        title: "Efijery feno",
        desc: "Mivadika amin’ny fomba efijery feno ary avelao ity notepad tsy misy fanelingelenana ity hanome sehatra fanoratana madio hatrany amin’ny sisiny, mety tsara ho an’ny asa fanoratana mifantoka.",
      },
      {
        title: "Fampitomboana 200%",
        desc: "Ity notepad an-tserasera ity dia mamela anao hampitombo hatramin’ny 200%, ka mahatonga ny fanoratana ela na ny asa amin’ny soratra kely amin’ny efijery rehetra ho mora sy tsy manavesatra ny maso.",
      },
      {
        title: "Ampidiro sary, latabatra, fanavaozana daty mandeha ho azy, fanondranana HTML",
        desc: "Manomboka amin’ny fampidirana sary sy latabatra voalamina hatramin’ny fanavaozana daty mandeha ho azy sy ny fanondranana ny votoatinao ho HTML, dia mihoatra lavitra noho ny fanovana lahatsoratra tsotra ity notepad ity.",
      },
      {
        title: "Lohateny H1 hatramin’ny H6",
        desc: "Alamino ny votoatinao amin’ny alalan’ny rafitra lohateny feno H1 hatramin’ny H6, ka manome ity notepad ity endrika toy ny mpanitsy antontan-taratasy matihanina ao anatin’ny navigateur-nao.",
      },
      {
        title: "Karazana endri-tsoratra samihafa",
        desc: "Misafidiana amin’ny karazana endri-tsoratra samihafa mba hanamboatra manokana ny traikefa fanoratanao ary hahatonga ny antontan-taratasy ho mora vakiana, maneho hevitra kokoa na matihanina kokoa.",
      },
      {
        title: "Fanovana lokon’ny lahatsoratra",
        desc: "Ity notepad an-tserasera ity dia ahafahanao manasongadina teboka manan-danja sy manatsara ny fahitana amin’ny alalan’ny fanovana lokon’ny lahatsoratra, fitaovana fandrafetana tsotra nefa mahery vaika ho an’ny mpanoratra rehetra.",
      },
      {
        title: "Fampiasana AI hanova feo ho lahatsoratra tsy misy hadisoana",
        desc: "Lazao ny eritreritrao ary jereo fa miseho amin’ny efijery amin’ny fahamarinan-toerana ambony izany. Ny endri-javatra AI amin’ny fanovana feo ho lahatsoratra dia manova avy hatrany ny feonao ho lahatsoratra madio tsy misy hadisoana, ka mitsitsy fotoana betsaka ho anao.",
      },
      {
        title: "Famoronana rohy azo zaraina aorian’ny fidirana",
        desc: "Rehefa tafiditra ao amin’ny kaontinao ianao dia afaka mamorona rohy tokana azo zaraina ho an’ny naoty rehetra, ka mahatonga ny fiaraha-miasa sy ny fizarana ho mora toy ny mandika URL iray.",
      },
      {
        title: "Mamorona kaonty hitahiry tantara",
        desc: "Mamorona kaonty maimaim-poana amin’ity notepad ity mba hanokatra ny tantaran’ny naoty, ka hahafahanao mijery indray, mamerina ary mitantana izay rehetra nosoratanao rehetra amin’ny toerana iray.",
      },
    ],
    outro:
      "Ankoatra ireo dia mbola misy endri-javatra maro hafa tokana azonao ampiasaina sy ankafizina maimaim-poana.",
  },
  ms: {
    title: "Ciri-ciri Utama Notepad Dalam Talian",
    features: [
      {
        title: "Simpan Automatik Dalam Talian",
        desc: "Notepad dalam talian kami secara automatik menyimpan kerja anda semasa anda menaip, jadi anda tidak akan kehilangan walau satu perkataan pun, walaupun pelayar anda rosak atau anda menutup tab secara tidak sengaja.",
      },
      {
        title: "Muat turun dalam format TXT dan PDF",
        desc: "Dengan notepad kami, anda boleh mengeksport nota anda serta-merta sebagai fail TXT atau PDF yang bersih, memudahkan untuk menyimpan, mencetak atau berkongsi kerja anda secara luar talian.",
      },
      {
        title: "Skrin Penuh",
        desc: "Tukar ke mod skrin penuh dan gunakan notepad tanpa gangguan ini yang memberikan ruang penulisan yang bersih dari hujung ke hujung, sesuai untuk sesi penulisan yang fokus.",
      },
      {
        title: "Fungsi Zum 200%",
        desc: "Notepad dalam talian ini membolehkan anda zum sehingga 200%, menjadikannya lebih selesa untuk mata semasa sesi penulisan panjang atau apabila bekerja dengan teks kecil pada mana-mana skrin.",
      },
      {
        title: "Sisip Imej, Jadual, Kemas Kini Tarikh Automatik, Eksport HTML",
        desc: "Daripada menyisip imej dan jadual berstruktur hingga kemas kini tarikh automatik dan mengeksport kandungan anda sebagai HTML, notepad ini jauh melebihi penyuntingan teks asas.",
      },
      {
        title: "Tajuk daripada H1 hingga H6",
        desc: "Susun kandungan anda dengan hierarki tajuk penuh daripada H1 hingga H6, memberikan notepad ini struktur seperti penyunting dokumen profesional terus dalam pelayar anda.",
      },
      {
        title: "Pelbagai Gaya Fon",
        desc: "Pilih daripada pelbagai gaya fon untuk memperibadikan pengalaman penulisan anda dan menjadikan dokumen lebih mudah dibaca, lebih ekspresif atau lebih profesional.",
      },
      {
        title: "Tukar Warna Teks",
        desc: "Notepad dalam talian ini membolehkan anda menonjolkan poin penting dan menambah kejelasan visual dengan menukar warna teks, satu alat pemformatan yang mudah tetapi berkuasa untuk semua penulis.",
      },
      {
        title: "Penukaran Pertuturan ke Teks Berkuasa AI Tanpa Ralat",
        desc: "Ucapkan fikiran anda dan lihat ia muncul pada skrin dengan ketepatan tinggi. Ciri pertuturan ke teks berkuasa AI pada notepad ini terus menukar suara anda kepada teks yang bersih dan bebas ralat, sekali gus menjimatkan banyak masa.",
      },
      {
        title: "Jana Pautan Boleh Kongsi Selepas Log Masuk",
        desc: "Selepas log masuk, notepad kami membolehkan anda menjana pautan unik yang boleh dikongsi untuk sebarang nota, menjadikan kerjasama dan perkongsian pantas semudah menyalin URL.",
      },
      {
        title: "Cipta Akaun untuk Rekod Sejarah",
        desc: "Cipta akaun percuma pada notepad ini untuk membuka sejarah nota supaya anda boleh melihat semula, memulihkan dan mengurus semua yang pernah anda tulis di satu tempat.",
      },
    ],
    outro:
      "Selain daripada ini, terdapat banyak lagi ciri unik lain yang boleh anda gunakan dan nikmati secara percuma.",
  },
  ml: {
    title: "ഓൺലൈൻ നോട്ട്‌പാഡിന്റെ പ്രധാന സവിശേഷതകൾ",
    features: [
      {
        title: "ഓട്ടോ സേവ് ഓൺലൈൻ",
        desc: "നിങ്ങൾ ടൈപ്പ് ചെയ്യുന്നതിനിടെ തന്നെ നിങ്ങളുടെ പ്രവർത്തനം ഓൺലൈൻ നോട്ട്‌പാഡ് സ്വയം സേവ് ചെയ്യും. അതിനാൽ ബ്രൗസർ ക്രാഷ് ആകുകയോ ടാബ് അബദ്ധത്തിൽ അടയ്ക്കുകയോ ചെയ്താലും ഒരു വാക്കും നഷ്ടപ്പെടില്ല.",
      },
      {
        title: "TXT, PDF ഫോർമാറ്റുകളിൽ ഡൗൺലോഡ് ചെയ്യുക",
        desc: "നമ്മുടെ നോട്ട്‌പാഡ് ഉപയോഗിച്ച് നിങ്ങൾക്ക് നിങ്ങളുടെ കുറിപ്പുകൾ ഉടൻ തന്നെ ശുദ്ധമായ TXT അല്ലെങ്കിൽ PDF ഫയലായി എക്സ്പോർട്ട് ചെയ്യാം. ഇത് സംരക്ഷിക്കാനും പ്രിന്റ് ചെയ്യാനും ഓഫ്‌ലൈൻ ആയി പങ്കിടാനും എളുപ്പമാക്കുന്നു.",
      },
      {
        title: "ഫുൾ സ്‌ക്രീൻ",
        desc: "ഫുൾ സ്‌ക്രീൻ മോഡിലേക്ക് മാറി, ശ്രദ്ധ തിരിക്കാത്ത ഈ നോട്ട്‌പാഡ് നിങ്ങളെ മുഴുവൻ സ്‌ക്രീൻ നിറഞ്ഞ ശുദ്ധമായ എഴുത്ത് സ്ഥലം നൽകും. ഇത് ശ്രദ്ധ കേന്ദ്രീകരിച്ച എഴുത്തിനായി ഏറ്റവും അനുയോജ്യമാണ്.",
      },
      {
        title: "200% സൂം ഫീച്ചർ",
        desc: "ഈ ഓൺലൈൻ നോട്ട്‌പാഡ് 200% വരെ സൂം ചെയ്യാൻ അനുവദിക്കുന്നു. ദീർഘനേരം എഴുതുമ്പോഴും ചെറിയ ടെക്സ്റ്റ് ഉപയോഗിച്ച് പ്രവർത്തിക്കുമ്പോഴും കണ്ണിന് കൂടുതൽ സൗകര്യപ്രദമാക്കുന്നു.",
      },
      {
        title: "ഇമേജുകൾ, പട്ടികകൾ ചേർക്കുക, തീയതികൾ സ്വയം അപ്ഡേറ്റ് ചെയ്യുക, HTML എക്സ്പോർട്ട്",
        desc: "ചിത്രങ്ങളും ഘടനയുള്ള പട്ടികകളും ചേർക്കുന്നതിൽ നിന്ന് തുടങ്ങി, തീയതികൾ സ്വയം അപ്ഡേറ്റ് ചെയ്യുകയും ഉള്ളടക്കം HTML ആയി എക്സ്പോർട്ട് ചെയ്യുകയും ചെയ്യുന്നതുവരെ, ഈ നോട്ട്‌പാഡ് അടിസ്ഥാന ടെക്സ്റ്റ് എഡിറ്റിംഗിനെക്കാൾ ഏറെ മുന്നിലാണ്.",
      },
      {
        title: "H1 മുതൽ H6 വരെയുള്ള തലക്കെട്ടുകൾ",
        desc: "H1 മുതൽ H6 വരെ ഉള്ള പൂർണ്ണ തലക്കെട്ട് ഘടന ഉപയോഗിച്ച് നിങ്ങളുടെ ഉള്ളടക്കം ക്രമീകരിക്കുക. ഇത് ബ്രൗസറിനുള്ളിൽ തന്നെ ഒരു പ്രൊഫഷണൽ ഡോക്യുമെന്റ് എഡിറ്ററിന്റെ ഘടന നൽകുന്നു.",
      },
      {
        title: "വിവിധ ഫോണ്ട് ശൈലികൾ",
        desc: "നിങ്ങളുടെ എഴുത്ത് അനുഭവം വ്യക്തിഗതമാക്കാനും ഡോക്യുമെന്റുകൾ കൂടുതൽ വായനാസൗകര്യമുള്ളതും പ്രകടനപരവുമായതും പ്രൊഫഷണലായതുമാക്കാനും വിവിധ ഫോണ്ട് ശൈലികൾ തിരഞ്ഞെടുക്കുക.",
      },
      {
        title: "ടെക്സ്റ്റ് നിറം മാറ്റുക",
        desc: "ടെക്സ്റ്റിന്റെ നിറം മാറ്റി പ്രധാനപ്പെട്ട ഭാഗങ്ങൾ ഹൈലൈറ്റ് ചെയ്യാനും ദൃശ്യ വ്യക്തത വർദ്ധിപ്പിക്കാനും ഈ ഓൺലൈൻ നോട്ട്‌പാഡ് സഹായിക്കുന്നു. ഇത് എല്ലാ എഴുത്തുകാർക്കും ഉപയോഗപ്രദമായ ലളിതമായെങ്കിലും ശക്തമായ ഫോർമാറ്റിംഗ് ടൂളാണ്.",
      },
      {
        title: "AI ഉപയോഗിച്ചുള്ള വോയിസ് ടു ടെക്സ്റ്റ് (പിശകുകളില്ലാതെ)",
        desc: "നിങ്ങളുടെ ചിന്തകൾ സംസാരിക്കൂ, അവ ഉയർന്ന കൃത്യതയോടെ സ്ക്രീനിൽ പ്രത്യക്ഷപ്പെടുന്നത് കാണൂ. ഈ നോട്ട്‌പാഡിന്റെ AI അധിഷ്ഠിത വോയിസ്-ടു-ടെക്സ്റ്റ് ഫീച്ചർ നിങ്ങളുടെ ശബ്ദത്തെ ഉടൻ തന്നെ ശുദ്ധവും പിശകുകളില്ലാത്തതുമായ ടെക്സ്റ്റായി മാറ്റുന്നു, അതിലൂടെ നിങ്ങൾക്ക് ഏറെ സമയം ലാഭിക്കാം.",
      },
      {
        title: "സൈൻ ഇൻ ചെയ്ത ശേഷം ഷെയർ ചെയ്യാവുന്ന ലിങ്ക് സൃഷ്ടിക്കുക",
        desc: "സൈൻ ഇൻ ചെയ്ത ശേഷം, ഏത് കുറിപ്പിനും ഒരു പ്രത്യേക ഷെയർ ചെയ്യാവുന്ന ലിങ്ക് സൃഷ്ടിക്കാൻ ഈ നോട്ട്‌പാഡ് അനുവദിക്കുന്നു. ഇതിലൂടെ സഹകരണവും വേഗത്തിലുള്ള പങ്കിടലും URL കോപ്പി ചെയ്യുന്നതുപോലെ എളുപ്പമാകും.",
      },
      {
        title: "ചരിത്രം രേഖപ്പെടുത്താൻ അക്കൗണ്ട് സൃഷ്ടിക്കുക",
        desc: "നിങ്ങൾ എഴുതിയ എല്ലാ കുറിപ്പുകളും ഒരേ സ്ഥലത്ത് വീണ്ടും കാണാനും പുനഃസ്ഥാപിക്കാനും നിയന്ത്രിക്കാനും കഴിയുന്ന വിധത്തിൽ നോട്ട് ചരിത്രം അൺലോക്ക് ചെയ്യാൻ ഈ നോട്ട്‌പാഡിൽ ഒരു സൗജന്യ അക്കൗണ്ട് സൃഷ്ടിക്കുക.",
      },
    ],
    outro:
      "ഇതുകൂടാതെ, നിങ്ങൾക്ക് ഉപയോഗിക്കാനും ആസ്വദിക്കാനും കഴിയുന്ന നിരവധി മറ്റ് പ്രത്യേക സവിശേഷതകളും സൗജന്യമായി ലഭ്യമാണ്.",
  },
  mt: {
    title: "Karatteristiċi Ewlenin tan-Notepad Online",
    features: [
      {
        title: "Iffrankar Awtomatiku Online",
        desc: "In-notepad online tagħna jiffranka awtomatikament ix-xogħol tiegħek waqt li tkun qed tittajpja, sabiex qatt ma titlef kelma waħda, anke jekk il-browser jikkraxxja jew tagħlaq it-tab bi żball.",
      },
      {
        title: "Niżżel f’format TXT u PDF",
        desc: "B’in-notepad tagħna tista’ tesporta n-noti tiegħek immedjatament bħala fajl TXT jew PDF nadif, u tagħmilha faċli biex issalva, tipprintja jew taqsam ix-xogħol tiegħek offline.",
      },
      {
        title: "Skeda Sħiħa (Full Screen)",
        desc: "Aqleb għal modalità full-screen u ħalli dan in-notepad mingħajr distrazzjonijiet jagħtik spazju ta’ kitba nadif minn tarf sa tarf, perfett għal sessjonijiet ta’ kitba ffukati.",
      },
      {
        title: "Funzjoni ta’ Zoom 200%",
        desc: "Dan in-notepad online jippermettilek tagħmel zoom sa 200%, li jagħmilha aktar komda għall-għajnejn waqt sessjonijiet twal ta’ kitba jew meta taħdem b’test żgħir fuq kwalunkwe skrin.",
      },
      {
        title: "Daħħal Stampi, Tabelli, Aġġornament Awtomatiku tad-Dati, Esportazzjoni HTML",
        desc: "Minn daħħal stampi u tabelli strutturati sa aġġornament awtomatiku tad-dati u esportazzjoni tal-kontenut bħala HTML, dan in-notepad imur ferm lil hinn mill-editjar bażiku tat-test.",
      },
      {
        title: "Titli minn H1 sa H6",
        desc: "Organizza l-kontenut tiegħek b’ġerarkija sħiħa ta’ titli minn H1 sa H6, li tagħti lil dan in-notepad struttura ta’ editur ta’ dokumenti professjonali direttament fil-browser tiegħek.",
      },
      {
        title: "Stili differenti ta’ font",
        desc: "Agħżel minn varjetà ta’ stili ta’ font biex tippersonalizza l-esperjenza tal-kitba tiegħek u tagħmel id-dokumenti tiegħek aktar faċli biex jinqraw, aktar espressivi jew aktar professjonali.",
      },
      {
        title: "Ibdel il-kulur tat-test",
        desc: "Dan in-notepad online jippermettilek tenfasizza punti importanti u żżid ċarezza viżwali billi tbiddel il-kulur tat-test, għodda ta’ formatting sempliċi iżda qawwija għal kull kittieb.",
      },
      {
        title: "Konverżjoni tal-vuċi għal test b’AI mingħajr żbalji",
        desc: "Esprimi l-ħsibijiet tiegħek u arahom jidhru fuq l-iskrin b’eżattezza għolja. Il-funzjoni ta’ speech-to-text b’AI ta’ dan in-notepad tbiddel il-vuċi tiegħek immedjatament f’test nadif u mingħajr żbalji, u tiffranka ħafna ħin.",
      },
      {
        title: "Oħloq link li tista’ taqsam wara li tidħol",
        desc: "Wara li tidħol, in-notepad tagħna jippermettilek toħloq link uniku li tista’ taqsam għal kwalunkwe nota, u jagħmel il-kollaborazzjoni u l-qsim veloċi sempliċi daqs li tikkopja URL.",
      },
      {
        title: "Oħloq kont biex tirrekordja l-istorja",
        desc: "Oħloq kont b’xejn fuq dan in-notepad biex tiftaħ l-istorja tan-noti sabiex tkun tista’ terġa’ tara, tirkupra u timmaniġġja dak kollu li qatt ktibt, kollu f’post wieħed.",
      },
    ],
    outro:
      "Barra minn dawn, hemm ħafna karatteristiċi uniċi oħra li tista’ tuża u tgawdi b’xejn.",
  },
  mi: {
    title: "Ngā Āhuatanga Matua o te Notepāpa Ā-Ipurangi",
    features: [
      {
        title: "Tiaki Aunoa Ā-Ipurangi",
        desc: "Ka tiaki aunoa tō mātou notepāpa ā-ipurangi i āu mahi i a koe e pato ana, kia kore rawa koe e ngaro i tētahi kupu kotahi, ahakoa ka pakaru te pūtirotiro, ka kati rānei koe i te ripa i te hapa.",
      },
      {
        title: "Tikiake i ngā hōputu TXT me PDF",
        desc: "Mā tā mātou notepāpa ka taea e koe te kaweake i āu tuhipoka hei kōnae TXT, PDF hoki i te wā tonu, kia māmā te tiaki, te tā, me te tiri ā-tuimotu i āu mahi.",
      },
      {
        title: "Mata Katoa",
        desc: "Hurihia ki te aratau mata katoa, ā, mā tēnei notepāpa kore whakararuraru e hoatu he papa tuhi mā, mai i tētahi tapa ki tētahi atu, tino pai mō ngā wā tuhi arotahi.",
      },
      {
        title: "Āhuatanga Whakarahi 200%",
        desc: "Ka āhei tēnei notepāpa ā-ipurangi ki a koe te whakarahi ake ki te 200%, kia māmā ake ki ngā karu mō ngā wā tuhi roa, mō te mahi rānei ki te tuhinga iti i runga i tētahi mata.",
      },
      {
        title: "Kōkuhu Pikitia, Ripanga, Whakahou Aunoa Rā, Kaweake HTML",
        desc: "Mai i te kōkuhu pikitia me ngā ripanga hanganga tae noa ki te whakahou aunoa i ngā rā me te kaweake i ō ihirangi hei HTML, ka tino nui ake tēnei notepāpa i te whakatika tuhinga taketake.",
      },
      {
        title: "Pane mai i te H1 ki te H6",
        desc: "Whakaraupapa i ō ihirangi mā te hanganga pane katoa mai i te H1 ki te H6, e hoatu ana ki tēnei notepāpa te āhua o tētahi etita tuhinga ngaio i roto tonu i tō pūtirotiro.",
      },
      {
        title: "Ngā momo momotuhi rerekē",
        desc: "Kōwhiria mai i ngā momo momotuhi rerekē hei whakawhaiaro i tō wheako tuhi, kia māmā ake te pānui, kia kaha ake te whakaatu, kia ngaio ake rānei ō tuhinga.",
      },
      {
        title: "Huri Tae Kupu",
        desc: "Ka āhei tēnei notepāpa ā-ipurangi ki a koe te miramira i ngā wāhanga matua me te whakakaha i te mārama ā-kanohi mā te huri i te tae o te kupu, he taputapu whakatakotoranga māmā engari kaha mō ngā kaituhi katoa.",
      },
      {
        title: "Reo-ki-te-Tuhinga mā AI, kore hapa",
        desc: "Kōrero i ō whakaaro, ā, ka kite koe e puta ana ki te mata me te tino tika. Ka huri tonutia e te āhuatanga reo-ki-te-tuhinga mā AI o tēnei notepāpa tō reo hei tuhinga mā, kore hapa, ā, ka penapena wā nui mōu.",
      },
      {
        title: "Hangaia he hono tiri i muri i te takiuru",
        desc: "Ina takiuru koe, ka āhei tā mātou notepāpa ki te hanga i tētahi hono tiri ahurei mō ia tuhipoka, kia māmā ai te mahi ngātahi me te tiri tere, pēnei tonu i te kape i tētahi URL.",
      },
      {
        title: "Hanga pūkete hei tiaki hītori",
        desc: "Hangaia he pūkete kore utu ki tēnei notepāpa kia whakatuwhera i te hītori tuhipoka, kia āhei koe ki te tiro anō, ki te whakahoki mai, me te whakahaere i ngā mea katoa i tuhia e koe, katoa ki tētahi wāhi kotahi.",
      },
    ],
    outro:
      "I tua atu i ēnei, he maha atu ngā āhuatanga ahurei ka taea e koe te whakamahi me te pārekareka kore utu.",
  },
  mr: {
    title: "ऑनलाइन नोटपॅडची मुख्य वैशिष्ट्ये",
    features: [
      {
        title: "ऑनलाइन ऑटो सेव्ह",
        desc: "तुम्ही टाइप करत असताना आमचा ऑनलाइन नोटपॅड आपोआप तुमचे काम सेव्ह करतो, त्यामुळे ब्राउझर क्रॅश झाला किंवा तुम्ही चुकून टॅब बंद केला तरीही तुमचा एकही शब्द हरवत नाही.",
      },
      {
        title: "TXT आणि PDF फॉरमॅटमध्ये डाउनलोड करा",
        desc: "आमच्या नोटपॅडमध्ये तुम्ही तुमच्या नोट्स त्वरित स्वच्छ TXT किंवा PDF फाईल म्हणून एक्सपोर्ट करू शकता, ज्यामुळे त्यांना सेव्ह करणे, प्रिंट करणे किंवा ऑफलाइन शेअर करणे सोपे होते.",
      },
      {
        title: "पूर्ण स्क्रीन",
        desc: "पूर्ण स्क्रीन मोडमध्ये जा आणि हा विचलनमुक्त नोटपॅड तुम्हाला स्वच्छ, काठापासून काठापर्यंत लेखनाची जागा देईल, जी लक्ष केंद्रित करून लिहिण्यासाठी उत्तम आहे.",
      },
      {
        title: "200% झूम सुविधा",
        desc: "हा ऑनलाइन नोटपॅड तुम्हाला 200% पर्यंत झूम करण्याची सुविधा देतो, ज्यामुळे दीर्घ लेखन सत्रांमध्ये किंवा लहान मजकुरावर काम करताना डोळ्यांना आराम मिळतो.",
      },
      {
        title: "प्रतिमा, तक्ते घाला, तारीख आपोआप अपडेट करा, HTML एक्सपोर्ट करा",
        desc: "प्रतिमा आणि संरचित तक्ते घालण्यापासून ते तारीख आपोआप अपडेट करणे आणि तुमचा मजकूर HTML स्वरूपात एक्सपोर्ट करण्यापर्यंत, हा नोटपॅड साध्या टेक्स्ट एडिटिंगच्या पलीकडे जातो.",
      },
      {
        title: "H1 ते H6 पर्यंत हेडिंग्ज",
        desc: "H1 ते H6 पर्यंत संपूर्ण हेडिंग हायरार्की वापरून तुमचा मजकूर व्यवस्थित करा, ज्यामुळे हा नोटपॅड तुमच्या ब्राउझरमध्येच प्रोफेशनल डॉक्युमेंट एडिटरप्रमाणे काम करतो.",
      },
      {
        title: "वेगवेगळे फॉन्ट शैली",
        desc: "तुमचा लेखन अनुभव वैयक्तिक करण्यासाठी विविध फॉन्ट शैली निवडा आणि तुमची डॉक्युमेंट्स अधिक वाचनीय, अभिव्यक्तीपूर्ण किंवा व्यावसायिक बनवा.",
      },
      {
        title: "मजकुराचा रंग बदला",
        desc: "हा ऑनलाइन नोटपॅड तुम्हाला महत्त्वाचे मुद्दे हायलाइट करण्यास आणि मजकुराचा रंग बदलून दृश्य स्पष्टता वाढविण्यास मदत करतो, जे प्रत्येक लेखकासाठी सोपे पण प्रभावी फॉरमॅटिंग साधन आहे.",
      },
      {
        title: "AI-आधारित स्पीच टू टेक्स्ट (चुकांशिवाय)",
        desc: "तुमचे विचार बोला आणि ते उच्च अचूकतेने स्क्रीनवर दिसताना पाहा. या नोटपॅडचे AI-आधारित स्पीच-टू-टेक्स्ट फीचर तुमचा आवाज लगेच स्वच्छ आणि चुकांशिवाय मजकुरात रूपांतरित करते, ज्यामुळे तुमचा खूप वेळ वाचतो.",
      },
      {
        title: "साइन-इन केल्यानंतर शेअर करण्यायोग्य लिंक तयार करा",
        desc: "साइन-इन केल्यानंतर आमचा नोटपॅड तुम्हाला कोणत्याही नोटसाठी एक अद्वितीय शेअर करण्यायोग्य लिंक तयार करण्याची सुविधा देतो, ज्यामुळे सहकार्य आणि जलद शेअरिंग URL कॉपी करण्याइतके सोपे होते.",
      },
      {
        title: "इतिहास जतन करण्यासाठी खाते तयार करा",
        desc: "या नोटपॅडवर मोफत खाते तयार करा जेणेकरून नोट इतिहास अनलॉक होईल आणि तुम्ही लिहिलेल्या सर्व गोष्टी एका ठिकाणी पुन्हा पाहू, पुनर्प्राप्त करू आणि व्यवस्थापित करू शकता.",
      },
    ],
    outro:
      "या व्यतिरिक्त अनेक इतर अनोख्या वैशिष्ट्यांचा तुम्ही मोफत वापर करू शकता आणि आनंद घेऊ शकता.",
  },
  mn: {
    title: "Онлайн тэмдэглэлийн үндсэн боломжууд",
    features: [
      {
        title: "Онлайнаар автоматаар хадгалах",
        desc: "Манай онлайн тэмдэглэл таныг бичиж байх үед автоматаар хадгалдаг тул браузер гэнэт унтрах эсвэл та санамсаргүйгээр таб хаасан ч нэг ч үг алдахгүй.",
      },
      {
        title: "TXT болон PDF форматаар татах",
        desc: "Манай тэмдэглэлээр та бичсэн зүйлээ шууд TXT эсвэл PDF файл болгон экспортолж, хадгалах, хэвлэх эсвэл офлайн хуваалцахад хялбар болгодог.",
      },
      {
        title: "Бүтэн дэлгэц",
        desc: "Бүтэн дэлгэцийн горимд шилжиж, анхаарал сарниулахгүй энэ тэмдэглэлээр ирмэгээс ирмэг хүртэл цэвэр бичих талбайг ашиглан төвлөрсөн бичих боломжтой.",
      },
      {
        title: "200% томруулах боломж",
        desc: "Энэхүү онлайн тэмдэглэл нь 200% хүртэл томруулах боломжтой тул урт хугацаанд бичих эсвэл жижиг тексттэй ажиллах үед нүдэнд илүү тухтай байдаг.",
      },
      {
        title: "Зураг, хүснэгт оруулах, огноог автоматаар шинэчлэх, HTML экспорт",
        desc: "Зураг болон бүтэцтэй хүснэгт оруулахаас эхлээд огноог автоматаар шинэчлэх, контентоо HTML болгон экспортлох хүртэл энэ тэмдэглэл нь энгийн текст засвараас хамаагүй илүү боломжтой.",
      },
      {
        title: "H1-ээс H6 хүртэл гарчигууд",
        desc: "H1-ээс H6 хүртэлх бүрэн гарчгийн бүтэц ашиглан контентоо цэгцэлснээр энэ тэмдэглэл нь таны браузер дотор мэргэжлийн баримт бичгийн засварлагч шиг бүтэцтэй болно.",
      },
      {
        title: "Янз бүрийн фонтын хэв маяг",
        desc: "Янз бүрийн фонтын хэв маягаас сонгож, бичих туршлагаа өөрийн болгож, бичвэрээ илүү уншигдахуйц, илэрхийлэлтэй эсвэл мэргэжлийн харагдуулна.",
      },
      {
        title: "Текстийн өнгө өөрчлөх",
        desc: "Энэхүү онлайн тэмдэглэл нь чухал хэсгүүдийг тодруулж, текстийн өнгийг өөрчлөх замаар харааны ойлгомжийг нэмэгдүүлдэг бөгөөд энэ нь бүх зохиогчдод хэрэгтэй энгийн боловч хүчирхэг форматлах хэрэгсэл юм.",
      },
      {
        title: "AI-д суурилсан яриаг текст болгох (алдаагүй)",
        desc: "Өөрийн бодлоо хэлэхэд тэд өндөр нарийвчлалтайгаар дэлгэц дээр гарч ирнэ. Энэхүү тэмдэглэлийн AI-д суурилсан яриа-текст хувиргах функц таны дуу хоолойг шууд цэвэр, алдаагүй текст болгон хувиргаж, таны цагийг ихээхэн хэмнэдэг.",
      },
      {
        title: "Нэвтэрсний дараа хуваалцах линк үүсгэх",
        desc: "Нэвтэрсний дараа манай тэмдэглэл нь ямар ч тэмдэглэлд зориулсан өвөрмөц хуваалцах линк үүсгэх боломж олгодог бөгөөд хамтын ажиллагаа болон хурдан хуваалцах нь URL хуулж тавихтай адил хялбар болно.",
      },
      {
        title: "Түүх хадгалах данс үүсгэх",
        desc: "Энэхүү тэмдэглэл дээр үнэгүй данс үүсгэснээр тэмдэглэлийн түүх нээгдэж, та бичсэн бүх зүйлээ нэг дор дахин харах, сэргээх, удирдах боломжтой болно.",
      },
    ],
    outro:
      "Эдгээрээс гадна та үнэгүй ашиглаж, таашааж болох олон бусад өвөрмөц боломжууд бий.",
  },
  nv: {
    title: "Naaltsoos Online yázhí bik’ehgo bee áká’áníłt’áá’ígíí",
    features: [
      {
        title: "Online doo łahgo ádingo áká’áníłt’áá’ígíí",
        desc: "Nił naaltsoos online bik’ehgo shił bééhózinígíí áádóó nida’iilyé yázhí bik’ehgo áká’áníłt’áá’ígíí, éí biniinaa t’áá ajiłii t’áá yá’át’ééh dooleeł, browser nílínígíí ííł’ínígíí dóó tab yázhí ádingo adahodííłt’įįhígíí daaztsałígíí bee doo nihwiiłnááh da.",
      },
      {
        title: "TXT dóó PDF bee naaltsoos yázhí bikáá’ áníłt’áá’ígíí",
        desc: "Naaltsoos online yázhí bee shikaadééłt’áá’ígíí t’áá anáá’í bikáá’ áníłt’áá’ígíí TXT dóó PDF yázhí bee, éí biniinaa bee áká’áníłt’áá’ígíí, bee áłts’íísí, dóó offline bee nihił hólǫ́.",
      },
      {
        title: "T’áá ajiłii bikáá’ łahgo áníłt’áá’ígíí",
        desc: "Full-screen bee áníłt’áá’ígíí bee yá’át’ééhgo áníłt’áá’ígíí, éí doo łahgo ádingo naaltsoos yázhí bee t’áá ajiłii bikáá’ bee shikaadééłt’áá’ígíí, bee hózhǫ́ǫ́go nidahwiil’aahígíí.",
      },
      {
        title: "200% bee yit’éédą́ą́’ áníłt’áá’ígíí",
        desc: "Naaltsoos online yázhí bee 200% bikáá’ yit’éédą́ą́’ áníłt’áá’ígíí, éí biniinaa t’áá ajiłii bee shikaadééłt’áá’ígíí dóó t’óó yázhí bee nida’iilyégo doo nihwiiłnááh da.",
      },
      {
        title: "Hózhǫ́ǫ́go naaltsoos bee bikáá’ áníłt’áá’ígíí, table dóó HTML bee áká’áníłt’áá’ígíí",
        desc: "Shikaadééłt’áá’ígíí bee naaltsoos online yázhí t’áá ajiłii bikáá’ áníłt’áá’ígíí, images dóó tables bee áká’áníłt’áá’ígíí dóó HTML bikáá’ áníłt’áá’ígíí, éí doo t’áá yázhí bee shikaadééłt’áá’ígíí da.",
      },
      {
        title: "H1 dóó H6 bee naaltsoos yázhí bikáá’ áníłt’áá’ígíí",
        desc: "H1 dóó H6 bee naaltsoos yázhí bikáá’ áníłt’áá’ígíí bee shikaadééłt’áá’ígíí, éí t’áá ajiłii bikáá’ áníłt’áá’ígíí dóó document editor yázhí bikáá’ áníłt’áá’ígíí.",
      },
      {
        title: "Naaltsoos bee t’óó ahéhee’ bee át’éego áníłt’áá’ígíí",
        desc: "T’óó ahéhee’ font styles bee át’éego bee áníłt’áá’ígíí bee nizhónígo bee shikaadééłt’áá’ígíí, éí t’áá ajiłii bee yá’át’ééhgo bee naaltsoos yázhí.",
      },
      {
        title: "Naaltsoos bee bikáá’ ííł’ínígíí yázhí bee áníłt’áá’ígíí",
        desc: "Naaltsoos online yázhí bee t’áá ajiłii bikáá’ bee ííł’ínígíí áádóó t’áá yá’át’ééhgo bee shikaadééłt’áá’ígíí, éí t’áá ajiłii bee áká’áníłt’áá’ígíí.",
      },
      {
        title: "AI bee yá’át’ééhgo shííłt’áá’ígíí bee naaltsoos",
        desc: "Nihił shikaadééłt’áá’ígíí bee shííłt’áá’ígíí dóó t’áá ajiłii bikáá’ áníłt’áá’ígíí, AI bee naaltsoos yázhí bee shííłt’áá’ígíí doo łahgo ádingo.",
      },
      {
        title: "Sign-in yázhí bikáá’ áníłt’áá’ígíí bee link áníłt’áá’ígíí",
        desc: "Sign-in bikáá’ áníłt’áá’ígíí dóó naaltsoos online yázhí bee link t’áá ajiłii áníłt’áá’ígíí, éí bee t’áá yá’át’ééhgo bee shikaadééłt’áá’ígíí.",
      },
      {
        title: "Account áníłt’áá’ígíí bee history áká’áníłt’áá’ígíí",
        desc: "Free account bee naaltsoos online yázhí bee history áká’áníłt’áá’ígíí, éí biniinaa t’áá ajiłii bee naaltsoos yázhí bee shikaadééłt’áá’ígíí.",
      },
    ],
    outro:
      "T’áá ajiłii bee áádóó t’óó ahéhee’ bee áníłt’áá’ígíí, éí doo łahgo ádingo bee shikaadééłt’áá’ígíí.",
  },
  ne: {
    title: "अनलाइन नोटप्याडका मुख्य विशेषताहरू",
    features: [
      {
        title: "अनलाइन स्वतः सेभ",
        desc: "तपाईं टाइप गर्दै गर्दा हाम्रो अनलाइन नोटप्याडले स्वतः तपाईंको काम सेभ गर्छ, त्यसैले ब्राउजर क्र्यास भए पनि वा तपाईंले गल्तीले ट्याब बन्द गरे पनि तपाईंको एक शब्द पनि हराउँदैन।",
      },
      {
        title: "TXT र PDF ढाँचामा डाउनलोड गर्नुहोस्",
        desc: "हाम्रो नोटप्याडबाट तपाईंले आफ्ना नोटहरू तुरुन्तै सफा TXT वा PDF फाइलको रूपमा एक्सपोर्ट गर्न सक्नुहुन्छ, जसले सेभ, प्रिन्ट वा अफलाइन सेयर गर्न सजिलो बनाउँछ।",
      },
      {
        title: "फुल स्क्रिन",
        desc: "फुल स्क्रिन मोडमा स्विच गर्नुहोस् र यो विचलनरहित नोटप्याडले तपाईंलाई किनारादेखि किनारासम्म सफा लेखन क्यानभास दिन्छ, जुन केन्द्रित लेखन सत्रका लागि उत्तम हुन्छ।",
      },
      {
        title: "200% जुम सुविधा",
        desc: "यो अनलाइन नोटप्याडले 200% सम्म जुम गर्न दिन्छ, जसले लामो लेखन सत्र वा सानो टेक्स्टसँग काम गर्दा आँखालाई सजिलो बनाउँछ।",
      },
      {
        title: "तस्बिर, तालिका राख्नुहोस्, मिति स्वतः अपडेट, HTML एक्सपोर्ट",
        desc: "तस्बिर र संरचित तालिकाहरू राख्नेदेखि लिएर मिति स्वतः अपडेट गर्ने र तपाईंको सामग्रीलाई HTML रूपमा एक्सपोर्ट गर्नेसम्म, यो नोटप्याड सामान्य टेक्स्ट एडिटिङभन्दा धेरै अगाडि छ।",
      },
      {
        title: "H1 देखि H6 सम्मका हेडिङहरू",
        desc: "H1 देखि H6 सम्मको पूर्ण हेडिङ संरचना प्रयोग गरेर आफ्नो सामग्री व्यवस्थित गर्नुहोस्, जसले यो नोटप्याडलाई ब्राउजरमै एक प्रोफेशनल डकुमेन्ट एडिटरको संरचना दिन्छ।",
      },
      {
        title: "विभिन्न फन्ट शैलीहरू",
        desc: "तपाईंको लेखन अनुभवलाई व्यक्तिगत बनाउन विभिन्न फन्ट शैलीहरू छनोट गर्नुहोस् र आफ्नो डकुमेन्टलाई अझ पढ्न सजिलो, अभिव्यक्तिपूर्ण वा व्यावसायिक बनाउनुहोस्।",
      },
      {
        title: "टेक्स्टको रङ परिवर्तन गर्नुहोस्",
        desc: "यो अनलाइन नोटप्याडले महत्त्वपूर्ण बुँदाहरू हाइलाइट गर्न र टेक्स्टको रङ परिवर्तन गरेर दृश्य स्पष्टता बढाउन मद्दत गर्छ, जुन हरेक लेखकका लागि सरल तर शक्तिशाली फर्म्याटिङ टुल हो।",
      },
      {
        title: "AI-संचालित स्पीच टु टेक्स्ट (त्रुटिविना)",
        desc: "आफ्ना विचारहरू बोल्नुहोस् र ती उच्च शुद्धतासहित स्क्रिनमा देखिनुहोस्। यस नोटप्याडको AI-संचालित स्पीच-टु-टेक्स्ट फिचरले तपाईंको आवाजलाई तुरुन्तै सफा र त्रुटिविहीन टेक्स्टमा रूपान्तरण गर्छ, जसले तपाईंको धेरै समय बचत गर्छ।",
      },
      {
        title: "साइन इन पछि सेयर गर्न मिल्ने लिंक बनाउनुहोस्",
        desc: "साइन इन गरेपछि हाम्रो नोटप्याडले कुनै पनि नोटका लागि विशेष सेयर गर्न मिल्ने लिंक बनाउन दिन्छ, जसले सहकार्य र छिटो सेयरिङलाई URL कपी गरेजस्तै सजिलो बनाउँछ।",
      },
      {
        title: "इतिहास रेकर्ड गर्न खाता बनाउनुहोस्",
        desc: "यस नोटप्याडमा निःशुल्क खाता बनाउनुहोस् ताकि नोट इतिहास अनलक होस् र तपाईंले लेखेका सबै कुरा एकै ठाउँमा पुनः हेर्न, पुनः प्राप्त गर्न र व्यवस्थापन गर्न सक्नुहोस्।",
      },
    ],
    outro:
      "यी बाहेक पनि धेरै अन्य अनौठा सुविधाहरू छन् जुन तपाईंले निःशुल्क प्रयोग गर्न र आनन्द लिन सक्नुहुन्छ।",
  },
  no: {
    title: "Viktige funksjoner i nettbasert notatblokk",
    features: [
      {
        title: "Automatisk lagring på nett",
        desc: "Vår nettbaserte notatblokk lagrer arbeidet ditt automatisk mens du skriver, slik at du aldri mister et eneste ord, selv om nettleseren krasjer eller du ved et uhell lukker fanen.",
      },
      {
        title: "Last ned i TXT- og PDF-formater",
        desc: "Med vår notatblokk kan du eksportere notatene dine umiddelbart som en ren TXT- eller PDF-fil, noe som gjør det enkelt å lagre, skrive ut eller dele arbeidet ditt offline.",
      },
      {
        title: "Fullskjerm",
        desc: "Bytt til fullskjermmodus og la denne distraksjonsfrie notatblokken gi deg et rent skriveområde fra kant til kant, perfekt for konsentrerte skriveøkter.",
      },
      {
        title: "200 % zoom-funksjon",
        desc: "Denne nettbaserte notatblokken lar deg zoome inn opptil 200 %, noe som gjør det lettere for øynene under lange skriveøkter eller når du arbeider med liten tekst på hvilken som helst skjerm.",
      },
      {
        title: "Sett inn bilder, tabeller, automatisk datouppdatering, HTML-eksport",
        desc: "Fra å sette inn bilder og strukturerte tabeller til automatisk oppdatering av datoer og eksport av innholdet ditt som HTML, går denne notatblokken langt utover enkel tekstredigering.",
      },
      {
        title: "Overskrifter fra H1 til H6",
        desc: "Organiser innholdet ditt med et komplett overskriftshierarki fra H1 til H6, noe som gir denne notatblokken strukturen til en fullverdig dokumentredigerer rett i nettleseren.",
      },
      {
        title: "Ulike skrifttyper",
        desc: "Velg blant ulike skrifttyper for å tilpasse skriveopplevelsen din og gjøre notatene dine mer lesbare, uttrykksfulle eller profesjonelle.",
      },
      {
        title: "Endre tekstfarge",
        desc: "Denne nettbaserte notatblokken lar deg fremheve viktige punkter og øke visuell tydelighet ved å endre tekstfarge, et enkelt men kraftig formateringsverktøy for alle skribenter.",
      },
      {
        title: "AI-drevet tale-til-tekst uten feil",
        desc: "Si tankene dine og se dem dukke opp på skjermen med høy nøyaktighet. Denne notatblokkens AI-drevne tale-til-tekst-funksjon gjør stemmen din umiddelbart om til ren og feilfri tekst, slik at du sparer mye tid.",
      },
      {
        title: "Generer delbar lenke etter innlogging",
        desc: "Når du er logget inn, lar vår notatblokk deg generere en unik delbar lenke for ethvert notat, noe som gjør samarbeid og rask deling like enkelt som å kopiere en URL.",
      },
      {
        title: "Opprett konto for å lagre historikk",
        desc: "Opprett en gratis konto i denne notatblokken for å låse opp notathistorikk, slik at du kan se, gjenopprette og administrere alt du noen gang har skrevet, på ett sted.",
      },
    ],
    outro:
      "I tillegg til dette finnes det mange andre unike funksjoner du kan bruke og nyte gratis.",
  },
  om: {
    title: "Amaloota Ijoo Notepad Toora Intarneetii",
    features: [
      {
        title: "Ofumaan Kuusuu Toora Intarneetii",
        desc: "Notepad keenya toora intarneetii irratti yoo barreessitu hojii kee ofumaan kuusa, kanaaf jecha browser kee yoo caccabe ykn tab yoo dogoggoraan cufte iyyuu jecha tokko illee hin dhabdu.",
      },
      {
        title: "Furmaata TXT fi PDF irratti buufachuu",
        desc: "Notepad keenya fayyadamuun yaadawwan kee saffisaan akka faayilii TXT ykn PDF qulqulluu ta’etti al-erguu dandeessa, kunis kuufachuu, maxxansuu ykn alatti qooduu salphaa taasisa.",
      },
      {
        title: "Sikirii Guutuu",
        desc: "Haala sikirii guutuu irratti jijjiiriitii notepad jeequmsa hin qabne kun bakka barreessuu qulqulluu daangaa irraa gara daangaa siif kenna, kunis yeroo barreessuu irratti xiyyeeffachuuf mijataa dha.",
      },
      {
        title: "Amaloota Zuumii 200%",
        desc: "Notepad toora intarneetii kun hanga 200% tti guddisuu siif eeyyama, kunis yeroo dheeraa barreessuu ykn barruu xiqqaa irratti hojjechuu keessatti ijaaf salphaa taasisa.",
      },
      {
        title: "Suuraa, gabatee galchuu, guyyaa ofumaan haaromsuu, HTML al-erguu",
        desc: "Suuraa fi gabateewwan sirnaan qindaa’an galchuu irraa kaasee hanga guyyaa ofumaan haaromsuu fi qabiyyee kee HTML taasisuun al-erguutti, notepad kun gulaallii barruu salphaa irra darbee tajaajila bal’aa kenna.",
      },
      {
        title: "Mataduree H1 irraa hanga H6 tti",
        desc: "Qabiyyee kee sirnaan qindeessi mata duree H1 irraa hanga H6 tti fayyadamuun, kunis notepad kanaaf bocaa gulaalaa sanadootaa sirrii ta’e browser kee keessatti kenna.",
      },
      {
        title: "Akkaataa Font garaagaraa",
        desc: "Akkaataa font garaagaraa keessaa filadhuun muuxannoo barreessuu kee dhuunfachiisi, akkasumas sanadoota kee dubbifamuu salphaa, ibsaa fi ogummaa qabu taasisi.",
      },
      {
        title: "Halluu Barreeffamaa Jijjiiruu",
        desc: "Notepad toora intarneetii kun qixxata ijoo adda baasuuf fi iftoomina mul’ataa dabaluuf halluu barreeffamaa jijjiiru siif eeyyama, kunis meeshaa gulaallii salphaa garuu humna guddaa qabu dha.",
      },
      {
        title: "Sagalee gara Barreeffamaa (AI’n hojjetamu, dogoggora malee)",
        desc: "Yaada kee dubbadhu, isaanis sirritti iskiriinii irratti akka mul’atan ilaali. Amalni AI’n hojjetame kan sagalee gara barreeffamaa jijjiiru kun sagalee kee hatattamaan gara barreeffama qulqulluu fi dogoggora hin qabneetti jijjiira, kanaanis yeroo baay’ee si qusata.",
      },
      {
        title: "Erga seentee booda link qoodamuu danda’u uumuu",
        desc: "Erga seentee booda, notepad keenya yaadannoo kamiyyuu irratti link qoodamuu danda’u addaa uumuuf si dandeessisa, kunis waliin hojjechuu fi saffisaan qooduu URL koppii gochuu qofaatti salphisa.",
      },
      {
        title: "Seenaa galmeessuuf account uumu",
        desc: "Notepad kana irratti account bilisaa uumiiti seenaa yaadannoo banadhu, kanaanis wanta barreessite hunda bakka tokko keessatti irra deebi’uun ilaaluu, deebisanii argachuu fi bulchuu dandeessa.",
      },
    ],
    outro:
      "Kana malees amaloota addaa hedduu biroo bilisaan itti fayyadamuu fi itti gammaduu ni dandeessa.",
  },
  ps: {
    title: "د آنلاین نوټپېډ مهمې ځانګړتیاوې",
    features: [
      {
        title: "آنلاین خودکار خوندي کول",
        desc: "زموږ آنلاین نوټپېډ ستا کار په اتومات ډول د لیکلو پر مهال خوندي کوي، نو که براوزر خراب شي یا ته په تېروتنه ټب بند کړې هم، هېڅ یو کلمه به له لاسه ورنکړې.",
      },
      {
        title: "د TXT او PDF بڼه کې ډاونلوډ",
        desc: "زموږ نوټپېډ سره ته کولی شې خپل نوټونه سمدستي د TXT یا PDF پاک فایل په بڼه صادر کړې، چې خوندي کول، چاپ کول او آفلاین شریکول اسانه کړي.",
      },
      {
        title: "بشپړ سکرین",
        desc: "بشپړ سکرین حالت ته لاړ شه او دا د پام نه اړوونکی نوټپېډ دې ته اجازه ورکړه چې تا ته له یوې څنډې تر بلې پاک د لیکلو ساحه درکړي، چې د تمرکز لپاره غوره ده.",
      },
      {
        title: "۲۰۰٪ زوم ځانګړتیا",
        desc: "دا آنلاین نوټپېډ تا ته تر ۲۰۰٪ پورې د زوم کولو اجازه درکوي، چې د اوږدو لیکلو پر مهال یا د کوچني متن سره کار کولو کې سترګو ته اسانتیا ورکوي.",
      },
      {
        title: "انځورونه، جدول، د نېټو خودکار تازه کول، HTML صادرول",
        desc: "له انځورونو او منظم جدولونو د داخلولو څخه نیولې تر د نېټو خودکار تازه کولو او د HTML په بڼه د محتوا صادرولو پورې، دا نوټپېډ له عادي متن ایډیټنګ څخه ډېر وړاندې دی.",
      },
      {
        title: "له H1 څخه تر H6 پورې سرلیکونه",
        desc: "خپل محتوا د H1 څخه تر H6 پورې د بشپړ سرلیک جوړښت سره منظم کړه، چې دا نوټپېډ په براوزر کې د مسلکي سند ایډیټر بڼه ورکوي.",
      },
      {
        title: "بېلابېل فونټ سټایلونه",
        desc: "د بېلابېلو فونټ سټایلونو څخه انتخاب وکړه ترڅو د لیکلو تجربه شخصي کړې او خپل اسناد لا ډېر د لوستلو وړ، څرګند او مسلکي کړې.",
      },
      {
        title: "د متن رنګ بدلول",
        desc: "دا آنلاین نوټپېډ تا ته اجازه درکوي چې مهم ټکي روښانه کړې او د متن رنګ بدلولو سره بصري وضاحت زیات کړې، چې د هر لیکوال لپاره ساده خو قوي فورمېټینګ وسیله ده.",
      },
      {
        title: "د AI په مرسته غږ ته متن (بې له تېروتنې)",
        desc: "خپل فکرونه ووایه او وګوره چې په لوړه دقت سره په سکرین څرګندېږي. د دې نوټپېډ د AI پر بنسټ غږ-ته-متن ځانګړتیا ستا غږ سمدستي پاک او بې له تېروتنې متن ته اړوي، نو ته ډېر وخت سپمولی شې.",
      },
      {
        title: "له ننوتلو وروسته د شریکولو لینک جوړول",
        desc: "کله چې ته داخل شې، زموږ نوټپېډ تا ته اجازه درکوي چې د هر نوټ لپاره ځانګړی د شریکولو لینک جوړ کړې، چې همکاري او چټک شریکول د URL د کاپي کولو په څېر اسانه کوي.",
      },
      {
        title: "د تاریخ ثبتولو لپاره حساب جوړ کړه",
        desc: "په دې نوټپېډ کې وړیا حساب جوړ کړه ترڅو د نوټونو تاریخ خلاص شي، او ته وکولی شې خپل ټول لیکل شوي شیان بیا وګورې، بیرته ترلاسه کړې او په یوه ځای کې یې اداره کړې.",
      },
    ],
    outro:
      "له دې پرته ډېر نور ځانګړي فیچرونه هم شته چې ته یې وړیا کارولی او خوند ترې اخیستلی شې.",
  },
  fa: {
    title: "ویژگی‌های اصلی نوت‌پد آنلاین",
    features: [
      {
        title: "ذخیره‌سازی خودکار آنلاین",
        desc: "نوت‌پد آنلاین ما هنگام تایپ به‌طور خودکار کارهای شما را ذخیره می‌کند، بنابراین حتی اگر مرورگر شما خراب شود یا به‌طور تصادفی تب را ببندید، حتی یک کلمه هم از دست نمی‌دهید.",
      },
      {
        title: "دانلود در فرمت‌های TXT و PDF",
        desc: "با نوت‌پد ما می‌توانید یادداشت‌های خود را فوراً به‌صورت فایل TXT یا PDF تمیز خروجی بگیرید، که ذخیره‌سازی، چاپ یا اشتراک‌گذاری آفلاین را آسان می‌کند.",
      },
      {
        title: "تمام‌صفحه",
        desc: "به حالت تمام‌صفحه بروید و بگذارید این نوت‌پد بدون حواس‌پرتی یک بوم نوشتاری تمیز از لبه تا لبه در اختیار شما قرار دهد، که برای نوشتن‌های متمرکز بسیار مناسب است.",
      },
      {
        title: "ویژگی بزرگ‌نمایی ۲۰۰٪",
        desc: "این نوت‌پد آنلاین به شما اجازه می‌دهد تا ۲۰۰٪ بزرگ‌نمایی کنید، که برای جلسات طولانی نوشتن یا کار با متن‌های کوچک روی هر صفحه‌نمایش، فشار چشم را کاهش می‌دهد.",
      },
      {
        title: "درج تصویر، جدول، به‌روزرسانی خودکار تاریخ، خروجی HTML",
        desc: "از درج تصاویر و جدول‌های ساختاریافته گرفته تا به‌روزرسانی خودکار تاریخ و خروجی گرفتن از محتوا به‌صورت HTML، این نوت‌پد بسیار فراتر از ویرایش ساده متن است.",
      },
      {
        title: "تیترها از H1 تا H6",
        desc: "محتوای خود را با یک ساختار کامل تیتر از H1 تا H6 سازمان‌دهی کنید، که به این نوت‌پد ساختار یک ویرایشگر حرفه‌ای سند را در مرورگر شما می‌دهد.",
      },
      {
        title: "انواع سبک‌های فونت",
        desc: "از میان انواع سبک‌های فونت انتخاب کنید تا تجربه نوشتن خود را شخصی‌سازی کرده و اسناد خود را خواناتر، بیانگرتر یا حرفه‌ای‌تر کنید.",
      },
      {
        title: "تغییر رنگ متن",
        desc: "این نوت‌پد آنلاین به شما اجازه می‌دهد نکات مهم را برجسته کنید و با تغییر رنگ متن، وضوح بصری اضافه کنید؛ یک ابزار ساده اما قدرتمند برای هر نویسنده.",
      },
      {
        title: "تبدیل گفتار به متن با هوش مصنوعی بدون خطا",
        desc: "افکار خود را بیان کنید و ببینید که با دقت بالا روی صفحه ظاهر می‌شوند. قابلیت تبدیل گفتار به متن مبتنی بر هوش مصنوعی این نوت‌پد، صدای شما را فوراً به متنی تمیز و بدون خطا تبدیل می‌کند، بنابراین زمان زیادی صرفه‌جویی می‌شود.",
      },
      {
        title: "ایجاد لینک قابل اشتراک پس از ورود",
        desc: "پس از ورود، نوت‌پد ما به شما اجازه می‌دهد برای هر یادداشت یک لینک قابل اشتراک منحصربه‌فرد ایجاد کنید، که همکاری و اشتراک‌گذاری سریع را به سادگی کپی کردن یک URL می‌کند.",
      },
      {
        title: "ایجاد حساب برای ثبت تاریخچه",
        desc: "یک حساب رایگان در این نوت‌پد ایجاد کنید تا تاریخچه یادداشت‌ها فعال شود و بتوانید همه نوشته‌های خود را در یک مکان مشاهده، بازیابی و مدیریت کنید.",
      },
    ],
    outro:
      "علاوه بر این‌ها، بسیاری از ویژگی‌های منحصربه‌فرد دیگر نیز وجود دارد که می‌توانید به‌صورت رایگان از آن‌ها استفاده و لذت ببرید.",
  },
  pl: {
    title: "Najważniejsze funkcje notatnika online",
    features: [
      {
        title: "Automatyczne zapisywanie online",
        desc: "Nasz notatnik online automatycznie zapisuje Twoją pracę podczas pisania, dzięki czemu nigdy nie stracisz ani jednego słowa, nawet jeśli przeglądarka się zawiesi lub przypadkowo zamkniesz kartę.",
      },
      {
        title: "Pobieranie w formacie TXT i PDF",
        desc: "W naszym notatniku możesz natychmiast eksportować swoje notatki jako czysty plik TXT lub PDF, co ułatwia zapisywanie, drukowanie i udostępnianie pracy offline.",
      },
      {
        title: "Tryb pełnoekranowy",
        desc: "Przełącz się na tryb pełnoekranowy i pozwól temu notatnikowi bez rozpraszania zapewnić Ci czyste pole do pisania od krawędzi do krawędzi, idealne do skupionych sesji pisania.",
      },
      {
        title: "Funkcja powiększenia 200%",
        desc: "Ten notatnik online pozwala powiększyć tekst aż do 200%, co ułatwia czytanie podczas długich sesji pisania lub pracy z małym tekstem na każdym ekranie.",
      },
      {
        title: "Wstawianie obrazów, tabel, automatyczna aktualizacja dat, eksport HTML",
        desc: "Od wstawiania obrazów i uporządkowanych tabel po automatyczną aktualizację dat i eksport treści jako HTML — ten notatnik wykracza daleko poza podstawową edycję tekstu.",
      },
      {
        title: "Nagłówki od H1 do H6",
        desc: "Organizuj swoją treść za pomocą pełnej hierarchii nagłówków od H1 do H6, dzięki czemu ten notatnik działa jak profesjonalny edytor dokumentów bezpośrednio w przeglądarce.",
      },
      {
        title: "Różne style czcionek",
        desc: "Wybierz spośród różnych stylów czcionek, aby spersonalizować swoje doświadczenie pisania i sprawić, by Twoje dokumenty były bardziej czytelne, wyraziste lub profesjonalne.",
      },
      {
        title: "Zmień kolor tekstu",
        desc: "Ten notatnik online pozwala wyróżniać kluczowe punkty i zwiększać przejrzystość wizualną poprzez zmianę koloru tekstu — proste, ale bardzo skuteczne narzędzie formatowania dla każdego pisarza.",
      },
      {
        title: "Konwersja mowy na tekst z AI bez błędów",
        desc: "Wypowiedz swoje myśli, a zobaczysz je na ekranie z dużą dokładnością. Funkcja zamiany mowy na tekst oparta na AI natychmiast zamienia Twój głos w czysty i bezbłędny tekst, co pozwala oszczędzić dużo czasu.",
      },
      {
        title: "Generowanie linku do udostępniania po zalogowaniu",
        desc: "Po zalogowaniu nasz notatnik umożliwia generowanie unikalnego linku do udostępniania dowolnej notatki, co sprawia, że współpraca i szybkie udostępnianie są tak proste jak skopiowanie adresu URL.",
      },
      {
        title: "Utwórz konto, aby zapisywać historię",
        desc: "Utwórz darmowe konto w tym notatniku, aby odblokować historię notatek, dzięki czemu możesz przeglądać, odzyskiwać i zarządzać wszystkim, co kiedykolwiek napisałeś, w jednym miejscu.",
      },
    ],
    outro:
      "Oprócz tego istnieje wiele innych unikalnych funkcji, z których możesz korzystać i cieszyć się nimi za darmo.",
  },
  pt: {
    title: "Principais Recursos do Bloco de Notas Online",
    features: [
      {
        title: "Salvamento Automático Online",
        desc: "O nosso bloco de notas online salva automaticamente o seu trabalho enquanto você digita, para que você nunca perca uma única palavra, mesmo que o navegador trave ou você feche a aba por engano.",
      },
      {
        title: "Baixar nos formatos TXT e PDF",
        desc: "Com o nosso bloco de notas, você pode exportar suas anotações instantaneamente como um arquivo TXT ou PDF limpo, facilitando salvar, imprimir ou compartilhar seu trabalho offline.",
      },
      {
        title: "Tela Cheia",
        desc: "Mude para o modo tela cheia e deixe este bloco de notas livre de distrações oferecer uma área de escrita limpa de ponta a ponta, perfeita para sessões de escrita focadas.",
      },
      {
        title: "Recurso de Zoom 200%",
        desc: "Este bloco de notas online permite ampliar até 200%, tornando mais confortável para os olhos durante longas sessões de escrita ou ao trabalhar com textos pequenos em qualquer tela.",
      },
      {
        title: "Inserir Imagens, Tabelas, Atualização Automática de Datas, Exportar HTML",
        desc: "Desde inserir imagens e tabelas estruturadas até atualizar datas automaticamente e exportar seu conteúdo como HTML, este bloco de notas vai muito além da edição básica de texto.",
      },
      {
        title: "Títulos de H1 a H6",
        desc: "Organize seu conteúdo com uma hierarquia completa de títulos, de H1 a H6, dando a este bloco de notas a estrutura de um editor de documentos profissional diretamente no seu navegador.",
      },
      {
        title: "Diferentes Estilos de Fonte",
        desc: "Escolha entre vários estilos de fonte para personalizar sua experiência de escrita e tornar seus documentos mais legíveis, expressivos ou profissionais.",
      },
      {
        title: "Alterar Cor do Texto",
        desc: "Este bloco de notas online permite destacar pontos importantes e adicionar clareza visual ao alterar a cor do texto, uma ferramenta de formatação simples, mas poderosa para qualquer escritor.",
      },
      {
        title: "Conversão de Fala em Texto com IA Sem Erros",
        desc: "Fale os seus pensamentos e veja-os aparecer na tela com alta precisão. O recurso de fala para texto com IA deste bloco de notas transforma instantaneamente sua voz em texto limpo e sem erros, economizando muito tempo.",
      },
      {
        title: "Gerar Link Compartilhável Após Login",
        desc: "Depois de fazer login, o nosso bloco de notas permite gerar um link exclusivo compartilhável para qualquer nota, tornando a colaboração e o compartilhamento tão simples quanto copiar uma URL.",
      },
      {
        title: "Criar Conta para Registrar Histórico",
        desc: "Crie uma conta gratuita neste bloco de notas para desbloquear o histórico de notas, permitindo rever, recuperar e gerir tudo o que você já escreveu, tudo em um só lugar.",
      },
    ],
    outro:
      "Além disso, há muitos outros recursos únicos que você pode usar e aproveitar gratuitamente.",
  },
  qu: {
    title: "Notepad Online nisqapa allin kayninkuna",
    features: [
      {
        title: "Internetpi auto-save",
        desc: "Kay online notepadqa llank’aykita qillqachkanki chaymanta sapa kuti auto-saves, chayrayku mana huk simillatachus chinkachinkichu, navegador urmachkan utaq tab mana munasqayki llawqayku chaypas.",
      },
      {
        title: "TXT hinallataq PDF formatpi hurquy",
        desc: "Kay notepadwanqa notasniykita ch’uyanchasqa TXT utaq PDF file hina utqaylla hurquyta atinki, chaymi ima imapas waqaychay, imprimiy utaq offline qunqayta facilta ruwakun.",
      },
      {
        title: "Tukuy pantalla",
        desc: "Tukuy pantalla modoman tikray, chaymi kay mana hark’ayniyuq notepadqa ch’uyanchasqa qillqana kanchata qawachisunki, chayqa allinmi concentracionpi qillqaypaq.",
      },
      {
        title: "200% zoom ruwana",
        desc: "Kay online notepadqa 200%kama zoom ruwanata qusqanki, chaymi ñawiyki mana phiñakunachu chay hatun tiempo qillqaykunapi utaq uchuy qillqawan llank’achkanki chaypi.",
      },
      {
        title: "Rikch’akunata, tabla, fecha auto-actualización, HTML hurquy",
        desc: "Rikch’akunata churasqanmanta, estructurayuq tablakunamanta hinallataq fecha automatiko actualizasqamanta HTML hina hurqusqankama, kay notepadqa sapa textu edicionmanta aswan hatunmi.",
      },
      {
        title: "H1manta H6kama titulokuna",
        desc: "Contenido nisqaykita H1manta H6kama titulokunawan allinta organizay, chaymi kay notepadqa profesional document editor hina navegadorniykipi kan.",
      },
      {
        title: "Mana hukninnaq font estilos",
        desc: "Achka font estilokunamanta akllay, qillqay experienciaykita personalizaypaq, chaymi qillqasqayki aswan leeq, expresivo utaq profesional kananpaq.",
      },
      {
        title: "Qillqa llimp’ita tikray",
        desc: "Kay online notepadqa allin puntoskunata resaltayta qusqanki hinallataq textu llimp’ita tikraywan sut’ita rikuchiyta yapakun, chayqa llank’aqkunapaq aswan facil hina atiyniyuq herramienta.",
      },
      {
        title: "AIwan yanapasqa rimaymanta qillqaman mana pantayniyuq",
        desc: "Rimaykita rimay, chaymanta ñawpaq pantalla nisqapi allin chiqaywan rikurinqa. Kay notepadpa AIwan yanapasqa rimaymanta qillqaman tukuylla mana pantayniyuq textuta utqaylla tikran, chaymi achka tiempota qispichisunki.",
      },
      {
        title: "Sign-in urasqanmanta compartikuy link paqarichiy",
        desc: "Sign-in ruwakusqanmanta, kay notepadqa ima notapas huk ch’iqin compartikuy linkta paqarichiyta qusqanki, chaymi llamk’aykuna yanapanakuy hinallataq utqaylla compartirqa URL copy hina facilmi.",
      },
      {
        title: "Historialta qillqaypaq cuenta ruway",
        desc: "Kay notepadpi mana qullqiyuq cuenta ruwaspa historialta kichay, chaymi tukuy qillqasqaykita huk lugarllapi kutichiy, kutimuy, hinallataq kamachiy atinki.",
      },
    ],
    outro:
      "Kaykunamanta hukmanpas achka sapaq ruwaykuna kan, chaykunata mana qullqiyuqta llamk’achiyta atinki.",
  },
  ro: {
    title: "Caracteristici principale ale Notepad-ului online",
    features: [
      {
        title: "Salvare automată online",
        desc: "Notepad-ul nostru online îți salvează automat munca în timp ce tastezi, astfel încât nu vei pierde niciun cuvânt, chiar dacă browserul se blochează sau închizi accidental fila.",
      },
      {
        title: "Descărcare în formatele TXT și PDF",
        desc: "Cu notepad-ul nostru poți exporta instant notițele ca fișier TXT sau PDF curat, ceea ce face ușoară salvarea, imprimarea sau partajarea offline.",
      },
      {
        title: "Ecran complet",
        desc: "Treci în modul ecran complet și lasă acest notepad fără distrageri să îți ofere o suprafață de scriere curată, perfectă pentru sesiuni de redactare concentrate.",
      },
      {
        title: "Funcție de zoom 200%",
        desc: "Acest notepad online îți permite să mărești până la 200%, făcând mai ușoară citirea în sesiunile lungi de scriere sau atunci când lucrezi cu text mic pe orice ecran.",
      },
      {
        title: "Inserare imagini, tabele, actualizare automată a datelor, export HTML",
        desc: "De la inserarea imaginilor și a tabelelor structurate până la actualizarea automată a datelor și exportul conținutului ca HTML, acest notepad merge mult dincolo de editarea simplă de text.",
      },
      {
        title: "Titluri de la H1 la H6",
        desc: "Organizează-ți conținutul cu o ierarhie completă de titluri, de la H1 la H6, oferind acestui notepad structura unui editor de documente direct în browser.",
      },
      {
        title: "Stiluri diferite de font",
        desc: "Alege dintr-o varietate de stiluri de font pentru a-ți personaliza experiența de scriere și pentru a face documentele mai ușor de citit, mai expresive sau mai profesionale.",
      },
      {
        title: "Schimbarea culorii textului",
        desc: "Acest notepad online îți permite să evidențiezi punctele importante și să adaugi claritate vizuală prin schimbarea culorii textului, un instrument simplu dar puternic de formatare pentru orice scriitor.",
      },
      {
        title: "Conversie voce-text cu AI fără erori",
        desc: "Spune-ți gândurile și vezi-le apărând pe ecran cu o acuratețe ridicată. Funcția de conversie voce-text bazată pe AI transformă instant vocea ta în text curat și fără erori, economisind mult timp.",
      },
      {
        title: "Generare link partajabil după autentificare",
        desc: "După autentificare, notepad-ul nostru îți permite să generezi un link unic de partajare pentru orice notiță, făcând colaborarea și partajarea rapidă la fel de simplă ca un simplu copy-paste al unui URL.",
      },
      {
        title: "Crearea unui cont pentru salvarea istoricului",
        desc: "Creează un cont gratuit pe acest notepad pentru a debloca istoricul notițelor, astfel încât să poți revizita, recupera și gestiona tot ce ai scris vreodată, într-un singur loc.",
      },
    ],
    outro:
      "Pe lângă acestea, există multe alte funcții unice pe care le poți folosi și de care te poți bucura gratuit.",
  },
  ru: {
    title: "Основные функции онлайн-блокнота",
    features: [
      {
        title: "Автосохранение онлайн",
        desc: "Наш онлайн-блокнот автоматически сохраняет вашу работу во время набора текста, поэтому вы никогда не потеряете ни одного слова, даже если браузер зависнет или вы случайно закроете вкладку.",
      },
      {
        title: "Скачать в форматах TXT и PDF",
        desc: "С нашим блокнотом вы можете мгновенно экспортировать заметки в чистый файл TXT или PDF, что делает сохранение, печать и офлайн-обмен простыми и удобными.",
      },
      {
        title: "Полноэкранный режим",
        desc: "Переключитесь в полноэкранный режим, и этот блокнот без отвлекающих факторов предоставит вам чистое поле для письма от края до края, идеально подходящее для сосредоточенной работы.",
      },
      {
        title: "Функция увеличения 200%",
        desc: "Этот онлайн-блокнот позволяет увеличивать масштаб до 200%, что облегчает чтение при длительной работе или при использовании мелкого текста на любом экране.",
      },
      {
        title: "Вставка изображений, таблиц, автоматическое обновление дат, экспорт HTML",
        desc: "От вставки изображений и структурированных таблиц до автоматического обновления дат и экспорта контента в HTML — этот блокнот выходит далеко за рамки простого редактирования текста.",
      },
      {
        title: "Заголовки от H1 до H6",
        desc: "Организуйте свой контент с полной иерархией заголовков от H1 до H6, превращая этот блокнот в полноценный редактор документов прямо в браузере.",
      },
      {
        title: "Разные стили шрифтов",
        desc: "Выбирайте из различных стилей шрифтов, чтобы персонализировать процесс письма и сделать ваши документы более читаемыми, выразительными или профессиональными.",
      },
      {
        title: "Изменение цвета текста",
        desc: "Этот онлайн-блокнот позволяет выделять ключевые моменты и добавлять визуальную ясность с помощью изменения цвета текста — простой, но мощный инструмент форматирования для любого автора.",
      },
      {
        title: "Распознавание речи в текст на базе ИИ без ошибок",
        desc: "Говорите свои мысли, и они будут отображаться на экране с высокой точностью. Функция преобразования речи в текст на базе ИИ мгновенно превращает ваш голос в чистый и безошибочный текст, экономя ваше время.",
      },
      {
        title: "Создание ссылки для совместного доступа после входа",
        desc: "После входа в систему наш блокнот позволяет создавать уникальную ссылку для любой заметки, делая совместную работу и быстрый обмен такими же простыми, как копирование URL.",
      },
      {
        title: "Создать аккаунт для сохранения истории",
        desc: "Создайте бесплатный аккаунт в этом блокноте, чтобы открыть историю заметок и иметь возможность просматривать, восстанавливать и управлять всеми своими записями в одном месте.",
      },
    ],
    outro:
      "Кроме этого, существует множество других уникальных функций, которыми вы можете пользоваться бесплатно и с удовольствием.",
  },
  sm: {
    title: "Uiga autū o le Notepad i luga o le initaneti",
    features: [
      {
        title: "Otometi le fa’asao i luga o le initaneti",
        desc: "O la matou notepad i luga o le initaneti e otometi lava ona fa’asaoina lau galuega a’o e taina, o lea e te le leiloa ai se upu e tasi, e tusa lava pe paʻu le browser pe e te tapunia fa’afuase’i le tab.",
      },
      {
        title: "La’u mai i le TXT ma le PDF",
        desc: "Faatasi ai ma la matou notepad, e mafai ona e auina atu vave au fa’amatalaga o se faila TXT po o le PDF mama, e faigofie ai ona teu, lolomi, pe fa’asoa i fafo o le initaneti.",
      },
      {
        title: "Ata atoa (Full Screen)",
        desc: "Su’e i le tulaga ata atoa ma fa’ataga lenei notepad e aunoa ma ni fa’alavelave e avatu ai se avanoa mama mai le itu i le itu mo le tusitusi, e lelei mo le taula’i atu i le tusiga.",
      },
      {
        title: "200% fa’ateleina (zoom)",
        desc: "O lenei notepad i luga o le initaneti e mafai ai ona e fa’ateleina e oo atu i le 200%, e fa’afaigofie ai i mata i taimi umi o tusitusiga po o le galue i tusitusiga laiti i so’o se lau.",
      },
      {
        title: "Fa’aofi ata, laulau, fa’afou otometi aso, auina atu i le HTML",
        desc: "Mai le fa’aofiina o ata ma laulau fa’atulagaina e o’o i le fa’afouina otometi o aso ma le auina atu o au mea i le HTML, e sili atu lenei notepad nai lo le na’o le fa’atonutonuina o tusitusiga masani.",
      },
      {
        title: "Ulutala mai le H1 e o’o i le H6",
        desc: "Fa’atulaga lau anotusi i se fa’asologa atoa o ulutala mai le H1 e o’o i le H6, e tu’uina atu ai i lenei notepad le fausaga o se editor fa’apolofesa i totonu o lau browser.",
      },
      {
        title: "Eseese sitaili o mata’itusi",
        desc: "Filifili mai sitaili eseese o mata’itusi e fa’apitoa ai lou poto masani i le tusitusi ma fa’afaigofie ai ona faitau, sili atu le fa’aalia, pe fa’apolofesa au pepa.",
      },
      {
        title: "Suia le lanu o tusitusiga",
        desc: "O lenei notepad i luga o le initaneti e mafai ai ona e fa’ailoga vaega tāua ma fa’aopoopo le manino i le va’aiga e ala i le suia o le lanu o tusitusiga, o se meafaigaluega faigofie ae malosi mo so’o se tusitala.",
      },
      {
        title: "Tautala-i-tusitusiga e fa’avae i le AI e aunoa ma ni mea sese",
        desc: "Tautala ou manatu ma va’ai i le fa’aalia i luga o le lau ma le sa’o maualuga. O le vaega AI o lenei notepad e vave ona suia lou leo i tusitusiga mama e aunoa ma ni mea sese, ma fa’asao ai lou taimi.",
      },
      {
        title: "Fausia so’oga e fa’asoa ai pe a uma ona saini i totonu",
        desc: "A uma ona e saini i totonu, e mafai e le matou notepad ona faia se so’oga tulaga ese e fa’asoa ai so’o se nota, e fa’afaigofie ai le galulue fa’atasi ma le fa’asoa vave e pei lava o le kopiina o se URL.",
      },
      {
        title: "Fausia se teugatupe e teu ai tala’aga",
        desc: "Fausia se teugatupe fua i lenei notepad e tatala ai le tala’aga o nota ina ia mafai ona e toe va’ai, toe maua, ma pulea mea uma sa e tusia, uma i le nofoaga e tasi.",
      },
    ],
    outro:
      "E ese mai i nei mea, e tele isi vaega tulaga ese e mafai ona e fa’aaogaina ma fiafia ai fua.",
  },
  sr: {
    title: "Glavne funkcije online beležnice",
    features: [
      {
        title: "Automatsko čuvanje na mreži",
        desc: "Naša online beležnica automatski čuva vaš rad dok kucate, tako da nikada ne izgubite nijednu reč, čak i ako se pregledač sruši ili slučajno zatvorite karticu.",
      },
      {
        title: "Preuzimanje u TXT i PDF formatima",
        desc: "Sa našom beležnicom možete odmah izvesti svoje beleške kao čist TXT ili PDF fajl, što olakšava čuvanje, štampanje ili deljenje van mreže.",
      },
      {
        title: "Puni ekran",
        desc: "Pređite u režim celog ekrana i dozvolite da vam ova beležnica bez ometanja pruži čistu površinu za pisanje od ivice do ivice, savršenu za fokusirano pisanje.",
      },
      {
        title: "Funkcija zumiranja 200%",
        desc: "Ova online beležnica omogućava uvećanje do 200%, što olakšava čitanje tokom dugih sesija pisanja ili rada sa sitnim tekstom na bilo kom ekranu.",
      },
      {
        title: "Ubacivanje slika, tabela, automatsko ažuriranje datuma, HTML izvoz",
        desc: "Od ubacivanja slika i strukturiranih tabela do automatskog ažuriranja datuma i izvoza sadržaja kao HTML-a, ova beležnica ide daleko dalje od osnovnog uređivanja teksta.",
      },
      {
        title: "Naslovi od H1 do H6",
        desc: "Organizujte svoj sadržaj uz potpunu hijerarhiju naslova od H1 do H6, čime ova beležnica dobija strukturu pravog uređivača dokumenata direktno u vašem pregledaču.",
      },
      {
        title: "Različiti stilovi fontova",
        desc: "Izaberite između različitih stilova fontova kako biste personalizovali iskustvo pisanja i učinili svoje dokumente čitljivijim, izražajnijim ili profesionalnijim.",
      },
      {
        title: "Promena boje teksta",
        desc: "Ova online beležnica vam omogućava da istaknete važne tačke i poboljšate preglednost promenom boje teksta, jednostavan ali moćan alat za formatiranje za svakog pisca.",
      },
      {
        title: "AI pretvaranje govora u tekst bez grešaka",
        desc: "Izgovorite svoje misli i gledajte kako se pojavljuju na ekranu sa visokom preciznošću. AI funkcija za pretvaranje govora u tekst trenutno pretvara vaš glas u čist tekst bez grešaka, štedeći vam mnogo vremena.",
      },
      {
        title: "Generisanje deljivog linka nakon prijave",
        desc: "Nakon prijave, naša beležnica vam omogućava da generišete jedinstveni deljivi link za bilo koju belešku, čineći saradnju i brzo deljenje jednostavnim kao kopiranje URL-a.",
      },
      {
        title: "Kreiranje naloga za čuvanje istorije",
        desc: "Kreirajte besplatan nalog u ovoj beležnici da biste otključali istoriju beleški, kako biste mogli da pregledate, vratite i upravljate svime što ste ikada napisali na jednom mestu.",
      },
    ],
    outro:
      "Pored ovoga, postoji mnogo drugih jedinstvenih funkcija koje možete koristiti i uživati besplatno.",
  },
  sn: {
    title: "Zvinhu zvikuru zveNotepad iri paInternet",
    features: [
      {
        title: "Kuzvichengetera otomatiki paInternet",
        desc: "Notepad yedu iri paInternet inochengetedza basa rako otomatiki paunenge uchinyora, saka hauzorasikirwi neshoko rimwe chete, kunyangwe browser yako ikaputsika kana ukavhara tab netsaona.",
      },
      {
        title: "Kudhawunirodha muTXT nePDF mafomati",
        desc: "NeNotepad yedu, unogona kutumira zvinyorwa zvako nekukurumidza seTXT kana PDF yakachena, zvichiita kuti zvive nyore kuchengetedza, kudhinda kana kugovera offline.",
      },
      {
        title: "Sikirini yakazara",
        desc: "Chinja ku full-screen mode uye rega Notepad iyi isina zvinokanganisa ikupe nzvimbo yakachena yekunyora kubva kumucheto kusvika kumucheto, inokodzera kunyora uchinyatso tarisa.",
      },
      {
        title: "Kuswededza (zoom) 200%",
        desc: "Notepad iyi iri paInternet inokutendera kuswededza kusvika pa200%, zvichiita kuti maziso asaneta pakunyora kwenguva refu kana kushanda nemavara madiki pane chero sikirini.",
      },
      {
        title: "Kuisa mifananidzo, matafura, kugadzirisa mazuva otomatiki, kutumira HTML",
        desc: "Kubva pakuisa mifananidzo nematafura akarongeka kusvika pakugadzirisa mazuva otomatiki uye kutumira zvemukati seHTML, Notepad iyi inopfuura zvakajairika zvekugadzirisa mavara.",
      },
      {
        title: "Misoro kubva paH1 kusvika paH6",
        desc: "Ronga zvemukati zvako nemusoro wakarongeka kubva paH1 kusvika paH6, zvichiita kuti Notepad iyi ive nehurongwa hweprofessional document editor mubrowser yako.",
      },
      {
        title: "Mhando dzakasiyana dzefonti",
        desc: "Sarudza kubva pamhando dzakasiyana dzefonti kuti ugadzirise maitiro ako ekunyora uye uite kuti zvinyorwa zvako zvive nyore kuverenga, zvinonzwisisika kana zveprofessional.",
      },
      {
        title: "Kuchinja ruvara rwezvinyorwa",
        desc: "Notepad iyi iri paInternet inokutendera kusimbisa mapoinzi akakosha uye kuwedzera kujeka kwekuona nekuchinja ruvara rwezvinyorwa, chishandiso chiri nyore asi chine simba.",
      },
      {
        title: "AI inoshandura kutaura kuita chinyorwa pasina kukanganisa",
        desc: "Taura pfungwa dzako uye uvaone dzichioneka pachiratidziri nemazvo. Feature yeAI inoshandura kutaura kuita chinyorwa inochinja izwi rako nekukurumidza kuita chinyorwa chakachena chisina kukanganisa, zvichiita kuti uchengetedze nguva yakawanda.",
      },
      {
        title: "Kugadzira link yekugovana mushure mekupinda",
        desc: "Kana wapinda muaccount, Notepad yedu inokutendera kugadzira link yakasarudzika yekugovana chero chinyorwa, zvichiita kuti kushandira pamwe uye kugovana zvive nyore sekukopa URL.",
      },
      {
        title: "Kugadzira account yekuchengetedza nhoroondo",
        desc: "Gadzira account yemahara paNotepad iyi kuti uvhure nhoroondo yezvinyorwa, kuti ugone kudzokorora, kudzoreredza uye kutonga zvese zvawakambonyora munzvimbo imwe chete.",
      },
    ],
    outro:
      "Kunze kweizvi, kune zvimwe zvakawanda zvakasiyana zvaunogona kushandisa uye kunakidzwa nazvo mahara.",
  },
  si: {
    title: "ඔන්ලයින් Notepad හි ප්‍රධාන විශේෂාංග",
    features: [
      {
        title: "ඔන්ලයින් ස්වයංක්‍රීය සුරැකුම",
        desc: "අපගේ ඔන්ලයින් Notepad එක ඔබ ටයිප් කරන අතරතුර ඔබගේ වැඩ ස්වයංක්‍රීයව සුරකින අතර, browser එක ක්‍රෑෂ් වුවද හෝ ඔබ අහම්බෙන් tab එක වසා දැමුවද කිසිදු වචනයක් අහිමි නොවේ.",
      },
      {
        title: "TXT සහ PDF ආකෘති වලින් බාගත කිරීම",
        desc: "අපගේ Notepad එක සමඟ ඔබට ඔබගේ සටහන් වහාම පිරිසිදු TXT හෝ PDF ගොනුවක් ලෙස export කළ හැකි අතර, එය සුරැකීම, මුද්‍රණය කිරීම හෝ offline බෙදා ගැනීම පහසු කරයි.",
      },
      {
        title: "සම්පූර්ණ තිරය",
        desc: "Full-screen මාදිලියට මාරු වී මෙම අවධානය බිඳ නොදමන Notepad එක ඔබට පිරිසිදු, අග සිට අග දක්වා ලිවීමේ අවකාශයක් ලබා දේ, එය අවධානයෙන් ලිවීමට ඉතා සුදුසුය.",
      },
      {
        title: "200% විශාලනය කිරීමේ විශේෂාංගය",
        desc: "මෙම ඔන්ලයින් Notepad එක ඔබට 200% දක්වා විශාලනය කිරීමට ඉඩ ලබා දෙන අතර, දිගු ලිවීම් සැසියන්හිදී හෝ කුඩා අකුරු සමඟ වැඩ කිරීමේදී ඇස් සඳහා පහසුවක් ලබා දෙයි.",
      },
      {
        title: "පින්තූර, වගු, දින ස්වයංක්‍රීයව යාවත්කාලීන කිරීම, HTML export කිරීම",
        desc: "පින්තූර සහ ව්‍යුහගත වගු ඇතුළත් කිරීමේ සිට දින ස්වයංක්‍රීයව යාවත්කාලීන කිරීම සහ ඔබගේ අන්තර්ගතය HTML ලෙස export කිරීම දක්වා, මෙම Notepad එක සාමාන්‍ය text editing වලට වඩා බොහෝ ඉදිරියෙන් ඇත.",
      },
      {
        title: "H1 සිට H6 දක්වා ශීර්ෂ",
        desc: "H1 සිට H6 දක්වා සම්පූර්ණ ශීර්ෂ පද්ධතියක් භාවිතා කර ඔබගේ අන්තර්ගතය සංවිධානය කරන්න, එය මෙම Notepad එකට browser තුළම professional document editor එකක ව්‍යුහය ලබා දෙයි.",
      },
      {
        title: "විවිධ අකුරු ශෛලීන්",
        desc: "ඔබගේ ලිවීමේ අත්දැකීම පුද්ගලීකරණය කිරීමට සහ ඔබගේ ලිපි වඩාත් කියවිය හැකි, ප්‍රකාශනශීලී හෝ වෘත්තීය මට්ටමේ කිරීමට විවිධ අකුරු ශෛලීන් අතරින් තෝරා ගන්න.",
      },
      {
        title: "පෙළ වර්ණය වෙනස් කිරීම",
        desc: "මෙම ඔන්ලයින් Notepad එක ඔබට වැදගත් කරුණු ඉස්මතු කිරීමට සහ පෙළ වර්ණය වෙනස් කිරීම මගින් දෘශ්‍ය පැහැදිලිකම වැඩි කිරීමට ඉඩ සලසයි, එය සරල නමුත් බලවත් formatting මෙවලමකි.",
      },
      {
        title: "AI මගින් හඬ සිට පෙළට (දෝෂ රහිතව)",
        desc: "ඔබගේ අදහස් කතා කර කියන්න, ඒවා ඉතා නිවැරදිව තිරයේ දිස්වනු ඇත. මෙම Notepad එකේ AI මගින් හඬ සිට පෙළට පරිවර්තනය කිරීමේ විශේෂාංගය ඔබගේ හඬ ක්ෂණිකව පිරිසිදු, දෝෂ රහිත පෙළක් බවට පත් කරයි, එමඟින් ඔබට බොහෝ කාලයක් ඉතිරි වේ.",
      },
      {
        title: "Sign-in වීමෙන් පසු share කළ හැකි link එකක් නිර්මාණය කිරීම",
        desc: "ඔබ sign-in වූ පසු, අපගේ Notepad එක ඔබට ඕනෑම සටහනක් සඳහා විශේෂ share කළ හැකි link එකක් නිර්මාණය කිරීමට ඉඩ සලසයි, එමඟින් සහයෝගයෙන් වැඩ කිරීම සහ වේගවත් ලෙස share කිරීම URL එක copy කිරීම තරම්ම සරල කරයි.",
      },
      {
        title: "ඉතිහාසය සුරැකීමට account එකක් නිර්මාණය කිරීම",
        desc: "මෙම Notepad එකේ නොමිලේ account එකක් නිර්මාණය කර note history unlock කරගන්න, එමඟින් ඔබ ලියා ඇති සියල්ල එකම ස්ථානයක නැවත බැලීමට, නැවත ලබා ගැනීමට සහ කළමනාකරණය කිරීමට හැකි වේ.",
      },
    ],
    outro:
      "මේවාට අමතරව ඔබට නොමිලේ භාවිතා කර භුක්ති විඳිය හැකි තවත් බොහෝ විශේෂාංගද ඇත.",
  },
  sk: {
    title: "Hlavné funkcie online poznámkového bloku",
    features: [
      {
        title: "Automatické ukladanie online",
        desc: "Náš online poznámkový blok automaticky ukladá vašu prácu počas písania, takže nikdy nestratíte ani jedno slovo, aj keď prehliadač spadne alebo omylom zatvoríte kartu.",
      },
      {
        title: "Stiahnutie vo formátoch TXT a PDF",
        desc: "S naším poznámkovým blokom môžete okamžite exportovať svoje poznámky ako čistý TXT alebo PDF súbor, čo uľahčuje ukladanie, tlač alebo zdieľanie offline.",
      },
      {
        title: "Celá obrazovka",
        desc: "Prepnite do režimu celej obrazovky a nechajte tento poznámkový blok bez rušenia poskytnúť čisté písacie plátno od okraja po okraj, ideálne na sústredené písanie.",
      },
      {
        title: "Funkcia 200 % priblíženia",
        desc: "Tento online poznámkový blok umožňuje priblíženie až na 200 %, čo uľahčuje čítanie počas dlhého písania alebo pri práci s malým textom na akejkoľvek obrazovke.",
      },
      {
        title: "Vkladanie obrázkov, tabuliek, automatická aktualizácia dátumov, export HTML",
        desc: "Od vkladania obrázkov a štruktúrovaných tabuliek až po automatickú aktualizáciu dátumov a export obsahu do HTML, tento poznámkový blok ide ďaleko za hranice bežnej úpravy textu.",
      },
      {
        title: "Nadpisy od H1 po H6",
        desc: "Organizujte svoj obsah pomocou úplnej hierarchie nadpisov od H1 po H6, vďaka čomu má tento poznámkový blok štruktúru profesionálneho dokumentového editora priamo v prehliadači.",
      },
      {
        title: "Rôzne štýly písma",
        desc: "Vyberte si z rôznych štýlov písma, aby ste si prispôsobili svoje písanie a urobili svoje dokumenty čitateľnejšie, výraznejšie alebo profesionálnejšie.",
      },
      {
        title: "Zmena farby textu",
        desc: "Tento online poznámkový blok umožňuje zvýrazniť kľúčové body a pridať vizuálnu prehľadnosť zmenou farby textu, čo je jednoduchý, ale výkonný formátovací nástroj pre každého autora.",
      },
      {
        title: "Prevod reči na text pomocou AI bez chýb",
        desc: "Hovorte svoje myšlienky a sledujte, ako sa zobrazujú na obrazovke s vysokou presnosťou. Funkcia prevodu reči na text poháňaná AI okamžite mení váš hlas na čistý a bezchybný text, čím šetrí veľa času.",
      },
      {
        title: "Vytvorenie zdieľateľného odkazu po prihlásení",
        desc: "Po prihlásení vám náš poznámkový blok umožňuje vytvoriť jedinečný zdieľateľný odkaz na akúkoľvek poznámku, vďaka čomu je spolupráca a rýchle zdieľanie rovnako jednoduché ako skopírovanie URL adresy.",
      },
      {
        title: "Vytvorenie účtu na ukladanie histórie",
        desc: "Vytvorte si bezplatný účet v tomto poznámkovom bloku, aby ste odomkli históriu poznámok, vďaka čomu môžete prezerať, obnovovať a spravovať všetko, čo ste kedy napísali, na jednom mieste.",
      },
    ],
    outro:
      "Okrem toho existuje mnoho ďalších jedinečných funkcií, ktoré môžete používať a užívať si zadarmo.",
  },
  sl: {
    title: "Glavne funkcije spletnega beležnika",
    features: [
      {
        title: "Samodejno shranjevanje na spletu",
        desc: "Naš spletni beležnik samodejno shranjuje vaše delo med tipkanjem, zato nikoli ne izgubite niti ene besede, tudi če se brskalnik sesuje ali pomotoma zaprete zavihek.",
      },
      {
        title: "Prenos v formatih TXT in PDF",
        desc: "Z našim beležnikom lahko svoje zapiske takoj izvozite kot čist TXT ali PDF datoteko, kar omogoča enostavno shranjevanje, tiskanje ali deljenje brez povezave.",
      },
      {
        title: "Celozaslonski način",
        desc: "Preklopite v celozaslonski način in pustite, da vam ta beležnik brez motenj ponudi čisto pisalno površino od roba do roba, popolno za osredotočeno pisanje.",
      },
      {
        title: "Funkcija 200 % povečave",
        desc: "Ta spletni beležnik omogoča povečavo do 200 %, kar olajša branje pri dolgih pisalnih sejah ali pri delu z majhnim besedilom na katerem koli zaslonu.",
      },
      {
        title: "Vstavljanje slik, tabel, samodejno posodabljanje datumov, izvoz HTML",
        desc: "Od vstavljanja slik in strukturiranih tabel do samodejnega posodabljanja datumov in izvoza vsebine kot HTML, ta beležnik presega osnovno urejanje besedila.",
      },
      {
        title: "Naslovi od H1 do H6",
        desc: "Organizirajte svojo vsebino s popolno hierarhijo naslovov od H1 do H6, kar temu beležniku daje strukturo profesionalnega urejevalnika dokumentov neposredno v brskalniku.",
      },
      {
        title: "Različni slogi pisave",
        desc: "Izbirajte med različnimi slogi pisave, da prilagodite svojo izkušnjo pisanja in naredite svoje dokumente bolj berljive, izrazne ali profesionalne.",
      },
      {
        title: "Spreminjanje barve besedila",
        desc: "Ta spletni beležnik vam omogoča poudarjanje ključnih točk in večjo vizualno jasnost s spreminjanjem barve besedila, kar je preprosto, a močno orodje za oblikovanje za vsakega pisca.",
      },
      {
        title: "Pretvorba govora v besedilo z umetno inteligenco brez napak",
        desc: "Izgovorite svoje misli in opazujte, kako se pojavijo na zaslonu z visoko natančnostjo. Funkcija pretvorbe govora v besedilo z umetno inteligenco takoj pretvori vaš glas v čist in brez napak besedilo, kar vam prihrani veliko časa.",
      },
      {
        title: "Ustvarjanje deljive povezave po prijavi",
        desc: "Po prijavi vam naš beležnik omogoča ustvarjanje edinstvene deljive povezave za katerokoli beležko, kar omogoča sodelovanje in hitro deljenje tako preprosto kot kopiranje URL-ja.",
      },
      {
        title: "Ustvarjanje računa za shranjevanje zgodovine",
        desc: "Ustvarite brezplačen račun v tem beležniku, da odklenete zgodovino zapiskov, kar vam omogoča, da ponovno pregledate, obnovite in upravljate vse, kar ste kdaj napisali, na enem mestu.",
      },
    ],
    outro:
      "Poleg tega obstaja še veliko drugih edinstvenih funkcij, ki jih lahko uporabljate in uživate brezplačno.",
  },
  so: {
    title: "Astaamaha ugu muhiimsan ee Notepad-ka online-ka",
    features: [
      {
        title: "Si toos ah u kaydin online ah",
        desc: "Notepad-kayaga online-ka ah wuxuu si toos ah u kaydiyaa shaqadaada markaad qorayso, si aadan waligaa u lumin hal eray, xitaa haddii browser-ku jabo ama aad si kama’ ah u xirto tab-ka.",
      },
      {
        title: "Ku soo dejiso TXT iyo PDF",
        desc: "Notepad-kayaga waxaad si degdeg ah ugu dhoofin kartaa qoraalladaada sida fayl TXT ama PDF nadiif ah, taasoo fududeyneysa kaydinta, daabacaadda ama la wadaagga offline.",
      },
      {
        title: "Shaashad buuxda",
        desc: "U beddel habka shaashad buuxda, waxaana Notepad-kan aan mashquul lahayn uu ku siinayaa meel nadiif ah oo wax lagu qoro oo gees ilaa gees ah, taasoo ku habboon qoraal diiradda saarid leh.",
      },
      {
        title: "Soo-dhaweyn (zoom) 200%",
        desc: "Notepad-kan online-ka ah wuxuu kuu oggolaanayaa inaad soo-dhoweyso ilaa 200%, taasoo u fududeyneysa indhaha marka aad muddo dheer qorayso ama aad la shaqaynayso qoraal yar oo shaashad kasta ah.",
      },
      {
        title: "Gelinta sawirro, jadwal, si toos ah u cusboonaysiin taariikho, dhoofinta HTML",
        desc: "Laga bilaabo gelinta sawirro iyo jadwalal habaysan ilaa si toos ah u cusboonaysiinta taariikhaha iyo u dhoofinta waxa aad qorto HTML, Notepad-kan wuu ka sarreeyaa tafatirka qoraalka caadiga ah.",
      },
      {
        title: "Cinwaanno laga bilaabo H1 ilaa H6",
        desc: "U habeey waxa aad qorto adigoo adeegsanaya nidaam buuxa oo cinwaanno ah H1 ilaa H6, taasoo Notepad-kan ka dhigaysa mid leh qaab editor dukumenti xirfadaysan gudaha browser-kaaga.",
      },
      {
        title: "Noocyo kala duwan oo farta ah",
        desc: "Ka dooro noocyo kala duwan oo farta ah si aad u shaqsiyeyso khibradda qorista, una dhigto qoraalladaada kuwo si fudud loo akhriyi karo, muujiya dareen ama xirfad leh.",
      },
      {
        title: "Beddelka midabka qoraalka",
        desc: "Notepad-kan online-ka ah wuxuu kuu oggolaanayaa inaad muujiso qodobbada muhiimka ah oo aad kordhiso caddeynta muuqaalka adigoo beddelaya midabka qoraalka, taasoo ah qalab fudud laakiin awood leh oo qoraa kasta u faa’iido leh.",
      },
      {
        title: "Hadalka oo qoraal loo beddelo AI aan khalad lahayn",
        desc: "Ka hadal fikradahaaga oo arag iyagoo si sax ah uga muuqda shaashadda. Astaanta AI ee hadalka u beddesha qoraal waxay isla markiiba codkaaga u rogtaa qoraal nadiif ah oo aan khalad lahayn, taasoo kuu badbaadinaysa waqti badan.",
      },
      {
        title: "Abuuritaanka link la wadaagi karo kadib galitaanka",
        desc: "Markaad gasho, Notepad-kayagu wuxuu kuu oggolaanayaa inaad sameyso link gaar ah oo la wadaagi karo qoraal kasta, taasoo ka dhigaysa wada shaqayn iyo wadaagid degdeg ah mid fudud sida koobiyeynta URL.",
      },
      {
        title: "Abuur xisaab si loo kaydiyo taariikhda",
        desc: "Samee xisaab bilaash ah Notepad-kan si aad u furto taariikhda qoraallada, si aad dib ugu eegto, u soo celiso una maamusho wax kasta oo aad qortay, meel keliya.",
      },
    ],
    outro:
      "Marka laga reebo kuwan, waxaa jira astaamo kale oo badan oo gaar ah oo aad si bilaash ah u isticmaali karto kuna raaxaysan karto.",
  },
  es: {
    title: "Características principales del bloc de notas en línea",
    features: [
      {
        title: "Guardado automático en línea",
        desc: "Nuestro bloc de notas en línea guarda automáticamente tu trabajo mientras escribes, por lo que nunca perderás ni una sola palabra, incluso si el navegador se bloquea o cierras la pestaña por error.",
      },
      {
        title: "Descargar en formatos TXT y PDF",
        desc: "Con nuestro bloc de notas puedes exportar tus notas al instante como un archivo TXT o PDF limpio, lo que facilita guardarlas, imprimirlas o compartirlas sin conexión.",
      },
      {
        title: "Pantalla completa",
        desc: "Cambia al modo de pantalla completa y deja que este bloc de notas sin distracciones te ofrezca un espacio de escritura limpio de borde a borde, perfecto para sesiones de escritura concentradas.",
      },
      {
        title: "Función de zoom del 200%",
        desc: "Este bloc de notas en línea te permite ampliar hasta un 200%, lo que facilita la lectura durante largas sesiones de escritura o al trabajar con texto pequeño en cualquier pantalla.",
      },
      {
        title: "Insertar imágenes, tablas, actualización automática de fechas, exportar HTML",
        desc: "Desde insertar imágenes y tablas estructuradas hasta la actualización automática de fechas y la exportación de contenido como HTML, este bloc de notas va mucho más allá de la edición básica de texto.",
      },
      {
        title: "Encabezados de H1 a H6",
        desc: "Organiza tu contenido con una jerarquía completa de encabezados, de H1 a H6, lo que convierte a este bloc de notas en un editor de documentos profesional directamente en tu navegador.",
      },
      {
        title: "Diferentes estilos de fuente",
        desc: "Elige entre una variedad de estilos de fuente para personalizar tu experiencia de escritura y hacer que tus documentos sean más legibles, expresivos o profesionales.",
      },
      {
        title: "Cambiar el color del texto",
        desc: "Este bloc de notas en línea te permite resaltar puntos clave y añadir claridad visual cambiando el color del texto, una herramienta de formato simple pero poderosa para cualquier escritor.",
      },
      {
        title: "Conversión de voz a texto con IA sin errores",
        desc: "Expresa tus ideas y observa cómo aparecen en pantalla con gran precisión. La función de conversión de voz a texto impulsada por IA de este bloc de notas transforma tu voz en texto limpio y sin errores al instante, ahorrándote mucho tiempo.",
      },
      {
        title: "Generar enlace compartible después de iniciar sesión",
        desc: "Una vez iniciada la sesión, nuestro bloc de notas te permite generar un enlace único para compartir cualquier nota, haciendo que la colaboración y el intercambio sean tan simples como copiar una URL.",
      },
      {
        title: "Crear cuenta para registrar el historial",
        desc: "Crea una cuenta gratuita en este bloc de notas para desbloquear el historial de notas, de modo que puedas revisar, recuperar y gestionar todo lo que hayas escrito, todo en un solo lugar.",
      },
    ],
    outro:
      "Además de esto, hay muchas otras funciones únicas que puedes usar y disfrutar de forma gratuita.",
  },
  su: {
    title: "Fitur Utama Notepad Online",
    features: [
      {
        title: "Simpen otomatis online",
        desc: "Notepad online kami otomatis nyimpen pagawéan anjeun waktu ngetik, jadi anjeun moal kaleungitan hiji kecap ogé, sanajan browser anjeun ngadat atawa tab teu kahaja ditutup.",
      },
      {
        title: "Ngundeur dina format TXT jeung PDF",
        desc: "Kalayan notepad kami, anjeun bisa ékspor catetan anjeun langsung jadi file TXT atawa PDF nu bersih, sahingga gampang disimpen, dicitak, atawa dibagikeun sacara offline.",
      },
      {
        title: "Layar pinuh",
        desc: "Pindah ka mode layar pinuh jeung hayu notepad nu teu ngaganggu ieu masihan anjeun tempat nulis nu bersih ti sisi ka sisi, pas pisan pikeun sesi nulis nu fokus.",
      },
      {
        title: "Fitur zoom 200%",
        desc: "Notepad online ieu ngidinan anjeun ngagedekeun nepi ka 200%, ngajadikeun panon leuwih nyaman pikeun nulis lila atawa nalika damel jeung téks leutik dina layar mana wae.",
      },
      {
        title: "Selapkeun gambar, tabel, apdet otomatis tanggal, ékspor HTML",
        desc: "Ti mimiti nyelapkeun gambar jeung tabel terstruktur nepi ka apdet otomatis tanggal jeung ékspor eusi jadi HTML, notepad ieu leuwih ti saukur éditor téks biasa.",
      },
      {
        title: "Judul ti H1 nepi ka H6",
        desc: "Atur eusi anjeun kalayan hierarki judul lengkep ti H1 nepi ka H6, ngajadikeun notepad ieu miboga struktur editor dokumén profésional langsung dina browser anjeun.",
      },
      {
        title: "Rupa-rupa gaya font",
        desc: "Pilih tina rupa-rupa gaya font pikeun ngaropea pangalaman nulis anjeun jeung ngajadikeun dokumén leuwih gampang dibaca, éksprésif, atawa profésional.",
      },
      {
        title: "Ganti warna téks",
        desc: "Notepad online ieu ngidinan anjeun nyorot poin penting jeung nambahan kajelasan visual ku cara ngarobah warna téks, alat format nu basajan tapi kuat pikeun unggal panulis.",
      },
      {
        title: "Ucap kana téks ku AI tanpa kasalahan",
        desc: "Ucapkeun pamikiran anjeun jeung tingali éta mucunghul dina layar kalayan akurasi luhur. Fitur AI speech-to-text ieu langsung ngarobah sora anjeun jadi téks nu bersih tanpa kasalahan, jadi anjeun bisa ngahémat loba waktu.",
      },
      {
        title: "Nyieun link pikeun dibagikeun sanggeus asup",
        desc: "Sanggeus asup, notepad kami ngidinan anjeun nyieun link unik pikeun dibagikeun pikeun sagala catetan, ngajadikeun kolaborasi jeung ngabagi jadi saderhana sakumaha nyalin URL.",
      },
      {
        title: "Nyieun akun pikeun nyimpen sajarah",
        desc: "Jieun akun gratis dina notepad ieu pikeun muka sajarah catetan, supaya anjeun bisa ningali deui, mulangkeun, jeung ngatur sagala nu kungsi ditulis dina hiji tempat.",
      },
    ],
    outro:
      "Salian ti ieu, aya loba fitur unik séjén nu bisa anjeun pake jeung nikmati sacara gratis.",
  },
  sw: {
    title: "Vipengele Muhimu vya Notepad ya Mtandaoni",
    features: [
      {
        title: "Hifadhi kiotomatiki mtandaoni",
        desc: "Notepad yetu ya mtandaoni huhifadhi kazi yako kiotomatiki unapoandika, hivyo hupotezi hata neno moja, hata kama kivinjari kinaharibika au ukifunga tab kwa bahati mbaya.",
      },
      {
        title: "Pakua katika fomati za TXT na PDF",
        desc: "Kwa notepad yetu, unaweza kuhamisha madokezo yako mara moja kama faili safi ya TXT au PDF, hivyo kufanya iwe rahisi kuhifadhi, kuchapisha au kushiriki nje ya mtandao.",
      },
      {
        title: "Skrini nzima",
        desc: "Badilisha kwenda hali ya skrini nzima na acha notepad hii isiyo na vikwazo ikupe nafasi safi ya kuandika kutoka ukingo hadi ukingo, inayofaa kwa kuandika kwa umakini.",
      },
      {
        title: "Kipengele cha kukuza hadi 200%",
        desc: "Notepad hii ya mtandaoni inakuwezesha kukuza hadi 200%, hivyo kurahisisha macho wakati wa kuandika kwa muda mrefu au kufanya kazi na maandishi madogo kwenye skrini yoyote.",
      },
      {
        title: "Kuingiza picha, jedwali, kusasisha tarehe kiotomatiki, kuhamisha HTML",
        desc: "Kuanzia kuingiza picha na jedwali zilizopangwa hadi kusasisha tarehe kiotomatiki na kuhamisha maudhui yako kama HTML, notepad hii inapita zaidi ya uhariri wa kawaida wa maandishi.",
      },
      {
        title: "Vichwa kutoka H1 hadi H6",
        desc: "Panga maudhui yako kwa mfumo kamili wa vichwa kutoka H1 hadi H6, ukifanya notepad hii kuwa na muundo wa editor ya kitaalamu ya hati ndani ya kivinjari chako.",
      },
      {
        title: "Aina tofauti za fonti",
        desc: "Chagua kutoka aina mbalimbali za fonti ili kubinafsisha uzoefu wako wa kuandika na kufanya maandishi yako yawe rahisi kusomeka, ya kueleweka zaidi au ya kitaalamu.",
      },
      {
        title: "Kubadilisha rangi ya maandishi",
        desc: "Notepad hii ya mtandaoni inakuwezesha kuonyesha pointi muhimu na kuongeza uwazi wa kuona kwa kubadilisha rangi ya maandishi, zana rahisi lakini yenye nguvu kwa mwandishi yeyote.",
      },
      {
        title: "Kubadilisha sauti kuwa maandishi kwa AI bila makosa",
        desc: "Zungumza mawazo yako na uyaone yakionekana kwenye skrini kwa usahihi wa hali ya juu. Kipengele cha AI cha kubadilisha sauti kuwa maandishi hubadilisha sauti yako kuwa maandishi safi yasiyo na makosa papo hapo, hivyo kukuokoa muda mwingi.",
      },
      {
        title: "Kutengeneza kiungo cha kushiriki baada ya kuingia",
        desc: "Baada ya kuingia, notepad yetu inakuwezesha kutengeneza kiungo cha kipekee cha kushiriki kwa dokezo lolote, kufanya ushirikiano na kushiriki kwa haraka kuwa rahisi kama kunakili URL.",
      },
      {
        title: "Kuunda akaunti kuhifadhi historia",
        desc: "Tengeneza akaunti ya bure kwenye notepad hii ili kufungua historia ya madokezo, ili uweze kurejea, kurejesha na kusimamia kila ulichoandika mahali pamoja.",
      },
    ],
    outro:
      "Mbali na haya, kuna vipengele vingine vingi vya kipekee ambavyo unaweza kutumia na kufurahia bila malipo.",
  },
  sv: {
    title: "Viktiga funktioner i onlineanteckningar",
    features: [
      {
        title: "Automatisk sparning online",
        desc: "Vårt onlineanteckningsblock sparar automatiskt ditt arbete medan du skriver, så att du aldrig förlorar ett enda ord, även om webbläsaren kraschar eller du råkar stänga fliken.",
      },
      {
        title: "Ladda ner i TXT- och PDF-format",
        desc: "Med vårt anteckningsblock kan du exportera dina anteckningar direkt som en ren TXT- eller PDF-fil, vilket gör det enkelt att spara, skriva ut eller dela ditt arbete offline.",
      },
      {
        title: "Helskärm",
        desc: "Växla till helskärmsläge och låt detta störningsfria anteckningsblock ge dig en ren skrivyta från kant till kant, perfekt för fokuserade skrivsessioner.",
      },
      {
        title: "200 % zoomfunktion",
        desc: "Detta onlineanteckningsblock låter dig zooma in upp till 200 %, vilket gör det lättare för ögonen vid långa skrivsessioner eller när du arbetar med liten text på vilken skärm som helst.",
      },
      {
        title: "Infoga bilder, tabeller, automatisk datumuppdatering, exportera HTML",
        desc: "Från att infoga bilder och strukturerade tabeller till automatisk datumuppdatering och export av ditt innehåll som HTML, går detta anteckningsblock långt bortom enkel textredigering.",
      },
      {
        title: "Rubriker från H1 till H6",
        desc: "Organisera ditt innehåll med en fullständig rubrikhierarki från H1 till H6, vilket ger detta anteckningsblock strukturen av en riktig dokumentredigerare direkt i din webbläsare.",
      },
      {
        title: "Olika teckensnittsstilar",
        desc: "Välj bland olika teckensnittsstilar för att anpassa din skrivupplevelse och göra dina anteckningar mer läsbara, uttrycksfulla eller professionella.",
      },
      {
        title: "Ändra textfärg",
        desc: "Detta onlineanteckningsblock låter dig markera viktiga punkter och skapa visuell tydlighet genom att ändra textfärg, ett enkelt men kraftfullt formateringsverktyg för alla skribenter.",
      },
      {
        title: "AI-driven tal-till-text utan fel",
        desc: "Säg dina tankar och se dem visas på skärmen med hög noggrannhet. Detta anteckningsblocks AI-drivna tal-till-text-funktion omvandlar direkt din röst till ren och felfri text, vilket sparar mycket tid.",
      },
      {
        title: "Skapa delbar länk efter inloggning",
        desc: "När du är inloggad kan vårt anteckningsblock skapa en unik delbar länk för vilken anteckning som helst, vilket gör samarbete och snabb delning lika enkelt som att kopiera en URL.",
      },
      {
        title: "Skapa konto för att spara historik",
        desc: "Skapa ett gratis konto i detta anteckningsblock för att låsa upp anteckningshistorik så att du kan återbesöka, återställa och hantera allt du någonsin skrivit på ett och samma ställe.",
      },
    ],
    outro:
      "Förutom detta finns det många andra unika funktioner som du kan använda och njuta av gratis.",
  },
  tl: {
    title: "Mga Pangunahing Tampok ng Online Notepad",
    features: [
      {
        title: "Awtomatikong Pag-save Online",
        desc: "Awtomatikong sine-save ng aming online notepad ang iyong ginagawa habang ikaw ay nagta-type, kaya hindi ka mawawalan ng kahit isang salita, kahit mag-crash ang browser o aksidenteng maisara mo ang tab.",
      },
      {
        title: "I-download sa mga format na TXT at PDF",
        desc: "Sa aming notepad, maaari mong i-export agad ang iyong mga tala bilang malinis na TXT o PDF file, na nagpapadali sa pag-save, pag-print, o pagbabahagi offline.",
      },
      {
        title: "Buong Screen",
        desc: "Lumipat sa full-screen mode at hayaan ang notepad na walang sagabal na magbigay sa iyo ng malinis na writing space mula gilid hanggang gilid, perpekto para sa nakatutok na pagsusulat.",
      },
      {
        title: "200% na Zoom Feature",
        desc: "Ang online notepad na ito ay nagbibigay-daan sa iyo na mag-zoom hanggang 200%, na nagpapagaan sa mata sa mahabang pagsusulat o kapag gumagawa gamit ang maliliit na teksto sa anumang screen.",
      },
      {
        title: "Paglalagay ng mga Larawan, Talahanayan, Awtomatikong Pag-update ng Petsa, Pag-export ng HTML",
        desc: "Mula sa paglalagay ng mga larawan at organisadong talahanayan hanggang sa awtomatikong pag-update ng petsa at pag-export ng iyong nilalaman bilang HTML, ang notepad na ito ay higit pa sa simpleng pag-edit ng teksto.",
      },
      {
        title: "Mga Heading mula H1 hanggang H6",
        desc: "Ayusin ang iyong nilalaman gamit ang kumpletong hierarchy ng mga heading mula H1 hanggang H6, na nagbibigay sa notepad na ito ng istruktura ng isang propesyonal na document editor sa iyong browser.",
      },
      {
        title: "Iba’t ibang Estilo ng Font",
        desc: "Pumili mula sa iba’t ibang estilo ng font upang i-personalize ang iyong karanasan sa pagsusulat at gawing mas madaling basahin, mas malinaw ang ekspresyon, o mas propesyonal ang iyong mga dokumento.",
      },
      {
        title: "Pagbabago ng Kulay ng Teksto",
        desc: "Pinapayagan ka ng online notepad na ito na i-highlight ang mahahalagang punto at dagdagan ang linaw sa pamamagitan ng pagbabago ng kulay ng teksto, isang simple ngunit makapangyarihang tool para sa sinumang manunulat.",
      },
      {
        title: "AI na Speech-to-Text na Walang Mali",
        desc: "Ibigkas ang iyong mga iniisip at panoorin itong lumilitaw sa screen nang may mataas na katumpakan. Ang AI speech-to-text feature ng notepad na ito ay agad na ginagawang malinis at walang mali ang iyong boses na teksto, kaya nakakatipid ka ng maraming oras.",
      },
      {
        title: "Pagbuo ng Shareable Link Pagkatapos Mag-sign In",
        desc: "Kapag naka-sign in na, pinapayagan ka ng aming notepad na gumawa ng natatanging shareable link para sa anumang note, na ginagawang kasing simple ng pagkopya ng URL ang pakikipagtulungan at mabilis na pagbabahagi.",
      },
      {
        title: "Gumawa ng Account para sa History ng Tala",
        desc: "Gumawa ng libreng account sa notepad na ito upang ma-unlock ang history ng mga tala, upang maaari mong balikan, mabawi, at pamahalaan ang lahat ng iyong naisulat sa isang lugar.",
      },
    ],
    outro:
      "Bukod sa mga ito, marami pang ibang natatanging feature na maaari mong gamitin at matamasa nang libre.",
  },
  tg: {
    title: "Хусусиятҳои асосии Notepad онлайн",
    features: [
      {
        title: "Захиракунии худкор онлайн",
        desc: "Notepad-и онлайни мо ҳангоми навиштан кори шуморо ба таври худкор захира мекунад, то шумо ҳеҷ гоҳ ҳатто як калимаро гум накунед, ҳатто агар браузер қатъ шавад ё шумо тасодуфан табро пӯшед.",
      },
      {
        title: "Боргирӣ дар форматҳои TXT ва PDF",
        desc: "Бо Notepad-и мо шумо метавонед ёддоштҳои худро фавран ҳамчун файли тозаи TXT ё PDF содир кунед, ки ин нигоҳ доштан, чоп кардан ё мубодила карданро осон мекунад.",
      },
      {
        title: "Ҳолати пурраэкран",
        desc: "Ба ҳолати пурраэкран гузаред ва ба ин Notepad-и бе парешон иҷозат диҳед, ки барои шумо майдони тозаи навиштан аз канор то канор фароҳам оварад, ки барои навиштани тамаркузшуда комил аст.",
      },
      {
        title: "Хусусияти 200% калонкунӣ",
        desc: "Ин Notepad-и онлайн ба шумо имкон медиҳад то 200% калон кунед, ки ин барои чашм ҳангоми навиштани тӯлонӣ ё кор бо матни хурд дар ҳар экран осонтар аст.",
      },
      {
        title: "Ворид кардани тасвирҳо, ҷадвалҳо, навсозии худкори санаҳо, содироти HTML",
        desc: "Аз ворид кардани тасвирҳо ва ҷадвалҳои сохторӣ то навсозии худкори санаҳо ва содироти мундариҷа ҳамчун HTML, ин Notepad аз таҳрири оддии матн хеле фаротар меравад.",
      },
      {
        title: "Сарлавҳаҳо аз H1 то H6",
        desc: "Мундариҷаи худро бо иерархияи пурраи сарлавҳаҳо аз H1 то H6 ба тартиб дароред, ки ба ин Notepad сохтори муҳаррири ҳуҷҷати касбӣ дар браузери шуморо медиҳад.",
      },
      {
        title: "Услубҳои гуногуни ҳуруф",
        desc: "Аз байни услубҳои гуногуни ҳуруф интихоб кунед, то таҷрибаи навиштани худро шахсӣ кунед ва ҳуҷҷатҳои худро хонданбоб, ифоданок ё касбӣ гардонед.",
      },
      {
        title: "Тағйир додани ранги матн",
        desc: "Ин Notepad-и онлайн ба шумо имкон медиҳад нуқтаҳои муҳимро равшан намоед ва бо тағйир додани ранги матн возеҳи визуалӣ илова кунед, ки ин як абзори оддӣ вале пурқуввати форматсозӣ барои ҳар нависанда аст.",
      },
      {
        title: "Гуфтор ба матн бо AI бе хато",
        desc: "Фикрҳои худро баён кунед ва онҳоро бо дақиқии баланд дар экран бинед. Хусусияти AI-и гуфтор ба матн фавран овози шуморо ба матни тоза ва бе хато табдил медиҳад, то вақти зиёдеро сарфа кунед.",
      },
      {
        title: "Эҷоди пайванди мубодила пас аз ворид шудан",
        desc: "Пас аз ворид шудан, Notepad-и мо ба шумо имкон медиҳад барои ҳар як ёддошт пайванди махсуси мубодила эҷод кунед, ки ҳамкорӣ ва мубодиларо ба мисли нусхабардории URL осон мекунад.",
      },
      {
        title: "Эҷоди ҳисоб барои сабти таърих",
        desc: "Ҳисоби ройгон дар ин Notepad эҷод кунед, то таърихи ёддоштҳоро боз кунед ва ҳама чизеро, ки навиштаед, дар як ҷо дубора бинед, барқарор кунед ва идора намоед.",
      },
    ],
    outro:
      "Ғайр аз инҳо, бисёр хусусиятҳои беназири дигар низ ҳастанд, ки шумо метавонед онҳоро ройгон истифода баред ва лаззат баред.",
  },
  ta: {
    title: "ஆன்லைன் நோட்பேட் முக்கிய அம்சங்கள்",
    features: [
      {
        title: "தானியங்கி சேமிப்பு (ஆன்லைன்)",
        desc: "எங்கள் ஆன்லைன் நோட்பேட் நீங்கள் தட்டச்சு செய்யும் போதே உங்கள் பணியை தானாகவே சேமிக்கிறது, அதனால் உங்களின் ஒரு சொல்லையும் இழக்க வேண்டியதில்லை, உலாவி (browser) முடங்கினாலும் அல்லது நீங்கள் தவறுதலாக tab ஐ மூடியாலும் கூட.",
      },
      {
        title: "TXT மற்றும் PDF வடிவங்களில் பதிவிறக்கம்",
        desc: "எங்கள் நோட்பேடில், நீங்கள் உங்கள் குறிப்புகளை உடனடியாக சுத்தமான TXT அல்லது PDF கோப்பாக ஏற்றுமதி செய்யலாம், இதனால் சேமிக்கவும், அச்சிடவும் அல்லது ஆஃப்லைனில் பகிரவும் எளிதாக இருக்கும்.",
      },
      {
        title: "முழுத்திரை முறை",
        desc: "முழுத்திரை முறைக்கு மாறி, கவனச்சிதறல் இல்லாத இந்த நோட்பேட் உங்களுக்கு விளிம்புக்கு விளிம்பு வரை சுத்தமான எழுதும் இடத்தை வழங்கும், இது கவனம் செலுத்தி எழுதுவதற்கு மிகவும் பொருத்தமானது.",
      },
      {
        title: "200% பெரிதாக்கும் அம்சம்",
        desc: "இந்த ஆன்லைன் நோட்பேட் நீங்கள் 200% வரை பெரிதாக்க அனுமதிக்கிறது, இது நீண்ட நேர எழுத்துப் பணிகளில் அல்லது சிறிய எழுத்துகளுடன் வேலை செய்யும்போது கண்களுக்கு எளிதாக இருக்கும்.",
      },
      {
        title: "படங்கள், அட்டவணை, தானியங்கி தேதி புதுப்பிப்பு, HTML ஏற்றுமதி",
        desc: "படங்களை மற்றும் கட்டமைக்கப்பட்ட அட்டவணைகளை சேர்ப்பதிலிருந்து தானாக தேதிகளை புதுப்பிப்பது மற்றும் உங்கள் உள்ளடக்கத்தை HTML ஆக ஏற்றுமதி செய்வது வரை, இந்த நோட்பேட் சாதாரண உரை திருத்தத்தை விட மிகவும் முன்னேறியது.",
      },
      {
        title: "H1 முதல் H6 வரை தலைப்புகள்",
        desc: "H1 முதல் H6 வரை முழுமையான தலைப்பு அமைப்புடன் உங்கள் உள்ளடக்கத்தை ஒழுங்குபடுத்துங்கள், இது இந்த நோட்பேட்டுக்கு உங்கள் உலாவியில் ஒரு தொழில்முறை ஆவணத் தொகுப்பி போன்ற அமைப்பை வழங்குகிறது.",
      },
      {
        title: "பல்வேறு எழுத்துரு பாணிகள்",
        desc: "உங்கள் எழுத்து அனுபவத்தை தனிப்பயனாக்கவும், உங்கள் ஆவணங்களை மேலும் வாசிக்க எளிதாக, வெளிப்பாடானதாக அல்லது தொழில்முறையாக மாற்றவும் பல்வேறு எழுத்துரு பாணிகளில் இருந்து தேர்வு செய்யுங்கள்.",
      },
      {
        title: "உரையின் நிறத்தை மாற்றுதல்",
        desc: "இந்த ஆன்லைன் நோட்பேட் முக்கிய புள்ளிகளை வெளிப்படுத்தவும், உரையின் நிறத்தை மாற்றுவதன் மூலம் காட்சித் தெளிவை அதிகரிக்கவும் உதவுகிறது; இது எளிய ஆனால் சக்திவாய்ந்த வடிவமைப்பு கருவியாகும்.",
      },
      {
        title: "AI மூலம் குரல் முதல் உரையாக மாற்றம் (பிழையில்லாமல்)",
        desc: "உங்கள் எண்ணங்களை பேசுங்கள், அவை அதிக துல்லியத்துடன் திரையில் தோன்றுவதை காணுங்கள். இந்த நோட்பேட்டின் AI குரல்-முதல்-உரை அம்சம் உங்கள் குரலை உடனடியாக சுத்தமான, பிழையற்ற உரையாக மாற்றுகிறது, இதனால் நீங்கள் அதிக நேரத்தை சேமிக்கலாம்.",
      },
      {
        title: "உள்நுழைந்த பிறகு பகிரக்கூடிய இணைப்பு உருவாக்குதல்",
        desc: "உள்நுழைந்த பிறகு, எங்கள் நோட்பேட் எந்த குறிப்பிற்கும் தனித்துவமான பகிரக்கூடிய இணைப்பை உருவாக்க அனுமதிக்கிறது, இதனால் இணைந்து வேலை செய்வதும் விரைவாக பகிர்வதும் URL ஐ நகலெடுப்பது போல எளிதாகிறது.",
      },
      {
        title: "வரலாற்றைப் பதிவு செய்ய கணக்கை உருவாக்குதல்",
        desc: "இந்த நோட்பேட்டில் இலவச கணக்கை உருவாக்கி, குறிப்பு வரலாற்றை திறக்கலாம்; இதனால் நீங்கள் எழுதிய அனைத்தையும் ஒரே இடத்தில் மீண்டும் பார்க்கவும், மீட்டெடுக்கவும், நிர்வகிக்கவும் முடியும்.",
      },
    ],
    outro:
      "இவற்றைத் தவிர, நீங்கள் இலவசமாக பயன்படுத்தவும் மகிழவும் பல்வேறு தனித்துவமான அம்சங்கள் உள்ளன.",
  },
  te: {
    title: "ఆన్‌లైన్ నోట్ప్యాడ్ ముఖ్య లక్షణాలు",
    features: [
      {
        title: "ఆటో సేవ్ ఆన్‌లైన్",
        desc: "మీరు టైప్ చేస్తూనే మా ఆన్‌లైన్ నోట్ప్యాడ్ మీ పనిని ఆటోమేటిక్‌గా సేవ్ చేస్తుంది, కాబట్టి బ్రౌజర్ క్రాష్ అయినా లేదా మీరు పొరపాటున ట్యాబ్‌ను మూసినా ఒక్క పదం కూడా కోల్పోరు.",
      },
      {
        title: "TXT మరియు PDF ఫార్మాట్లలో డౌన్‌లోడ్ చేయడం",
        desc: "మా నోట్ప్యాడ్‌తో మీరు మీ నోట్స్‌ను వెంటనే శుభ్రమైన TXT లేదా PDF ఫైల్‌గా ఎగుమతి చేయవచ్చు, దీని వల్ల సేవ్ చేయడం, ప్రింట్ చేయడం లేదా ఆఫ్‌లైన్‌లో పంచుకోవడం సులభం అవుతుంది.",
      },
      {
        title: "పూర్తి స్క్రీన్",
        desc: "ఫుల్-స్క్రీన్ మోడ్‌కి మారి, ఈ డిస్ట్రాక్షన్-ఫ్రీ నోట్ప్యాడ్ మీకు అంచు నుంచి అంచు వరకు శుభ్రమైన రైటింగ్ కాన్వాస్‌ను ఇస్తుంది, ఇది కేంద్రీకరించి రాయడానికి చాలా అనుకూలం.",
      },
      {
        title: "200% జూమ్ ఫీచర్",
        desc: "ఈ ఆన్‌లైన్ నోట్ప్యాడ్ ద్వారా మీరు 200% వరకు జూమ్ చేయవచ్చు, దీని వల్ల ఎక్కువసేపు రాయడం లేదా చిన్న టెక్స్ట్‌తో పని చేయడం కళ్లకు సులభంగా ఉంటుంది.",
      },
      {
        title: "చిత్రాలు, పట్టికలు, ఆటో-అప్‌డేట్ తేదీలు, HTML ఎగుమతి",
        desc: "చిత్రాలు మరియు నిర్మిత పట్టికలను చేర్చడం నుండి తేదీలను ఆటోమేటిక్‌గా అప్‌డేట్ చేయడం మరియు మీ కంటెంట్‌ను HTML‌గా ఎగుమతి చేయడం వరకు, ఈ నోట్ప్యాడ్ సాధారణ టెక్స్ట్ ఎడిటింగ్ కంటే చాలా ముందుకు వెళుతుంది.",
      },
      {
        title: "H1 నుండి H6 వరకు శీర్షికలు",
        desc: "H1 నుండి H6 వరకు పూర్తి హెడింగ్ హైరార్కీతో మీ కంటెంట్‌ను క్రమబద్ధం చేయండి, దీని వల్ల ఈ నోట్ప్యాడ్ మీ బ్రౌజర్‌లోనే ఒక ప్రొఫెషనల్ డాక్యుమెంట్ ఎడిటర్‌లా పనిచేస్తుంది.",
      },
      {
        title: "వివిధ ఫాంట్ శైలులు",
        desc: "మీ రాయడం అనుభవాన్ని వ్యక్తిగతీకరించడానికి మరియు మీ డాక్యుమెంట్లు మరింత చదవడానికి సులభంగా, వ్యక్తీకరణతో లేదా ప్రొఫెషనల్‌గా ఉండేలా వివిధ ఫాంట్ శైలుల నుండి ఎంపిక చేసుకోండి.",
      },
      {
        title: "టెక్స్ట్ రంగు మార్చడం",
        desc: "ఈ ఆన్‌లైన్ నోట్ప్యాడ్ టెక్స్ట్ రంగును మార్చడం ద్వారా ముఖ్యమైన పాయింట్లను హైలైట్ చేయడానికి మరియు విజువల్ క్లారిటీని పెంచడానికి సహాయపడుతుంది, ఇది ప్రతి రచయితకు ఉపయోగపడే సరళమైన కానీ శక్తివంతమైన ఫార్మాటింగ్ టూల్.",
      },
      {
        title: "AI ఆధారిత స్పీచ్ టు టెక్స్ట్ (లోపాలు లేకుండా)",
        desc: "మీ ఆలోచనలను మాట్లాడండి, అవి అధిక ఖచ్చితత్వంతో స్క్రీన్‌పై కనిపిస్తాయి. ఈ నోట్ప్యాడ్ యొక్క AI స్పీచ్-టు-టెక్స్ట్ ఫీచర్ మీ వాయిస్‌ను వెంటనే శుభ్రమైన, లోపాలు లేని టెక్స్ట్‌గా మార్చుతుంది, దీని వల్ల మీరు చాలా సమయం ఆదా చేసుకోవచ్చు.",
      },
      {
        title: "సైన్-ఇన్ తర్వాత షేర్ చేయగల లింక్ సృష్టించడం",
        desc: "సైన్-ఇన్ అయిన తర్వాత, మా నోట్ప్యాడ్ ఏ నోట్‌కైనా ప్రత్యేకమైన షేర్ చేయగల లింక్‌ను సృష్టించడానికి అనుమతిస్తుంది, దీని వల్ల సహకారం మరియు వేగంగా షేర్ చేయడం URL కాపీ చేయడం లాగా సులభమవుతుంది.",
      },
      {
        title: "హిస్టరీ సేవ్ చేయడానికి అకౌంట్ సృష్టించండి",
        desc: "ఈ నోట్ప్యాడ్‌లో ఉచిత అకౌంట్ సృష్టించడం ద్వారా నోట్ హిస్టరీని అన్‌లాక్ చేసుకోవచ్చు, దీని వల్ల మీరు రాసిన ప్రతిదాన్ని ఒకే చోట తిరిగి చూడడం, రికవర్ చేయడం మరియు నిర్వహించడం సాధ్యమవుతుంది.",
      },
    ],
    outro:
      "ఇవన్నీ కాకుండా, మీరు ఉచితంగా ఉపయోగించి ఆనందించగల మరెన్నో ప్రత్యేకమైన ఫీచర్లు ఉన్నాయి.",
  },
  th: {
    title: "คุณสมบัติหลักของ Notepad ออนไลน์",
    features: [
      {
        title: "บันทึกอัตโนมัติออนไลน์",
        desc: "Notepad ออนไลน์ของเราจะบันทึกงานของคุณโดยอัตโนมัติขณะพิมพ์ ดังนั้นคุณจะไม่สูญเสียแม้แต่คำเดียว แม้ว่าเบราว์เซอร์จะค้างหรือคุณปิดแท็บโดยไม่ได้ตั้งใจก็ตาม",
      },
      {
        title: "ดาวน์โหลดในรูปแบบ TXT และ PDF",
        desc: "ด้วย Notepad ของเรา คุณสามารถส่งออกโน้ตของคุณเป็นไฟล์ TXT หรือ PDF ที่สะอาดได้ทันที ทำให้สามารถบันทึก พิมพ์ หรือแชร์แบบออฟไลน์ได้ง่าย",
      },
      {
        title: "โหมดเต็มหน้าจอ",
        desc: "สลับไปโหมดเต็มหน้าจอ แล้วให้ Notepad ที่ไม่มีสิ่งรบกวนนี้มอบพื้นที่เขียนที่สะอาดเต็มขอบหน้าจอ เหมาะสำหรับการเขียนที่ต้องการสมาธิ",
      },
      {
        title: "ฟีเจอร์ซูม 200%",
        desc: "Notepad ออนไลน์นี้ให้คุณซูมได้สูงสุดถึง 200% ทำให้สบายตาเมื่อเขียนเป็นเวลานาน หรือทำงานกับข้อความตัวเล็กบนหน้าจอใด ๆ",
      },
      {
        title: "แทรกรูปภาพ ตาราง อัปเดตวันที่อัตโนมัติ ส่งออก HTML",
        desc: "ตั้งแต่การแทรกรูปภาพและตารางที่มีโครงสร้าง ไปจนถึงการอัปเดตวันที่อัตโนมัติและการส่งออกเนื้อหาเป็น HTML Notepad นี้ทำได้มากกว่าการแก้ไขข้อความพื้นฐาน",
      },
      {
        title: "หัวข้อจาก H1 ถึง H6",
        desc: "จัดระเบียบเนื้อหาของคุณด้วยโครงสร้างหัวข้อแบบครบถ้วนตั้งแต่ H1 ถึง H6 ทำให้ Notepad นี้มีโครงสร้างเหมือนโปรแกรมแก้ไขเอกสารระดับมืออาชีพในเบราว์เซอร์ของคุณ",
      },
      {
        title: "รูปแบบฟอนต์ที่หลากหลาย",
        desc: "เลือกจากรูปแบบฟอนต์ที่หลากหลายเพื่อปรับประสบการณ์การเขียนของคุณให้เป็นแบบเฉพาะตัว และทำให้เอกสารของคุณอ่านง่าย แสดงอารมณ์ได้ดี หรือดูเป็นมืออาชีพมากขึ้น",
      },
      {
        title: "เปลี่ยนสีข้อความ",
        desc: "Notepad ออนไลน์นี้ช่วยให้คุณเน้นประเด็นสำคัญและเพิ่มความชัดเจนด้วยการเปลี่ยนสีข้อความ ซึ่งเป็นเครื่องมือจัดรูปแบบที่เรียบง่ายแต่ทรงพลังสำหรับนักเขียนทุกคน",
      },
      {
        title: "แปลงเสียงเป็นข้อความด้วย AI แบบไม่มีข้อผิดพลาด",
        desc: "พูดความคิดของคุณแล้วเห็นมันปรากฏบนหน้าจอด้วยความแม่นยำสูง ฟีเจอร์แปลงเสียงเป็นข้อความด้วย AI ของ Notepad นี้จะเปลี่ยนเสียงของคุณเป็นข้อความที่สะอาดและไม่มีข้อผิดพลาดทันที ช่วยประหยัดเวลาได้มาก",
      },
      {
        title: "สร้างลิงก์แชร์ได้หลังเข้าสู่ระบบ",
        desc: "เมื่อเข้าสู่ระบบแล้ว Notepad ของเราจะให้คุณสร้างลิงก์แชร์เฉพาะสำหรับโน้ตแต่ละรายการ ทำให้การทำงานร่วมกันและการแชร์ทำได้ง่ายเหมือนการคัดลอก URL",
      },
      {
        title: "สร้างบัญชีเพื่อบันทึกประวัติ",
        desc: "สร้างบัญชีฟรีบน Notepad นี้เพื่อปลดล็อกประวัติการบันทึก ทำให้คุณสามารถย้อนดู กู้คืน และจัดการทุกสิ่งที่คุณเคยเขียนไว้ได้ในที่เดียว",
      },
    ],
    outro:
      "นอกจากสิ่งเหล่านี้ ยังมีฟีเจอร์พิเศษอื่น ๆ อีกมากมายที่คุณสามารถใช้งานและเพลิดเพลินได้ฟรี",
  },
  ti: {
    title: "መሰረታዊ ባህሪታት ናይ ኦንላይን Notepad",
    features: [
      {
        title: "ብራምታ ዝሰርሕ ናይ ኦንላይን ምዝገባ",
        desc: "እዚ ኦንላይን Notepad እንከሎ ትጽሕፍ ስራሕካ ብራምታ ይዕቅብ፣ ስለዚ ሓደ ቃል እኳ ኣይትጠፍእን፣ እንተ ብራውዘር እንተ ተሰብረ ወይ ታብ ብስሕተት እንተ ዘጸውዕካ እኳ።",
      },
      {
        title: "ብTXTን PDFን ፎርማት ምውሳድ",
        desc: "በዚ Notepad ብቕልጡፍ መልእኽትኻ ከም ጽሩይ TXT ወይ PDF ፋይል ክትወስድ ትኽእል፣ እዚ ምዝገባ፣ ምሕታም ወይ ብኦፍላይን ምክፋል ይቀላል።",
      },
      {
        title: "ሙሉ ስክሪን ሞድ",
        desc: "ናብ ሙሉ ስክሪን ሞድ ተቀይር፣ እዚ ዘይዘናጋዕ Notepad ጽሩይ ካንቫስ ናይ ምጽሓፍ ክህበካ እዩ፣ ንምትኩር ጽሕፈት ፍጹም እዩ።",
      },
      {
        title: "200% ምዕባይ (Zoom)",
        desc: "እዚ ኦንላይን Notepad ክሳብ 200% ክትዕብይ ይፈቅደልካ፣ ንዝረጋገጹ ግዜ ጽሕፈት ወይ ንንኡስ ጽሑፍ ምስራሕ ንዓይኒ ዝቐለለ ይገብር።",
      },
      {
        title: "ምእታው ስእሊ፣ ጠረጴዛ፣ ብራምታ ዝሰርሕ ምዕባይ ዕለት፣ HTML ምውጻእ",
        desc: "ካብ ምእታው ስእሊን ዝተዋሃዱ ጠረጴዛታትን ክሳብ ብራምታ ምዕባይ ዕለትን ንዝትሓዝ ይዘት ከም HTML ምውጻእን፣ እዚ Notepad ካብ መሰረታዊ ጽሕፈት ብጣዕሚ ይልዕል እዩ።",
      },
      {
        title: "ካብ H1 ክሳብ H6 ዝርከቡ ርእሰ-ጽሑፋት",
        desc: "ይዘትካ ብሙሉ ደረጃ ርእሰ-ጽሑፋት H1 ክሳብ H6 ተዋህዶ ኣደራጅ፣ እዚ Notepad ኣብ ብራውዘርካ ከም ፕሮፌሽናል ዶክመንት ኤዲተር ይገብሮ።",
      },
      {
        title: "ዝተፈላለዩ ስታይል ፎንት",
        desc: "ካብ ብዙሕ ዓይነት ስታይል ፎንት ምረጽ፣ ተመክሮ ጽሕፈትካ ንምስርሕ እና ዶክመንትካ ንምንባብ ቀሊል፣ ገላጺ ወይ ፕሮፌሽናል ክገብር።",
      },
      {
        title: "ሕብሪ ጽሑፍ ምቅያር",
        desc: "እዚ Notepad ንኣገዳሲ ነጥብታት ንምግላጽን ግልጺ ምርኣይ ንምውሳኽን ብምቅያር ሕብሪ ጽሑፍ ይሕግዝ፣ ቀሊል ግን ሓያል መሳርሒ እዩ።",
      },
      {
        title: "ብAI ዝሰርሕ ድምጺ ናብ ጽሑፍ ምቅያር ብዘይ ጌጋ",
        desc: "ሓሳብካ ተናገር፣ ብልክዕ ኣብ ስክሪን ክትርእዮ ኢኻ። እዚ Notepad ብAI ዝሰርሕ ድምጺ ናብ ጽሑፍ ብቕልጡፍ ናብ ጽሩይን ዘይጌጋን ጽሑፍ ይቕይሮ፣ ብዙሕ ግዜ ይቑጥብ።",
      },
      {
        title: "ድሕሪ መግቢ ምእታው ዝክፈት ዝክፈል ሊንክ ምፍጣር",
        desc: "ድሕሪ መግቢ ምእታው፣ እዚ Notepad ንዝኾነ መልእኽቲ ልዩ ዝኾነ ዝክፈል ሊንክ ክፈጥር ይፈቅድ፣ ምስራሕን ምክፋልን ከም URL ምንጻፍ ቀሊል ይገብር።",
      },
      {
        title: "ሂሳብ ምፍጣር ንታሪኽ ምዝገባ",
        desc: "ነዚ Notepad ብነጻ ሂሳብ ፍጠር ንታሪኽ መልእኽቲ ክትከፍት እንተ ትኽእል፣ ዝጻሕፍካዮ ኩሉ ኣብ ሓደ ቦታ ክትርእዮን ክትመልሶን ክትመሓየሽን ትኽእል።",
      },
    ],
    outro:
      "ካብዚ ብዝሓለፈ፣ ብዙሕ ካልእ ልዩ ባህሪታት ብነጻ ክትጥቀመሉን ክትሕጐስን ትኽእል።",
  },
  to: {
    title: "Ngaahi Fakatotolo Mahuʻinga ʻo e Notepad ʻi he ʻInitaneti",
    features: [
      {
        title: "Seivi ʻaunoa ʻi he ʻinitaneti",
        desc: "ʻOku seivi ʻe he notepad ʻi he ʻinitaneti ʻi he taimi ʻokú ke tohi ai, ko ia ʻe ʻikai ʻaupito ke mole ha foʻi lea ʻe taha, neongo ʻoku ʻi ai ha paʻusiʻanga ʻa e browser pe ke ke tāpuni taʻetokanga ʻa e tab.",
      },
      {
        title: "Laveʻi ʻi he ngaahi fōmisi TXT mo PDF",
        desc: "ʻI heʻemau notepad, ʻe lava ke ke fakahū vave hoʻo ngaahi tohi ko ha faile TXT pe PDF maʻa, ʻoku faingofua ke seivi, paaki, pe vahevahe ʻi he offline.",
      },
      {
        title: "Sikīlini kakato",
        desc: "Liliu ki he mode sikīlini kakato pea tuku ʻa e notepad taʻefakangāue ni ke ne ʻoatu ha feituʻu tohi maʻa mei he tapa ki he tapa, ʻoku lelei taha ki he ngaahi taimi tohi tokanga.",
      },
      {
        title: "Fakalelei (zoom) 200%",
        desc: "ʻOku ʻai ʻe he notepad ʻi he ʻinitaneti ke ke fakalelei (zoom) ʻo aʻu ki he 200%, ʻa ia ʻoku fakafiemālie ki he mata ʻi he taimi tohi fuoloa pe taimi ngāue mo e tohi siʻisiʻi ʻi ha sikīlini pē.",
      },
      {
        title: "Fakahu ngaahi fakatātā, tepile, fakalelei ʻaunoa ʻo e ʻaho, pea fakahū ki he HTML",
        desc: "Mei he fakahu ʻo e ngaahi fakatātā mo e ngaahi tepile faʻu lelei, ki he fakalelei ʻaunoa ʻo e ʻaho pea mo e fakahū ʻo hoʻo konga tohi ki he HTML, ʻoku lahi ange ʻaupito ʻeni ʻi he edit tohi faingofua pē.",
      },
      {
        title: "Ngaahi hingoa ʻuluaki mei H1 ki H6",
        desc: "Fokotuʻutuʻu hoʻo konga tohi ʻaki ha hierarchy kakato ʻo e ngaahi hingoa mei H1 ki H6, ʻa ia ʻoku ne ʻai ʻa e notepad ni ke hangē ha document editor totonu ʻi hoʻo browser.",
      },
      {
        title: "Ngaahi faingāue kehekehe ʻo e letā tohi",
        desc: "Fili mei he ngaahi faingāue kehekehe ʻo e letā tohi ke ke fakahoa ai hoʻo founga tohi pea ke fakahāhā lelei ange hoʻo ngaahi tohi, faingofua ke lau, pe fakaʻofoʻofa mo fakapalofesinale.",
      },
      {
        title: "Liliu ʻa e lanu ʻo e tohi",
        desc: "ʻOku ʻai ʻe he notepad ʻi he ʻinitaneti ke ke fakaʻilongaʻi ʻa e ngaahi konga mahuʻinga pea fakaʻofoʻofa ange ʻa e tohi ʻaki hono liliu ʻo e lanu, ko ha meʻa faingofua kae mālohi ki he tokotaha tohi kotoa pē.",
      },
      {
        title: "Fakalelei lea ki he tohi ʻi he AI ʻikai ha fehalaaki",
        desc: "Lea hoʻo ngaahi fakakaukau pea sio ki hono hā mai ʻi he sikīlini ʻaki ha tonu māʻolunga. ʻOku liliu vave ʻe he AI speech-to-text ʻa e notepad ni hoʻo leʻo ki he tohi maʻa mo taʻefehalaaki, ʻa ia ʻoku tokoni lahi ke ke fakahaofi taimi.",
      },
      {
        title: "Fakatupu ha link vahevahe hili hono hu ki loto",
        desc: "Hili hono hu ki loto, ʻoku fakaʻatā ʻe he notepad ke ke fakatupu ha link makehe ke vahevahe ki ha tohi kotoa pē, ʻa ia ʻoku ne ʻai ke faingofua ʻa e ngāue fakataha mo e vahevahe hangē ko hono hiki kopi ha URL.",
      },
      {
        title: "Fakatupu ha ʻakauni ke tohi ʻa e hisitōlia",
        desc: "Fakatupu ha ʻakauni taʻetotongi ʻi he notepad ni ke fakaava ʻa e hisitōlia ʻo e ngaahi tohi, ke ke toe vakai, toe maʻu mai, pea puleʻi ʻa e meʻa kotoa pē kuo ke tohi ʻi ha feituʻu pē ʻe taha.",
      },
    ],
    outro:
      "ʻI he tafaʻaki ʻeni, ʻoku toe lahi ʻa e ngaahi meʻa makehe kehe ʻe lava ke ke fakaʻaongaʻi mo fiefia ai taʻetotongi.",
  },
  tr: {
    title: "Online Not Defterinin Temel Özellikleri",
    features: [
      {
        title: "Çevrimiçi Otomatik Kaydetme",
        desc: "Online not defterimiz siz yazarken çalışmalarınızı otomatik olarak kaydeder, böylece tarayıcı çökerse veya sekmeyi yanlışlıkla kapatsanız bile tek bir kelimeyi bile kaybetmezsiniz.",
      },
      {
        title: "TXT ve PDF formatlarında indirme",
        desc: "Not defterimizle notlarınızı anında temiz bir TXT veya PDF dosyası olarak dışa aktarabilirsiniz; böylece kaydetmek, yazdırmak veya çevrimdışı paylaşmak çok kolay olur.",
      },
      {
        title: "Tam Ekran",
        desc: "Tam ekran moduna geçin ve dikkat dağıtmayan bu not defterinin size kenardan kenara temiz bir yazım alanı sunmasına izin verin; odaklanmış yazım oturumları için mükemmeldir.",
      },
      {
        title: "%200 Yakınlaştırma Özelliği",
        desc: "Bu çevrimiçi not defteri %200’e kadar yakınlaştırma yapmanıza izin verir, bu da uzun yazım oturumlarında veya küçük metinlerle çalışırken göz yorgunluğunu azaltır.",
      },
      {
        title: "Görsel ekleme, tablo, tarihlerin otomatik güncellenmesi, HTML dışa aktarma",
        desc: "Görsel ve yapılandırılmış tablolar eklemekten tarihleri otomatik güncellemeye ve içeriğinizi HTML olarak dışa aktarmaya kadar bu not defteri temel metin düzenlemenin çok ötesine geçer.",
      },
      {
        title: "H1’den H6’ya başlıklar",
        desc: "İçeriğinizi H1’den H6’ya kadar tam bir başlık hiyerarşisi ile düzenleyin; bu not defterine tarayıcınızda profesyonel bir belge düzenleyici yapısı kazandırır.",
      },
      {
        title: "Farklı yazı tipleri",
        desc: "Yazma deneyiminizi kişiselleştirmek ve belgelerinizi daha okunabilir, daha etkileyici veya daha profesyonel hale getirmek için çeşitli yazı tipleri arasından seçim yapın.",
      },
      {
        title: "Metin rengini değiştirme",
        desc: "Bu çevrimiçi not defteri, metin rengini değiştirerek önemli noktaları vurgulamanıza ve görsel netlik eklemenize olanak tanır; her yazar için basit ama güçlü bir biçimlendirme aracıdır.",
      },
      {
        title: "Hatasız Yapay Zeka Destekli Sesli Yazıya Dönüştürme",
        desc: "Düşüncelerinizi konuşun ve bunların ekranda yüksek doğrulukla göründüğünü izleyin. Bu not defterinin yapay zeka destekli sesli yazıya dönüştürme özelliği sesinizi anında temiz ve hatasız metne çevirir, böylece çok zaman kazanırsınız.",
      },
      {
        title: "Giriş yaptıktan sonra paylaşılabilir bağlantı oluşturma",
        desc: "Giriş yaptıktan sonra not defterimiz, herhangi bir not için benzersiz bir paylaşılabilir bağlantı oluşturmanıza izin verir; iş birliği ve hızlı paylaşım URL kopyalamak kadar kolaydır.",
      },
      {
        title: "Geçmişi kaydetmek için hesap oluşturma",
        desc: "Bu not defterinde ücretsiz bir hesap oluşturarak not geçmişini açabilir, yazdığınız her şeyi tek bir yerde tekrar görüntüleyebilir, geri yükleyebilir ve yönetebilirsiniz.",
      },
    ],
    outro:
      "Bunların dışında, ücretsiz olarak kullanıp keyfini çıkarabileceğiniz daha birçok benzersiz özellik bulunmaktadır.",
  },
  tk: {
    title: "Onlaýn Notepad-yň Esasy Aýratynlyklary",
    features: [
      {
        title: "Awtomatiki ýagdaýda onlaýn saklamak",
        desc: "Biziň onlaýn notepadymyz ýazýan wagtyňyz işiňizi awtomatiki ýagdaýda saklaýar, şonuň üçin brauzer ýykylsa ýa-da taby tötänleýin ýapsaňyz hem bir söz hem ýitmez.",
      },
      {
        title: "TXT we PDF formatlarynda ýüklemek",
        desc: "Notepadymyz bilen ýazgylaryňyzy derrew arassa TXT ýa-da PDF faýly hökmünde eksport edip bilersiňiz, bu bolsa saklamagy, çap etmegi ýa-da oflaýn paýlaşmagy aňsatlaşdyrýar.",
      },
      {
        title: "Doly ekran",
        desc: "Doly ekran režimine geçiň we bu ünsüňizi sowmaýan notepad size gyradan gyraga çenli arassa ýazuw meýdançasyny bersin, bu bolsa ünsli ýazmak üçin örän amatlydyr.",
      },
      {
        title: "200% ulaltma aýratynlygy",
        desc: "Bu onlaýn notepad size 200%-e çenli ulaltmaga mümkinçilik berýär, bu hem uzak wagt ýazanyňyzda ýa-da kiçi tekst bilen işleşeniňizde gözüňizi ýeňilleşdirýär.",
      },
      {
        title: "Surat, tablisa goşmak, seneleri awtomatiki täzelemek, HTML eksport etmek",
        desc: "Surat we gurluşly tablisalar goşmakdan başlap, seneleri awtomatiki täzelemäge we mazmunyňyzy HTML görnüşinde eksport etmäge çenli, bu notepad adaty tekst redaktirlemeden has köp mümkinçilik berýär.",
      },
      {
        title: "H1-den H6-a çenli atlar",
        desc: "Mazmunyňyzy H1-den H6-a çenli doly at gurluşy bilen tertipläň, bu notepad-y brauzeriňizde professional dokument redaktoryna öwürýär.",
      },
      {
        title: "Dürli şrift görnüşleri",
        desc: "Ýazuw tejribäňizi şahsylaşdyrmak we resminamalaryňyzy has okalýan, täsirli ýa-da professional etmek üçin dürli şrift görnüşlerinden saýlaň.",
      },
      {
        title: "Tekstiň reňkini üýtgetmek",
        desc: "Bu onlaýn notepad möhüm nokatlary tapawutlandyrmaga we tekst reňkini üýtgetmek arkaly has aýdyňlyk goşmaga mümkinçilik berýär, bu bolsa her ýazyjy üçin ýönekeý emma güýçli guraldyr.",
      },
      {
        title: "Ýalňyşsyz AI sesden tekste öwürme",
        desc: "Pikirleriňizi gürläň we olaryň ýokary takyklyk bilen ekranda peýda bolýandygyny görüň. Bu notepad-yň AI sesden tekste öwürme aýratynlygy siziň sesiňizi derrew arassa we ýalňyşsyz tekste öwürýär, bu bolsa köp wagty tygşytlaýar.",
      },
      {
        title: "Girişden soň paýlaşylýan baglanyşyk döretmek",
        desc: "Giriş eden soň, notepadymyz islendik bellik üçin aýratyn paýlaşylýan baglanyşyk döretmäge mümkinçilik berýär, bu bolsa hyzmatdaşlygy we çalt paýlaşmagy URL göçürmek ýaly aňsat edýär.",
      },
      {
        title: "Taryhy ýazmak üçin hasap döretmek",
        desc: "Bu notepad-da mugt hasap dörediň we bellik taryhyny açyň, şeýdip ýazan ähli zatlaryňyzy bir ýerde täzeden görüp, dikeldip we dolandyryp bilersiňiz.",
      },
    ],
    outro:
      "Bulardan başga-da, mugt ulanyp we lezzet alyp boljak başga-da köp özboluşly aýratynlyklar bar.",
  },
  uk: {
    title: "Основні функції онлайн-блокнота",
    features: [
      {
        title: "Автоматичне збереження онлайн",
        desc: "Наш онлайн-блокнот автоматично зберігає вашу роботу під час введення, тому ви ніколи не втратите жодного слова, навіть якщо браузер зависне або ви випадково закриєте вкладку.",
      },
      {
        title: "Завантаження у форматах TXT та PDF",
        desc: "За допомогою нашого блокнота ви можете миттєво експортувати свої нотатки у чистий файл TXT або PDF, що дозволяє легко зберігати, друкувати або ділитися ними офлайн.",
      },
      {
        title: "Повноекранний режим",
        desc: "Перейдіть у повноекранний режим, і цей блокнот без відволікань надасть вам чисте поле для письма від краю до краю, ідеальне для зосередженого створення текстів.",
      },
      {
        title: "Функція масштабування до 200%",
        desc: "Цей онлайн-блокнот дозволяє збільшувати масштаб до 200%, що робить роботу комфортнішою для очей під час довгих сесій письма або роботи з дрібним текстом на будь-якому екрані.",
      },
      {
        title: "Вставка зображень, таблиць, автоматичне оновлення дат, експорт HTML",
        desc: "Від вставки зображень і структурованих таблиць до автоматичного оновлення дат і експорту контенту у формат HTML — цей блокнот виходить далеко за межі базового редагування тексту.",
      },
      {
        title: "Заголовки від H1 до H6",
        desc: "Організуйте свій контент за повною ієрархією заголовків від H1 до H6, надаючи цьому блокноту структуру професійного редактора документів прямо у вашому браузері.",
      },
      {
        title: "Різні стилі шрифтів",
        desc: "Оберіть серед різних стилів шрифтів, щоб персоналізувати свій досвід письма та зробити документи більш читабельними, виразними або професійними.",
      },
      {
        title: "Зміна кольору тексту",
        desc: "Цей онлайн-блокнот дозволяє виділяти ключові моменти та покращувати візуальну зрозумілість шляхом зміни кольору тексту — простий, але потужний інструмент форматування для будь-якого автора.",
      },
      {
        title: "AI-розпізнавання мовлення без помилок",
        desc: "Висловлюйте свої думки вголос і спостерігайте, як вони з’являються на екрані з високою точністю. Функція AI-розпізнавання мовлення цього блокнота миттєво перетворює ваш голос у чистий і безпомилковий текст, заощаджуючи ваш час.",
      },
      {
        title: "Створення посилання для поширення після входу",
        desc: "Після входу в систему наш блокнот дозволяє створювати унікальне посилання для будь-якої нотатки, роблячи співпрацю та швидкий обмін таким же простим, як копіювання URL.",
      },
      {
        title: "Створення облікового запису для збереження історії",
        desc: "Створіть безкоштовний обліковий запис у цьому блокноті, щоб відкрити історію нотаток і мати можливість переглядати, відновлювати та керувати всім, що ви коли-небудь писали, в одному місці.",
      },
    ],
    outro:
      "Окрім цього, є багато інших унікальних функцій, якими ви можете користуватися безкоштовно та із задоволенням.",
  },
  ur: {
    title: "آن لائن نوٹ پیڈ کی اہم خصوصیات",
    features: [
      {
        title: "خودکار آن لائن سیو",
        desc: "ہمارا آن لائن نوٹ پیڈ آپ کے لکھتے وقت خود بخود آپ کا کام محفوظ کرتا رہتا ہے، اس لیے آپ کا ایک بھی لفظ ضائع نہیں ہوتا، چاہے براؤزر کریش ہو جائے یا آپ غلطی سے ٹیب بند کر دیں۔",
      },
      {
        title: "TXT اور PDF فارمیٹس میں ڈاؤن لوڈ",
        desc: "ہمارے نوٹ پیڈ کے ذریعے آپ اپنے نوٹس کو فوراً صاف TXT یا PDF فائل کی صورت میں ایکسپورٹ کر سکتے ہیں، جس سے محفوظ کرنا، پرنٹ کرنا یا آف لائن شیئر کرنا آسان ہو جاتا ہے۔",
      },
      {
        title: "فل اسکرین موڈ",
        desc: "فل اسکرین موڈ میں جائیں اور اس ڈسٹرکشن فری نوٹ پیڈ کو آپ کو ایک صاف اور کنارے سے کنارے تک لکھنے کی جگہ دینے دیں، جو مکمل توجہ کے ساتھ لکھنے کے لیے بہترین ہے۔",
      },
      {
        title: "200٪ زوم فیچر",
        desc: "یہ آن لائن نوٹ پیڈ آپ کو 200٪ تک زوم کرنے کی سہولت دیتا ہے، جو لمبے لکھائی کے سیشنز یا چھوٹے متن کے ساتھ کام کرتے وقت آنکھوں کے لیے آسان ہے۔",
      },
      {
        title: "تصاویر شامل کرنا، ٹیبل، تاریخوں کی خودکار اپڈیٹ، HTML ایکسپورٹ",
        desc: "تصاویر اور منظم ٹیبلز شامل کرنے سے لے کر تاریخوں کو خودکار اپڈیٹ کرنے اور اپنے مواد کو HTML کے طور پر ایکسپورٹ کرنے تک، یہ نوٹ پیڈ بنیادی ٹیکسٹ ایڈیٹنگ سے کہیں آگے ہے۔",
      },
      {
        title: "H1 سے H6 تک ہیڈنگز",
        desc: "اپنے مواد کو مکمل ہیڈنگ ہائیرارکی H1 سے H6 کے ساتھ منظم کریں، جس سے یہ نوٹ پیڈ آپ کے براؤزر میں ایک پروفیشنل ڈاکیومنٹ ایڈیٹر کی طرح کام کرتا ہے۔",
      },
      {
        title: "مختلف فونٹ اسٹائلز",
        desc: "اپنے لکھنے کے تجربے کو ذاتی بنانے کے لیے مختلف فونٹ اسٹائلز میں سے انتخاب کریں تاکہ آپ کے نوٹ زیادہ قابلِ مطالعہ، مؤثر یا پروفیشنل بن سکیں۔",
      },
      {
        title: "متن کا رنگ تبدیل کرنا",
        desc: "یہ آن لائن نوٹ پیڈ اہم نکات کو نمایاں کرنے اور متن کا رنگ تبدیل کر کے بصری وضاحت بڑھانے کی سہولت دیتا ہے، جو ہر لکھنے والے کے لیے ایک سادہ مگر طاقتور ٹول ہے۔",
      },
      {
        title: "AI کے ذریعے بغیر غلطی کے آواز کو متن میں تبدیل کرنا",
        desc: "اپنے خیالات بولیں اور انہیں اعلیٰ درستگی کے ساتھ اسکرین پر ظاہر ہوتے دیکھیں۔ اس نوٹ پیڈ کا AI سپیچ ٹو ٹیکسٹ فیچر آپ کی آواز کو فوراً صاف اور بغیر غلطی کے متن میں تبدیل کر دیتا ہے، جس سے آپ کا کافی وقت بچتا ہے۔",
      },
      {
        title: "سائن اِن کے بعد شیئر ایبل لنک بنانا",
        desc: "سائن اِن کرنے کے بعد ہمارا نوٹ پیڈ آپ کو کسی بھی نوٹ کے لیے ایک منفرد شیئر ایبل لنک بنانے کی سہولت دیتا ہے، جس سے تعاون اور شیئر کرنا یو آر ایل کاپی کرنے جتنا آسان ہو جاتا ہے۔",
      },
      {
        title: "تاریخ محفوظ کرنے کے لیے اکاؤنٹ بنائیں",
        desc: "اس نوٹ پیڈ پر مفت اکاؤنٹ بنا کر آپ نوٹس کی ہسٹری کھول سکتے ہیں تاکہ آپ اپنی لکھی ہوئی ہر چیز کو ایک ہی جگہ پر دوبارہ دیکھ، بحال اور منظم کر سکیں۔",
      },
    ],
    outro:
      "ان کے علاوہ بھی بہت سی منفرد خصوصیات موجود ہیں جنہیں آپ مفت استعمال کر سکتے ہیں اور لطف اندوز ہو سکتے ہیں۔",
  },
  uz: {
    title: "Onlayn Notepadning asosiy xususiyatlari",
    features: [
      {
        title: "Avtomatik onlayn saqlash",
        desc: "Bizning onlayn notepad yozayotganingizda ishlaringizni avtomatik saqlab boradi, shuning uchun brauzer ishdan chiqsa yoki tasodifan tabni yopsangiz ham birorta soʻzni yoʻqotmaysiz.",
      },
      {
        title: "TXT va PDF formatlarda yuklab olish",
        desc: "Bizning notepad orqali siz yozuvlaringizni darhol toza TXT yoki PDF fayl sifatida eksport qilishingiz mumkin, bu esa saqlash, chop etish yoki oflayn ulashishni osonlashtiradi.",
      },
      {
        title: "Toʻliq ekran rejimi",
        desc: "Toʻliq ekran rejimiga oʻting va bu chalgʻitmaydigan notepad sizga chetidan chetigacha toza yozish maydonini taqdim etsin, bu esa diqqat bilan yozish uchun juda qulay.",
      },
      {
        title: "200% kattalashtirish funksiyasi",
        desc: "Bu onlayn notepad sizga 200% gacha kattalashtirish imkonini beradi, bu esa uzoq yozish jarayonlarida yoki kichik matn bilan ishlaganda ko‘zlar uchun qulayroq bo‘ladi.",
      },
      {
        title: "Rasm qoʻshish, jadval, sanani avtomatik yangilash, HTML eksport",
        desc: "Rasm va tuzilgan jadvallar qoʻshishdan tortib, sanalarni avtomatik yangilash va kontentingizni HTML formatida eksport qilishgacha, bu notepad oddiy matn tahriridan ancha keng imkoniyatlarga ega.",
      },
      {
        title: "H1 dan H6 gacha sarlavhalar",
        desc: "Kontentingizni H1 dan H6 gacha bo‘lgan to‘liq sarlavha ierarxiyasi bilan tartiblang, bu notepadni brauzeringizda professional hujjat muharririga aylantiradi.",
      },
      {
        title: "Turli shrift uslublari",
        desc: "Yozish tajribangizni shaxsiylashtirish va hujjatlaringizni yanada o‘qilishi oson, ifodali yoki professional qilish uchun turli shrift uslublaridan tanlang.",
      },
      {
        title: "Matn rangini o‘zgartirish",
        desc: "Bu onlayn notepad muhim nuqtalarni ajratib ko‘rsatish va matn rangini o‘zgartirish orqali vizual aniqlik qo‘shishga yordam beradi, bu har bir yozuvchi uchun oddiy, ammo kuchli vositadir.",
      },
      {
        title: "Sun’iy intellekt asosidagi nutqni matnga aylantirish (xatosiz)",
        desc: "O‘z fikrlaringizni gapiring va ularning ekranda yuqori aniqlik bilan paydo bo‘lishini kuzating. Ushbu notepadning AI nutqni matnga aylantirish funksiyasi ovozingizni darhol toza va xatosiz matnga aylantiradi, bu esa ko‘p vaqtni tejaydi.",
      },
      {
        title: "Kirishdan so‘ng ulashish havolasini yaratish",
        desc: "Tizimga kirgandan so‘ng, bizning notepad har qanday eslatma uchun noyob ulashish havolasini yaratishga imkon beradi, bu hamkorlik va tez ulashishni URL nusxalash kabi oson qiladi.",
      },
      {
        title: "Tarixni saqlash uchun hisob yaratish",
        desc: "Ushbu notepadda bepul hisob yarating va eslatmalar tarixini oching, shunda siz yozgan hamma narsani bir joyda qayta ko‘rish, tiklash va boshqarish imkoniga ega bo‘lasiz.",
      },
    ],
    outro:
      "Bundan tashqari, siz bepul foydalanishingiz va zavqlanishingiz mumkin bo‘lgan ko‘plab boshqa noyob funksiyalar ham mavjud.",
  },
  vi: {
    title: "Các tính năng chính của Notepad trực tuyến",
    features: [
      {
        title: "Tự động lưu trực tuyến",
        desc: "Notepad trực tuyến của chúng tôi tự động lưu công việc của bạn khi bạn đang gõ, vì vậy bạn sẽ không bao giờ mất dù chỉ một từ, ngay cả khi trình duyệt bị lỗi hoặc bạn vô tình đóng tab.",
      },
      {
        title: "Tải xuống định dạng TXT và PDF",
        desc: "Với notepad của chúng tôi, bạn có thể xuất ghi chú ngay lập tức dưới dạng tệp TXT hoặc PDF sạch sẽ, giúp việc lưu, in hoặc chia sẻ ngoại tuyến trở nên dễ dàng.",
      },
      {
        title: "Toàn màn hình",
        desc: "Chuyển sang chế độ toàn màn hình và để notepad không gây xao nhãng này cung cấp cho bạn một không gian viết sạch từ mép này đến mép kia, hoàn hảo cho các phiên soạn thảo tập trung.",
      },
      {
        title: "Tính năng phóng to 200%",
        desc: "Notepad trực tuyến này cho phép bạn phóng to lên đến 200%, giúp dễ chịu hơn cho mắt khi viết lâu hoặc làm việc với văn bản nhỏ trên bất kỳ màn hình nào.",
      },
      {
        title: "Chèn hình ảnh, bảng, tự động cập nhật ngày, xuất HTML",
        desc: "Từ việc chèn hình ảnh và bảng biểu có cấu trúc đến tự động cập nhật ngày tháng và xuất nội dung dưới dạng HTML, notepad này vượt xa việc chỉnh sửa văn bản cơ bản.",
      },
      {
        title: "Tiêu đề từ H1 đến H6",
        desc: "Sắp xếp nội dung của bạn với hệ thống tiêu đề đầy đủ từ H1 đến H6, giúp notepad này trở thành một trình chỉnh sửa tài liệu chuyên nghiệp ngay trong trình duyệt của bạn.",
      },
      {
        title: "Các kiểu phông chữ khác nhau",
        desc: "Chọn từ nhiều kiểu phông chữ khác nhau để cá nhân hóa trải nghiệm viết của bạn và giúp tài liệu dễ đọc hơn, biểu cảm hơn hoặc chuyên nghiệp hơn.",
      },
      {
        title: "Thay đổi màu văn bản",
        desc: "Notepad trực tuyến này cho phép bạn làm nổi bật các điểm quan trọng và tăng độ rõ ràng bằng cách thay đổi màu văn bản, một công cụ định dạng đơn giản nhưng mạnh mẽ cho mọi người viết.",
      },
      {
        title: "Chuyển giọng nói thành văn bản bằng AI không lỗi",
        desc: "Hãy nói suy nghĩ của bạn và xem chúng xuất hiện trên màn hình với độ chính xác cao. Tính năng chuyển giọng nói thành văn bản bằng AI của notepad này ngay lập tức biến giọng nói của bạn thành văn bản sạch và không lỗi, giúp bạn tiết kiệm rất nhiều thời gian.",
      },
      {
        title: "Tạo liên kết chia sẻ sau khi đăng nhập",
        desc: "Sau khi đăng nhập, notepad của chúng tôi cho phép bạn tạo một liên kết chia sẻ duy nhất cho bất kỳ ghi chú nào, giúp việc cộng tác và chia sẻ nhanh trở nên đơn giản như sao chép một URL.",
      },
      {
        title: "Tạo tài khoản để lưu lịch sử",
        desc: "Tạo một tài khoản miễn phí trên notepad này để mở khóa lịch sử ghi chú, giúp bạn xem lại, khôi phục và quản lý mọi thứ bạn đã từng viết tại một nơi duy nhất.",
      },
    ],
    outro:
      "Ngoài những tính năng này, còn rất nhiều tính năng độc đáo khác mà bạn có thể sử dụng và tận hưởng miễn phí.",
  },
  cy: {
    title: "Prif Nodweddion Notepad Ar-lein",
    features: [
      {
        title: "Arbed Awtomatig Ar-lein",
        desc: "Mae ein notepad ar-lein yn cadw eich gwaith yn awtomatig wrth i chi deipio, felly ni fyddwch byth yn colli hyd yn oed un gair, hyd yn oed os bydd eich porwr yn chwalu neu os byddwch yn cau’r tab ar ddamwain.",
      },
      {
        title: "Lawrlwytho mewn fformatau TXT a PDF",
        desc: "Gyda’n notepad, gallwch allforio eich nodiadau ar unwaith fel ffeil TXT neu PDF glân, gan ei gwneud yn hawdd eu cadw, eu hargraffu, neu eu rhannu all-lein.",
      },
      {
        title: "Sgrin Lawn",
        desc: "Newidiwch i’r modd sgrin lawn a gadewch i’r notepad di-dynnu sylw hwn roi cynfas ysgrifennu glân o ymyl i ymyl i chi, sy’n berffaith ar gyfer sesiynau ysgrifennu â ffocws.",
      },
      {
        title: "Nodwedd Chwyddo 200%",
        desc: "Mae’r notepad ar-lein hwn yn caniatáu ichi chwyddo hyd at 200%, gan ei gwneud yn haws ar y llygaid ar gyfer sesiynau ysgrifennu hir neu wrth weithio gyda thestun bach ar unrhyw sgrin.",
      },
      {
        title: "Mewnosod Delweddau, Tablau, Diweddaru Dyddiadau’n Awtomatig, Allforio HTML",
        desc: "O fewnosod delweddau a thablau strwythuredig i ddiweddaru dyddiadau’n awtomatig ac allforio eich cynnwys fel HTML, mae’r notepad hwn yn mynd ymhell y tu hwnt i olygu testun sylfaenol.",
      },
      {
        title: "Penawdau o H1 i H6",
        desc: "Trefnwch eich cynnwys gyda hierarchaeth lawn o benawdau, H1 i H6, gan roi strwythur golygydd dogfennau proffesiynol i’r notepad hwn yn eich porwr.",
      },
      {
        title: "Arddulliau Ffont Gwahanol",
        desc: "Dewiswch o amrywiaeth o arddulliau ffont i bersonoli eich profiad ysgrifennu a gwneud eich dogfennau yn fwy darllenadwy, mynegiannol neu broffesiynol.",
      },
      {
        title: "Newid Lliw Testun",
        desc: "Mae’r notepad ar-lein hwn yn caniatáu ichi amlygu pwyntiau allweddol ac ychwanegu eglurder gweledol trwy newid lliw testun, offeryn fformatio syml ond pwerus i unrhyw awdur.",
      },
      {
        title: "Trosi Llais i Destun â Phŵer AI Heb Unrhyw Gamgymeriad",
        desc: "Llefarwch eich meddyliau a’u gweld yn ymddangos ar y sgrin gyda chywirdeb uchel. Mae nodwedd trosi llais i destun â phŵer AI y notepad hwn yn troi eich llais yn destun glân heb gamgymeriadau ar unwaith, gan arbed llawer o amser i chi.",
      },
      {
        title: "Cynhyrchu Dolen Rhannu ar ôl Mewngofnodi",
        desc: "Ar ôl mewngofnodi, mae ein notepad yn caniatáu ichi gynhyrchu dolen unigryw y gellir ei rhannu ar gyfer unrhyw nodyn, gan wneud cydweithio a rhannu cyflym mor syml â chopïo URL.",
      },
      {
        title: "Creu Cyfrif i Gofnodi Hanes",
        desc: "Creu cyfrif am ddim ar y notepad hwn i ddatgloi hanes nodiadau fel y gallwch ailymweld, adfer a rheoli popeth rydych erioed wedi’i ysgrifennu, i gyd mewn un lle.",
      },
    ],
    outro:
      "Ar wahân i’r rhain, mae llawer o nodweddion unigryw eraill y gallwch eu defnyddio a’u mwynhau am ddim.",
  },
  xh: {
    title: "Iimpawu eziphambili ze-Notepad ekwi-Intanethi",
    features: [
      {
        title: "Ukugcina ngokuzenzekelayo kwi-intanethi",
        desc: "I-notepad yethu ekwi-intanethi igcina ngokuzenzekelayo umsebenzi wakho ngelixa uchwetheza, ukuze ungaze ulahlekelwe nalinye igama, nokuba ibhrawuza yakho iyaphazamiseka okanye uvale ithebhu ngempazamo.",
      },
      {
        title: "Khuphela kwiifomathi ze-TXT ne-PDF",
        desc: "Nge-notepad yethu, ungathumela amanqaku akho ngoko nangoko njengefayile ecocekileyo ye-TXT okanye ye-PDF, nto leyo eyenza kube lula ukugcina, ukuprinta okanye ukwabelana ngawo ngaphandle kwe-intanethi.",
      },
      {
        title: "Isikrini esipheleleyo",
        desc: "Tshintshela kwimowudi yesikrini esipheleleyo uze le notepad ingaphazamisiyo ikunike indawo ecocekileyo yokubhala ukusuka komnye umda ukuya komnye, ilungele ukubhala kugxilwe ngokupheleleyo.",
      },
      {
        title: "Ukwandisa (Zoom) ukuya kwi-200%",
        desc: "Le notepad ekwi-intanethi ikuvumela ukuba usondeze ukuya kuthi ga kwi-200%, nto leyo eyenza kube lula emehlweni ngexesha lokubhala ixesha elide okanye xa usebenza ngombhalo omncinci kuso nasiphi na isikrini.",
      },
      {
        title: "Faka imifanekiso, iitafile, uhlaziyo oluzenzekelayo lwemihla, ukuthumela ngaphandle njenge-HTML",
        desc: "Ukusukela ekufakeni imifanekiso neetafile ezilungelelanisiweyo ukuya kuhlaziyo oluzenzekelayo lwemihla nokuthumela umxholo wakho njenge-HTML, le notepad idlula kude ukuhlela okubhaliweyo okusisiseko.",
      },
      {
        title: "Izihloko ukusuka ku-H1 ukuya ku-H6",
        desc: "Lungiselela umxholo wakho ngoluhlu olupheleleyo lwezihloko ukusuka ku-H1 ukuya ku-H6, nto leyo eyenza le notepad ibe sisihleli samaxwebhu sobungcali ngaphakathi kwebhrawuza yakho.",
      },
      {
        title: "Iindlela ezahlukeneyo zeefonti",
        desc: "Khetha kwiindidi ezahlukeneyo zeefonti ukuze wenze amava akho okubhala abe sesakho, wenze amaxwebhu akho afundeke lula, abe nentsingiselo okanye abe nobungcali ngakumbi.",
      },
      {
        title: "Guqula umbala wombhalo",
        desc: "Le notepad ekwi-intanethi ikuvumela ukuba uqaqambise amanqaku abalulekileyo kwaye wongeze ukucaca ngokubonakalayo ngokutshintsha umbala wombhalo, isixhobo esilula kodwa esinamandla sokuhlela kubabhali bonke.",
      },
      {
        title: "Ukuthetha-kuya-kubhalo okuxhaswa yi-AI ngaphandle kweempazamo",
        desc: "Thetha iingcinga zakho uze uzibone zibonakala esikrinini ngokuchaneka okuphezulu. Inqaku le-AI lokuguqula intetho ibe ngumbhalo kwale notepad liguqula ilizwi lakho libe ngumbhalo ococekileyo ongenazimpazamo ngoko nangoko, nto leyo egcina ixesha elininzi.",
      },
      {
        title: "Yenza ikhonkco ekwabelwana ngalo emva kokungena",
        desc: "Emva kokungena, le notepad yethu ikuvumela ukuba wenze ikhonkco elikhethekileyo lokwabelana ngalo kuyo nayiphi na inqaku, nto leyo eyenza intsebenziswano kunye nokwabelana kube lula njengokukopa i-URL.",
      },
      {
        title: "Yenza iakhawunti ukugcina imbali",
        desc: "Yenza iakhawunti yasimahla kule notepad ukuze uvule imbali yamanqaku, ukuze ukwazi ukubuyela, ukubuyisela kunye nokulawula yonke into owakhe wayibhala kwindawo enye.",
      },
    ],
    outro:
      "Ngaphandle kwezi, kukho nezinye iimpawu ezininzi ezikhethekileyo onokuzisebenzisa kwaye uzonwabele simahla.",
  },
  yo: {
    title: "Àwọn ànfàní pàtàkì ti Notepad lórí Ayelujara",
    features: [
      {
        title: "Ìfipamọ́ laifọwọyi lórí ayelujara",
        desc: "Notepad wa lórí ayelujara máa ń fi iṣẹ́ rẹ pamọ́ laifọwọyi bí o ṣe ń kọ, nítorí náà ìwọ kì yóò pàdánù ọ̀rọ̀ kankan, kódà bí browser bá bàjẹ́ tàbí o bá ti ìkànsí pa tab naa.",
      },
      {
        title: "Gbaa lati ayelujara ní fọ́ọ̀mù TXT àti PDF",
        desc: "Pẹ̀lú notepad wa, o lè yí àwọn àkọsílẹ̀ rẹ padà sí fáìlì TXT tàbí PDF tó mọ́ lẹ́sẹ̀kẹsẹ̀, èyí mú kí o rọrùn láti fi pamọ́, tẹ̀ jáde, tàbí pín ní offline.",
      },
      {
        title: "Ibojú kúnkún (Full Screen)",
        desc: "Yípadà sí ipo ibojú kúnkún, kí notepad tí kò ní ìdíwọ́ yìí fún ọ ní àyè ìkọ̀wé tó mọ́ látí etí dé etí, tó dára fún ìkọ̀wé pẹ̀lú ìfọkànsìn.",
      },
      {
        title: "Ìmú gíga (Zoom) dé 200%",
        desc: "Notepad lórí ayelujara yìí jẹ́ kí o lè sun-un (zoom) dé 200%, èyí mú kí ojú rọrùn nígbà tí o bá ń kọ fún àkókò pípẹ́ tàbí nígbà tí o bá ń ṣiṣẹ́ pẹ̀lú ìtẹ̀wé kékeré lórí ibojú kankan.",
      },
      {
        title: "Fífi àwọn àwòrán, tábìlì, ìmúdójúìwọ̀n ọjọ́ laifọwọyi, àti ìtújáde HTML",
        desc: "Láti fi àwọn àwòrán àti tábìlì tó ṣètò sílẹ̀, dé ìmúdójúìwọ̀n ọjọ́ laifọwọyi àti ìtújáde akoonu rẹ gẹ́gẹ́ bí HTML, notepad yìí kọjá ìṣàtúnṣe ọ̀rọ̀ tó rọrùn.",
      },
      {
        title: "Àwọn akọlé láti H1 dé H6",
        desc: "Ṣètò akoonu rẹ pẹ̀lú ìpele akọlé kíkún láti H1 dé H6, èyí ń jẹ́ kí notepad yìí dà bí olùṣàtúnṣe ìwé ọjọ́gbọn nínú browser rẹ.",
      },
      {
        title: "Àwọn irú fonti tó yàtọ̀",
        desc: "Yan lára àwọn irú fonti tó yàtọ̀ láti ṣe àfọwọ́kọ ìrírí ìkọ̀wé rẹ, kí o sì jẹ́ kí àwọn ìwé rẹ rọrùn láti ka, kún fún ìtúmọ̀ tàbí jẹ́ ọjọ́gbọn.",
      },
      {
        title: "Yí àwọ̀ ọ̀rọ̀ padà",
        desc: "Notepad lórí ayelujara yìí jẹ́ kí o lè fi àfihàn sí àwọn kókó pàtàkì àti mú ìtúmọ̀ kedere pọ̀ sí i nípa yíyí àwọ̀ ọ̀rọ̀ padà, ohun èlò tó rọrùn ṣùgbọ́n tó lágbára fún gbogbo onkọ̀wé.",
      },
      {
        title: "Ìyípadà ohùn sí ìkọ̀wé pẹ̀lú AI láìsí àṣìṣe",
        desc: "Sọ àwọn ìrònú rẹ kí o sì rí wọn tí wọ́n ń hàn lórí iboju pẹ̀lú ìtòótọ́ gíga. Ẹ̀rọ AI tó ń yí ohùn padà sí ìkọ̀wé nínú notepad yìí máa ń yí ohùn rẹ padà sí ọ̀rọ̀ tó mọ́ àti láìsí àṣìṣe lẹ́sẹ̀kẹsẹ̀, èyí ń jẹ́ kí o fipamọ́ àkókò púpọ̀.",
      },
      {
        title: "Ṣẹ̀dá ìjápọ̀ ìpínpín lẹ́yìn ìwọlé",
        desc: "Lẹ́yìn tí o bá wọlé, notepad wa máa jẹ́ kí o ṣẹ̀dá ìjápọ̀ aláìlẹ́gbẹ́ tí a lè pín fún àkọsílẹ̀ kankan, èyí mú kí ìfọwọ́sowọ́pọ̀ àti pínpín yara rọrùn bí kíkó URL.",
      },
      {
        title: "Ṣẹ̀dá àkọọ́lẹ̀ láti fi ìtàn pamọ́",
        desc: "Ṣẹ̀dá àkọọ́lẹ̀ ọfẹ́ lórí notepad yìí láti ṣí ìtàn àkọsílẹ̀, kí o lè tún wò ó, gba padà, kí o sì ṣàkóso gbogbo ohun tí o ti kọ rí ní ibi kan ṣoṣo.",
      },
    ],
    outro:
      "Lẹ́yìn àwọn wọ̀nyí, ọ̀pọ̀ àwọn ànfàní aláìlẹ́gbẹ́ míì tún wà tí o lè lò àti gbádùn lọ́fẹ̀ẹ́.",
  },
  zu: {
    title: "Izici Eziyinhloko ze-Notepad eku-inthanethi",
    features: [
      {
        title: "Ukulondoloza okuzenzakalelayo ku-inthanethi",
        desc: "I-notepad yethu eku-inthanethi igcina ngokuzenzakalelayo umsebenzi wakho njengoba uthayipha, ukuze ungalahlekelwa nelilodwa igama, noma ngabe isiphequluli siyawa noma uvala ithebhu ngephutha.",
      },
      {
        title: "Landa ngamafomethi e-TXT ne-PDF",
        desc: "Nge-notepad yethu, ungathumela amanothi akho ngokushesha njengefayela elihlanzekile le-TXT noma le-PDF, okwenza kube lula ukuligcina, ukuliphrinta noma ukwabelana ngalo ungaxhunyiwe ku-inthanethi.",
      },
      {
        title: "Isikrini esigcwele",
        desc: "Shintshela kumodi yesikrini esigcwele bese uvumela le notepad engenaziphazamiso ikunike indawo yokubhala ehlanzekile ukusuka kolunye uhlangothi kuya kolunye, efanele kakhulu ukubhala okugxilile.",
      },
      {
        title: "Isici sokusondeza esingu-200%",
        desc: "Le notepad eku-inthanethi ikuvumela ukuthi usondeze kuze kufike ku-200%, okwenza kube lula emehlweni ngesikhathi sokubhala isikhathi eside noma usebenza ngombhalo omncane esikrinini sanoma yiluphi uhlobo.",
      },
      {
        title: "Ukufaka izithombe, amatafula, ukuvuselela izinsuku ngokuzenzakalelayo, nokuthekelisa i-HTML",
        desc: "Kusukela ekufakeni izithombe namatafula ahlelekile kuya ekubuyekezweni kwezinsuku ngokuzenzakalelayo nokuthekelisa okuqukethwe kwakho njenge-HTML, le notepad idlula kude ukuhlela umbhalo okuvamile.",
      },
      {
        title: "Izihloko ezisuka ku-H1 kuya ku-H6",
        desc: "Hlela okuqukethwe kwakho ngohlelo oluphelele lwezihloko kusuka ku-H1 kuya ku-H6, okunikeza le notepad isakhiwo somhleli wemibhalo oqeqeshiwe ngaphakathi kwesiphequluli sakho.",
      },
      {
        title: "Izitayela ezahlukene zamafonti",
        desc: "Khetha ezinhlotsheni ezahlukene zamafonti ukuze wenze isipiliyoni sakho sokubhala sibe ngesakho futhi wenze imibhalo yakho ifundeke kalula, ibe nencazelo noma ibe sezingeni lobuchwepheshe.",
      },
      {
        title: "Ukushintsha umbala wombhalo",
        desc: "Le notepad eku-inthanethi ikuvumela ukuthi ugqamise amaphuzu abalulekile futhi ungeze ukucaca ngokubonakalayo ngokushintsha umbala wombhalo, ithuluzi elilula kodwa elinamandla kunoma yimuphi umbhali.",
      },
      {
        title: "Ukuguqula izwi libe umbhalo nge-AI ngaphandle kwamaphutha",
        desc: "Khuluma imicabango yakho bese uyibona ivela esikrinini ngokunemba okuphezulu. Isici se-AI sokuguqula izwi libe umbhalo sale notepad siguqula izwi lakho ngokushesha libe umbhalo ohlanzekile ongenamaphutha, okusiza ukonga isikhathi esiningi.",
      },
      {
        title: "Dala isixhumanisi esabelwana ngaso ngemva kokungena",
        desc: "Uma usungenile, le notepad yethu ikuvumela ukuthi udale isixhumanisi esiyingqayizivele sokwabelana nganoma yiliphi inothi, okwenza ukubambisana nokwabelana kusheshe kube lula njengokukopisha i-URL.",
      },
      {
        title: "Dala i-akhawunti ukuze ugcine umlando",
        desc: "Dala i-akhawunti yamahhala kule notepad ukuze uvule umlando wamanothi, ukuze ukwazi ukubuyela, ukubuyisa futhi uphathe konke okwake wakubhala endaweni eyodwa.",
      },
    ],
    outro:
      "Ngaphandle kwalokhu, kunezinye izici eziningi ezihlukile ongazisebenzisa futhi uzijabulele mahhala.",
  },
};

export function getHomeFeaturesCopy(locale: string): HomeFeaturesCopy {
  return featuresByLocale[locale] ?? featuresEn;
}
