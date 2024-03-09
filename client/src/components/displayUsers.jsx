import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./displayUsers.css"

function Userdata() {
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/getUsers')
        .then(users => {
           console.log(users.data)
           setUsers(users.data)
        })      
        .catch(err => console.log(err))

       
  
    }, [])


    return (
        <>

        <div id="table-container">
            <table className ="styled-table">
            <caption>Users data</caption>
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                           return<tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Link to="/">
                <button id="return-to-home">
                    Go back
                </button>
            </Link>
        </div>
        </>
    )
}

export default Userdata