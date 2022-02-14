import React from "react";
import Address from "./address/Address";
import classes from './sidebar.module.css';

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.content}>
                <Address href='/profile' value='Profile' />
                <Address href='/dialogs' value='Messages' />
                <Address href='/news' value='News' />
                <Address href='/music' value='Music' />
                <Address href='/settings' value='Settings' />
            </div>
        </div >
    )
}

export default SideBar