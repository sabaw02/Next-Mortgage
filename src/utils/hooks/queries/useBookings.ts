import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/queryKeys";
import { fetchBookings } from "@/utils/api/dashboard/bookings.api";
import { BookingsQueryParams } from "@/types";

export const useBookings = (params: BookingsQueryParams) => {
  return useQuery({
    queryKey: queryKeys.bookings(params),
    queryFn: () => fetchBookings(params),
    placeholderData: (prev) => prev,
  });
};
