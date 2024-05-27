import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userdata from "./components/userdata/displayUsers";
import LandingPage from './components/landingpage';
import UpdateUsers from './components/userdata/updateUsers';
import CreateUsers from './components/login signin logout/createUser';
import Loginuser from './components/login signin logout/login';
import Home from './components/homepage/home';
import CreateDishes from './components/CreateDishes';
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
        <Route path='/createdishes' element = {<CreateDishes/>} />
      </Routes>
    </>
  )
}



export default App
