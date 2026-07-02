import { BookingsPageContent } from "@/components/pages/BookingsPageContent";
import { SeoHead } from "@/components/layout/SeoHead";

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
