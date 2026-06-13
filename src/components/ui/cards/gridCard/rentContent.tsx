import React from "react";
import Image from "next/image";
import bed from "@/assets/icons/cards/bed.svg";
import bath from "@/assets/icons/cards/bath.svg";
import parkingIcon from "@/assets/icons/cards/parking.svg";

interface RentContentProps {
  capacity?: number;
  bathrooms?: number;
  parking?: boolean | number;
  rooms?: number;
  yard_type?: string;
}

const RentContent: React.FC<RentContentProps> = ({
  rooms,
  bathrooms,
  parking,
}) => {
  const formatNumber = (num?: number) => {
    if (num === undefined || num === null) return "—";
    return new Intl.NumberFormat("fa-IR").format(num);
  };

  const roomsText = rooms ? `${formatNumber(rooms)} خواب` : "بدون خواب";
  const bathsText = bathrooms ? `${formatNumber(bathrooms)} حمام` : "بدون حمام";
  const parkingText = parking ? "پارکینگ" : "بدون پارکینگ";

  return (
    <div className="h-6 w-80 flex text-primary-500 text-xs">
      <div className="w-full h-full border-l border-neutral-100 flex items-center space-x-1.5">
        <Image src={bed} alt="bedrooms" className="w-6 h-6" />
        <span>{roomsText}</span>
      </div>
      <div className="w-full h-full border-l border-neutral-100 flex justify-center items-center space-x-1.5">
        <Image src={bath} alt="bathrooms" className="w-6 h-6" />
        <span>{bathsText}</span>
      </div>
      <div className="w-full h-full flex justify-center items-center space-x-1.5 whitespace-nowrap">
        <Image src={parkingIcon} alt="parking" className="w-6 h-6" />
        <span>{parkingText}</span>
      </div>
    </div>
  );
};

export default RentContent;
