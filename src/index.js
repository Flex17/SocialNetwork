import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import store from "./components/redux/redux-store";
import { Provider } from "react-redux";

import './index.css';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})