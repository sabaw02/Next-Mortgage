"use client";
import SearchInput from "@/components/ui/input/searchInput";
import InputSelect from "@/components/ui/input/inputSelect";
import { FilterBoxProps } from "@/types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { LuHotel, LuLayoutGrid } from "react-icons/lu";
import { MdSort } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import Range from "@/components/ui/input/range";
import MinMaxInput from "@/components/ui/input/minmaxInput";

const FilterBox: FC<FilterBoxProps> = ({
  isRes,
  location,
  maxPrice,
  minPrice,
  houses,
  minRent,
  maxRent,
  minMortgage,
  maxMortgage,
  minArea,
  maxArea,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateUrl = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "   ") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };
  // cities
  const [city, setCity] = useState("");
  const cityOptions = [
    { value: "ساری", label: "ساری" },
    { value: "تهران", label: "تهران" },
    { value: "بابلسر", label: "بابلسر" },
    { value: "فرح اباد", label: "فرح اباد" },
    { value: "نوشهر", label: "نوشهر" },
  ];
  const handleCityChange = (val: string) => {
    setCity(val);
    updateUrl({ location: val });
  };
  // prices
  const [minPriceAmount, setMinPriceAmount] = useState(
    minPrice?.toString() || "",
  );
  const [maxPriceAmount, setMaxPriceAmount] = useState(
    maxPrice?.toString() || "",
  );
  const handleMinPriceChange = (val: string) => {
    setMinPriceAmount(val);
    updateUrl({ minPrice: val });
  };
  const handleMaxPriceChange = (val: string) => {
    setMaxPriceAmount(val);
    updateUrl({ maxPrice: val });
  };
  // rents
  const [minRentAmount, setMinRentAmount] = useState(minRent?.toString() || "");
  const [maxRentAmount, setMaxRentAmount] = useState(maxRent?.toString() || "");
  const handleMinRentChange = (val: string) => {
    setMinRentAmount(val);
    updateUrl({ minRent: val });
  };
  const handleMaxRentChange = (val: string) => {
    setMaxRentAmount(val);
    updateUrl({ maxRent: val });
  };

  // Mortgages
  const [minMortgageAmount, setMinMortgageAmount] = useState(
    minMortgage?.toString() || "",
  );
  const [maxMortgageAmount, setMaxMortgageAmount] = useState(
    maxMortgage?.toString() || "",
  );
  const handleMinMortgageChange = (val: string) => {
    setMinMortgageAmount(val);
    updateUrl({ minMortgage: val });
  };
  const handleMaxMortgageChange = (val: string) => {
    setMaxMortgageAmount(val);
    updateUrl({ maxMortgage: val });
  };

  // Areas
  const [minAreaAmount, setMinAreaAmount] = useState(minArea?.toString() || "");
  const [maxAreaAmount, setMaxAreaAmount] = useState(maxArea?.toString() || "");
  const handleMinAreaChange = (val: string) => {
    setMinAreaAmount(val);
    updateUrl({ minArea: val });
  };
  const handleMaxAreaChange = (val: string) => {
    setMaxAreaAmount(val);
    updateUrl({ maxArea: val });
  };

  const hasActiveFilters = !!(
    // propertyType ||

    (
      location ||
      minPrice ||
      maxPrice ||
      minRent ||
      maxRent ||
      minMortgage ||
      maxMortgage ||
      minArea ||
      maxArea
    )
  );

  const clearAllFilters = () => {
    // setPropertyType("");
    setCity("");
    setMaxPriceAmount("");
    setMinPriceAmount("");
    setMaxRentAmount("");
    setMinRentAmount("");
    setMaxMortgageAmount("");
    setMinMortgageAmount("");
    setMaxAreaAmount("");
    setMinAreaAmount("");

    const params = new URLSearchParams(searchParams);
    params.delete("location");
    params.delete("minPrice");
    params.delete("maxPrice");
    params.delete("minRent");
    params.delete("maxRent");
    params.delete("minMortgage");
    params.delete("maxMortgage");
    params.delete("minArea");
    params.delete("maxArea");
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-full h-full space-y-6">
      {/* Search */}
      <div
        className={`${isRes === true ? "hidden" : ""} flex flex-col space-x-2 text-primary-500 space-y-3`}
      >
        <div className="flex items-center space-x-2">
          <BiSearch className="text-primary-500 w-5 h-5 font-bold" />
          <span>جستجو</span>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>

      {/* Property type */}
      {/* <div className="flex flex-col space-x-2 text-primary-500 space-y-3">
        <div className="flex items-center space-x-2">
          <LuHotel className="text-primary-500 w-5 h-5 font-bold" />
          <span>مقصد شما</span>
        </div>
        <div>
          <InputSelect
            placeholder="انتخاب کنید"
            options={propertyOptions}
            value={propertyType}
            onChange={handlePropertyTypeChange}
          />
        </div>
      </div> */}

      {/* location */}
      <div className="flex flex-col space-x-2 text-primary-500 space-y-3">
        <div className="flex items-center space-x-2">
          <LuHotel className="text-primary-500 w-5 h-5 font-bold" />
          <span>شهر</span>
        </div>
        <div>
          <InputSelect
            placeholder="انتخاب کنید"
            options={cityOptions}
            value={city}
            onChange={handleCityChange}
          />
        </div>
      </div>

      {/* Price range */}
      <MinMaxInput
        icon={<CiMoneyCheck1 className="text-primary-500 w-5 h-5 font-bold" />}
        label="محدوده قیمت"
        maxOnChange={handleMaxPriceChange}
        maxPlaceholder="حداکثر قیمت"
        maxValue={maxPriceAmount}
        minOnChange={handleMinPriceChange}
        minPlaceholder="حداقل قیمت"
        minValue={minPriceAmount}
      />

      {/* Rent range */}
      <MinMaxInput
        icon={<CiMoneyCheck1 className="text-primary-500 w-5 h-5 font-bold" />}
        label="محدوده اجاره"
        minOnChange={handleMinRentChange}
        minPlaceholder="حداقل اجاره"
        minValue={minRentAmount}
        maxOnChange={handleMaxRentChange}
        maxPlaceholder="حداکثر اجاره"
        maxValue={maxRentAmount}
      />

      {/* Mortgage range */}
      <MinMaxInput
        icon={<CiMoneyCheck1 className="text-primary-500 w-5 h-5 font-bold" />}
        label="محدوده رهن"
        minOnChange={handleMinMortgageChange}
        minPlaceholder="حداقل رهن"
        minValue={minMortgageAmount}
        maxOnChange={handleMaxMortgageChange}
        maxPlaceholder="حداکثر رهن"
        maxValue={maxMortgageAmount}
      />

      {/* Area range */}
      <MinMaxInput
        icon={<CiMoneyCheck1 className="text-primary-500 w-5 h-5 font-bold" />}
        label="محدوده رهن"
        minOnChange={handleMinAreaChange}
        minPlaceholder="حداقل متراژ"
        minValue={minAreaAmount}
        maxOnChange={handleMaxAreaChange}
        maxPlaceholder="حداکثر متراژ"
        maxValue={maxAreaAmount}
      />

      {hasActiveFilters && (
        <button
          onClick={clearAllFilters}
          className="w-full h-9.5 cursor-pointer flex items-center justify-center gap-2 bg-white border border-red-300 rounded-2xl text-red-500 text-xs font-medium hover:bg-red-50 transition-colors"
        >
          <IoCloseCircleOutline className="w-4 h-4" />
          حذف همه فیلترها
        </button>
      )}

      <div
        className={`${isRes === true ? "hidden" : ""} w-full h-9.5 bg-primary-500 rounded-2xl text-white text-xs font-medium flex justify-center items-center`}
      >
        تعداد آگهی: {houses?.totalCount}
      </div>
    </div>
  );
};

export default FilterBox;
