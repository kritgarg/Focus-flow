import React from 'react';
import Todo from './todo';
import Pomo from './pomo';
import Calendar from './Calender';
import Searchbar from '../components/Searchbar';
import TasksCompletedCard from '../components/TasksCompletedCard';
import RandomQuoteBox from '../components/RandomQuoteBox';
import PomoTarget from '../components/PomoTarget';
import PomoSessionCounter from '../components/PomoSessionCounter';
import StickyNotes from '../components/StickyNotes';
import Sticky from '../components/Sticky';
import DailyReflectionJournal from '../components/DailyReflectionJournal';
import ProductivityChart from '../components/ProductivityChart';

const Dashboard = () => {
  return (
    <div className="bg-[#f7f7f4] min-h-screen p-6">
      
      <div className="mb-6">
        <Searchbar />
      </div>
        


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="col-span-1  ml-[20px] mb[-40px]">
          <Todo />
        </div>

        <div  className="col-span-1  ml-[10px] mb[-40px]">
          <Sticky />
       
        </div>

<div className=" ">

      <Pomo />

          <div className=" mt-[20px]">
            <RandomQuoteBox />
          </div>

</div>


        <div className="col-span-1  ">
        <DailyReflectionJournal /> 
        </div>

<div className="col-span-1 mt-[480px] ml-[-280px] ">

        <ProductivityChart />
</div>

      </div>


    </div>
  );
};

export default Dashboard;

