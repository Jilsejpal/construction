"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Media } from "@/payload-types";
import { ImageMedia } from "../Media/ImageMedia";

type Props = { heroImages: (number | Media)[] | null | undefined };

const BannerCarousel = ({ heroImages }: Props) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {heroImages &&
          heroImages.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <ImageMedia
                resource={image}
                imgClassName="w-full h-dvh aspect-[3/1] object-cover"
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerCarousel;
