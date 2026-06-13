"use client";
import React from "react";
import MenuSidebar from "./MenuSidebar";
import Link from "next/link";
import { LogOut, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItemsByRole } from "./navItems";

interface SidebarProps {
  role: "buyer" | "seller" | "admin";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const items = navItemsByRole[role];

  return (
    <div className="flex flex-col w-67.5 h-193.75 rounded-3xl bg-[#FFFFFF] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] text-[#000000] font-black">هوم نت</h1>
        <Link href="/">
          <LogOut color="black" />
        </Link>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-2 rounded-lg transition
                ${isActive ? "bg-gray-300" : "hover:bg-gray-100"}
              `}
            >
              <Icon className="size-5" color="black" />
              <p className="font-medium text-[18px] text-[#000000]">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto p-4 flex gap-5 items-center border border-dashed w-58 h-20 rounded-3xl">
        <Wallet size={28} color="black" />
        <div className="w-18.5 h-13.75">
          <h6 className="text-[20px] text-[#000000]">کیف پول</h6>
          <p className="mt-1 text-[14px] text-[#888888]">عدم موجودی</p>
        </div>
      </div>
    </div>
  );
}
