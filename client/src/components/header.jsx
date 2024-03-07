import React from "react";
import "./header.css"
function Header(){
    return(
        <>
        <header>
        <h4>THE MODERN INDIAN AUNTIE'S KITCHEN</h4>
        <div className="header-container">
            <div className="center-text">
                <h1>THE TASTE OF HOMEMADE FOOD</h1>
                <button id="explore">Explore Dishes</button>
            </div>
        </div>
        </header>
        </>
    )
}

export default Header