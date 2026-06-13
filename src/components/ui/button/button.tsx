import React, { FC } from "react";
import arrowR from "@/assets/icons/button/rightArrow.svg";
import bArrowR from "@/assets/icons/button/blueArrow.svg";
import Image from "next/image";
import { ButtonsProps } from "@/types";
import { SlArrowLeft } from "react-icons/sl";

const Button: FC<ButtonsProps> = ({ text, isOutline, icon, iconPos }) => {
  return (
    <div className="">
      <button
        className={`cursor-pointer w-28 sm:w-37 h-10 sm:h-12 ${isOutline === true ? "border border-primary-500" : "bg-primary-500"}  rounded-2xl text-[14px] flex justify-center items-center space-x-5`}
      >
        {iconPos === "right" ? icon : ""}
        <span
          className={`font-semibold text-xs sm:text-base relative top-0.5 ${isOutline === true ? "text-primary-500" : "text-white"}`}
        >
          {text}
        </span>
        {iconPos === "left" ? icon : ""}
      </button>
    </div>
  );
};

export default Button;
