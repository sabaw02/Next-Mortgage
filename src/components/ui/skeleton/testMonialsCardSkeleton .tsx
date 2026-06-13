"use client";
const TestMonialsCardSkeleton = () => {
  return (
    <div className="w-90 h-101 rounded-[22px] dark:bg-[#334155]/90 bg-[#E8EEF3] border border-[#E4E4E4] dark:border-[#cbd5e1]/5">
      <div className="mx-auto w-[93%] h-87.75 flex flex-col items-center justify-center">
        {/*  عکس  */}
        <div className="w-20 h-20 bg-[#cbd5e1]/50 rounded-full animate-pulse mx-auto" />
        
        {/*  عنوان */}
        <div className="mt-5 h-6 w-32 bg-[#cbd5e1]/50 rounded animate-pulse" />
        
        {/* جای متن  */}
        <div className="mt-10 space-y-2 w-full">
          <div className="h-4 bg-[#cbd5e1]/50 rounded w-full animate-pulse" />
          <div className="h-4 bg-[#cbd5e1]/50 rounded w-5/6 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  )
}
export default TestMonialsCardSkeleton;