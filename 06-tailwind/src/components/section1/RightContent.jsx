import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props)
  return (
    <div id='Right' className='h-[95%] w-3/4 overflow-x-auto rounded-4xl flex flex-nowrap gap-4  m-5'>
       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id = {idx} image = {elem.img} btncolor= {elem.color} tag = {elem.tag}/>
       })}
       
    </div>
  )
}

export default RightContent
