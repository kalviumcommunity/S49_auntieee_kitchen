import { Link } from "react-router-dom";
import "../navbar home/navbar.css"
function Nav() {

  return (
    <>
      <div id="navbar">
        <nav>
          <h4 id="main-heading">THE MODERN INDIAN AUNTIE'S KITCHEN</h4>
          <Link to="/users/create">
            <button id="create-users">Sign in</button>
          </Link>
        </nav>
    </div>
    </>
  );
}

export default Nav