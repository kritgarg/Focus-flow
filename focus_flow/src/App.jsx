import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Topbar from './components/topbar.jsx'
import PomodoroTimer from './components/PomodoroTimer.jsx'
import { FaClock, FaCheck, FaChartPie, FaCommentDots } from "react-icons/fa";
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
