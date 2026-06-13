"use client";
import MainLayout from "@/components/layout/mainLayout";
import React, { FC, Suspense, useEffect, useState } from "react";
import FilterBox from "../filterBox/filterBox";
import SearchInput from "@/components/ui/input/searchInput";
import FilterBoxDrawer from "@/components/ui/drawer/filterBoxDrawer";
import Loading from "@/components/reserve/reserveWrapper/loading";
import GridCard from "@/components/ui/cards/gridCard/gridCard";
import PaginationComponent from "@/components/ui/pagination/paginationComponent";
import { HousesProps, ReservePageProps } from "@/types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import SortBox from "../sortBox/sortBox";
import HouseMapWrapper from "@/components/common/map/houseMapWrapper";
import { MapProvider } from "@/context/mapContext/mapContext";

interface ReserveWrapperProps {
  houses: HousesProps;
  page: number;
  limit: number;
  search: string;
  order: string;
  sort: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  minRent: number;
  maxRent: number;
  minMortgage: number;
  maxMortgage: number;
  minArea: number;
  maxArea: number;
}

const ReserveWrapper: FC<ReserveWrapperProps> = ({
  houses,
  page,
  limit,
  search,
  order,
  sort,
  location,
  minPrice,
  maxPrice,
  minRent,
  maxRent,
  minMortgage,
  maxMortgage,
  minArea,
  maxArea,
}) => {
  const totalPages = Math.ceil((houses.totalCount || 0) / limit);

  return (
    <MapProvider>
      <MainLayout title="رزرو سریع">
        <div className="w-full h-auto flex flex-col lg:grid lg:grid-cols-6 gap-5 lg:gap-6">
          <div className="w-full lg:col-span-2 space-y-5 ">
            <HouseMapWrapper houses={houses} />
            <div className="hidden lg:block w-80 xl:w-97.5 h-auto rounded-2xl border border-neutral-200 p-6 pt-8">
              <FilterBox
                houses={houses}
                isRes={false}
                location={location}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minRent={minRent}
                maxRent={maxRent}
                minMortgage={minMortgage}
                maxMortgage={maxMortgage}
                minArea={minArea}
                maxArea={maxArea}
              />
            </div>
            <div className="px-2 xs:px-0 float-right w-full flex items-center justify-between">
              <div className="lg:hidden">
                <SearchInput />
              </div>
              <FilterBoxDrawer
                houses={houses}
                isRes={false}
                location={location}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minRent={minRent}
                maxRent={maxRent}
                minMortgage={minMortgage}
                maxMortgage={maxMortgage}
                minArea={minArea}
                maxArea={maxArea}
              />
            </div>
          </div>

          <div className="col-span-4 flex flex-col space-y-5">
            <div className="hidden xl:flex">
              <SortBox currentOrder={order} currentSort={sort} />
            </div>

            <Suspense fallback={<Loading />}>
              {houses.houses?.length > 0 ? (
                houses.houses.map((item) => (
                  <GridCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    address={item.address}
                    photos={item.photos}
                    rate={item.rate}
                    discounted_price={item.discounted_price}
                    price={item.price}
                    // tags={item.tags}
                    // last_updated={item.last_updated}
                    capacity={item.capacity}
                    location={item.location}
                    // categories={item.categories}
                    bathrooms={item.bathrooms}
                    parking={item.parking}
                    rooms={item.rooms}
                    yard_type={item.yard_type}
                    // num_comments={item.num_comments}
                    // discount_id={item.discount_id}
                    // transaction_type={item.transaction_type}
                    // sellerId={item.sellerId}
                    // sellerName={item.sellerName}
                    // caption={item.caption}
                    // bookings={item.bookings}
                    // favoriteId={item.favoriteId}
                    isFavorite={item.isFavorite}
                    discountPercent={20}
                    buttonTitle="بررسی و رزرو هتل"
                    isReserve={true}
                  />
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  هیچ ملکی یافت نشد
                </div>
              )}
            </Suspense>
            {houses.totalCount > 0 && (
              <div className="flex justify-center">
                <div className="w-full h-12">
                  <PaginationComponent
                    totalPages={totalPages}
                    currentPage={page}
                    limit={limit}
                    search={search}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </MapProvider>
  );
};

export default ReserveWrapper;
