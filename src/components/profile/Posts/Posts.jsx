import React from "react";
import Post from "./Post/Post";

import classes from './posts.module.css'

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <input className={classes.input} placeholder="Your-news..." />
                <button className={classes.sendBtn}>Send</button>
            </div>
            <div className={classes.block}>
                <Post text="Hello, it's my first post" />
                <Post text="Hi, how are you?" />
            </div>
        </div>
    )
}

export default Posts