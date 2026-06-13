"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { FiX } from "react-icons/fi";
import { Search } from "lucide-react";
import MainCard from "../../cards/mainCard/mainCard";
import { PropsModal } from "@/types/propsModal";
import { MainCardProps } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const SearchModal: FC<PropsModal> = ({ open, type, onClose }) => {
  const [houses, setHouses] = useState<MainCardProps[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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
        let list = data?.houses || [];

        if (type && type !== "all") {
          list = list.filter((item: any) => item?.tags === type);
        }
        setHouses(list);
      } catch (error) {
        console.log(error);
        setHouses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [open, type]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const normalize = (val: any) =>
    (val ?? "").toString().toLowerCase().replace(/\s+/g, " ").trim();

  const filtered = useMemo(() => {
    const resultSearch = normalize(search);

    if (!resultSearch) return houses;

    return houses.filter((house) => {
      const title = normalize(house.title);
      const address = normalize(house.address);
      const location = normalize(house.location);

      return (
        title.includes(resultSearch) ||
        address.includes(resultSearch) ||
        location.includes(resultSearch)
      );
    });
  }, [search, houses]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999  bg-black/60 backdrop-blur-md flex items-center justify-center">
      {/* modal */}
      <div className="[scroll-width-thin] w-[95%] max-w-6xl max-h-[85vh] overflow-y-auto bg-white/20 dark:bg-[#0f172a]/70 border border-white/10 rounded-2xl shadow-2xl">
        {/* header */}
        <div className="p-5 border-b border-white/10 flex justify-between items-center">
          <div>
            <h1 className="text-xl text-right font-bold text-white">
              جستجوی سریع
            </h1>
            <p className="text-white/50 text-sm mt-1">
              جستجو بر اساس نام، آدرس و موقعیت
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <FiX size={18} />
          </button>
        </div>
        {/*  search */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو ملک..."
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg py-2 pr-9 pl-3 text-sm outline-none focus:border-white/30"
            />
          </div>
        </div>
        {/* grid */}
        <div className="p-5">
          {loading && (
            <div className="text-white text-center py-10">
              در حال بارگذاری...
            </div>
          )}
          {!loading && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <MainCard key={item.id} {...item} />
              ))}
            </div>
          )}
          {!loading && filtered.length === 0 && (
            <div className="text-center text-white/50 text-sm py-10">
              نتیجه‌ای پیدا نشد
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
