export interface HousesProps {
  houses: Array<{
    id: string | number;
    title: string;
    address: string;
    photos: string | null;
    rate: string;
    discounted_price: number;
    price: number;
    tags: string[];
    last_updated: string;
    capacity: number;
    location?:
      | {
          lat: number;
          lng: number;
        }
      | null
      | string;
    categories: string | null;
    bathrooms: number;
    parking: number;
    rooms: number;
    yard_type: string;
    num_comments: number;
    discount_id: number | null;
    transaction_type: string;
    sellerId: number;
    sellerName: string;
    caption: string;
    bookings: number;
    favoriteId: number | null;
    isFavorite: boolean;
  }>;
  totalCount: number;
}

// export interface GridCardProps {

//     id: string | number;
//   title?: string;
//   photos?: string;
//   rate?: number;
//   location?: string;
//   price: number;
//   discounted_price?: number;
//   discountPercent?: number;
//   buttonTitle?: string;
//   isReserve: boolean;
//   capacity?: number;
//   bathrooms?: number;
//   parking?: boolean | number;
//   rooms?: number;
//   yard_type?: string;
// }

export interface HouseDetailProps {
  id: number;
  title: string;
  address: string;
  photos: string[] | null;
  rate: string;
  discounted_price: number | null;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: string;
  categories: string;
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
  favoriteId: number | null;
  isFavorite: boolean;
}
