import SideBarContainer from './sidebar/SidebarContainer';
import DialogsContainer from './dialogs/DialogsContainer';
import Music from './music/Music';
import News from './news/News';
import Settings from './settings/Settings';
import { Route, Routes } from 'react-router-dom';
// import NotFoundPage from './notFoundPage/NotFoundPage';

import './main.css'
import UsersContainer from './users/UsersContainer';
import ProfileContainer from './profile/ProfileContainer';

const Main = () => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <SideBarContainer />
                <div className="main-content">
                    <Routes>
                        <Route path='*' element={<ProfileContainer />} />
                        <Route path='/profile/:id' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/users' element={<UsersContainer />} />
                        {/* <Route path='*' element={<NotFoundPage />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main