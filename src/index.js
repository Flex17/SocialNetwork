import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import store, { getStateActionCreator, subscribeActionCreator } from "./components/redux/state";

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

rerenderEntireTree(store.dispatch(getStateActionCreator()))

store.dispatch(subscribeActionCreator(rerenderEntireTree))