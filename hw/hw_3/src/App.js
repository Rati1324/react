import './App.css';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavLink to="/todos">Todos</NavLink>
      <Routes>
        <Route path="/todos" element={<><AddTodo /><Todos /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
