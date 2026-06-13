"use client";
import { useState } from "react";
import Link from "next/link";
import { headerNavItemes } from "@/constants/navItemes";
import { usePathname } from "next/navigation";

const HeaderTablet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="max-[550px]:hidden lg:hidden relative mt-4">
      <div className="w-25  h-20 content-center   ">
        {/* دکمه */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-2 w-20 h-15 mx-auto items-center justify-center "
        >
          <span
            className={`content-center block w-7 h-0.5 bg-black transition-all duration-300 
                    ${isOpen ? "translate-y-3 rotate-45 " : ""}
                `}
          />
          <span
            className={`content-center  block w-7 h-0.5 bg-black transition-all duration-300 
                    ${isOpen ? "opacity-0 " : ""}
                `}
          />
          <span
            className={`content-center  block w-7 h-0.5 bg-black transition-all duration-300 
                    ${isOpen ? "-translate-y-2 -rotate-45 " : ""}
                `}
          />
        </button>

        {/* منو کشویی */}
        <div
          className={`rounded-br-3xl rounded-tr-3xl z-10 sticky top-36 right-20 h-auto w-40 bg-white dark:bg-[#334155] border-r-2 border-r-[#1c5387] shadow-lg 
             transition-transform duration-300 
                    ${isOpen ? "translate-x-0" : "-translate-x-500"}
                `}
        >
          <div className="flex flex-col h-auto gap-1 p-3 ">
            {headerNavItemes.map((item, index) => {
              if (item.id <= 6) {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={` z-50 py-1 border-b last:border-b-0 border-[#1c5387]/10 transition-all duration-300 
                                    ${isActive ? "text-[#1C5387] border-b-[#1C5387]  decoration-2 " : "text-[#1B1B1B] dark:text-[#cbd5e1] hover:text-[#1C5387] hover:border-[#1C5387]"}`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTablet;
