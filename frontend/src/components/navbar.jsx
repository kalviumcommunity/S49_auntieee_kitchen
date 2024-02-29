import React from "react";
import "./navbar.css"
import Logo from '../images/logo.png';

function Navbar() {
    return(
        <div id="navbar">
            <img id="logo" src={Logo} alt="logo"/>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contacts">About us</a></li>
                    <li><button className="fill" id="register">Register Now!</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
