"use client";

import React, { useState, FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SqureL from "@/assets/images/Contact/SqureL.png";
import SqureR from "@/assets/images/Contact/SqureR.png";
import BreadcrumbsComponent from "@/components/ui/breadcrumbs/breadcrumbs";
import BreadcrumbsReserve from "@/components/ui/breadcrumbs/breadcrumbsReserve";

interface IProps {
  children: ReactNode;
}

const ReserveHouseLayout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const [step, setStep] = useState<"passenger" | "confirm" | "ticket">(
    "confirm",
  );
  const [passengerData, setPassengerData] = useState({});

  // const handlePassengerSubmit = () => {
  //   // setPassengerData(data);
  //   setStep("confirm");
  // };

  const handleConfirm = () => {
    setStep("ticket");
  };

  const handlePaymentSuccess = () => {
    router.push(`/reserveHouse/success`);
  };

  return (
    <div className="container mx-auto duration-200">
      <Image
        className="hidden lg:block absolute top-36 right-0 "
        src={SqureR}
        alt=""
      />
      {/* breadcrumb */}
      <div className=" w-full h-10 relative top-5 md:top-10">
        <BreadcrumbsComponent />
      </div>
      {/* title */}
      <div className=" items-center  mx-auto flex justify-between w-full h-37.5 relative top-0 md:top-10">
        <div className="b mt-5 max-[888px]:w-150 mx-auto w-200 flex">
          <BreadcrumbsReserve step={step} />
        </div>
      </div>
      <Image
        className="hidden lg:block absolute top-32 left-0 "
        src={SqureL}
        alt=""
      />

      <div className="mt-20 px-[30px]">
        <main>
          {/* {step === "passenger" && ( */}
          {children}
          {/* )} */}
          {/* {step === "confirm" && (
            <ConfirmInfo 
              data={passengerData} 
              onConfirm={handleConfirm} 
            />
          )}
          {step === "ticket" && (
            <TicketIssuance 
              onSuccess={handlePaymentSuccess} 
            />
          )} */}
        </main>
      </div>
    </div>
  );
};

export default ReserveHouseLayout;
