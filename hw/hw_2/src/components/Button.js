import React, { useEffect } from 'react'

export default function Button(props) {

  function handleClick() {
    if (!props.idDrink) { props.setDrinks([]) }

    else {
      props.setDrinks(props.drinks.filter((d) => {
        return d.idDrink !== props.idDrink
      }))
    }
  }

  return (
    <button onClick={() => handleClick()}>{props.name}</button>
  )
}
