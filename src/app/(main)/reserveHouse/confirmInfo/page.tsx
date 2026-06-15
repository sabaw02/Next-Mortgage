"use client";
import React from "react";
import discount from "@/assets/images/reserve/DiscounCode.png";
import edit from "@/assets/images/reserve/Edit.png";
import Image from "next/image";
import ReserveHCard from "@/components/ui/cards/reserveHCard/ReserveHCard";
import ButtonMd from "@/components/ui/button/buttonMd";
import Link from "next/link";
import imgDef from "@/assets/images/defImg.jpg";

const ConfirmInfoPage = () => {
  return (
    <div className={"flex gap-5 mb-15"}>
      <div className="flex flex-col gap-5 w-[850px] ">
        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <div className={"flex justify-between items-center"}>
            <h2 className={"text-primary-700 text-2xl font-medium"}>
              مشخصات مسافران
            </h2>
            <button
              type="button"
              className={
                "cursor-pointer w-53.75 h-12  border border-primary-500 rounded-2xl flex items-center gap-2 justify-center"
              }
            >
              <Image src={edit} alt={"edit"} width={20} height={20} />
              <span className={"text-primary-500 font-semibold text-base"}>
                ویرایش مسافران
              </span>
            </button>
          </div>

          <table className="w-full bg-white border border-neutral-200 rounded-xl mt-5 reserve-table">
            <tbody>
              <tr>
                <td className="td-right">بازه سنی</td>
                <td className="td-left">بزرگسال</td>
              </tr>
              <tr>
                <td className="td-right">نام و نام خانوادگی</td>
                <td className="td-left">امیر اوج</td>
              </tr>
              <tr>
                <td className="td-right">جنسیت</td>
                <td className="td-left">مرد</td>
              </tr>
              <tr>
                <td className="td-right">کدملی / شماره یا پاسپورت</td>
                <td className="td-left">09391234567</td>
              </tr>
              <tr>
                <td className="td-right">تاریخ تولد</td>
                <td className="td-left">1384/12/05</td>
              </tr>
              <tr>
                <td className="td-right">خدمات</td>
                <td className="td-left">-</td>
              </tr>
              <tr>
                <td className="td-right">مبلغ خدمات</td>
                <td className="td-left">-</td>
              </tr>
              <tr>
                <td className="td-right">قیمت</td>
                <td className="td-left">1,500,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <h2 className={"text-primary-700 text-2xl font-medium"}>
            هزینه های جانبی
          </h2>
          <p className={"text-neutral-800 text-[18px] font-medium mt-5"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد
          </p>
          {/* <Input placeholder='شاره تلفن' type='number' icon={<Image src={passport} alt={'passport'} className='h-[18px] w-[18px]'/>}/> */}
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <div className={"flex items-center gap-2 my-2"}>
            <h2 className={"text-primary-700 text-2xl font-medium"}>
              ارسال بلیط به دیگران
            </h2>
            <span className={"text-base text-neutral-500"}>
              ( ارسال بلیط به ایمیل و شماره همراه دیگر )
            </span>
          </div>
          <div className={"flex justify-start items-center gap-7 mt-6"}>
            <div className={"flex gap-2"}>
              <span className={"text-primary-200 text-lg"}>شماره تلفن</span>
              <span className={"text-primary-800 text-base"}>09391234567</span>
            </div>
            <div className={"flex gap-2"}>
              <span className={"text-primary-200 text-lg"}>ایمیل</span>
              <span className={"text-primary-800 text-base"}>
                example@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5"}>
          <h2 className={"text-primary-700 text-2xl font-medium mt-1 mb-6"}>
            کد تخفیف
          </h2>
          <div className={"flex justify-between items-center mt-5"}>
            <input
              type="text"
              placeholder="کدتخفیف"
              className="w-53.75 h-12 border border-neutral-200 rounded-2xl outline-none text-neutral-600 text-base font-normal pr-3 pl-10"
            />
            <ButtonMd
              isOutline={false}
              text="اعمال کد تخفیف"
              icon={
                <Image src={discount} alt={"discount"} width={20} height={20} />
              }
              iconPos="right"
            />
          </div>
        </div>

        <div className={"border rounded-xl border-neutral-200 p-5 mt-9"}>
          <div className={"flex justify-between items-center"}>
            <div className={"flex items-center gap-1"}>
              <span className={"text-black text-lg font-medium"}>قیمت کل</span>
              <span className={"text-base text-primary-500"}>11,500,000</span>
              <span className={"text-base text-neutral-500"}>تومان</span>
            </div>
            <div className={"flex items-center gap-2"}>
              <button
                className={
                  "cursor-pointer w-53.75 h-12 relative border border-primary-500  rounded-2xl text-[14px] flex justify-center items-center space-x-5"
                }
              >
                <Link
                  href={"/reserveHouse/passengerForm"}
                  className={
                    "font-semibold text-base relative top-0.5 text-primary-500"
                  }
                >
                  مرحله قبل
                </Link>
              </button>
              <button
                className={
                  "cursor-pointer w-53.75 h-12 relative border bg-primary-500 rounded-2xl text-[14px] flex justify-center items-center space-x-5"
                }
              >
                <Link
                  href={"/reserveHouse/ticketIssuance"}
                  className={
                    "font-semibold text-base relative top-0.5  text-white"
                  }
                >
                  پرداخت آنلاین
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReserveHCard
        title="هتل سراوان رانین رشت"
        location="گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
        price={1500000}
        img={imgDef}
        isDiscount={true}
        disCount={20}
        disCountPrice={2500000}
      />
    </div>
  );
};

export default ConfirmInfoPage;
