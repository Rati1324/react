import React from 'react'
import Day from './Day';
import Button from './Button';
import '../App.scss';

export default function Container({ curDay, buttonData, handleClick}) {
  return (
    <div className="container">
      <Day curDay={curDay}/>
      <Button buttonData={buttonData} handleClick={handleClick}/>
    </div>
  )
}