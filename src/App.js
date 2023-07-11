
import main from './pages/main';
import './App.css';
import GraduateList from './pages/developers/GraduateList';
import Main from "./pages/introduce/pages/Main";
import Member from './pages/developers/Member';

import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import arrayprc2 from './pages/projects/arrayprc2';

function App() {
  return (
    <>
      <switch>
      <Route path = "/" exact component = {main}/>
      <Route path = "/introduce" exact component = {Main}/>
      <Route path ="/projects" exact component = {arrayprc2}/>
      <Route path="/developers" exact component= {GraduateList} />

      </switch>

    </>
    
  
  );
}

export default App;
