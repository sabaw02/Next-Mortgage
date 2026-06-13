import { InfoBoxProps } from '@/types';
import Image from 'next/image';
import { title } from 'process';
import React, { FC } from 'react'

const InfoBox: FC<InfoBoxProps> = ({title , text , imageSrc}) => {
  return (
    <div className=' w-[481px] h-[48px] flex gap-2'>
        <div className='max-[640px]:w-[38px] max-[640px]:h-[38px] justify-center content-center rounded-3xl bg-[#C5BBFA] w-[48px] h-[48px]'>
            <Image className='mx-auto  justify-center items-center w-6 h-6' src={imageSrc} width={48} height={48} alt="not-found"/>
        </div>
        <div className=' max-[460px]:w-[30%] '>
            <h3 className=' text-[#826CF4] font-medium text-[16px] '>{title}</h3>
            <p  className=' text-center text-[#999999] font-normal text-[12px] hover:text-[#1C5387]'>{text}</p>
        </div>
    </div> 
  )
}

export default InfoBox
