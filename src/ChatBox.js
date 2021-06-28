import React from 'react'
import "./ChatBox.css"
import Sidebar from './Sidebar'

function ChatBox() {
    return (
        <div className="chat_box">
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
        </div>
    )
}

export default ChatBox
