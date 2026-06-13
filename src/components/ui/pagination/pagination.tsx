"use client";
import React from "react";
import rArrow from "@/assets/icons/pagination/rarrow.svg";
import lArrow from "@/assets/icons/pagination/larrow.svg";
import Image from "next/image";

const Pagination = () => {
  return (
    <div>
      <div className=" w-[256px] h-11 flex justify-between mx-auto">
        <div className="w-11 h-11 cursor-pointer">
          <Image src={rArrow} alt="not-found" />
        </div>

        <div className="flex justify-center items-center space-x-1">
          <div className="w-16.5 h-5 bg-primary-500 rounded-full"></div>
          <div className="w-5 h-5 bg-neutral-200 rounded-full"></div>
          <div className="w-5 h-5 bg-neutral-200 rounded-full"></div>
          <div className="w-5 h-5 bg-neutral-200 rounded-full"></div>
          <div className="w-5 h-5 bg-neutral-200 rounded-full"></div>
        </div>

        <div className="w-11 h-11 cursor-pointer">
          <Image  src={lArrow} alt="not-found" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
