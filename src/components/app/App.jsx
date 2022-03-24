import React from 'react';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../main/Main';


import './app.css'

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <HeaderContainer />
                <Main />
            </div>
        </div>
    )
}


export default App