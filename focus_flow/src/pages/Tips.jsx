import React from 'react'
import Searchbar from '../components/Searchbar'
import TipComp from '../components/TipsComp'

const Tips = () => {
  return (
    <>
    <Searchbar />
    <div className=' h-screen mt-[100px]'>
      <TipComp />
    </div>
    </>
  )
}

export default Tips
