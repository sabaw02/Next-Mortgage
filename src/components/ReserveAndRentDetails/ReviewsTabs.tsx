import React, { useState } from 'react'
import Year from '@/assets/images/reserve/Year.png'
import Image from 'next/image'
import aks from '@/assets/images/reserve/aks-dokhtar-3 1.png'
import send from '@/assets/images/reserve/send-2.png'
import like from '@/assets/images/reserve/like.png'
import dislike from '@/assets/images/reserve/dislike.png'
import Left from '@/assets/images/reserve/Left.png'
import ModalReplyReviws from './ModalReplyReviws'

const ReviewsTabs = () => {
    const [isOpen, setIsOpen] = useState('');

  return (
    <div className="w-full h-auto border border-[#D7D7D7] mx-auto mt-10 rounded-2xl p-10">

      {/* باکس نظر */}
        <div className='flex gap-3 relative'>
            <Image src={aks} alt='' className=" bg-gray-300 rounded-full w-11 h-11 dark:bg-gray-600" />
            <textarea className=" w-[90%] h-[144px] dark:bg-[#B9CADA] bg-white  rounded-2xl p-6 dark:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]  shadow-gray-100 border-2 border-[#C5C5C5] text-[#1B1B1B]" placeholder='نظر خود را با بقیه به اشتراک بگذارید'>
            </textarea>
            <button>
                <Image src={send}  className="absolute  right-189 bottom-3" alt=''/>
            </button>
        </div>
      {/* نظرات */}
        <div className="w-[90%] mt-10 items-center justify-between">
            <div className="flex items-center  gap-3">
                <Image src={aks} alt='' className="bg-gray-300 rounded-full w-11 h-11 dark:bg-gray-600" />
                <h6 className="text-[16px] font-semibold text-[#194C7B] dark:text-[#E5E7EB] mb-2">نگین رضایی</h6>
                <p className="pr-10 text-[16px] text-[#474747] dark:text-[#9CA3AF] font-semibold">
                ۱۴۰۳/۱۱/۱۴
                </p>
            </div>
            <div className='pr-15'>
                <p className="text-[15px] text-[#455A64] dark:text-[#D1D5D8] leading-7 mb-5"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <div className='flex gap-10 '>
                    <button className='flex gap-2 text-[12px] font-semibold text-[#194C7B]'>
                        <Image src={like}  className="" alt=''/>
                        (400)
                    </button> 
                    <button className='flex gap-2 text-center text-[12px] font-semibold text-[#194C7B]'>
                        <Image src={dislike}  className="" alt=''/>
                        (4)
                    </button> 
                 {/*پاسخ */}
                  <div className=''>
                      <button
                       onClick={() => setIsOpen(true)}
                       className='flex gap-2 text-center text-[16px] font-semibold text-[#194C7B]'>
                        پاسخ
                        <Image src={Left}  className="" alt=''/>
                      </button> 
                    {/* پاسخ به نظرات */}
                      <div>
                       <ModalReplyReviws   
                              isOpen={isOpen}
                              onClose={() => setIsOpen(false)}
                              onSubmit={''}
                              />
                      </div>
                  </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ReviewsTabs
