import React from "react";
import "./intro.css"
import Img2 from "../images/auntie.png"
function Intro() {
    
    return(
        <div id="intro-container">
            <img id="auntie-img" src={Img2} alt="" />
            <div id="intro-description">
                <p id="into-speech">“A little bit of passion in all that you do is what sets you apart from the rest. “</p>
                <p>-Hema Magesh</p>
            </div>
        </div>
    )
}

export default Intro