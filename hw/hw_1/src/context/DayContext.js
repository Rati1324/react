import { createContext, useState } from "react";
export const DayContext = createContext();

export default function DayProvider({ children }) {
  const [day, setDay] = useState("monday")

  const buttonData = [
    { num: 1, name: "monday" }, { num: 2, name: "tuesday" }, { num: 3, name: "wednesday" }, 
    { num: 4, name: "thursday" }, { num: 5, name: "friday" }, { num: 6, name: "saturday" },
    { num: 7, name: "sunday" }
  ]
  
  const values = {buttonData, day, setDay}
  return (
    <DayContext.Provider value={values}>
        {children}
    </DayContext.Provider>
  )
}