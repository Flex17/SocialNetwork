import React from "react";

import classes from './post.module.css'

const Post = (props) => {
    const onChangeLikesCount = () => {
        const id = props.id
        props.changeLikesCount(id)
    }

    const onDeletePost = () => {
        const id = props.id
        props.deletePost(id)
    }

    return (
        <div className={classes.post} id={props.id}>
            <div className={classes.post_content}>
                <div className={classes.avatar}>{props.img}</div>
                <div className={classes.text}>{props.text}</div>
                <div className={classes.likesCount} onClick={onChangeLikesCount}>
                    <span>{props.likesCount}</span>
                </div>
            </div>
            <div className={classes.delete} id={props.id} onClick={onDeletePost}></div>
        </div>
    )
}

export default Post