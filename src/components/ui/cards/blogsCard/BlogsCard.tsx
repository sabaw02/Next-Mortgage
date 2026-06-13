import { BlogsCardProps } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import defImg from "@/assets/images/catCard.svg";
import defaultImg from "./../../../../assets/images/defImg.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const BlogsCard: FC<BlogsCardProps> = ({
  id,
  title,
  caption,
  estimated_reading_time,
  // author_id,
  created_at,
  // category_id,
  // img,
  photos,
}) => {
  const defImg = photos || defaultImg;
  const persianDate = new Date(created_at).toLocaleDateString("fa-IR");
 const persianReadingTime = typeof estimated_reading_time === 'string'
    ? estimated_reading_time.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)])
    : estimated_reading_time;

  return (
    <div className="  w-full ">
      <div className="w-105.5 h-137 space-y-3 dark:bg-[#cbd5e1] bg-white rounded-[24px] border dark:border-[#334155] border-neutral-100">
        <div className="w-full h-71.5 bg-gray-500 rounded-t-3xl relative">
          <Image
            src={defImg}
            alt="not-found"
            fill
            className="object-cover rounded-t-3xl"
          />
        </div>
        <div className="w-95.5  mx-auto">
          <div className=" h-37.5">
            <div className="my-3 flex justify-between items-center">
              <div className="flex gap-1 ">
                <FaRegCalendarAlt className="text-[#80838D]  " />
                <span className="text-[14px] text-[#80838D] font-semibold">
                  {persianDate}
                </span>
              </div>
              <span className="content-center text-center w-25 h-8 bg-primary-400 rounded-[24px] text-[14px] font-semibold text-[#FFFFFA]">
                {persianReadingTime || estimated_reading_time}
              </span>
            </div>

            <h4 className="text-[22px] text-[#000000] font-bold "> {title} </h4>
            <p className="line-clamp-3 my-2 text-[16px] text-[#80838D] font-medium">
              {" "}
              {caption}
            </p>
          </div>

          <Link
            href={`/blogs/${id}`}
            className="mt-5 w-95.5 h-13.5 bg-primary-400 font-semibold text-[16px]  rounded-3xl cursor-pointer"
          >
            مشاهده جزئیات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
