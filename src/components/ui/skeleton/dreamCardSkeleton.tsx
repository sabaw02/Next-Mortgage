"use client";
const DreamCardSkeleton = () => {
  return (
    <div>
      <div className="w-77.5 h-76 border dark:border-[#cbd5e1]/5 rounded-3xl  dark:bg-[#334155]/90 bg-white ">
        {/* عکس  */}
        <div className="w-full h-48  bg-[#cbd5e1]/50 rounded-t-3xl animate-pulse" />

        {/*   متن */}
        <div className="w-67.5 h-18 m-auto relative top-4 space-y-4">
          <div className="flex justify-between">
            {/*  متن  */}
            <div className="h-5 w-24 bg-[#cbd5e1]/50 rounded animate-pulse" />
            {/*   متن چپ */}
            <div className="h-5 w-16 bg-[#cbd5e1]/50 rounded animate-pulse" />
          </div>

          {/*  دکمه */}
          <div className="w-67.5 h-8 bg-[#cbd5e1]/50 rounded-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
export default DreamCardSkeleton;