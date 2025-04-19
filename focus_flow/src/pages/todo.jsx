import React from 'react'
import todo_icon from '../assets/todo_icon.png';




const todo = () => {
  return (
    <div className=' bg-white place-self-center  w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl m-[140px] ' >
      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
      <img src={todo_icon} alt="todo "  className='w-8'/>
      <h1 className='text-3xl font-semibold font-serif' >To-do List</h1>
      </div>
      
      
    </div>
  )
}

export default todo
