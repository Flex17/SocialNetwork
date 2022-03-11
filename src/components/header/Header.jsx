import React from "react";
import { Link } from 'react-router-dom'

import classes from './header.module.css'

const AppHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <Link to='/'>
                    <div className={classes.logo}></div>
                </Link>
            </div>
        </header>
    );
}

export default AppHeader;