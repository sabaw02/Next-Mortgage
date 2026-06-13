"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <div className="relative">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative max-[550px]:w-16 max-[550px]:h-8 w-18 h-10"
      >
        <div
          className={`relative w-full h-full rounded-full flex justify-center items-center backdrop-blur-md transition-all duration-500 hover:scale-105 active:scale-95
            ${
              isDark
                ? "border-2 border-primary-500"
                : "border-2 border-primary-500"
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative w-5 h-5">
              <BiSun
                className={`text-[20px] absolute inset-0 text-primary-500 transition-all duration-500
                  ${isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}
                `}
              />
              <BiMoon
                className={`text-[20px] absolute inset-0 text-blue-400 transition-all duration-500
                  ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}
                `}
              />
            </div>

            <div className="relative">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500
                  ${isDark ? "bg-blue-400" : "bg-primary-500"}
                `}
              >
                <div
                  className={`absolute inset-0 rounded-full animate-ping opacity-75
                    ${isDark ? "bg-blue-400" : "bg-primary-500"}
                  `}
                />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
