import type { Block } from "payload";

export const AppartmentGallery: Block = {
  slug: "appartmentGallery",
  interfaceName: "AppartmentGallery",
  fields: [
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: true,
      localized: true,
    },
  ],
};
