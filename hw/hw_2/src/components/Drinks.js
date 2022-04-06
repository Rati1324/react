import { React, useEffect, useState } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'
import Search from './Search'

export default function Drinks(props) {
  const { drinks, setDrinks, } = GlobalContext()

  return (
    <>
      <Button name={"Delete all"} drinks={drinks} setDrinks={setDrinks}/>
      <div className="container"> 
        <div>
          <Search drinksCopy={props.drinksCopy}/>
          <ul className="content">
            {drinks.map((el, i) => (
                <li className="drinkContainer" key={i}> 
                    {el.strCategory}
                    <br/>
                    {/* {el.strIngredient1} */}
                    {el.strInstructions}
                    <Button name={"Delete"}idDrink={el.idDrink} drinks={drinks} setDrinks={setDrinks}/>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
