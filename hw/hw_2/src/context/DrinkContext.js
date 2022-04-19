import { createContext, useContext, useEffect, useState} from "react";

const DrinkContext = createContext()

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([])

  async function fetchDrinks (url) {
    const response = await fetch(url)
    const data = await response.json()
    setDrinks(data.drinks)
  }

  function removeOne(idDrink) {
    setDrinks(drinks.filter((d) => {
      return d.idDrink !== idDrink
    }))
  }

  function removeAll() { setDrinks([]) }

  useEffect(() => {
    fetchDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    console.log(drinks)
  }, [])

  return (
    <DrinkContext.Provider value={{ drinks, fetchDrinks, removeOne, removeAll }}>
      {children}
    </DrinkContext.Provider>
  )

}

export const GlobalContext = () => {
  return useContext(DrinkContext)
}

export { DrinkProvider } 