'use client';
import { FC, MouseEventHandler, SetStateAction, useState } from "react";
import { FiX } from "react-icons/fi";

interface ModalReviwsProps{
  isOpen:SetStateAction<string> | boolean,
  onClose:MouseEventHandler<HTMLButtonElement>,
  onSubmit:string | CallableFunction,
}
const ModalReplyReviws: FC<ModalReviwsProps> = ({ isOpen, onClose, onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit =async () =>{
    if(!text.trim()){
      alert('پاسخ خود را وارد کنید');  
      return
    }
// api و tost 
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 justify-center items-center  w-full z-100">
      <div className="absolute inset-0 p-4  mx-auto items-center justify-center content-center w-full">
          <div className="relative mx-auto dark:bg-[#B9CADA] bg-white rounded-[28px] w-[25%] h-[20%] p-5 border border-[#1C5387]">
              <div className="flex justify-between mb-2">
                <h3 className="whitespace-nowrap text-[#474747]">نوشتن پاسخ</h3>
                <button onClick={onClose} className="text-2xl text-black">
                   <FiX/>
                 </button>
              </div>
              <textarea 
                 className="w-full h-15 border p-2 rounded-xl text-[#5C5C5C]"
                 value={text}
                 onChange={e => setText(e.target.value)}
                  placeholder="متن پاسخ..."
               />
              <button 
                onClick={handleSubmit}
                className="mt-3 bg-[#1C5387] text-white px-4 py-1 rounded-xl"
             >
               ارسال
              </button>
          </div>
      </div>

    </div>
  );
}
export default  ModalReplyReviws