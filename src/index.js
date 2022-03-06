import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import store from "./components/redux/redux-store";

import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store} />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})