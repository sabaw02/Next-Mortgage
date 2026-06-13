import Image from "next/image";
import React from "react";
import iconsite from "../../assets/images/header/homeNet_logo_upscaled_cropped_4x 1.png";
import Aparat from "../../assets/images/footer/Icon-Aparat 1.png";
import Email from "../../assets/images/footer/Icon-Email 1.png";
import Linkedin from "../../assets/images/footer/Icon-Linkedin 1.png";
import Instagran from "../../assets/images/footer/Instagran 1.png";
import Map from "../../assets/images/footer/Icon-Map 1.png";
import Link from "next/link";
import location from "../../assets/images/footer/location.png";
import telephone from "../../assets/images/footer/telephone.png";
import email from "../../assets/images/footer/Email.png";
function Footer() {
  return (
    <div className=" content-center w-full xl:w-380 h-auto dark:bg-[#1e293b] bg-primary-500 p-8">
      <div className="p-8 mx-auto justify-center w-[95%] h-[90%] dark:bg-[#cbd5e1] bg-white rounded-2xl">
        {/* header footer */}
        <div className="flex items-center justify-between text-center">
          <Image
            className="max-[500px]:w-20 max-[630px]:w-27.5 max-[630px]:h-12.5 "
            src={iconsite}
            alt="هوم نت"
          />
          <div className="items-center flex gap-3 h-10 ">
            <Image
              className="max-[500px]:w-5 max-[630px]:w-7.5 max-[630px]:h-7.5 hover:w-9 hover:h-9 duration-300 "
              src={Instagran}
              alt="Instagran"
              width={40}
              height={40}
            />
            <Image
              className="max-[500px]:w-5 max-[630px]:w-7.5 max-[630px]:h-7.5 hover:w-9 hover:h-9 duration-300"
              src={Email}
              alt="Email"
              width={40}
              height={40}
            />
            <Image
              className="max-[500px]:w-5 max-[630px]:w-7.5 max-[630px]:h-7.5 hover:w-9 hover:h-9 duration-300"
              src={Aparat}
              alt="Aparat"
              width={40}
              height={40}
            />
            <Image
              className="max-[500px]:w-5 max-[630px]:w-7.5 max-[630px]:h-7.5 hover:w-9 hover:h-9 duration-300"
              src={Linkedin}
              alt="Linkedin"
              width={40}
              height={40}
            />
            <Image
              className="max-[500px]:w-5 max-[630px]:w-7.5 max-[630px]:h-7.5 hover:w-9 hover:h-9 duration-300"
              src={Map}
              alt="Map"
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* body footer */}
        <div className=" max-[500px]:gap-0 max-[500px]:grid max-[500px]:grid-rows-4 max-[500px]:grid-cols-1  max-[1124px]:grid max-[1124px]:grid-rows-2 max-[1124px]:grid-cols-2  grid grid-cols-4 grid-rows-1 max-[1300px]:gap-5 gap-20 h-auto">
          <div className="mt-10 max-[1300px]:w-[80%] ">
            <h5 className="text-[20px] font-semibold text-[#1C5387]">
              پلتفرم هوم نت
            </h5>
            <p className="mt-5 max-[630px]:text-[14px] text-[16px] font-normal text-neutral-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت ..
            </p>
          </div>
          <div className="whitespace-nowrap flex flex-col max-[1124px]:mt-10 mt-5 w-41 h-31 ">
            <h5 className="text-[20px] font-semibold text-[#1B1B1B]">
              نحوه رزرو اقامتگاه
            </h5>
            <div className=" flex flex-col mt-5">
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px]  text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                شیوه پرداخت
              </Link>
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px]  text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                لغو رزرو اقامتگاه
              </Link>
            </div>
          </div>
          <div className="max-[500px]:mt-0 whitespace-nowrap  flex flex-col mt-5 w-46.25 h-51.5 ">
            <h5 className="text-[20px]  font-semibold text-[#1B1B1B]">
              حوزه های کاربری
            </h5>
            <div className="flex flex-col mt-5">
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px] text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                پرسش های متداول مهمان
              </Link>
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px] text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                پرسش های متداول میزبان
              </Link>
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px] text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                چطور اقامتگاه ثبت کنم ؟
              </Link>
              <Link
                href=""
                className="p-1 max-[630px]:text-[14px] text-[16px] font-normal text-neutral-600 hover:text-[#1C5387]"
              >
                حریم شخصی کاربران
              </Link>
            </div>
          </div>
          <div className="max-[500px]:mt-0 min-[600px]:whitespace-nowrap flex flex-col mt-5 h-42.25 ">
            <h5 className="text-[20px]  font-semibold text-[#1B1B1B]">
              ارتباط با ما
            </h5>
            <div className="flex flex-col mt-5">
              <div className="p-1 flex gap-2">
                <Image
                  className="w-6 h-6"
                  src={location}
                  alt="location"
                  width={24}
                  height={24}
                />
                <p className=" max-[630px]:text-[14px]  text-center text-neutral-600 font-normal text-[16px] hover:text-[#1C5387]">
                  گیلان ، رشت ، میدان آزادی
                </p>
              </div>
              <div className="items-center p-1 flex gap-2 ">
                <Image
                  className=" w-5 h-5"
                  src={telephone}
                  alt="telephone"
                  width={16}
                  height={16}
                />
                <p className=" max-[630px]:text-[14px]  text-center text-neutral-600 font-normal text-[16px] hover:text-[#1C5387]">
                  09229167194 - 098541612310
                </p>
              </div>
              <div className="p-1 flex gap-2">
                <Image
                  className=" w-6 h-6"
                  src={email}
                  alt="email"
                  width={24}
                  height={24}
                />
                <p className=" max-[630px]:text-[14px]  text-center text-neutral-600 font-normal text-[16px] hover:text-[#1C5387]">
                  Delta@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className=" max-[800px]:mt-[-40] mt-5 text-center text-[#1C5387] font-semibold text-[16px]">
          © ۲۰۲۵ تمام حقوق برای هوم نت محفوظ است.
        </p>
      </div>
    </div>
  );
}

export default Footer;
