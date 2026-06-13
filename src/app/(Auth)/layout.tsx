import Image from 'next/image'
import React from 'react'
import type { FC, ReactNode } from 'react'
import image from "@/assets/images/authentication/pexels-josh-hild-1270765-285019491.png"

interface IChildren {
  children: ReactNode;
}

const AuthLayout: FC<IChildren>= ({children}) => {
  return (
    <div className={"flex justify-center items-center min-h-screen gap-8.75"}>
      <div className='shadow-[2px_4px_13px_0px_rgba(0,0,0,0.15)] rounded-3xl pt-2.5 w-105 h-145'>
        {children}
      </div>
      <div className={'w-105'}>
        <Image src={image} alt={'login main image'} height={580}/>
      </div>
    </div>
  )
}

export default AuthLayout;