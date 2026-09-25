import type { GlobalConfig } from "payload";
import { headingFields, linkField, textListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const ClosingCta: GlobalConfig = {
  slug: "closing-cta",
  label: "Closing invitation",
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "The “Take the first step” block at the bottom of the About and service pages.",
  },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    { name: "eyebrow", type: "text", required: true },
    ...headingFields({ scriptRequired: true }),
    { name: "lead", type: "textarea", required: true },
    textListField("assurances", "Assurances", { singular: "Assurance", plural: "Assurances", maxRows: 4 }),
    {
      type: "row",
      fields: [
        { name: "cardTitle", label: "Card title", type: "text", required: true },
        { name: "cardText", label: "Card text", type: "text", required: true },
      ],
    },
    linkField("primaryCta", "Primary button"),
    linkField("secondaryCta", "Secondary button"),
  ],
};
