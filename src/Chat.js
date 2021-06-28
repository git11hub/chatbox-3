import React, { useState } from 'react';
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {

    const [ input, setInput] = useState("");

    console.log(input);

    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase magic...

        setInput("");
    };

    return (
        <div className="chat">

            <div className="chat_header">
                <h4>To: <span className="chat_name">Chanel name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className="chat_messages">
                <h2>This is a message</h2>
                <h2>This is a message</h2>
                <h2>This is a message</h2>
                <h2>This is a message</h2>
                <h2>This is a message</h2>
                <h2>This is a message</h2>
            </div>
            {/* chat input */}
            <div className="chat_input">
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message" 
                    type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat_mic" />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Chat
