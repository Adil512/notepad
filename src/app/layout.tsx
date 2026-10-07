import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { getLocaleMetadata } from "@/lib/locale-metadata";
import { defaultLocale } from "@/lib/i18n";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          {...({ async: "async" } as any)}
          data-noptimize="1"
          data-cfasync="false"
          src="//scripts.scriptwrapper.com/tags/e06862ab-368c-421d-8d71-0bbd2614623b.js"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
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
