import "./navbar.css";
import { Link } from "react-router-dom";
import LogoutButton from "../login signin logout/logoutButton";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Navbar() {
  const [users, setUsers] = useState([]);
  const [dishes, setDishes] = useState([]);
  const created_by = Cookies.get("username");
  const [selectedUser, setSelectedUser] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getUsers").then((users) => {
      setUsers(users.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getDishes").then((dishes) => {
      setDishes(dishes.data);
    });
  }, []);

  const handleSelectChange = (e) => {
    setSelectedUser(e.target.value);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div id="navbar">
        <nav>
          <h4 id="main-heading">THE MODERN INDIAN AUNTIE'S KITCHEN</h4>
          <div>
            <select value={selectedUser} onChange={handleSelectChange} id="">
              <option value="">Top Choices</option>
              {users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <Link to="/users">
            <button id="user-details">Get Users</button>
          </Link>
          <Link to="/createdishes">
            <button id="create-dishes">Add dishes</button>
          </Link>
          <LogoutButton />
        </nav>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>
            <div className="popup-content">
              {dishes
                .filter((item) => item.created_by === selectedUser)
                .map((dish) => {
                  console.log(dish);
                  return (
                    <div key={dish._id}>
                      <p>{dish.name}</p>
                      <p>{dish.category}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;