import React from "react";
import StoreContext from "../../../../store-context";

import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profile-reducer';
import Posts from "./Posts";

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage

                    const getPosts = () => {
                        return state.posts
                    }

                    const getNewPostText = () => {
                        return state.newPostText
                    }

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(''))
                    }

                    const updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return (
                        <Posts
                            onAddPost={addPost}
                            onPostChange={updateNewPostText}
                            onGetPosts={getPosts}
                            onGetNewPostText={getNewPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer