import type { CollectionConfig } from "payload";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const Events: CollectionConfig = {
  slug: "events",
  labels: { singular: "Event", plural: "Events" },
  defaultSort: "date",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "location"],
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description:
      "Shown in “Upcoming events” on the home page, soonest first. Events drop off the site automatically the day after they happen.",
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  fields: [
    { name: "title", type: "text", required: true, admin: { description: "e.g. “Mini tarot readings”." } },
    {
      type: "row",
      fields: [
        {
          name: "date",
          type: "date",
          required: true,
          admin: { width: "50%", date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyyy" } },
        },
        {
          name: "time",
          type: "text",
          admin: { width: "50%", description: "Optional, e.g. “10am – 4pm”." },
        },
      ],
    },
    { name: "location", type: "text", admin: { description: "Optional, e.g. the shop name and town." } },
    { name: "description", type: "textarea", required: true },
  ],
};
