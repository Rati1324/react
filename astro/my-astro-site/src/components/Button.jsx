import react from "react";

export default function Button() {
  const text = "Hi"

  return (
    <button onClick={() => alert(text)}>{text}</button>
  )
}