import React, {useState} from 'react'
import { useRef } from 'react'
import { GlobalContext } from '../context/QuizContext'
import Question from './Question'

export default function Quiz() {
  const { quiz, fetchQuiz, curQuestion } = GlobalContext()
  const [status, setStatus] = useState("Start")
  const numInput = useRef()
  const catInput = useRef()

  return (
    <>
      <input ref={numInput} type="number"></input>
      <button onClick={() => fetchQuiz(numInput.current.value, catInput.current.value)}>{status}</button>

      <select ref={catInput}>
        <option value="28">Vehicles</option>
        <option value="9">General Knowledge</option>
        <option value="11">Entertainment: Film</option>
      </select>

      {(quiz.length > 0) ?
        <Question questions={quiz} setStatus={setStatus}/> 
        : <div></div>
      }
    </>
  )
}
