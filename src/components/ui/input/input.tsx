import { InputProps } from "@/types";
import React, { FC } from "react";

const Input: FC<InputProps> = ({ placeholder, type, icon }) => {
  return (
    <div className="relative w-98.25 h-12">
      <input
        type={type}
        placeholder={placeholder}
        className="w-98.25 h-12 border border-neutral-200 rounded-2xl outline-none text-neutral-600 text-base font-normal pr-3 pl-10"
      />
      <div className="text-neutral-500  absolute top-3.5 left-3 flex justify-center items-center ">
        {icon ? icon : ""}
      </div>
    </div>
  );
};

export default Input;
