import React from "react";
import Post from "./Post/Post";
import TextInput from "./textInput/TextInput";
import SendBtn from "./sendBtn/SendBtn";

import classes from './posts.module.css'

const Posts = () => {
    const postsData = [
        { id: 1, message: 'Hello, it`s my first post', likesCount: '20' },
        { id: 2, message: 'Hi, how are you?', likesCount: '15' }
    ]

    const postElements =
        postsData.map(post => {
            return <Post text={post.message} likesCount={post.likesCount} id={post.id} />
        })

    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <TextInput placeholder="Your news..." />
                <SendBtn btnText="Send" />
            </div>
            <div className={classes.block}>
                {postElements}
            </div>
        </div>
    )
}

export default Posts