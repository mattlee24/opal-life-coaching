import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
  },
  auth: true,
  fields: [{ name: "name", type: "text" }],
};
