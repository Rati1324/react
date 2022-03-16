import React from 'react'

export default function Add({handleClick, curValue, inputValue}) {
  return (
    <>
    <button onClick={() => {handleClick(parseInt(curValue) + parseInt(inputValue.current.value))}}>Add</button>
    </>
  )

}
