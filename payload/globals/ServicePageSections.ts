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
              type: "row",
              fields: [
                { name: "captionScript", label: "Photo caption (script)", type: "text", required: true },
                { name: "captionNote", label: "Photo caption note", type: "text", required: true },
              ],
            },
          ],
        },
        {
          label: "How it helps",
          name: "benefits",
          fields: [
            { name: "kicker", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "sub", label: "Subheading", type: "textarea", required: true },
          ],
        },
        {
          label: "Next step",
          name: "sessions",
          fields: [
            { name: "kicker", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            {
              name: "steps",
              type: "array",
              labels: { singular: "Step", plural: "Steps" },
              minRows: 3,
              maxRows: 3,
              fields: [
                { name: "title", type: "text", required: true },
                { name: "text", type: "text", required: true },
              ],
            },
            linkField("primaryCta", "Primary button"),
            linkField("secondaryCta", "Secondary button"),
            { name: "caption", label: "Photo caption", type: "text", required: true },
            imageField("fallbackImage", "Default photo", {
              required: true,
              admin: { description: "Used when a service has no booking section photo of its own." },
            }),
          ],
        },
      ],
    },
  ],
};
