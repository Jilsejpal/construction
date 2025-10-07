import React from "react";

import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import RichText from "@/components/RichText";
import { CMSLink } from "@/components/Link";
import { ImageMedia } from "@/components/Media/ImageMedia";
import CarouselComponent from "@/components/CarouselComponent";

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  links,
  select,
  richText,
  items,
  lifestyle,
  facilities,
}) => {
  if (select === "benefit_section") {
    return (
      <div className="bg-card py-10">
        <div className="container flex flex-col justify-center items-center p-4 gap-8">
          <div className="max-w-[48rem] flex items-center">
            {richText && (
              <RichText
                className="mb-0 text-secondary"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-[48rem] justify-items-center">
            {items &&
              items.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col items-center">
                    <div className="min-h-10">
                      <ImageMedia
                        resource={item.icon}
                        imgClassName="w-12 h-12"
                      />
                    </div>
                    <p className="text-xs font-semibold text-center">
                      {item.title}
                    </p>
                    <p className="text-xs text-center">{item.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  } else if (select === "specifications") {
    const lifestyleImages = lifestyle?.[0].images;
    const lifestyleRichText = lifestyle?.[0].richText;
    return (
      <div className="bg-secondary-foreground">
        <div className="container py-10">
          {richText && (
            <RichText
              className="mb-0 text-white"
              data={richText}
              enableGutter={false}
            />
          )}
          <div className="flex flex-col gap-8 pt-10 md:items-center hover:scale-105 transition">
            {(links || []).map(({ link }, i) => {
              return (
                <CMSLink
                  key={i}
                  size="lg"
                  {...link}
                  className="bg-inherit hover:bg-inherit border border-black font-semibold max-sm:text-[10px]"
                />
              );
            })}
          </div>
        </div>
        <div className="container grid md:grid-cols-3">
          <CarouselComponent
            images={lifestyleImages}
            className="md:col-span-2"
            indicators={false}
          />
          {richText && (
            <div className="bg-white p-10">
              <RichText
                className="mb-0 md:col-span-1"
                data={lifestyleRichText}
                enableGutter={false}
              />
            </div>
          )}
        </div>
        <div>Facilities</div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          <div className="max-w-[48rem] flex items-center">
            {richText && (
              <RichText className="mb-0" data={richText} enableGutter={false} />
            )}
          </div>
          <div className="flex flex-col gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};
