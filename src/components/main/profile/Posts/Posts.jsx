import React from "react";
import Post from "./Post/Post";
import TextInput from "./textInput/TextInput";
import SendBtn from "./sendBtn/SendBtn";

import classes from './posts.module.css'

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <TextInput placeholder="Your news..." />
                <SendBtn btnText="Send" />
            </div>
            <div className={classes.block}>
                <Post text="Hello, it's my first post" />
                <Post text="Hi, how are you?" />
            </div>
        </div>
    )
}

export default Posts