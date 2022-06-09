import React, { useEffect } from 'react';
import Joke from './Joke';
import "./jokesStyles.css"
import { useSelector, useDispatch } from 'react-redux';
import { getJokes, deleteAll } from "../slices/jokesSlice"
import AddJoke from './AddJoke';
import { Link } from "react-router-dom"

export default function Jokes() {
  const jokesData = useSelector((state) => state.jokes.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokes());
  }, [])

  return (
    <div className="container">
      <AddJoke />

      <div className="top">
        <Link to="/favs">Favorites</Link>
        <button onClick={() => dispatch(deleteAll())}> Delete all </button>
      </div>
      <div className="jokes">
        {jokesData.results && jokesData.results.map(j => (
          <Joke jokeData={j.joke} jokeId={j.id} key={j.id} />
        ))}
      </div>
    </div>
  )
}
