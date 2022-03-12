import React, { useState } from "react";
import Container from './components/Container';
import './App.scss';

function App() {
  const [day, setDay] = useState("monday")

  const buttonData = [
    { num: 1, name: "monday" }, { num: 2, name: "tuesday" }, { num: 3, name: "wednesday" }, 
    { num: 4, name: "thursday" }, { num: 5, name: "friday" }, { num: 6, name: "saturday" },
    { num: 7, name: "sunday" }
  ]

  return (
    <Container curDay={day} buttonData={buttonData} handleClick={setDay}/>
  );
}

export default App;