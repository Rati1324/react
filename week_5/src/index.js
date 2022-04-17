import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {NewsProvider} from './context/NewsContext'

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);