"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { CommentBoxProps } from "@/types";
import TestMonialsCardSkeleton from "../skeleton/testMonialsCardSkeleton ";
import CommentBox from "@/components/LandingContainer/TestMonials/CommentBox";

const SlideShowComments: FC<CommentBoxProps> = ({ comments }) => {
  const swiperRef = useRef<any>(null);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);

  // if (loading) {
  //   return (
  //     <div>
  //       <div className="flex gap-10 justify-center items-center">
  //         {Array.from({ length: 3 }).map((_, idx) => (
  //           <div key={idx} className="flex-shrink-0 w-60 xs:w-90">
  //             <TestMonialsCardSkeleton />
  //           </div>
  //         ))}
  //       </div>
  //       <div  className="mb-10 mt-6 flex justify-center">
  //         <div className="h-10 w-74 bg-[#cbd5e1]/50 rounded-full animate-pulse"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={false}
        loop={true}
        onSlideChange={(swiper) => {
          setCenterSlideIndex(swiper.realIndex);
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCenterSlideIndex(swiper.realIndex);
        }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
            640: { slidesPerView: 1.75, spaceBetween: 70, centeredSlides: true },
            800: { slidesPerView: 2, spaceBetween: 10, centeredSlides: true },
            900: { slidesPerView: 2.25, spaceBetween: 10, centeredSlides: true },
            1000: { slidesPerView: 2.5, spaceBetween: 10, centeredSlides: true },
            1150: { slidesPerView: 2.75, spaceBetween: 10, centeredSlides: true },
            1250: { slidesPerView: 3, spaceBetween: 10, centeredSlides: true },
          }}
        className="center-track-swiper special-offers-swiper space-y-16"
      >
        {comments.slice(0, 5).map((item, index) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div className=" flex justify-center items-center w-full transition-all duration-300 comment-box-wrapper">
                <CommentBox
                  isCenter={index === centerSlideIndex}
                  imageSrc={item.user?.profilePicture}
                  title={item.title}
                  caption={item.caption}
                  userName={`${item.user?.firstName || ""} ${item.user?.lastName || ""}`.trim()}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SlideShowComments;
