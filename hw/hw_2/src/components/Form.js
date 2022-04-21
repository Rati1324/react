import React from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Form() {
  const categoryRef = useRef();
  const nameRef = useRef();
  const { add } = GlobalContext()

  return (
    <>
      <input/>
      <div>
        <label>Category:</label>
        <input ref={categoryRef} name="category" />
      </div>
      <div>
        <label>Name:</label>
        <input ref={nameRef} name="instructions" />
      </div>
      <button onClick={() => add(categoryRef.current.value, nameRef.current.value)}>Add</button>
    </>
  )
}
