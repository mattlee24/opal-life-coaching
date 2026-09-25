import type { CollectionConfig } from "payload";
import { headingFields, imageField, seoField, textListField } from "../fields";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const serviceSlugOptions = [
  { label: "Life Coaching (/coaching)", value: "coaching" },
  { label: "Tarot Readings (/tarot)", value: "tarot" },
  { label: "Reiki Healing (/reiki)", value: "reiki" },
];

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Service", plural: "Services" },
  orderable: true,
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "tag"],
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description:
      "The three services. Each one powers its own page, its home page card and the Services menu. Drag to reorder.",
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Card & menu",
          fields: [
            {
              type: "row",
              fields: [
                { name: "title", type: "text", required: true, admin: { width: "50%" } },
                {
                  name: "slug",
                  label: "Page",
                  type: "select",
                  required: true,
                  unique: true,
                  options: serviceSlugOptions,
                  admin: {
                    width: "50%",
                    description: "Each service is tied to its own page and colour theme.",
                  },
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "shortName",
                  label: "Short name",
                  type: "text",
                  required: true,
                  admin: { width: "50%", description: "Used in the colour key on the home page, e.g. “Coaching”." },
                },
                {
                  name: "tag",
                  type: "text",
                  required: true,
                  admin: { width: "50%", description: "One-word theme, e.g. “Clarity”." },
                },
              ],
            },
            imageField("icon", "Icon", { required: true }),
            {
              name: "cardDescription",
              label: "Home page card text",
              type: "textarea",
              required: true,
            },
            {
              name: "navShort",
              label: "Services menu text",
              type: "textarea",
              required: true,
              admin: { description: "Short line shown in the header Services dropdown." },
            },
          ],
        },
        {
          label: "Page hero",
          fields: [
            {
              name: "hero",
              type: "group",
              fields: [
                { name: "eyebrow", type: "text", required: true },
                ...headingFields({ scriptRequired: true }),
                { name: "description", type: "textarea", required: true },
                textListField("trust", "Highlights", {
                  singular: "Highlight",
                  plural: "Highlights",
                  minRows: 1,
                  maxRows: 4,
                  description: "Short chips shown under the hero and in the booking section.",
                }),
                {
                  name: "tone",
                  type: "select",
                  defaultValue: "lavender",
                  options: [
                    { label: "Lavender", value: "lavender" },
                    { label: "Sage", value: "sage" },
                    { label: "Opal", value: "opal" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Page content",
          fields: [
            { name: "intro", label: "Introduction", type: "textarea", required: true },
            { name: "pullQuote", label: "Pull quote", type: "textarea", required: true },
            {
              name: "overview",
              type: "group",
              fields: [
                ...headingFields({ scriptRequired: true }),
                { name: "subline", type: "text", required: true },
              ],
            },
            {
              name: "benefits",
              type: "array",
              labels: { singular: "Benefit", plural: "Benefits" },
              minRows: 3,
              maxRows: 3,
              admin: { description: "Exactly three benefits — the middle one is highlighted." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "text", type: "textarea", required: true },
              ],
            },
            imageField("sessionsImage", "Booking section photo", {
              admin: {
                description: "Optional — defaults to the photo set in “Service page sections”.",
              },
            }),
          ],
        },
        {
          label: "SEO",
          fields: [seoField()],
        },
      ],
    },
    // Kept for the upcoming bookings work but hidden from editors until it is used
    // on the site. (These live outside the tabs so the database columns are unchanged.)
    {
      name: "sessions",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true },
        { name: "duration", type: "text", required: true },
        { name: "format", type: "text", required: true },
        { name: "description", type: "textarea" },
      ],
    },
    { ...textListField("expectations", "What to expect"), admin: { hidden: true } },
    {
      name: "faqs",
      label: "Service FAQs",
      type: "array",
      admin: { hidden: true },
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    { name: "bookingLabel", label: "Booking label", type: "text", admin: { hidden: true } },
  ],
};
