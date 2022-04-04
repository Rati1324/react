import React, { useEffect } from 'react'

export default function Button(props) {

  function handleClick() {
    props.setDrinks(props.drinks.filter((d) => {
      return d.idDrink !== props.idDrink
    }))
  }

  // useEffect(() => {
  //   console.log(props.drinks)
  // }, [props.drinks])

  return (
    <button onClick={() => handleClick()}>Delete</button>
  )
}
