"use client";
import CardsReserveLayout from "@/components/layout/CardsReserveLayout";
import MainLayout from "@/components/layout/mainLayout";
import MainCard from "@/components/ui/cards/mainCard/mainCard";
import Image from "next/image";
import best from "@/assets/images/reserve/pexels-expect-best-79873-323780 1.png";
import restu from "@/assets/images/reserve/686bba4ba1e6f83605b73bed_رستوران (3) 1.png";
import sw from "@/assets/images/reserve/686bba85a1e6f83605b73bf2_سوییت دبل لاکچری (2) 2.png";
import ReserveCard from "@/components/ui/cards/reservecard/reserveCard";
import { useState } from "react";
import ModalImageReviws from "@/components/ReserveAndRentDetails/ModalImageReviws";
import ReserveAndRentLayout from "@/components/layout/ReserveAndRentLayout";
import PaginationComponent from "@/components/ui/pagination/paginationComponent";
import SellerInfoCard from "@/components/rent/sellerInfoCard/sellerInfoCard";
import { HouseDetailProps } from "@/types";

const RentSinglePage = ({ houseDetail }: { houseDetail: HouseDetailProps }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className=" w-full h-auto mb-30 z-100">
      <MainLayout title={houseDetail.title} id={houseDetail.id}>
        <div className="  w-[85%] h-auto flex justify-between mx-auto">
          <div className="w-[70%] h-auto">
            <div>
              {houseDetail.photos && houseDetail.photos[0] ? (
                <img
                  src={houseDetail.photos[0]}
                  alt={houseDetail.title}
                  className="w-full rounded-lg"
                />
              ) : (
                <Image src={best} alt="" />
              )}
              <p className="my-3 w-[70%] h-auto text-[16px] font-medium text-neutral-600">
                آدرس : {houseDetail.address}
              </p>
            </div>
            <ReserveAndRentLayout
              showTabs={true}
              caption={houseDetail.caption}
              categories={houseDetail.categories}
              bathrooms={houseDetail.bathrooms}
              parking={houseDetail.parking}
              rooms={houseDetail.rooms}
              yard_type={houseDetail.yard_type}
              title={houseDetail.title}
            />
          </div>
          <div className=" relative space-y-10 w-[30%] h-auto ">
            <Image
              src={restu}
              alt=""
              className="w-[95%] mx-auto rounded-[14px]"
            />
            <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center">
              <Image
                src={sw}
                alt=""
                className="  row-start-1 col-start-1  mx-auto w-[95%] opacity-70 bg-white rounded-[14px]"
              />
              <button
                onClick={() => setIsOpenModal(true)}
                className="max-[1024px]:font-medium max-[1024px]:text-[12px] z-100 row-start-1 col-start-1 text-[16px] font-semibold text-[#FFFFFF] w-[45%] h-[21%] border border-[#ffffff] rounded-[24px]"
              >
                مشاهده بیشتر
              </button>
            </div>
            <ModalImageReviws
              isOpenModal={isOpenModal}
              closeModal={() => setIsOpenModal(false)}
            />
            <SellerInfoCard />
          </div>
        </div>
        {/* 
        <CardsReserveLayout title="آگهی های مشابه">
          <div className="flex space-x-8 gap-10 justify-center">
            <MainCard
              title="title"
              location="tehran"
              price={15033300}
              img=""
              isDiscount={true}
              disCountPrice={1233300}
              disCount={15}
            />
            <MainCard
              title="title"
              location="tehran"
              price={15033300}
              img=""
              isDiscount={true}
              disCountPrice={1233300}
              disCount={15}
            />
            <MainCard
              title="title"
              location="tehran"
              price={15033300}
              img=""
              isDiscount={true}
              disCountPrice={1233300}
              disCount={15}
            />
          </div>
        </CardsReserveLayout> */}
      </MainLayout>
    </div>
  );
};

export default RentSinglePage;
