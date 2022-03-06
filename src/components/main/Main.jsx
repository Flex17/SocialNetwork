import React from 'react'
import Profile from './profile/Profile'
import SideBarContainer from './sidebar/SidebarContainer';
import DialogsContainer from './dialogs/DialogsContainer';
import Music from './music/Music';
import News from './news/News';
import Settings from './settings/Settings';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './notFoundPage/NotFoundPage';

import './main.css'

const Main = (props) => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <SideBarContainer store={props.store} />
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={<Profile
                            store={props.store}
                        />} />
                        <Route path='/dialogs/*' element={<DialogsContainer
                            store={props.store}
                        />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main