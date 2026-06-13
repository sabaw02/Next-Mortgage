"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import iconsite from "../../../assets/images/header/homeNet_logo_upscaled_cropped_4x 1.png";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { headerNavItemes } from "@/constants/navItemes";
import MenuDrawer from "@/components/ui/drawer/menuDrawer";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${
        scrolled
          ? "px-5 w-80 min-[462px]:w-110 min-[550px]:w-full xl:w-373 h-24 sticky top-2 dark:bg-[#1e293b] bg-white/85 z-500 rounded-2xl dark:shadow-none shadow-lg shadow-primary-100/50 backdrop-blur-md"
          : "w-full xl:w-380 h-24"
      }
       items-center content-center justify-between flex p-10 transition-all duration-500 sm:space-x-3
    `}
    >
      <div className=" max-lg:flex-1">
        <Image
          className="max-[1130px]:w-25"
          src={iconsite}
          alt="هوم نت"
          width={137}
          height={64}
        />
      </div>

      <div className="max-lg:hidden max-[1130px]:gap-8 max-[1130px]:w-50  whitespace-nowrap flex gap-10 text-base font-medium  text-[#1B1B1B] items-center justify-center w-183.75 h-10 ">
        {headerNavItemes.map((item, index) => {
          if (item.id <= 6) {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`transition-all duration-300 
                            ${isActive ? "text-[#1C5387] underline decoration-2 underline-offset-8" : "text-[#1B1B1B] dark:text-[#cbd5e1] hover:text-[#1C5387]"}`}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </div>

      <div className=" flex xs:gap-2">
        <ThemeToggle />
        <Link href={""} className="">
          <button className="max-[550px]:hidden max-[500px]:w-13.75 max-sm:w-18.75 max-sm:h-9.5 max-lg:rounded-full max-[1060px]:w-21.25 cursor-pointer max-[1200px]:w-25 w-35 h-10 duration-500 border-2 border-[#1C5387] text-[#1C5387] font-semibold text-[16px] hover:scale-105 rounded-2xl">
            ورود
          </button>
        </Link>
        <Link href={""}>
          <button className="max-[550px]:hidden max-[500px]:w-13.75 max-sm:w-18.75 max-sm:h-9.5 max-lg:rounded-full max-[1060px]:w-21.25 cursor-pointer max-[1200px]:w-25 w-35 h-10 duration-500 bg-[#1C5387] text-[#FFFFFF] font-semibold text-[16px] hover:scale-105 rounded-2xl">
            ثبت نام
          </button>
        </Link>
      </div>

      <MenuDrawer />
    </div>
  );
};

export default Header;
