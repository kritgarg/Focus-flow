import React from 'react'
import Todo from './todo'
import TodoComp from '../components/TodoComp'
import Searchbar from '../components/Searchbar'
import "./TodoPage.css"

const TodoPage = () => {
  return (
    <>
      <Searchbar />
    <div class="todo"  className='h-screen text-black mt-[50px]'>

      <TodoComp />

    </div>
    </>
  )
}

export default TodoPage
