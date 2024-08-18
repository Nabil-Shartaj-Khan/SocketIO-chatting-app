import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container text-center">
            <h1>Login and dive in</h1>
            <div className="login-button-container fs-4 border border-2 p-5 shadow-lg">
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <button type="submit" className="btn btn-dark mt-2 fs-5 mt-4">Submit credentials</button>
                </div>
            </div>
            <span className="fs-5 mt-3">Not joined yet? <Link to="/sign-in" className="btn btn-danger">Join us</Link> now </span>
        </div>
    );
}

export default Login;
