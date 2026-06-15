'use client';

import { useState, useRef, FormEvent } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import pencil from "@/assets/images/authentication/pencil-square.png";
import {verifyStep2} from '@/actions/auth';

const StepTwoPage = () => {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = digits.join(''); 
    const formData = new FormData();
    formData.append('code', code);
    await verifyStep2(formData);
  };


  return (
    <div>
      <h2 className={'text-primary-700 text-[22px] font-medium text-center pt-[15px]'}>تایید کد ارسال شده</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[20px] text-center'}>کد تأیید ارسال شد. اگر کد را دریافت نکردید، صبر کنید یا «ارسال مجدد کد» را بزنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-medium text-right text-[#1b1b1b] mb-2'>کد تایید به ایمیل شما ارسال شد</h4>
        <Link href={'/signup'} className='flex items-center gap-2'>
          <span className='text-[10.5px] text-primary-400'> تغییر ایمیل</span> 
          <Image src={pencil} alt='pencil' width={10} height={10}/>
        </Link>
        <form onSubmit={handleSubmit}>
          <div dir="ltr" className='px-[12px] mt-3 flex gap-2 justify-center items-center'>
            {digits.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                className="w-[32px] bg-neutral-100 h-[32px] rounded-xl text-center"
                ref={(el) => { inputsRef.current[idx] = el; }}      
              />
            ))}
          </div>
          <div className='my-px text-center'>
            <span className='text-[10.5px] text-primary-500'>ارسال مجدد</span>
          </div>
          <button type="submit" className='w-full h-8 rounded-xl bg-primary-500 text-sm font-medium text-white mt-2 mb-3'>
            تایید کد ارسال شده         
          </button>
        </form>
      </div>
    </div>
  )
}

export default StepTwoPage;