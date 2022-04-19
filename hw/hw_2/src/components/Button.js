import React, { useEffect } from 'react'

export default function Button(props) {
  // function handleClick() {
  //   if (!props.idDrink) { props.setDrinks([]) }
  // }

  return (
    <button onClick={() => props.handleClick(props.idDrink)}>{props.name}</button>
  )
}
