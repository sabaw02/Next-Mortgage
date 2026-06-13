import Image from "next/image";
import React, { FC } from "react";
import defImg from "@/assets/images/catCard.svg";
import defaultImg from "./../../../../assets/images/defImg.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CategoryCardProps {
  areaName: null | string;
}
const CategoryCard: FC<CategoryCardProps> = ({ areaName }) => {
  return (
    <div>
      <div className="mb-18 w-60 h-73 xs:w-77.5 xs:h-76 dark:bg-[#cbd5e1] bg-white rounded-3xl border dark:border-[#334155] border-neutral-100">
        <div className="w-full h-48 bg-gray-500 rounded-t-3xl relative">
          <Image
            src={defaultImg}
            alt="not-found"
            fill
            className="object-cover rounded-t-3xl"
          />
        </div>

        <div className="w-50 xs:w-67.5 h-18 m-auto relative top-4 space-y-4">
          <div className="flex justify-between">
            <span className="text-primary-700 text-xs xs:text-base font-medium">
              {areaName || "مازندران"}
            </span>

            <span className="text-neutral-500 text-xs font-medium xs:text-[15px]">
              {"56 مورد"}
            </span>
          </div>

          <button className="w-50 xs:w-67.5 h-8 bg-primary-400 rounded-3xl cursor-pointer">
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
