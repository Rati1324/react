import { React, useState } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'

export default function Drinks() {
  const { drinks, setDrinks } = GlobalContext()

  return (
    <>
      <div> 
        <ul>
          {drinks.map((el, i) => (
              <li className="drinkContainer" key={i}> 
                  {el.strCategory}
                  <br/>
                  {/* {el.strIngredient1} */}
                  {el.strInstructions}
                  <Button idDrink={el.idDrink} drinks={drinks} setDrinks={setDrinks}/>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}
