import React from "react";
import ReactDOM from "react-dom";
// import state from './components/redux/state'
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
// import { addMessage, addPost, updateNewPostText, updateNewMessageText, subscribe } from "./components/redux/state";
import store from "./components/redux/state";

import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                // addPost={store.addPost}
                // addMessage={store.addMessage}
                // updateNewPostText={store.updateNewPostText}
                // updateNewMessageText={store.updateNewMessageText} 
                store={store} />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)