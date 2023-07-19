import main from "./pages/main";
import "./App.css";
import GraduateList from "./pages/developers/GraduateList";
import Main from "./pages/introduce/pages/Main";
import Member from "./pages/developers/Member";

import team1 from "./pages/team/team1/team1";
import team2 from "./pages/team/team2/team2";
import team3 from "./pages/team/team1/team3";
import team4 from "./pages/team/team2/team4";
import team5 from "./pages/team/team2/team5";
import team6 from "./pages/team/team1/team6";
import team7 from "./pages/team/team1/team7";

import React, { useState } from "react";

import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import arrayprc2 from "./pages/projects/arrayprc2";

function App() {
    return (
        <>
            <switch>
                <Route path="/" exact component={main} />
                <Route path="/introduce" exact component={Main} />
                <Route path="/projects" exact component={arrayprc2} />
                <Route path="/developers" exact component={GraduateList} />
                <Route path="/team1" exact component={team1} />
                <Route path="/team2" exact component={team2} />
                <Route path="/team3" exact component={team3} />
                <Route path="/team4" exact component={team4} />
                <Route path="/team5" exact component={team5} />
                <Route path="/team6" exact component={team6} />
                <Route path="/team7" exact component={team7} />
            </switch>
        </>
    );
}

export default App;