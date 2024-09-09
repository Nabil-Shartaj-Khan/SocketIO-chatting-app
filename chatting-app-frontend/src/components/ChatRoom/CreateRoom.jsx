import "./Chat.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const CreateRoom = () => {
    const [roomName, setRoomName] = useState("");

    const handleInputChange = (e) => {


        setRoomName(e.target.value);
    };

    return (
        <div className="create-room-container">
            <h1 className="text-success">Welcome to the party</h1>
            <span className=" fw-bold mt-4">If you leave the name empty, it will be automatically set to ‘Default’.</span>
            <input
                placeholder="One time room name..."
                className="text-center"
                value={roomName}
                onChange={handleInputChange}
            />

            <Link
                to="/show-chat"
                state={{ roomName }}
                className="btn btn-primary"
            >
                Create Room
            </Link>
            <span className="span-text fs-5 text-danger">Name them as you like. But make sure, it doesn't hurt anyone.</span>
        </div>
    );
}

export default CreateRoom;
