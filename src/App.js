
import main from './pages/main';
//import './App.css';

import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import arrayprc2 from './pages/projects/arrayprc2';

function App() {
  return (
    <div className='App'>
      <switch>
      <Route path = "/" exact component = {main}/>
      <Route path ="/projects" exact component = {arrayprc2}/>

      </switch>

    </div>
    
  
  );
}

export default App;
