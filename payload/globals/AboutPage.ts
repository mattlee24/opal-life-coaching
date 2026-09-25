import type { GlobalConfig } from "payload";
import { headingFields, iconChoiceField, imageField, linkField, seoField, textListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "About page",
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
            { name: "badge", label: "Photo badge", type: "text", required: true },
            imageField("portrait", "Portrait", { required: true }),
          ],
        },
        {
          label: "My story",
          name: "story",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "sub", label: "Subheading", type: "textarea", required: true },
            { name: "lead", label: "Opening paragraph", type: "textarea", required: true },
            { name: "detail", label: "Second paragraph", type: "textarea", required: true },
            textListField("facts", "Facts", { singular: "Fact", plural: "Facts", maxRows: 4 }),
            imageField("image", "Photo", { required: true }),
            { name: "caption", type: "text", required: true },
          ],
        },
        {
          label: "What guides me",
          name: "essence",
          fields: [
            { name: "kicker", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "intro", type: "textarea", required: true },
            { name: "watermark", type: "text", admin: { description: "Large faint background words." } },
            {
              name: "items",
              type: "array",
              labels: { singular: "Principle", plural: "Principles" },
              minRows: 3,
              maxRows: 3,
              fields: [
                {
                  type: "row",
                  fields: [
                    iconChoiceField(),
                    {
                      name: "accent",
                      label: "Colour accent",
                      type: "select",
                      required: true,
                      options: [
                        { label: "Personal (lilac)", value: "personal" },
                        { label: "Holistic (sage)", value: "holistic" },
                        { label: "Pace (opal)", value: "pace" },
                      ],
                    },
                  ],
                },
                { name: "title", type: "text", required: true },
                { name: "text", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "My approach",
          name: "path",
          fields: [
            { name: "kicker", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "intro", type: "textarea", required: true },
            {
              name: "steps",
              type: "array",
              labels: { singular: "Step", plural: "Steps" },
              minRows: 3,
              maxRows: 3,
              fields: [
                {
                  type: "row",
                  fields: [
                    iconChoiceField(),
                    {
                      name: "accent",
                      label: "Colour accent",
                      type: "select",
                      required: true,
                      options: [
                        { label: "Coaching (lilac)", value: "coaching" },
                        { label: "Tarot", value: "tarot" },
                        { label: "Reiki", value: "reiki" },
                      ],
                    },
                    { name: "tag", type: "text", required: true },
                  ],
                },
                { name: "title", type: "text", required: true },
                { name: "text", type: "textarea", required: true },
                { name: "note", type: "text", required: true },
              ],
            },
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
