import React from "react";

import classes from './address.module.css'
import { NavLink } from 'react-router-dom';

const Address = (props) => {
    return (
        <NavLink to={props.href} className={(navData) => navData.isActive ? classes.active : classes.item}>{props.value}</NavLink>
    )
}

export default Address