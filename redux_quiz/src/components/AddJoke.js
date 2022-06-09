import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addJoke } from '../slices/jokesSlice';
import "./jokesStyles.css";

export default function AddJoke() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="top">
      Joke:
      <input onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => dispatch(addJoke(input))}>Add</button>
    </div>
  )
}
