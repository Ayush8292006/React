import React from 'react'
import Navabar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
    console.log(props)
  return (
    <div className='h-screen w-full '>
      <Navabar/>
      <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1
