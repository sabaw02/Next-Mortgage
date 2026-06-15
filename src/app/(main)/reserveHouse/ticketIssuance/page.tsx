import React from "react";
import Image from "next/image";
import success from "@/assets/images/reserve/Successful purchase-pana(2) 1.png";
import colorArrow from "@/assets/images/reserve/Left.png";
import arrow from "@/assets/images/reserve/Left2.png";
import Button from "@/components/ui/button/button";

const TicketIssuancePage = () => {
  return (
    <div className="flex justify-center items-starts">
      <div>
        <Image src={success} alt="success" width={494} height={400} />
        <div className={"flex gap-5 justify-center items-center mt-5 mb-15"}>
          <Button
            isOutline={true}
            text="صفحه اصلی"
            icon={
              <Image src={colorArrow} alt="colorArrow" width={20} height={20} />
            }
            iconPos="left"
          />
          <Button
            isOutline={false}
            text="بلیط من"
            icon={<Image src={arrow} alt="arrow" width={20} height={20} />}
            iconPos="left"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketIssuancePage;
