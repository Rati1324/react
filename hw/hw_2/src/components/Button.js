import React, { useEffect } from 'react'

export default function Button(props) {

  return (
    <button onClick={() => props.handleClick(props.idDrink)}>{props.name}</button>
  )
}