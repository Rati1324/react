import React from 'react'
import Day from './Day';
import Button from './Button';
import '../../App.scss';

export default function Container() {
  return (
    <div className="container">
      <Day />
      <Button />
    </div>
  )
}