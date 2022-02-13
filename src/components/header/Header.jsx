import React from "react";

import classes from './Header.module.css'

const AppHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <div className={classes.logo}></div>
            </div>
        </header>
    );
}

export default AppHeader;