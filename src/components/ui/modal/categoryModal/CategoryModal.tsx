"use client";
import { FC, useEffect, useMemo, useState } from "react";
import MainCard from "../../cards/mainCard/mainCard";
import { FiX } from "react-icons/fi";
import { PropsModal } from "@/types/propsModal";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const CategoryModal: FC<PropsModal> = ({ type, open, setType, onClose }) => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  const filters = [
    { label: "همه", value: "all" },
    { label: "ویلا", value: "villa" },
    { label: "کلبه", value: "cottage" },
    { label: "بومگردی", value: "eco" },
    { label: "استخردار", value: "pool" },
    { label: "ساحلی", value: "coastal" },
    { label: "آپارتمان", value: "apartment" },
  ];

  const getLabelByValue = (value: string) => {
    const filter = filters.find((f) => f.value === value);
    return filter ? filter.label : "";
  };

  useEffect(() => {
    if (!open) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/houses`);
        if (!res.ok) {
          throw new Error("خطا");
        }
        const data = await res.json();
        setHouses(data.houses || []);
      } catch (error) {
        console.log(error);
        setHouses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const filteredHouses = useMemo(() => {
    if (!houses || !Array.isArray(houses)) return [];

    if (type === "all") return houses;

    const persianLabel = getLabelByValue(type);

    return houses.filter((item: any) => {
      const title = item.title?.toLowerCase() || "";
      return title.includes(persianLabel.toLowerCase());
    });
  }, [houses, type]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-9999 bg-black/60 backdrop-blur-md flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] max-w-6xl max-h-[85vh] overflow-y-auto bg-white/20 dark:bg-[#0f172a]/70 border border-white/10 rounded-2xl shadow-2xl"
      >
        {/* header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          {/* filters */}
          <div className="p-4 flex gap-2 overflow-x-auto">
            {filters.map((item) => {
              const active = type === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => setType?.(item.value)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
                    ${active ? "bg-white text-black" : "bg-white/10 text-white"} `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-none sm:bg-white/50 text-white flex items-center justify-center"
          >
            <FiX />
          </button>
        </div>

        {/* body */}
        <div className="p-5">
          {loading && (
            <div className="text-white text-center py-10">
              در حال بارگذاری...
            </div>
          )}
          {!loading && filteredHouses.length === 0 && (
            <div className="text-white/70 text-center py-10">
              نتیجه‌ای پیدا نشد
            </div>
          )}
          {!loading && filteredHouses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {filteredHouses.map((item: any) => (
                <MainCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
