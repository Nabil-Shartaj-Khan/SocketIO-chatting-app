import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-page-section d-flex justify-content-center align-items-center">
            <div>
                <h1>Connect with the people you admire </h1>
                <div className="home-button-section d-flex justify-content-center align-items-center mt-4">
                    <div>
                        <Link to="/login" className="me-3 btn btn-primary btn-lg">Login</Link>
                    </div>
                    <div >
                        <Link to="/sign-in" className="ms-2 btn btn-success btn-lg">Sign-up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
