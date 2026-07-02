import { ServicePageContent } from "@/components/pages/ServicePageContent";
import { SeoHead } from "@/components/layout/SeoHead";
import { services } from "@/lib/services";

export default function TarotPage() {
  const data = services.tarot;
  return (
    <>
      <SeoHead title={data.seo.title} description={data.seo.description} />
      <ServicePageContent data={data} />
    </>
  );
}
