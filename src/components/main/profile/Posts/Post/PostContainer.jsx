import { changeLikesCountActionCreator, deletePostActionCreator } from './../../../../redux/profile-reducer';
import Post from "./Post";
import { connect } from 'react-redux';

// const PostContainer = (props) => {
// return (
// <StoreContext.Consumer>
//     {
//         (store) => {
//             const changeLikesCount = (id) => {
//                 store.dispatch(changeLikesCountActionCreator(id))
//             }

//             const deletePost = (id) => {
//                 store.dispatch(deletePostActionCreator(id))
//             }
//             return (
//                 <Post
//                     onChangeLikesCount={changeLikesCount}
//                     onDeletePost={deletePost}
//                     text={props.text}
//                     key={props.id}
//                     likesCount={props.likesCount}
//                     id={props.id} />
//             )
//         }
//     }
// </StoreContext.Consumer>
// )
// }

// const PostContainer = (props) => {
//     return (
//         <Post text={props.text} key={props.key} id={props.id} likesCount={props.likesCount} />
//     )
// }

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLikesCount: (id) => {
            dispatch(changeLikesCountActionCreator(id))
        },
        onDeletePost: (id) => {
            dispatch(deletePostActionCreator(id))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer