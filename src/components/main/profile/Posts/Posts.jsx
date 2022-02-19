import React from "react";
import Post from "./Post/Post";

import classes from './posts.module.css'

const Posts = (props) => {
    const postElements =
        props.state.posts.map(post => {
            return <Post text={post.message} key={post.id} likesCount={post.likesCount} id={post.id} />
        })

    const newPostInput = React.createRef();

    const addPost = () => {
        const text = newPostInput.current.value;
        props.addPost(text);
        newPostInput.current.value = ''
    }

    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <input ref={newPostInput} className={classes.input} placeholder='Your news...' />
                <button onClick={addPost} className={classes.btn}>Add post</button>
            </div>
            <div className={classes.block}>
                {postElements}
            </div>
        </div>
    )
}

export default Posts