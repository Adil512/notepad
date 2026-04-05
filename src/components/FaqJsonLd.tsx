import { faqPageJsonLd } from "@/lib/faq-data";

export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageJsonLd),
      }}
    />
  );
}
