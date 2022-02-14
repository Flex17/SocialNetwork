import React from 'react'
import Profile from './profile/Profile'
import SideBar from './sidebar/Sidebar';
import Dialogs from './dialogs/Dialogs';
import Music from './music/Music';
import News from './news/News';
import Settings from './settings/Settings';
import { Route, Routes } from 'react-router-dom';


import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <SideBar />
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs' element={<Dialogs />} />
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