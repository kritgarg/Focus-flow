import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TasksCompletedCard = ({ totalTasks, completedTasks }) => {
  const completionRate = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-sm">
      <div className="flex items-center justify-between">
        <div className="bg-[#E7F9F0] p-3 rounded-xl">
          <FaCheckCircle className="text-[#42C58A] text-xl" />
        </div>
        <span className="text-green-500 font-semibold text-sm">
          +{completionRate}%
        </span>
      </div>
      <h2 className="text-gray-500 text-sm mt-4">Tasks Completed</h2>
      <p className="text-3xl font-semibold text-black">{completedTasks}</p>
    </div>
  );
};

export default TasksCompletedCard;
