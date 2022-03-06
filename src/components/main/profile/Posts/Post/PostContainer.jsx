import React from "react";

import { changeLikesCountActionCreator, deletePostActionCreator } from './../../../../redux/profile-reducer';
import Post from "./Post";

const PostContainer = (props) => {
    const changeLikesCount = (id) => {
        props.store.dispatch(changeLikesCountActionCreator(id))
    }

    const deletePost = (id) => {
        props.store.dispatch(deletePostActionCreator(id))
    }

    return (
        <Post onChangeLikesCount={changeLikesCount} onDeletePost={deletePost} text={props.text} key={props.id} likesCount={props.likesCount} id={props.id} />
    )
}

export default PostContainer