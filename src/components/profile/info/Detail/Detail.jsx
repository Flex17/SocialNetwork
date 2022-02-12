import React from "react";

import classes from './detail.module.css'

const Detail = (props) => {
    return (
        <div>
            <span className={`${classes.puncts} ${classes.puncts_k}`}>{props.k}: </span>
            <span className={classes.value}>{props.value}</span>
        </div>
    )
}

export default Detail