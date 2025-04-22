import React, { useState, useEffect } from 'react';

const Pomo = () => {
  const totalTime = 25 * 60; // 25 minutes
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(totalTime);
  };

  const progressAngle = (timeLeft / totalTime) * 360;

  return (
    <div className="min-h-screen bg-[#fcfaf2] flex justify-center items-center px-4">
      <div className="bg-white w-80 h-80 rounded-3xl shadow-md flex flex-col justify-center items-center p-6">
        <div
          className="w-48 h-48 rounded-full flex justify-center items-center"
          style={{
            background: `conic-gradient(#fb923c ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
            transition: 'background 1s linear',
          }}
        >
          <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 font-sans">
              {formatTime(timeLeft)}
            </h1>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          {!isRunning ? (
            <button
              onClick={() => setIsRunning(true)}
              className="px-6 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-500"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-400"
            >
              Pause
            </button>
          )}
          <button
            onClick={reset}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomo;
