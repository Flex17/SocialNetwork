import React from 'react'
import Profile from './profile/Profile'
import SideBar from './sidebar/Sidebar';


import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main-content">
                <SideBar />
                <Profile />
            </div>
        </div>
    )
}

export default Main