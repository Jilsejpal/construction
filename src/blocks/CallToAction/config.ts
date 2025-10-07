import type { Block } from "payload";

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import { linkGroup } from "../../fields/linkGroup";
import {
  TextColorFeature,
  TextFontFamilyFeature,
  TextSizeFeature,
} from "payload-lexical-typography";

export const CallToAction: Block = {
  slug: "cta",
  interfaceName: "CallToActionBlock",
  fields: [
    {
      name: "select",
      type: "select",
      localized: true,
      options: [
        {
          label: "Benefit Section",
          value: "benefit_section",
        },
        {
          label: "Specifications",
          value: "specifications",
        },
        {
          label: "Other section",
          value: "other_section",
        },
      ],
    },
    {
      name: "richText",
      type: "richText",
      localized: true,
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
      appearances: ["default", "outline"],
      overrides: {
        localized: true,
        admin: {
          condition: (_, { select }) => {
            return select === "other_section" || select === "specifications";
          },
        },
        maxRows: 2,
      },
    }),
    {
      name: "items",
      type: "array",
      localized: true,
      admin: {
        condition: (_, { select }) => {
          return select === "benefit_section";
        },
      },
      fields: [
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          localized: true,
        },
        {
          name: "title",
          type: "text",
          localized: true,
        },
        {
          name: "description",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "lifestyle",
      localized: true,
      type: "array",
      maxRows: 1,
      admin: {
        condition: (_, { select }) => {
          return select === "specifications";
        },
      },
      fields: [
        {
          name: "images",
          type: "upload",
          relationTo: "media",
          hasMany: true,
          localized: true,
        },
        {
          name: "richText",
          type: "richText",
          localized: true,
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
      ],
    },
    {
      name: "facilities",
      type: "array",
      localized: true,
      admin: {
        condition: (_, { select }) => {
          return select === "specifications";
        },
      },
      fields: [
        {
          name: "carouselImages",
          type: "upload",
          relationTo: "media",
          hasMany: true,
          localized: true,
        },
        {
          name: "displayImage",
          type: "upload",
          relationTo: "media",
          localized: true,
        },
        {
          name: "richText",
          type: "richText",
          localized: true,
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
      ],
    },
  ],
  labels: {
    plural: "Calls to Action",
    singular: "Call to Action",
  },
};
