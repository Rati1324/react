import { React } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/todo" element={
          <><AddTodo/><Todos /></>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
