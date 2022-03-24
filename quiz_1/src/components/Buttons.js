import React from 'react'

export default function Buttons(props) {
  return (
    props.buttonData.map((el) => {
        return (
            <button key={el['id']} onClick={() => props.onClick(el['business_name'])}> {el['business_name']} </button>
        )
    })
  )
}
