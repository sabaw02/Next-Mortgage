export interface LatLng {
  lat: number;
  lng: number;
}

export const parseLocation = (
  location?: { lat: number; lng: number } | string | null
): LatLng | null => {
  if (!location) return null;

  if (typeof location === "object" && "lat" in location && "lng" in location) {
    if (typeof location.lat === "number" && typeof location.lng === "number") {
      return { lat: location.lat, lng: location.lng };
    }
    return null;
  }

   return null;
};