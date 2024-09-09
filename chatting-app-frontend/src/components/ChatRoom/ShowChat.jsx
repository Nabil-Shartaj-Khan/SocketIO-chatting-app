import "./Chat.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const ShowChat = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { roomName } = location.state || {};
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            navigate("/login?message=Logged out successfully");
        }
    };

    useEffect(() => {
        const storedName = localStorage.getItem("email");
        if (storedName) {
            setUserName(storedName);
        }

        if (roomName) {
            socket.emit("join_room", roomName);
        }

        socket.on("receive_message", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Debugging information
        console.log('User Name:', userName);
        console.log('Room Name:', roomName);
        console.log('Messages:', messages);

        return () => {
            socket.off("receive_message");
        };
    }, [roomName, userName, messages]);

    const sendMessage = () => {
        if (message.trim()) {
            const messageData = {
                room: roomName,
                author: userName,
                message,
                time: new Date().toLocaleTimeString(),
            };

            socket.emit("send_message", messageData);
            setMessages((prevMessages) => [...prevMessages, messageData]);
            setMessage("");

            // Debugging information
            console.log('Sending Message Data:', messageData);
        }
    };

    return (
        <div className="show-chat-container">
            <div className="sidebar">
                <h4>Room Name: <span className="fs-4 text-success">{roomName || "Default Room"}</span></h4>
                <div className="user-lists">
                    <h5>Members:</h5>
                    <ul>
                        <li className="lead fs-5">{userName} <b>(Host)</b></li>
                    </ul>
                    <button
                        className="btn btn-danger logout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-bubble ${msg.author === userName ? "sent" : "received"}`}>
                        <span className="fw-bold">{msg.author}</span>
                        <p>{msg.message}</p>
                        <span className="text-muted message-time">{msg.time}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ShowChat;
