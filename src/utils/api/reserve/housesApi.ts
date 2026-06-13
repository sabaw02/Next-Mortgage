import { HouseDetailProps, HousesProps } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
  let url = `${API_BASE_URL}/houses?page=${page}&limit=${limit}`;
  if (search) url += `&search=${search}`;
  if (order) url += `&order=${order}`;
  if (sort) url += `&sort=${sort}`;
  if (location) url += `&location=${location}`;
  if (minPrice && !isNaN(minPrice)) url += `&minPrice=${minPrice}`;
  if (maxPrice && !isNaN(maxPrice)) url += `&maxPrice=${maxPrice}`;
  if (minRent && !isNaN(minRent)) url += `&minRent=${minRent}`;
  if (maxRent && !isNaN(maxRent)) url += `&maxRent=${maxRent}`;
  if (minMortgage && !isNaN(minMortgage)) url += `&minMortgage=${minMortgage}`;
  if (maxMortgage && !isNaN(maxMortgage)) url += `&maxMortgage=${maxMortgage}`;
  if (minArea && !isNaN(minArea)) url += `&minArea=${minArea}`;
  if (maxArea && !isNaN(maxArea)) url += `&maxArea=${maxArea}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch houses");
  // console.log(res.status);
  return res.json();
};

export const getHouseById = async (
  id: string | number,
): Promise<HouseDetailProps> => {
  const url = `${API_BASE_URL}/houses/${id}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch house details");
  return res.json();
};
