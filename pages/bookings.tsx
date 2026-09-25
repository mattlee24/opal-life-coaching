import type { GetStaticProps } from "next";
import { BookingsPageContent } from "@/components/pages/BookingsPageContent";
import { SeoHead } from "@/components/layout/SeoHead";
import { getLayoutData, REVALIDATE_SECONDS } from "@/lib/cms";
import type { LayoutData } from "@/lib/cms-types";

export default function BookingsPage() {
  return (
    <>
      <SeoHead
        title="Book a Session — Opal Life Coaching"
        description="Book life coaching, tarot or Reiki sessions with Cara in West Sussex or online."
        path="/bookings"
      />
      <BookingsPageContent />
    </>
  );
}

// Bookings page content is not in Payload yet — only the shared header/footer data is loaded.
export const getStaticProps: GetStaticProps<{ layout: LayoutData }> = async () => ({
  props: { layout: await getLayoutData() },
  revalidate: REVALIDATE_SECONDS,
});
