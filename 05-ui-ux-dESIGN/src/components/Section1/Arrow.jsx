import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Arrow = () => {
  return (
    <div className="flex items-end  h-full p-6">
      <div className="text-[150px] text-black font-extrabold 
        drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] 
        hover:text-blue-400 hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.9)] 
        transition-all duration-500 ease-in-out 
        hover:scale-110 hover:-translate-y-2 cursor-pointer">
        <ArrowUpRight strokeWidth={2.6} />
      </div>
    </div>
  )
}

export default Arrow
