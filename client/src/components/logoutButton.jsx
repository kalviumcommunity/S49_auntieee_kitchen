import Cookies from 'js-cookie';
import "./navbar.css"
import { Link } from "react-router-dom"

const LogoutButton = () => {



  const handleLogout = () => {
    Cookies.remove('token');
  };

  return (
    <Link to="/"><button id="logout-btn" onClick={handleLogout}>Logout</button></Link>
  );
};

export default LogoutButton;