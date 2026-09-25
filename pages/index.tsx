import type { GetStaticProps } from "next";
import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";
import { Faqs } from "@/components/sections/Faqs";
import { MeetCara } from "@/components/sections/MeetCara";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Values } from "@/components/sections/Values";
import { SeoHead } from "@/components/layout/SeoHead";
import { getHomePageProps, REVALIDATE_SECONDS, type HomePageProps } from "@/lib/cms";

export default function HomePage({ layout, home, contact, testimonials, faqs }: HomePageProps) {
  return (
    <>
      <SeoHead title={home.seo.title} description={home.seo.description} path="/" />
      <Hero content={home.hero} />
      <Values values={home.values} />
      <Services content={home.servicesSection} services={layout.services} />
      <MeetCara content={home.meetCara} />
      <Testimonials content={home.testimonialsSection} testimonials={testimonials} />
      <Contact content={contact} />
      <Faqs content={contact.faqsSection} faqs={faqs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => ({
  props: await getHomePageProps(),
  revalidate: REVALIDATE_SECONDS,
});
