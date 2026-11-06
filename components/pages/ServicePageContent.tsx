import { PageHero } from "@/components/hero/PageHero";
import { ServiceHeroBackdrop } from "@/components/hero/ServiceHeroVisual";
import { ServiceBenefitsSection } from "@/components/pages/ServiceBenefitsSection";
import { ServiceOverviewSection } from "@/components/pages/ServiceOverviewSection";
import {
  mediaUrl,
  type Service,
  type ServicePageSection,
} from "@/lib/cms-types";

type ServicePageContentProps = {
  data: Service;
  sections: ServicePageSection;
};

export function ServicePageContent({ data, sections }: ServicePageContentProps) {
  return (
    <div className={"inner-page"}>
      <PageHero
        title={data.hero.title}
        script={data.hero.script}
        lead={data.hero.description}
        tone={data.hero.tone ?? undefined}
        primaryCta={sections.hero.primaryCta}
        secondaryCta={sections.hero.secondaryCta}
        align="left"
        backdrop={<ServiceHeroBackdrop icon={mediaUrl(data.icon)} />}
        className={"page-hero--service-3d"}
      />

      <div id="page-content">
      <ServiceOverviewSection data={data} sections={sections} />

      <ServiceBenefitsSection data={data} sections={sections} />
      </div>
    </div>
  );
}
