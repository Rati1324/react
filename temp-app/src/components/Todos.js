import React from 'react'
import Button from "./Button"
import { GlobalContext } from '../context/todoContext'

export default function Todos(props) {
  const { deleteTodo, todos } = GlobalContext()

  return (
    <div>
      {todos.map((el, i) => (
        <div key={el.id}> 
          {el.id}
          {el.name} <Button text="delete" handleClick={() => {deleteTodo(el.id)}} />
        </div>
      ))}
    </div>
  )
}
