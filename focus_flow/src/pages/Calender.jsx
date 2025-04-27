import React from 'react';
import 'cally';

const Calendar = () => {
  return (
    <div className="p-4">
      <calendar-date class="cally bg-[#f5f5f5] border border-base-300 shadow-md rounded-box text-black">
        {/* Previous Button */}
        <svg
          aria-label="Previous"
          class="fill-current w-4 h-4 text-black"
          slot="previous"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        {/* Next Button */}
        <svg
          aria-label="Next"
          class="fill-current w-4 h-4 text-black"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        <calendar-month></calendar-month>
      </calendar-date>
    </div>
  );
};

export default Calendar;
