'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import user from '@/assets/images/authentication/User.png'
import key from '@/assets/images/authentication/Password.png'

const Identifier = ({onSubmit}: {onSubmit: (email:string)=> void}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormData) => {
    // e.;
    if (email || password) onSubmit(email);
  };

  return (
    <div>
      <h2 className={'text-primary-700 text-[18px] font-semibold text-center pt-[10px]'}>ورود به حساب کاربری</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[25px] text-center'}>برای دسترسی به همه خدمات هوم‌نت و تجربه بهتر در سایت، وارد حساب خود شوید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-semibold text-right text-[#1b1b1b] mb-2'>اطلاعات زیر را وارد نمایید</h4>
        <form action={handleSubmit}>
          <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center'>
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='ایمیل خود را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={user} alt='user' width={19} height={19}/>
          </div>
          <div className='h-9 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center mt-1 mb-2'>
            <input type="password" name='password' placeholder='رمز عبور خود را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={key} alt='key' width={19} height={19}/>
          </div>
          <Link href={'/'} className='text-xs font-medium text-primary-800'>فراموشی رمزعبور</Link>
          <button type="button" className='w-full h-9 rounded-xl bg-primary-500 text-sm font-medium text-white mt-2 mb-3'>
            ورود به حساب کاربری
          </button>
        </form>
      </div>
    </div>
  )
}

export default Identifier