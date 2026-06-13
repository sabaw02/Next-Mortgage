import { ButtonsProps } from "@/types";
import React, { FC } from "react";

const ButtonLg: FC<ButtonsProps> = ({ text, isOutline, icon, iconPos }) => {
  return (
    <div className="">
      <button
        className={`cursor-pointer w-83.5 h-12 ${isOutline === true ? "border border-primary-500" : "bg-primary-500"} 
         rounded-2xl text-[14px] flex justify-center items-center space-x-10 relative`}
      >
        {iconPos === "right" ? (
          <div className="absolute right-15">{icon}</div>
        ) : (
          ""
        )}

        <span
          className={`font-semibold text-base relative top-0.5 ${isOutline === true ? "text-primary-500" : "text-white"}`}
        >
          {text}
        </span>
             {iconPos === "left" ? (
          <div className="absolute left-15">{icon}</div>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default ButtonLg;
