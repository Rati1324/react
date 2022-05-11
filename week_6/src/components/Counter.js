import React from 'react'
import { useReducer, useState } from 'react'

function reducer(state, action) {
  switch(action.type) {
    case "add-todo":
      return { 
        todos: [...state.todos, {text: action.text, completed: false}],
        todoCount: state.todoCount + 1
      }
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t)
      }
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {todos: [], todoCount: 0})
  const [text, setText] = useState();

  return (
    <div>
      <div>Num: {state.todoCount}</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({type: "add-todo", text});
          setText("");
        }}>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </form>

        {state.todos.map((t, i) => (
          <div onClick={() => dispatch({type: "toggle-todo", idx:i})}>
            {t.text} : {t.completed ? "true" : "False"}
          </div>
        ))}
    </div>
  )
}

export {Counter}