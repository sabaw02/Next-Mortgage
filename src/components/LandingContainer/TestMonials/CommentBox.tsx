import Image from "next/image";
import React, { FC } from "react";
import hamid from "../../../assets/images/testmonials/hamid-fadaei 1.png";

interface CommentBoxProps {
  isCenter?: boolean;
  imageSrc?: string | null;
  title: string;
  caption: string;
  userName?: string;
}
const CommentBox: FC<CommentBoxProps> = ({
  isCenter = false,
  imageSrc,
  title,
  caption,
  userName,
}) => {
  return (
    <div
      className={`h-70 text-center content-center w-90 sm:h-101.75 rounded-[22px] dark:bg-[#cbd5e1] bg-[#E8EEF3] border border-[#E4E4E4]
            ${isCenter ? " bg-[#E8EEF3] border border-[#E4E4E4] " : " backdrop-blur-sm opacity-32"} 
        `}
    >
      <div className="max-[1440px]:h-auto mx-auto w-[93%] h-87.75 ">
        <Image
          className="max-[1124px]:w-20 max-[1124px]:h-20 mx-auto"
          src={hamid}
          alt="comments-img"
        />
        <h6 className="mt-5 text-[20px] text-[#194C7B] font-medium">
          {userName}
        </h6>
        <p className=" max-[1124px]:text-[14px] mt-10 text-[16px] text-[#49759F] font-normal">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default CommentBox;
