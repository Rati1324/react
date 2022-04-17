import React, { useEffect } from 'react'
import { GlobalContext } from '../context/QuizContext'

export default function Question(props) {
  const { curQuestion, setCurQuestion, quiz, score, setScore } = GlobalContext()
  
  function handleClick(e) {
    if (curQuestion < quiz.length) {
      setCurQuestion(curQuestion + 1)
    }
    if (quiz[curQuestion].correct_answer === e.target.value) {
      setScore(score + 1)
    }
  }

  useEffect(() => {
    if (quiz.length > 0) {props.setStatus("Restart")}
  })

  if (quiz.length > 0 && curQuestion < quiz.length) {
    return (
      <div>
        {quiz[curQuestion].question}
        <br/>
        {quiz[curQuestion].incorrect_answers.map((el, i) => (
          <button onClick={(e) => {handleClick(e)}} value={el} key={i}>{el}</button>
        ))}
      </div>
    )
  }
  else if (quiz.length !== 0 && quiz.length === curQuestion) {
    return (<div>You scored: {score}</div>)
  }
}
