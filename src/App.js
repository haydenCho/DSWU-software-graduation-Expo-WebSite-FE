
import main from './pages/main';
//import './App.css';

import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <switch>
      <Route path = "/" exact component = {main}/>

      </switch>

    </div>
    
  
  );
}

export default App;
