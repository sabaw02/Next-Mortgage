"use client";

import { ProgressCircle } from "@heroui/react";
import { UserRound, ChevronLeft } from "lucide-react";
import arrow from "@/assets/icons/dashboard/arrow.svg";
import Image from "next/image";
import { toFa } from "@/lib/numToFa/toFa";

const ProfileCard = () => {
  const percent = 40;
  return (
    <div className="rounded-xl bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between gap-2 border-b pb-3 border-dashed">
        <h2 className="flex items-center gap-2 text-base font-bold text-primary-900">
          <UserRound className="size-5" />
          وضعیت پروفایل شما
        </h2>
        <button className="flex items-center gap-4 text-sm text-primary-900 transition-colors hover:text-primary-500">
          ویرایش
          <Image src={arrow} alt="icon" width={62} height={17} />
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <div className="order-2 flex-1 text-center sm:order-1 sm:text-right">
          <p className="text-3xl font-extrabold text-primary-900">
            {toFa(percent)}٪
          </p>
          <p className="mt-2 text-sm  text-primary-900 ">
            برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪ تکمیل
            شده باشد.
          </p>
          <p className="mt-4 text-xs text-neutral-600">
            آخرین تغییرات در {3} دقیقه پیش
          </p>
        </div>

        <ProgressCircle
          value={percent}
          aria-label="درصد تکمیل پروفایل"
          className="order-1 block size-28 shrink-0 sm:order-2"
        >
          <ProgressCircle.Track className="size-full">
            <ProgressCircle.TrackCircle className="stroke-[#D9D9D9]" />
            <ProgressCircle.FillCircle className="stroke-primary-500" />
          </ProgressCircle.Track>
        </ProgressCircle>
      </div>
    </div>
  );
};

export default ProfileCard;
