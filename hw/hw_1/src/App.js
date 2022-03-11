import React, { useState } from "react";
import Day from './components/Day';
import Button from './components/Button';
import './App.scss';

function App() {
  const [day, setDay] = useState("monday")

  const buttonData = [
    {
      num: 1,
      name: "monday",
    },
    {
      num: 2,
      name: "tuesday",
    },
    {
      num: 3,
      name: "wednesday",
    },
    {
      num: 4,
      name: "thursday",
    },
    {
      num: 5,
      name: "friday",
    },
    {
      num: 6,
      name: "saturday",
    },
    {
      num: 7,
      name: "sunday",
    }
  ]

  return (
    <div className="container">
      <Day curDay={day}/>
      <br/>
      <Button buttonData={buttonData} handleClick={setDay}/>
    </div>
  );
}

export default App;