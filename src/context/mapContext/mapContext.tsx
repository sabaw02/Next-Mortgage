// @/context/mapContext.tsx
"use client";
import { LatLng } from "@/utils/hooks/location";
 import { createContext, useContext, useState, ReactNode } from "react";
 
interface MapContextType {
  selectedLocation: LatLng | null;
  selectedHouseId: string | number | null;
  setSelectedHouse: (id: string | number, location: LatLng | null) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);
  const [selectedHouseId, setSelectedHouseId] = useState<string | number | null>(null);

  const setSelectedHouse = (id: string | number, location: LatLng | null) => {
    setSelectedHouseId(id);
    setSelectedLocation(location);
  };

  return (
    <MapContext.Provider value={{ selectedLocation, selectedHouseId, setSelectedHouse }}>
      {children}
    </MapContext.Provider>
  );
};

// Returns null instead of throwing if no Provider is present
export const useMapContext = (): MapContextType | null => {
  const context = useContext(MapContext);
  return context ?? null;
};