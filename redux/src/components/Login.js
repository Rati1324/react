import React from 'react'
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => { dispatch(login({ name: "John", age: 12, email: "j@g.com" }))}}>Log in</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
