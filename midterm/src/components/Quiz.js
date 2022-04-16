import React, { useEffect } from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/QuizContext'
import Question from './Question'

export default function Quiz() {
  const { quiz, fetchQuiz } = GlobalContext()
  const numInput = useRef()
  const catInput = useRef()

  function handleClick() {
    fetchQuiz(numInput.current.value, catInput.current.value)
  }

  return (
    <>
      <input ref={numInput} type="number"></input>
      <button onClick={() => handleClick()}>Go</button>

      <select ref={catInput}>
        <option value="28">Vehicles</option>
        <option value="9">General Knowledge</option>
        <option value="11">Entertainment: Film</option>
      </select>
      <Question questions={quiz}/> 
    </>
  )
}
