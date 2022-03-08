import React from "react";
import PostContainer from "./Post/PostContainer";

import classes from './posts.module.css'

const Posts = (props) => {
    const postElements =
        props.posts.map(post => {
            return <PostContainer text={post.message} key={post.id} likesCount={post.likesCount} id={post.id} />
        })

    const addPost = () => {
        props.onAddPost()
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        props.onPostChange(text)
    }

    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <input
                    onChange={onPostChange}
                    value={props.newPostText}
                    className={classes.input}
                    placeholder='Your news...' />
                <button
                    onClick={addPost}
                    className={classes.btn}>Add post</button>
            </div>
            <div className={classes.block}>
                {postElements}
            </div>
        </div>
    )
}

export default Posts