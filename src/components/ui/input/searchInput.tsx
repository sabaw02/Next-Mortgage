"use client";
import React, { FC, useCallback, useRef } from "react";
import searchIcon from "@/assets/icons/input/searchIcon.svg";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// interface SearchProps {
//   setSearch: (value: string) => void;
// }

const SearchInput = () => {
  // const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // const handleSearch = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (debounceTimerRef.current) {
  //       clearTimeout(debounceTimerRef.current);
  //     }

  //     const timeout = setTimeout(() => {
  //       const query = e.target.value;
  //       setSearch(query);
  //     }, 700);

  //     debounceTimerRef.current = timeout;
  //   },
  //   [setSearch],
  // );

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-68 xl:w-85.5 h-9.5">
      <input
        type="text"
        placeholder="جستجو کنید"
        className="xl:w-85.5 h-9.5 w-68 rounded-2xl border border-primary-300 outline-none bg-neutral-50 text-neutral-500 text-xs font-medium pr-5 pl-14"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="bg-primary-300 w-9.5 h-9.5 rounded-l-2xl absolute top-0 left-0 flex justify-center items-center">
        <Image src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default SearchInput;
