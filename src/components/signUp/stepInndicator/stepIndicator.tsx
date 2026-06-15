"use client";
import React from "react";
import { usePathname } from "next/navigation";


export default function StepIndicator() {
  const pathname = usePathname();
  const currentPath = pathname.split('/').pop();

  return (
    <div className="flex justify-center items-center gap-5 mb-6 text-center mt-2">
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentPath === 'signup' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold ">وارد کردن ایمیل</span>
      </div>
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentPath === 'step2' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold">وارد کردن کد ارسال شده</span>
      </div>
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentPath === 'step3' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold">ایجاد حساب کاربری</span>
      </div>
    </div>
  );
}