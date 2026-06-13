"use client";
import React, { FC } from "react";

const GridCardSkeleton: FC = () => {
  return (
    <div>
      <div className="w-full xl:w-219.5 h-auto py-8 xs:py-0 xs:h-52 rounded-2xl border border-neutral-100 dark:bg-[#1e293b] bg-white flex flex-col xs:grid xs:grid-cols-9 animate-pulse">
        <div className="hidden col-span-3 md:flex justify-center items-center">
          <div className="w-52 xl:w-65 h-44 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        </div>

        <div className="col-span-6 md:col-span-4 w-72 xl:w-90.75 h-40 m-auto space-y-3">
          <div className="flex justify-between w-full h-10 items-center">
            <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="flex justify-center items-center space-x-1">
              <div className="h-5 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>

          <div className="h-6 flex space-x-2">
            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-8 w-28 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <div className="border-t pt-6 xs:pt-0 xs:border-r border-neutral-100 col-span-3 md:col-span-2 flex flex-col justify-center items-center space-y-5">
          <div className="w-11.5 h-11.5 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-33.5 h-8.5 bg-gray-300 dark:bg-gray-600 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default GridCardSkeleton;
