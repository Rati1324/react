import { React, useContext } from "react"
import { DayContext } from '../../context/DayContext'

export default function Day() {
  const { day } = useContext(DayContext)
  return (
    <>
      week day: <input value={day}/>
      <br/>
    </>
  )
}
