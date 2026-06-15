"use client";
import React from "react";
import Former from "@/assets/images/reserve/Former.png";
import name from "@/assets/images/reserve/Name.png";
import passport from "@/assets/images/reserve/passport.png";
import calender from "@/assets/images/reserve/calendar.png";
import add from "@/assets/images/reserve/Add.png";
import regist from "@/assets/images/reserve/Registration.png";
import Image from "next/image";
import Input from "@/components/ui/input/input";
import Button from "@/components/ui/button/button";
import ReserveHCard from "@/components/ui/cards/reserveHCard/ReserveHCard";

const PassengerForm = () => {
  return (
    <div className={"flex gap-5 mb-15"}>
      <div className="flex flex-col gap-5 w-[850px] ">
        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <div className={"flex justify-between items-center"}>
            <h2 className={"text-primary-700 text-2xl font-medium"}>
              مشخصات مسافران
            </h2>
            <button
              type="button"
              className={
                "cursor-pointer w-53.75 h-12  border border-primary-500 rounded-2xl flex items-center gap-2 justify-center"
              }
            >
              <Image src={Former} alt={"former"} width={20} height={20} />
              <span className={"text-primary-500 font-semibold text-base"}>
                انتخاب مسافران سابق
              </span>
            </button>
          </div>

          <div className={"grid grid-cols-2 gap-3 justify-between mt-4"}>
            <Input
              placeholder="نام"
              type="text"
              icon={
                <Image src={name} alt={"name"} className="h-[18px] w-[18px]" />
              }
            />
            <Input
              placeholder="نام خانوادگی"
              type="text"
              icon={
                <Image src={name} alt={"name"} className="h-[18px] w-[18px]" />
              }
            />
            <select className="w-98.25 h-12 border border-neutral-200 rounded-2xl outline-none text-neutral-600 text-base font-normal pr-3 pl-10">
              <option value="" className="text-neutral-900">
                جنسیت شما
              </option>
              <option value="1" className="text-neutral-700">
                زن
              </option>
              <option value="2" className="text-neutral-700">
                مرد
              </option>
            </select>
            <Input
              placeholder="کد ملی"
              type="text"
              icon={
                <Image
                  src={passport}
                  alt={"passport"}
                  className="h-[18px] w-[18px]"
                />
              }
            />
            <div className="col-span-2 flex justify-between items-center gap-4">
              <div className="relative border border-neutral-200 rounded-2xl px-3 py-1 w-98.25 h-12">
                <input
                  type="date"
                  className="text-neutral-700 text-right text-sm w-full appearance-none bg-transparent [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer peer"
                />
                <span className="absolute right-1 top-2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0 transition-opacity">
                  تاریخ تولد
                </span>
                <Image
                  src={calender}
                  alt="calender"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-[16px] w-[16px] pointer-events-none"
                />
              </div>
              <Button
                isOutline={true}
                text="افزودن مسافر"
                icon={<Image src={add} alt={"add"} width={20} height={20} />}
                iconPos="right"
              />
            </div>
          </div>
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <div className={"grid grid-cols-2 gap-3"}>
            <div className={"col-span-2 flex justify-between items-center"}>
              <div className={"flex items-center"}>
                <h2 className={"text-primary-700 text-2xl font-medium"}>
                  ارسال بلیط به دیگران
                </h2>
                <span className={"text-base text-neutral-500"}>
                  ( ارسال بلیط به ایمیل و شماره همراه دیگر )
                </span>
              </div>
              <Button
                isOutline={true}
                text="ثبت اطلاعات"
                icon={
                  <Image src={regist} alt={"regist"} width={20} height={20} />
                }
                iconPos="right"
              />
            </div>
            <Input
              placeholder="شاره تلفن"
              type="number"
              icon={
                <Image
                  src={passport}
                  alt={"passport"}
                  className="h-[18px] w-[18px]"
                />
              }
            />
            <Input
              placeholder="شاره تلفن"
              type="number"
              icon={
                <Image
                  src={passport}
                  alt={"passport"}
                  className="h-[18px] w-[18px]"
                />
              }
            />
          </div>
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <div className={"flex flex justify-between items-center"}>
            <div className={"flex items-center gap-1"}>
              <span className={"text-black text-base font-medium"}>
                قیمت کل
              </span>
              <span className={"text-base text-primary-500"}>11,500,000</span>
              <span className={"text-base text-neutral-500"}>تومان</span>
            </div>
            <Button
              isOutline={false}
              text="تایید و ادامه فرایند"
              icon={""}
              iconPos=""
            />
          </div>
        </div>
      </div>

      <ReserveHCard
        title="هتل سراوان رانین رشت"
        location="گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
        price={1500000}
        img=""
        isDiscount={true}
        disCount={20}
        disCountPrice={2500000}
      />
    </div>
  );
};

export default PassengerForm;
