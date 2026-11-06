import type { GlobalConfig } from "payload";
import { linkField, linkListField, textListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "The links and contact details at the bottom of every page.",
  },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    { name: "blurb", label: "Brand description", type: "textarea", required: true },
    { name: "brandScript", label: "Brand script line", type: "text", required: true },
    { name: "exploreHeading", label: "Links heading", type: "text", required: true },
    linkListField("exploreLinks", "Links"),
    { name: "contactHeading", label: "Contact heading", type: "text", required: true },
    textListField("locationLines", "Location lines", { singular: "Line", plural: "Lines" }),
    linkField("cta", "Button"),
    {
      name: "copyrightName",
      label: "Copyright name",
      type: "text",
      required: true,
      admin: { description: "The current year is added automatically." },
    },
  ],
};
