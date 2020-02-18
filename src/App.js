import React from 'react';
import logo from './logo.svg';
import Home from './home.js';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
