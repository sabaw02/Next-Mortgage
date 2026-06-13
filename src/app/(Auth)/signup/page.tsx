'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import emailpic from '@/assets/images/authentication/Email.png'
import {registerStep1} from '@/app/actions/auth'

const StepOnePage = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2 className={'text-primary-700 text-[22px] font-medium text-center pt-[15px]'}>ساخت حساب کاربری</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[30px] text-center'}>برای دسترسی به امکانات هوم‌نت و مدیریت پروژه‌ها، یک حساب کاربری ایجاد کنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-semibold text-right text-[#1b1b1b] mb-2'>اطلاعات زیر را وارد نمایید</h4>
        <form action={registerStep1}>
          <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[12px] flex justify-between items-center'>
            <input type="email" name='email' placeholder='ایمیل خود را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={emailpic} alt='email' width={19} height={19}/>
          </div>
          <button type="submit" className='w-full h-9 rounded-xl bg-primary-500 text-sm font-medium text-white mt-2 mb-3'>
            ارسال کد تایید          
          </button>
        </form>
      </div>
    </div>
  )
}

export default StepOnePage