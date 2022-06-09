import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import Joke from './Joke';
import "./jokesStyles.css"

export default function Favorites() {
  const jokesData = useSelector((state) => state.jokes.favs);

  return (
    <div className="jokes">
      <Link to="/">Home</Link>
      {jokesData.map(j => (
        <Joke jokeId={j.id} jokeData={j.joke} inFavs={true} key={j.id} />
      ))}
    </div>
  )
}
