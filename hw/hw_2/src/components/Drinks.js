import { React, useEffect } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'
import Search from './Search'

export default function Drinks(props) {
  const { drinks, setDrinks, drinksCopy } = GlobalContext()

  return (
    <>
      <Button name={"Delete all"} drinks={drinks} setDrinks={setDrinks}/>
      <div className="container"> 
        <div>
          <Search drinksCopy={drinksCopy}/>

          <ul className="content">
            {drinks.map((el, i) => (
                <li className="drinkContainer" key={i}> 
                    <table>
                      <tr>
                        <td className="col1"> Category </td>
                        <td className="col2">Instructions </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> {el.strCategory} </td>
                        <td> {el.strInstructions} </td>
                        <td><Button name={"Delete"} idDrink={el.idDrink} drinks={drinks} setDrinks={setDrinks}/></td>
                      </tr>
                    </table>
                    <br/>
                    
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
