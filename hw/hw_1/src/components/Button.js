import React from 'react'

export default function Button({ buttonData, handleClick }) {
  return (
    buttonData.map((el) => {
      return <button key={el.num} onClick={() => handleClick(el.name)}>{ el.num }</button>
    })
  )
}
