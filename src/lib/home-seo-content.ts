/** Homepage “What is…” / “Why notepad.is?” copy — per locale */

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
