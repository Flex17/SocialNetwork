import { connect } from 'react-redux';
import Post from "./Post";

import {
    changeLikesCountActionCreator,
    deletePostActionCreator
} from './../../../../redux/profile-reducer';

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