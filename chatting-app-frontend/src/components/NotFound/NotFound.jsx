import "./NotFound.css"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div className="container">
                <h1 className="text-danger text-center">Hmm...Seems like the route didn't match</h1>
                <h2 className="text-center fs-3 mt-5">Perhaps...Back to <Link to="/" className="btn btn-primary" >Home</Link> page?</h2>
            </div>
        </div>
    );
}

export default NotFound;