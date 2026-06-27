// import { HouseDetailProps, HousesProps } from "@/types";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export const getHouses = async (
//   search?: string,
//   page: number = 1,
//   limit: number = 7,
//   order: string = "DESC",
//   sort?: string,
//   location?: string,
//   minPrice?: number,
//   maxPrice?: number,
//   minRent?: number,
//   maxRent?: number,
//   minMortgage?: number,
//   maxMortgage?: number,
//   minArea?: number,
//   maxArea?: number,
// ): Promise<HousesProps> => {
//   let url = `${API_BASE_URL}/houses?page=${page}&limit=${limit}`;
//   if (search) url += `&search=${search}`;
//   if (order) url += `&order=${order}`;
//   if (sort) url += `&sort=${sort}`;
//   if (location) url += `&location=${location}`;
//   if (minPrice && !isNaN(minPrice)) url += `&minPrice=${minPrice}`;
//   if (maxPrice && !isNaN(maxPrice)) url += `&maxPrice=${maxPrice}`;
//   if (minRent && !isNaN(minRent)) url += `&minRent=${minRent}`;
//   if (maxRent && !isNaN(maxRent)) url += `&maxRent=${maxRent}`;
//   if (minMortgage && !isNaN(minMortgage)) url += `&minMortgage=${minMortgage}`;
//   if (maxMortgage && !isNaN(maxMortgage)) url += `&maxMortgage=${maxMortgage}`;
//   if (minArea && !isNaN(minArea)) url += `&minArea=${minArea}`;
//   if (maxArea && !isNaN(maxArea)) url += `&maxArea=${maxArea}`;

//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Failed to fetch houses");
//   // console.log(res.status);
//   return res.json();
// };

// export const getHouseById = async (
//   id: string | number,
// ): Promise<HouseDetailProps> => {
//   const url = `${API_BASE_URL}/houses/${id}`;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Failed to fetch house details");
//   return res.json();
// };



 import { HouseDetailProps, HousesProps } from "@/types";

const mockHouses: HousesProps = {
  totalCount: 6,
  houses: [
    {
      id: 1,
      title: "ویلا مدرن دوبلکس",
      address: "تهران - نیاوران - خیابان باغ سفارت",
      photos: "",
      rate: "4.8",
      discounted_price: 280000000,
      price: 350000000,
      tags: ["مدرن", "ویلا", "استخردار"],
      last_updated: "2026-06-12T23:07:52.000Z",
      capacity: 8,
      location: { lat: 35.8165, lng: 51.4374 },
      categories: "villa",
      bathrooms: 3,
      parking: 2,
      rooms: 4,
      yard_type: "private",
      num_comments: 12,
      discount_id: 1,
      transaction_type: "reservation",
      sellerId: 101,
      sellerName: "علی رضایی",
      caption: "ویلایی لوکس و مدرن در شمال تهران با استخر اختصاصی و چشم‌انداز کوه",
      bookings: 5,
      favoriteId: null,
      isFavorite: false,
    },
    {
      id: 2,
      title: "آپارتمان لوکس",
      address: "تهران - علی‌اکبر محمدآقا - ایرانشهر - منطقه ۶",
      photos: "",
      rate: "4.5",
      discounted_price: null,
      price: 9700000000,
      tags: ["مدرن", "آپارتمان", "آسانسوردار"],
      last_updated: "2026-06-12T23:07:52.000Z",
      capacity: 5,
      location: { lat: 35.70306677476758, lng: 51.42412662506104 },
      categories: "apartment",
      bathrooms: 2,
      parking: 2,
      rooms: 2,
      yard_type: "private",
      num_comments: 0,
      discount_id: null,
      transaction_type: "reservation",
      sellerId: 360,
      sellerName: "نام کاربر",
      caption: "آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است.",
      bookings: 0,
      favoriteId: null,
      isFavorite: false,
    },
    {
      id: 3,
      title: "خانه باغ سنتی",
      address: "اصفهان - خیابان چهارباغ عباسی",
      photos: "",
      rate: "4.9",
      discounted_price: 1200000000,
      price: 1500000000,
      tags: ["سنتی", "باغ", "تاریخی"],
      last_updated: "2026-06-10T10:00:00.000Z",
      capacity: 10,
      location: { lat: 32.6539, lng: 51.666 },
      categories: "villa",
      bathrooms: 4,
      parking: 3,
      rooms: 5,
      yard_type: "garden",
      num_comments: 24,
      discount_id: 2,
      transaction_type: "reservation",
      sellerId: 202,
      sellerName: "مریم حسینی",
      caption: "خانه‌ای با معماری اصیل ایرانی در دل تاریخ اصفهان",
      bookings: 18,
      favoriteId: 3,
      isFavorite: true,
    },
    {
      id: 4,
      title: "کلبه جنگلی",
      address: "مازندران - نوشهر - جاده چالوس",
      photos: "",
      rate: "4.7",
      discounted_price: null,
      price: 800000000,
      tags: ["طبیعت", "جنگل", "کوهستانی"],
      last_updated: "2026-06-08T15:30:00.000Z",
      capacity: 6,
      location: { lat: 36.6477, lng: 51.4985 },
      categories: "cottage",
      bathrooms: 2,
      parking: 1,
      rooms: 3,
      yard_type: "forest",
      num_comments: 9,
      discount_id: null,
      transaction_type: "reservation",
      sellerId: 303,
      sellerName: "رضا کریمی",
      caption: "کلبه‌ای دنج در دل جنگل‌های شمال ایران، مناسب برای استراحت و طبیعت‌گردی",
      bookings: 22,
      favoriteId: null,
      isFavorite: false,
    },
    {
      id: 5,
      title: "پنت‌هاوس مرکز شهر",
      address: "تهران - الهیه - خیابان فرشته",
      photos: "",
      rate: "5.0",
      discounted_price: 4500000000,
      price: 6000000000,
      tags: ["لوکس", "پنت‌هاوس", "روف‌گاردن"],
      last_updated: "2026-06-14T09:00:00.000Z",
      capacity: 4,
      location: { lat: 35.7868, lng: 51.4178 },
      categories: "apartment",
      bathrooms: 3,
      parking: 2,
      rooms: 3,
      yard_type: "rooftop",
      num_comments: 6,
      discount_id: 3,
      transaction_type: "reservation",
      sellerId: 404,
      sellerName: "سارا محمدی",
      caption: "پنت‌هاوسی با چشم‌انداز بی‌نظیر به افق تهران، با روف‌گاردن اختصاصی",
      bookings: 3,
      favoriteId: 5,
      isFavorite: true,
    },
    {
      id: 6,
      title: "خانه ساحلی",
      address: "گیلان - رشت - بندر انزلی",
      photos: "",
      rate: "4.6",
      discounted_price: null,
      price: 1200000000,
      tags: ["ساحلی", "دریا", "تابستانی"],
      last_updated: "2026-06-11T12:00:00.000Z",
      capacity: 7,
      location: { lat: 37.4726, lng: 49.4633 },
      categories: "villa",
      bathrooms: 2,
      parking: 2,
      rooms: 3,
      yard_type: "private",
      num_comments: 15,
      discount_id: null,
      transaction_type: "reservation",
      sellerId: 505,
      sellerName: "امیر تهرانی",
      caption: "خانه‌ای زیبا در کنار دریای خزر با دسترسی مستقیم به ساحل",
      bookings: 31,
      favoriteId: null,
      isFavorite: false,
    },
  ],
};

export const getHouses = async (
  search?: string,
  page: number = 1,
  limit: number = 7,
  order: string = "DESC",
  sort?: string,
  location?: string,
  minPrice?: number,
  maxPrice?: number,
  minRent?: number,
  maxRent?: number,
  minMortgage?: number,
  maxMortgage?: number,
  minArea?: number,
  maxArea?: number,
): Promise<HousesProps> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filtered = [...mockHouses.houses];

  if (search) {
    filtered = filtered.filter(
      (h) =>
        h.title.includes(search) ||
        h.address.includes(search) ||
        h.caption.includes(search),
    );
  }

  if (location) {
    filtered = filtered.filter((h) => h.address.includes(location));
  }

  if (minPrice && !isNaN(minPrice)) {
    filtered = filtered.filter((h) => h.price >= minPrice);
  }
  if (maxPrice && !isNaN(maxPrice)) {
    filtered = filtered.filter((h) => h.price <= maxPrice);
  }

  if (sort) {
    filtered = filtered.sort((a: any, b: any) => {
      const valA = a[sort];
      const valB = b[sort];
      if (order === "DESC") return valB > valA ? 1 : -1;
      return valA > valB ? 1 : -1;
    });
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return {
    houses: paginated,
    totalCount: filtered.length,
  };
};

export const getHouseById = async (
  id: string | number,
): Promise<HouseDetailProps> => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const house = mockHouses.houses.find((h) => String(h.id) === String(id));
  if (!house) throw new Error(`House with id ${id} not found`);

  return house as unknown as HouseDetailProps;
};