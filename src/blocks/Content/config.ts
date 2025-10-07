import type { Block, Field } from "payload";

import {
  AlignFeature,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import {
  TextColorFeature,
  TextFontFamilyFeature,
  TextSizeFeature,
} from "payload-lexical-typography";

import { link } from "@/fields/link";
import { MediaBlock } from "../MediaBlock/config";

const columnFields: Field[] = [
  {
    name: "size",
    type: "select",
    defaultValue: "oneThird",
    options: [
      {
        label: "One Third",
        value: "oneThird",
      },
      {
        label: "Half",
        value: "half",
      },
      {
        label: "Two Thirds",
        value: "twoThirds",
      },
      {
        label: "Full",
        value: "full",
      },
    ],
  },
  {
    name: "image",
    type: "upload",
    relationTo: "media",
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
          BlocksFeature({
            blocks: [MediaBlock],
          }),
          EXPERIMENTAL_TableFeature(),
        ];
      },
    }),
    label: false,
  },
  {
    name: "enableLink",
    type: "checkbox",
  },
  link({
    overrides: {
      admin: {
        condition: (_data, siblingData) => {
          return Boolean(siblingData?.enableLink);
        },
      },
    },
  }),
];

export const Content: Block = {
  slug: "content",
  interfaceName: "ContentBlock",
  fields: [
    {
      name: "columns",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
};
