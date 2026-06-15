"use client";

import { toFa } from "@/lib/numToFa/toFa";
import { Wallet } from "lucide-react";

const rows = [
  { label: "درآمد ماه جاری", amount: 115000000, highlight: true },
  { label: "درآمد کل", amount: 195000000, highlight: false },
];

 

 
const IncomeCard = () => {
  return (
  <div className="rounded-xl bg-white p-5 sm:p-6">
      <div className="flex items-center justify-start gap-2 border-b border-dashed pb-2 border-neutral-200">
        <Wallet className="size-5 text-primary-900" />
        <h2 className="text-base font-semibold text-primary-900">
          آمار درآمد ها
        </h2>
      </div>

      <div className="mt-6 flex flex-col gap-5 ">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between gap-3"
          >
            <span className="flex shrink-0 items-center gap-2 text-lg font-medium text-primary-900">
              <span
                className={`size-2.5 rounded-full ${
                  r.highlight ? "bg-primary-300" : "bg-[#ECECEC]"
                }`}
              />
              {r.label}
            </span>
            <span
              className={`flex w-54.75 rounded-xl px-4 py-2.5 text-center justify-center text-xl font-semibold sm:text-right ${
                r.highlight
                  ? "bg-primary-300 text-primary-900"
                  : "bg-[#ECECEC] text-primary-900"
              }`}
            >
              <span className="tracking-wide text-xl pl-2">
                {toFa(r.amount)}
              </span>{" "}
              تومان
            </span>
          </div>
        ))}
      </div>
    </div>  )
}

export default IncomeCard