import "../Login/Login.css"
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="login-container text-center">
            <h1>JOIN us today and enjoy unlimited hassle-free communication</h1>
            <div className="login-button-container fs-4 border border-2 p-5 shadow-lg">
                <div>
                    <label>Name:</label>
                    <input type="name" placeholder="name" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="email" required />
                </div>
                <div>
                    <button type="submit" className="btn btn-dark mt-2 fs-5 mt-4">Submit credentials</button>
                </div>
            </div>
            <span className="fs-5 mt-3">Member of our awesome party? <Link to="/login" className="btn btn-primary">LOGIN</Link> now </span>
        </div>
    );
}


export default Register;