import React, { FC } from "react";
import defaultImg from "./../../../../assets/images/defImg.jpg";
import heart from "./../../../../assets/icons/cards/heart.svg";
import locationPic from "./../../../../assets/icons/cards/location.svg";
import bed from "./../../../../assets/icons/cards/bed.svg";
import bath from "./../../../../assets/icons/cards/bath.svg";
import capacityy from "./../../../../assets/icons/cards/capacity.svg";
import yard from "./../../../../assets/icons/cards/yard.svg";
import Image from "next/image";
import { MainCardProps } from "@/types";
import Link from "next/link";

const MainCard: FC<MainCardProps> = ({
  title,
  location,
  price,
  photos,
  isDiscount,
  discounted_price,
  bathrooms,
  rooms,
  capacity,
  yard_type,
  id,
}) => {
  const formattedPrice = new Intl.NumberFormat("fa-IR").format(Number(price));
  const formattedDisPrice = new Intl.NumberFormat("fa-IR").format(
    Number(discounted_price || 0),
  );

  const getImageSrc = () => {
    if (!photos) return defaultImg;

    if (typeof photos === "string" && photos.trim() !== "") {
      return photos;
    }

    if (typeof photos === "object" && photos !== null) {
      if (
        photos.src &&
        typeof photos.src === "string" &&
        photos.src.trim() !== ""
      ) {
        return photos.src;
      }
      if (
        photos.url &&
        typeof photos.url === "string" &&
        photos.url.trim() !== ""
      ) {
        return photos.url;
      }
    }

    return defaultImg;
  };
  const imageSrc = getImageSrc();
  
  const discountPercent = Math.floor(
    ((Number(price) - Number(discounted_price)) / Number(price)) * 100,
  );
  return (
    <div>
      <div className="xs:w-90 h-103 border rounded-3xl dark:border-[#334155] border-neutral-100 dark:bg-[#cbd5e1] bg-white">
        <div className="w-full h-48 bg-neutral-400 rounded-t-3xl">
          <Image
            src={imageSrc}
            alt="not-found"
            className="w-full h-48 rounded-t-3xl"
          />
        </div>
        <div className="w-full h-57.75">
          <div className=" w-full h-20.75 flex justify-between p-3 sm:p-5">
            <div className=" space-y-1">
              <Link
                href={`reserve/${id}`}
                className="text-primary-700 text-base font-medium"
              >
                {title || "بی نام"}
              </Link>

              <div className="flex space-x-1.5">
                <Image src={locationPic} alt="not-found" />
                <p className="text-neutral-500 text-xs">
                  {/* {location || "مازندران"} */}
                </p>
              </div>
            </div>
            <div>
              <Image src={heart} alt="not-found" className="cursor-pointer" />
            </div>
          </div>
          <div className="border-y dark:border-[#334155] border-neutral-100 h-16 flex text-primary-500 text-xs">
            <div className="w-full h-full border-l dark:border-[#334155] border-neutral-100 flex justify-center items-center space-x-1.5">
              <Image src={bed} alt="not-found" className="w-6 h-6" />
              <span>{rooms} خواب</span>
            </div>
            <div className="w-full h-full border-l dark:border-[#334155] border-neutral-100 flex justify-center items-center space-x-1.5">
              <Image src={bath} alt="not-found" className="w-6 h-6" />
              <span>{bathrooms} حمام</span>
            </div>
            <div
              className={`w-full h-full ${isDiscount === true ? "" : "border-l"} dark:border-[#334155] border-neutral-100 flex justify-center items-center space-x-1.5`}
            >
              <Image src={capacityy} alt="not-found" className="w-6 h-6" />
              <span>{capacity} نفره</span>
            </div>
            <div
              className={`w-full h-full  justify-center items-center  space-x-1.5   ${isDiscount ? "hidden" : "hidden sm:flex"}`}
            >
              <Image src={yard} alt="not-found" className="w-6 h-6" />
              <span>{yard_type}حیاط</span>
            </div>
          </div>
          {isDiscount === true ? (
            <div className="flex justify-between p-5 ">
              <h1 className="text-[#A6A6A6] text-[20px] font-light space-x-1">
                <span className="relative">
                  <span className="absolute inset-x-0 top-1/2 w-28 h-0.5 bg-red-500 transform -translate-y-1/2 -rotate-8"></span>
                  {formattedPrice}
                </span>
                <span className="text-xs font-medium">تومان</span>
              </h1>
              <h1 className="hidden xs:block text-[#1E1E1E] text-[20px] font-light space-x-1 ">
                <span> {formattedDisPrice}</span>
                <span className="text-xs font-medium">تومان</span>
              </h1>
              <div className="w-12.75 h-7.25 rounded-full bg-danger-500 flex justify-center items-center text-base">
                {discountPercent}%
              </div>
            </div>
          ) : (
            <div className="flex justify-between mt-4 sm:mt-0 p-3 sm:p-5">
              <h1 className="text-neutral-600 text-xs sm:text-base  font-normal">
                اجاره ماهیانه
              </h1>
              <h1 className="text-[#1E1E1E] text-xs sm:text-[20px] font-light space-x-1">
                <span> {formattedPrice}</span>
                <span className="text-[#595959] text-xs font-medium">
                  تومان / هرماه
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainCard;
