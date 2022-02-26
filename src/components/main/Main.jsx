import React from 'react'
import Profile from './profile/Profile'
import SideBar from './sidebar/Sidebar';
import Dialogs from './dialogs/Dialogs';
import Music from './music/Music';
import News from './news/News';
import Settings from './settings/Settings';
import { Route, Routes } from 'react-router-dom';


import './main.css'
import NotFoundPage from './notFoundPage/NotFoundPage';

const Main = (props) => {

    return (
        <div className="main">
            <div className="main-wrapper">
                <SideBar state={props.store.dispatch({ type: 'GET-SIDEBAR' })} />
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={<Profile
                            store={props.store}
                        />} />
                        <Route path='/dialogs/*' element={<Dialogs
                            state={props.store.dispatch({ type: 'GET-STATE' })}
                            store={props.store}
                            dispatch={props.store.dispatch.bind(props.store)}
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