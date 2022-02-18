import React from "react";

import classes from './friend.module.css'

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.avatar}></div>
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}

export default Friend