import React from "react";
import About from "@/components/LandingContainer/About";
import BuySection from "@/components/LandingContainer/BuySection/BuySection";
import CategoriySection from "@/components/LandingContainer/CategoriySection";
import DreamPlace from "@/components/LandingContainer/DreamPlace/DreamPlace";
import HeroSection from "@/components/LandingContainer/HeroSection";
import RentSection from "@/components/LandingContainer/RentSection/RentSection";
import SignUpBox from "@/components/LandingContainer/SignUpBox";
import SpesialOffers from "@/components/LandingContainer/SpesialOffers/SpesialOffers";
import TestMonials from "@/components/LandingContainer/TestMonials/TestMonials";
import { getHouses } from "@/utils/api/reserve/housesApi";
import { GetComments } from "@/utils/api/landing/getComments";
import { cookies } from "next/headers";
import { GetRentSection } from "@/utils/api/landing/getRentSection";
import { GetBuySection } from "@/utils/api/landing/getBuySection";
import { GetDreamPlace } from "@/utils/api/landing/getDreamLocations";

const LandingPage = async () => {
  // const houses = await getHouses();
  // const comments = await GetComments();
  const token = (await cookies()).get("token")?.value;
  console.log("Token from cookie:", token);

  const [houses, rentHouses, buyHouses, comments] = await Promise.all([
    getHouses(),
    GetRentSection(),
    GetBuySection(),
    GetComments(),
    GetDreamPlace()
  ]);

  return (
    <div className="w-full xl:w-380 max-h-full p-10 m-0 overflow-x-hidden overflow-y-hidden">
      <HeroSection />
      <CategoriySection />
      <SpesialOffers {...houses} />
      <DreamPlace />
      <About />
      <RentSection houses={rentHouses} />
      <SignUpBox />
      <BuySection houses={buyHouses} />
      {/* <TestMonials {...comments} /> */}
    </div>
  );
};

export default LandingPage;
