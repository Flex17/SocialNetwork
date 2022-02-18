import React from "react";
import Post from "./Post/Post";
import TextInput from "./textInput/TextInput";
import SendBtn from "./sendBtn/SendBtn";

import classes from './posts.module.css'

const Posts = (props) => {
    const postElements =
        props.state.posts.map(post => {
            return <Post text={post.message} key={post.id} likesCount={post.likesCount} id={post.id} />
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