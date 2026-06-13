"use client";

import Image from "next/image";
import { FC } from "react";
import { useFormState } from "react-dom";

import Frame from "../../../assets/images/Frame.png";
import Tell from "../../../assets/images/Contact/Tell.png";
import Email from "../../../assets/images/Contact/Email.png";
import Address from "../../../assets/images/Contact/Address.png";
import ArrowR from "../../../assets/images/Contact/Arrow 07.png";
import ArrowL from "../../../assets/images/Contact/Arrow 8.png";
import call from "../../../assets/images/Contact/call-center.png";
import SqureL from "../../../assets/images/Contact/SqureL.png";
import SqureR from "../../../assets/images/Contact/SqureR.png";

import InfoBox from "../../../components/contactUs/InfoBox";
import BreadcrumbsComponent from "@/components/ui/breadcrumbs/breadcrumbs";
import SubmitButton from "../../../components/contactUs/SubmitButton";

import sendContact from "@/actions/Contact";

interface IContactResponse {
  success?: boolean;
  message: string;
}

const initialState: IContactResponse = {
  message: "",
  success: false,
};

const ContactUsPage = () => {
  const [state, formAction] = useFormState(sendContact, initialState);

  return (
    <div className="mx-auto mt-15 w-full h-auto justify-center">
      <Image
        className="absolute top-[250px] right-0"
        src={SqureR}
        alt="not-found"
      />

      {/* breadcrumb */}
      <div className="items-center mx-auto flex justify-between w-[30%] h-[40px]">
        <BreadcrumbsComponent />
      </div>

      {/* title */}
      <div className="z-10 items-center mx-auto flex justify-between w-[100%] h-[150px]">
        <div className="mt-5 max-[888px]:w-[600px] mx-auto w-[800px] relative flex">
          <Image
            className="max-[710px]:hidden absolute bottom-0"
            src={Frame}
            alt="not-found"
          />

          <div className="max-[500px]:w-[200px] mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
            <h2 className="max-[500px]:w-[140px] text-center mx-auto w-[168px] border-b-2 border-b-[#194C7B] text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
              ارتباط با ما
            </h2>
          </div>

          <Image
            className="max-[710px]:hidden absolute bottom-5 left-0"
            src={Frame}
            alt=""
          />
        </div>
      </div>

      <Image
        className="-z-10 absolute top-[240px] left-0"
        src={SqureL}
        alt="not-found"
      />

      {/* body */}
      <div className="max-[910px]:flex-col max-[910px]:w-[100%] max-[910px]:items-center max-[910px]:gap-10 flex justify-between h-auto w-[70%] mx-auto my-15">
        {/* info section */}
        <div className="max-[910px]:w-[70%] w-[53%]">
          <div className="relative content-center w-[95%] h-[314px] dark:bg-[#cbd5e1] bg-[#E8EEF3] dark:border-[#334155] border border-[#D7D7D7] rounded-2xl">
            <Image
              className="max-[1140px]:hidden absolute top-10 right-10 animate-bounce"
              style={{ animationDuration: "4s" }}
              src={ArrowR}
              alt="arrow"
            />

            <Image
              className="max-[1700px]:hidden absolute bottom-10 left-20 animate-bounce"
              style={{ animationDuration: "4s" }}
              src={ArrowL}
              alt="arrow"
            />

            <Image
              className="max-[910px]:right-60 duration-0 sticky bottom-100 right-120"
              src={call}
              alt="call"
            />
          </div>

          <div className="mt-5 content-center w-[95%] p-2 dark:bg-[#cbd5e1] bg-[#FFFFFF] dark:border-[#334155] border border-[#D7D7D7] rounded-2xl">
            <div className="p-4 flex flex-col gap-3">
              <InfoBox
                title="تلفن"
                text="09229167194 - 098541612310"
                imageSrc={Tell}
              />

              <InfoBox title="ایمیل" text="Delta@gmail.com" imageSrc={Email} />

              <InfoBox
                title="آدرس"
                text={`گیلان ، رشت ، مید
ان آزادی ، جنب چهار راه عظیمی زاده`}
                imageSrc={Address}
              />
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="max-[910px]:w-[70%] h-auto w-[47%] dark:bg-[#cbd5e1] bg-[#FFFFFF] border dark:border-[#334155] border-[#D7D7D7] rounded-2xl">
          <form action={formAction} className="py-5 px-5">
            <p className="max-[530px]:text-[18px] w-[90%] h-auto text-[20px] font-normal text-[#194C7B]">
              هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و
              انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !
            </p>
            <div className="max-[1500px]:flex-col mt-10 flex gap-5">
              <input
                className="text-[#334155] cursor-pointer max-[1500px]:w-full w-[47%] h-12 pr-4 text-[16px] placeholder-[#A8A8A8] dark:border-[#334155] border border-[#D7D7D7] rounded-2xl"
                type="text"
                name="firstName"
                placeholder="نام و نام خانوادگی"
                required
              />
              <input
                className="text-[#334155] cursor-pointer max-[1500px]:w-[100%] w-[47%] h-[48px] pr-4 text-[16px] placeholder-[#A8A8A8] dark:border-[#334155] border border-[#D7D7D7] rounded-2xl"
                type="email"
                name="email"
                placeholder="ایمیل"
                required
              />
            </div>
            <textarea
              className="text-[#334155] max-[1500px]:h-auto p-4 cursor-pointer my-5 w-[98%] h-[192px] text-[16px] placeholder-[#A8A8A8] dark:border-[#334155] border border-[#D7D7D7] rounded-2xl"
              name="userAbout"
              placeholder="پیام شما"
              required
            />
            <SubmitButton />
            {state?.message && (
              <p
                className={`mt-5 text-center text-[15px] ${
                  state.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
