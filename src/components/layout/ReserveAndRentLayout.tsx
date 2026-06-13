import React, { FC, useState } from "react";
import AboutTabs from "../ReserveAndRentDetails/AboutTabs";
import ServicesTab from "../ReserveAndRentDetails/ServicesTab";
import ReviewsTabs from "../ReserveAndRentDetails/ReviewsTabs";
import MapTabs from "../ReserveAndRentDetails/MapTabs";

interface ReserveAndRentLayoutProps {
  showTabs: boolean;
  caption: string;
  categories: string;
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string | null;
  title: string;
}

const ReserveAndRentLayout: FC<ReserveAndRentLayoutProps> = ({
  showTabs,
  caption,
  categories,
  bathrooms,
  parking,
  rooms,
  yard_type,
  title,
}) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
      {/* tab buttons */}
      <div className="flex gap-2 z-50">
        <button
          className={`max-[1024px]:w-[25%] w-[148px] h-[48px] text-[16px] font-semibold text-[#FFFFFF] rounded-[18px]
                    ${activeTab === "about" ? "bg-[#1C5387]" : "bg-[#B9CADA]"}`}
          onClick={() => setActiveTab("about")}
        >
          درباره ملک
        </button>
        <button
          className={`max-[1024px]:w-[25%] w-[148px] h-[48px] text-[16px] font-semibold text-[#FFFFFF] rounded-[18px]
                    ${activeTab === "service" ? "bg-[#1C5387]" : "bg-[#B9CADA]"}`}
          onClick={() => setActiveTab("service")}
        >
          امکانات
        </button>
        {showTabs && (
          <button
            className={`max-[1024px]:w-[25%] w-[148px] h-[48px] text-[16px] font-semibold text-[#FFFFFF] rounded-[18px]
                    ${activeTab === "map" ? "bg-[#1C5387]" : "bg-[#B9CADA]"}`}
            onClick={() => setActiveTab("map")}
          >
            موقعیت
          </button>
        )}
        <button
          className={`max-[1024px]:w-[25%] w-[148px] h-[48px] text-[16px] font-semibold text-[#FFFFFF] rounded-[18px]
                    ${activeTab === "reviws" ? "bg-[#1C5387]" : "bg-[#B9CADA]"}`}
          onClick={() => setActiveTab("reviws")}
        >
          نظرات
        </button>
      </div>

      {/* tab body */}
      <div className="w-[80%] h-auto">
        {activeTab === "about" && <AboutTabs title={title} caption={caption} />}
        {activeTab === "service" && (
          <ServicesTab
            categories={categories}
            bathrooms={bathrooms}
            rooms={rooms}
            yard_type={yard_type}
            parking={parking}
          />
        )}
        {activeTab === "reviws" && <ReviewsTabs />}
        {activeTab === "map" && <MapTabs />}
      </div>
    </div>
  );
};

export default ReserveAndRentLayout;
