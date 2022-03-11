import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import Film from "./components/Film"
import {FilmProvider} from "./context/FilmContext"

const App = () => {
  const [increment, setIncrement] = useState(0)
  const [decrement, setDecrement] = useState(0)
  const [name, setName] = useState("name")
  const [films, setFilms] = useState([
    {
      filmName:"pulp fiction",
      releaseDate: 2010,
      money:200000
    },
    {
      filmName:"pulp fiction 2",
      releaseDate: 2014,
      money:30000
    }
  ])

  const handleDecrement = () => {
    setIncrement(increment - 1)
  }

  useEffect(() => {
    console.log(name)
  }, [name, increment])
  
  return (
    <div className="App">
      <FilmProvider>
        <Film />
        {films.map((el, i) => {
          <div key={i}>
            <Film 
                filmName={el.filmName}
                releaseDate={el.releaseDate} 
                money={el.money} 
            />

          </div>
        })}
      </FilmProvider>
      {increment}
      <button onClick={() => setIncrement(increment + 1)}>increment</button>
      <button onClick={() => handleDecrement()}>decrement</button>
      <button onClick={() => setName("rati")}>set name</button>
    </div>
  );
}

export default App;
