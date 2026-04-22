import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardText = (props) => {
  return (
    <div>
      <div className='h-full w-full absolute top-0 left-0 p-4 flex flex-col justify-between'>
              <h2 className='h-7 w-7 bg-white rounded-full  font-bold flex items-center justify-center'>{props.idnumber + 1}</h2>
              <div>
                  <p className=' mb-7 leading-relaxed text-l text-white'>Lorem ipsum dolor sit<br /> amet consectetur adipisicing elit. Vel est eaque nemo voluptatum excepturi culpa!</p>
                  <div className='flex items-center justify-between'>
                       <button style={{backgroundColor : props.btncolor}} className='bg-blue-500 text-white px-6 py-2 rounded-full font-medium'>{props.tagtitle}</button>
                       <button className='bg-blue-500 text-white px-3 py-2 rounded-full font-medium '><MoveRight /></button>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default RightCardText
