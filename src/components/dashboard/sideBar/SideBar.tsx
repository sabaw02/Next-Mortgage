import React from 'react'
import MenuSidebar from './MenuSidebar'
import Link from 'next/link'
import { LogOut, Wallet } from 'lucide-react'




const  SideBar = () => {

  return (
    <div className='flex flex-col w-[270px] h-[775px] rounded-[12px] bg-[#FFFFFF] p-5'>

      <div className=' flex justify-between items-center '>
         <h1 className='text-[24px] text-[#000000] font-black '>هوم نت</h1>
         <Link href='/'>
            <LogOut color='black'/>
         </Link>
      </div>

      <MenuSidebar/>

      <div className='mt-auto p-4 flex gap-5 items-center border border-dashed w-[232px] h-[80px] rounded-[12px]'>
        <Wallet size={28} color="black"/>
        <div className=' w-[74px] h-[55px] '>
          <h6 className=' text-[20px] text-[#000000]'>کیف پول</h6>
          <p className='mt-1  text-[14px] text-[#888888]'>  عدم موجودی </p>
        </div>
      </div>

    </div>
  )
}

export default SideBar