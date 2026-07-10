import { BookingsStudioSection } from "@/components/pages/BookingsStudioSection";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { PageHero } from "@/components/hero/PageHero";

export function BookingsPageContent() {
  return (
    <div className={"inner-page"}>
      <PageHero
        eyebrow="Bookings"
        title="Choose your session"
        script="at a time that suits you"
        lead="View live availability and book directly below. Prefer a conversation first? You can always enquire before you commit."
        trust={[
          "Reply within 24 hours",
          "All services available",
          "Discovery call free",
        ]}
        primaryCta={{ href: "#bookings-grid", label: "View availability" }}
        secondaryCta={{ href: "/contact", label: "Enquire first" }}
        tone="opal"
      />

      <div id="page-content">
        <BookingsStudioSection />

        <ClosingInvitationCta />
      </div>
    </div>
  );
}
