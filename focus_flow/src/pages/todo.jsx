// import React, { useState, useRef, useEffect } from 'react';
// import todo_icon from '../assets/todo_icon.png';
// import TodoItems from './todoitems';

// const Todo = () => {
//   const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
//   const inputref = useRef();

//   const add = () => {
//     const inputText = inputref.current.value.trim();

//     if (inputText === '') return;

//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       completed: false,
//     };

//     setTodoList((prev) => [...prev, newTodo]);
//     inputref.current.value = '';
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   const toggle = (id) => {
//     setTodoList((prevTodos) =>
//       prevTodos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo; // 🔥 FIXED: ensure all items are returned
//       })
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }, [todoList]);

//   return (
//     <div className="bg-[#fff] place-self-center  w-11/12 max-w-md  p-7 min-h-[550px] rounded-[20px] m-[0px] shadow-lg ">
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <img src={todo_icon} alt="todo" className="w-8" />
//         <h1 className="text-3xl font-semibold font-serif text-black">To-do List</h1>
//       </div>

//       <div className="flex items-center my-7 bg-gray-200 rounded-full">
//         <input
//           ref={inputref}
//           type="text"
//           placeholder="Add a new task"
//           className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 text-black"
//         />
//         <button
//           onClick={add}
//           className="border-none rounded-full w-32 h-14 bg-[#AF8BEF] text-white text-lg font-medium cursor-pointer"
//         >
//           Add+
//         </button>
//       </div>

//       <div className="text-gray-700 font-medium mb-3 text-center mt-[20px] mb-[40px]">
//   ✅ {todoList.filter(todo => todo.completed).length} of {todoList.length} tasks completed
// </div>



//       <div>
//         {todoList.map((item) => (
//           <TodoItems
//             key={item.id}
//             text={item.text}
//             id={item.id}
//             completed={item.completed}
//             deleteTodo={deleteTodo}
//             toggle={toggle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;


// import React, { useState, useRef, useEffect } from 'react';
// import todo_icon from '../assets/todo_icon.png';
// import TodoItems from './todoitems';
// import { FaPlus } from "react-icons/fa";

// const Todo = () => {
//   const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
//   const inputref = useRef();

//   const add = () => {
//     const inputText = inputref.current.value.trim();
//     if (inputText === '') return;

//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       completed: false,
//     };

//     setTodoList((prev) => [...prev, newTodo]);
//     inputref.current.value = '';
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   const toggle = (id) => {
//     setTodoList((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }, [todoList]);

//   return (
//     <div className="w-[360px] bg-gradient-to-br from-[#EADFFB] to-white rounded-2xl p-6 shadow-xl relative transition-all duration-300 ease-in-out">
      
//       {/* Glow */}
//       <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 bg-purple-300 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col h-full justify-between">
        
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-4">
//           <img src={todo_icon} alt="todo" className="w-6" />
//           <h1 className="text-xl font-semibold text-gray-900">To-do List</h1>
//         </div>

//         {/* Input Row */}
//         <div className="flex items-center bg-[#f8f6fb] rounded-full px-4 py-2 shadow-inner">
//           <input
//             ref={inputref}
//             type="text"
//             placeholder="Add a new task"
//             className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
//           />
//           <button
//             onClick={add}
//             className="ml-2 w-8 h-8 bg-[#AF8BEF] hover:bg-[#c1a6f5] text-white rounded-full flex items-center justify-center transition"
//           >
//             <FaPlus size={14} />
//           </button>
//         </div>

//         {/* Task Status */}
//         <div className="text-xs text-gray-500 mt-6 text-center">
//           {todoList.length === 0 ? (
//             <p className="text-gray-400 mt-12 mb-8">No tasks yet. Add one above!</p>
//           ) : (
//             <p className="mt-6">
//               ✅ {todoList.filter(todo => todo.completed).length} of {todoList.length} tasks completed
//             </p>
//           )}
//         </div>

//         {/* Tasks */}
//         <div className="mt-2">
//           {todoList.map((item) => (
//             <TodoItems
//               key={item.id}
//               text={item.text}
//               id={item.id}
//               completed={item.completed}
//               deleteTodo={deleteTodo}
//               toggle={toggle}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;



// import React, { useState, useRef, useEffect } from 'react';
// import { FaPlus, FaTrash } from 'react-icons/fa';

// const Todo = () => {
//   const [todoList, setTodoList] = useState(
//     localStorage.getItem("todos")
//       ? JSON.parse(localStorage.getItem("todos"))
//       : []
//   );
//   const inputRef = useRef();

//   const add = () => {
//     const inputText = inputRef.current.value.trim();
//     if (!inputText) return;

//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       completed: false,
//     };

//     setTodoList((prev) => [...prev, newTodo]);
//     inputRef.current.value = '';
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const toggle = (id) => {
//     setTodoList((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todoList));
//   }, [todoList]);

//   return (
//     <div className="w-[360px] max-w-full bg-gradient-to-br from-[#f1e8ff] to-white rounded-3xl p-6 shadow-xl relative transition-all duration-300 hover:translate-y-1 cursor-pointer  ml-[10px] ">
//       {/* Glow effect */}
//       <div className="absolute -inset-1 rounded-[28px] blur-2xl opacity-30 bg-purple-300 z-0"></div>

//       <div className="relative z-10 flex flex-col h-[500px]">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-4">
//           <span className="text-black text-2xl">🗓️</span>
//           <h1 className="text-xl font-bold text-black tracking-wide font-sans">TO-DO LIST</h1>
//         </div>

//         {/* Input */}
//         <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-inner mb-4">
//           <input
//             ref={inputRef}
//             type="text"
//             placeholder="Add a new task"
//             className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
//           />
//           <button
//             onClick={add}
//             className="ml-2 w-8 h-8 bg-[#AF8BEF] hover:bg-[#c1a6f5] text-white rounded-full flex items-center justify-center transition"
//           >
//             <FaPlus size={12} />
//           </button>
//         </div>

//         {/* Task Scroll Area */}
//         <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 pr-1">
//           {todoList.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between py-2 px-1 mb-2"
//             >
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   checked={item.completed}
//                   onChange={() => toggle(item.id)}
//                   className="w-5 h-5 accent-purple-500"
//                 />
//                 <span
//                   className={`text-md font-semibold ${
//                     item.completed ? 'line-through text-gray-400' : 'text-black'
//                   }`}
//                 >
//                   {item.text}
//                 </span>
//               </div>
//               <button onClick={() => deleteTodo(item.id)} className="text-gray-500 hover:text-red-400">
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="mt-3 text-sm text-center text-gray-600 font-medium">
//           ✅ {todoList.filter((t) => t.completed).length} of {todoList.length} tasks completed
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;



// import React, { useState, useRef, useEffect } from 'react';
// import { FaPlus, FaTrash } from 'react-icons/fa';
// import TasksCompletedCard from '../components/TasksCompletedCard';

// const Todo = () => {
//   const [todoList, setTodoList] = useState(() =>
//     JSON.parse(localStorage.getItem('todos')) || []
//   );
//   const [lifetimeCompleted, setLifetimeCompleted] = useState(() =>
//     parseInt(localStorage.getItem('lifetimeCompleted')) || 0
//   );

//   const inputRef = useRef();

//   const add = () => {
//     const inputText = inputRef.current.value.trim();
//     if (!inputText) return;

//     const newTodo = {
//       id: Date.now(),
//       text: inputText,
//       completed: false,
//     };

//     setTodoList((prev) => [...prev, newTodo]);
//     inputRef.current.value = '';
//   };

//   const deleteTodo = (id) => {
//     setTodoList((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const toggle = (id) => {
//     setTodoList((prev) =>
//       prev.map((todo) => {
//         if (todo.id === id) {
//           // If changing from false ➝ true, increment lifetime counter
//           if (!todo.completed) {
//             const updated = lifetimeCompleted + 1;
//             setLifetimeCompleted(updated);
//             localStorage.setItem('lifetimeCompleted', updated.toString());
//           }
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       })
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todoList));
//   }, [todoList]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-6">
//       {/* To-Do Component */}
//       <div className="w-[360px] max-w-full bg-gradient-to-br from-[#f1e8ff] to-white rounded-3xl p-6 shadow-xl relative transition-all duration-300 hover:translate-y-1 cursor-pointer ml-[10px]">
//         <div className="absolute -inset-1 rounded-[28px] blur-2xl opacity-30 bg-purple-300 z-0"></div>

//         <div className="relative z-10 flex flex-col h-[500px]">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-black text-2xl">🗓️</span>
//             <h1 className="text-xl font-bold text-black tracking-wide font-sans">TO-DO LIST</h1>
//           </div>

//           <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-inner mb-4">
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Add a new task"
//               className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
//             />
//             <button
//               onClick={add}
//               className="ml-2 w-8 h-8 bg-[#AF8BEF] hover:bg-[#c1a6f5] text-white rounded-full flex items-center justify-center transition"
//             >
//               <FaPlus size={12} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 pr-1">
//             {todoList.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between py-2 px-1 mb-2"
//               >
//                 <div className="flex items-center gap-3">
//                   <input
//                     type="checkbox"
//                     checked={item.completed}
//                     onChange={() => toggle(item.id)}
//                     className="w-5 h-5 accent-purple-500"
//                   />
//                   <span
//                     className={`text-md font-semibold ${
//                       item.completed ? 'line-through text-gray-400' : 'text-black'
//                     }`}
//                   >
//                     {item.text}
//                   </span>
//                 </div>
//                 <button onClick={() => deleteTodo(item.id)} className="text-gray-500 hover:text-red-400">
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="mt-3 text-sm text-center text-gray-600 font-medium">
//             ✅ {todoList.filter((t) => t.completed).length} of {todoList.length} tasks completed
//           </div>
//         </div>
//       </div>

//       {/* Lifetime Tasks Card */}
//       <TasksCompletedCard
//         completedTasks={lifetimeCompleted}
//         totalTasks={todoList.length + lifetimeCompleted} // past + current
//       />
//     </div>
//   );
// };

// export default Todo;


// Todo.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Todo = () => {
  const [todoList, setTodoList] = useState(() =>
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          if (!todo.completed) {
            const current = parseInt(localStorage.getItem('lifetimeCompleted')) || 0;
            const updated = current + 1;
            localStorage.setItem('lifetimeCompleted', updated.toString());
          }
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="w-[360px] max-w-full bg-gradient-to-br from-[#f1e8ff] to-white rounded-3xl p-6 shadow-xl relative transition-all duration-300 hover:translate-y-1 cursor-pointer ml-[10px]">
      <div className="absolute -inset-1 rounded-[28px] blur-2xl opacity-30 bg-purple-300 z-0"></div>

      <div className="relative z-10 flex flex-col h-[500px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-black text-2xl">🗓️</span>
          <h1 className="text-xl font-bold text-black tracking-wide font-sans">TO-DO LIST</h1>
        </div>

        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-inner mb-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
          />
          <button
            onClick={add}
            className="ml-2 w-8 h-8 bg-[#AF8BEF] hover:bg-[#c1a6f5] text-white rounded-full flex items-center justify-center transition"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 pr-1">
          {todoList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 px-1 mb-2"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggle(item.id)}
                  className="w-5 h-5 accent-purple-500"
                />
                <span
                  className={`text-md font-semibold ${
                    item.completed ? 'line-through text-gray-400' : 'text-black'
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button onClick={() => deleteTodo(item.id)} className="text-gray-500 hover:text-red-400">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-3 text-sm text-center text-gray-600 font-medium">
          ✅ {todoList.filter((t) => t.completed).length} of {todoList.length} tasks completed
        </div>
      </div>
    </div>
  );
};

export default Todo;
