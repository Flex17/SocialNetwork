import React from "react";
import Post from "./Post/Post";

import classes from './posts.module.css'

const Posts = (props) => {

    const postElements =
        props.state.profilePage.posts.map(post => {
            return <Post dispatch={props.dispatch} text={post.message} key={post.id} likesCount={post.likesCount} id={post.id} />
        })

    const newPostInput = React.createRef();

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    const onPostChange = () => {
        const text = newPostInput.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
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