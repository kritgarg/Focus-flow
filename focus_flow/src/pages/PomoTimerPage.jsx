import React from 'react'
import Pomo from './pomo'
import PomoComp from '../components/PomoComp'
import Searchbar from '../components/Searchbar'

const PomoTimerPage = () => {
  return (<>
<div className='mt-[34px]'>

    <Searchbar />
</div>

    <div className='text-black  h-screen mt-[100px]'>
     
      <PomoComp />
    </div>
  </>
  )
}

export default PomoTimerPage
