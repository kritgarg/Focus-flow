import React from 'react'
import Searchbar from '../components/Searchbar'
import ChatComp from '../components/ChatComp'

const Chatgpt = () => {
  return (
    <>
    <div className='mt-[34px]'>

    <Searchbar />
    </div>
    <div className=' h-screen mt-[100px] text-black '>
      <ChatComp />
    </div>
    </>
  )
}

export default Chatgpt
