import React from 'react';
import './App.css';
import Jokes from './components/Jokes';
import Favorites from './components/Favorites';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/favs" element={<Favorites />} />
          <Route path="/" element={<Jokes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
