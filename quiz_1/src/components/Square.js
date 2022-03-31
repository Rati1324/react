import React from 'react'
import { useState, useEffect } from 'react'

export default function Square(props) {
  const [color, setColor] = useState("blue");

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    let t = setInterval(() => setColor(getRandomColor()), 1000);
    return () => clearInterval(t);
  }, [])

  return (
    <div className="square" style={{ left: props.mousePos['x']+"px", top: props.mousePos['y']+"px", backgroundColor: color }}> 
    </div>
  )
}
