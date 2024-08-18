import "./Chat.css";
import { Link } from 'react-router-dom';
const CreateRoom = () => {
    return (
        <div className="create-room-container">
            <h2>Create a room for you and your buddies</h2>
            <input placeholder="Create a room..." className="text-center" />
            <Link to="/show-chat" className="btn btn-primary">Create Room</Link>
            <span className="span-text fs-5 text-danger">Name them as you like. But make sure, it doesn't hurt anyone.</span>
        </div>
    );
}

export default CreateRoom;