import Image from "next/image";
import React from "react";
import Frame from "../../assets/images/Frame.png";
import about from "../../assets/images/about/about.png";
function About() {
  return (
    <div className="max-[710px]:pt-5 mx-auto mt-20 pt-15 w-full h-180 xs:h-auto justify-center dark:bg-[#334155] bg-[#F6F6F6] ">
      <div className=" max-[710px]:h-15 items-center mx-auto flex justify-between w-full h-37.5">
        <div className=" max-[888px]:w-150 mx-auto w-200 relative flex">
          <Image
            className="max-[710px]:hidden  absolute bottom-5"
            src={Frame}
            alt=""
          />
          <div className="max-[500px]:w-50 mx-auto w-[256px] border-b-2 border-b-[#D9D9D9]">
            <h2 className="max-[500px]:w-35  text-center mx-auto w-42 border-b-2  border-b-[#194C7B] text-[28px] font-medium dark:text-[#f1f5f9] text-[#143B60]">
              درباره ما
            </h2>
          </div>
          <Image
            className="max-[710px]:hidden absolute bottom-14 left-0 "
            src={Frame}
            alt=""
          />
        </div>
      </div>

      <div className=" max-[730px]:grid max-[730px]:grid-cols-1 max-[730px]:grid-rows-2  grid grid-cols-2 grid-rows-1  mx-auto ">
        <Image
          className="max-[960px]:w-162.5 max-[960px]:h-95 mx-auto mr-0 px-10 sm:px-0 hidden xs:block"
          src={about}
          alt=""
          width={698}
          height={456}
        />
        <div className=" w-[90%] mx-auto mt-8 xs:mt-0">
          <h6 className="text-[20px] font-medium w-30 h-6 dark:text-[#f1f5f9] text-[#143B60]">
            درباره هوم نت
          </h6>
          <p className="max-[1240px]:text-[16px] text-[20px] font-normal dark:text-[#cbd5e1] mt-3 text-justify text-[#5C5C5C] mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
