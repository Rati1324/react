import { createContext, useContext, React, useReducer } from "react";
import { todoReducer, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todoReducer";

const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const initialState = {
    todos: []
  }

  function addTodo (todo) {
    console.log(todo)
    dispatch({type: ADD_TODO, payload: todo})
  }

  function toggleTodo (todoId) {
    dispatch({type: TOGGLE_TODO, payload: todoId})
  }

  function deleteTodo(todoId) {
    console.log(todoId)
    dispatch({type: DELETE_TODO, payload: todoId})
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);
  return(
    <todoContext.Provider value={{todos: state.todos, addTodo, toggleTodo, deleteTodo}}> {children} </todoContext.Provider>
  )
}

export function GlobalContext() {
  return useContext(todoContext)
}

export { TodoProvider }