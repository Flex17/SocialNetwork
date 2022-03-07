import React from "react";
import StoreContext from "../../../../../store-context";

import { changeLikesCountActionCreator, deletePostActionCreator } from './../../../../redux/profile-reducer';
import Post from "./Post";

const PostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const changeLikesCount = (id) => {
                        store.dispatch(changeLikesCountActionCreator(id))
                    }

                    const deletePost = (id) => {
                        store.dispatch(deletePostActionCreator(id))
                    }
                    return (
                        <Post
                            onChangeLikesCount={changeLikesCount}
                            onDeletePost={deletePost}
                            text={props.text}
                            key={props.id}
                            likesCount={props.likesCount}
                            id={props.id} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostContainer