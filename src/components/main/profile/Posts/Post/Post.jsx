import React from "react";
import { deletePosttActionCreator } from "../../../../redux/state";

import classes from './post.module.css'
import { changeLikesCountActionCreator } from './../../../../redux/state';

const Post = (props) => {
    const changeLikesCount = () => {
        const id = props.id
        props.dispatch(changeLikesCountActionCreator(id))
    }

    const deletePost = () => {
        const id = props.id
        props.dispatch(deletePosttActionCreator(id))
    }

    return (
        <div className={classes.post} id={props.id}>
            <div className={classes.post_content}>
                <div className={classes.avatar}>{props.img}</div>
                <div className={classes.text}>{props.text}</div>
                <div className={classes.likesCount} onClick={changeLikesCount}>
                    <span>{props.likesCount}</span>
                </div>
            </div>
            <div className={classes.delete} id={props.id} onClick={deletePost}></div>
        </div>
    )
}

export default Post