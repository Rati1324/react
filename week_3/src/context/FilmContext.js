import { createContext } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({children}) => {
    const films = useState([
    {
      filmName:"pulp fiction",
      releaseDate: 2010,
      money:200000
    },
    {
      filmName:"pulp fiction 2",
      releaseDate: 2014,
      money:30000
    }
  ])
    return (
        <FilmContext.Provider>
            {children}
        </FilmContext.Provider>
    )
}