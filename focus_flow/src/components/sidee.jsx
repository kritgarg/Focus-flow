// import React from 'react'
// import './sidee.css'
// import { MdOutlineDashboard } from "react-icons/md";
// import { LuListTodo } from "react-icons/lu";
// import { MdOutlineTimer } from "react-icons/md";
// import { IoChatboxOutline } from "react-icons/io5";
// import { GrProjects } from "react-icons/gr";
// import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import { LuCalendar1 } from "react-icons/lu";
// import { RiFocus2Line } from "react-icons/ri";




// const sidee = () => {
//   return (
//     <div>
//       <div className="sidee"> 
//       <p style={{ fontFamily: 'MyFont' }}  className='logo'>FOCUS FLOW </p>
//       <navbar>
//         <li><MdOutlineDashboard />DASHBOARD</li>
//         <li ><GrProjects />PROJECTS</li>
//         <li ><LuListTodo /> TO-DO</li>
//         <li ><MdOutlineTimer /> POMODORO</li>
//         <li ><MdOutlineTipsAndUpdates />TIPS</li>
//         <li ><LuCalendar1 />PLANNER</li>
//         <li ><IoChatboxOutline />CHATGPT</li>
//       </navbar>
//         </div> 
//     </div>
//   )
// }

// export default sidee


import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidee.css';
import { MdOutlineDashboard, MdOutlineTimer, MdOutlineTipsAndUpdates } from "react-icons/md";
import { LuListTodo, LuCalendar1 } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { RiFocus2Line } from "react-icons/ri";

const Sidee = () => {
  return (
    <div className="sidee fixed left-0 top-0 h-screen w-60 bg-white shadow-md p-6 font-medium">
      <p style={{ fontFamily: 'MyFont' }} className='logo text-2xl font-bold mb-8 ' >FOCUS FLOW</p>
      <nav className="flex flex-col gap-4 text-gray-700">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><MdOutlineDashboard /> DASHBOARD</li>
        </NavLink>
        <NavLink to="/TodoPage" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><LuListTodo /> TO-DO</li>
        </NavLink>
        <NavLink to="/pomo" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><MdOutlineTimer /> POMODORO</li>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><GrProjects /> PROJECTS</li>
        </NavLink>
        <NavLink to="/tips" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><MdOutlineTipsAndUpdates /> TIPS</li>
        </NavLink>
        <NavLink to="/planner" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><LuCalendar1 /> PLANNER</li>
        </NavLink>
        <NavLink to="/chatgpt" className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li><IoChatboxOutline /> CHATGPT</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidee;

