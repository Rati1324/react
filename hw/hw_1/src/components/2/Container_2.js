import React from 'react'
import { useState, useRef} from "react";
import Add from "./Add"
import Result from "./Result"
import Subtract from "./Subtract"
import Input from "./Input"

export default function Container_2() {
  const [result, setResult] = useState(1)
  const valueRef = useRef()

  return (
    <>
        <Result curValue={result}/>
        <Input valueRef={valueRef} />
        <Add handleClick={setResult} curValue={result} inputValue={valueRef} />
        <Subtract handleClick={setResult} curValue={result} inputValue={valueRef}/>
    </>
  )
}
