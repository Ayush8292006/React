import React, { useState } from 'react'

const App = () => {

  

  // Counter state
  const [value, setValue] = useState(0);

  // Increase function
  function increment() {
    setValue(value + 1);
  }

  // Decrease function
  function decrement() {
    setValue(value - 1);
  }

  return (
    <div className="container">

      <h1 className="title">React Counter App 🔢</h1>

      <h1 className="value">{value}</h1>

      <div className="btn-group">
        <button onClick={increment} className="btn inc">Increase</button>
        <button onClick={decrement} className="btn dec">Decrease</button>
      </div>

    </div>
  )
}

export default App
