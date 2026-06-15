
interface IProp {
  currentStep: 'email' | 'verify' | 'newPass'
}

export default function StepIndicator() {
  return (
    <div className="flex justify-center items-center gap-5 mb-6 text-center mt-2">
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentStep === 'email' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold ">وارد کردن ایمیل</span>
      </div>
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentStep === 'verify' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold"> تایید کد ارسال شده</span>
      </div>
      <div>
        <div className={`mb-1 h-[5px] w-[100px] rounded-full transition-all ${currentStep === 'newPass' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold">رمز عبور جدید</span>
      </div>
    </div>
  );
}