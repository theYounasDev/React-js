import React from 'react'
import RightCardText from './RightCardText'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-60 bg-red-500 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.image} /> 
      <RightCardText idnumber = {props.id} tagtitle = {props.tag}  btncolor = {props.btncolor}/>
    </div>
  )
}

export default RightCard
