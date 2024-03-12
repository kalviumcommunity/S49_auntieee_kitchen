import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return(
    <>
    <div id="navbar">
      <nav>
      <h4>THE MODERN INDIAN AUNTIE'S KITCHEN</h4>
      <Link to="/users" >
        <button id="user-details">Get Users</button>
      </Link>
      
      <Link to="/users/create">
        <button id="create-users">Sign in</button>
      </Link>
      </nav>
    </div>
  </>

  )
}
export default Navbar