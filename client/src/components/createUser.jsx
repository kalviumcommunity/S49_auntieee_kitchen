import React, { useState } from "react";
import "./feature.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUsers() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3000/api/createUser", {username, email, age});
            console.log(result);
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div id="signin">
            <form onSubmit={handleSubmit}>
                <h2 id="sign">Signin</h2>
                <div id="signin-content">
                    <div>
                        <label htmlFor="username">Username</label>
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
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="age">Age</label>
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
                    <div id="sigh">
                        <button id="signin-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateUsers;
