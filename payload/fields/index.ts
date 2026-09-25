import type { ArrayField, Field, GroupField, SelectField, TextField, UploadField } from "payload";

/** A button or text link: `{ label, href }`. */
export function linkField(name: string, label?: string): GroupField {
  return {
    name,
    label,
    type: "group",
    admin: { hideGutter: true },
    fields: [
      {
        type: "row",
        fields: [
          { name: "label", type: "text", required: true, admin: { width: "50%" } },
          {
            name: "href",
            label: "Link",
            type: "text",
            required: true,
            admin: {
              width: "50%",
              description: "A page path such as /bookings, or a section anchor such as #contact.",
            },
          },
        ],
      },
    ],
  };
}

/** A list of links, e.g. navigation menus. */
export function linkListField(name: string, label?: string, extra: Partial<ArrayField> = {}): ArrayField {
  return {
    name,
    label,
    type: "array",
    labels: { singular: "Link", plural: "Links" },
    admin: { initCollapsed: true },
    fields: [
      {
        type: "row",
        fields: [
          { name: "label", type: "text", required: true, admin: { width: "50%" } },
          { name: "href", label: "Link", type: "text", required: true, admin: { width: "50%" } },
        ],
      },
    ],
    ...extra,
  } as ArrayField;
}

/** Heading made of a regular part and a handwritten "script" accent. */
export function headingFields(options: { titleLabel?: string; scriptRequired?: boolean } = {}): Field[] {
  return [
    {
      type: "row",
      fields: [
        {
          name: "title",
          label: options.titleLabel ?? "Heading",
          type: "text",
          required: true,
          admin: { width: "50%" },
        },
        {
          name: "script",
          label: "Script accent",
          type: "text",
          required: options.scriptRequired ?? false,
          admin: { width: "50%", description: "Shown in the handwritten accent font." },
        },
      ],
    },
  ];
}

/** Short list of plain text items (trust chips, facts, etc.). */
export function textListField(
  name: string,
  label: string,
  options: { singular?: string; plural?: string; minRows?: number; maxRows?: number; description?: string } = {},
): ArrayField {
  return {
    name,
    label,
    type: "array",
    labels: { singular: options.singular ?? "Item", plural: options.plural ?? "Items" },
    minRows: options.minRows,
    maxRows: options.maxRows,
    admin: { description: options.description },
    fields: [{ name: "text", type: "text", required: true }],
  };
}

export function textField(name: string, label?: string, extra: Partial<TextField> = {}): TextField {
  return { name, label, type: "text", required: true, ...extra } as TextField;
}

export function imageField(name: string, label: string, extra: Partial<UploadField> = {}): UploadField {
  return { name, label, type: "upload", relationTo: "media", ...extra } as UploadField;
}

/** Decorative icon set that ships with the site design (files live in /public/assets). */
export const valueIconOptions = [
  { label: "At your pace (hourglass)", value: "pace" },
  { label: "Entirely personal (heart)", value: "personal" },
  { label: "Holistic (leaf)", value: "holistic" },
];

export function iconChoiceField(name = "icon", label = "Icon"): SelectField {
  return { name, label, type: "select", required: true, options: valueIconOptions };
}

export function seoField(options: { withImage?: boolean } = {}): GroupField {
  return {
    name: "seo",
    label: "SEO",
    type: "group",
    fields: [
      { name: "title", label: "Page title", type: "text", required: true },
      { name: "description", label: "Meta description", type: "textarea", required: true },
      ...(options.withImage
        ? [imageField("image", "Social share image", { admin: { description: "Optional — defaults to the site share image." } })]
        : []),
    ],
  };
}
