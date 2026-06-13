"use client";

import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  limit: number;
  search?: string;
}

const PaginationComponent: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  limit,
  search = "",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const safeTotalPages = Math.max(1, totalPages);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > safeTotalPages) return;

    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", page.toString());
    params.set("limit", limit.toString());

    if (search) {
      params.set("search", search);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisiblePages = 5;

    if (safeTotalPages <= maxVisiblePages) {
      for (let i = 1; i <= safeTotalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(2, safeCurrentPage - 1);
      let end = Math.min(safeTotalPages - 1, safeCurrentPage + 1);

      if (safeCurrentPage <= 3) {
        start = 2;
        end = 4;
      } else if (safeCurrentPage >= safeTotalPages - 2) {
        start = safeTotalPages - 3;
        end = safeTotalPages - 1;
      }

      if (start > 2) {
        pages.push("ellipsis");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < safeTotalPages - 1) {
        pages.push("ellipsis");
      }

      pages.push(safeTotalPages);
    }

    return pages;
  };

  if (safeTotalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center mt-6">
      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-4xl bg-[#F6F6F6]">
        <button
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
          className="flex items-center gap-1 px-4 py-2 rounded-lg transition-colors  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoIosArrowForward className="text-primary-600 disabled:opacity-50 w-6 h-6" />
        </button>
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "ellipsis" ? (
                <span className="w-11.25 h-12 flex items-center justify-center text-sm text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => handlePageChange(page as number)}
                  className={`
                    w-11.25 h-12 rounded-lg text-sm font-medium transition-all
                    ${
                      safeCurrentPage === page
                        ? "bg-[#1C5387] text-white shadow-sm"
                        : "bg-[#F6F6F6] text-gray-800 hover:bg-gray-200"
                    }
                  `}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === safeTotalPages}
          className="flex items-center gap-1 px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoIosArrowBack className="text-primary-600 disabled:opacity-50 w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
