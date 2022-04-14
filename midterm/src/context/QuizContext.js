import {React, createContext, useEffect, useState, useContext} from 'react';

const QuizContext = createContext()

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([])
  const [curQuestion, setCurQuestion] = useState(0)
  const [num, setNum] = useState(0)
  const [category, setCategory] = useState(28)

  async function fetchQuiz (url) {
    const response = await fetch(url)
    const data = await response.json()
    setQuiz(data.results)
  }
  useEffect(() => {
    fetchQuiz(`https://opentdb.com/api.php?amount=${num}&category=${category}`)
  }, [num, category])

  return (
    <QuizContext.Provider value={{ quiz, setQuiz, setNum, curQuestion, setCurQuestion, setCategory }}>
      {children}
    </QuizContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(QuizContext)
}

export { QuizProvider }
