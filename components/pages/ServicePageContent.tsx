import { PageHero } from "@/components/hero/PageHero";
import { ServiceHeroVisual } from "@/components/hero/ServiceHeroVisual";
import { ServiceBenefitsSection } from "@/components/pages/ServiceBenefitsSection";
import { ServiceOverviewSection } from "@/components/pages/ServiceOverviewSection";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { ServiceSessionsSection } from "@/components/pages/ServiceSessionsSection";
import type { ServicePageData } from "@/lib/services";

type ServicePageContentProps = {
  data: ServicePageData;
};

export function ServicePageContent({ data }: ServicePageContentProps) {
  return (
    <div className={"inner-page"}>
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        script={data.hero.script}
        lead={data.hero.description}
        trust={data.hero.trust}
        tone={data.hero.tone}
        primaryCta={{ href: "/bookings", label: "Book this service" }}
        secondaryCta={{ href: "/contact", label: "Ask a question" }}
        visual={
          <ServiceHeroVisual
            icon={data.icon}
            variant={data.variant}
            tag={data.tag}
            title={data.hero.title}
          />
        }
        className={"page-hero--service-3d"}
      />

      <div id="page-content">
      <ServiceOverviewSection data={data} />

      <ServiceBenefitsSection data={data} />

      <ServiceSessionsSection data={data} />

      <ClosingInvitationCta />
      </div>
    </div>
  );
}
