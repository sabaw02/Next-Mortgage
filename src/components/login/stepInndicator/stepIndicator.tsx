
interface IProp {
  currentStep: 'email' | 'verify'
}

export default function StepIndicator({ currentStep } : IProp) {
  return (
    <div className="flex justify-center items-center gap-3 mb-6 mt-2 text-center">
      <div>
        <div className={`mb-1 h-1 w-[110px] rounded-full transition-all ${currentStep === 'email' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold ">وارد کردن شماره همراه</span>
      </div>
      <div>
        <div className={`mb-1 h-1 w-[110px] rounded-full transition-all ${currentStep === 'verify' ? 'bg-primary-600' : 'bg-neutral-200'}`} ></div>
        <span className="text-[10px] font-semibold">تایید کد ارسال شده</span>
      </div>
    </div>
  );
}