import { connect } from 'react-redux';
import Post from "./Post";

import {
    changeLikesCount,
    deletePost
} from '../../../../redux/posts-reducer';

const mapStateToProps = (state) => {
    return {}
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onChangeLikesCount: (id) => {
//             dispatch(changeLikesCountActionCreator(id))
//         },
//         onDeletePost: (id) => {
//             dispatch(deletePostActionCreator(id))
//         }
//     }
// }

// const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

const PostContainer = connect(mapStateToProps, {
    changeLikesCount,
    deletePost
})(Post)

export default PostContainer