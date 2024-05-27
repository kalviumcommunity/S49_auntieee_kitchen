import { useState } from "react";
import "./feature.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateUsers() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/createUser", { username, password, age });
            console.log(response);
            navigate("/landingPage");
        } catch (err) {
            if (err.response && err.response.status === 409) {
                setError("Username already exists. Please choose a different one.");
            } else {
                console.log(err);
            }
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
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter valid password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    {error && <div className="error">{error}</div>}
                    <div id="sigh">
                        <button id="signin-btn">
                            Submit
                        </button>
                        <Link to='/loginUser'>
                        <h6 id="to-login">
                            Already a user
                        </h6>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateUsers;
