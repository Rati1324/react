import React, { useEffect } from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/DrinkContext'

export default function Search(props) {
  const inputRef = useRef()
  const { dispatch } = GlobalContext()


  return (
    <> 
      Name: 
      <input ref={inputRef} type="text"/>
      <button onClick={() => dispatch({type: "search", query: inputRef.current.value })}>Search</button>
    </>
  )
}
