import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <NavLink to="/">Profile</NavLink>
      <br/>
      <NavLink to="/login">Login</NavLink>
      <br/>
      <NavLink to="/change_color">Change color</NavLink>
    </div>
  )
}
