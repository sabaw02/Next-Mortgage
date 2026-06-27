// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export const GetDreamPlace = async () => {
//   const res = await fetch(
//     `${API_BASE_URL}/locations?page=1&limit=10&order=ASC`,
//   );

//   if (!res.ok) throw new Error("Failed to fetch houses");
//   return res.json();
// };

 

export interface DreamLocation {
  id: number;
  areaName: string | null;
  lat: string;
  lng: string;
}

export interface DreamLocationsResponse {
  data: DreamLocation[];
  totalCount: number;
}

const mockLocations: DreamLocation[] = [
  { id: 1, areaName: "تهران",     lat: "35.6892", lng: "51.3890" },
  { id: 2, areaName: "اصفهان",    lat: "32.6539", lng: "51.6660" },
  { id: 3, areaName: "شیراز",     lat: "29.5918", lng: "52.5837" },
  { id: 4, areaName: "مازندران",  lat: "36.5659", lng: "53.0584" },
  { id: 5, areaName: "مشهد",      lat: "36.2972", lng: "59.6067" },
  { id: 6, areaName: "کیش",       lat: "26.5270", lng: "53.9800" },
  { id: 7, areaName: "تبریز",     lat: "38.0962", lng: "46.2738" },
  { id: 8, areaName: "رشت",       lat: "37.2809", lng: "49.5832" },
];

export const GetDreamPlace = async (): Promise<DreamLocationsResponse> => {
  await new Promise((r) => setTimeout(r, 200));
  return {
    data: mockLocations,
    totalCount: mockLocations.length,
  };
};