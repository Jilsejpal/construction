import type { Field } from "payload";

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import { linkGroup } from "@/fields/linkGroup";
import {
  TextColorFeature,
  TextFontFamilyFeature,
  TextSizeFeature,
} from "payload-lexical-typography";

export const hero: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "lowImpact",
      label: "Type",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "High Impact",
          value: "highImpact",
        },
        {
          label: "Medium Impact",
          value: "mediumImpact",
        },
        {
          label: "Low Impact",
          value: "lowImpact",
        },
      ],
      required: true,
    },
    {
      name: "richText",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            AlignFeature(),
            TextSizeFeature(),
            TextColorFeature({
              colors: ["#92846B", "#313131"],
            }),
            HeadingFeature({
              enabledHeadingSizes: ["h1", "h2", "h3", "h4", "h5", "h6"],
            }),
            TextFontFamilyFeature({
              fontFamilies: [
                {
                  value: "Poppins",
                  label: "Poppins",
                },
                {
                  value: "Playfair Display",
                  label: "Playfair Display",
                },
              ],
            }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: "media",
      type: "upload",
      admin: {
        condition: (_, { type } = {}) =>
          ["highImpact", "mediumImpact"].includes(type),
      },
      relationTo: "media",
      required: true,
      hasMany: true,
    },
  ],
  label: false,
};
