import Image from "next/image";
import React from "react";
import { FaBuilding, FaBed, FaBath, FaCar, FaTree } from "react-icons/fa";

interface ServicesTabProps {
  categories: string;
  bathrooms: number;
  rooms: number;
  yard_type: string | null;
  parking: number;
}

const ServicesTab = ({
  categories,
  bathrooms,
  rooms,
  yard_type,
  parking,
}: ServicesTabProps) => {
  const amenities = [
    {
      label: "نوع ملک",
      value: categories === "villa" ? "ویلا" : categories,
      icon: FaBuilding,
    },
    { label: "تعداد اتاق", value: `${rooms} اتاق`, icon: FaBed },
    { label: "تعداد حمام", value: `${bathrooms} حمام`, icon: FaBath },
    {
      label: "پارکینگ",
      value: parking ? `${parking} جای پارک` : "ندارد",
      icon: FaCar,
    },
    { label: "حیاط", value: yard_type || "ندارد", icon: FaTree },
  ];

  return (
    <div className="mt-5 flex gap-4 flex-wrap">
      {amenities.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 px-3 items-center w-[200px] h-[76px] border border-[#E4E4E4] rounded-2xl"
        >
          <div className="content-center mx-1 w-[44px] h-[44px] rounded-sm bg-[#F7F2F1] flex items-center justify-center">
            <item.icon className="w-[24px] h-[24px] text-[#1C5387]" />
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-[#1C5387]">
              {item.label}
            </h4>
            <p className="text-[14px] font-light text-[#5C5C5C]">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesTab;
