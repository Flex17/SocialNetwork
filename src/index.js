import React from "react";
import ReactDOM from "react-dom";
import state from './components/redux/state'
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import { addMessage, addPost, updateNewPostText, updateNewMessageText, subscribe } from "./components/redux/state";

import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)