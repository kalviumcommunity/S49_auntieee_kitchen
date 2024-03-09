import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userdata from './components/displayUsers';
import LandingPage from './components/landingpage';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/users' element = {<Userdata/>} />
      </Routes>
    </>
  )
}



export default App
