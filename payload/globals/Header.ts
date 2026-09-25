import type { GlobalConfig } from "payload";
import { linkField, linkListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "The menu at the top of every page, including the Services dropdown.",
  },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    linkListField("linksBeforeServices", "Links before the Services menu"),
    {
      name: "servicesLabel",
      label: "Services menu label",
      type: "text",
      required: true,
    },
    linkListField("linksAfterServices", "Links after the Services menu"),
    linkField("bookCta", "Book button"),
    linkField("mobileContactCta", "Mobile menu contact button"),
    {
      name: "dropdown",
      label: "Services dropdown",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            { name: "script", label: "Script accent", type: "text", required: true },
          ],
        },
        { name: "lead", type: "textarea", required: true },
        linkField("cta", "Button"),
        { name: "footnote", type: "text", required: true, admin: { description: "Text before the footnote link." } },
        linkField("footnoteLink", "Footnote link"),
      ],
    },
  ],
};
