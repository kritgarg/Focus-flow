import React from 'react'
import './sidee.css'
import { MdOutlineDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { LuFocus } from "react-icons/lu";
import 'animate.css';

const sidee = () => {
  return (
    <div>
      <div className="sidee"> 
      <navbar>
      <p className='logo' > <LuFocus /></p>
        <li  class="hover-underline"> <MdOutlineDashboard />DASHBOARD</li>
        <li class="hover-underline" ><LuListTodo /> TO-DO</li>
        <li class="hover-underline" ><MdOutlineTimer /> POMODORO</li>
        <li class="hover-underline" ><IoChatboxOutline />CHATGPT</li>
        <li class="hover-underline" ><IoChatboxOutline />CHATGPT</li>
        <li class="hover-underline" ><IoChatboxOutline />CHATGPT</li>
        <li class="hover-underline" ><IoChatboxOutline />CHATGPT</li>
      </navbar>
        </div> 
    </div>
  )
}

export default sidee
