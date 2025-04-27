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


import React from 'react';
import Todo from './todo';
import Pomo from './pomo';
import Calendar from './Calender';
import './dashboard.css'; 

const Dashboard = () => {
  return (
<div class="parent">
    <Pomo />
    <Todo />
    <Calendar />
    
    
</div>
  );
};

export default Dashboard;
