import React from 'react'

const App = () => {

function btnClicked(){
  console.log("Button clicked")
}

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={btnClicked}>Change User</button>

      <button onClick={()=>{
        console.log("clicked")
      }}>Click here</button>


      <input onChange={(elem)=>{
        console.log("User is typing.")
        console.log(elem.target.value)
        
      }} type='text' placeholder='Enter Name' />


    </div>
  )
}

export default App
