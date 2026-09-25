import type { GlobalConfig } from "payload";
import { imageField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site settings",
  admin: { group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */ },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", label: "Business name", type: "text", required: true },
        { name: "tagline", type: "text", required: true },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "email", type: "email", required: true },
        {
          name: "location",
          type: "text",
          required: true,
          admin: { description: "Used in search engine data, e.g. “Chichester & Eastergate, West Sussex”." },
        },
      ],
    },
    {
      name: "social",
      label: "Social links",
      type: "group",
      admin: { description: "Leave blank to hide. Icons appear in the contact section and footer." },
      fields: [
        {
          type: "row",
          fields: [
            { name: "facebook", label: "Facebook URL", type: "text" },
            { name: "instagram", label: "Instagram URL", type: "text" },
          ],
        },
      ],
    },
    {
      name: "seo",
      label: "Default SEO",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Default description",
          type: "textarea",
          required: true,
          admin: { description: "Used when a page has no description of its own." },
        },
        imageField("image", "Default social share image", { required: true }),
      ],
    },
  ],
};
