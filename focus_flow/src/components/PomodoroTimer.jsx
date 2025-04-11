import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggle = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(25 * 60);
  };

  const format = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4">
      <h3 className="text-xl font-bold">Pomodoro Timer</h3>
      <div className="text-5xl font-mono">{format(secondsLeft)}</div>
      <div className="flex gap-4">
        <button onClick={toggle} className="bg-teal-500 text-white px-4 py-2 rounded">{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={reset} className="bg-gray-300 px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}
