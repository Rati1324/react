import { useState, React } from 'react'
import { GlobalContext } from '../context/todoContext'

export default function AddTodo() {
  const { addTodo, todos } = GlobalContext()
  const [value, setValue] = useState("")

  return (
    <>
      Name:
      <form onSubmit={(e) => {
        let id = Math.floor(Math.random() * 100)
        e.preventDefault()
        addTodo({name: value, id: id})
        }}>

        <input onChange={(e) => setValue(e.currentTarget.value)}/>
      </form>
      {value}
    </>
  )
}
