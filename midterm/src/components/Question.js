import React, { useEffect } from 'react'
import {useState} from 'react'
import { GlobalContext } from '../context/QuizContext'

function Question(props) {
  const { curQuestion, setCurQuestion } = GlobalContext()

  useEffect(() => {
    let r = Math.floor(Math.random() * props.questions[curQuestion].incorrect_answers.length)
    props.questions[curQuestion].incorrect_answers.splice(r, 0, props.questions[curQuestion].correct_answer)
  }, [curQuestion])

  function handleClick() {
    setCurQuestion(curQuestion + 1)
  }

  return (
    <>
      <div>{props.questions[curQuestion].question}</div>

      {props.questions[curQuestion].incorrect_answers.map((el, i) => (
        <button onClick={() => {handleClick()}} key={i}>{el}</button>
      ))}
    </>
  )
}

export default Question