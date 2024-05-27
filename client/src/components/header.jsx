import React from "react";
import "./header.css";
import Navbar from "./navbar home/navbar";
function Header(){
    return(
        <>
        <header>
            <div>
                <Navbar/>
            </div>
            <div id="main-content">
                <h1 id="centre">THE TASTE OF HOMEMADE FOOD</h1>
            </div>

        </header>
        </>
    )
}

export default Header
