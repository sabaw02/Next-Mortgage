import MainLayout from "@/components/layout/mainLayout";
import React from "react";
const BlogCardSkeleton = () => (
  <div className="w-full max-w-sm animate-pulse">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 w-full"></div>
    <div className="mt-4 space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);
const Loading = () => {
  return (
    <div className="mx-auto mt-5 w-full h-auto px-4 sm:px-6 lg:px-8">
      <MainLayout title="مقالات ما">
        {/* Filters skeleton */}
        <div className="mb-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-end justify-between">
          <div className="w-full md:w-auto space-y-1 flex-1">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
            <div className="w-full md:w-[300px] h-12 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse"></div>
          </div>
          <div className="w-full md:w-auto space-y-1">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
            <div className="w-full md:w-[208px] h-12 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse"></div>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-[143px] h-12 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse"></div>
            <div className="w-full sm:w-[100px] h-12 bg-gray-200 dark:bg-gray-700 rounded-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Grid skeleton */}
        <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <BlogCardSkeleton key={idx} />
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="mb-10 flex justify-center">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Loading;
