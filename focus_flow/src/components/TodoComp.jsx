import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoComp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage on every change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description,
      category,
      priority,
      date: dueDate ? new Date(dueDate).toLocaleDateString() : 'No due date',
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setDescription('');
    setCategory('Personal');
    setPriority('Medium');
    setDueDate('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <input
          type="text"
          placeholder="Task title..."
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <textarea
          placeholder="Description (optional)"
          className="w-full p-3 border rounded-md focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-wrap gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded-md w-40 cursor-pointer "
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-2 border rounded-md w-40 cursor-pointer "
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="p-2 border rounded-md w-40 cursor-pointer text-black "
          />
        </div>

        <button
          onClick={addTask}
          className="mt-2 px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 cursor-pointer"
        >
          + Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded shadow flex justify-between items-start"
          >
            <div>
              <h3
                className={`text-lg font-semibold ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p
                  className={`text-sm ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {task.description}
                </p>
              )}
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  {task.category}
                </span>
                <span
                  className={`px-2 py-1 rounded ${
                    task.priority === 'High'
                      ? 'bg-red-100 text-red-600'
                      : task.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {task.priority}
                </span>
                <span className="text-gray-500">📅 {task.date}</span>
              </div>
            </div>
            <div className="flex gap-3 text-gray-600 mt-1">
            
              <button  className='cursor-pointer' onClick={() => deleteTask(task.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoComp;
