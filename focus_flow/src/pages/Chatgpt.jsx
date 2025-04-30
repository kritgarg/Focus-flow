import React from 'react'
import Searchbar from '../components/Searchbar'
import ChatComp from '../components/ChatComp'

const Chatgpt = () => {
  return (
    <>
    <Searchbar />
    <div className=' h-screen mt-[100px] text-black '>
      <ChatComp />
    </div>
    </>
  )
}

export default Chatgpt
