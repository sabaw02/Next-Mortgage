import { BookingsQueryParams } from "@/types";

export const queryKeys = {
  bookings: (params: BookingsQueryParams) => ["bookings", params] as const,
};
