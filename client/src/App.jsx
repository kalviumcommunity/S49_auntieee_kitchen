import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userdata from './components/displayUsers';
import LandingPage from './components/landingpage';
import UpdateUsers from './components/updateUsers';
import CreateUsers from './components/createUser';
import Loginuser from './components/login';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Routes>
      <Route path='/' element = {<Home/>} />
        <Route path='/landingPage' element = {<LandingPage/>} />
        <Route path='/loginUser' element = {<Loginuser/>}/>
        <Route path='/users' element = {<Userdata/>} />
        <Route path='/users/update/:id' element = {<UpdateUsers/>} />
        <Route path='/users/create' element = {<CreateUsers/>} />
      </Routes>
    </>
  )
}



export default App
