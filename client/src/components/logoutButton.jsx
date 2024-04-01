import React from 'react';
import Cookies from 'js-cookie';
import "./navbar.css"
import {useNavigate,Link} from "react-router-dom"

const LogoutButton = () => {



  const handleLogout = () => {
    Cookies.remove('username');
  };

  return (
    <Link to="/"><button id="logout-btn" onClick={handleLogout}>Logout</button></Link>
  );
};

export default LogoutButton;