import React from 'react'
import "./ChatBox.css"
import Sidebar from './Sidebar';
import Chat from './Chat';

function ChatBox() {
    return (
        <div className="chat_box">
            <Sidebar />
            <Chat /> 
        </div>
    )
}

export default ChatBox
