import React from "react";

import type { Page } from "@/payload-types";

import RichText from "@/components/RichText";

type LowImpactHeroType =
  | {
      children?: React.ReactNode;
      richText?: never;
    }
  | (Omit<Page["hero"], "richText"> & {
      children?: never;
      richText?: Page["hero"]["richText"];
    });

export const LowImpactHero: React.FC<LowImpactHeroType> = ({
  children,
  richText,
}) => {
  return (
    <div className="container">
      <div className="pb-20">
        {children ||
          (richText && (
            <RichText
              data={richText}
              enableGutter={false}
              className="text-secondary"
            />
          ))}
      </div>
    </div>
  );
};
