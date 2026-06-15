'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import phone from '@/assets/images/authentication/Mobile.png'
import key from '@/assets/images/authentication/Password.png'
import {completeRegistration} from '@/actions/auth'

const initialState = { error: '' };

const StepThreePage = () => {
  const [state, formAction] = useFormState(completeRegistration, initialState);

  return (
    <div>
      <h2 className={'text-primary-700 text-[18px] font-semibold text-center pt-[10px]'}>ایجاد حساب کاربری</h2>
      <p className={'text-neutral-600 font-medium text-xs pt-2 pb-[20px] text-center'}>برای دسترسی به امکانات هوم‌نت و مدیریت پروژه‌ها، یک حساب کاربری ایجاد کنید.</p>
      <div className='w-[270px] mx-auto text-right'>
        <h4 className='text-xs font-medium text-right text-[#1b1b1b] mb-2'>اطلاعات زیر را وارد نمایید</h4>
        <form action={formAction}>
          <div className='h-8 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center'>
            <input type="text" name='phoneNumber' placeholder='شماره تماس را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full'/> 
            <Image src={phone} alt='user' width={19} height={19}/>
          </div>
          <div className='h-8 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center my-1'>
            <input type="password" name='password' placeholder='رمز عبور خود را وارد نمایید' className='w-full text-[10px] font-semibold text-neutral-700 h-full' required/> 
            <Image src={key} alt='key' width={19} height={19}/>
          </div>
          <div className='h-8 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-[14px] flex justify-between items-center mb-2'>
              <input type="password" name='confirmPassword' placeholder="تکرار رمز عبور" className='w-full text-[10px] font-semibold text-neutral-700 h-full' required/> 
              <Image src={key} alt='key' width={19} height={19}/>
          </div>   
          {state.error && <p className="text-red-500 text-[10px] mt-1">{state.error}</p>}       
          <button type="submit" className='w-full h-8 rounded-xl bg-primary-500 text-xs font-medium text-white mt-2 mb-3 cursor-pointer'>
            ایجاد حساب کاربری
          </button>
        </form>
      </div>
    </div>
  )
}

export default StepThreePage;