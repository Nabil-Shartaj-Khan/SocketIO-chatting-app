import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });

            setMessage(response.data.message);
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage(error.response?.data?.message || "Error registering user");
        }
    };

    return (
        <div className="login-container text-center">
            <h1>JOIN us today and enjoy unlimited hassle-free communication</h1>
            <form className="login-button-container fs-4 border border-2 p-5 shadow-lg" onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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

            {message && <p className="mt-3 fs-2 text-danger">{message}</p>}

            <span className="fs-5 mt-3">
                Ready? <Link to="/login" className="btn btn-primary"> LOGIN</Link> now
            </span>
        </div>
    );
};

export default Register;
