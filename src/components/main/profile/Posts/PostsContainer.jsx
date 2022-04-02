import { connect } from 'react-redux';
import { useEffect } from 'react';
import Posts from './Posts';
import Spinner from '../../../common/Spinner/Spinner';

import { userAPI } from '../../../../api/api';
import {
    updateNewPostText,
    addPost,
    setPosts,
    changeLoadingStatus
} from '../../../redux/posts-reducer';


import classes from './posts.module.css'

const PostsContainer = (props) => {
    useEffect(() => {
        userAPI.getPosts()
            .then(data => {
                props.setPosts(data.posts)
                props.changeLoadingStatus(false)
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
                        updateNewPostText={props.updateNewPostText}
                        addPost={props.addPost}
                    />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const posts = state.posts
    return {
        posts: posts.posts,
        newPostText: posts.newPostText,
        isLoading: posts.isLoading
    }
}

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    setPosts,
    changeLoadingStatus
})(PostsContainer)