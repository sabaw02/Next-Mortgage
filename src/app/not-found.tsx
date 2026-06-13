import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import error from "../assets/images/image_60-removebg-preview 1.png";

const Notfound = () => {
  return (
    <div className=' h-auto text-center'>
      <h2 className='max-[1000px]:text-[80px] text-[110px] font-extrabold text-[#143B60]'>404</h2>
      <p className='mt-7 text-[30px] font-semibold text-black dark:text-gray-400'>صفحه مورد نظر یافت نشد</p>
      
      <Link  href={"/"}>
        <button className='cursor-pointer mt-7 w-50 h-10 rounded-4xl bg-[#143B60]'>بازگشت به صفحه اصلی</button>
      </Link>

      <Image 
          className="mt-10 w-[1200px] h-[240px] max-[1000px]:h-[200px] mx-auto"
          src={error}
          alt=" "
          // width={137}
          // height={64}
      />
    </div>
  )
}

export default Notfound
