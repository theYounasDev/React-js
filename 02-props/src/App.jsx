import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
      <Card user="ali" age={18} img='https://images.unsplash.com/photo-1774286111329-3bdddc7d730e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="muneeb" age={28} img='https://images.unsplash.com/photo-1702149001693-67ca09997ecc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="muneeb" age={28} img='https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App