import type { GetStaticProps } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { SeoHead } from "@/components/layout/SeoHead";
import { getAboutPageProps, REVALIDATE_SECONDS, type AboutPageProps } from "@/lib/cms";

export default function AboutPage({ about, closingCta }: AboutPageProps) {
  return (
    <>
      <SeoHead title={about.seo.title} description={about.seo.description} path="/about" />
      <AboutPageContent content={about} closingCta={closingCta} />
    </>
  );
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => ({
  props: await getAboutPageProps(),
  revalidate: REVALIDATE_SECONDS,
});
