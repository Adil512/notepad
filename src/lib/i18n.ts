/** BCP 47 codes for URL segments: notepad.is/{locale}/... */

export const defaultLocale = "en";

/** Display name (UI) → path segment */
export const LANGUAGE_TO_LOCALE: Record<string, string> = {
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
  Sundanese: "su",
};

export const locales = [...new Set(Object.values(LANGUAGE_TO_LOCALE))].sort();

export const localeToLanguage: Record<string, string> = Object.fromEntries(
  Object.entries(LANGUAGE_TO_LOCALE).map(([label, code]) => [code, label])
);

export function isValidLocale(segment: string): boolean {
  return locales.includes(segment);
}

/** Path after locale segment, always starts with / */
export function getPathWithoutLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isValidLocale(parts[0])) {
    if (parts.length === 1) return "/";
    return "/" + parts.slice(1).join("/");
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isValidLocale(parts[0])) return parts[0];
  return defaultLocale;
}

/**
 * Public URL path. English (default) has no `/en` prefix: `/`, `/blog`, …
 * Other locales: `/ar`, `/ar/blog`, …
 */
export function localizedPath(locale: string, pathWithoutLocale: string): string {
  const p =
    pathWithoutLocale === "/"
      ? ""
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;
  if (locale === defaultLocale) {
    return p === "" ? "/" : p;
  }
  return `/${locale}${p}`;
}

export const supportedLanguageNames = Object.keys(LANGUAGE_TO_LOCALE).sort();
