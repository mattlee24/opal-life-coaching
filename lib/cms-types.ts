/**
 * Client-safe helpers and types for content coming from Payload CMS.
 * (Server-only fetching lives in lib/cms.ts.)
 */
import type {
  AboutPage,
  ClosingCta,
  ContactPage,
  Faq,
  Footer,
  Header,
  HomePage,
  Media,
  Service,
  ServicePageSection,
  SiteSetting,
  Testimonial,
} from "@/payload-types";

export type {
  AboutPage,
  ClosingCta,
  ContactPage,
  Faq,
  Footer,
  Header,
  HomePage,
  Media,
  Service,
  ServicePageSection,
  SiteSetting,
  Testimonial,
};

export type ServiceSlug = Service["slug"];
export type ServiceVariant = "c" | "t" | "r";

/** Colour variant used by the design for each service page. */
export const serviceVariants: Record<ServiceSlug, ServiceVariant> = {
  coaching: "c",
  tarot: "t",
  reiki: "r",
};

export function serviceVariant(slug: ServiceSlug): ServiceVariant {
  return serviceVariants[slug];
}

export function serviceHref(slug: ServiceSlug) {
  return `/${slug}`;
}

export type CmsLink = { label: string; href: string };

/** Payload returns related media as an id until populated — only use populated docs. */
export function asMedia(value: number | Media | null | undefined): Media | null {
  return value && typeof value === "object" ? value : null;
}

export function mediaUrl(value: number | Media | null | undefined): string | null {
  return asMedia(value)?.url ?? null;
}

/** Flatten a Payload `{ text }[]` array into plain strings. */
export function textList(list: { text: string }[] | null | undefined): string[] {
  return (list ?? []).map((item) => item.text);
}

/** Built-in decorative icons that editors can choose from. */
export const valueIconSrc: Record<"pace" | "personal" | "holistic", string> = {
  pace: "/assets/icon-value-pace.svg",
  personal: "/assets/icon-value-personal.svg",
  holistic: "/assets/icon-value-holistic.svg",
};

/** Service data needed by the header dropdown, footer and home page cards. */
export type ServiceSummary = Pick<Service, "id" | "slug" | "title" | "shortName" | "tag" | "cardDescription" | "navShort"> & {
  icon: Media | null;
};

export function toSummary(service: Service): ServiceSummary {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    shortName: service.shortName,
    tag: service.tag,
    cardDescription: service.cardDescription,
    navShort: service.navShort,
    icon: asMedia(service.icon),
  };
}

/** Header and Footer globals, loaded together for every page. */
export type Navigation = { header: Header; footer: Footer };

export type LayoutData = {
  settings: SiteSetting;
  navigation: Navigation;
  services: ServiceSummary[];
};
