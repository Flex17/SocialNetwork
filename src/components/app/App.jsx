import React from 'react';
import AppHeader from '../header/Header';
import Main from '../main/Main';


import './app.css'

const App = (props) => {
    return (
        <div className='app'>
            <div className='container'>
                <AppHeader />
                <Main
                    state={props.state}
                    addPost={props.addPost}
                    addMessage={props.addMessage}
                    updateNewPostText={props.updateNewPostText}
                    updateNewMessageText={props.updateNewMessageText} />
            </div>
        </div>
    )
}


export default App