import { getNavLabels } from "@/lib/nav-labels";

export type FooterLabels = {
  company: string;
  aboutUs: string;
  contactSupport: string;
  blog: string;
  tools: string;
  allTools: string;
  markdownEditor: string;
  codeNotepad: string;
  jsonEditor: string;
  htmlEditor: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  copyrightRights: string;
  privacyShort: string;
  termsShort: string;
};

const BASE: FooterLabels = {
  company: "Company",
  aboutUs: "About Us",
  contactSupport: "Contact Support",
  blog: "Blog",
  tools: "Tools",
  allTools: "All tools",
  markdownEditor: "Markdown Editor",
  codeNotepad: "Code Notepad",
  jsonEditor: "JSON Editor",
  htmlEditor: "HTML Editor",
  legal: "Legal",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  copyrightRights: "",
  privacyShort: "Privacy",
  termsShort: "Terms",
};

const FOOTER_I18N: Record<string, Partial<FooterLabels>> = {
  ar: { company: "الشركة", allTools: "جميع الأدوات", legal: "قانوني", termsOfService: "شروط الخدمة", copyrightRights: "جميع الحقوق محفوظة.", termsShort: "الشروط" },
  es: { company: "Compañía", allTools: "Todas las herramientas", legal: "Legal", termsOfService: "Términos del servicio", copyrightRights: "Todos los derechos reservados.", termsShort: "Términos" },
  fr: { company: "Entreprise", allTools: "Tous les outils", legal: "Légal", termsOfService: "Conditions d’utilisation", copyrightRights: "Tous droits réservés.", termsShort: "Conditions" },
  de: { company: "Unternehmen", allTools: "Alle Tools", legal: "Rechtliches", termsOfService: "Nutzungsbedingungen", copyrightRights: "Alle Rechte vorbehalten.", termsShort: "Bedingungen" },
  pt: { company: "Empresa", allTools: "Todas as ferramentas", legal: "Legal", termsOfService: "Termos de serviço", copyrightRights: "Todos os direitos reservados.", termsShort: "Termos" },
  it: { company: "Azienda", allTools: "Tutti gli strumenti", legal: "Legale", termsOfService: "Termini di servizio", copyrightRights: "Tutti i diritti riservati.", termsShort: "Termini" },
  tr: { company: "Şirket", allTools: "Tüm araçlar", legal: "Yasal", termsOfService: "Hizmet şartları", copyrightRights: "Tüm hakları saklıdır.", termsShort: "Şartlar" },
  ru: { company: "Компания", allTools: "Все инструменты", legal: "Правовая информация", termsOfService: "Условия использования", copyrightRights: "Все права защищены.", termsShort: "Условия" },
  hi: { company: "कंपनी", allTools: "सभी टूल्स", legal: "कानूनी", termsOfService: "सेवा की शर्तें", copyrightRights: "सर्वाधिकार सुरक्षित।", termsShort: "शर्तें" },
  ja: { company: "会社", allTools: "すべてのツール", legal: "法務", termsOfService: "利用規約", copyrightRights: "全著作権所有。", termsShort: "利用規約" },
  ko: { company: "회사", allTools: "모든 도구", legal: "법적 고지", termsOfService: "서비스 약관", copyrightRights: "모든 권리 보유.", termsShort: "약관" },
  zh: { company: "公司", allTools: "所有工具", legal: "法律", termsOfService: "服务条款", copyrightRights: "保留所有权利。", termsShort: "条款" },
};

export function getFooterLabels(locale: string): FooterLabels {
  const nav = getNavLabels(locale);
  const dict = FOOTER_I18N[locale] ?? FOOTER_I18N[locale.split("-")[0]] ?? {};

  const localizedTerms =
    dict.termsOfService ??
    ({
      bn: "সেবার শর্তাবলী",
      ur: "سروس کی شرائط",
      vi: "Điều khoản dịch vụ",
      nl: "Servicevoorwaarden",
      sv: "Användarvillkor",
      el: "Όροι υπηρεσίας",
      cs: "Podmínky služby",
      ro: "Termeni de utilizare",
      hu: "Szolgáltatási feltételek",
      he: "תנאי שירות",
      da: "Servicevilkår",
      fi: "Palveluehdot",
      no: "Tjenestevilkår",
      sk: "Podmienky služby",
      bg: "Условия за ползване",
      hr: "Uvjeti korištenja",
      sr: "Uslovi korišćenja",
      uk: "Умови використання",
      ta: "சேவை விதிமுறைகள்",
      te: "సేవ నిబంధనలు",
      mr: "सेवा अटी",
      gu: "સેવાની શરતો",
      kn: "ಸೇವಾ ನಿಯಮಗಳು",
      ml: "സേവന നിബന്ധനകൾ",
      si: "සේවා කොන්දේසි",
      ne: "सेवा सर्तहरू",
      my: "ဝန်ဆောင်မှု စည်းမျဉ်းများ",
      km: "លក្ខខណ្ឌសេវាកម្ម",
      lo: "ເງື່ອນໄຂການໃຊ້ບໍລິການ",
      mn: "Үйлчилгээний нөхцөл",
      ka: "მომსახურების პირობები",
      hy: "Ծառայության պայմաններ",
      az: "Xidmət şərtləri",
      sw: "Masharti ya huduma",
      zu: "Imigomo yesevisi",
      af: "Diensvoorwaardes",
      am: "የአገልግሎት ውሎች",
      so: "Shuruudaha adeegga",
      yo: "Awọn ofin iṣẹ",
      ig: "Usoro ọrụ",
      ha: "Sharuɗɗan sabis",
      mg: "Fepetra momba ny serivisy",
      uz: "Xizmat shartlari",
      kk: "Қызмет көрсету шарттары",
      ky: "Кызмат көрсөтүү шарттары",
      tg: "Шартҳои хизматрасонӣ",
      tk: "Hyzmat şertleri",
      ps: "د خدمت شرایط",
      ku: "Mercên xizmetê",
      sq: "Kushtet e shërbimit",
      lt: "Paslaugų teikimo sąlygos",
      lv: "Pakalpojuma noteikumi",
      et: "Teenusetingimused",
      is: "Þjónustuskilmálar",
      ga: "Téarmaí seirbhíse",
      cy: "Telerau gwasanaeth",
      eu: "Zerbitzu-baldintzak",
      ca: "Termes del servei",
      gl: "Condicións do servizo",
      mt: "Termini tas-servizz",
      lb: "Déngschtbedéngungen",
      mk: "Услови за користење",
      bs: "Uslovi korištenja",
      sl: "Pogoji storitve",
      fj: "Veituvatu ni veiqaravi",
      mi: "Ngā tikanga ratonga",
      sm: "Tuutuuga o le auaunaga",
      to: "Ngaahi tuʻutuʻuni tokoni",
      ht: "Kondisyon sèvis",
      qu: "Yanapanapaq kamachiykuna",
      ay: "Kunsuri kamachinaka",
      gn: "Ñemboe’ỹrã pytyvõ rehegua",
      nv: "Bee hane’ bá hooghanígíí",
      iu: "ᐱᔨᑦᑎᕋᖅᑕᐅᔪᑦ ᒪᓕᒐᖏᑦ",
      kl: "Kiffartuussinermut piumasaqaatit",
      om: "Haala tajaajilaa",
      ti: "ውዕላት ኣገልግሎት",
      sn: "Mitemo yebasa",
      xh: "Imiqathango yenkonzo",
      ceb: "Mga kondisyon sa serbisyo",
      tl: "Mga tuntunin ng serbisyo",
      jv: "Katemtuan layanan",
      su: "Sarat layanan",
    } as Record<string, string>)[locale] ??
    "Terms of Service";

  return {
    ...BASE,
    ...dict,
    company: dict.company ?? nav.about,
    aboutUs: nav.about,
    contactSupport: nav.contact,
    blog: nav.blog,
    tools: nav.writingTools,
    allTools: dict.allTools ?? nav.writingTools,
    legal: dict.legal ?? nav.privacy,
    privacyPolicy: dict.privacyPolicy ?? nav.privacy,
    termsOfService: localizedTerms,
    privacyShort: nav.privacy,
    termsShort: dict.termsShort ?? localizedTerms,
  };
}
