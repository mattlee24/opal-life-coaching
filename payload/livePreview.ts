import type { RootLivePreviewConfig } from "payload";
import { LIVE_PREVIEW_PARAM } from "../lib/live-preview-shared";
import { siteOrigin } from "./utils/siteOrigin";

/**
 * What to show in the Live Preview pane for each global. Pages show the full page
 * (and scroll to the section being edited); shared components show on their own
 * via pages/preview/[component].tsx.
 */
const globalPreviewPaths: Record<string, string> = {
  "home-page": "/",
  "about-page": "/about",
  "contact-page": "/contact",
  "service-page-sections": "/coaching",
  "closing-cta": "/preview/closing-cta",
  header: "/preview/header",
  footer: "/preview/footer",
  "site-settings": "/",
};

function collectionPreviewPath(slug: string, data: Record<string, unknown>) {
  switch (slug) {
    case "services":
      return typeof data.slug === "string" ? `/${data.slug}` : "/coaching";
    case "testimonials":
      return "/preview/testimonials";
    case "faqs":
      return "/preview/faqs";
    default:
      return null;
  }
}

export const livePreview: RootLivePreviewConfig = {
  openByDefault: true,
  globals: Object.keys(globalPreviewPaths),
  collections: ["services", "testimonials", "faqs"],
  breakpoints: [
    { name: "mobile", label: "Mobile", width: 390, height: 844 },
    { name: "tablet", label: "Tablet", width: 820, height: 1180 },
    { name: "desktop", label: "Desktop", width: 1440, height: 900 },
  ],
  url: ({ data, collectionConfig, globalConfig, req }) => {
    const origin = siteOrigin(req);
    const path = globalConfig
      ? globalPreviewPaths[globalConfig.slug]
      : collectionConfig
        ? collectionPreviewPath(collectionConfig.slug, data)
        : null;
    if (!origin || !path) return null;

    // The query flag switches on live updates in the page; the id tells a list
    // (testimonials, FAQs) which item is being edited.
    const [pathname, hash] = path.split("#");
    const params = new URLSearchParams({ [LIVE_PREVIEW_PARAM]: "1" });
    if (collectionConfig && data.id) params.set("previewId", String(data.id));
    return `${origin}${pathname}?${params.toString()}${hash ? `#${hash}` : ""}`;
  },
};
