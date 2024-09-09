import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const logoutMessage = queryParams.get("message");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email);
            navigate("/create-room");
        } catch (error) {
            setMessage(error.response?.data?.message || "Error logging in");
        }
    };

    return (
        <div className="login-container text-center">
            <h1>Login and dive in</h1>
            {(message || logoutMessage) && (
                <div className="alert alert-success fs-4 my-4">
                    {logoutMessage ? logoutMessage : message}
                </div>
            )}
            <form className="login-button-container fs-4 border border-2 p-5 shadow-lg" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-dark mt-2 fs-5 mt-4">
                        Submit credentials
                    </button>
                </div>
            </form>
            <span className="fs-5 mt-3">
                Not joined yet? <Link to="/sign-in" className="btn btn-danger">Join us</Link> now
            </span>
        </div>
    );
};

export default Login;
