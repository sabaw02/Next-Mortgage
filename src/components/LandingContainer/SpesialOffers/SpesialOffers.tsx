"use client";
import Image from "next/image";
import React, { FC } from "react";
import Frame from "../../../assets/images/Frame.png";
import Timer from "../../../assets/images/spesialoffers/timer.png";
import square from "@/assets/images/landing/Squre.svg";
import Button from "../../ui/button/button";
import { IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideShow from "../../ui/slideShow/slideShow";
import { GetSpecialOffers } from "./GetSpesialOffers";
import Link from "next/link";
import MainCardSkeleton from "@/components/ui/skeleton/mainCardSkeleton";
import { HousesProps } from "@/types";

const SpesialOffers: FC<HousesProps> = ({ houses }) => {
  const icon = <IoIosArrowBack className="w-6 h-6" />;

  return (
    <div className=" flex mt-32 sm:mt-0 items-center justify-center w-full h-155.25 relative mb-32">
      <Image
        className="max-[1050px]:hidden absolute top-8 -right-20 rotate-30 "
        src={square}
        alt="not-found"
      />
      <Image
        className="max-[1050px]:hidden absolute top-120 -right-20 rotate-30 "
        src={square}
        alt="not-found"
      />

      {/* کانتینر اصلی تخفیفات */}
      <div className=" items-center justify-center w-full h-130.25 xl:px-32">
        {/*قسمت تایتل تخفیفات*/}
        <div className="items-center flex justify-between h-30.25">
          <div
            style={{ animationDuration: "1s" }}
            className="hidden animate-pulse items-center justify-center sm:flex gap-2 w-28 sm:w-37 h-10 sm:h-12 bg-[#F13B3B] hover:rotate-3 rounded-[20px] shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] "
          >
            <p className="max-[600px]:text-[14px] max-[1400px]:text-[16px] text-[22px] font-semibold text-[#FFFFFF]">
              ۱۲:۴۰:۴۲
            </p>
            <Image
              className="max-[100px]:hidden"
              src={Timer}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <div className=" max-[710px]:w-[50%] max-[888px]:w-150 mx-auto w-200 relative flex">
            <Image
              className=" max-[1050px]:hidden absolute bottom-5"
              src={Frame}
              alt=""
            />
            <div className="max-[500px]:w-50 mx-auto w-52 sm:w-[256px] border-b-2 border-b-[#D9D9D9] ">
              <h2 className="max-[500px]:w-35 text-center mx-auto w-32 sm:w-42 border-b-2 border-b-[#194C7B] text-[18px] sm:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
                تخفیفات ویژه
              </h2>
            </div>
            <Image
              className="max-[1050px]:hidden absolute bottom-14 left-0 "
              src={Frame}
              alt=""
            />
          </div>
          <div className="hidden sm:block">
            <Link href={"/reserve"}>
              <Button
                icon={icon}
                iconPos="left"
                isOutline={false}
                text="مشاهده همه"
              />
            </Link>
          </div>
        </div>
        {/* قسمت بدنه تخفیفات */}
        <div className="h-auto w-full mt-8 mb-20  ">
          <SlideShow houses={houses} />
        </div>
      </div>

      <Image
        className="max-[1050px]:hidden absolute top-16 -left-26 -rotate-30 "
        src={square}
        alt="not-found"
      />
    </div>
  );
};
export default SpesialOffers;
