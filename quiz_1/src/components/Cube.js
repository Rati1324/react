import React, { useState, useEffect } from 'react'
import Square from './Square.js'

// 2 ways of doing this, square component is unnecessary...
export default function Cube() {
  const [mousePos, setPos] = useState({x: 0, y: 0});

  function handleMouse(e) {
    // document.querySelector(".square").style.left = e.pageX + "px";
    // document.querySelector(".square").style.top = e.pageY + "px";
    const container = document.querySelector(".container");
    var x = e.pageX - container.getBoundingClientRect().x;
    var y = e.pageY - container.getBoundingClientRect().y;
    setPos({'x': Math.round(x), 'y': Math.round(y)});
  }

  return (
    <>
      <p>x: {mousePos['x']} y: {mousePos['y']}</p>
      <div className="container" onMouseMove={handleMouse} onMouseLeave={() => {
        setPos({'x': 0, 'y': 0})
        }
      }>
        {/* <div className="square">
        </div> */}
        <Square mousePos={mousePos} />
      </div>
    </>
  )
}
