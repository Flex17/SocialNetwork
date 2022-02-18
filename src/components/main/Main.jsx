import React from 'react'
import Profile from './profile/Profile'
import SideBar from './sidebar/Sidebar';
import Dialogs from './dialogs/Dialogs';
import Music from './music/Music';
import News from './news/News';
import Settings from './settings/Settings';
import { Route, Routes } from 'react-router-dom';


import './main.css'

const Main = (props) => {

    return (
        <div className="main">
            <div className="main-wrapper">
                <SideBar state={props.state.sidebar} />
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main