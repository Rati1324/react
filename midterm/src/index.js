import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QuizProvider } from './context/QuizContext';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
