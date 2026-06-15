'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import phone from '@/assets/images/authentication/Mobile.png'
import key from '@/assets/images/authentication/Password.png'

const StepThreePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSubmit = (e: FormData) => {
//     // e.;
//     if (email || password) onSubmit(email);
//   };

  return (
    <div>
      <h2 className={'text-primary-700 text-[18px] font-semibold text-center pt-[10px]'}>رمزعبور جدید</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[30px] text-center'}>برای بازیابی رمز عبور، ایمیل  خود را وارد کنید تا حساب خود را بازیابی کنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-medium text-right text-[#1b1b1b] mb-2'>رمز عبور جدید خود را وارد نمایید</h4>
        <form>
          <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center my-1'>
            <input type="password" name='password' placeholder='رمزعبور جدید را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={key} alt='key' width={19} height={19}/>
          </div>
            <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center mb-2'>
                <input type="password" name='password' placeholder="تکرار رمز عبور" className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
                <Image src={key} alt='key' width={19} height={19}/>
            </div>          
            <button type="button" className='w-full h-9 rounded-xl bg-primary-500 text-xs font-medium text-white mt-2 mb-3'>
              تغییر رمز عبور
            </button>
        </form>
      </div>
    </div>
  )
}

export default StepThreePage;