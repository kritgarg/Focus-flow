import { FaClock, FaCheck, FaChartPie, FaCommentDots } from "react-icons/fa";

function SideBar() {
  return (
    <>
      <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5 gap-6">
        <h1 className="text-2xl font-bold mb-8">🧠 FocusFlow</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-teal-400 flex items-center gap-2">
            <FaClock /> Pomodoro
          </a>
          <a href="#" className="hover:text-teal-400 flex items-center gap-2">
            <FaCheck /> To-Do List
          </a>
          <a href="#" className="hover:text-teal-400 flex items-center gap-2">
            <FaChartPie /> Stats
          </a>
          <a href="#" className="hover:text-teal-400 flex items-center gap-2">
            <FaCommentDots /> Assistant
          </a>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
