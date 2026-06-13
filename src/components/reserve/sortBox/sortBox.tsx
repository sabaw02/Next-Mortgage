"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface SortControlProps {
  currentSort: string;
  currentOrder: string;
}

const sortOptions = [
  { value: "price", label: "قیمت" },
  { value: "last_updated", label: "جدیدترین" },
  { value: "area", label: "ظرفیت" },
];

const SortBox: FC<SortControlProps> = ({ currentOrder, currentSort }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleOrder = (order: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("order", order);
    router.push(`${pathname}?${params.toString()}`);
  };
  const handleSort = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearSort = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    params.delete("order");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 dark:bg-[#cbd5e1] bg-white border border-neutral-100 rounded-xl px-4 py-2  ">
      <span className="text-sm text-neutral-600 whitespace-nowrap">
        مرتب‌سازی:
      </span>

      <button
        onClick={() => handleSort("last_updated")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${
          currentSort === "last_updated"
            ? " bg-primary-500 font-medium "
            : "  text-neutral-700 "
        }`}
      >
        <span>جدیدترین</span>
      </button>
      <button
        onClick={() => handleSort("area")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${
          currentSort === "area"
            ? " bg-primary-500 font-medium "
            : "  text-neutral-700 "
        }`}
      >
        <span>مساحت</span>
      </button>

      {/* <button
        onClick={() => handleSort("created_at")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${
          currentSort === "created_at"
            ? " bg-primary-500 font-medium "
            : "  text-neutral-700 "
        }`}
      >
        <span>created_at</span>
      </button> */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleOrder("ASC")}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${
            currentOrder === "ASC"
              ? " bg-primary-500 font-medium "
              : "  text-neutral-700 "
          }`}
        >
          <span>صعودی</span>
        </button>
        <button
          onClick={() => handleOrder("DESC")}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer ${
            currentOrder === "DESC"
              ? "  bg-primary-500  font-medium "
              : "  text-neutral-700 "
          }`}
        >
          <span>نزولی</span>
        </button>
      </div>

      <button
        onClick={handleClearSort}
        className="flex items-center gap-1 text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
        aria-label="حذف مرتب‌سازی"
      >
        <IoCloseCircleOutline className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SortBox;
