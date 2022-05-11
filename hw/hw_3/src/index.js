import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import todoReducer from "./slices/todoSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);