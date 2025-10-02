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

        <div className="col-span-1 flex justify-center md:mr-[-30px]">
          <Todo />
        </div>

        <div className="col-span-1 flex justify-center md:mr-[30px]">
          <Sticky />
        </div>

        <div className="col-span-1 flex flex-col items-center gap-5 md:mr-[60px]">
          <Pomo />
          <RandomQuoteBox />
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-center pl-1 sm:pl-3 md:pl-1 md:ml-[-100px]md:mb-[-40px]">
          <DailyReflectionJournal />
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-center  sm:pl-4 md:pl-10 md:mr-[-90px] md:mt-[-30px]"> 
          <ProductivityChart />
        </div>

      </div>


    </div>
  );
};

export default Dashboard;

