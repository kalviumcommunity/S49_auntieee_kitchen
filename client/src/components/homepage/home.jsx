import React from "react";
import Nav from "../navbar landing/nav";
import CarouselComponent from "../carousel/CarouselComponent"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';


function Home() {
  console.log(Cookies.get("username"),"should give undefine")
  return (
    <>
      <div>
        <Nav/>
      </div>
      <div className="main-page-contents">
        <CarouselComponent />
      </div>
    </>
  );
}

export default Home;
