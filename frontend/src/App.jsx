import React from 'react';
import Navbar from './components/navbar';
import Headerpart from "./components/header";
import Intro from "./components/intro"
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div id='img-container'></div>
      <header>
        <Headerpart/>
      </header>
      <main>
        <Intro/>
      </main>

      <footer>
        <div className='footer-container'>
        <p className='footer'>This web application is based on website: <a href="https://hemamagesh.com/">hemamagesh.com</a></p> <br />
        <p className='footer'>check the website by clicking on the link to get detailed recipes and insights on yoga, crafts, baking and much more. ❤️</p>
        </div>
      </footer>
      
    </>
  )
}

export default App
