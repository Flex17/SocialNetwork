import React from "react";

import classes from './link.module.css'

const Link = (props) => {
    return (
        <a href='#s' className={classes.item}>{props.value}</a>
    )
}

export default Link