import React from 'react'
import home from "../../assets/images/signupbox/home.png"
import Group from "../../assets/images/signupbox/Group.png"
import Arrow from "../../assets/images/signupbox/Arrow 16.png"
import Left from "../../assets/images/spesialoffers/Left.png"
import Image from 'next/image'
import Link from 'next/link'

const SignUpBox = () => {
  return (
    <div className=' items-center justify-center mt-20 w-full h-auto'>
      <div className=' dark:bg-[#cbd5e1] bg-[#D7D7D7] w-full h-[312px] rounded-3xl -rotate-2'>
        <div className='content-center relative dark:bg-[#334155] bg-[#F6F6F6] w-full h-[312px] rounded-3xl rotate-2 transition-all duration-200 hover:translate-x-2 hover:translate-y-2 '>

          <div className=' flex items-center mx-auto justify-between'>
              <div className='pr-15  w-[491px]  '>
                <h4 className='max-[800px]:text-[22px] text-[28px] dark:text-[#f1f5f9] text-[#143B60] font-medium'>خانه موردنظرت را سریع بخر</h4>
                <p className='mt-2 max-[800px]:text-[16px] text-[20px] dark:text-[#cbd5e1] text-[#999999] font-medium'>با پیگیری آگهی ها در هوم نت خانه  موردنظر خود را انتخاب کرده و آن رو خریداری کنید</p>
                <Link href={"/"}>
                  <button className='mt-5 items-center justify-center flex gap-2 w-[148px] h-[48px] hover:w-[140px] hover:h-[50px] duration-200 bg-[#1C5387] rounded-[16px]'>
                  <p className='text-[16px] font-semibold text-[#FFFFFF]'> ثبت نام</p>
                  <Image className='' src={Left} alt="" width={24} height={24}  /> 
                  </button>
                </Link>
              </div>
              <div className=' pl-30  '>
                <Image className='max-[500px]:left-10  absolute left-20 top-10 animate-spin ' style={{animationDuration: '6s'}} src={Group} alt=""  />
                <Image className='max-[700px]:hidden max-[1400px]:-mt-0 max-[1000px]:w-[650px] max-[1000px]:h-[90%] max-[1400px]:w-[450px] max-[1400px]:h-[80%] -mt-20' src={home} alt=""  />
                <Image className='max-[1240px]:hidden absolute left-200 bottom-18 animate-bounce '  style={{animationDuration: '2s'}} src={Arrow} alt=""  />
              </div>
          </div> 
          
        </div>
      </div>
    </div>
  )
}

export default SignUpBox
