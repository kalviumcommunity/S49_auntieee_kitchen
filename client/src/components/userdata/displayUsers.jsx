import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./displayUsers.css";

function Userdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getUsers").then((users) => {
      console.log(users.data);
      setUsers(users.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/api/deleteUser/" + id)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <div id="table-container">
      <caption>Users data</caption>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map(user => {
                return <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>
                    <Link to={`/users/update/${user._id}`}>
                    <button>Edit</button>
                    </Link>
                  
                    <button 
                    onClick={(e) => handleDelete(user._id)}>Delete</button>   
                </td>
                </tr>
            })
            }
          </tbody>
        </table>
        <Link to="/">
          <button id="return-to-home">Go back</button>
        </Link>
      </div>
    </>
  );
}

export default Userdata;