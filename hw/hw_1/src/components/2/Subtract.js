import React from 'react'

export default function Subtract({handleClick, inputValue, curValue}) {
  return (
    <button onClick={() => handleClick(parseInt(curValue) - parseInt(inputValue.current.value))} >Subtract</button>
  )
}