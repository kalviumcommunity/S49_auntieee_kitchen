import Cookies from 'js-cookie';
import { Link } from "react-router-dom"

const LogoutButton = () => {

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('username');

  };

  return (
    <Link to="/"><button id="logout-btn" onClick={handleLogout}>Logout</button></Link>
  );
};

export default LogoutButton;