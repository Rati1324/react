import React from 'react'
import { useState, useRef} from "react";
import Button from "./Button"
import Result from "./Result"
import Input from "./Input"

export default function Container_2() {
  const [result, setResult] = useState(1)
  const valueRef = useRef()

  return (
    <>
        <Result curValue={result}/>
        <Input valueRef={valueRef} />
        
        <Button handleClick={() => {setResult(result + parseInt(valueRef.current.value))}} btnName="Add"/>

        <Button handleClick={() => {setResult(result - parseInt(valueRef.current.value))}} btnName="Subtract"/>
    </>
  )
}
