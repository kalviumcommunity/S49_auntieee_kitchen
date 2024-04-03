import React from "react";
import "./cards.css";

function Cards() {
    return(
        <>
            <div className="card-container">
                    <div id="starter">
                        <h2>Start your meal with these mouthwatering Soup and Starters</h2>
                    </div>
                    <img className="cards" src="https://i.pinimg.com/736x/23/21/c1/2321c16fe33b7db7189090c97b9b7d28.jpg" alt="card1" />
                    <img className="cards" src="https://i.pinimg.com/564x/16/19/2a/16192ad46ca3ac396bfefdbac3a58350.jpg" alt="card1" />
            </div>
            <div className="card-container">
                    <img className="cards" src="https://i.pinimg.com/564x/4f/8d/a0/4f8da0c570ce8e54c464cc1a66caf2d0.jpg" alt="card1" />
                    <img className="cards" src="https://i.pinimg.com/564x/67/9d/ae/679daebc1246a38c5aa712edac95e6b1.jpg" alt="card1" />
                    <div id="desserts">
                        <h2>End your meal with Delicious Delights</h2>
                    </div>
            </div>
        </>
    )
}

export default Cards