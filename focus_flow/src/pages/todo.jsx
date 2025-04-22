import React from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './todoitems';
import { useState } from 'react';
import { useRef } from 'react';




const todo = () => {

const inputRef = useRef( );

const add =() => {
      const inputText = inputRef.current.value.trim();
      console.log(inputText);
}

  return (
    <div className=' bg-white place-self-center  w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-[20px] m-[140px]  shadow-md' >
      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
      <img src={todo_icon} alt="todo "  className='w-8'/>
      <h1 className='text-3xl font-semibold font-serif' >To-do List</h1>
      </div>

       {/* ------------------------input field---------------- */}

       <div className=' flex items-center my-7 bg-gray-200 rounded-full '>
        <input ref={inputref} type="text" placeholder='Add a new task' className=' bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder: text-slate-600 '/>
        <button onClick={add} className='border-none rounded-full w-32 h-14 bg-orange-600 text-white text-lg font-medium cursor-pointer '>Add+</button>
       </div>
   
        {/* ------------------------todo items---------------- */}

        <div>
          <TodoItems text="learn" />
          <TodoItems text="learn coding" />
        </div>
      
    </div>
  )
}

export default todo
