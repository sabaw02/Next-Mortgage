'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import email from '@/assets/images/authentication/Email.png'

const Identifier = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormData) => {
    // e.;
    // if () onNext();
  };

  return (
    <div>
      <h2 className={'text-primary-700 text-[22px] font-medium text-center pt-[15px]'}>بازیابی رمزعبور</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[30px] text-center'}>برای بازیابی رمز عبور، ایمیل  خود را وارد کنید تا حساب خود را بازیابی کنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-semibold text-right text-[#1b1b1b] mb-2'>اطلاعات زیر را وارد نمایید</h4>
        <form>
          <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[12px] flex justify-between items-center'>
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='ایمیل خود را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={email} alt='email' width={19} height={19}/>
          </div>
          <button type="button" className='w-full h-9 rounded-xl bg-primary-500 text-sm font-medium text-white mt-2 mb-3'>
            ارسال کد تایید          
          </button>
        </form>
      </div>
    </div>
  )
}

export default Identifier