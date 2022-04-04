import { createContext, useContext, useEffect, useState} from "react";

const DrinkContext = createContext()

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([])

  async function fetchDrinks (url) {
    const response = await fetch(url)
    const data = await response.json()
    setDrinks(data.drinks)
  }

  useEffect(() => {
    fetchDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  }, [])

  const value = { drinks, setDrinks }
  return (
    <DrinkContext.Provider value={value}>
      {children}
    </DrinkContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(DrinkContext)
}

export { DrinkContext, DrinkProvider }