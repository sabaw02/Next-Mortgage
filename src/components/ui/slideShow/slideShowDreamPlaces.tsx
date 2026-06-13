"use client";
import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { SlideShowProps } from "@/types/slideShow.types";
import MainCard from "../cards/mainCard/mainCard";
import { IoIosArrowBack } from "react-icons/io";
import CategoryCard from "../cards/categoryCard/categoryCard";
import { CategoryCardProps } from "@/types";
import DreamCardSkeleton from "../skeleton/dreamCardSkeleton";
interface DreamLocation {
  id: number;
  areaName: string | null;
  lat: string;
  lng: string;
}

interface SlideShowDreamPlacesProps {
  locations: {
    data: DreamLocation[];
    totalCount: number;
  };
  loading?: boolean;
}
const SlideShowDreamPlaces: FC<SlideShowDreamPlacesProps> = ({
  locations,
  loading = false,
}) => {
  const swiperRef = useRef<any>(null);
  const dreamLocations = locations?.data?.slice(0, 5);
  // console.log("cnmvsldkvs", dreamLocations);

  if (loading) {
    return (
      <div>
        <div className="flex gap-5 justify-center items-center">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex ">
              <DreamCardSkeleton />
            </div>
          ))}
        </div>
        <div className="my-10 flex justify-center">
          <div className="h-10 w-74 bg-[#cbd5e1]/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1.75, spaceBetween: 10 },
          738: { slidesPerView: 2, spaceBetween: 7 },
          850: { slidesPerView: 2.5, spaceBetween: 10 },
          990: { slidesPerView: 2.75, spaceBetween: 10 },
          1130: { slidesPerView: 3.25, spaceBetween: 10 },
          1250: { slidesPerView: 3.75, spaceBetween: 10 },
          1350: { slidesPerView: 4, spaceBetween: 10 },
        }}
        className="dream-places-swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="flex justify-center items-center">
          {dreamLocations.map((item) => (
            <SwiperSlide key={item.id}>
              <CategoryCard {...item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default SlideShowDreamPlaces;
