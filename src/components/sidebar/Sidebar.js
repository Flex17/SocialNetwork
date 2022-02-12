import React from "react";
import './sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="categories">
                    <a href="#s">Profile</a>
                </div>
                <div className="categories">
                    <a href="#s">Messages</a>
                </div>
                <div className="categories">
                    <a href="#s">News</a>
                </div>
                <div className="categories">
                    <a href="#s">Music</a>
                </div>
                <div className="settings">
                    <a href="#s">Settings</a>
                </div>
                <div className="friends">
                    <p className="friends-text">Friends</p>
                    <div className="friends-block">
                        <div className="friends-friend">
                            <div className="friends-friend__logo"></div>
                            <div className="friends-friend__name">Alex</div>
                        </div>
                        <div className="friends-friend">
                            <div className="friends-friend__logo"></div>
                            <div className="friends-friend__name">Alex</div>
                        </div>
                        <div className="friends-friend">
                            <div className="friends-friend__logo"></div>
                            <div className="friends-friend__name">Alex</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar