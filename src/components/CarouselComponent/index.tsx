"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageMedia } from "../Media/ImageMedia";
import { Media } from "@/payload-types";
import { cn } from "@/utilities/ui";

type Props = {
  images: (number | Media)[] | null | undefined;
  className?: string | undefined;
  indicators?: boolean;
};

const CarouselComponent = ({ images, className, indicators }: Props) => {
  return (
    <div className={cn("relative", className)}>
      <div className="max-w-7xl w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images &&
              images.map((amenity, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-[80%]">
                  <ImageMedia
                    resource={amenity}
                    imgClassName="w-full aspect-square object-cover"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-4 bg-transparent hover:bg-transparent border-none" />
          <CarouselNext className="right-4 bg-transparent hover:bg-transparent border-none" />
        </Carousel>

        {indicators && (
          <div className="flex justify-center mt-8 gap-2">
            {images &&
              images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer transition-colors"
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
