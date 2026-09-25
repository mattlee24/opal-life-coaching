import type { GlobalConfig } from "payload";
import { headingFields, seoField, textListField } from "../fields";
import { revalidateGlobalHooks } from "../hooks/revalidateSite";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  label: "Contact page",
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "The contact and FAQ sections appear on both the Contact page and the Home page.",
  },
  access: { read: () => true },
  hooks: revalidateGlobalHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Contact section",
          name: "contact",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            ...headingFields({ scriptRequired: true }),
            { name: "lead", type: "textarea", required: true },
            {
              type: "row",
              fields: [
                { name: "emailLabel", label: "Email label", type: "text", required: true },
                { name: "emailNote", label: "Email note", type: "text", required: true },
              ],
            },
            { name: "socialLabel", label: "Social label", type: "text", required: true },
            {
              type: "row",
              fields: [
                { name: "locationTitle", label: "Location title", type: "text", required: true },
                { name: "locationText", label: "Location text", type: "text", required: true },
              ],
            },
            textListField("trust", "Reassurances", { singular: "Reassurance", plural: "Reassurances", maxRows: 4 }),
          ],
        },
        {
          label: "Contact form",
          name: "form",
          description: "The form opens the visitor's email app, addressed to the email in Site settings.",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "note", type: "textarea", required: true },
            { name: "promise", type: "text", required: true },
            {
              type: "row",
              fields: [
                { name: "nameLabel", label: "Name label", type: "text", required: true },
                { name: "namePlaceholder", label: "Name placeholder", type: "text" },
              ],
            },
            {
              type: "row",
              fields: [
                { name: "emailLabel", label: "Email label", type: "text", required: true },
                { name: "emailPlaceholder", label: "Email placeholder", type: "text" },
              ],
            },
            { name: "emailHint", label: "Email hint", type: "text" },
            {
              type: "row",
              fields: [
                { name: "serviceLabel", label: "Service label", type: "text", required: true },
                { name: "servicePlaceholder", label: "Service placeholder", type: "text", required: true },
              ],
            },
            {
              name: "serviceOptions",
              label: "Service options",
              type: "array",
              labels: { singular: "Option", plural: "Options" },
              minRows: 1,
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "label", type: "text", required: true },
                    {
                      name: "value",
                      type: "text",
                      required: true,
                      admin: { description: "Short code sent with the message, e.g. “coaching”." },
                    },
                  ],
                },
              ],
            },
            {
              type: "row",
              fields: [
                { name: "messageLabel", label: "Message label", type: "text", required: true },
                { name: "submitLabel", label: "Button label", type: "text", required: true },
              ],
            },
            { name: "messagePlaceholder", label: "Message placeholder", type: "textarea" },
          ],
        },
        {
          label: "FAQs section",
          name: "faqsSection",
          description: "The questions themselves are edited under Content → FAQs.",
          fields: [
            { name: "eyebrow", type: "text", required: true },
            { name: "title", label: "Heading", type: "text", required: true },
            { name: "lead", type: "textarea", required: true },
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
