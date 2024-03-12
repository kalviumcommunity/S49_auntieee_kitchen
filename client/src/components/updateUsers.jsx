import React, { useEffect, useState } from "react";
import "./feature.css"
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUsers() {
    //this will take the id from the url and store it in the variable id
    const {id} = useParams()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/api/getUsers/' + id)
        .then(users => {
           setUsername(users.data.username)
           setEmail(users.data.email)
           setAge(users.data.age)
           
        })      
        .catch(err => console.log(err))
    }, [])

    const Update = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:3000/api/updateUser/${id}`, {
            username,
            email,
            age,
          });
          console.log(response);
          navigate("/users");
        } catch (error) {
          console.log(error);
        }
      };

      
    return (
        <div id="update">
            <form onSubmit={Update}>
                <h2 id="upd">Update</h2>
                <div id="signin-content">
                <div>
                    <label htmlFor="">Username</label>
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter username" 
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter valid email" 
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <br />
                    <input 
                        type="number" 
                        placeholder="Enter your age" 
                        className="input-field"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    
                </div>
                <div id="updt">
                <button id="update-btn">Submit</button>
                </div>
                </div>
            </form>
        </div>  
    )
}

export default UpdateUsers