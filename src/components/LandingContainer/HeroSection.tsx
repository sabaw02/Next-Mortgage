"use client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import imageherosection from "../../assets/images/herosection/pexels-heyho-8134847 1.png";
import Image from "next/image";
import square from "@/assets/images/landing/Squre.svg";
import iconsearch from "../../assets/images/herosection/search.png";
import QuickSearchModal from "../ui/modal/quickSearchModal/QuickSearchModal";
import { setStaticToken } from "@/actions/setToken";

const HeroSection = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="max-[1240px]:h-112.5 items-center text-center max-[1100px]:h-auto max-[1100px]:flex-col flex w-full h-auto relative">
      <button onClick={() => setStaticToken()} className="text-6xl bg-red-50 text-black">Set Token</button>
      <Image
        className="hidden sm:block absolute top-110 -left-26 -rotate-30 "
        src={square}
        alt="not-found"
      />
      <div className="max-[1100px]:h-auto relative inline-block w-full h-auto ">
        <Image
          className="max-[580px]:w-107.5 max-[580px]:h-75  max-[1100px]:w-132.5 max-[1100px]:h-100 max-[1100px]:mb-5  max-[1100px]:mx-auto "
          src={imageherosection}
          alt=""
        />
        <div className="max-[1350px]:hidden  cursor-pointer content-center absolute bottom-63 right-143 w-27 h-27 rounded-full dark:bg-[#334155] bg-[#1C5387] hover:w-25 hover:h-25 duration-300">
          <Image className="mx-auto " src={iconsearch} alt="" />
          <button
            onClick={() => setOpenSearch(true)}
            className="mx-auto w-11 h-11.75 text-[12px] font-semibold text-[#FFFFFF] cursor-pointer"
          >
            جستجو سریع
          </button>
          <QuickSearchModal
            open={openSearch}
            onClose={() => setOpenSearch(false)}
            type=""
          />
        </div>
      </div>
      <div className=" flex flex-col gap-10 sm:gap-16 w-full h-auto ">
        <div className="flex flex-col gap-2 mx-auto w-[80%] h-auto space-y-3">
          <h1 className=" max-[400px]:text-[18px] max-[840px]:text-[24px] max-[580px]:text-[24px] text-[28px] font-semibold dark:text-[#f1f5f9] text-[#1B1B1B]">
            یه انتخاب خوب، از یه جای مطمئن شروع می‌شه
          </h1>
          <p className=" max-[580px]:text-[14px] text-[16px] font-semibold text-neutral-600">
            آگهی‌های واقعی رو ببین، محله‌ها رو مقایسه کن و با خیال راحت به
            انتخابت برس.
          </p>
        </div>

        <div className=" max-[630px]:flex-wrap flex gap-5 justify-center ">
          <div className="max-[1240px]:w-37.5 max-[1240px]:h-42.5 content-center w-42.75 h-53.75 dark:bg-[#cbd5e1] bg-[#E8EEF3] rounded-xl hover:translate-y-4 duration-200">
            <div className="mx-auto w-36.75 h-35.75 p-4">
              <h6 className="text-[32px] font-medium text-[#143B60]">۲۰۰+</h6>
              <p className="text-sm sm:text-[16px] font-medium text-[#49759F]">
                منطقه برای رزرو، ویلا و کلبه
              </p>
            </div>
          </div>
          <div className="max-[1240px]:w-37.5 max-[1240px]:h-42.5  content-center w-42.75 h-53.75 dark:bg-[#cbd5e1] bg-[#E8EEF3] rounded-xl hover:translate-y-4 duration-200">
            <div className="mx-auto w-36.75 h-35.75 p-4">
              <h6 className="text-[32px] font-medium text-[#143B60]">۴۰۰۰+</h6>
              <p className="text-sm sm:text-[16px] font-medium text-[#49759F]">
                ملک برای رزرو و رهن و اجاره
              </p>
            </div>
          </div>
          <div className="max-[1240px]:w-37.5 max-[1240px]:h-42.5  content-center w-42.75 h-53.75 dark:bg-[#cbd5e1] bg-[#E8EEF3] rounded-xl hover:translate-y-4 duration-200">
            <div className="mx-auto w-36.75 h-35.75 p-4">
              <h6 className="text-[32px] font-medium text-[#143B60]">۲۴۰۰+</h6>
              <p className="text-sm sm:text-[16px] font-medium text-[#49759F]">
                رضایت مشتریانی که به آلفا اعتماد کرده اند
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
