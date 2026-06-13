const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetDreamPlace = async () => {
  const res = await fetch(
    `${API_BASE_URL}/locations?page=1&limit=10&order=ASC`,
  );

  if (!res.ok) throw new Error("Failed to fetch houses");
  return res.json();
};
