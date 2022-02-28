import React from "react";
import { addPostActionCreator } from "../../../redux/state";
import Post from "./Post/Post";

import classes from './posts.module.css'
import { updateNewPostTextActionCreator } from './../../../redux/state';

const Posts = (props) => {

    const postElements =
        props.state.profilePage.posts.map(post => {
            return <Post dispatch={props.dispatch} text={post.message} key={post.id} likesCount={post.likesCount} id={post.id} />
        })

    const newPostInput = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        const text = newPostInput.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.posts}>
            <div className={classes.title}>My Posts</div>
            <div className={classes.write}>
                <input
                    onChange={onPostChange}
                    value={props.state.profilePage.newPostText}
                    ref={newPostInput}
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