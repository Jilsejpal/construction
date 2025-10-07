import ApartmentCarousel from "@/components/AppartmentCarousel";
import { AppartmentGallery } from "@/payload-types";
import React from "react";

const AppartmentGalleryComponent = (images: AppartmentGallery) => {
  return <ApartmentCarousel images={images.images} />;
};

export default AppartmentGalleryComponent;
