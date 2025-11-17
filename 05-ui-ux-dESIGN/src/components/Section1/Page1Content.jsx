import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = (props) => {
  return (
    <div className='py-3 h-[90vh]  px-18 flex justify-baetween items-center gap-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
