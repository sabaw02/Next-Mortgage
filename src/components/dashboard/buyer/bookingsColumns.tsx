import { ColumnDef } from "@/components/ui/table/CustomTable";
import { Booking } from "@/types";
import { Chip } from "@heroui/react";

const statusLabelMap: Record<string, string> = {
  confirmed: "تأیید شده",
  cancelled: "لغو شده",
  pending: "در انتظار",
};

export const bookingColumns: ColumnDef<Booking>[] = [
  {
    id: "status",
    label: "وضعیت",
    render: (row) => (
      <Chip color="default" size="sm" variant="soft">
        {statusLabelMap[row.status] ?? row.status}
      </Chip>
    ),
  },
  {
    id: "reservedDates",
    label: "تاریخ رزرو",
    render: (row) => (
      <div className="flex flex-col gap-0.5 text-sm text-primary-600">
        <span>
          ورود: {new Date(row.reservedDates[0]).toLocaleDateString("fa-IR")}
        </span>
        <span>
          خروج: {new Date(row.reservedDates[1]).toLocaleDateString("fa-IR")}
        </span>
      </div>
    ),
  },

  {
    id: "sharedMobile",
    label: "موبایل",
    render: (row) => (
      <span className="text-sm text-primary-600">{row.sharedMobile}</span>
    ),
  },

  {
    id: "created_at",
    label: "تاریخ ثبت",
    allowsSorting: true,
    render: (row) => (
      <span className="text-primary-600">
        {new Date(row.created_at).toLocaleDateString("fa-IR")}
      </span>
    ),
  },
  {
    id: "traveler_details",
    label: "مسافر اول",
    render: (row) => {
      const t = row.traveler_details[0];
      if (!t) return <span className="text-neutral-800">—</span>;
      return (
        <span className="text-sm text-primary-600!">
          {t.firstName} {t.lastName}
        </span>
      );
    },
  },
  {
    id: "house",
    label: "ملک",
    render: (row) => (
      <div className="flex flex-col gap-0.5 text-primary-600">
        <span className="font-medium text-sm">{row.house.title}</span>
        <span className="text-xs ">
          {Number(row.house.price).toLocaleString("fa-IR")} تومان / شب
        </span>
      </div>
    ),
  },
  {
    id: "id",
    label: "شناسه رزرو",
    isRowHeader: true,
    render: (row) => (
      <span className="font-medium flex text-primary-600 pr-2">{row.id}</span>
    ),
  },
];
