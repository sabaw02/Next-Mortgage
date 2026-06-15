'use client';

import React from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image';
import Link from "next/link";
import StepIndicator from "../../../components/login/stepInndicator/stepIndicator"
import logo from "@/assets/images/authentication/pexels-josh-hild-1270765-28501949.png"
import google from '@/assets/images/authentication/Google.png'
import apple from '@/assets/images/authentication/Apple.png'
import home from "@/assets/images/authentication/home-line.png"

interface IChildren {
  children: ReactNode;
}

const LoginLayout: FC<IChildren>= ({children}) => {

  return (
    <>
        <StepIndicator/>

        <Image src={logo} alt={'login main image'} width={140} height={100} className={'mx-auto'}/>
        
        <div>
            {children}
            <div className={'pb-[20px]'}>
                <div className='w-[270px] mx-auto text-right'>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-neutral-500"></div>
                        <span className="text-neutral-500 font-normal text-xs">یا</span>
                        <div className="flex-1 h-px bg-neutral-500"></div>
                    </div>
                    <div className='flex gap-[20px] mt-1 mb-3'>
                        <button type='button' className='flex items-center justify-center gap-[10px] rounded-4xl h-9 border border-neutral-100 w-full'>
                            <Image src={google} alt='google icon' width={15} className='h-[15px]'/>
                            <span className='text-xs font-medium'>ورود با گوگل</span>
                        </button>
                        <button type='button' className='flex items-center justify-center gap-[10px] rounded-4xl h-9 border border-neutral-100 w-full'>
                            <Image src={apple} alt='apple icon' width={15} className='h-[15px]'/>
                            <span className='text-xs font-medium'>ورود با اپل</span>
                        </button>
                    </div>
                    <div className='text-center'>
                        <span className='font-medium text-xs text-neutral-700 ml-2'>حساب کاربری ندارید؟</span>
                        <Link href={'/signup'} className='text-xs font-semibold text-primary-500'>در هوم نت ثبت نام کنید</Link>
                    </div>
                </div>
                <Link href={'/'} className='flex justify-center'>
                    <div className='flex items-center w-[150px] py-px px-4 border border-primary-200 bg-primary-100 mt-[20px] rounded-2xl'>
                        <span className='text-sm font-medium text-primary-600 flex-1 text-center'>صفحه اصلی</span>
                        <Image src={home} alt='home icon' width={15} height={15}/>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default LoginLayout;
