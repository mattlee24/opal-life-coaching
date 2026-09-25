import type { CollectionConfig } from "payload";
import { revalidateCollectionHooks } from "../hooks/revalidateSite";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Photo", plural: "Photos" },
  admin: {
    group: false /* shown via the custom sidebar (payload/admin/navItems.ts) */,
    description: "Photos and service icons used across the site.",
    components: {
      views: {
        // Visual grid at /admin/collections/media/grid (the sidebar opens this by default).
        grid: {
          Component: "/payload/admin/media/MediaGridView#MediaGridView",
          path: "/grid",
          exact: true,
        },
        list: {
          actions: ["/payload/admin/media/MediaViewToggle#MediaViewToggle"],
        },
      },
    },
  },
  access: {
    read: () => true,
  },
  hooks: revalidateCollectionHooks,
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      label: "Alt text",
      type: "text",
      required: true,
      admin: {
        description: "Describe the image for screen readers. Used wherever the image is meaningful.",
      },
    },
  ],
};
