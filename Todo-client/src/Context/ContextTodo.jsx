import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[],

    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    CompleteTodo: () => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider