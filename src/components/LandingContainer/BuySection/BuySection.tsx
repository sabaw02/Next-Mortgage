// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react"; 
// import Frame from "../../../assets/images/Frame.png"; 
// import Button from "../../ui/button/button";
// import { IoIosArrowBack } from "react-icons/io";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import SlideShowBuy from "../../ui/slideShow/slideShowBuy";
//  import Link from "next/link";
// import { GetBuySection } from "./GetBuySection";

// const BuySection = () => {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//     try{
//       const res = await GetBuySection();
//       setData(res);
//     }
//     catch(error) {
//       console.error("خطا دریافت شد", error);  
//     }
//     finally{
//       setLoading(false)
//     }
//     }
//   fetchData();
// }, []);

  
//   const icon = <IoIosArrowBack className="w-6 h-6" />;
//   const swiperRef = useRef<any>(null);
//   const [data, setData] = useState([]);
//   return (
//     <div className="mt-20 mb-40 items-center justify-center content-center mx-auto w-full h-175 dark:bg-[#334155] bg-[#E8EEF3] rounded-[34px]">
//       <div className=" items-center justify-center w-full px-5 sm:px-8 xl:px-32  ">
//         {/*قسمت تایتل */}
//         <div className="items-center flex justify-between h-30.25">
//           <div
//             style={{ animationDuration: "1s" }}
//             className="items-center hidden justify-center sm:flex gap-2 w-28 sm:w-37 h-10 sm:h-12 hover:rotate-3"
//           ></div>
//           <div className=" max-[710px]:w-[50%] max-[888px]:w-150 mx-auto w-200 relative flex">
//             <Image
//               className=" max-[1050px]:hidden absolute bottom-2 "
//               src={Frame}
//               alt=""
//             />
//             <div className="max-[500px]:w-50 mx-auto w-52 sm:w-[256px] border-b-2 border-b-[#D9D9D9] ">
//               <h2
//                 className="max-[500px]:w-35 text-center mx-auto w-32 sm:w-42 border-b-2  border-b-[#194C7B]
//                text-[18px] sm:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]"
//               >
//                 خرید
//               </h2>
//             </div>
//             <Image
//               className="max-[1050px]:hidden absolute bottom-7 left-0 "
//               src={Frame}
//               alt=""
//             />
//           </div>
//           <div className="hidden sm:block">
//             <Link href={"/reserve"} >
//               <Button
//                 icon={icon}
//                 iconPos="left"
//                 isOutline={false}
//                 text="مشاهده همه"
//               />
//             </Link>
//           </div>
//         </div>
//         {/* قسمت بدنه  */}
//         <div className="h-auto w-full mt-4 ">
//           <SlideShowBuy loading={loading} houses={data || []} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuySection;
// @/components/LandingContainer/BuySection/BuySection.tsx
"use client";
import Image from "next/image";
import React from "react";
import Frame from "../../../assets/images/Frame.png";
import Button from "../../ui/button/button";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideShowBuy from "../../ui/slideShow/slideShowBuy";
import Link from "next/link";
import { HousesProps } from "@/types";

interface BuySectionProps {
  houses: HousesProps["houses"];
}

const BuySection = ({ houses }: BuySectionProps) => {
  const icon = <IoIosArrowBack className="w-6 h-6" />;

  return (
    <div className="mt-20 mb-40 items-center justify-center content-center mx-auto w-full h-175 dark:bg-[#334155] bg-[#E8EEF3] rounded-[34px]">
      <div className="items-center justify-center w-full px-5 sm:px-8 xl:px-32">
        <div className="items-center flex justify-between h-30.25">
          <div className="items-center hidden justify-center sm:flex gap-2 w-28 sm:w-37 h-10 sm:h-12 hover:rotate-3" />
          <div className="max-[710px]:w-[50%] max-[888px]:w-150 mx-auto w-200 relative flex">
            <Image className="max-[1050px]:hidden absolute bottom-2" src={Frame} alt="" />
            <div className="max-[500px]:w-50 mx-auto w-52 sm:w-[256px] border-b-2 border-b-[#D9D9D9]">
              <h2 className="max-[500px]:w-35 text-center mx-auto w-32 sm:w-42 border-b-2 border-b-[#194C7B] text-[18px] sm:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
                خرید
              </h2>
            </div>
            <Image className="max-[1050px]:hidden absolute bottom-7 left-0" src={Frame} alt="" />
          </div>
          <div className="hidden sm:block">
            <Link href="/reserve">
              <Button icon={icon} iconPos="left" isOutline={false} text="مشاهده همه" />
            </Link>
          </div>
        </div>
        <div className="h-auto w-full mt-4">
          <SlideShowBuy loading={false} houses={houses} />
        </div>
      </div>
    </div>
  );
};

export default BuySection;