import type { GlobalConfig } from "payload";
import { headingFields, imageField, linkField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const ServicePageSections: GlobalConfig = {
  slug: "service-page-sections",
  label: "Service page layout",
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description:
      "Wording shared by the Coaching, Tarot and Reiki pages. Service-specific text is edited under Content → Services.",
  },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          name: "hero",
          fields: [linkField("primaryCta", "Primary button"), linkField("secondaryCta", "Secondary button")],
        },
        {
          label: "Overview",
          name: "overview",
          fields: [
            {
              name: "quote",
              label: "Pull quote (all service pages)",
              type: "textarea",
              admin: {
                description: "Shown on every service page. Put each paragraph on its own line. Leave empty to use each service's own pull quote.",
              },
            },
          ],
        },
        {
          label: "How it helps",
          name: "benefits",
          fields: [
            ...headingFields({ scriptRequired: true }),
            { name: "sub", label: "Subheading", type: "textarea", required: true },
          ],
        },
      ],
    },
  ],
};
