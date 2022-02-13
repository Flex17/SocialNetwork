import React from 'react';
import AppHeader from '../header/Header';
import Main from '../main/Main';

import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <AppHeader />
                <Main />
            </div>
        </div>
    )
}


export default App