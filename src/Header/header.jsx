//import { Link,BrowserRouter, Switch,Route, Routes} from "react-router-dom";
import logo from "../img/dslogo.png"
import "./header.css"

export default function header(){
    return(
        <div className="entire">
            <div className="logo">
                <div className="logoimg">
                <img src={logo}></img>
                </div>
                <div className="logotitle">
                    <h5>
                    DSWU SOFTWARE<br></br>GRADUATION EXPO.

                    </h5>
                    
                </div>
            </div>
            <div className="category">
                <ul className="category_sub">
                    <li>INTRODUCE</li>
                    <li>PROJECTS</li>
                    <li>DEVELOPERS</li>
                    <li>GUESTBOOK</li>
                </ul>


            </div>
            <div className="sns">
            <ul className="sns_sub">
                    <li>Instagram</li>
                    <li>YouTube</li>
             
                </ul>


            </div>




        </div>



    )
}