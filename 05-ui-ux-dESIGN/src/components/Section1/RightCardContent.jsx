import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-between transition-all duration-500 hover:from-black/80 hover:via-black/40">
      
      {/* Number Circle */}
      <div className="flex items-center justify-start">
        <h2 className="bg-gradient-to-tr from-blue-500 to-cyan-400 text-white rounded-full h-16 w-16 flex justify-center items-center text-3xl font-extrabold shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:scale-110 transition-transform duration-300">
          {props.id}
        </h2>
      </div>

      {/* Text + Buttons */}
      <div className="flex flex-col gap-8">
        <p className="text-lg text-white/95 mb-8 leading-relaxed tracking-wide font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid,
          quo recusandae fugiat aperiam eligendi.
        </p>

        <div className="flex justify-between items-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:scale-105">
            {props.tag}
          </button>
          
          <button className="bg-white/90 hover:bg-white transition-all duration-300 text-blue-600 p-4 rounded-full shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
