import { apiClient } from "@/lib/api/client";
import { BookingsQueryParams, BookingsResponse } from "@/types";

export const fetchBookings = async (
  params: BookingsQueryParams,
): Promise<BookingsResponse> => {
  const { data } = await apiClient.get("/bookings", { params });
  return data;
};
