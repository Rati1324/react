import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Routes>      
        <Route path="/" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/change_color" element={<ChangeColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
