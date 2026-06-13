"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { HousesProps } from "@/types";
import { parseLocation } from "@/utils/hooks/location";
import { useMapContext } from "@/context/mapContext/mapContext";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const selectedIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [35, 55],
  iconAnchor: [17, 55],
  popupAnchor: [1, -45],
  shadowSize: [55, 55],
  className: "selected-marker",
});

const DEFAULT_CENTER: [number, number] = [35.7219, 51.3347];
const DEFAULT_ZOOM = 11;
const SELECTED_ZOOM = 15;

const MapUpdater = () => {
  const map = useMap();
  const mapContext = useMapContext();
  const selectedLocation = mapContext?.selectedLocation ?? null;

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], SELECTED_ZOOM, {
        duration: 1,
      });
    }
  }, [selectedLocation, map]);

  return null;
};

interface HouseMapProps {
  houses: HousesProps;
}

const HouseMap = ({ houses }: HouseMapProps) => {
  const mapContext = useMapContext();

  const validHouses = (houses?.houses || [])
    .map((house) => ({ ...house, coords: parseLocation(house.location) }))
    .filter((house) => house.coords !== null);

  if (!mapContext) return null;
  const { selectedHouseId, setSelectedHouse } = mapContext;

  return (
    <div className="z-10 w-full lg:w-80 xl:w-97.5 hidden sm:block h-72 lg:h-80 rounded-2xl overflow-hidden border border-neutral-200 mb-5">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapUpdater />

        {validHouses.map((house) => (
          <Marker
            key={house.id}
            position={[house.coords!.lat, house.coords!.lng]}
            icon={selectedHouseId === house.id ? selectedIcon : defaultIcon}
            eventHandlers={{
              click: () => {
                setSelectedHouse(house.id, house.coords);
              },
            }}
          >
            <Popup>
              <div className="text-right" dir="rtl">
                <strong>{house.title}</strong>
                <br />
                {house.address}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HouseMap;
