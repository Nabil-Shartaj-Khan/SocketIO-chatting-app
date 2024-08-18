import "./Chat.css";

const ShowChat = () => {
    return (
        <div className="show-chat-container">
            <div className="sidebar">
                <h4>Room Name: <span className="fs-4 text-success">Sample Room</span></h4>
                <div className="user-lists">
                    <h5>Members:</h5>
                    <ul>
                        <li>John Doe</li>
                        <li>Jane Smith</li>
                        <li>Emily Johnson</li>
                    </ul>
                    <button className="btn btn-danger logout-button">Logout</button>
                </div>
            </div>
            <div className="messages">
                <div className="message-bubble received">
                    <span className="fw-bold">User31</span>
                    <p>Hello everyone!</p>
                </div>
                <div className="message-bubble sent">
                    <span className="ms-1 fw-bold mb-2 text-dark">User49</span>
                    <p>Hi there! How's it going?</p>
                </div>


                <div className="input-container">
                    <input type="text" placeholder="Type your message here..." />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ShowChat;