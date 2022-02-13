import React from "react";

import classes from './detail.module.css'

const Detail = (props) => {
    return (
        <div className={classes.detail}>
            <span className={`${classes.puncts} ${classes.puncts_k}`}>{props.k}: </span>
            <span className={classes.puncts}>{props.value}</span>
        </div>
    )
}

export default Detail