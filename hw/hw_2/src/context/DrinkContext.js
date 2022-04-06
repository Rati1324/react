import { createContext, useContext, useEffect, useState} from "react";

const DrinkContext = createContext()

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([])
  const [drinksCopy, setDrinksCopy] = useState([])

  async function fetchDrinks (url) {
    const response = await fetch(url)
    const data = await response.json()
    setDrinks(data.drinks)
    setDrinksCopy(data.drinks)
  }

  useEffect(() => {
    fetchDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    // setDrinksCopy([2,3,4,5])
  }, [])

  return (
    <DrinkContext.Provider value={{ drinks, setDrinks, drinksCopy, setDrinksCopy }}>
      {children}
    </DrinkContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(DrinkContext)
}

export { DrinkProvider } // DrinkContext not needed? 