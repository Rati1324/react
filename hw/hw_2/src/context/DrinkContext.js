import { createContext, useContext, useEffect, useReducer } from "react";

const DrinkContext = createContext()

async function reducer(state, action) {
  switch(action.type) {
    case "fetch":
      return {
        drinks: action.payload
      }
    default:
      return state
  }
}

const DrinkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {drinks: []})

  async function fetchDrinks (url) {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
      type: "fetch", 
      payload: data.drinks
    });
  }

  useEffect(() => {
    fetchDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  }, [])

  // function removeOne(idDrink) {
  //   setDrinks(drinks.filter((d) => {
  //     return d.idDrink !== idDrink
  //   }))
  // }

  // function removeAll() { setDrinks([]) }

  // function add(category, name) {
  //     var available = [0], id
  //     while (available.length > 0) {
  //       id = Math.round(Math.random()*10000)
  //       available = drinks.filter(d => {
  //         return d.idDrink == id
  //       })
  //     let a = drinks.slice()
  //     a.unshift({idDrink: id, strCategory: category, strDrink: name})
  //     setDrinks(a)
  //   }
  // }


  return (
    <DrinkContext.Provider value={{ state, fetchDrinks, dispatch }}>
      {children}
    </DrinkContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(DrinkContext)
}

export { DrinkProvider } 