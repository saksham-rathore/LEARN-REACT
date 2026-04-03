import { useState, useEffect } from "react"
import {TodoProvider} from "./Context"
import React from "react";
import {Todoform} from "./Component/Todoform"
import {Todoitem} from "./Component/Todoitem"


const App = () => {
  const [Todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    return (todos && todos.length > 0) ? todos : []
  })

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };

  const ToggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])
  
  

  return (
    <TodoProvider value={{Todos, updateTodo, addTodo, deleteTodo, ToggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <Todoform />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {Todos.map((todo) => (
            <div key={todo.id}>
              <Todoitem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
};

export default App;
