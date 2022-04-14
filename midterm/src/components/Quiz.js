import React, { useEffect } from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/QuizContext'
import Question from './Question'

export default function Quiz() {
  const { quiz, setQuiz, setNum, setCategory, curQuestion } = GlobalContext()
  const numInput = useRef()
  const catInput = useRef()

  function handleClick() {
    setNum(numInput.current.value)
  }

  return (
    <>
      <input ref={numInput} type="number"></input>
      <button onClick={() => handleClick()}>Go</button>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="28">Vehicles</option>
        <option value="9">General Knowledge</option>
        <option value="11">Entertainment: Film</option>
      </select>
      {quiz[curQuestion] ? <Question questions={quiz}/> : ""}
      
    </>
  )
}
