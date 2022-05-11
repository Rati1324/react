import React, {useState} from 'react'
import { addTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addTodo({title: input, id: nanoid(), finished: false}))}>Add</button>
    </div>
  )
}
