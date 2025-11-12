import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Ayush' age = {18}/>
      <Card user='Rohit' age = {19}/>
      <Card user='Aman' age = {17}/>
      <Card user='Anuj' age = {16}/>
      <Card user='Akash' age = {14}/>
      <Card user='Mohit' age = {20}/>
    </div>
  )
}

export default App
