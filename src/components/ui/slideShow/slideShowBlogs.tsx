"use client";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import BlogsCard from "../cards/blogsCard/BlogsCard";
import { BlogsCardProps } from "@/types";

const SlideShowBlogs: FC<BlogsCardProps> = ({ blogs = []  }) => {
  const swiperRef = useRef<any>(null);
  const blogsMain = blogs.slice(0,5) ;

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
        // navigation={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1.75, spaceBetween: 70 },
          800: { slidesPerView: 2, spaceBetween: 10 },
          900: { slidesPerView: 2.25, spaceBetween: 10 },
          1000: { slidesPerView: 2.5, spaceBetween: 10 },
          1150: { slidesPerView: 2.75, spaceBetween: 10 },
          1250: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="special-offers-swiper space-y-1"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
          <div className="flex justify-center items-center ">
              {blogsMain.map((item :any) => (
                <SwiperSlide key={item.id}>
                  <BlogsCard {...item} />
                </SwiperSlide>
              ))}
          </div>

      </Swiper>
    </div>
  );
};

export default SlideShowBlogs;
