import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import state from './components/redux/state'

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App state={state} />
    </BrowserRouter>,
    document.getElementById('root'));