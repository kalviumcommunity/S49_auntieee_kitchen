// Home.jsx
import React from "react";
import "./header.css";
import Navbar from "./navbar";
import CarouselComponent from "./CarouselComponent"; // Import the CarouselComponent
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';


function Home() {
  console.log(Cookies.get("username"),"should give undefine")
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-page-contents">
        <CarouselComponent /> {/* Add the CarouselComponent here */}
      </div>
    </>
  );
}

export default Home;
