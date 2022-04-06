import React from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Form() {
  const categoryRef = useRef();
  const instructionsRef = useRef();
  const { drinks, setDrinks } = GlobalContext()

  function handleClick() {
    var available = [0], id
    while (available.length > 0) {
      id = Math.round(Math.random()*10000)
      available = drinks.filter(d => {
        return d.idDrink == id
      })
    }

    let a = drinks.slice()
    a.unshift({idDrinks: id, strCategory: categoryRef.current.value, strInstructions: instructionsRef.current.value})
    setDrinks(a)
  }

  return (
    <>
      <div>
        <label>Category:</label>
        <input ref={categoryRef} name="category" />
      </div>
      <div>
        <label>Instructions:</label>
        <input ref={instructionsRef} name="instructions" />
      </div>
      <button onClick={() => handleClick()}>Add</button>
    </>
  )
}
