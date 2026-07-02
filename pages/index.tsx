import { Contact } from "@/components/sections/Contact";
import { Faqs } from "@/components/sections/Faqs";
import { Hero } from "@/components/sections/Hero";
import { MeetCara } from "@/components/sections/MeetCara";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Values } from "@/components/sections/Values";
import { SeoHead } from "@/components/layout/SeoHead";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SeoHead
        title={`${site.name} — ${site.tagline}`}
        description="Holistic life coaching, Reiki healing and tarot readings — gentle, personal support when you're ready to move forward."
      />
      <Hero />
      <Values />
      <Services />
      <MeetCara />
      <Testimonials />
      <Contact />
      <Faqs />
    </>
  );
}
