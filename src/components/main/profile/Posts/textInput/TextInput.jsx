import React from "react";

import classes from './textInput.module.css'

const TextInput = (props) => {
    return (
        <input className={classes.input} placeholder={props.placeholder} />
    )
}

export default TextInput