import type { CollectionConfig } from "payload";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const Events: CollectionConfig = {
  slug: "events",
  labels: { singular: "Event", plural: "Events" },
  defaultSort: "date",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "date", "location"],
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description:
      "Shown together in one “Upcoming events” list on the home page, soonest first. Each one has an Enquire button that pre-fills the contact form with its details. Events drop off the site automatically the day after they happen.",
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  fields: [
    { name: "title", type: "text", required: true, admin: { description: "e.g. “Mini tarot readings”." } },
    {
      name: "type",
      type: "select",
      required: true,
      defaultValue: "workshop",
      options: [
        { label: "Workshop", value: "workshop" },
        { label: "Live session", value: "live-session" },
        { label: "Pamper event", value: "pamper-event" },
        { label: "Readings", value: "readings" },
        { label: "Other", value: "other" },
      ],
      admin: { description: "Shown as a label on the list, and added to the enquiry form when someone enquires." },
    },
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
