import React from 'react'
import Page from '../page/Profile'
import SideBar from '../sidebar/Sidebar'



import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main-content">
                <SideBar />
                <Page />
            </div>
        </div>
    )
}

export default Main