import Image from "next/image";
import React from "react";
import moon from "@/assets/icons/cards/moon.svg";



const ReserveContent = () => {
  return (
    <div className="h-6 flex space-x-2">
      <Image src={moon} alt="location" className="w-6 h-6" />
      <span className="text-primary-400  font-light text-base  dark:text-white">6 شب</span>
    </div>
  );
};

export default ReserveContent;
