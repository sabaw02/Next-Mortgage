"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import villa from "../../assets/images/Categories/Villa.png";
import cottage from "../../assets/images/Categories/Cottage.png";
import wooden from "../../assets/images/Categories/wooden.png";
import house from "../../assets/images/Categories/house.png";
import Beachfrontproperty from "../../assets/images/Categories/Beachfront property.png";
import apartment from "../../assets/images/Categories/apartment.png";
import Frame from "../../assets/images/Frame.png";
import SqureL from "../../assets/images/SqureL.png";
import CategoryModal from "../ui/modal/categoryModal/CategoryModal";

const CategoriySection = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("all");
  return (
    <div className="w-full h-100 mt-44 md:mt-30 mb-20 justify-center flex flex-col gap-10 items-center text-center ">
      <div className=" max-[710px]:w-[70%] max-[888px]:w-150 mx-auto w-200 relative flex">
        <Image
          className="max-[710px]:hidden absolute bottom-5"
          src={Frame}
          alt=""
        />
        <div className="max-[500px]:w-50 mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
          <h2 className="max-[500px]:w-35  text-center mx-auto w-42 border-b-2  border-b-[#194C7B] text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
            دسته بندی
          </h2>
        </div>
        <Image
          className="max-[710px]:hidden absolute bottom-14 left-0 "
          src={Frame}
          alt=""
        />
      </div>
      <div className=" max-[580px]:gride max-[580px]:grid-rows-3 max-[580px]:grid-cols-2 max-[1240px]:gride max-[1240px]:grid-rows-2 max-[1240px]:grid-cols-3 justify-center items-center grid grid-rows-1 grid-cols-6 gap-10  ">
        <div className="cursor-pointer max-[580px]:w-30 max-[580px]:h-30 content-center  w-40 h-40 hover:w-38.75 hover:h-38.75 duration-400 rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={villa}
            alt=""
          />
          <button
            onClick={() => {
              (setType("villa"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            ملک ویلایی
          </button>
        </div>
        <div className="cursor-pointer max-[580px]:w-30 max-[580px]:h-30  content-center  w-40 h-40  hover:w-38.75 hover:h-38.75 duration-400 rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={cottage}
            alt=""
          />
          <button
            onClick={() => {
              (setType("cottage"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            ملک کلبه ای
          </button>
        </div>
        <div className="cursor-pointer max-[580px]:w-30 max-[580px]:h-30  content-center w-40 h-40  hover:w-38.75 hover:h-38.75 duration-400  rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={wooden}
            alt=""
          />
          <button
            onClick={() => {
              (setType("eco"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            بومگردی
          </button>
        </div>
        <div className="cursor-pointer  max-[580px]:w-30 max-[580px]:h-30  content-center  w-40 h-40 hover:w-38.75 hover:h-38.75 duration-400  rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={house}
            alt=""
          />
          <button
            onClick={() => {
              (setType("pool"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            استخردار
          </button>
        </div>
        <div className="cursor-pointer max-[580px]:w-30 max-[580px]:h-30  content-center w-40 h-40  hover:w-38.75 hover:h-38.75 duration-400  rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={Beachfrontproperty}
            alt=""
          />
          <button
            onClick={() => {
              (setType("coastal"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            ملک ساحلی
          </button>
        </div>
        <div className="cursor-pointer max-[580px]:w-30 max-[580px]:h-30  content-center w-40 h-40 hover:w-38.75 hover:h-38.75 duration-400 rounded-full dark:bg-[#334155] bg-[#49759F]">
          <Image
            className="mx-auto w-10 h-10 sm:w-16 sm:h-16"
            src={apartment}
            alt=""
          />
          <button
            onClick={() => {
              (setType("apartment"), setOpen(true));
            }}
            className="mt-2 mx-auto w-28 h-7 text-xs sm:text-[16px] font-medium text-[#FFFFFF] hover:text-[18px]"
          >
            آپارتمان
          </button>
        </div>
        <CategoryModal
          open={open}
          type={type}
          setType={setType}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default CategoriySection;
