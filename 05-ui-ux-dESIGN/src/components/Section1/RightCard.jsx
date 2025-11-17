import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="relative shrink-0 w-80 h-full overflow-hidden rounded-3xl shadow-lg bg-white">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        src={props.img}
        alt="card background"
      />

      {/* Overlay Content */}
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
