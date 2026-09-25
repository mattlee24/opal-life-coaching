import type { Payload } from "payload";

/** Curated admin navigation, shared by the sidebar and the dashboard shortcuts. */
export type NavIconName =
  | "home"
  | "heart"
  | "mail"
  | "sparkles"
  | "compass"
  | "moon"
  | "leaf"
  | "panelTop"
  | "panelBottom"
  | "layers"
  | "sun"
  | "quote"
  | "help"
  | "image"
  | "settings"
  | "users";

export type NavItem = {
  href: string;
  label: string;
  description: string;
  icon: NavIconName;
};

export type NavSection = { title: string; description: string; items: NavItem[] };

const serviceIcons: Record<string, NavIconName> = { coaching: "compass", tarot: "moon", reiki: "leaf" };

/** Builds the navigation, linking each service page straight to its document. */
export async function getNavSections(payload: Payload): Promise<NavSection[]> {
  const services = await payload.find({
    collection: "services",
    sort: "_order",
    depth: 0,
    limit: 10,
    select: { title: true, slug: true },
  });

  return [
    {
      title: "Pages",
      description: "The content of each page on the website",
      items: [
        { href: "/admin/globals/home-page", label: "Home", icon: "home", description: "Hero, values, services intro, Meet Cara and more" },
        { href: "/admin/globals/about-page", label: "About", icon: "heart", description: "Your story, guiding principles and approach" },
        { href: "/admin/globals/contact-page", label: "Contact", icon: "mail", description: "Contact details, form wording and FAQ heading" },
        ...services.docs.map((service) => ({
          href: `/admin/collections/services/${service.id}`,
          label: service.title,
          icon: serviceIcons[service.slug] ?? "sparkles",
          description: "Page hero, overview, benefits, photo and menu card",
        })),
      ],
    },
    {
      title: "Components",
      description: "Sections shared across several pages",
      items: [
        { href: "/admin/globals/header", label: "Header", icon: "panelTop", description: "Menu links, book button and Services dropdown" },
        { href: "/admin/globals/footer", label: "Footer", icon: "panelBottom", description: "Welcome message, links and contact details" },
        { href: "/admin/globals/closing-cta", label: "Closing invitation", icon: "sun", description: "“Take the first step” — About and service pages" },
        { href: "/admin/globals/service-page-sections", label: "Service page layout", icon: "layers", description: "Wording shared by all three service pages" },
        { href: "/admin/collections/testimonials", label: "Testimonials", icon: "quote", description: "Kind words shown on the home page" },
        { href: "/admin/collections/faqs", label: "FAQs", icon: "help", description: "Questions on the home and contact pages" },
      ],
    },
    {
      title: "Library",
      description: "Files used around the site",
      items: [{ href: "/admin/collections/media/grid", label: "Photos", icon: "image", description: "Upload and replace images" }],
    },
    {
      title: "Settings",
      description: "Site-wide details",
      items: [
        { href: "/admin/globals/site-settings", label: "Site settings", icon: "settings", description: "Email, social links and default SEO" },
        { href: "/admin/collections/users", label: "Admin users", icon: "users", description: "People who can sign in here" },
      ],
    },
  ];
}
