import React from 'react'

const Button = (props) =>  {
  return (
    <button className="btn" onClick={props.onClick}>
        {props.value}
    </button>
  )
}

const Surname = () => {
  return (
    <div>
        Sur name !
        <Button/>
    </div>
  )
}

export default Surname