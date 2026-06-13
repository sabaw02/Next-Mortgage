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
import MainCardSkeleton from "../skeleton/mainCardSkeleton";

const SlideShowBuy: FC<SlideShowProps> = ({ houses = [], loading = false }) => {
  const swiperRef = useRef<any>(null);
  const housesMain = houses.slice(0, 5);

  if (loading) {
    return (
      <div>
        <div className="flex gap-10 justify-center items-center">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="shrink-0 w-60 xs:w-90">
              <MainCardSkeleton />
            </div>
          ))}
        </div>
        <div className="mb-10 mt-6 flex justify-center">
          <div className="h-10 w-74 bg-[#cbd5e1]/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          550: { slidesPerView: 1.25, spaceBetween: 0 },
          640: { slidesPerView: 1.25, spaceBetween: 70 },
          800: { slidesPerView: 1.75, spaceBetween: 10 },
          900: { slidesPerView: 2.25, spaceBetween: 10 },
          1000: { slidesPerView: 2.5, spaceBetween: 10 },
          1150: { slidesPerView: 2.75, spaceBetween: 10 },
          1250: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="special-offers-swiper space-y-16"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="flex justify-center items-center">
          {housesMain.map((item) => (
            <SwiperSlide key={item.id}>
              <MainCard {...item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SlideShowBuy;
