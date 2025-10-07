"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ImageMedia } from "../Media/ImageMedia";
import { Media } from "@/payload-types";

type Props = {
  images: (number | Media)[];
};

export default function ApartmentCarousel({ images }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex items-center justify-center p-4 md:p-8 bg-card">
      <div className="w-full max-w-6xl py-10">
        <div className="relative">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {images &&
                images.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-full lg:h-[700px] w-full overflow-hidden rounded-lg shadow-2xl">
                      <ImageMedia resource={slide} imgClassName="h-full" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 lg:-left-12 bg-white lg:bg-transparent hover:text-secondary border-none text-secondary h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            <CarouselNext className="right-4 lg:-right-12 bg-white lg:bg-transparent hover:text-secondary border-none text-secondary h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </Carousel>

          {/* Static text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 lg:p-16 pointer-events-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-wide">
              Les appartments
            </h1>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {images &&
            images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-stone-800" : "bg-stone-400/50"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
