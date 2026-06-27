// import Image from "next/image";
// import React, { FC } from "react";
// import Frame from "../../../assets/images/Frame.png";
// import Group from "../../../assets/images/dramplace/Group.png";
// import SlideShowDreamPlaces from "../../ui/slideShow/slideShowDreamPlaces";
// import { CategoryCardProps } from "@/types";
// import { GetDreamPlace } from "@/utils/api/landing/getDreamLocations";

// const DreamPlace = async () => {
//   const locations = await GetDreamPlace();
//   // console.log("dreammmmmm",locations)

//   return (
//     <div className=" justify-center mx-auto w-full h-130 sm:h-156.25 dark:bg-[#334155] bg-[#E8EEF3] rounded-[34px]">
//       <div className="sm:pt-30 relative items-center mx-auto flex justify-between w-[70%] h-32.5 ">
//         <Image
//           className="max-[1600px]:hidden absolute top-15 -right-30"
//           src={Group}
//           alt=""
//         />

//         <div className="max-[888px]:w-150 mx-auto w-200 relative flex">
//           <Image
//             className="max-[710px]:hidden absolute bottom-5 "
//             src={Frame}
//             alt=""
//           />

//           <div className="max-[500px]:w-50 mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
//             <h2 className="text-center mx-auto text-[20px] md:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60] border-b-2 border-b-[#194C7B]">
//               مقصد رویاها
//             </h2>
//           </div>

//           <Image
//             className="max-[710px]:hidden absolute bottom-14 left-0"
//             src={Frame}
//             alt=""
//           />
//         </div>
//       </div>

//       <div className=" mx-auto w-[93%] h-auto flex  justify-around relative sm:top-16 p-3">
//         <SlideShowDreamPlaces locations={locations} />
//       </div>

//       {/* <div className="mx-auto w-325 h-20"></div> */}
//     </div>
//   );
// };

// export default DreamPlace;
// @/components/LandingContainer/DreamPlace/DreamPlace.tsx
import Image from "next/image";
import React from "react";
import Frame from "../../../assets/images/Frame.png";
import Group from "../../../assets/images/dramplace/Group.png";
import SlideShowDreamPlaces from "../../ui/slideShow/slideShowDreamPlaces";
import { GetDreamPlace } from "@/utils/api/landing/getDreamLocations";

const DreamPlace = async () => {
  const locations = await GetDreamPlace();

  return (
    <div className="justify-center mx-auto w-full h-130 sm:h-156.25 dark:bg-[#334155] bg-[#E8EEF3] rounded-[34px]">
      <div className="sm:pt-30 relative items-center mx-auto flex justify-between w-[70%] h-32.5">
        <Image
          className="max-[1600px]:hidden absolute top-15 -right-30"
          src={Group}
          alt=""
        />
        <div className="max-[888px]:w-150 mx-auto w-200 relative flex">
          <Image
            className="max-[710px]:hidden absolute bottom-5"
            src={Frame}
            alt=""
          />
          <div className="max-[500px]:w-50 mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
            <h2 className="text-center mx-auto text-[20px] md:text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60] border-b-2 border-b-[#194C7B]">
              مقصد رویاها
            </h2>
          </div>
          <Image
            className="max-[710px]:hidden absolute bottom-14 left-0"
            src={Frame}
            alt=""
          />
        </div>
      </div>

      <div className="mx-auto w-[93%] h-auto flex justify-around relative sm:top-16 p-3">
        <SlideShowDreamPlaces locations={locations} />
      </div>
    </div>
  );
};

export default DreamPlace;