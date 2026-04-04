import React from "react";
import { TodoProvider } from "./Context/ContextTodo";
import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, settodos] = useState([])

  const addTodo = (Todo) => {
    settodos((prev) => [{id: Date.now(), ...Todo} ,...prev])
  }

  const updateTodo = (Todo, id) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? Todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const CompleteTodo = (id) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, Complete: !prevTodo.Complete} : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos"))

    if (todos && todos.length > 0)
      settodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, CompleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4"><TodoForm /></div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((Todo) => (
            <div key={Todo.id} className="w-full">
              <TodoItem todo={Todo} />
            </div>
          )}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;