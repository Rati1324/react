import React from 'react';
import './index.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { DrinkProvider } from "./context/DrinkContext"

const root = createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <DrinkProvider>
      <App />
    </DrinkProvider>
  </StrictMode>,
);