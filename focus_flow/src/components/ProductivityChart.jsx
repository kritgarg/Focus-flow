import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ProductivityChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const rawStats = JSON.parse(localStorage.getItem('dailyTaskStats')) || {};
    const formatted = Object.entries(rawStats).map(([date, count]) => ({
      date,
      tasks: count,
    }));
    setData(formatted);
  }, []);

  return (
    <div className="   bg-gradient-to-br from-[#EADFFB] to-white  shadow-lg rounded-2xl p-6 mt-6 w-[1150px]  ml-[-100px]  transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer   ">
      <h2 className="text-xl font-bold text-purple-600 mb-4">📊 Daily Productivity</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="tasks" fill="#a78bfa" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;
