/**
 * Server-only content fetching via Payload's Local API.
 * Use from getStaticProps / getServerSideProps only.
 */
import config from "@payload-config";
import { getPayload } from "payload";
import type {
  AboutPage,
  ClosingCta,
  ContactPage,
  Faq,
  HomePage,
  LayoutData,
  Service,
  ServicePageSection,
  ServiceSlug,
  Testimonial,
} from "@/lib/cms-types";
import { toSummary } from "@/lib/cms-types";

/** Fallback regeneration interval; edits in the admin revalidate pages immediately. */
export const REVALIDATE_SECONDS = 3600;

async function payload() {
  return getPayload({ config });
}

/** getStaticProps props must be plain JSON (no undefined, no class instances). */
function serialize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

async function findServices(): Promise<Service[]> {
  const client = await payload();
  const result = await client.find({ collection: "services", sort: "_order", depth: 1, limit: 10 });
  return result.docs;
}

export async function getLayoutData(): Promise<LayoutData> {
  const client = await payload();
  const [settings, header, footer, services] = await Promise.all([
    client.findGlobal({ slug: "site-settings", depth: 1 }),
    client.findGlobal({ slug: "header", depth: 0 }),
    client.findGlobal({ slug: "footer", depth: 0 }),
    findServices(),
  ]);
  return serialize({ settings, navigation: { header, footer }, services: services.map(toSummary) });
}

export type HomePageProps = {
  layout: LayoutData;
  home: HomePage;
  contact: ContactPage;
  testimonials: Testimonial[];
  faqs: Faq[];
};

export async function getHomePageProps(): Promise<HomePageProps> {
  const client = await payload();
  const [layout, home, contact, testimonials, faqs] = await Promise.all([
    getLayoutData(),
    client.findGlobal({ slug: "home-page", depth: 1 }),
    client.findGlobal({ slug: "contact-page", depth: 0 }),
    client.find({ collection: "testimonials", sort: "_order", limit: 3, depth: 0 }),
    client.find({ collection: "faqs", sort: "_order", limit: 50, depth: 0 }),
  ]);
  return serialize({ layout, home, contact, testimonials: testimonials.docs, faqs: faqs.docs });
}

export type AboutPageProps = {
  layout: LayoutData;
  about: AboutPage;
  closingCta: ClosingCta;
};

export async function getAboutPageProps(): Promise<AboutPageProps> {
  const client = await payload();
  const [layout, about, closingCta] = await Promise.all([
    getLayoutData(),
    client.findGlobal({ slug: "about-page", depth: 1 }),
    client.findGlobal({ slug: "closing-cta", depth: 0 }),
  ]);
  return serialize({ layout, about, closingCta });
}

export type ContactPageProps = {
  layout: LayoutData;
  contact: ContactPage;
  faqs: Faq[];
};

export async function getContactPageProps(): Promise<ContactPageProps> {
  const client = await payload();
  const [layout, contact, faqs] = await Promise.all([
    getLayoutData(),
    client.findGlobal({ slug: "contact-page", depth: 0 }),
    client.find({ collection: "faqs", sort: "_order", limit: 50, depth: 0 }),
  ]);
  return serialize({ layout, contact, faqs: faqs.docs });
}

export type ServicePageProps = {
  layout: LayoutData;
  service: Service;
  sections: ServicePageSection;
  closingCta: ClosingCta;
};

export async function getServicePageProps(slug: ServiceSlug): Promise<ServicePageProps | null> {
  const client = await payload();
  const [layout, services, sections, closingCta] = await Promise.all([
    getLayoutData(),
    client.find({ collection: "services", where: { slug: { equals: slug } }, depth: 1, limit: 1 }),
    client.findGlobal({ slug: "service-page-sections", depth: 1 }),
    client.findGlobal({ slug: "closing-cta", depth: 0 }),
  ]);
  const service = services.docs[0];
  if (!service) return null;
  return serialize({ layout, service, sections, closingCta });
}

/** Shared getStaticProps result for /coaching, /tarot and /reiki. */
export async function serviceStaticProps(slug: ServiceSlug) {
  const props = await getServicePageProps(slug);
  if (!props) return { notFound: true as const, revalidate: 60 };
  return { props, revalidate: REVALIDATE_SECONDS };
}

/** Components that can be previewed on their own in the admin's Live Preview. */
export const previewComponents = ["header", "footer", "closing-cta", "testimonials", "faqs"] as const;
export type PreviewComponent = (typeof previewComponents)[number];

export type ComponentPreviewProps = {
  layout: LayoutData;
  /** Tells _app to render only the page body (no site header/footer). */
  bare: true;
  component: PreviewComponent;
  home: HomePage | null;
  contact: ContactPage | null;
  closingCta: ClosingCta | null;
  testimonials: Testimonial[];
  faqs: Faq[];
};

export async function getComponentPreviewProps(component: PreviewComponent): Promise<ComponentPreviewProps> {
  const client = await payload();
  const [layout, home, contact, closingCta, testimonials, faqs] = await Promise.all([
    getLayoutData(),
    component === "testimonials" ? client.findGlobal({ slug: "home-page", depth: 0 }) : null,
    component === "faqs" ? client.findGlobal({ slug: "contact-page", depth: 0 }) : null,
    component === "closing-cta" ? client.findGlobal({ slug: "closing-cta", depth: 0 }) : null,
    component === "testimonials"
      ? client.find({ collection: "testimonials", sort: "_order", limit: 3, depth: 0 }).then((r) => r.docs)
      : [],
    component === "faqs" ? client.find({ collection: "faqs", sort: "_order", limit: 50, depth: 0 }).then((r) => r.docs) : [],
  ]);
  return serialize({ layout, bare: true as const, component, home, contact, closingCta, testimonials, faqs });
}
