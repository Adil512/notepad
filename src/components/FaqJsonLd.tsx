import { getHomeFaqJsonLd } from "@/lib/faq-data";

export function FaqJsonLd({ locale }: { locale: string }) {
  const faqPageJsonLd = getHomeFaqJsonLd(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageJsonLd),
      }}
    />
  );
}
