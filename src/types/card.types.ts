import { number } from "framer-motion";
import { HousesProps } from "./houses.types";

export interface MainCardProps {
  id: string | number;
  title: string;
  address: string;
 photos?: string | null | any;
  rate: string;
  discounted_price: string | number;
  price: string | number;
  tags: string[];
  last_updated: string;
  capacity: number;
  location?: { lat: number; lng: number } | string | null;
  categories: string | null;
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string | null;
  num_comments: number;
  discount_id: number | null;
  transaction_type: string;
  sellerId: number;
  sellerName: string;
  caption: string;
  bookings: number;
  favoriteId: number | null;
  isFavorite: boolean;
  isDiscount?: boolean;
}

export interface CategoryCardProps {
  locations?: Array<{
    id: number;
    areaName: null | string;
    lat: string;
    lng: string;
  }>;
  totalCount?: number;
  loading?: boolean;
}

export interface GridCardProps {
  id: string | number;
  title?: string;
  photos?: string | null | any;
  rate?: string;
  location?: { lat: number; lng: number } | string | null;
  price: number;
  discounted_price?: number;
  discountPercent?: number;
  buttonTitle?: string;
  isReserve: boolean;
  capacity?: number;
  bathrooms?: number;
  parking?: boolean | number;
  rooms?: number;
  yard_type?: string;
  isFavorite: boolean;
  address?: string;
}

export interface BlogsCardProps {
  id: string | number;
  title: string;
  caption: string;
  estimated_reading_time: string | number;
  author_id: string | number;
  created_at: string | number;
  updated_at: string | number;
  category_id: string | number;
  img: string;
  photos: string | null;
  views: number;
}
