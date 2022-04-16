import {React, createContext, useEffect, useState, useContext} from 'react';

const QuizContext = createContext()

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([])
  const [curQuestion, setCurQuestion] = useState(0)
  // const [num, setNum] = useState(0)
  // const [category, setCategory] = useState(28)
  const [score, setScore] = useState(0)

  async function fetchQuiz(num, category) {
    const url = `https://opentdb.com/api.php?amount=${num}&category=${category}`
    const response = await fetch(url)
    const data = await response.json()

    data.results.map((el, _) => {
      let r = Math.floor(Math.random() * el.incorrect_answers.length)
      el.incorrect_answers.splice(r, 0, el.correct_answer)
      return 0
    })
    setCurQuestion(0);
    setQuiz(data.results)
  }

  return (
    <QuizContext.Provider value={{ quiz, setQuiz, curQuestion, setCurQuestion, score, setScore, fetchQuiz }}>
      {children}
    </QuizContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(QuizContext)
}

export { QuizProvider }
