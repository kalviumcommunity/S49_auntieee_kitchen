import React from 'react';
import Header from './header';
import Cards from './cards';
import { Link } from 'react-router-dom';
import "./landingpage.css";



function LandingPage() {

  return (
    <>
        <Link to="/">
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