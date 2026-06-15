import React, { FC } from "react";
import defaultImg from "./../../../../assets/images/defImg.jpg";
import heart from "./../../../../assets/icons/cards/heart.svg";
import locationPic from "./../../../../assets/icons/cards/location.svg";

import Image from "next/image";
import { MainCardProps } from "@/types";
import { FaCalendar, FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import Button from "../../button/button";
import ButtonLg from "../../button/buttonLg";

const ReserveHCard: FC<MainCardProps> = ({
  title,
  location,
  price,
  img,
  isDiscount,
  disCountPrice,
  disCount,
}) => {
  const defImg = img || defaultImg;
  // const [isDiscountOn, setIsDiscountOn] = useState(false);

  return (
    <div className="w-40 xs:w-90 h-fit border rounded-xl dark:border-[#334155] border-neutral-100 dark:bg-[#cbd5e1] bg-white">
      <div className="w-full h-48 bg-neutral-400 rounded-t-xl">
        <Image
          src={defImg}
          alt="not-found"
          className="w-full h-48 rounded-t-xl"
        />
      </div>
      <div className="w-full flex flex-col gap-3 justify-center py-4 px-3">
        <div className=" w-full flex justify-between px-2 pt-1">
          <div className=" space-y-1">
            <h1 className="text-primary-700 text-base font-medium">{title}</h1>

            <div className="flex space-x-1.5">
              <Image src={locationPic} alt="not-found" />
              <p className="text-neutral-500 text-xs">{location}</p>
            </div>
          </div>
          <div>
            <Image src={heart} alt="not-found" className="cursor-pointer" />
          </div>
        </div>
        <div className=" mx-auto w-[100%] h-[63px] border-1 border-[#D7D7D7] rounded-lg">
          <div className="flex">
            <div className="pr-3 w-[50%] items-center mx-auto flex gap-2 ">
              <FaRegCalendarAlt className="text-black dark:text-white " />
              <div className="">
                <h6 className="text-[#697E8E] font-medium text-[12px]">ورود</h6>
                <p className="dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]">
                  ۱۲ اسفند
                </p>
                <p className="dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]">
                  ساعت 12:30{" "}
                </p>
              </div>
            </div>
            <div className="pr-3 w-[50%] h-15 items-center mx-auto flex gap-2 border-r border-r-[#D7D7D7] ">
              <FaRegCalendarAlt className="text-black dark:text-white " />
              <div className="">
                <h6 className="text-[#697E8E] font-medium text-[12px]">خروج</h6>
                <p className=" dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]">
                  ۱۲ اسفند
                </p>
                <p className="dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]">
                  ساعت 12:30{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-[1280px]:flex">
          <div className="max-[1280px]:flex-col max-[1280px]:gap-1  flex justify-between items-center">
            {isDiscount === true ? (
              <>
                <h1 className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px]   text-[#A6A6A6] text-[23px] font-light space-x-1">
                  <span className="relative">
                    <span className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px]  absolute inset-x-0 top-1/2 h-px bg-red-500 transform -translate-y-1/2 -rotate-8"></span>
                    {price}
                  </span>
                  <span className="text-xs font-medium ">تومان</span>
                </h1>
                <h1 className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px] dark:text-[#FFFFFF] text-[#1E1E1E] text-[23px] font-light space-x-1 ">
                  <span className="">{disCountPrice}</span>
                  <span className="max-[500px]:text-[10px] text-xs font-medium">
                    تومان
                  </span>
                </h1>
                <div className="max-[770px]:text-[10px] text-white max-[1535px]:text-[13px]  w-12.75 h-7.25 rounded-full bg-danger-500 flex justify-center items-center text-base">
                  {disCount}%
                </div>
              </>
            ) : (
              <div className="flex justify-between p-5">
                <h1 className="text-neutral-600 text-base font-normal">
                  اجاره ماهیانه
                </h1>
                <h1 className="text-[#1E1E1E] text-[20px] font-light space-x-1">
                  <span> {price}</span>
                  <span className="text-[#595959] text-xs font-medium">
                    تومان / هرماه
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>
        <ButtonLg isOutline={true} text="تغییر هتل" icon={false} iconPos="" />
      </div>
    </div>
  );
};

export default ReserveHCard;
