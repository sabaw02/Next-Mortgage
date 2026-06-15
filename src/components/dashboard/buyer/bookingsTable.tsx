"use client";

import { useState } from "react";
import type { SortDescriptor } from "@heroui/react";
import { Button, EmptyState } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bookingColumns } from "./bookingsColumns";
import { Booking, BookingSortField, BookingSortOrder } from "@/types";
import { CustomTable } from "@/components/ui/table/CustomTable";
import { useBookings } from "@/utils/hooks/queries/useBookings";
import arrow from "@/assets/icons/dashboard/arrow.svg";
import Image from "next/image";
import { PiTray } from "react-icons/pi";

const SORTABLE_FIELDS: BookingSortField[] = [
  "created_at",
  "updated_at",
  "check_in_date",
  "check_out_date",
];

const LIMIT = 4;

export default function BookingsTable() {
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "created_at",
    direction: "descending",
  });

  const sortField = SORTABLE_FIELDS.includes(
    sortDescriptor.column as BookingSortField,
  )
    ? (sortDescriptor.column as BookingSortField)
    : "created_at";

  const sortOrder: BookingSortOrder =
    sortDescriptor.direction === "ascending" ? "ASC" : "DESC";

  const { data, isLoading, isError, isFetching } = useBookings({
    page,
    limit: LIMIT,
    sort: sortField,
    order: sortOrder,
  });

  const bookings: Booking[] = data?.data ?? [];
  console.log("book", bookings);
  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / LIMIT));

  const handleSortChange = (descriptor: SortDescriptor) => {
    setSortDescriptor(descriptor);
    setPage(1);
  };

  if (isError) {
    return (
      <div className="py-10 text-center text-red-500">
        خطا در دریافت اطلاعات. لطفاً دوباره تلاش کنید.
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-white p-5 rounded-xl mt-5">
      {isFetching && !isLoading && (
        <p className="text-left text-xs text-neutral-400">در حال بارگذاری...</p>
      )}
      <div className="flex justify-between w-full pb-4 border-b border-neutral-200 border-dashed">
        <div className=" text-primary-900 text-base">رزرو های اخیر</div>
        <button className="flex cursor-pointer items-center space-x-4 text-base text-primary-900  ">
          <span className="flex items-center gap-1">مشاهده</span>
          <span className="flex items-center text-base ">
            <Image src={arrow} alt="icon" width={62} height={17} />
          </span>
        </button>
      </div>
      <CustomTable<Booking>
        ariaLabel="جدول رزروها"
        columns={bookingColumns}
        data={isLoading ? [] : bookings}
        selectable={false}
        defaultSort={sortDescriptor}
        disableClientSort={true}
        emptyContent={
          <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
            <PiTray className="size-6 text-muted" />
            <span className="text-sm text-muted">{isLoading ? "" : ""}</span>
          </EmptyState>
        }
        onSortChange={handleSortChange}
        pagination={{
          page: page,
          onPageChange: setPage,
          totalPages: totalPages,
          totalItems: totalCount,
          rowsPerPage: LIMIT,
        }}
      />
    </div>
  );
}
