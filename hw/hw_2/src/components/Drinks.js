import { React } from 'react'
import { GlobalContext } from '../context/DrinkContext'
import "./Drinks.css"
import Button from './Button'
import Search from './Search'

export default function Drinks() {
  const { state, dispatch } = GlobalContext()

  return (
    <>
      <Button name={"Delete all"} handleClick={() => {dispatch({type: "removeAll"})}}/>
      <div className="container"> 
        <Search />
          <table>
          <thead>
            <tr>
              <td className="col1">Category</td>
              <td className="col2">name</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {state.drinks.map((el, i) => (
              <tr key={el.idDrink}>
                <td> {el.strCategory}</td>
                <td>{el.strDrink}</td>
                <td><Button name={"Delete"} handleClick={() => dispatch({type: "removeOne", idDrink: el.idDrink})}/></td>
              </tr> 
              ))
            }    
          </tbody>
        </table>
      </div>
    </>
  )
}
