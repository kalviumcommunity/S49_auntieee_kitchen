import React from "react";
import "./header.css";
import Navbar from "./navbar";
function Header(){
    return(
        <>
        <header>
            <div>
                <Navbar/>
            </div>
            <div id="main-content">
                <h1>THE TASTE OF HOMEMADE FOOD</h1>
                <button id="explore">Explore Dishes</button>
            </div>

        </header>
        </>
    )
}

export default Header
