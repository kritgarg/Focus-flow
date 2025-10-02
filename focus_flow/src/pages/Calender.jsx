import React, { useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';

const CalendarComp = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = currentDate.date(d);
      const isToday = dayjs().isSame(date, 'day');

      days.push(
        <div
          key={d}
          onClick={() => onDateSelect(date)}
          className={classNames(
            'w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-sm font-medium transition-all',
            {
              'bg-purple-500 text-white shadow-md': isToday,
              'hover:bg-purple-100 hover:text-purple-700': !isToday,
            }
          )}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-component  bg-gradient-to-br from-[#EADFFB] to-white p-[40px] rounded-3xl shadow-xl  h-[450px] w-[300px] text-black cursor-pointer transition-transform hover:translate-y-1 mt-[-40px] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4   ">
        <span className="text-xl font-bold">{currentDate.format('YYYY')}</span>
        <div className="flex items-center gap-2">
          <button onClick={prevMonth}>&lt;</button>
          <span className="text-lg font-semibold">{currentDate.format('MMMM')}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 mt-2">{renderDays()}</div>
    </div>
  );
};

export default CalendarComp;
