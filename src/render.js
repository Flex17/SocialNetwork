import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import { addMessage, addPost } from "./components/redux/state";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} />
        </BrowserRouter>,
        document.getElementById('root'));
}

export default rerenderEntireTree