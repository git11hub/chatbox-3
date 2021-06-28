import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase'

function Sidebar() {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">

            <div className="sidebar_header">
                <Avatar src={user.photo} onClick={() => auth.signOut()} className="sidebar_avatar" />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>

                <IconButton variant="outlined" className="sidebar_inputButton">
                    <RateReviewOutlinedIcon />
                </IconButton>
                
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
