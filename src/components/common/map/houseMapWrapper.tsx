"use client";
import { HousesProps } from "@/types";
import dynamic from "next/dynamic";

const HouseMap = dynamic(() => import("./houseMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-72 lg:h-80 rounded-2xl border border-neutral-200 mb-5 flex items-center justify-center bg-neutral-50">
      {/* <span className="text-neutral-400">در حال بارگذاری نقشه...</span> */}
    </div>
  ),
});

interface HouseMapWrapperProps {
  houses: HousesProps;
}

const HouseMapWrapper = ({ houses }: HouseMapWrapperProps) => {
  return <HouseMap houses={houses} />;
};

export default HouseMapWrapper;
