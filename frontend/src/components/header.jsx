import React from "react";
import "./header.css";
import Img1 from "../images/img1.png"

function Headerpart() {
    return(
        <>
        <div id="container">
            <img id="home-img" src="https://i.pinimg.com/564x/d0/64/01/d0640123e141c97c2e3a57655cbe00bc.jpg" alt="" />
            <div id="explore-description">
                <h1>Recipes to <br /> Take You Back Home</h1>
                <button id="explore">Explore now</button>
            </div>
            <img id="img1" src={Img1} alt="dosa"/>
        </div>
        </>
    )
}

export default Headerpart