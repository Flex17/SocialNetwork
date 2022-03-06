import React from "react";

import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profile-reducer';
import Posts from "./Posts";

const PostsContainer = (props) => {
    const state = props.store.getState().profilePage

    const getPosts = () => {
        return state.posts
    }

    const getNewPostText = () => {
        return state.newPostText
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''))
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <Posts
            onAddPost={addPost}
            onPostChange={updateNewPostText}
            onGetPosts={getPosts}
            onGetNewPostText={getNewPostText}
            store={props.store} />
    )
}

export default PostsContainer