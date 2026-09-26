import { PageHero } from "@/components/hero/PageHero";
import { ServiceHeroVisual } from "@/components/hero/ServiceHeroVisual";
import { ServiceBenefitsSection } from "@/components/pages/ServiceBenefitsSection";
import { ServiceOverviewSection } from "@/components/pages/ServiceOverviewSection";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { ServiceSessionsSection } from "@/components/pages/ServiceSessionsSection";
import {
  mediaUrl,
  serviceVariant,
  textList,
  type ClosingCta,
  type Service,
  type ServicePageSection,
} from "@/lib/cms-types";

type ServicePageContentProps = {
  data: Service;
  sections: ServicePageSection;
  closingCta: ClosingCta;
};

export function ServicePageContent({ data, sections, closingCta }: ServicePageContentProps) {
  return (
    <div className={"inner-page"}>
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        script={data.hero.script}
        lead={data.hero.description}
        trust={textList(data.hero.trust)}
        tone={data.hero.tone ?? undefined}
        primaryCta={sections.hero.primaryCta}
        secondaryCta={sections.hero.secondaryCta}
        visual={
          <ServiceHeroVisual
            icon={mediaUrl(data.icon)}
            variant={serviceVariant(data.slug)}
            title={data.hero.title}
          />
        }
        className={"page-hero--service-3d"}
      />

      <div id="page-content">
      <ServiceOverviewSection data={data} sections={sections} />

      <ServiceBenefitsSection data={data} sections={sections} />

      <ServiceSessionsSection data={data} sections={sections} />

      <ClosingInvitationCta content={closingCta} />
      </div>
    </div>
  );
}
