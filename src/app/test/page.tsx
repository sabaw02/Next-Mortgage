"use client";

import React from "react";
// import Button from "@/components/ui/button/button";
import CategoryCard from "@/components/ui/cards/categoryCard/categoryCard";
import MainCard from "@/components/ui/cards/mainCard/mainCard";
import Pagination from "@/components/ui/pagination/pagination";
import GridCard from "@/components/ui/cards/gridCard/gridCard";
import { SlArrowLeft } from "react-icons/sl";
import ButtonLg from "@/components/ui/button/buttonLg";
import { PiHockey } from "react-icons/pi";
import ButtonMd from "@/components/ui/button/buttonMd";
import SearchInput from "@/components/ui/input/searchInput";
import Input from "@/components/ui/input/input";
import { BiUser } from "react-icons/bi";
import SellerInfoCard from "@/components/rent/sellerInfoCard/sellerInfoCard";
import { Button } from "@heroui/react";
import DateTime from "@/components/common/date/date";
import SlideShow from "@/components/ui/slideShow/slideShow";

const TestPage = () => {
  const icon = <SlArrowLeft className="text-base text-white" />;
  const icon2 = <PiHockey className="text-lg text-primary-500" />;
  return (
    <div dir="rtl" className="w-full h-175 bg-primary-50 p-36 space-y-10">
      {/* <div className="flex space-x-8">
        <Button
          text="مشاهده همه"
          isOutline={true}
          icon={icon2}
          iconPos="left"
        />
        <Button
          text="مشاهده همه"
          isOutline={false}
          icon={icon}
          iconPos="right"
        />
        <Button
          text="مشاهده همه"
          isOutline={false}
          icon={icon}
          iconPos="left"
        />
        <Button
          text="مشاهده همه"
          isOutline={false}
          icon={null}
          iconPos="left"
        />
      </div>
      <ButtonMd
        text="مشاهده همه"
        isOutline={false}
        icon={icon}
        iconPos="right"
      />
      <ButtonLg
        text="تماس با فروشنده"
        isOutline={true}
        icon={icon2}
        iconPos="right"
      />
      <ButtonLg
        text="تماس با فروشنده"
        isOutline={false}
        icon={icon}
        iconPos="right"
      /> */}

      {/* <MainCard
        title="title"
        location="tehran"
        price={15033300}
        img=""
        isDiscount={true}
        disCountPrice={1233300}
        disCount={15}
      /> */}
      {/* <CategoryCard title="اجاره ویلا در رامسر" itemsNum="56 مورد" img="" /> */}
      {/* <div className="p-6">
        <Pagination />
      </div> */}
      {/* 
      <GridCard
        img=""
        title="dddddd"
        location="dddsdvsv"
        rating={5}
        originalPrice={1550000}
        discountPercent={15}
        disCountPrice={120000}
        buttonTitle="بررسی و رزرو هتل"
        isReserve={true}
      /> */}

      {/* <SearchInput /> */}
      {/* <Button>My Button</Button> */}

      {/* <div className="w-[874px] h-[312px] border border-neutral-200 rounded-2xl bg-white p-10">
        <Input
          placeholder="sss"
          type="text"
          icon={<BiUser className="w-5 h-5" />}
        />
      </div> */}
      {/* <SellerInfoCard /> */}
      {/* <SlideShow
        children={
          <MainCard
            title="title"
            location="tehran"
            price={15033300}
            img=""
            isDiscount={true}
            disCountPrice={1233300}
            disCount={15}
          />
        }
      /> */}
    </div>
  );
};

export default TestPage;
