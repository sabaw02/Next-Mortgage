import { MainLayoutProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Frame from "@/assets/images/Frame.png";
import SqureL from "@/assets/images/Contact/SqureL.png";
import SqureR from "@/assets/images/Contact/SqureR.png";
import BreadcrumbsComponent from "../ui/breadcrumbs/breadcrumbs";

export default function MainLayout({ children, title, id }: MainLayoutProps) {
  return (
    <div className="container mx-auto duration-200">
      <Image
        className="hidden lg:block absolute top-36 right-0 "
        src={SqureR}
        alt=""
      />
      {/* breadcrumb */}
      <div className=" w-full h-10 relative top-5 md:top-10">
        <BreadcrumbsComponent title={title} id={id} />
      </div>
      {/* title */}
      <div className=" items-center  mx-auto flex justify-between w-full h-37.5 relative top-0 md:top-10">
        <div className="b mt-5 max-[888px]:w-150 mx-auto w-200 relative flex">
          <Image
            className="max-[710px]:hidden  absolute bottom-0"
            src={Frame}
            alt=""
          />
          <div className="max-[500px]:w-50  mx-auto w-89 border-b-2 border-b-[#D9D9D9]">
            <h2 className=" whitespace-nowrap max-[500px]:w-35  text-center mx-auto w-[70%] border-b-2  border-b-[#194C7B] text-[24px] md:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
              {title}
            </h2>
          </div>
          <Image
            className="max-[710px]:hidden absolute bottom-0 left-0 "
            src={Frame}
            alt=""
          />
        </div>
      </div>
      <Image
        className="hidden lg:block absolute top-32 left-0 "
        src={SqureL}
        alt=""
      />

      <div className="mt-20">
        <main>{children}</main>
      </div>
    </div>
  );
}
