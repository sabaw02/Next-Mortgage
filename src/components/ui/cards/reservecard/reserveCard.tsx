import React from 'react'
import calendar from '@/assets/images/reserve/calendar.png'
import users from '@/assets/images/reserve/users-group.png'
import minus from '@/assets/images/reserve/minus-square.png'
import plus from '@/assets/images/reserve/plus-square.png'
import Image from 'next/image'
import { FaMinus, FaPlug, FaPlus } from 'react-icons/fa6'
import { IoAdd, IoCalendar } from 'react-icons/io5'
import { BiUser } from 'react-icons/bi'
import { FaCalendar, FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa'
const ReserveCard = () => {
  return (
        <div className=' w-[95%] h-[368px] mx-auto content-center justify-center items-center border border-[#D7D7D7] rounded-2xl'>
            <div className='mt-5  h-[230px] border-b border-b-[#D7D7D7]'>
                <div className=' mx-auto w-[91%] h-[119px] border-1 border-[#D7D7D7] rounded-2xl'>
                    <div className='flex'>
                        <div className='pr-3 w-[50%] h-15 items-center mx-auto flex gap-2 '>
                            <FaRegCalendarAlt className='text-black dark:text-white ' />
                            <div className=''>
                                <h6 className='text-[#697E8E] font-medium text-[12px]'>عنوان</h6>
                                <p className='dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]'>۱۲ اسفند</p>
                            </div>
                        </div>
                        <div className='pr-3 w-[50%] h-15 items-center mx-auto flex gap-2 border-r border-r-[#D7D7D7] '>
                            <FaRegCalendarAlt className='text-black dark:text-white ' />
                            <div className=''>
                                <h6 className='text-[#697E8E] font-medium text-[12px]'>عنوان</h6>
                                <p className=' dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]'>۱۲ اسفند</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w- w-[100%] h-[60px] border-t border-t-[#D7D7D7]'>
                        <div className=' pr-3 w-[89px] h-[42px] items-center flex gap-2 '>
                            <BiUser className='text-black dark:text-white ' />
                            <div className=''>
                                <h6 className='text-[#697E8E] font-medium text-[12px]'>عنوان</h6>
                                <p className='dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[12px]'>۱۲ نفر</p>
                            </div>  
                        </div>

                        <div className='ml-6 w-[71px] h-[24px] flex'>
                            <FaPlus className='text-black dark:text-white ' />
                            <p className='px-3 dark:text-[#FFFFFF] text-[#1B1B1B] text-[12px] font-medium'> 2 </p>
                            <FaMinus className='text-black dark:text-white ' />
                        </div>
                    </div>
                </div>
                <div className='  max-[1280px]:flex mx-auto mt-4 pr-3 w-[91%] h-[69px]  '>
                    <h6 className='dark:text-[#FFFFFF] text-[#1B1B1B] font-medium text-[16px]'>عنوان</h6>
                    <div className="max-[1280px]:flex-col max-[1280px]:gap-1  flex justify-between p-3">
                        <h1 className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px]   text-[#A6A6A6] text-[20px] font-light space-x-1">
                            <span className="relative">
                                <span className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px]  absolute inset-x-0 top-1/2 h-px bg-red-500 transform -translate-y-1/2 -rotate-8"></span>
                                    1,500,000
                                </span>
                            <span className="text-xs font-medium ">تومان</span>
                        </h1>
                        <h1 className="max-[500px]:text-[10px] max-[770px]:text-[13px]  max-[1535px]:text-[16px] dark:text-[#FFFFFF] text-[#1E1E1E] text-[20px] font-light space-x-1 ">
                            <span className=''> 2,500,000</span>
                            <span className="max-[500px]:text-[10px] text-xs font-medium">تومان</span>
                        </h1>
                        <div className="max-[770px]:text-[10px]  max-[1535px]:text-[13px]  w-12.75 h-7.25 rounded-full bg-danger-500 flex justify-center items-center text-base">
                            N%
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-[500px]:mt-2 mt-5 w-[91%] mx-auto '>
                <button className='max-[500px]:text-[13px] max-[1024px]:h-[40px] mx-auto w-[97%] h-[48px] bg-[#1C5387]  text-[16px] font-medium text-[#FFFFFF] rounded-[16px]'>
                        عنوان 
                </button>
                <p className='max-[500px]:text-[10px] mx-auto w-[90%] h-[48px] py-3 text-center text-[12px] font-normal text-[#999999] '>ارسال درخواست رزرو برای شما هزینه‌ای ندارد</p>
            </div>
        </div>
    )
}

export default ReserveCard
