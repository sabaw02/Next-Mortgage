'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import pencil from "@/assets/images/authentication/pencil-square.png"

const VerifyPage = () => {
  const [email, setEmail] = useState('');

//   const handleSubmit = (e: FormData) => {
//     // e.;
//     // if () onNext();
//   };

  return (
    <div>
      <h2 className={'text-primary-700 text-[22px] font-medium text-center pt-[15px]'}>تایید کد ارسال شده</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[30px] text-center'}>کد تأیید ارسال شد. اگر کد را دریافت نکردید، صبر کنید یا «ارسال مجدد کد» را بزنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-medium text-right text-[#1b1b1b] mb-2'>کد تایید به ایمیل شما ارسال شد</h4>
        <Link href={''} className='flex items-center gap-2'>
          <span className='text-[10.5px] text-primary-400'> تغییر ایمیل</span> 
          <Image src={pencil} alt='pencil' width={10} height={10}/>
        </Link>
        <form>
          <div className='px-[12px] mt-3 flex gap-2 justify-center items-center'>
            <input type="text" name='num-1' onChange={(e) => setEmail(e.target.value)} className='w-[35px] bg-neutral-100 h-[35px] rounded-xl'/> 
            <input type="text" name='num-2' onChange={(e) => setEmail(e.target.value)} className='w-[35px] bg-neutral-100 h-[35px] rounded-xl'/> 
            <input type="text" name='num-3' onChange={(e) => setEmail(e.target.value)} className='w-[35px] bg-neutral-100 h-[35px] rounded-xl'/> 
            <input type="text" name='num-4' onChange={(e) => setEmail(e.target.value)} className='w-[35px] bg-neutral-100 h-[35px] rounded-xl'/> 
          </div>
          <div className='my-px text-center'>
            <span className='text-[10.5px] text-primary-500'>ارسال مجدد</span>
          </div>
          <button type="button" className='w-full h-8 rounded-xl bg-primary-500 text-sm font-medium text-white mt-2 mb-5'>
            تایید کد ارسال شده         
          </button>
        </form>
      </div>
    </div>
  )
}

export default VerifyPage;