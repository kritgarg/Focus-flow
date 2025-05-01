import React from 'react';
import Todo from './todo';
import Pomo from './pomo';
import Calendar from './Calender';
import Searchbar from '../components/Searchbar';
import TasksCompletedCard from '../components/TasksCompletedCard';
import RandomQuoteBox from '../components/RandomQuoteBox';
import PomoTarget from '../components/PomoTarget';
import PomoSessionCounter from '../components/PomoSessionCounter';

const Dashboard = () => {
  return (
    <div className="bg-[#f7f7f4] min-h-screen p-6">
      <div className="mb-6">
        <Searchbar />
      </div>
        
<div className="mt-[30px] ml-[-30px] ">

      <Pomo />
</div>


      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To-Do List */}
        <div className="col-span-1 mt-[50px]">
          <Todo />
        </div>

        {/* Calendar & Tasks Completed */}
        <div className=" mt-[-300px] ml-[-50px]" >
          <Calendar />

        </div>

        {/* Random Quote */}
        <div className="col-span-1 mt-[50px]  ">
          <RandomQuoteBox />
        </div>
      </div>


    </div>
  );
};

export default Dashboard;

