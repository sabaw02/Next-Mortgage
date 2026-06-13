"use client";
const MainCardSkeleton = () => {
  return (
    <div className="w-60 xs:w-90 h-103 border  dark:border-[#cbd5e1]/5 rounded-3xl dark:bg-[#334155]/90 bg-white">
      {/* جای عکس */}
      <div className="w-full h-48 bg-[#cbd5e1]/50 rounded-t-3xl animate-pulse" />

      {/* بخش محتوا */}
      <div className="w-full h-57.75">
        {/* عنوان و لوکیشن*/}
        <div className="w-full h-20.75 flex justify-between p-5">
          <div className="space-y-1">
            <div className="h-5 w-32 bg-[#cbd5e1]/50 rounded animate-pulse" />{" "}
            {/* عنوان */}
            <div className="flex space-x-1.5">
              <div className="w-4 h-4 bg-[#cbd5e1]/50 rounded-full animate-pulse" />{" "}
              {/*  لوکیشن ایکون*/}
              <div className="h-4 w-24 bg-[#cbd5e1]/50 rounded animate-pulse" />{" "}
              {/* متن  */}
            </div>
          </div>
          <div className="w-6 h-6 bg-[#cbd5e1]/50 rounded-full animate-pulse" />{" "}
          {/* قلب */}
        </div>

        {/*   (تخت، حمام، ظرفیت، حیاط) */}
        <div className="border-y dark:border-[#334155]/90 border-neutral-100 h-16 flex text-primary-500 text-xs">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full border-l dark:border-[#334155] border-neutral-100 flex justify-center items-center space-x-1.5"
            >
              <div className="w-5.5 h-5.5 bg-[#cbd5e1]/50  rounded-full animate-pulse" />
              <div className="h-3 w-8 bg-[#cbd5e1]/50  rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/*  قیمت  */}
        <div className="flex justify-between p-5">
          <div className="h-6 w-24 bg-[#cbd5e1]/50  rounded animate-pulse" />
          <div className="h-7 w-28 bg-[#cbd5e1]/50  rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};
export default MainCardSkeleton;
