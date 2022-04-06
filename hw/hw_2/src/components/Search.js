import React, { useEffect } from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Search() {
  const inputRef = useRef()
  const { setDrinks, drinksCopy } = GlobalContext()

  function handleClick() {
    var result = drinksCopy.filter(d => {
      return d.strCategory == inputRef.current.value
    })
    setDrinks(result)
  }

  return (
    <> 
      Category: 
      <input ref={inputRef} type="text"/>
      <button onClick={() => handleClick()}>Search</button>
    </>
  )
}
