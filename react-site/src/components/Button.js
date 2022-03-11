import React from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.class}>
      {props.value}
    </button>
  )
}

export default Button