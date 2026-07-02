import { Contact } from "@/components/sections/Contact";
import { Faqs } from "@/components/sections/Faqs";
import { SeoHead } from "@/components/layout/SeoHead";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact — Opal Life Coaching"
        description="Get in touch or book a session with Cara."
        path="/contact"
      />
      <Contact offsetHeader />
      <Faqs />
    </>
  );
}
