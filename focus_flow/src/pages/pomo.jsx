// import React, { useState, useEffect } from 'react';

// const Pomo = () => {
//   const totalTime = 25 * 60; // 25 minutes
//   const [timeLeft, setTimeLeft] = useState(totalTime);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer = null;
//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs
//       .toString()
//       .padStart(2, '0')}`;
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTimeLeft(totalTime);
//   };

//   const progressAngle = (timeLeft / totalTime) * 360;

//   return (
//     <div className="min-h-screen bg-[#fcfaf2] flex justify-center items-center px-4">
//       <div className="bg-white w-80 h-80 rounded-3xl shadow-md flex flex-col justify-center items-center p-6">
//         <div
//           className="w-48 h-48 rounded-full flex justify-center items-center"
//           style={{
//             background: `conic-gradient(#fb923c ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//             transition: 'background 1s linear',
//           }}
//         >
//           <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center">
//             <h1 className="text-3xl font-bold text-gray-800 font-sans">
//               {formatTime(timeLeft)}
//             </h1>
//           </div>
//         </div>

//         <div className="mt-8 flex gap-4">
//           {!isRunning ? (
//             <button
//               onClick={() => setIsRunning(true)}
//               className="px-6 py-2 bg-[#dd7d4a] text-white rounded-full font-medium hover:bg-orange-500"
//             >
//               Start
//             </button>
//           ) : (
//             <button
//               onClick={() => setIsRunning(false)}
//               className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-400"
//             >
//               Pause
//             </button>
//           )}
//           <button
//             onClick={reset}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-200"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pomo;


// import React, { useState, useEffect } from 'react';

// const Pomo = () => {
//   const totalTime = 25 * 60; // 25 minutes
//   const [timeLeft, setTimeLeft] = useState(totalTime);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer = null;
//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs
//       .toString()
//       .padStart(2, '0')}`;
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTimeLeft(totalTime);
//   };

//   const progressAngle = (timeLeft / totalTime) * 360;

//   return (
//     <div className="px-4">
//       <div className="w-80 h-80 rounded-3xl shadow-md flex flex-col justify-center items-center p-6 bg-[#fff] ml-[30px] mt-[20px] ">
//         <div
//           className="w-48 h-48 rounded-full flex justify-center items-center"
//           style={{
//             background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//             transition: 'background 1s linear',
//             backgroundColor: 'transparent', // Transparent background
//           }}
//         >
//           <div className="w-40 h-40 rounded-full flex justify-center items-center bg-white">
//             <h1 className="text-3xl font-bold text-gray-800 font-sans">
//               {formatTime(timeLeft)}
//             </h1>
//           </div>
//         </div>

//         <div className="mt-8 flex gap-4">
//           {!isRunning ? (
//             <button
//               onClick={() => setIsRunning(true)}
//               className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] cursor-pointer  "
//             >
//               Start
//             </button>
//           ) : (
//             <button
//               onClick={() => setIsRunning(false)}
//               className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-red-400"
//             >
//               Pause
//             </button>
//           )}
//           <button
//             onClick={reset}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-200"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pomo;


// import React, { useState, useEffect } from 'react';
// import PomoSessionCounter from '../components/PomoSessionCounter';

// const Pomo = () => {
//   const totalTime = 10; // 25 minutes
//   const [timeLeft, setTimeLeft] = useState(totalTime);
//   const [isRunning, setIsRunning] = useState(false);
//   const [sessionCount, setSessionCount] = useState(0); // New state

//   useEffect(() => {
//     let timer = null;

//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     } else if (isRunning && timeLeft === 0) {
//       setIsRunning(false); // auto-pause after completion
//       setSessionCount((prev) => prev + 1); // increment session count
//     }

//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs
//       .toString()
//       .padStart(2, '0')}`;
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTimeLeft(totalTime);
//   };

//   const progressAngle = (timeLeft / totalTime) * 360;

//   return (
//     <div className="px-4">
//       <div className="flex gap-6">
//         <div className="w-80 h-80 rounded-3xl shadow-md flex flex-col justify-center items-center p-6 bg-[#fff] ml-[30px] mt-[20px] ">
//           <div
//             className="w-48 h-48 rounded-full flex justify-center items-center"
//             style={{
//               background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//               transition: 'background 1s linear',
//               backgroundColor: 'transparent',
//             }}
//           >
//             <div className="w-40 h-40 rounded-full flex justify-center items-center bg-white">
//               <h1 className="text-3xl font-bold text-gray-800 font-sans">
//                 {formatTime(timeLeft)}
//               </h1>
//             </div>
//           </div>

//           <div className="mt-8 flex gap-4">
//             {!isRunning ? (
//               <button
//                 onClick={() => setIsRunning(true)}
//                 className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] cursor-pointer"
//               >
//                 Start
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsRunning(false)}
//                 className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-red-400"
//               >
//                 Pause
//               </button>
//             )}
//             <button
//               onClick={reset}
//               className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-200"
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//         {/* Display session counter */}
//         <PomoSessionCounter count={sessionCount} />
//       </div>
//     </div>
//   );
// };

// export default Pomo;


// import React, { useState, useEffect } from 'react';
// import PomoSessionCounter from '../components/PomoSessionCounter';
// import PomoTarget from '../components/PomoTarget'; // 👈 Import PomoTarget

// const Pomo = () => {
//   const totalTime = 25*60; // 25 * 60 for actual Pomodoro
//   const [timeLeft, setTimeLeft] = useState(totalTime);
//   const [isRunning, setIsRunning] = useState(false);
//   const [sessionCount, setSessionCount] = useState(0); // Track completed sessions

//   useEffect(() => {
//     let timer = null;

//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     } else if (isRunning && timeLeft === 0) {
//       setIsRunning(false);
//       setSessionCount((prev) => prev + 1);
//     }

//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setTimeLeft(totalTime);
//   };

//   const progressAngle = (timeLeft / totalTime) * 360;

//   return (
//     <div className="px-4">
//       <div className="flex flex-wrap gap-6">
//         <div className="w-80 h-80 rounded-3xl shadow-md flex flex-col justify-center items-center p-6 bg-[#fff] ml-[30px] mt-[20px] ">
//           <div
//             className="w-48 h-48 rounded-full flex justify-center items-center"
//             style={{
//               background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//               transition: 'background 1s linear',
//               backgroundColor: 'transparent',
//             }}
//           >
//             <div className="w-40 h-40 rounded-full flex justify-center items-center bg-white">
//               <h1 className="text-3xl font-bold text-gray-800 font-sans">
//                 {formatTime(timeLeft)}
//               </h1>
//             </div>
//           </div>

//           <div className="mt-8 flex gap-4">
//             {!isRunning ? (
//               <button
//                 onClick={() => setIsRunning(true)}
//                 className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] cursor-pointer"
//               >
//                 Start
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsRunning(false)}
//                 className="px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-red-400"
//               >
//                 Pause
//               </button>
//             )}
//             <button
//               onClick={reset}
//               className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-200"
//             >
//               Reset
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Pomo;









// import React, { useState, useEffect } from "react";
// import { FaPlay, FaRedo } from "react-icons/fa";

// const PomodoroTimer = () => {
//   const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (seconds % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   const reset = () => {
//     setTimeLeft(25 * 60);
//     setIsRunning(false);
//   };

//   const progressAngle = (timeLeft / (25 * 60)) * 360;

//   return (
//     <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#EADFFB] to-white rounded-3xl p-6 shadow-xl relative">
//       {/* Glow Effect */}
//       <div className="absolute -inset-1 rounded-[2rem] blur-2xl opacity-30 bg-purple-300 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         {/* Circular Progress Ring */}
//         <div
//           className="w-48 h-48 rounded-full flex justify-center items-center mb-6"
//           style={{
//             background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//             transition: "background 1s linear",
//           }}
//         >
//           {/* Inner White Circle with Time */}
//           <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center shadow-md">
//             <h1 className="text-3xl font-bold text-gray-800 bg-gray-200 px-4 py-1 rounded">
//               {formatTime(timeLeft)}
//             </h1>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setIsRunning(!isRunning)}
//             className="flex items-center gap-2 px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] transition shadow-md"
//           >
//             <FaPlay />
//             {isRunning ? "Pause" : "Start"}
//           </button>
//           <button
//             onClick={reset}
//             className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-md"
//           >
//             <FaRedo className="text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PomodoroTimer;


// import React, { useState, useEffect } from "react";
// import { FaPlay, FaRedo } from "react-icons/fa";

// const Pomo = () => {
//   const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const s = (seconds % 60).toString().padStart(2, "0");
//     return `${m}:${s}`;
//   };

//   const reset = () => {
//     setTimeLeft(25 * 60);
//     setIsRunning(false);
//   };

//   const progressAngle = (timeLeft / (25 * 60)) * 360;

//   return (
//     <div
//       className="w-[400px] h-[400px] bg-gradient-to-br from-[#EADFFB] to-white rounded-3xl p-6 shadow-xl relative transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer"
//     >
//       {/* Glow Effect */}
//       <div className="absolute -inset-1 rounded-[2rem] blur-2xl opacity-30 bg-purple-300 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         {/* Circular Progress Ring */}
//         <div
//           className="w-48 h-48 rounded-full flex justify-center items-center mb-6"
//           style={{
//             background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
//             transition: "background 1s linear",
//           }}
//         >
//           {/* Inner White Circle with Time */}
//           <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center shadow-md">
//             <h1 className="text-3xl font-bold text-gray-800 bg-gray-200 px-4 py-1 rounded">
//               {formatTime(timeLeft)}
//             </h1>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setIsRunning(!isRunning)}
//             className="flex items-center gap-2 px-6 py-2 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] transition shadow-md"
//           >
//             <FaPlay />
//             {isRunning ? "Pause" : "Start"}
//           </button>
//           <button
//             onClick={reset}
//             className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-md"
//           >
//             <FaRedo className="text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pomo;



import React, { useState, useEffect } from "react";
import { FaPlay, FaRedo } from "react-icons/fa";

const Pomo = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const reset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const progressAngle = (timeLeft / (25 * 60)) * 360;

  return (
    <div
      className="w-[300px] h-[300px] bg-gradient-to-br from-[#EADFFB] to-white rounded-2xl p-4 shadow-xl relative transition-all duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer ml-[40px] "
    >
      {/* Glow */}
      <div className="absolute -inset-1 rounded-[1.5rem] blur-2xl opacity-30 bg-purple-300 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Circular Timer */}
        <div
          className="w-36 h-36 rounded-full flex justify-center items-center mb-4"
          style={{
            background: `conic-gradient(#AF8BEF ${progressAngle}deg, #e5e7eb ${progressAngle}deg)`,
            transition: "background 1s linear",
          }}
        >
          <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center shadow-sm">
            <h1 className="text-xl font-bold text-gray-800 bg-gray-200 px-3 py-1 rounded">
              {formatTime(timeLeft)}
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-4 py-1.5 bg-[#AF8BEF] text-white rounded-full font-medium hover:bg-[#ccb8ee] transition shadow-md text-sm"
          >
            <FaPlay />
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={reset}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm"
          >
            <FaRedo className="text-gray-600 text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomo;
