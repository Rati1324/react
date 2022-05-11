import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../slices/todoSlice";

export default function EditTodo(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(editTodo({id: props.todoId, title: input}));
    props.setToggleEdit(false);
  }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleClick()}>Save</button>
    </div>
  )
}
