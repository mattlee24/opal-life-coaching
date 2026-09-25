import type { GetStaticProps } from "next";
import { Contact } from "@/components/sections/Contact";
import { Faqs } from "@/components/sections/Faqs";
import { SeoHead } from "@/components/layout/SeoHead";
import { getContactPageProps, REVALIDATE_SECONDS, type ContactPageProps } from "@/lib/cms";

export default function ContactPage({ contact, faqs }: ContactPageProps) {
  return (
    <>
      <SeoHead title={contact.seo.title} description={contact.seo.description} path="/contact" />
      <Contact content={contact} offsetHeader />
      <Faqs content={contact.faqsSection} faqs={faqs} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => ({
  props: await getContactPageProps(),
  revalidate: REVALIDATE_SECONDS,
});
