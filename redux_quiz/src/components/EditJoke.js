import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editJoke } from '../slices/jokesSlice';

export default function EditJoke(props) {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();
  
  function handleClick() {
    props.setEditToggle(false)
    dispatch(editJoke({input: input, id: props.jokeId}))
  }

  return (
    <div>
      <input type="text" onChange={e => setInput(e.target.value)}/>
      <button onClick={() => handleClick()}>Save </button>
    </div>
  )
}
