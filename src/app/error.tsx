'use client'
import React from 'react'

interface IError {
    error:Error ;
    reset: () =>void ;
}
const Error = ({error , reset}: IError) => {
  console.log("error", error)
  return (
    <div className='h-100 text-center content-center'>
      <h2 className='text-[30px] font-extrabold text-[#143B60]'>خطایی در بارگذاری صفحه رخ داد</h2>
      <p className='mt-10 text-[20px] font-semibold text-black dark:text-gray-400'> لطفا دوباره تلاش کنید </p>
      <button 
        className='mt-10 bg-red-500 w-32 h-10 rounded-full text-white cursor-pointer'
        onClick={()=> reset()}>
            تلاش مجدد
        </button>
    </div>
  )
}

export default Error
