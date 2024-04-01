import React from 'react';
import Header from './header';
import Cards from './cards';
import { Link } from 'react-router-dom';
import "./landingpage.css";
import Cookies from 'js-cookie';



function LandingPage() {
  console.log(Cookies.get("username"),"value")
  return (
    <>
        <Link to="/landingPage">
            <Header/>
            <div id='heading'>Homemade Delights Glossary</div>
            <hr />
            <main>
                <Cards/>
            </main>
        </Link> 

    </>
  )
}



export default LandingPage