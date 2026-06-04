const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\adilb\\.gemini\\antigravity\\brain\\586b79b2-9895-484e-b84c-7461d4f10bb5\\.system_generated\\logs\\overview.txt';
// Note: due to unicode or other characters, overview.txt might be different. Let's read it.
const overview = fs.readFileSync(logPath, 'utf8');

const userReqStr = "Wat is 'n JSON-redigeerder?";
const startIdx = overview.lastIndexOf("Afrikaans (South Africa)");
if (startIdx === -1) {
    console.error("Could not find the start of the language data");
    process.exit(1);
}

const textToParseStr = overview.slice(startIdx);
const endIdx = textToParseStr.indexOf("<truncated");
const textToParse = endIdx !== -1 ? textToParseStr.slice(0, endIdx) : textToParseStr;

const LANGUAGE_TO_LOCALE = {
  English: "en", Chinese: "zh", Spanish: "es", Arabic: "ar", Indonesian: "id",
  Malay: "ms", Portuguese: "pt", French: "fr", Japanese: "ja", Russian: "ru",
  German: "de", Hindi: "hi", Bengali: "bn", Urdu: "ur", Turkish: "tr",
  Korean: "ko", Vietnamese: "vi", Italian: "it", Persian: "fa", Thai: "th",
  Polish: "pl", Dutch: "nl", Swedish: "sv", Greek: "el", Czech: "cs",
  Romanian: "ro", Hungarian: "hu", Hebrew: "he", Danish: "da", Finnish: "fi",
  Norwegian: "no", Slovak: "sk", Bulgarian: "bg", Croatian: "hr", Serbian: "sr",
  Ukrainian: "uk", Tamil: "ta", Telugu: "te", Marathi: "mr", Gujarati: "gu",
  Kannada: "kn", Malayalam: "ml", Sinhala: "si", Nepali: "ne", Burmese: "my",
  Khmer: "km", Lao: "lo", Mongolian: "mn", Georgian: "ka", Armenian: "hy",
  Azerbaijani: "az", Swahili: "sw", Zulu: "zu", Afrikaans: "af", Amharic: "am",
  Somali: "so", Yoruba: "yo", Igbo: "ig", Hausa: "ha", Malagasy: "mg",
  Uzbek: "uz", Kazakh: "kk", Kyrgyz: "ky", Tajik: "tg", Turkmen: "tk",
  Pashto: "ps", Kurdish: "ku", Albanian: "sq", Lithuanian: "lt", Latvian: "lv",
  Estonian: "et", Icelandic: "is", Irish: "ga", Welsh: "cy", Basque: "eu",
  Catalan: "ca", Galician: "gl", Maltese: "mt", Luxembourgish: "lb",
  Macedonian: "mk", Bosnian: "bs", Slovenian: "sl", Fijian: "fj", Maori: "mi",
  Samoan: "sm", Tongan: "to", "Haitian Creole": "ht", Quechua: "qu", Aymara: "ay",
  Guarani: "gn", Navajo: "nv", Inuktitut: "iu", Greenlandic: "kl", Oromo: "om",
  Tigrinya: "ti", Shona: "sn", Xhosa: "xh", Cebuano: "ceb", Tagalog: "tl",
  Javanese: "jv", Sundanese: "su"
};

const lines = textToParse.split('\n').map(l => l.trim().replace(/\r/g, ''));
let state = 'FIND_LANG';
let currentBlock = null;
const result = {};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (state === 'FIND_LANG') {
        const langMatch = line.match(/^([A-Za-z]+(?:\s[A-Za-z]+)*)\s*\(/);
        if (langMatch) {
            let lang = langMatch[1].trim();
            if (lang === "Chinese") lang = "Chinese";
            let code = LANGUAGE_TO_LOCALE[lang];
            if (code) {
                currentBlock = { whatIs: [], howToUse: [], whyUse: [], faqs: [] };
                result[code] = currentBlock;
                state = 'EXPECT_WHAT_IS';
            }
        }
    } else if (state === 'EXPECT_WHAT_IS') {
        if (line.includes("?")) {
            state = 'READ_WHAT_IS';
        }
    } else if (state === 'READ_WHAT_IS') {
        if (line.includes("?")) {
            state = 'READ_HOW_TO';
        } else if (line) {
            currentBlock.whatIs.push(line);
        }
    } else if (state === 'READ_HOW_TO') {
        if (line.includes("?")) {
            state = 'READ_WHY_USE';
        } else if (line) {
            currentBlock.howToUse.push(line);
        }
    } else if (state === 'READ_WHY_USE') {
        // Stop when we see "FAQ" or "Preguntas" or usually a short line that acts as a header before questions
        if (line && (!line.includes("?") && line.length < 30 && (line.toLowerCase().includes("faq") || line.toLowerCase().includes("pregunt") || line.toLowerCase().includes("سوال") || line.toLowerCase().includes("često") || line.toLowerCase().includes("часто") || line.toLowerCase().includes("su'aalaha") || line.toLowerCase().includes("mbvunzo") || line.toLowerCase().includes("pertanyaan") || i + 1 < lines.length && lines[i+1].includes("?")))) {
            state = 'READ_FAQS';
        } else if (line && line.includes("?") && (i + 1 < lines.length && !lines[i+1].includes("?"))) {
            // It could be that the "FAQ" header was missing and we directly jumped to question 1!
            // Wait, "Why use JSON editor?" could be followed by an answer with a question? No.
            // But let's assume it's FAQs if we passed Why use.
            currentBlock.faqs.push({ question: line, answer: "" });
            state = 'READ_FAQS';
        } else if (line) {
            currentBlock.whyUse.push(line);
        }
    } else if (state === 'READ_FAQS') {
        if (!line) continue;
        
        // Look ahead for Language header
        const langMatch = line.match(/^([A-Za-z]+(?:\s[A-Za-z]+)*)\s*\(/);
        if (langMatch && LANGUAGE_TO_LOCALE[langMatch[1].trim()]) {
            let lang = langMatch[1].trim();
            let code = LANGUAGE_TO_LOCALE[lang];
            currentBlock = { whatIs: [], howToUse: [], whyUse: [], faqs: [] };
            result[code] = currentBlock;
            state = 'EXPECT_WHAT_IS';
            continue;
        }

        if (line.includes("?")) {
            currentBlock.faqs.push({ question: line, answer: "" });
        } else if (currentBlock.faqs.length > 0) {
            currentBlock.faqs[currentBlock.faqs.length - 1].answer += (currentBlock.faqs[currentBlock.faqs.length - 1].answer ? ' ' : '') + line;
        }
    }
}

let outStr = `import type { ToolEducationContent } from "@/lib/tool-page-education-content";\n\n`;
outStr += `export const jsonEditorEducation: Record<string, ToolEducationContent> = {\n`;
for (const [code, data] of Object.entries(result)) {
    outStr += `  "${code}": {\n`;
    outStr += `    whatIs: ${JSON.stringify(data.whatIs, null, 4)},\n`;
    outStr += `    howToUse: ${JSON.stringify(data.howToUse, null, 4)},\n`;
    outStr += `    whyUse: ${JSON.stringify(data.whyUse, null, 4)},\n`;
    outStr += `    faqs: ${JSON.stringify(data.faqs, null, 4)}\n`;
    outStr += `  },\n`;
}
outStr += `};\n`;

fs.mkdirSync(path.join(__dirname, 'src/lib/education'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src/lib/education/json-editor-edu.ts'), outStr);

console.log("Parsed " + Object.keys(result).length + " languages.");
