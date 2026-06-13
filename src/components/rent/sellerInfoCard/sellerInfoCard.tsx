import Image from "next/image";
import React from "react";
import money from "@/assets/icons/cards/money.svg";
import def from "@/assets/images/mm.jpg";
import { MdMessage, MdMoney } from "react-icons/md";
import { BiMessage, BiMessageRounded, BiMoney } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import ButtonMd from "@/components/ui/button/buttonMd";
import { PiPhone } from "react-icons/pi";
import ButtonLg from "@/components/ui/button/buttonLg";
import DateTime from "@/components/common/date/date";

const SellerInfoCard = () => {
  const formattedPrice = new Intl.NumberFormat("fa-IR").format(200000);
  const icon = <PiPhone className="w-5 h-5 text-white" />;
  const icon2 = <BiMessageRounded className="w-5 h-5 text-primary-500" />;
  return (
    <div>
      <div
        className="mx-auto w-[95%] h-111.5 p-4 border  border-neutral-200 
      rounded-2xl  flex flex-col items-center overflow-hidden pt-6"
      >
        <div className="space-y-4 flex flex-col items-center">
          <Image
            src={def}
            alt="img"
            className=" rounded-full border-red-600"
            width={94}
            height={94}
          />
          <h1 className="whitespace-nowrap dark:text-[#FFFFFF]   text-black font-medium text-[20px]">
            امیر اوجی
          </h1>
        </div>

        <div className="w-full h-8 flex justify-between items-center bor der border-red-900 mt-5">
          <div className="flex items-center space-x-3">
            <Image src={money} alt="not-found" />
            <p className="text-primary-500 text-base font-medium">
              قیمت رهن از
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="text-[20px] font-light dark:text-[#FFFFFF]  text-[#1B1B1B] ">
              {formattedPrice}
            </span>
            <span className="text-xs font-medium text-neutral-500">تومان</span>
          </div>
        </div>
        <div className="w-full h-8 flex justify-between items-center bo rder border-red-900 m t-5">
          <div className="flex items-center space-x-3">
            <Image src={money} alt="not-found" />
            <p className="text-primary-500 text-base font-medium">
              قیمت اجاره از
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="text-[20px] font-light dark:text-[#FFFFFF]  text-[#1B1B1B] ">
              {formattedPrice}
            </span>
            <span className="text-xs font-medium text-neutral-500">تومان</span>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          <ButtonLg
            text="تماس با فروشنده"
            isOutline={false}
            iconPos="right"
            icon={icon}
          />
          <ButtonLg
            text="گفت و گو با فروشنده"
            isOutline={true}
            iconPos="right"
            icon={icon2}
          />
        </div>

        <div className="mt-5">
          <DateTime />
        </div>
      </div>
    </div>
  );
};

export default SellerInfoCard;
