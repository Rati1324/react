import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/drinksReducer";

const DrinkContext = createContext()

function generateId(drinks) {
  var available = [0], id
  while (available.length > 0) {
    id = Math.round(Math.random()*10000)
    // eslint-disable-next-line no-loop-func
    available = drinks.filter(d => {
      return d.idDrink === id
    })
  }
  return id
}

const DrinkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {drinks: [], query: ""})

  async function fetchDrinks (url) {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
      type: "fetch", 
      payload: data.drinks ?? []
    });
  }

  useEffect(() => {
    fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.query}`)
  }, [state.query])

  return (
    <DrinkContext.Provider value={{ state, dispatch, fetchDrinks }}>
      {children}
    </DrinkContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(DrinkContext)
}

export { DrinkProvider } 