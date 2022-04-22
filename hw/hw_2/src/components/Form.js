import React from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Form(props) {
  const categoryRef = useRef();
  const nameRef = useRef();

  return (
    <>
      <div>
        <label>Category:</label>
        <input ref={categoryRef} name="category" />
      </div>
      <div>
        <label>Name:</label>
        <input ref={nameRef} name="instructions" />
      </div>
      <button onClick={() => props.onClick({type: "add", category: categoryRef.current.value, name: nameRef.current.value})}>Add</button>
    </>
  )
}
