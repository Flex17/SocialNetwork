import React from "react";

import classes from './sendBtn.module.css'

const SendBtn = (props) => {
    return (
        <button className={classes.btn}>{props.btnText}</button>
    )
}

export default SendBtn