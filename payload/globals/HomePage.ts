import type { GlobalConfig } from "payload";
import { headingFields, iconChoiceField, imageField, linkField, seoField, textListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";
import { serviceSlugOptions } from "../collections/Services";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home page",
  admin: { group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */ },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          name: "hero",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            linkField("primaryCta", "Primary button"),
            linkField("secondaryCta", "Secondary button"),
            textListField("trust", "Highlights", { singular: "Highlight", plural: "Highlights", maxRows: 4 }),
            imageField("backgroundImage", "Background image", { required: true }),
          ],
        },
        {
          label: "Values",
          fields: [
            {
              name: "values",
              type: "array",
              labels: { singular: "Value", plural: "Values" },
              minRows: 3,
              maxRows: 3,
              fields: [
                iconChoiceField(),
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "Services",
          name: "servicesSection",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            { name: "cardButtonLabel", label: "Card button label", type: "text", required: true },
            {
              type: "row",
              fields: [
                { name: "footerBefore", label: "Footer text (before link)", type: "text", required: true },
                { name: "footerAfter", label: "Footer text (after link)", type: "text" },
              ],
            },
            linkField("footerLink", "Footer link"),
            {
              name: "cards",
              type: "array",
              labels: { singular: "Card", plural: "Cards" },
              minRows: 3,
              maxRows: 3,
              admin: {
                description:
                  "The three service cards shown here. These are separate from the same service's own page — update both if you want them to match.",
              },
              fields: [
                {
                  name: "slug",
                  label: "Links to page",
                  type: "select",
                  required: true,
                  options: serviceSlugOptions,
                },
                { name: "title", type: "text", required: true },
                { name: "tag", type: "text", required: true, admin: { description: "One-word theme, e.g. “Clarity”." } },
                imageField("icon", "Icon", { required: true }),
                { name: "cardDescription", label: "Card description", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "Meet Cara",
          name: "meetCara",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            {
              type: "row",
              fields: [
                { name: "greeting", type: "text", required: true, admin: { description: "e.g. “Hi, I'm”" } },
                { name: "name", type: "text", required: true, admin: { description: "Shown in script." } },
              ],
            },
            { name: "quote", type: "textarea", required: true },
            { name: "body", type: "textarea", required: true },
            textListField("essence", "Approach list", { singular: "Point", plural: "Points", maxRows: 4 }),
            linkField("cta", "Button"),
            { name: "note", type: "text", required: true },
            { name: "badge", label: "Photo badge", type: "text", required: true },
            imageField("portrait", "Portrait", { required: true }),
          ],
        },
        {
          label: "Testimonials",
          name: "testimonialsSection",
          description: "The quotes themselves are edited under Content → Testimonials.",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            { name: "footerText", type: "text", required: true },
            linkField("cta", "Button"),
          ],
        },
        {
          label: "SEO",
          fields: [seoField()],
        },
      ],
    },
  ],
};
