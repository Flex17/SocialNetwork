import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios";
import Posts from './Posts';
import Spinner from '../../../common/Spinner/Spinner';

import {
    updateNewPostTextActionCreator,
    addPostActionCreator,
    setPostsActionCreator,
    changeLoadingStatusActionCreator
} from './../../../redux/profile-reducer';


import classes from './posts.module.css'

const PostsContainer = (props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/data')
            .then(response => {
                props.onSetPosts(response.data.posts)
                props.onChangeLoadingStatus(false)
            })
            .catch(error => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.wrapper}>
            {
                props.isLoading ?
                    <Spinner />
                    :
                    <Posts
                        posts={props.posts}
                        newPostText={props.newPostText}
                        onPostChange={props.onPostChange}
                        onAddPost={props.onAddPost}
                    />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const profilePage = state.profilePage
    return {
        posts: profilePage.posts,
        newPostText: profilePage.newPostText,
        isLoading: profilePage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            const addPostAction = addPostActionCreator()
            const updateNewPostTextAction = updateNewPostTextActionCreator('')

            dispatch(addPostAction);
            dispatch(updateNewPostTextAction)
        },
        onPostChange: (text) => {
            const updateNewPostTextAction = updateNewPostTextActionCreator(text)

            dispatch(updateNewPostTextAction)
        },
        onSetPosts: (posts) => {
            const setPostsAction = setPostsActionCreator(posts)

            dispatch(setPostsAction)
        },
        onChangeLoadingStatus: (isLoading) => {
            const changeLoadingAction = changeLoadingStatusActionCreator(isLoading)

            dispatch(changeLoadingAction)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)