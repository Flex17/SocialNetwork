import React from "react";
import { NavLink } from "react-router-dom";
import classes from './dialogItem.module.css'

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
        <NavLink
            to={path}
            className={navData => navData.isActive ? classes.active : classes.dialog}>
            {props.name}
        </NavLink>
    )
}

export default DialogItem