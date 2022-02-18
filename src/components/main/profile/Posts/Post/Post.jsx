import React from "react";

import classes from './post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>{props.img}</div>
            <div className={classes.Text}>{props.text}</div>
            <div className={classes.likesCount}>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post