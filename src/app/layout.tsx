import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { defaultLocale } from "@/lib/i18n";
import { LOCALE_REQUEST_HEADER } from "@/lib/request-locale-header";
import { getMetadataBase } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const rootMeta = getLocaleMetadata(defaultLocale);

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: rootMeta.title,
  description: rootMeta.description,
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "3Wjg5usa-zMVqbzgIUeoxq83rj-X1IuiyQHqN44ZSNU",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const lang = h.get(LOCALE_REQUEST_HEADER) ?? defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
