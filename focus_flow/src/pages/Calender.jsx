import React from 'react';
import 'cally';

const Calendar = () => {
  return (
    <div className="p-4">
      <calendar-date class="cally bg-[#fff] border border-base-300 shadow-lg rounded-box text-black ml-[-15px]">
        {/* Previous Button */}
        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#AF8BEF" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
        {/* Next Button */}
        <svg
          aria-label="Next"
          class="fill-current w-4 h-4 text-black"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="#AF8BEF" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        <calendar-month></calendar-month>
      </calendar-date>
    </div>
  );
};

export default Calendar;