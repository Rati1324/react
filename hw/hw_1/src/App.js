import React, { useState } from "react";
import Container from './components/1/Container';
import Container_2 from './components/2/Container_2';
import Result from './components/2/Result';
import DayProvider from './context/DayContext';
import './App.scss';

function App() {
  return (
    <>
      <DayProvider>
        <Container />
      </DayProvider>
      <br/>
      <Container_2 />
    </>
  );
}

export default App;