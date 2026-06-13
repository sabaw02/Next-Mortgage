'use client';
import Image from "next/image";
import { FC, MouseEventHandler, SetStateAction, useState } from "react";
import { FiX } from "react-icons/fi";
import best from '@/assets/images/reserve/pexels-expect-best-79873-323780 1.png'
import restu from '@/assets/images/reserve/686bba4ba1e6f83605b73bed_رستوران (3) 1.png'
import sw from '@/assets/images/reserve/686bba85a1e6f83605b73bf2_سوییت دبل لاکچری (2) 2.png'


interface ModalReviwsProps{
  isOpenModal:SetStateAction<boolean> ,
  closeModal:MouseEventHandler<HTMLButtonElement>,
}
const ModalImageReviws: FC<ModalReviwsProps> = ({ isOpenModal, closeModal }) => {

  const [mainImage, setMainImage] = useState(best,);

  const thumbnails = [
    best,
    restu,
    sw,
    sw,
    best,
        best,
    restu,
    sw,
    sw,
    best,
  ];

  if (!isOpenModal) return null;

  return (
    <div className=" fixed inset-0 bg-black/60 flex items-center justify-center  h-full z-500">
      <div className="dark:bg-[#B9CADA] bg-white rounded-[28px] w-[50%] h-auto p-5 border border-[#1C5387]">
        
        <div className="flex justify-between mb-2 ">
          <button onClick={closeModal} className=" text-2xl text-black">
            <FiX />
          </button>
        </div>

        <div className="">
            <div className="">
                  <Image
                  src={mainImage}
                  alt="عکس اصلی"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg w-full"
              />
            </div>
            <div className="flex gap-4 mt-5">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(thumb)}
                  className={`cursor-pointer border-2 rounded-lg overflow-hidden transition
                     ${ mainImage === thumb ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`عکس کوچک ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-cover hover:opacity-80"
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
export default  ModalImageReviws