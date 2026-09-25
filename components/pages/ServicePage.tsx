import { SeoHead } from "@/components/layout/SeoHead";
import { ServicePageContent } from "@/components/pages/ServicePageContent";
import type { ServicePageProps } from "@/lib/cms";

/** Shared page component for /coaching, /tarot and /reiki. */
export function ServicePage({ service, sections, closingCta }: ServicePageProps) {
  return (
    <>
      <SeoHead title={service.seo.title} description={service.seo.description} path={`/${service.slug}`} />
      <ServicePageContent data={service} sections={sections} closingCta={closingCta} />
    </>
  );
}
