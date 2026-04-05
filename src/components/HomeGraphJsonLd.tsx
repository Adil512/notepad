import { getHomeGraphJsonLd } from "@/lib/home-graph-jsonld";

export function HomeGraphJsonLd({ locale }: { locale: string }) {
  const json = getHomeGraphJsonLd(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
