import React from "react";
import Link from "./link/Link";
import classes from './Sidebar.module.css'

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.content}>
                <Link value='Profile' />
                <Link value='Messages' />
                <Link value='News' />
                <Link value='Music' />
                <Link value='Settings' />
            </div>
        </div >
    )
}

export default SideBar