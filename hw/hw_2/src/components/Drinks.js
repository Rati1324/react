import { React, useEffect } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'
import Search from './Search'

export default function Drinks() {
  const { drinks, drinksCopy, removeOne, removeAll } = GlobalContext()

  return (
    <>
      <Button name={"Delete all"} handleClick={removeAll}/>
      <div className="container"> 
          <Search drinksCopy={drinksCopy}/>
            <table>
            <thead>
              <tr>
                <td className="col1">Category</td>
                <td className="col2">name</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {drinks.map((el, i) => (
                <tr key={i}>
                  <td> {el.strCategory} </td>
                  <td> {el.strDrink} </td>
                  <td><Button name={"Delete"} idDrink={el.idDrink} handleClick={removeOne}/></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  )
}
