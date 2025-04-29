// import React from 'react'
// import Todo from './todo'
// import Pomo from './pomo'
// import "cally";



// const dashboard = () => {
//   return (
//     <div>
//         <div className="flex flex-row items-start justify-start bg-black w-[0px] h-[0px] ">
//       <Pomo />
//         </div>
//       <Todo />

//       <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
//   <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
//   <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
//   <calendar-month></calendar-month>
// </calendar-date>
//     </div>
//   )
// }

// export default dashboard


// import React from 'react';
// import Todo from './todo';
// import Pomo from './pomo';
// import Calendar from './Calender';
// import './dashboard.css'; 
// import Searchbar from '../components/Searchbar';
// import TasksCompletedCard from '../components/TasksCompletedCard';
// import RandomQuoteBox from '../components/RandomQuoteBox';
// import PomoTarget from '../components/PomoTarget';
// import PomoSessionCounter from '../components/PomoSessionCounter';

// const Dashboard = () => {
//   return (
//     <div className="bg-[#f7f7f4] overscroll-none scroll-smooth">

// <div class="parent">
//   <Searchbar />
//     <Pomo />
//     <Todo />
//     <Calendar />
// <TasksCompletedCard  />
//     <RandomQuoteBox />
    
    
// </div>
//     </div>
//   );
// };

// export default Dashboard;



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
      {/* Top Search Bar */}
      <div className="mb-6">
        <Searchbar />
      </div>
        


      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To-Do List */}
        <div className="col-span-1 mt-[50px]">
          <Todo />
        </div>

        {/* Calendar & Tasks Completed */}
        <div className="flex flex-col gap-6 col-span-1 mt-[35px]" >
          <Calendar />
          <TasksCompletedCard />
        </div>

        {/* Random Quote */}
        <div className="col-span-1 mt-[50px]  ">
          <RandomQuoteBox />
        </div>
      </div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[30px] ml-[-30px] ">

      <Pomo />
</div>
    </div>
  );
};

export default Dashboard;

