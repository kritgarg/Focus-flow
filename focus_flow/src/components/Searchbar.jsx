// import React from 'react';
// import "./Searchbar.css";
// import { CiSearch } from "react-icons/ci";

// const Searchbar = () => {
//   return (
//     <div>
//       <div className="bg-[#f5f5f5] w-[90%] h-[70px] rounded-[20px] px-2 align-middle flex ml-[70px] shadow-lg ">
        
//         <h1>dashboard</h1>


//         <button class="krit">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//   >
//     <path fill="none" d="M0 0h24v24H0z"></path>
//     <path
//       fill="currentColor"
//       d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
//     ></path>
//   </svg>
// </button>


//       </div>
//     </div>
//   );
// }

// export default Searchbar;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Searchbar.css';

const getTitleFromPath = (path) => {
  switch (path) {
    case '/':
      return 'Dashboard';
    case '/todo':
      return 'To-Do List';
    case '/pomodoro':
      return 'Pomodoro Timer';
    case '/tips':
      return 'Productivity Tips';
    case '/music':
      return 'Focus Music';
    case '/calendar':
      return 'Calendar';
    case '/chat':
      return 'Chat Assistant';
    case '/habit':
      return 'Habit Tracker';
    default:
      return 'FocusFlow';
  }
};

const Searchbar = () => {
  const location = useLocation();
  const pageTitle = getTitleFromPath(location.pathname);

  return (
    <div className="bg-[#f5f5f5] w-[90%] h-[70px] rounded-[20px] px-2 align-middle flex ml-[70px] shadow-lg items-center justify-between">
      <h1 className="text-xl font-semibold ml-4 text-black">{pageTitle}</h1>

      <button className="krit mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;
