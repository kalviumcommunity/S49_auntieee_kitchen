import { useState } from "react";
import "./feature.css"; // Adjust the path to your CSS file if needed
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function LoginUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/loginUser", { username, password });
            console.log(response);
            if (response.status === 200) { // Assuming 200 means successful login, adjust as needed
                Cookies.set('username', username, { expires: 7 });
                navigate("/landingPage");
            } else {
                setError("Login failed. Please try again."); // Handle unexpected response status
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError("Username or password is incorrect.");
            } else {
                console.log(err);
                setError("An unexpected error occurred. Please try again later."); // Handle unexpected errors
            }
        }
    };

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <h2 id="login-heading">Login</h2>
                <div id="login-content">
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
                            placeholder="Enter password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div id="log">
                        <button type="submit" id="login-btn"> {/* Specify type="submit" */}
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginUser;
