import React from 'react'
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
      const { pending } = useFormStatus();
  return (
    <div>
        <button type='submit'  disabled={pending} 
            className='disabled:opacity-60 cursor-auto  w-[98%] h-[52px] rounded-2xl bg-[#1C5387] text-[16px] font-semibold text-[#FFFFFF]'>
            {pending ? "ارسال " : "ارسال درخواست"}  
        </button>
        {/* <p>{state.message}</p> */}
   </div>
  )
}

export default SubmitButton
