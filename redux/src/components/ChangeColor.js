import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { changeColor } from '../features/theme';

export default function ChangeColor() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => dispatch(changeColor(input))}>Change color</button>
    </div>
  )
}
