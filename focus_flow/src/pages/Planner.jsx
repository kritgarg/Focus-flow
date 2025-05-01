import React from 'react'
import Searchbar from '../components/Searchbar'
import PlannerComp from '../components/PlannerComp'

const Planner = () => {
  return (
    <>
    <div className='mt-[34px]'>

    <Searchbar />
    </div>
    <div className=' h-screen mt-[100px] text-black'>
      <PlannerComp />
    </div>
    </>
  )
}

export default Planner
