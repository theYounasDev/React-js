import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.pexels.com/photos/9034263/pexels-photo-9034263.jpeg',
      color: '#c79e4c',
      intro:'', 
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663050732693-de92a19e8d74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      color:'#77a674',
      intro:'', 
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
      color:'#2e6c6e',
      intro:'', 
      tag:'Underbanked'
    },
     {
      img:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'gray',
      intro:'', 
      tag:'Underjob'
    },
     {
      img:'https://images.pexels.com/photos/9034263/pexels-photo-9034263.jpeg',
      intro:'', 
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663050732693-de92a19e8d74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      intro:'', 
      tag:'Underserved'
    }
  ]
  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App