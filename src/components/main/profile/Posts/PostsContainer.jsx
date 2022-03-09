import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profile-reducer';
import Posts from "./Posts";
import { connect } from 'react-redux';

// const PostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().profilePage

//                     const getPosts = () => {
//                         return state.posts
//                     }

//                     const getNewPostText = () => {
//                         return state.newPostText
//                     }

//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                         store.dispatch(updateNewPostTextActionCreator(''))
//                     }

//                     const updateNewPostText = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }

//                     return (
//                         <Posts
//                             onAddPost={addPost}
//                             onPostChange={updateNewPostText}
//                             onGetPosts={getPosts}
//                             onGetNewPostText={getNewPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer