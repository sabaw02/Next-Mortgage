import Image from "next/image";
import React from "react";
import Down from "@/assets/images/reserve/Down.png";

interface AboutTabsProps {
  caption: string;
  title: string;
}

const AboutTabs = ({ caption, title }: AboutTabsProps) => {
  return (
    <div className="">
      <h4 className="my-5 w-full h-9.75  text-[28px] font-medium text-[#143B60] ">
        چرا هتل {title} رو انتخاب کنیم؟
      </h4>
      <p className="w-full h-auto text-[20px] font-normal text-[#5C5C5C]">
        {caption}
      </p>

      {/* <button className='flex mx-auto justify-center items-center w-[148px] h-[48px] bg-[#1C5387] text-[13px] font-semibold text-[#FFFFFF] rounded-[18px]'>
        <p className=' text-center content-center w-[84px] h-[24px]'>مشاهده بیشتر</p>
        <Image className='w-[24px] h-[24px]'  src={Down} alt=''/>
      </button> */}
    </div>
  );
};

export default AboutTabs;
