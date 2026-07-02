import { ServicePageContent } from "@/components/pages/ServicePageContent";
import { SeoHead } from "@/components/layout/SeoHead";
import { services } from "@/lib/services";

export default function CoachingPage() {
  const data = services.coaching;
  return (
    <>
      <SeoHead title={data.seo.title} description={data.seo.description} path={`/${data.slug}`} />
      <ServicePageContent data={data} />
    </>
  );
}
