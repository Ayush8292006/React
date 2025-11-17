import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="relative h-full w-3/4 p-10 flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide 
    bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl border border-gray-800/60">
      
      {/* Left fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />

      {/* Cards */}
      {props.users.map((elem, idx) => (
        <div
          key={idx}
          className="snap-center transition-transform duration-500 hover:scale-105 hover:rotate-[0.5deg]"
        >
          <RightCard id={idx + 1} img={elem.img} tag={elem.tag} />
        </div>
      ))}

      {/* Right fade effect */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />

      {/* Decorative glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 blur-[1px] opacity-60 rounded-full" />
    </div>
  )
}

export default RightContent
