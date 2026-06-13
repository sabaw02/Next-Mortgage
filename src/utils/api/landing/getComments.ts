const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetComments = async () => {
  const res = await fetch(
    `${API_BASE_URL}/comments?page=1&limit=10`,
  );

  if (!res.ok) throw new Error("Failed to fetch houses");
  return res.json();
};
