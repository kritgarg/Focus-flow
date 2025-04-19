import React from 'react'
import './sidee.css'
import { MdOutlineDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { LuCalendar1 } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";




const sidee = () => {
  return (
    <div>
      <div className="sidee"> 
      <p style={{ fontFamily: 'MyFont' }}  className='logo'>FOCUS FLOW </p>
      <navbar>
        <li><MdOutlineDashboard />DASHBOARD</li>
        <li ><GrProjects />PROJECTS</li>
        <li ><LuListTodo /> TO-DO</li>
        <li ><MdOutlineTimer /> POMODORO</li>
        <li ><MdOutlineTipsAndUpdates />TIPS</li>
        <li ><LuCalendar1 />PLANNER</li>
        <li ><IoChatboxOutline />CHATGPT</li>
      </navbar>
        </div> 
    </div>
  )
}

export default sidee
