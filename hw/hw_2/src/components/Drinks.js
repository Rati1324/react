import { React, useEffect } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'
import Search from './Search'

export default function Drinks() {
  const { state } = GlobalContext()

  useEffect(() => {
    console.log(state && state)
  }, [state])

  if (state.drinks === 0) {
    return <div>aosijdoa</div>
  }

  return (
    <>
      {/* <Button name={"Delete all"} handleClick={removeAll}/> */}
      <div className="container"> 
        {/* {state.map((el, i) => (
            <div key={i}>{el}</div>
          ))
        }) */}
          {/* <Search drinksCopy={drinksCopy}/> */}
            {/* <table>
            <thead>
              <tr>
                <td className="col1">Category</td>
                <td className="col2">name</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table> */}
      </div>
    </>
  )
}
