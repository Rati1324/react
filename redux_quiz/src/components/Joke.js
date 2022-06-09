import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteJoke, addToFavs } from '../slices/jokesSlice';
import { useState } from 'react';
import EditJoke from './EditJoke';

export default function Joke(props) {
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div>
      {props.jokeData}

      {editToggle ? <EditJoke setEditToggle={() => setEditToggle()} jokeId={props.jokeId}/> : null}
      { props.inFavs ? null : 
        <>
          <button onClick={() => dispatch(addToFavs({id: props.jokeId, joke: props.jokeData}))}>Add to favorites</button>
          <button onClick={() => dispatch(deleteJoke(props.jokeId))}>Delete</button>
          <button onClick={() => setEditToggle(prev => !prev)}>Edit</button>
        </>
      }
    </div>
  )
}
