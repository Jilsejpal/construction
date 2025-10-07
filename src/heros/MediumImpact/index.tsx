import React from "react";
import type { Page } from "@/payload-types";
import { ImageMedia } from "@/components/Media/ImageMedia";

export const MediumImpactHero: React.FC<Page["hero"]> = ({ media }) => {
  return (
    <div className="-mt-[4rem]" data-theme="dark">
      <ImageMedia
        resource={media?.[0]}
        imgClassName="w-full aspect-[3/1] object-cover"
      />
    </div>
  );
};
