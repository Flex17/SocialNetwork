import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios";
import Posts from './Posts';
import Spinner from '../../../common/Spinner/Spinner';

import {
    updateNewPostText,
    addPost,
    setPosts,
    changeLoadingStatus
} from '../../../redux/posts-reducer';


import classes from './posts.module.css'

const PostsContainer = (props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/data')
            .then(response => {
                props.setPosts(response.data.posts)
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