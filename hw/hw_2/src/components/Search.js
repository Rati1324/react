import React, { useEffect } from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Search() {
  const inputRef = useRef()
  const { fetchDrinks } = GlobalContext()

  function handleClick() {
    fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputRef.current.value}`)
  }

  return (
    <> 
      Category: 
      <input ref={inputRef} type="text"/>
      <button onClick={() => handleClick()}>Search</button>
    </>
  )
}
