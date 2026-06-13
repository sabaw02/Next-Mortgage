const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetRentSection = async () => {
  const res = await fetch(`${API_BASE_URL}/houses`);
  const result = await res.json();

  const houses = Array.isArray(result?.houses) ? result.houses : [];

  return houses;
};
