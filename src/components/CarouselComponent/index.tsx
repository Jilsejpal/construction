"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ImageMedia } from "../Media/ImageMedia";
import { Media } from "@/payload-types";
import { cn } from "@/utilities/ui";

type Props = {
  images: (number | Media)[] | null | undefined;
  className?: string | undefined;
  imgClassName?: string | undefined;
  indicators?: boolean;
};

const CarouselComponent = ({
  images,
  className,
  indicators,
  imgClassName,
}: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="max-w-7xl w-full">
        <Carousel
          setApi={setApi}
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
                    imgClassName={cn(
                      "w-full aspect-square object-cover",
                      imgClassName,
                    )}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 bg-transparent hover:bg-transparent border-none" />
          <CarouselNext className="right-4 bg-transparent hover:bg-transparent border-none" />
        </Carousel>

        {indicators && (
          <div className="flex justify-center items-center mt-8 gap-2">
            {images &&
              images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "rounded-full bg-secondary-foreground hover:bg-secondary-foreground cursor-pointer transition-all duration-300",
                    current === index ? "w-2.5 h-2.5" : "w-2 h-2",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
