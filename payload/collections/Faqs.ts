import type { CollectionConfig } from "payload";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  orderable: true,
  admin: {
    useAsTitle: "question",
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "Shown on the home and contact pages, in this order. Drag to reorder.",
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
  ],
};
