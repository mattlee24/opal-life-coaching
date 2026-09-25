import { PageHero } from "@/components/hero/PageHero";
import { SeoHead } from "@/components/layout/SeoHead";

export function NotFoundContent() {
  return (
    <>
      <SeoHead title="Page not found — Opal Life Coaching" noIndex />
      <PageHero
        eyebrow="Page not found"
        title="This path doesn't"
        script="lead anywhere"
        lead="The page you were looking for has moved or no longer exists. Let's get you back on track."
        primaryCta={{ href: "/", label: "Back to home" }}
        secondaryCta={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
