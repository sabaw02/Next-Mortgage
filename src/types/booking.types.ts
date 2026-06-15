export type BookingSortField = "created_at" | "updated_at" | "check_in_date" | "check_out_date";
export type BookingSortOrder = "ASC" | "DESC";

export interface TravelerDetail {
  gender: string;
  lastName: string;
  birthDate: string;
  firstName: string;
  nationalId: string;
}

export interface BookingHouse {
  title: string;
  price: string;
}

export interface Booking {
  id: number;
  user_id: number;
  houseId: number;
  reservedDates: string[];
  traveler_details: TravelerDetail[];
  status: "pending" | "confirmed" | "cancelled";
  sharedEmail: string;
  sharedMobile: string;
  createdAt: string;
  updatedAt: string;
  created_at: string;
  updated_at: string;
  house: BookingHouse;
}

export interface BookingsResponse {
  data: Booking[];
  totalCount: number;
}

export interface BookingsQueryParams {
  page: number;
  limit: number;
  sort?: BookingSortField;
  order?: BookingSortOrder;
}