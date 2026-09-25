/** Query flag added to Live Preview URLs so pages only listen for edits inside the admin. */
export const LIVE_PREVIEW_PARAM = "livePreview";

/** Message the admin sends to the preview to show the section being edited. */
export const PREVIEW_SECTION_MESSAGE = "opal-preview-section";

/** Section names (see payload/admin/PreviewSectionSync.tsx) → elements on the site. */
export const previewSectionSelectors: Record<string, string> = {
  hero: ".hero, .page-hero",
  values: ".values",
  services: "#services",
  "meet-cara": ".meet-cara",
  testimonials: "#testimonials",
  contact: "#contact",
  "contact-form": "#contact-form",
  faqs: "#faqs",
  "about-hero": ".about-hero",
  story: ".about-story",
  essence: ".about-essence",
  path: ".about-path",
  overview: ".service-overview",
  benefits: ".service-benefits",
  sessions: ".service-sessions",
};
