import React from "react";
import { NavLink } from "react-router-dom";
import classes from './dialogItem.module.css'

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <div className={classes.avatar}></div>
            <NavLink
                to={path}
                className={navData => navData.isActive ? classes.active : classes.dialog_name}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem