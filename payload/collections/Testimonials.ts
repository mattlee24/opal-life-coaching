import type { CollectionConfig } from "payload";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  orderable: true,
  admin: {
    useAsTitle: "theme",
    defaultColumns: ["theme", "cite", "spotlight"],
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "The home page shows the first three, in this order. Drag to reorder.",
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  fields: [
    {
      name: "theme",
      type: "text",
      required: true,
      admin: { description: "Short headline, e.g. “Feeling calmer & clearer”." },
    },
    { name: "quote", type: "textarea", required: true },
    {
      name: "cite",
      label: "Attribution",
      type: "text",
      required: true,
      admin: { description: "e.g. “Coaching client”." },
    },
    {
      name: "spotlight",
      type: "checkbox",
      defaultValue: false,
      admin: { description: "Highlight this card (works best on the middle card)." },
    },
  ],
};
