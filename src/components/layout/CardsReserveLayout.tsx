import { MainLayoutProps } from "@/types";
import Image from "next/image";
import SqureL from "@/assets/images/Contact/SqureL.png";
import SqureR from "@/assets/images/Contact/SqureR.png";
import PaginationComponent from "../ui/pagination/paginationComponent";

export default function CardsReserveLayout({ children, title }: MainLayoutProps) {
  return (
    <div className="container mx-auto  ">
      <Image className="-z-10 absolute top-340 right-0 " src={SqureR} alt="" />
      <div className=" items-center  mx-auto flex justify-between w-full h-37.5 relative top-10">
        <div className=" mt-5 max-[888px]:w-150 mx-auto w-200 relative flex">
          <div className="max-[500px]:w-50  mx-auto w-[356px] border-b-2 border-b-[#D9D9D9]">
            <h2 className="whitespace-nowrap max-[500px]:w-35 text-center mx-auto w-[70%] border-b-2  border-b-[#194C7B] text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <Image className="-z-10 absolute top-340 left-0 " src={SqureL} alt="" />

      <div className="my-15">
        <main>{children}</main>
      </div>

    </div>
  );
}
