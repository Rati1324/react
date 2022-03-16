import { useContext } from "react"
import { DayContext } from "../../context/DayContext"

export default function Button() {
  const { buttonData, setDay } = useContext(DayContext)

  return (
    buttonData.map((el) => {
      return <button key={el.num} onClick={() => setDay(el.name)}>{ el.num }</button>
    })
  )
}
