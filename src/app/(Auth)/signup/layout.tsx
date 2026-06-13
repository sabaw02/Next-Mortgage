'use client';

import React from 'react'
import type { FC, ReactNode } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Verifiction from "../../../components/signUp/verify/verifiction"
import Account from "../../../components/signUp/account/account"
import StepIndicator from "../../../components/signUp/stepInndicator/stepIndicator"
import logo from "@/assets/images/authentication/pexels-josh-hild-1270765-28501949.png"
import google from '@/assets/images/authentication/Google.png'
import apple from '@/assets/images/authentication/Apple.png'
import home from "@/assets/images/authentication/home-line.png"

interface IChildren {
  children: ReactNode;
}
type step = 'email' | 'verify'  | 'account'

const SignUpLayout:FC<IChildren>= ({children}) => {
    const [step, setStep] = useState<step>('email');
    const [email, setEmail] = useState('');

    const nextStep = () => {
    if (step === 'email') setStep('verify');
    else if (step === 'verify') setStep('account');
  };

  const prevStep = () => {
    if (step === 'verify') setStep('email');
    else if (step === 'account') setStep('verify');
  };

  return (
    <>
        <StepIndicator currentStep={step} />

        <Image src={logo} alt={'login main image'} width={140} height={100} className={'mx-auto'}/>
        
        <div>
            {children}

            {step === 'verify' && (
                <Verifiction
                // email={formData.email}
                // phone={formData.phone}
                // onVerify={(code) => {
                //     updateFormData({ code });
                //     nextStep();
                // }}
                // onBack={prevStep}
                />
            )}

            {step === 'account' && ( 
                <Account
            //     onSetPassword={(password) => {
            //         updateFormData({ password });
            //         handleSubmit();
            //     }}
            //     onBack={prevStep}
                />
            )}


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
                    <div className='text-center mt-[15px]'>
                        <span className='font-medium text-xs text-neutral-700 ml-2'>حساب کاربری دارید؟</span>
                        <Link href={''} className='text-xs font-semibold text-primary-500'>وارد هوم نت شوید</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-end h-7'>
                <Link href={'/'} className=''>
                    <div className='flex items-center w-[150px] py-px px-4 border border-primary-200 bg-primary-100 rounded-2xl h-full'>
                        <span className='text-sm font-medium text-primary-600 flex-1 text-center'>صفحه اصلی</span>
                        <Image src={home} alt='home icon' width={15} height={15}/>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default SignUpLayout;
