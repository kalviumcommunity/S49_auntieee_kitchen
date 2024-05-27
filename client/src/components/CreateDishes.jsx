import { useState } from "react";
import './login signin logout/feature.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function CreateDishes() {
    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const navigate = useNavigate();
    const created_by = Cookies.get('username')
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/createDishes", { name, category , created_by}).then(
            res=>{
                console.log(res);
                navigate('/landingpage')
            }).catch(
                err=>console.log(err)
            )
    };

    return (
        <div id="signin">
            <form onSubmit={handleSubmit}>
                <h2 id="sign">Add dish</h2>
                <div id="signin-content">
                    <div>
                        <label htmlFor="name">name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="input-field"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <br />
                        <input
                            type="category"
                            placeholder="Enter valid category"
                            className="input-field"
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
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

export default CreateDishes
