import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { SeoHead } from "@/components/layout/SeoHead";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Cara — Opal Life Coaching"
        description="Meet Cara — holistic life coach, Reiki healer and tarot reader in West Sussex."
        path="/about"
      />
      <AboutPageContent />
    </>
  );
}
