import { createContext, useContext, useEffect } from "react";

const NewsContext = createContext()

function NewsProvider ({children}) {
  async function fetchNews (url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } 

  useEffect(() => {
    fetchNews("https://hn.algolia.com/api/v1/item/1/search?query=react&page=1")
  }, [])

  const value = {}
  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  )
}

export const GlobalContext = () => {
  return useContext(NewsContext)
}

export {NewsContext, NewsProvider}