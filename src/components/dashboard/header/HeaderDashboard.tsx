import ThemeToggle from '@/components/common/ThemeToggle'
import { Bell, ChevronDown , Image } from 'lucide-react'
import React from 'react'

const HeaderDashboard = () => {
  return (
    <div className='flex justify-between w-full p-5 h-[66px] bg-[#FFFFFF] rounded-[12px]'>

      <div>
        <p className='text-[20px] font-black text-[#000000]'>داشبورد</p>
      </div>

      <div className='flex gap-5 items-center'>
        <ThemeToggle /> 
        <div className='flex gap-6 pr-4 border-r border-[#9C9C9C] items-center'>
          <Bell size={24} color="black" />
          <div className='  flex gap-2 items-center'>
            <Image href='/' size={40}/>
            <div className=''>
              <p className=' whitespace-nowrap text-[14px] font-mediom text-[#000000]'>امیر محمد ملایی</p>
              <p className='text-[12px] font-mediom text-[#888888]'>خریدار</p>
            </div>
            <ChevronDown size={20} color="black"/>
          </div>
        </div>
      </div>

    </div>
  )
}
export default HeaderDashboard