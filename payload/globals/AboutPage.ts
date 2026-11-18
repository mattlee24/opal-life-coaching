import type { GlobalConfig } from "payload";
import { headingFields, iconChoiceField, imageField, linkField, seoField } from "../fields";
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
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            linkField("primaryCta", "Primary button"),
            linkField("secondaryCta", "Secondary button"),
            { name: "badge", label: "Photo badge", type: "text", required: true },
            imageField("portrait", "Portrait", { required: true }),
          ],
        },
        {
          label: "My story",
          name: "story",
          fields: [
            ...headingFields({ scriptRequired: true }),
            { name: "sub", label: "Subheading", type: "textarea", required: true },
            {
              name: "sections",
              label: "Text in the bordered panel",
              type: "array",
              labels: { singular: "Section", plural: "Sections" },
              minRows: 1,
              admin: {
                description: "Each section can have an optional heading. Leave a blank line in the text to start a new paragraph.",
              },
              fields: [
                { name: "heading", type: "text" },
                { name: "text", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "My approach",
          name: "path",
          fields: [
            ...headingFields({ scriptRequired: true }),
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
