import { updateNewPostTextActionCreator, addPostActionCreator, setPostsActionCreator } from './../../../redux/profile-reducer';
import Posts from "./Posts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const profilePage = state.profilePage
    return {
        posts: profilePage.posts,
        newPostText: profilePage.newPostText
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
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer