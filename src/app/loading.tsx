import { Home } from "lucide-react"

export default function Loading() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-transparent">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-72 h-72 rounded-full bg-sky-300/20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute w-96 h-96 rounded-full bg-indigo-300/15 blur-3xl animate-[pulse_4s_ease-in-out_infinite_1s]" />
        <div className="absolute w-56 h-56 rounded-full bg-amber-200/10 blur-3xl animate-[pulse_4s_ease-in-out_infinite_2s]" />
      </div>
      
      <div className="relative">
        <div className="absolute inset-[-30px] animate-[spin_6s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_8px_#38bdf8]"></div>
        </div>
        <div className="absolute inset-[-30px] animate-[spin_6s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 shadow-[0_0_8px_#818cf8]"></div>
        </div>
        <div className="absolute inset-[-30px] animate-[spin_5s_linear_infinite]">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_8px_#2dd4bf]"></div>
        </div>
        <div className="absolute inset-[-30px] animate-[spin_5s_linear_infinite_reverse]">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-[0_0_8px_#fb7185]"></div>
        </div>
        
        <div className="absolute inset-[-15px] rounded-full border border-white/20 dark:border-white/10 animate-[spin_8s_linear_infinite]"></div>
        <div className="absolute inset-[-25px] rounded-full border border-white/10 dark:border-white/5 animate-[spin_10s_linear_infinite_reverse]"></div>
        
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl shadow-blue-500/20 border border-white/50 dark:border-gray-700/50">
            <Home 
              size={40} 
              strokeWidth={1.4}
              className="text-[#1C5387] dark:text-blue-400 drop-shadow-md"
          />
          <div className="absolute -inset-1 bg-blue-400/20 rounded-2xl blur-md animate-pulse"></div>
        </div>
      </div>
      
    </div>
  );
}