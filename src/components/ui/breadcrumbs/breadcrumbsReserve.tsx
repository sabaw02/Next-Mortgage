'use client'

import React from 'react'
import hotel from "@/assets/images/reserve/hotel-solid.svg"
import people from "@/assets/images/reserve/people.svg"
import APassenger from "@/assets/images/reserve/APassengers.png"
import discharge from '@/assets/images/reserve/Discharge.svg'
import AConfirmation from '@/assets/images/reserve/AConfirmation.png'
import money from "@/assets/images/reserve/money.svg"
import APayment from '@/assets/images/reserve/APayment.png'
import form from '@/assets/images/reserve/Form_light.svg'
import Image from 'next/image';
type TStep = "passenger" | "confirm" | "ticket";

interface IStep {
  step: TStep;
}

const BreadcrumbsReserve = ({step}: IStep) => {
  return (
    <div className='flex justify-center items-center gap-1'>
      <div className={'flex justify-center items-center w-23 h-19 border rounded-xl border-primary-500'}>
        <div>
          <Image src= {hotel} alt={'hotel room'} height={23} width={23} className={"mx-auto mb-1"}/>
          <span className={'text-primary-500 text-[13px]'}>انتخاب هتل</span>
        </div>
      </div>
      <span className={"text-[16px] font-semibold text-primary-500"}>...................</span>
      <div className={`flex justify-center items-center w-23 h-19 border rounded-xl ${(step === "confirm" || step === "ticket") ? "border-primary-500" : "border-primary-200"} `}>
        <div>
          <Image src= {people} alt={'hotel room'} height={23} width={23} className={`mx-auto mb-1 ${(step === "confirm" || step === "ticket") ? "color-primary-500" : "color-primary-200"}`}/>
          <span className={`text-xs ${(step === "confirm" || step === "ticket") ? "text-primary-500" : "text-primary-200"}`}>مشخصات مسافران</span>
        </div>
      </div>
      <span className={`text-[16px] font-semibold ${(step === "confirm" || step === "ticket") ? "text-primary-500 " : "text-primary-200"}`}>...................</span>
      <div className={`flex justify-center items-center w-23 h-19 border rounded-xl ${step === "ticket" ? "border-primary-500" : "border-primary-200"}`}>
        <div>
          <Image src= {discharge} alt={'hotel room'} height={23} width={23} className={"mx-auto mb-1"}/>
          <span className={`${step === "ticket" ? "text-primary-500" : "text-primary-200"} text-[13px]`}>تایید اطلاعات</span>
        </div>
      </div>
      <span className={`text-[16px] font-semibold ${step === "ticket" ? "text-primary-500" : "text-primary-200"}`}>...................</span>
      <div className={`flex justify-center items-center w-23 h-19 border rounded-xl ${step === "ticket" ? "border-primary-500" : "border-primary-200"}`}>
        <div>
          <Image src= {money} alt={'hotel room'} height={23} width={23} className={"mx-auto mb-1"}/>
          <span className={`${step === "ticket" ? "text-primary-500" : "text-primary-200"} text-[13px]`}>پرداخت آنلاین</span>
        </div>
      </div>
      <span className={`text-[16px] font-semibold ${step === "ticket" ? "text-primary-500" : "text-primary-200"}`}>...................</span>
      <div className={'flex justify-center items-center w-23 h-19 border rounded-xl border-primary-200'}>
        <div>
          <Image src= {form} alt={'hotel room'} height={23} width={23} className={"mx-auto mb-1"}/>
          <span className={'text-primary-200 text-[13px]'}>صدور بلیط</span>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbsReserve;