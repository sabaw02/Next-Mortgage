export const GetDreamPlace = async () => {
  const res = await fetch("http://next.genzuni.website/api/houses");
  const result = await res.json();

  const houses = Array.isArray(result?.houses)
    ? result.houses
    : [];

  return houses;
};