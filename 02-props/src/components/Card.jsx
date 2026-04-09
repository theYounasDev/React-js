import React from 'react'

const Card = (recive) => {
  return (
    <div>
        <div className='card'>
        <img src={recive.img} alt="" />
        <h1>{recive.user},{recive.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolore.</p>
        <button>submit</button>
      </div>
    </div>
  )
}

export default Card