"use client";

import { Pin, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import arrow from "@/assets/icons/dashboard/arrow.svg";
import { toFa } from "@/lib/numToFa/toFa";


const stats = [
  { label: "بازدید های امروز", value: 5 },
  { label: "رزرو های در انتظار", value: 5 },
  { label: "رزرو های فعال", value: 5 },
  { label: "کل املاک ها", value: 5 },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 ">
      {stats.map((item) => (
        <div key={item.label} className="p-4 sm:p-5 bg-white mt-5 rounded-xl">
          <div className="relative">
            <div className=" absolute -top-5 -right-1 w-12.5 h-15 flex justify-center items-center rounded-b-xl bg-[#ECECEC] text-white">
              <Pin className="size-6 text-primary-900" />
            </div>
            <div className="text-right mr-14 relative bottom-3">
              <p className="text-2xl font-extrabold text-primary-900">
                {toFa(item.value)}
              </p>
              <p className="text-sm  text-primary-900">{item.label}</p>
            </div>
          </div>

          <div className="my-3 border-t border-dashed border-border" />

          <button className="flex w-full items-center justify-between text-sm text-primary-900  ">
            <span className="flex items-center gap-1">مشاهده</span>
            <span className="flex items-center text-base leading-none tracking-tighter">
              <Image src={arrow} alt="icon" width={62} height={17} />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
