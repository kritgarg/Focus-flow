import PomodoroTimer from "../components/PomodoroTimer";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PomodoroTimer />
      {/* Add Mood Tracker, ToDoList etc. later here */}
    </div>
  );
}
