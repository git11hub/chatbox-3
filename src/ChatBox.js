import React from 'react'
import "./ChatBox.css"
import Sidebar from './Sidebar'

function ChatBox() {
    return (
        <div className="chat_box">
            <h1>this is chat box...</h1>
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
        </div>
    )
}

export default ChatBox
