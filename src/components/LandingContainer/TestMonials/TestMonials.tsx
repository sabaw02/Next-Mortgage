"use client"
import Image from "next/image";
import React, { FC }  from "react";
import SqureL from "../../../assets/images/SqureL.png";
import Frame from "../../../assets/images/Frame.png";
import hamid from "../../../assets/images/testmonials/hamid-fadaei 1.png";
import square from "@/assets/images/landing/Squre.svg";
import SlideShowComments from "@/components/ui/slideShow/slideshowComments";
import { CommentBoxProps } from "@/types";


const TestMonials:FC<CommentBoxProps>  = ({comments}) => {
  
  return (
    <div className=" mt-30 items-center justify-center flex w-full h-auto relative">
      <Image
        className="hidden md:block absolute top-110 -right-20 rotate-30 "
        src={square}
        alt="not-found"
      />
      <Image
        className="hidden md:block absolute top-10 -left-10 "
        src={SqureL}
        alt="a"
      />
      {/* کانتینر اصلی  */}
      <div className="items-center justify-center w-[80%]  h-auto">
        {/*قسمت تایتل */}
        <div className="mx-auto items-center  justify-center h-30.25">
          <div className="max-[710px]:w-[70%]  max-[888px]:w-150 mx-auto w-200  relative flex">
            <Image
              className="max-[710px]:hidden absolute bottom-5"
              src={Frame}
              alt="c"
            />
            <div className="max-[500px]:w-50  mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
              <h2 className="max-[500px]:w-35 text-center mx-auto w-42 border-b-2  border-b-[#194C7B] text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
                نظرات
              </h2>
            </div>
            <Image
              className="max-[710px]:hidden absolute bottom-14 left-0 "
              src={Frame}
              alt="c"
            />
          </div>
        </div>
        {/*  قسمت بدنه  */}
        <div className="">
          <SlideShowComments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default TestMonials;
