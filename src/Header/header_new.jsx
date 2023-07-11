
import {Link } from "react-router-dom";
import './header_new.css'
import React, { useState } from "react";

export default function header_new(){
    
  

    return(
        <div className="entire_wrap">
            <div className="logo">
                
            </div>
             <div className="category">
                <ul className="category_sub">
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                    <Link to='/introduce'>INTRODUCE</Link>
                     
                        </li>
                    <li>

                    <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                    <Link to="/developers">DEVELOPERS</Link>
                    </li>
                    <li>GUESTBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>YOUTUBE</li>
                </ul>
            </div>
        </div>
    )}