export function reducer(state, action) {
  switch(action.type) {
    case "fetch":
      return { ...state, drinks: action.payload }

    case "removeOne":
      return { ...state, drinks: state.drinks.filter(d => d.idDrink !== action.idDrink)}

    case "removeAll":
      return { ...state, drinks: [] }

    case "search":
      return { ...state, query: action.query}

    case "add":
      let id = Math.round(Math.random()*10000)
      let a = state.drinks.slice()
      a = [{idDrink: id, strCategory: action.category, strDrink: action.name}, ...state.drinks]
      return { ...state, drinks: a }
    default:
      return state
  }
}