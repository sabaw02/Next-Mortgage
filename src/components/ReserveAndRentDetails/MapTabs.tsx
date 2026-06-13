import React from 'react'
import map from "@/assets/images/reserve/map.svg";
import Image from 'next/image';
const MapTabs = () => {
  return (
    <div>
        <div className="w-[100%] h-[50%] rounded-2xl mt-10">
                <Image src={map} alt="map" />
        </div>
    </div>
  )
}

export default MapTabs
