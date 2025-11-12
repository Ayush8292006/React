import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src='https://c8.alamy.com/comp/3C0CD0B/man-emoji-icon-vector-illustration-isolated-male-emoticon-3C0CD0B.jpg' className='img' />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet, quisquam nam error numquam repellendus nemo inventore hic nisi obcaecati?</p>
        <button className='button'>Follow</button>
      </div>
    </div>
  )
}

export default Card
