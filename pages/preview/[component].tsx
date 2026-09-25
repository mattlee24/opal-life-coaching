import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { Faqs } from "@/components/sections/Faqs";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  getComponentPreviewProps,
  previewComponents,
  type ComponentPreviewProps,
  type PreviewComponent,
} from "@/lib/cms";

/**
 * Shows a single shared component on its own, for the admin's Live Preview pane
 * (see payload/livePreview.ts). Not linked from the site and never indexed.
 */
export default function ComponentPreview(props: ComponentPreviewProps) {
  const { component, home, contact, closingCta, testimonials, faqs } = props;

  return (
    <>
      <Head>
        <title>Preview — Opal Life Coaching</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      {component === "header" ? (
        <div className="min-h-[70vh] bg-[linear-gradient(180deg,#fcfbff_0%,#f3f0fa_100%)]">
          <Header />
        </div>
      ) : null}
      {component === "footer" ? <Footer /> : null}
      {component === "closing-cta" && closingCta ? <ClosingInvitationCta content={closingCta} /> : null}
      {component === "testimonials" && home ? (
        <Testimonials content={home.testimonialsSection} testimonials={testimonials} />
      ) : null}
      {component === "faqs" && contact ? <Faqs content={contact.faqsSection} faqs={faqs} /> : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ComponentPreviewProps> = async ({ params, res }) => {
  const component = params?.component as PreviewComponent;
  if (!previewComponents.includes(component)) return { notFound: true };
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  return { props: await getComponentPreviewProps(component) };
};
