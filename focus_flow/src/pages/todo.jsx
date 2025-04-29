import React, { useState, useRef, useEffect } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './todoitems';

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
  const inputref = useRef();

  const add = () => {
    const inputText = inputref.current.value.trim();

    if (inputText === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputref.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo; // 🔥 FIXED: ensure all items are returned
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-[#fff] place-self-center  w-11/12 max-w-md  p-7 min-h-[550px] rounded-[20px] m-[0px] shadow-lg ">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={todo_icon} alt="todo" className="w-8" />
        <h1 className="text-3xl font-semibold font-serif text-black">To-do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputref}
          type="text"
          placeholder="Add a new task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 text-black"
        />
        <button
          onClick={add}
          className="border-none rounded-full w-32 h-14 bg-[#AF8BEF] text-white text-lg font-medium cursor-pointer"
        >
          Add+
        </button>
      </div>

      <div className="text-gray-700 font-medium mb-3 text-center mt-[20px] mb-[40px]">
  ✅ {todoList.filter(todo => todo.completed).length} of {todoList.length} tasks completed
</div>



      <div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            completed={item.completed}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
