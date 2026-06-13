import MainLayout from "@/components/layout/mainLayout";
import GridCardSkeleton from "@/components/ui/skeleton/gridCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="mb-32 w-full">
      <MainLayout title="رزرو سریع">
        <div className="w-full h-auto flex flex-col lg:grid lg:grid-cols-6 gap-5 lg:gap-6">
          <div className="w-full lg:col-span-2 space-y-5">
            <div className="hidden lg:block w-80 xl:w-97.5 h-52 rounded-2xl bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse"></div>

         
   
          </div>

          <div className="col-span-4 flex justify-center flex-col space-y-5">
            <div className="space-y-5">
              {[...Array(5)].map((_, index) => (
                <GridCardSkeleton key={index} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-full h-12 flex justify-center items-center gap-2 animate-pulse">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Loading;
