import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  // by fetch

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
  //   console.log(response)



  // }

  // by arrow function

  //   const getData = async ()=> {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()

  //   console.log(data);
    
  // }

//-------------------------------------------------------

  // by axios

  const [data,setData] = useState([])

  const getData = async ()=> {
   const response = await axios.get('https://picsum.photos/v2/list')
   setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello,{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
