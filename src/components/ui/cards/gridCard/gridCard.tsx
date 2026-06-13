"use client";
import Image from "next/image";
import React, { FC } from "react";
import defImg from "@/assets/images/defImg.jpg";
import locationIcon from "@/assets/icons/cards/loc.svg";
import heart from "@/assets/icons/cards/heart2.svg";
import loc from "@/assets/icons/cards/location.svg";
import cash from "@/assets/icons/cards/cash.svg";
import ReserveContent from "./reserveContent";
import RentContent from "./rentContent";
import Link from "next/link";
import { GridCardProps } from "@/types";
import { MapPinIcon } from "lucide-react";
import { parseLocation } from "@/utils/hooks/location";
import { useMapContext } from "@/context/mapContext/mapContext";

const GridCard: FC<GridCardProps> = ({
  photos,
  title,
  rate,
  location,
  price,
  discounted_price,
  discountPercent,
  buttonTitle,
  isReserve,
  capacity,
  bathrooms,
  parking,
  rooms,
  yard_type,
  id,
  address,
}) => {
  const mapContext = useMapContext();

  const onCardMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!mapContext) return; // not inside MapProvider, do nothing
    const coords = parseLocation(location);
    if (coords) {
      mapContext.setSelectedHouse(id, coords);
    }
  };
  const defaultImage = photos || defImg;
  const formattedOriginalPrice = new Intl.NumberFormat("fa-IR").format(price);
  const formattedDisCountPrice = new Intl.NumberFormat("fa-IR").format(
    discounted_price ?? 0,
  );
  const getImageSrc = () => {
    if (!photos) return defImg;

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

    return defImg;
  };

  const imageSrc = getImageSrc();
  return (
    <div>
      <div className="w-full xl:w-219.5 h-auto py-8 xs:py-0 xs:h-52 rounded-2xl border border-neutral-100 dark:bg-[#1e293b] bg-white flex flex-col xs:grid xs:grid-cols-9">
        <div className="hidden col-span-3 md:flex justify-center items-center">
          <Link href={isReserve ? `reserve/${id}` : `rent/${id}`}>
            <Image
              src={imageSrc}
              alt="not-found"
              className="w-52 xl:w-65 h-44 rounded-lg"
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-4 w-72 xl:w-90.75 h-40 m-auto space-y-3">
          <div className="flex justify-between w-full h-10 items-center">
            <Link href={isReserve ? `reserve/${id}` : `rent/${id}`}>
              <h1 className="text-primary-700 font-medium text-base dark:text-white">
                {title || "بدون نام"}
              </h1>
            </Link>
            <span className="flex justify-center items-center space-x-1">
              <span className="text-danger-600">{rate ?? "—"}</span>
              <Image src={heart} alt="heart" />
            </span>
          </div>

          <div className="h-6 flex space-x-2">
            <Image src={loc} alt="location" className="w-6 h-6" />
            <span className="text-neutral-500 font-normal text-base">
              {address || "بدون آدرس"}
            </span>
          </div>

          {isReserve ? (
            <ReserveContent />
          ) : (
            <RentContent
              capacity={capacity}
              bathrooms={bathrooms}
              parking={parking}
              rooms={rooms}
              yard_type={yard_type}
            />
          )}

          <div className="flex justify-between items-center">
            <div className="h-6 flex space-x-2">
              <Image src={cash} alt="cash" className="w-6 h-6" />
              <span className="text-primary-400 font-normal text-base dark:text-white">
                قیمت
              </span>
            </div>

            {discounted_price && discounted_price > 0 && (
              <h1 className="text-[#A6A6A6] text-[20px] font-light space-x-1">
                <span className="relative">
                  <span className="absolute inset-x-0 top-1/2 w-full h-0.5 bg-red-500 transform -translate-y-1/2 -rotate-8"></span>
                  {formattedOriginalPrice}
                </span>
                <span className="text-xs font-medium">تومان</span>
              </h1>
            )}

            <h1 className="text-[#1E1E1E] text-[20px] font-light space-x-1">
              <span>
                {discounted_price && discounted_price > 0
                  ? formattedDisCountPrice
                  : formattedOriginalPrice}
              </span>
              <span className="text-xs font-medium">تومان</span>
            </h1>
          </div>
        </div>

        <div className="border-t pt-6 xs:pt-0 xs:border-r xs:border-t-0 border-neutral-100 col-span-3 md:col-span-2 flex flex-col justify-center items-center space-y-5">
          <div className={isReserve ? "" : "hidden"}>
            {/* <Image
              src={locationIcon}
              alt="location icon"
              className="w-11.5 h-11.5 rounded-lg"
            /> */}
            {mapContext && (
              <button
                type="button"
                onClick={onCardMapClick}
                className="w-11.5 h-11.5 flex justify-center items-center cursor-pointer z-10 bg-[#7474fd] text-white rounded-full p-2 shadow"
              >
                <MapPinIcon className="w-6 h-6" />
              </button>
            )}
          </div>
          <div className="w-33.5 h-8.5 bg-primary-500 rounded-2xl">
            <Link
              href={isReserve ? `reserve/${id}` : `rent/${id}`}
              className="flex justify-center items-center cursor-pointer w-33.5 h-8.5 bg-primary-500 rounded-2xl text-white text-xs font-normal"
            >
              {buttonTitle || (isReserve ? "رزرو" : "اجاره")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
